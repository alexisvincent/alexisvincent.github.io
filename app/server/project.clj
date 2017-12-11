(defproject server "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
								 [compojure "1.6.0"]
								 [org.danielsz/system "0.4.0"]
								 [hiccup "1.0.5"]
								 [ring/ring-core "1.6.2"]
								 [com.taoensso/sente "1.11.0"]
								 [com.stuartsierra/component "0.3.2"]
								 [http-kit "2.2.0"]]
	:source-paths ["src", "dev"]
)
