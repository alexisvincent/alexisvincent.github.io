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
   [stylefy.core :as stylefy]
	 ))

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

(rum/defc arbitrage-tracker < rum/reactive []
  (let [get-arbitrage-potential
        (fn [zar-cur btc-cur]
          (let [cur-after-forex  (/ (rum/react zar-starting) zar-cur)
                swift-fee (/ 110 zar-cur)
                swift-commission (* 0.0055 cur-after-forex)
                swift-commission (let [min-fee (/ 150 zar-cur)
                                       max-fee (/ 600 zar-cur)]
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
     [:div
      (connected-input "ZAR starting" zar-starting #())
      (connected-input "Luno - BTC/ZAR" luno-btc-zar update-luno-btc-zar)
      (connected-input "Bitstamp - BTC/USD" bitstamp-btc-usd update-bitstamp-btc-usd)
      (connected-input "Coinbase - BTC/EUR" coinbase-btc-eur update-coinbase-btc-eur)
      (connected-input "Quoinex - BTC/USD" quoinex-btc-usd update-quoinex-btc-usd)
      (connected-input "ZAR/USD" zar-usd update-zar-usd)
      (connected-input "ZAR/EUR" zar-eur update-zar-eur)
      [:button {:on-click refresh-all} "refresh all"]]

     [:div
      (let [[percentage profit] (get-arbitrage-potential (rum/react zar-usd) (rum/react bitstamp-btc-usd))]
        [:h2 "USD - Bitstamp " (format percentage) "%"])

      (let [[percentage profit] (get-arbitrage-potential (rum/react zar-usd) (rum/react quoinex-btc-usd))]
        [:h2 "USD - Quoinex " (format percentage) "%"])

      (let [[percentage profit] (get-arbitrage-potential (rum/react zar-eur) (rum/react coinbase-btc-eur))]
        [:h2 "EUR - Coinbase " (format percentage) "%"])]]))

(rum/defc investment [{{path :path} :match :as x}]
  (let [dylan-investment 23296.5
        alexis-investment 103500
        sharon-investment 600
        balance-1 (+ alexis-investment dylan-investment sharon-investment)
        dylan-percentage (/ dylan-investment balance-1)
        alexis-percentage (/ alexis-investment balance-1)
        sharon-percentage (/ sharon-investment balance-1)
        balance-last 142976.23
        profit (- balance-last balance-1)
        growth (format (* 100 (- (/ balance-last balance-1) 1)))

        s-investments (merge s-flex
                             {:flex-direction "column"
															:width "100%"
                              :border-style "solid"
                              ::stylefy/sub-styles {:1 {:display "flex"
                                                        :justify-content "space-around"
																												:width "100%"}

                                                    :2 {:display "flex"
                                                        :flex-wrap "wrap"
                                                        :justify-content "space-around"}}})
        personal-holdings (fn [full-name percentage]
                            [:div (with-style {:padding "5px"
                                               :border-style "none"})
                             [:h3 full-name]
                             [:h4 "Assets: R" (format (* percentage balance-last))]
                             [:h4 "Profit: R" (format (* percentage profit))]])]

    [:div (with-style s-investments)
     [:div (with-style s-investments :1)
      [:h2 "Assets: R" balance-last]
      [:h2 "Profit: R" profit]
      [:h2 "Growth: " growth "%"]]

     [:div (with-style s-investments :2)
      (Route {:path (str path "/dylan")
							:component (inline-component #(personal-holdings "Dylan Vorster" dylan-percentage))})
      (Route {:path (str path "/alexis")
							:component (inline-component #(personal-holdings "Alexis Vincent" alexis-percentage))})
      (Route {:path (str path "/sharon")
							:component (inline-component #(personal-holdings "Sharon Vincent" sharon-percentage))})
			]]))

(rum/defc root < rum/reactive []
  (Router
   [:div (with-style {:display "flex"
											:flex-direction "column"
											:align-items "center"
											:justify-content "center"})
		[:h1 "alexisvincent.io"]

    (Route {:path "/accounts" :component #(investment (js->clj % :keywordize-keys true))})
    (Route {:path "/arbitrage" :component #(arbitrage-tracker (js->clj %))})]))
