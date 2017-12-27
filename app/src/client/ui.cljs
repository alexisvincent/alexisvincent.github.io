(ns client.ui
  (:require
   [cljs.core.async :as async :refer [<! >! chan] :refer-macros [go]]
   [rum.core :as rum]
   [ajax.core :refer [GET]]
   [cljs.spec.alpha :as s]
	 [goog.string :as gstring]
	 [goog.string.format]
   ;; [cljss.core :as cljss :refer-macros [defstyles]]
	 ))

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
  [:div
   [:div label]
   (bound-input atom')
   [:button {:on-click update-fn} "update"]])

(defn refresh-all []
  (update-luno-btc-zar)
  (update-bitstamp-btc-usd)
  (update-quoinex-btc-usd)
  (update-coinbase-btc-eur)
  (update-zar-usd)
  (update-zar-eur))

(refresh-all)


(rum/defc investment []
	(let [dylan-investment 22500
				alexis-investment 103500
				sharon-investment 600
				balance-1 (+ alexis-investment dylan-investment sharon-investment)
				dylan-percentage (/ dylan-investment balance-1)
				alexis-percentage (/ alexis-investment balance-1)
				sharon-percentage (/ sharon-investment balance-1)
				balance-last balance-1
				profit (- balance-last balance-1)
				growth (format (* 100 (- (/ balance-last balance-1) 1)))
				]
		[:div {:style {:border-style "solid"}}
		 [:h2 "R" balance-last " ( R" profit " profit @" growth "% )"]

		 [:div {:style {:border-style "dotted"}}
			[:h3 "Alexis Vincent"]
			[:h4 "Total Assets R" (format  (* alexis-percentage balance-last))]
			[:h4 "Total Profits R" (format (* alexis-percentage profit))]]

		 [:div {:style {:border-style "dotted"}}
			[:h3 "Sharon Vincent"]
			[:h4 "Total Assets R" (format (* sharon-percentage balance-last))]
			[:h4 "Total Profits R" (format (* sharon-percentage profit))]]

		 [:div {:style {:border-style "dotted"}}
			[:h3 "Dylan Vorster"]
			[:h4 "Total Assets R" (format (* dylan-percentage balance-last))]
			[:h4 "Total Profits R" (format (* dylan-percentage profit))]]
		 ]))

(rum/defc root < rum/reactive []

  (let [get-arbitrage-potential
        (fn [zar-cur btc-cur]
          (let [cur-after-forex (/ (rum/react zar-starting) zar-cur)
                btc-after-forex (/ cur-after-forex btc-cur)
                zar-ending (* btc-after-forex (rum/react luno-btc-zar))
                arbitrage-percentage (- (* 100 (/ zar-ending (rum/react zar-starting))) 100)]
            [arbitrage-percentage (- zar-ending (rum/react zar-starting))]))]

    [:div

		 [:div {:style {:display "flex" :flex-wrap "wrap"}}
			[:div
			 (connected-input "ZAR starting" zar-starting #())
			 (connected-input "Luno - BTC/ZAR" luno-btc-zar update-luno-btc-zar)
			 (connected-input "Bitstamp - BTC/USD" bitstamp-btc-usd update-bitstamp-btc-usd)
			 (connected-input "Coinbase - BTC/EUR" coinbase-btc-eur update-coinbase-btc-eur)
			 (connected-input "Quoinex - BTC/USD" quoinex-btc-usd update-quoinex-btc-usd)
			 (connected-input "ZAR/USD" zar-usd update-zar-usd)
			 (connected-input "ZAR/EUR" zar-eur update-zar-eur)
			 [:button {:on-click refresh-all} "refresh all"]
			 ]

			[:div
			 (let [[percentage profit] (get-arbitrage-potential (rum/react zar-usd) (rum/react bitstamp-btc-usd))]
				 [:h1 "USD - Bitstamp " (format percentage) "%"])

			 (let [[percentage profit] (get-arbitrage-potential (rum/react zar-usd) (rum/react quoinex-btc-usd))]
				 [:h1 "USD - Quoinex " (format percentage) "%"])

			 (let [[percentage profit] (get-arbitrage-potential (rum/react zar-eur) (rum/react coinbase-btc-eur))]
				 [:h1 "EUR - Coinbase " (format percentage) "%"])
			 ]

			]

		 (investment)
		 ]))
