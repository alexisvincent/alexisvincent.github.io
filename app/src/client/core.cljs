(ns client.core
  (:require [client.ui :as ui]
						[rum.core :as rum]
						;; [reagent.core :as r]
						))


(enable-console-print!)

(rum/defc repeat-label [n text]
  [:div (repeat n [:.label text])])

(rum/mount (ui/root) (js/document.getElementById "app"))

;; (r/render [ui/root] (.getElementById js/document "app"))
