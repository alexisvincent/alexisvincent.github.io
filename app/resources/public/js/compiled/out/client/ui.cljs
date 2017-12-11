(ns client.ui
  (:require [client.data :as data]
            [reagent.core :as r]
						[ajax.core :refer [GET POST]]
            [datascript.core :as d]))

;; (defn root []
;;   (let [people (data/reactive-q
;;                 '[:find ?m ?m-title
;;                   :where
;;                   [?m :title ?m-title]
;; 									[?m :type :milestone]
;; 									;; [?i :milestone ?m]
;; 									;; [?i :title ?i-title]
;; 									])]
;;     (fn []
;; 			(.log js/console "asd" @people)
;;       [:h1 "Milestones"
;;        [:div
;;         (comment (for [[m] @people]
;; 									 [:div {:key i} "Milestone " m-title " issue " i-title]))]])))

;; (defn root []
;;   (let [people (data/reactive-q
;;                 '[:find ?m ?name
;;                   :where
;;                   [?m :name ?name]
;; 									])]
;;     (fn []
;;       [:h1 "People"
;;        [:div
;; 				(for [[i name] @people]
;; 					[:div {:key i} "Name " name])]])))

(defn root []
  (let [luno-price (r/atom 250000)

        initial-amount (r/atom 10000)
        forex-rate (r/atom 13.59)
        foreign-price (r/atom 16000)]

		(GET "https://cors-anywhere.herokuapp.com/https://api.mybitx.com/api/1/ticker?pair=XBTZAR"
				 :handler (fn [{x "last_trade"}]
										(reset! luno-price x)))

		(GET "https://cors-anywhere.herokuapp.com/https://www.bitstamp.net/api/v2/ticker/btcusd/"
				 :handler (fn [{x "last"}]
										(reset! foreign-price x)))

		(GET "https://cors-anywhere.herokuapp.com/https://api.fixer.io/latest?base=USD"
				 :handler (fn [{{zar "ZAR"} "rates"}]
										(reset! forex-rate zar)))

    (fn []
      (let [forex-amount (/ @initial-amount @forex-rate)
            foreign-bitcoins (/ forex-amount @foreign-price)
            final-amount (* foreign-bitcoins @luno-price)
            arbitrage-percentage (- (* 100 (/ final-amount @initial-amount)) 100)]
        [:div
         [:div "Local Exchange Price"]
         [:input {:type "text" :value @luno-price :on-change #(reset! luno-price (-> % .-target .-value))}]
         [:div "Foreign Exchange Price"]
         [:input {:type "text" :value @foreign-price :on-change #(reset! foreign-price (-> % .-target .-value))}]
         [:div "Rands per Foreign Currency"]
         [:input {:type "text" :value @forex-rate :on-change #(reset! forex-rate (-> % .-target .-value))}]
         [:div "initial amount " @initial-amount]
         [:div "after forex " forex-amount]
         [:div "foreign bitcoins " foreign-bitcoins]
         [:div "final amount " final-amount]
         [:div "arbitrage percentage " arbitrage-percentage "%"]]))))
