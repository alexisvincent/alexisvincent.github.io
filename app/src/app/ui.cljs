(ns app.ui
  (:require
   [rum.core :as rum]
   [stylefy.core :as stylefy]
   [sablono.util]))

(defn rumify [react-class & args]
  (let [[opts children] (if (map? (first args))
                          [(first args) (rest args)]
                          [{} args])
        interpret (fn [comp]
                    (if (vector? comp)
                      (sablono.interpreter/interpret comp)
                      comp))

        children (map interpret children)]

    (apply js/React.createElement react-class
           (clj->js (sablono.util/html-to-dom-attrs opts)) children)))

(defn reactify [rum-comp]
  (-> rum-comp meta :rum/class))

(defn style
  ([] {})
  ([s & ..styles]
   (apply merge (map style (cons s ..styles))))
  ([s]
   (if (sequential? s)
     (apply style s)

     (let [{include :include} s
           base-style (apply merge {} (if (sequential? include)
                                        include
                                        [include]))
           s (dissoc s :include)]

       (merge base-style s)))))

(defn with-style [style & rest]
  (let [style-map (stylefy/use-style style)]
    (apply merge style-map rest)))
