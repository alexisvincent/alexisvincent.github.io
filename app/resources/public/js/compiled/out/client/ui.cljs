(ns client.ui
  (:require [client.data :as data]
            [reagent.core :as r]
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

(d/transact! data/conn
             [{:exchange-name "Luno" :btc-price 234234}
              {:exchange-name "Coinbase" :btc-price 234234}])

(defn exchange-pairs [exchange-name pairs]
  [:div
   [:h2 exchange-name]
   (for [[ticker-1 price-1 ticker-2 price-2] pairs]
     [:div (concat ticker-1 "/" ticker-2) " " (/ price-2 price-1)])])

(defn root []
  (let [luno-price (data/reactive-q
                    '[:find ?price
                      :where
                      [?exchange :name "Luno"]
                      [?exchange :btc-price ?price]])

        coinbase-price (data/reactive-q
                        '[:find ?price
                          :where
													[?exchange :name "Coinbase"]
                          [?exchange :btc-price ?price]])]
    (fn []
			[:div
			 [:h1 "Arbitrage"]
			 [:h2 "Amount"]
			 [:div 234234]
			 [:div
				[:h3 "Luno"]
				[:div]]
			 [:div
				(exchange-pairs "Luno" '(["BTC" 1 "ZAR" 324234234] ["BTC" 1 "ZAR" 324234234]))]])))
