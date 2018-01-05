(ns app.core
  (:require [app.ui.views.root :as root-view]
						[rum.core :as rum]))

(enable-console-print!)

(rum/mount (root-view/root) (js/document.getElementById "app"))
