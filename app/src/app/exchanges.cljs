(ns app.exchanges
  (:require
   [app.util :as util]
   [ajax.core :refer [GET]]))

(def luno-btc-zar (atom 200000))
(def quoinex-btc-usd (atom 10000))
(def bitstamp-btc-usd (atom 10000))
(def coinbase-btc-eur (atom 10000))

(def zar-usd (atom 1))
(def zar-eur (atom 1))


(defn update-luno-btc-zar []
  (GET (util/bypass-cors "https://api.mybitx.com/api/1/ticker?pair=XBTZAR")
    :handler (fn [{x "last_trade"}]
               (reset! luno-btc-zar x))))

(defn update-quoinex-btc-usd []
  (GET (util/bypass-cors "https://api.quoine.com/products/1")
    :handler (fn [{price "market_bid"}]
               (reset! quoinex-btc-usd price))))

(defn update-bitstamp-btc-usd     []
  (GET (util/bypass-cors "https://www.bitstamp.net/api/v2/ticker/btcusd/")
    :handler (fn [{x "last"}]
               (reset! bitstamp-btc-usd x))))

(defn update-coinbase-btc-eur []
  (GET "https://api.coinbase.com/v2/exchange-rates?currency=BTC"
    :handler (fn [{{{rate "EUR"} "rates"} "data"}]
               (reset! coinbase-btc-eur (js/parseInt rate)))))

(defn update-zar-eur []
  (GET (util/bypass-cors "https://api.fixer.io/latest?base=EUR")
    :handler (fn [{{zar "ZAR"} "rates"}]
               (reset! zar-eur zar))))

(defn update-zar-usd []
  (GET (util/bypass-cors "https://api.fixer.io/latest?base=USD")
    :handler (fn [{{zar "ZAR"} "rates"}]
               (reset! zar-usd zar))))

(defn refresh-all []
  (update-luno-btc-zar)
  (update-bitstamp-btc-usd)
  (update-quoinex-btc-usd)
  (update-coinbase-btc-eur)
  (update-zar-usd)
  (update-zar-eur))

(refresh-all)
