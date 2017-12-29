(ns client.ui
  (:require
   [cljs.core.async :as async :refer [<! >! chan] :refer-macros [go]]
   [rum.core :as rum]
   [ajax.core :refer [GET]]
   [cljs.spec.alpha :as s]
   [goog.string :as gstring]
   [goog.string.format]
   ;; [cljss.core :as cljss :refer-macros [defstyles]]
   [cljs.core.async :as async :refer [<! >! chan] :refer-macros [go]]
   [rum.core :as rum]
   [react]
   [clojure.string :as string]
   [clojure.set :as set]
   [clojure.walk :as w]
   [sablono.util]
   ["react-router-dom/index" :as router]
   [stylefy.core :as stylefy]))

(stylefy/init)

(defn rumify [react-class & args]
  (let [[opts children] (if (map? (first args))
                          [(first args) (rest args)]
                          [{} args])
        interpret (fn [comp]
                    (if (vector? comp)
                      (sablono.interpreter/interpret comp)
                      comp))

        children (map interpret children)]

    (apply js/React.createElement react-class
           (clj->js (sablono.util/html-to-dom-attrs opts)) children)))

(defn reactify [rum-comp]
  (-> rum-comp meta :rum/class))

(stylefy/font-face
 {:font-family "Fira Code"
  :font-style "normal"
  :font-weight 400
  :src "url('/fonts/FiraCode-Regular.woff2') format('woff2')"})

(stylefy/font-face
 {:font-family "Fira Code"
  :font-style "normal"
  :font-weight "light"
  :src "url('/fonts/FiraCode-Light.woff2') format('woff2')"})

(stylefy/tag "body" {:margin 0
                     :font-family "Fira Code"
                     :color "rgba(0,0,0,0.8)"})

(def Router (partial rumify router/HashRouter))
(def Route (partial rumify router/Route))
(def Switch (partial rumify router/Switch))
(def Redirect (partial rumify router/Redirect))
(def Link (partial rumify router/Link))

(def s-flex
  {:display "flex"})

(def s-center
  (merge  s-flex
          {:align-items "center"
           :justify-content "center"}))

(defn with-style [style & rest]
  (let [cursor (take-while keyword? rest)
        maps (drop-while keyword? rest)
        style-map (if (empty? cursor)
                    (stylefy/use-style style)
                    (apply stylefy/use-sub-style (cons style cursor)))]
    (apply merge (cons style-map maps))))

(defn inline-component [func]
  (fn [& args]
    (let [args (map #(js->clj % :keywordize-keys true) args)]
      (sablono.interpreter/interpret (apply func args)))))

(defn bypass-cors [url]
  (str "https://cors-cpivrgrkxw.now.sh/" url))

(defn get-value-from-input-event [e]
  (-> e .-target .-value))

(def luno-btc-zar (atom 200000))
(def quoinex-btc-usd (atom 10000))
(def bitstamp-btc-usd (atom 10000))
(def coinbase-btc-eur (atom 10000))

(def zar-starting (atom 100000))
(def zar-usd (atom 1))
(def zar-eur (atom 1))

(defn format [x]
  (gstring/format "%.2f" x))

(defn update-luno-btc-zar []
  (GET (bypass-cors "https://api.mybitx.com/api/1/ticker?pair=XBTZAR")
    :handler (fn [{x "last_trade"}]
               (reset! luno-btc-zar x))))

(defn update-quoinex-btc-usd []
  (GET (bypass-cors "https://api.quoine.com/products/1")
    :handler (fn [{price "market_bid"}]
               (reset! quoinex-btc-usd price))))

(defn update-bitstamp-btc-usd 		[]
  (GET (bypass-cors "https://www.bitstamp.net/api/v2/ticker/btcusd/")
    :handler (fn [{x "last"}]
               (reset! bitstamp-btc-usd x))))

(defn update-coinbase-btc-eur []
  (GET "https://api.coinbase.com/v2/exchange-rates?currency=BTC"
    :handler (fn [{{{rate "EUR"} "rates"} "data"}]
               (reset! coinbase-btc-eur (js/parseInt rate)))))

(defn update-zar-eur []
  (GET (bypass-cors "https://api.fixer.io/latest?base=EUR")
    :handler (fn [{{zar "ZAR"} "rates"}]
               (reset! zar-eur zar))))

(defn update-zar-usd []
  (GET (bypass-cors "https://api.fixer.io/latest?base=USD")
    :handler (fn [{{zar "ZAR"} "rates"}]
               (reset! zar-usd zar))))

(rum/defc bound-input < rum/reactive [atom']
  [:input {:type "text" :value (rum/react atom') :on-change #(reset! atom' (get-value-from-input-event %))}])

(defn connected-input [label atom' update-fn]
  [:div (with-style {:padding-bottom "5px"})
   [:div label]
   (bound-input atom')
   [:button (with-style {:padding-left "5px"} {:on-click update-fn}) "update"]])

(defn refresh-all []
  (update-luno-btc-zar)
  (update-bitstamp-btc-usd)
  (update-quoinex-btc-usd)
  (update-coinbase-btc-eur)
  (update-zar-usd)
  (update-zar-eur))

(refresh-all)

(def arbitrage-log
  '({:kind :deposit
     :time 1
     :account :alexis
     :amount 103500}

    {:kind :deposit
     :time 1
     :account :dylan
     :amount 23296.5}

    {:kind :deposit
     :time 1
     :account :sharon
     :amount 600}

    {:kind :forex
     :time 1
     :pair [:zar :eur]
     :quoted-rate 15.34
     :amount-sent 103500
     :amount-received 1033}

    {:kind :exchange-deposit
     :time 1
     :exchange :cubits
     :currency :eur
     :swift-fee 200
     :fees '({:description :deposit-fee
              :amount 16}
             {:description :swift-fee
              :amount 150}
             {:description :swift-commission
              :amount 150})
     :amount-sent 103500
     :amount-received 100}

    {:kind :buy-bitcoin
     :time 1
     :exchange :cubits
     :currency :eur
     :amount-sent 200
     :amount-received 200
     :effective-rate 1.1}

    {:kind :transfer-bitcoin
     :time 1
     :from :cubits
     :to :luno
     :amount-sent 234234
     :amount-recieved 2
     :time-recieved 1}

    {:kind :sell-bitcoin
     :time 1
     :exchange :luno
     :currency :zar
     :amount-sent 200
     :amount-received 200
     :effective-rate 1.1}

    {:kind :exchange-withdrawal
     :time 1
     :exchange :luno
     :currency :zar
     :fees '({:description :withdrawal-fee
              :amount 8.5})
     :amount-sent 142471.13
     :amount-received 142462.63}

    {:kind :withdrawal
     :time 1
     :account :alexis
     :amount 5000}

    {:kind :deposit
     :time 1
     :account :alexis
     :amount 1000}))

(defn make-empty-ledger []
  {:fees-outstanding 0
	 :accounts {}
   :history {}})

(defn transact-on-account [{:keys [amount kind] account-key :account :as event} ledger]
  (let [ledger (update ledger :accounts
                       (fn [{account account-key :as accounts}]
                         (let [accounts (if (nil? account)
                                          (assoc accounts account-key {:balance 0
																																			 :deposited 0
																																			 :withdrawn 0
                                                                       :history '()})
                                          accounts)
                               {{:keys [balance history deposited withdrawn] :as account} account-key} accounts
                               balance (if (or (= kind :deposit) (= kind :profit-deposit))
                                         (+ balance amount)
                                         (- balance amount))

                               deposited (cond
																					 (= kind :deposit) (+ deposited amount)
																					 :else deposited)

                               withdrawn (cond
																					 (= kind :withdrawn) (+ withdrawn amount)
																					 :else withdrawn)

                               history (cons event history)
                               account (assoc account :balance balance :history history :deposited deposited :withdrawn withdrawn)
                               accounts (assoc accounts account-key account)]
                           accounts)))
        ledger (update ledger :history (partial cons event))]
    ledger))

(defn get-total-assets [{accounts :accounts}]
  (let [balances (for [[_ {balance :balance}] accounts]
                   balance)]
    (reduce + balances)))

(defmulti process-event
  (fn [_ {kind :kind}]
    kind))

(defn add-event-to-history [ledger event]
  (update ledger :history (partial cons event)))

(defmethod process-event :withdrawal [ledger event]
  (transact-on-account event ledger))

(defmethod process-event :deposit [ledger event]
  (transact-on-account event ledger))

(defmethod process-event :profit-deposit [ledger event]
  (transact-on-account event ledger))

(defmethod process-event :default [ledger event]
  (add-event-to-history ledger event))

(defmethod process-event :exchange-withdrawal [{:keys [accounts fees-outstanding] :as ledger} {:keys [time amount-received] :as event}]
  (let [total-assets (get-total-assets ledger)
        ledger (add-event-to-history ledger event)
        ledger (reduce
                (fn [ledger [account-name {:keys [balance] :as account}]]
                  (let [share-ratio (/ balance total-assets)
                        profit-for-account (* share-ratio (- amount-received fees-outstanding total-assets))
                        event	{:kind :profit-deposit
                               :time time
                               :account account-name
                               :amount profit-for-account}
												ledger (assoc ledger :fees-outstanding 0)
                        ledger (transact-on-account event ledger)]
                    ledger))
                ledger
                accounts)]
    ledger))

(defmethod process-event :exchange-deposit [{:keys [accounts] :as ledger} {:keys [fees] :as event}]
	(update ledger :fees-outstanding (partial + (->> fees
																						(filter (fn [{:keys [description amount]}]
																											(or
																											 (= description :swift-fee)
																											 (= description :swift-commission))) )
																						(reduce +)))))


(defn process-events [ledger events]
  (reduce process-event ledger events))

;; (process-event (make-empty-ledger) (first arbitrage-log))
(defn get-profits [{accounts :accounts :as ledger} account-key]
	(let [{{:keys [withdrawn deposited balance]} account-key} accounts]
		(-> balance
				(- deposited)
				(+ withdrawn))))

(def ledger
	(process-events (make-empty-ledger)  arbitrage-log))

(rum/defc arbitrage-tracker < rum/reactive []
  (let [get-arbitrage-potential
        (fn [zar-cur btc-cur]
          (let [cur-after-forex  (/ (rum/react zar-starting) zar-cur)
                swift-fee (/ 110 zar-cur)
                swift-commission (* 0.0055 cur-after-forex)
                swift-commission (let [min-fee (/ 150 zar-cur)
                                       max-fee (/ 650 zar-cur)]
                                   (cond
                                     (< swift-commission min-fee) min-fee
                                     (> swift-commission max-fee) max-fee
                                     :else swift-commission))
                cur-after-swift (- cur-after-forex (* 0.0055 cur-after-forex) (/ 110 zar-cur))
                btc-after-forex (/ cur-after-swift btc-cur)
                zar-ending (* btc-after-forex (rum/react luno-btc-zar))
                arbitrage-percentage (- (* 100 (/ zar-ending (rum/react zar-starting))) 100)]
            [arbitrage-percentage (- zar-ending (rum/react zar-starting))]))]
    [:div {:style {:display "flex" :flex-wrap "wrap"}}

     [:div (with-style {:display "flex"
												:flex-direction "column"
												:align-items "flex-start"
												:padding "20px"
												})
      (let [[percentage profit] (get-arbitrage-potential (rum/react zar-usd) (rum/react bitstamp-btc-usd))]
        [:div (with-style {:font-weight 800}) "USD - Bitstamp " (format percentage) "%"])

      (let [[percentage profit] (get-arbitrage-potential (rum/react zar-usd) (rum/react quoinex-btc-usd))]
        [:div (with-style {:font-weight 800}) "USD - Quoinex " (format percentage) "%"])

      (let [[percentage profit] (get-arbitrage-potential (rum/react zar-eur) (rum/react coinbase-btc-eur))]
        [:div (with-style {:font-weight 800}) "EUR - Coinbase " (format percentage) "%"])


			[:div (with-style {:display "flex"
												 :width "100%"
												 :flex-direction "column"
												 :padding-top "10px"
												 })


			 (connected-input "ZAR starting" zar-starting #())
			 (connected-input "Luno - BTC/ZAR" luno-btc-zar update-luno-btc-zar)
			 (connected-input "Bitstamp - BTC/USD" bitstamp-btc-usd update-bitstamp-btc-usd)
			 (connected-input "Coinbase - BTC/EUR" coinbase-btc-eur update-coinbase-btc-eur)
			 (connected-input "Quoinex - BTC/USD" quoinex-btc-usd update-quoinex-btc-usd)
			 (connected-input "ZAR/USD" zar-usd update-zar-usd)
			 (connected-input "ZAR/EUR" zar-eur update-zar-eur)

			 [:button (with-style {:padding "5px"
														 :padding-top "10px"
														 :text-align "left"} {:on-click refresh-all}) "refresh all"]

			]]]))


(rum/defc investment [{{path :path} :match :as x}]
  (let [s-inv (merge s-flex
                             {:flex-direction "column"
                              :width "100%"
															:padding "5px"
                              ;; :border-style "solid"
															})
				s-inv-1 {:display "flex"
								 :justify-content "space-around"
								 :width "100%"}

				s-inv-2 {:display "flex"
								 :flex-wrap "wrap"
								 :padding "5px"
								 ;; :justify-content "space-around"
								 }

        personal-holdings (fn [full-name account-key]
														(let [{{{:keys [balance withdrawn deposited history]} account-key} :accounts} ledger
																	profits (get-profits ledger account-key)
																	total-deposits-with-profits (+ balance withdrawn)
																	asset-growth (* 100 (- (/ total-deposits-with-profits deposited) 1))]
															[:div (with-style {:padding "5px"
																								 :border-style "none"})
															 [:h2 full-name]
															 [:div (with-style {:padding "5px"})
																[:h4 "Assets: R" (format balance)]
																[:h4 "Deposited: R" (format deposited)]
																[:h4 "Withdrawn: R" (format withdrawn)]
																[:h4 "Profit: R" (format profits)]
																[:h4 "Growth: " (format asset-growth) "%"]

																(for [{:keys [time amount kind] :as event} history]
																	[:div (with-style {:padding-left "5px"
																										 :padding-bottom "5px"
																										 :font-size "12px"} {:key (hash event)})
																	 (str time " ") (str kind " ") (str "R" (format amount))])]
															 ]))]

    [:div (with-style s-inv)
     [:div (with-style s-inv-1)]
     [:div (with-style s-inv-2)
      (Route {:path (str path "/dylan")
              :component (inline-component #(personal-holdings "Dylan Vorster" :dylan))})
      (Route {:path (str path "/alexis")
              :component (inline-component #(personal-holdings "Alexis Vincent" :alexis))})
      (Route {:path (str path "/alexis")
              :component (inline-component #(personal-holdings "Alexis Vincent" :alexis))})
      (Route {:path (str path "/sharon")
              :component (inline-component #(personal-holdings "Sharon Vincent" :sharon))})]]))

(rum/defc root < rum/reactive []
  (Router
   [:div (with-style {:display "flex"
                      :flex-direction "column"
                      :justify-content "center"
											})
    (Route {:path "/" :exact true :component (inline-component
																							(fn []
																								[:h1 "alexisvincent.io"]))})

    (Route {:path "/accounts" :component #(investment (js->clj % :keywordize-keys true))})
    (Route {:path "/arbitrage" :component #(arbitrage-tracker (js->clj %))})]))
