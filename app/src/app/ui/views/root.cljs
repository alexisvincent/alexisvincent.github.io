(ns app.ui.views.root
  (:require
   [rum.core :as rum]
   [app.ui.views.arbitrage :as view-arbitrage]
   [app.ui :as ui]
   [stylefy.core :as stylefy]
   [app.ui.views.accounts :as v-accounts]
   [app.ui.router :refer [Router Route]]))

(stylefy/init)

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

(rum/defc root < rum/reactive []

  (Router
   [:div (ui/with-style {:display "flex"
                         :flex-direction "column"
                         :justify-content "center"})


    (Route {:path "/" :exact true :component #((rum/defc title []
                                                 [:h1 "alexisvincent.io"]))})


    (Route {:path "/accounts" :component #(v-accounts/accounts (js->clj % :keywordize-keys true))})
    (Route {:path "/arbitrage" :component #(view-arbitrage/arbitrage-tracker (js->clj %))})]))
