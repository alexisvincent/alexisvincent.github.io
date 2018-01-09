(ns app.ui.views.arbitrage
  (:require
   [rum.core :as rum]
   [app.ui :as ui]
   [app.util :as util]
   [app.exchanges :as exchanges]))

(def zar-starting (atom 100000))

(rum/defc bound-input < rum/reactive [atom']
  [:input {:type "text"
           :value (rum/react atom')
           :on-change #(reset! atom' (-> % .-target .value))}])

(rum/defc connected-input [label atom' update-fn]
  [:div (ui/with-style {:padding-bottom "5px"})
   [:div label]
   (bound-input atom')
   [:button (ui/with-style {:padding-left "5px"}
              {:on-click update-fn}) "update"]])

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
                zar-ending (* btc-after-forex (rum/react exchanges/luno-btc-zar))
                arbitrage-percentage (- (* 100 (/ zar-ending (rum/react zar-starting))) 100)]
            [arbitrage-percentage (- zar-ending (rum/react zar-starting))]))]

    [:div (ui/with-style {:display "flex"
                          :flex-wrap "wrap"})

     [:div (ui/with-style {:display "flex"
                           :flex-direction "column"
                           :align-items "flex-start"
                           :padding "20px"})

      (let [[percentage profit] (get-arbitrage-potential (rum/react exchanges/zar-usd) (rum/react exchanges/bitstamp-btc-usd))]
        [:div (ui/with-style {:font-weight 800}) "USD - Bitstamp " (util/format percentage) "%"])

      (let [[percentage profit] (get-arbitrage-potential (rum/react exchanges/zar-usd) (rum/react exchanges/quoinex-btc-usd))]
        [:div (ui/with-style {:font-weight 800}) "USD - Quoinex " (util/format percentage) "%"])

      (let [[percentage profit] (get-arbitrage-potential (rum/react exchanges/zar-eur) (rum/react exchanges/coinbase-btc-eur))]
        [:div (ui/with-style {:font-weight 800}) "EUR - Coinbase " (util/format percentage) "%"])

      [:div (ui/with-style {:display "flex"
                            :width "100%"
                            :flex-direction "column"
                            :padding-top "10px"})
       (connected-input "ZAR starting" zar-starting #())
       (connected-input "Luno - BTC/ZAR" exchanges/luno-btc-zar exchanges/update-luno-btc-zar)
       (connected-input "Bitstamp - BTC/USD" exchanges/bitstamp-btc-usd exchanges/update-bitstamp-btc-usd)
       (connected-input "Coinbase - BTC/EUR" exchanges/coinbase-btc-eur exchanges/update-coinbase-btc-eur)
       (connected-input "Quoinex - BTC/USD" exchanges/quoinex-btc-usd exchanges/update-quoinex-btc-usd)
       (connected-input "ZAR/USD" exchanges/zar-usd exchanges/update-zar-usd)
       (connected-input "ZAR/EUR" exchanges/zar-eur exchanges/update-zar-eur)

       [:button (ui/with-style {:padding "5px"
                                :padding-top "10px"
                                :text-align "left"}
                  {:on-click exchanges/refresh-all})
        "refresh all"]]]]))
