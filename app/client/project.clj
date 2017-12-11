(defproject client "0.1.0-SNAPSHOT"
  :description "Client for Ferryman"
  :url "http://github.com/alexisvincent/transaction-engine"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.9.0-alpha17"]
                 [org.clojure/clojurescript "1.9.908"]
                 [org.clojure/core.async  "0.3.443"]
								 [re-posh "0.1.5"]
								 [datsync "0.0.1-alpha2-SNAPSHOT"]
								 [org.roman01la/cljss "1.5.11"]
								 [datascript "0.16.2"]
								 [reagent "0.8.0-alpha2"]
								 [re-frame "0.10.2"]
								 [vincit/venia "0.2.4"]
								 [funcool/promesa "1.9.0"]
								 [cljs-ajax "0.7.2"]
								 ]

  :plugins [[lein-figwheel "0.5.13"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                ;; The presence of a :figwheel configuration here
                ;; will cause figwheel to inject the figwheel client into the build
                :figwheel {:on-jsload "client.core/on-js-reload"
                           :open-urls ["http://localhost:3449/"]}

                :compiler {:main client.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/client.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :preloads [devtools.preload]
                           :external-config {
                                             :devtools/config {
                                                    :features-to-install    [:formatters :hints]}}
                           }}

               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/client.js"
                           :main client.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {
             :open-file-command "emacsclient"
             }


  ;; Setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.4"]
                                  [figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
