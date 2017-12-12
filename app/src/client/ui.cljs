(ns client.ui
  (:require [client.data :as data]
            [reagent.core :as r]
						[ajax.core :refer [GET POST]]
            [datascript.core :as d]))

(defn root []
  (let [luno-price (r/atom 250000)

        initial-amount (r/atom 10000)
        forex-rate (r/atom 13.59)
        foreign-price (r/atom 16000)

				reset-luno #(GET "https://cors-cpivrgrkxw.now.sh/https://api.mybitx.com/api/1/ticker?pair=XBTZAR"
								:handler (fn [{x "last_trade"}]
													 (reset! luno-price x)))

				reset-foreign 		#(GET "https://cors-cpivrgrkxw.now.sh/https://www.bitstamp.net/api/v2/ticker/btcusd/"
															:handler (fn [{x "last"}]
																				 (reset! foreign-price x)))
				reset-forex #(GET "https://cors-cpivrgrkxw.now.sh/https://api.fixer.io/latest?base=USD"
												 :handler (fn [{{zar "ZAR"} "rates"}]
																		(reset! forex-rate zar)))
				]

		(reset-luno)
		(reset-foreign)
		(reset-forex)

		(js/setInterval
		 reset-luno
		  10000)

		(js/setInterval reset-foreign 5000)

		(js/setInterval 	reset-forex	5000)

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
