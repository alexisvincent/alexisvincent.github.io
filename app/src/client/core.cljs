(ns client.core
  (:require [client.ui :as ui]
						[rum.core :as rum]))

(enable-console-print!)

(rum/mount (ui/root) (js/document.getElementById "app"))

(+ 3 4 )
