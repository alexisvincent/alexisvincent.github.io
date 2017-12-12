(ns client.core
  (:require [client.ui :as ui]
						[client.data :as data]
						[reagent.core :as r]))

(enable-console-print!)



(r/render [ui/root] (.getElementById js/document "app"))
