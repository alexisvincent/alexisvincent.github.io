(ns app.luno.api
  (:require
   [clojure.core.async :as a :refer [go >! <! chan]]
   [ajax.core :refer [GET POST DELETE PUT]]
   [camel-snake-kebab.core :as kebab]
   [camel-snake-kebab.extras :as kebab-extras]
   [aleph.http :as http]
   [clojure.data.json :as json]
   [manifold.stream :as s]
   [clojure.walk :as walk])

  (:import java.util.Base64))

(defn encode [to-encode]
  (.encodeToString (Base64/getEncoder) (.getBytes to-encode)))

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
;; (get-funding-account :XBT :address "1HXJFQqCWs5cRUMCk35sQKgAknSCENqF5Y")

(go
  (let [[success {order-id :order-id}] (<! (post-order! [:XBT :ZAR] :BID  0.0005 1000))
        x (<! (get-order order-id))]
        ;; [success x] (<! (stop-order! order-id))]
    (println success " " order-id x)))




(def handshake-data
  (json/write-str {:api_key_id api-key-id
                   :api_key_secret api-key-secret}))

;; (defn make-stream! [pair]
;;   (let [socket @(http/websocket-client (str "wss://ws.luno.com/api/1/stream/" (pair->str pair)))]
;;     @(s/put! socket handshake-data)
;;     socket))

;; (def socket (make-stream! [:XBT :ZAR]))

;; @(s/take! socket)

;; (println @(s/put!))
;; (post-order! [:XBT :ZAR] :BID 0.0005 1000)

;; (stop-order! "BXD489ZFQMT3TG6")
