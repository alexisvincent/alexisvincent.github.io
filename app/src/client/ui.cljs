(ns client.ui
  (:require ;;[reagent.core :as r]
						;; [cljss.core :refer [defstyles]]
   [cljs.core.async :as async :refer [<! >!]]
   [rum.core :as rum]

   [ajax.core :refer [GET]]))

;; (let [c (async/chan)]
;; 	(async/go
;; 		(async/>! c "lol"))
;; 	(async/go
;; 		(js/console.log (async/<! c))))

(defn bypass-cors [url]
  (str "https://cors-cpivrgrkxw.now.sh/" url))

(defn get-value-from-input-event [e]
  (-> e .-target .-value))

(def luno-price (atom 250000))
(def initial-amount (atom 10000))
(def forex-rate (atom 13.59))
(def foreign-price (atom 16000))

(defn update-luno []
  (GET (bypass-cors "https://api.mybitx.com/api/1/ticker?pair=XBTZAR")
    :handler (fn [{x "last_trade"}]
               (reset! luno-price x))))

(defn update-foreign 		[]
  (GET (bypass-cors "https://www.bitstamp.net/api/v2/ticker/btcusd/")
    :handler (fn [{x "last"}]
               (reset! foreign-price x))))
(defn update-forex []
  (GET (bypass-cors "https://api.fixer.io/latest?base=USD")
    :handler (fn [{{zar "ZAR"} "rates"}]
               (reset! forex-rate zar))))


;; ;; (js/setInterval
;; ;;  reset-luno
;; ;;  10000)

;; ;; (js/setInterval reset-foreign 5000)

;; ;; (js/setInterval 	reset-forex	5000)

(rum/defc bound-input < rum/reactive [atom']
  [:input {:type "text" :value (rum/react atom') :on-change #(reset! atom' (get-value-from-input-event %))}])

(defn connected-input [label atom' update-fn]
	[:div
	 [:div label]
	 (bound-input atom')
	 [:button {:on-click update-fn} "update"]])

(defn refresh-all []
	(update-luno)
	(update-foreign)
	(update-forex))

(refresh-all)

(rum/defc root < rum/reactive []
  (let [forex-amount (/ (rum/react initial-amount) (rum/react forex-rate))
        foreign-bitcoins (/ forex-amount (rum/react foreign-price))
        final-amount (* foreign-bitcoins (rum/react luno-price))
        arbitrage-percentage (- (* 100 (/ final-amount (rum/react initial-amount))) 100)]
    [:div

		 (connected-input "Luno Price" luno-price update-luno)
		 (connected-input "Forex Rate" forex-rate update-forex)
		 (connected-input "Foreign Exchange Price" foreign-price update-foreign)

     [:div "initial amount " (rum/react initial-amount)]
     [:div "after forex " forex-amount]
     [:div "foreign bitcoins " foreign-bitcoins]
     [:div "final amount " final-amount]
     [:div "arbitrage percentage " arbitrage-percentage "%"]]))
