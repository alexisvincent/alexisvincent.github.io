(ns client.data
  (:require [datascript.core :as d]
						;; [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [ajax.core :refer [GET POST]]
            [promesa.core :as p]
            [clojure.walk :as walk]
            [reagent.core :as r]))

(defn bind
  ([conn q]
   (bind conn q (r/atom nil)))
  ([conn q state]
   (let [k (random-uuid)]
     (reset! state (d/q q @conn))
     (d/listen! conn k (fn [tx-report]
                         (let [novelty (d/q q (:tx-data tx-report))]
                           (when (not-empty novelty) ;; Only update if query results actually changed
                             (reset! state (d/q q (:db-after tx-report)))))))
     (set! (.-__key state) k)
     state)))

(defn unbind
  [conn state]
  (d/unlisten! conn (.-__key state)))

(def conn (d/create-conn))

(def reactive-q (partial bind conn))

;;; Add this: --->
;; (let [{:keys [chsk ch-recv send-fn state]}
;;       (sente/make-channel-socket!  "/chsk" ; Note the same path as before
;; 																	 {:type :auto
;; 																		:host "localhost:8080"; e/o #{:auto :ajax :ws}
;; 																	 })]
;;   (def chsk       chsk)
;;   (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
;;   (def chsk-send! send-fn) ; ChannelSocket's send API fn
;;   (def chsk-state state)   ; Watchable, read-only atom
;;   )


(d/transact! conn
             [{:name "Alexis" :age 22 :surname "Vincent"}
              {:name "Denis" :age 24 :surname "Vincent"}
              {:name "Julien" :age 20 :surname "Vincent"}
              {:name "Sharon" :age 20 :surname "Vincent"}
              {:name "Emma" :age 24 :surname "Botha"}
							])

;; (d/transact! conn
;;              [{:name "Iggi" :age 23 :surname "Van Eeden"}])
;; (declare args->str)

;; (defn arg->str [v]
;;   (cond (map? v) (str "{" (args->str v) "}")
;;         (keyword? v) (str "\"" (name v) "\"")
;;         (string? v) (str "\"" v "\"")
;;         (coll? v) (str "[" (apply str (interpose "," (map arg->str v))) "]")
;;         :else (str v)))

;; (defn args->str [m]
;;   (->> (for [[k v] m]
;;          [(name k) ":" (arg->str v)])
;;        (interpose ",")
;;        (flatten)
;;        (apply str)))

;; (defn query->str [q]
;;   (if (keyword? q)
;;     (name q)
;;     (let [f (first q)
;;           s (second q)
;;           r (if (map? s) (drop 2 q) (rest q))]
;;       ;; (println f s r)
;;       (apply str (flatten (cond (keyword? f) [(name f)
;;                                               (if (map? s) ["(" (args->str s) ")"] "")
;;                                               (when (seq r) ["{" (interpose " " (map query->str r)) "}"])]
;;                                 (vector? f) ["{" (map query->str q) "}"]
;;                                 :else ""))))))

;; (defn make-graphql-query
;;   [endpoint auth-token query]
;;   (p/promise (fn [resolve reject]
;;                (POST endpoint
;;                  {:auth auth-token
;;                   :headers {"Authorization" (str "bearer " auth-token)}
;;                   :params {:query query}
;;                   :handler #(resolve {:response % :status :succeded})
;;                   :format :json
;;                   :error-handler #(reject {:response % :status :failed})}))))

;; (defn get-github-issue-data
;;   [owner repository api-token]
;;   (let [query (query->str
;;                [[:repository {:owner owner :name repository}
;;                  [:milestones {:first 100}
;;                   [:nodes
;;                    :number
;;                    :url
;;                    :title
;;                    :state]]
;;                  [:issues {:first 100}
;;                   [:nodes
;;                    :number
;;                    :title
;;                    :state
;;                    [:milestone
;;                     :number]]]]])
;;         issue-data (make-graphql-query "https://api.github.com/graphql" api-token query)]
;;     issue-data))

;; (p/then (get-github-issue-data "alexisvincent" "transaction-engine" "abdf41090e1f75f11d5b61c28e25410f24907211")
;;         (fn [data]
;;           (let [keyed-data (walk/keywordize-keys data)
;;                 {{{{{milestones :nodes} :milestones {issues :nodes} :issues} :repository} :data} :response} keyed-data
;;                 milestones (map #(assoc % :type :milestone) milestones)
;;                 issues (map #(assoc % :type :issue) issues)
;;                 issues (map (fn [{{milestone-number :number :as milestone} :milestone number :number :as issue}]
;;                               (if (nil? milestone)
;;                                 (dissoc issue :milestone)
;;                                 (assoc issue :milestone milestone-number))) issues)
;;                 items (->>  issues
;;                             (concat milestones)
;;                             (map (fn [{number :number :as item}]
;;                                    (assoc item :db/id (d/tempid number)))))
;;                 items (map
;;                        (fn [{milestone :milestone :as item}]
;;                          (if (nil? milestone)
;;                            item
;;                            (let [{temp-id :db/id :as a} (some
;;                                                    (fn [{:keys [type number] :as milestone-item}]
;;                                                      (if (and
;; 																												 (= type :milestone)
;; 																												 (= number milestone))
;; 																											 milestone-item))

;;                                                    items)]
;; 														 ;; (.log js/console a)

;; 												 ;; )
;;                              (assoc item :milestone temp-id))))
;;                        items)]

;;             (.log js/console "items" items)
;;             (d/transact! conn issues)
;; )))

(d/q '[:find ?e ?a ?v
       :where
       [?e ?a ?v]] @conn)
