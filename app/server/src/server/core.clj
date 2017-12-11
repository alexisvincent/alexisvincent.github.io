(ns server.core
  (:require [compojure.core :refer :all]
            [com.stuartsierra.component :as component]
            [compojure.route :as route]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
            [hiccup.core :refer (html)]
						[ring.middleware.params]
						[ring.middleware.keyword-params]
            [org.httpkit.server :as http]
						(system.components
						 [sante :refer [new-datomic-db]]
						 [mongo :refer [new-mongo-db]])))

(let [{:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! (get-sch-adapter) {})]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
)


(defroutes app-routes
  (GET "/" []
    (html
     [:div "hello world"]))

  ;; (route/not-found
  ;;  (html
  ;;   [:h1 "Page not found :("]))

  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req)))

(def app
  (-> app-routes
      ;; Add necessary Ring middleware:
      ring.middleware.keyword-params/wrap-keyword-params
      ring.middleware.params/wrap-params
			))

(defrecord WebServer []
  component/Lifecycle

  (start [this]
    (let [stop-server (http/run-server app {:port 8080})]
      (assoc this :stop-server stop-server)))

  (stop [this]
    (let [stop-server (:stop-server this)]
      (when-not (nil? stop-server)
        (stop-server))
      this)))

(defn system []
  (component/system-map
   :web-server (map->WebServer {})))
