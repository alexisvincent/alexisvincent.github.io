(ns app.ui.views.accounts
  (:require
   [rum.core :as rum]
   [app.ui :as ui]
   [app.ui.styles :as styles]
   [app.util :as util]
   [app.ledger :refer [ledger]]
   [app.ui.router :refer [Route]]))

(rum/defc accounts [{{path :path} :match :as x}]
  (let [personal-holdings (rum/defc $
                            [full-name account-key]
                            (let [{{{:keys [balance withdrawn deposited history]} account-key} :accounts} ledger
                                  total-deposits-with-profits (+ balance withdrawn)
                                  profits (- total-deposits-with-profits deposited)
                                  asset-growth (* 100 (- (/ total-deposits-with-profits deposited) 1))]


                              [:div (ui/with-style {:padding "5px"
                                                    :border-style "none"})

                                [:h2 full-name]
                                [:div (ui/with-style {:padding "5px"})]
                                [:h4 "Assets: R" (util/format balance)]
                                [:h4 "Deposited: R" (util/format deposited)]
                                [:h4 "Withdrawn: R" (util/format withdrawn)]
                                [:h4 "Profit: R" (util/format profits)]
                                [:h4 "Growth: " (util/format asset-growth) "%"]

                                (for [{:keys [time amount kind] :as event} history]
                                  [:div (ui/with-style {:padding-left "5px"
                                                        :padding-bottom "5px"
                                                        :font-size "12px"}
                                          {:key (hash event)})
                                    (str time " ") (str kind " ") (str "R" (util/format amount))])]))]




    [:div (ui/with-style {:include [styles/flex]
                          :flex-direction "column"
                          :width "100%"
                          :padding "5px"})

     [:div (ui/with-style {:include styles/flex
                           :flex-wrap "wrap"
                           :padding "5px"})

      (Route {:path (str path "/dylan")
              :component #((rum/defc $ [] (personal-holdings "Dylan Vorster" :dylan)))})
      (Route {:path (str path "/alexis")
              :component #((rum/defc $ [] (personal-holdings "Alexis Vincent" :alexis)))})
      (Route {:path (str path "/emma")
              :component #((rum/defc $ [] (personal-holdings "Emma Botha" :emma)))})
      (Route {:path (str path "/sharon")
              :component #((rum/defc $ [] (personal-holdings "Sharon Vincent" :sharon)))})]]))
