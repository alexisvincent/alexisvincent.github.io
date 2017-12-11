(ns figwheel.connect.build-dev (:require [client.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/client.core.on-js-reload (apply js/client.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'client.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

