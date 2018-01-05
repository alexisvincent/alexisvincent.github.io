(ns app.ui.router
  ( :require
   ;; [rum.core :as rum]
   ;; [react]
   [app.ui :refer [rumify]]
   ["react-router-dom/index" :as router]))

(def Router (partial rumify router/HashRouter))
(def Route (partial rumify router/Route))
(def Switch (partial rumify router/Switch))
(def Redirect (partial rumify router/Redirect))
(def Link (partial rumify router/Link))
