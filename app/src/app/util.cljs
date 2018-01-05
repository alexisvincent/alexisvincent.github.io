(ns app.util
  (:require
    [goog.string :as gstring]
    [goog.string.format]))

(defn format [x]
  (gstring/format "%.2f" x))

(defn bypass-cors [url]
  (str "https://cors-cpivrgrkxw.now.sh/" url))
