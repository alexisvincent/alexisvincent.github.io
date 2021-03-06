(defproject client "0.1.0-SNAPSHOT"
  :description "alexisvincent.io"
  :url "http://github.com/alexisvincent/transaction-engine"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}


  :min-lein-version "2.8.1"

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/core.async  "0.3.465"]
								 [cljs-ajax "0.7.3"]
								 [rum "0.10.8"]
								 [stylefy "1.2.0-beta2"]
                 [cljs-ajax "0.7.3"]
								 [camel-snake-kebab "0.4.0"]
								 [com.taoensso/sente "1.12.0"]
								 [aleph "0.4.4"]
								 [org.clojure/data.json "0.2.6"]
								 [com.rpl/specter "1.1.0"]
								 [org.clojure/core.async "0.3.465"]
								 [org.clojure/tools.reader "1.1.1"]
								 [expound "0.4.0"]
								 ]

  :plugins [[lein-figwheel "0.5.14"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                ;; The presence of a :figwheel configuration here
                ;; will cause figwheel to inject the figwheel client into the build
                :figwheel {:on-jsload "app.core/on-js-reload"}

                :compiler {:main app.core
													 :install-deps false
													 :npm-deps {:react-router-dom "4.2.2"
																			:react "15.6.2"
																			:react-dom "15.6.2"
																			}
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
                           :main app.core
													 :install-deps true
													 :npm-deps {:react-router-dom "4.2.2"
																			:react "15.6.2"
																			:react-dom "15.6.2"
																			}
													 :parallel-build true
                           :optimizations :whitespace
                           :pretty-print false}}]}

  :figwheel {
             :open-file-command "emacsclient"
             }


  ;; Setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.4"]
                                  [figwheel-sidecar "0.5.14"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})
