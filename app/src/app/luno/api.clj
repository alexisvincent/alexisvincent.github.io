(ns app.luno.api
  (:require
   [clojure.core.async :as a :refer [go >! <! chan]]
   [ajax.core :refer [GET POST DELETE PUT]]
   [camel-snake-kebab.core :as kebab]
   [camel-snake-kebab.extras :as kebab-extras]
   [aleph.http :as http]
   [clojure.data :as data]
   [manifold.stream :as m]
   [com.rpl.specter :as s :refer :all]
   [clojure.data.json :as json]
   [clojure.walk :as walk])

  (:import java.util.Base64))

(defn encode [to-encode]
  (.encodeToString (Base64/getEncoder) (.getBytes to-encode)))

(def api-key-id "dpr4bfd234mz3")
(def api-key-secret "GX_Sb-F-YbkN75US_STBssWTynMhQrg5KIrZlhcAqFk")

(def api-key (str api-key-id ":" api-key-secret))

(def encoded-api-key (encode api-key))

(def luno-api-address (str "https://api.mybitx.com/api/1/"))

(defn a-request [method & args]
  (let [c (chan)]
    (apply method
           (concat args [:headers {"Authorization" (str "Basic " encoded-api-key)}
                         :handler #(go (>! c [true %]))
                         :error-handler #(go (>! c [false %]))]))
    c))

(defn request [method url & args]
  (let [c (apply a-request method (str luno-api-address url) :format :raw args)]
    (a/map (fn [[success {error "error" :as res-1} :as res-2]]
             (let [res-1 (kebab-extras/transform-keys kebab/->kebab-case-keyword res-1)]
               (println res-1)
               (if (and success  (nil? error))
                 [true res-1]
                 [false res-1])))
           [c])))

(defmacro map-from-vars [vars]
  (into {} (for [v vars]
             [(kebab/->snake_case_string v) `(str ~v)])))

(defn pair->str [[cur-1 cur-2]]
  (str (name cur-1) (name cur-2)))

(defn get-ticker [pair]
  (request GET "ticker" :params {:pair (pair->str pair)}))

(defn get-tickers []
  (request GET "tickers"))

(defn get-orderbook [pair]
  (request GET "orderbook" :params {:pair (pair->str pair)}))

(defn get-public-trades [pair & {:keys [since]}]
  (request GET "trades" :params (merge (map-from-vars [since])
                                       {:pair (pair->str pair)})))

(defn create-account! [currency name']
  "Create an additional account for the specified currency.

	currency	string	required - The currency code for the account you want to create e.g. XBT, IDR, MYR, ZAR
  name string	required	   - The label to use for this account e.g. \"Trading ACC\".

	You must be verified to trade currency in order to be able to create an account. A user has a limit of 4 accounts per currency."
  (request POST "accounts" :params {:currency (name currency)
                                    :name name'}))

(defn get-transactions [id & {:keys [min-row max-row]}]
  (request GET (str "accounts/" id "/transactions") :params (map-from-vars [min-row max-row])))

(defn get-pending-transactions [id]
  (request GET (str "accounts/" id "/pending")))

(defn get-balance []
  (request GET "balance"))

(defn get-private-orders [& {:keys [pair state] :or {pair "" state ""}}]
  (request GET "listorders" :params {:pair (pair->str pair)
                                     :state (name state)}))

(defn get-order [id]
  (request GET (str "orders/" id)))

(defn post-order! [pair type volume price & {:keys [base-account-id counter-account-id]}]
  (request POST "postorder" :params
           (merge (map-from-vars [price base-account-id counter-account-id])
                  {:pair (pair->str pair)
                   :type (name type)
                   :volume (format "%.6f" volume)})))

(defn post-market-order! [pair type & {:keys [counter-volume base-volume base-account-id counter-account-id]}]
  (request POST "marketorder" :params
           (merge (map-from-vars [base-account-id counter-account-id])
                  {:pair (pair->str pair)
                   :type (name type)
                   :counter-volume (format "%.6f" counter-volume)
                   :base-volume (format "%.6f" base-volume)})))

(defn stop-order! [order-id]
  (request POST "stoporder" :params (map-from-vars [order-id])))

(defn get-private-trades [pair & {:keys [since limit]}]
  (request GET "listtrades" :params
           (merge (map-from-vars [since limit])
                  {:pair (pair->str pair)})))

(defn get-fee-info [pair]
  (request GET "fee_info" :params {:pair (pair->str pair)}))

(defn get-funding-account [asset & {:keys [address]}]
  (request GET "funding_address" :params (merge (map-from-vars [address])
                                                {:asset (name asset)})))

(defn create-funding-account! [asset]
  (request POST "funding_address" :params (merge (map-from-vars [])
                                                 {:asset (name asset)})))

(defn get-withdrawals []
  (request GET "withdrawals"))

(defn request-withdrawal! [amount & {:keys [type beneficiary-id] :or {type :ZAR_EFT}}]
  (request POST "withdrawals" :params (merge (map-from-vars [amount beneficiary-id])
                                             {:type (name type)})))

(defn get-withdrawal-status [id]
  (request GET (str "withdrawals/" id)))

(defn cancel-withdrawal! [id]
  (request DELETE (str "withdrawals/" id)))

(defn send-currency! [amount currency address & {:keys [description message]}]
  (request POST "send" :params (merge (map-from-vars [amount address description message])
                                      {:currency (name currency)})))

(defn create-quote! [type base-amount pair]
  (request POST "quotes" :params {:base_amount (format "%.6f" base-amount)
                                  :pair (pair->str pair)
                                  :type (name type)}))

(defn get-quote [id]
  (request GET (str "quotes/" id)))

(defn excercise-quote! [id]
  (request PUT (str "quotes/" id)))

(defn discard-quote! [id]
  (request DELETE (str "quotes/" id)))

(def handshake-data
  (json/write-str {:api_key_id api-key-id
                   :api_key_secret api-key-secret}))

(defn make-stream! [pair]
  (let [stream @(http/websocket-client (str "wss://ws.luno.com/api/1/stream/" (pair->str pair)) {:max-frame-payload 1000000})]
    (m/put! stream handshake-data)
    stream))

(def log (atom '()))
(def ledger (atom {}))

(defn process-trade-event [ledger {:keys [id base] :as event}]
  (as-> ledger $
    (transform [(multi-path :asks :bids) (must id)  :volume] #(- % base) $)
    (transform [(multi-path :asks :bids) (must id) (compact (if-path [:volume (pred<= 0)] STAY STOP))] NONE $)
    (setval [:trades BEFORE-ELEM] event $)))


(defn process-create-event [ledger {:keys [type id] :as event}]
  (transform [(if (= type :BID) :bids :asks)] #(assoc % id event) ledger))

(defn process-delete-event [ledger {event-id :id :as event}]
    (setval [(multi-path :asks :bids) event-id] NONE ledger))

(defn ledger-from-initial-event [{:keys [asks bids sequence trades]}]
  (as-> {:bids {} :asks {} :trades '() :sequence sequence} $
                                      ; trades must come before the others so we don't falsely update them
    (reduce process-trade-event $ trades)
    (reduce process-create-event $ asks)))

(defn update-ledger [ledger event]
  (cond
    (keyword? event)
    ledger

    (string? event)
    ledger

    (contains? event :asks)
    (ledger-from-initial-event event)

    (= (:sequence event)
       (inc (:sequence ledger)))
    (let [{event-seq :sequence :keys [trade-updates create-update delete-update]} event]
      (as-> ledger $
        (assoc $ :sequence event-seq)

        (if-not (nil? create-update)
          (process-create-event $ create-update)
          $)
        (if-not (nil? trade-updates)
          (reduce process-trade-event $ trade-updates)
          $)
        (if-not (nil? delete-update)
          (process-delete-event $ delete-update)
          $)))


    :else
    ledger))

(def ALL-NODES
  (comp-paths (recursive-path [] p
                              (cond-path
                               vector? (stay-then-continue ALL p)
                               map? (stay-then-continue MAP-VALS p)))))

(defn coerce-event [event]
  (if-not (string? event)
    event
    (as-> (json/read-json event) $
      (transform [ALL-NODES map? MAP-KEYS] kebab/->kebab-case-keyword $)
      (transform [ALL-NODES map? MAP-KEYS (pred= :order-id)] (constantly :id) $)
      (transform [ALL-NODES map? (multi-path (must :price) (must :volume) (must :sequence) (must :base) (must :counter))] read-string $)
      (transform [ALL-NODES map? (multi-path (must :type) (must :id))] keyword $))))

(declare stream)

(defn disconnect-stream! []
  (m/close! stream))

(defn connect-stream! []
  (future
    (when-not (= clojure.lang.Var$Unbound  (type stream))
      (disconnect-stream!))
    (def stream (make-stream! [:XBT :ZAR]))
    (swap! log (constantly '()))
    (swap! ledger (constantly {:sequence 0}))

    (while (not (m/closed? stream))
      (let [event (coerce-event @(m/try-take! stream :drained 5000 :timeout))]

        (swap! log  (partial cons event))
        (swap! ledger update-ledger event)))))

;; (remove-watch ledger :log)

;; (add-watch ledger :log (fn [_ _ old new]
;;                          (println (data/diff old new))))

;; (go (println (<! (post-order! [:XBT :ZAR] :BID 0.005 1000))))

;; (:trades @ledger)

;; (connect-stream!)

;; (disconnect-stream!)
