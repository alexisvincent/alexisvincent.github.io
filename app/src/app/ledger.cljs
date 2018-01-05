(ns app.ledger)

(def arbitrage-log
  '({:kind :open-account
     :name :alexis}

    {:kind :open-account
     :name :dylan}

    {:kind :open-account
     :name :sharon}

    {:kind :open-account
     :name :emma}

    {:kind :deposit
     :time 1
     :account :alexis
     :amount 103490}

    {:kind :deposit
     :time 1
     :account :emma
     :amount 10}

    {:kind :deposit
     :time 1
     :account :dylan
     :amount 23296.5}

    {:kind :deposit
     :time 1
     :account :sharon
     :amount 600}

    {:kind :forex
     :time 1
     :pair [:zar :eur]
     :quoted-rate 15.34
     :amount-sent 103500
     :amount-received 1033}

    {:kind :exchange-deposit
     :time 1
     :exchange :cubits
     :currency :eur
     :swift-fee 200
     :fees '({:description :deposit-fee
              :amount 16}
             {:description :swift-fee
              :amount 150}
             {:description :swift-commission
              :amount 150})
     :amount-sent 103500
     :amount-received 100}

    {:kind :buy-bitcoin
     :time 1
     :exchange :cubits
     :currency :eur
     :amount-sent 200
     :amount-received 200
     :effective-rate 1.1}

    {:kind :transfer-bitcoin
     :time 1
     :from :cubits
     :to :luno
     :amount-sent 234234
     :amount-recieved 2
     :time-recieved 1}

    {:kind :sell-bitcoin
     :time 1
     :exchange :luno
     :currency :zar
     :amount-sent 200
     :amount-received 200
     :effective-rate 1.1}

    {:kind :exchange-withdrawal
     :time 1
     :exchange :luno
     :currency :zar
     :fees '({:description :withdrawal-fee
              :amount 8.5})
     :amount-sent 142471.13
     :amount-received 142462.63}

    {:kind :withdrawal
     :time 1
     :account :alexis
     :amount 5000}

    {:kind :deposit
     :time 1
     :account :alexis
     :amount 17371}

    {:kind :exchange-withdrawal
     :time 1
     :exchange :luno
     :currency :zar
     :fees '({:description :withdrawal-fee
              :amount 8.5})
     :amount-received 175802.92}

    {:kind :deposit
     :time 1
     :account :emma
     :amount 24435}

    {:kind :exchange-withdrawal
     :time 1
     :exchange :luno
     :currency :zar
     :fees '({:description :withdrawal-fee
              :amount 8.5})
     :amount-sent 213682.19
     :amount-received 213682.19}

    {:kind :exchange-withdrawal
     :time 1
     :exchange :luno
     :currency :zar
     :fees '({:description :withdrawal-fee
              :amount 8.5})
     :amount-received 224323.63}))

(defn make-empty-ledger []
  {;:fees-outstanding 0
   :accounts {}
   :history {}})

(defn transact-on-account [{:keys [amount kind] account-key :account :as event} ledger]
  (let [ledger (update ledger :accounts
                       (fn [{{:keys [balance history deposited withdrawn] :as account} account-key :as accounts}]
                         (let [balance (if (or (= kind :deposit) (= kind :profit-deposit))
                                         (+ balance amount)
                                         (- balance amount))

                               deposited (cond
                                           (= kind :deposit) (+ deposited amount)
                                           :else deposited)

                               withdrawn (cond
                                           (= kind :withdrawal) (+ withdrawn amount)
                                           :else withdrawn)

                               history (cons event history)
                               account (assoc account :balance balance :history history :deposited deposited :withdrawn withdrawn)
                               accounts (assoc accounts account-key account)]

                           accounts)))
        ledger (update ledger :history (partial cons event))]
    ledger))

(defn get-total-assets [{accounts :accounts}]
  (let [balances (for [[_ {balance :balance}] accounts]
                   balance)]
    (reduce + balances)))

(defmulti process-event
  (fn [_ {kind :kind}]
    kind))

(defn add-event-to-history [ledger event]
  (update ledger :history (partial cons event)))

(defmethod process-event :open-account [ledger {name :name :as event}]
  (let [ledger (update ledger :accounts #(assoc % name {:balance 0
                                                        :deposited 0
                                                        :withdrawn 0
                                                        :history '()}))
        ledger (add-event-to-history ledger event)]
    ledger))

(defmethod process-event :withdrawal [ledger event]
  (transact-on-account event ledger))

(defmethod process-event :deposit [ledger event]
  (transact-on-account event ledger))

(defmethod process-event :profit-deposit [ledger event]
  (transact-on-account event ledger))

(defmethod process-event :default [ledger event]
  (add-event-to-history ledger event))

(defmethod process-event :exchange-withdrawal [{:keys [accounts] :as ledger} {:keys [time amount-received] :as event}]
  (let [total-assets (get-total-assets ledger)
        ledger (add-event-to-history ledger event)
        ledger (reduce
                (fn [ledger [account-name {:keys [balance] :as account}]]
                  (let [share-ratio (/ balance total-assets)
                        profit-for-account (* share-ratio (- amount-received total-assets))
                        event  {:kind :profit-deposit
                                :time time
                                :account account-name
                                :amount profit-for-account}
                        ledger (assoc ledger :fees-outstanding 0)
                        ledger (transact-on-account event ledger)]
                    ledger))
                ledger
                accounts)]
    ledger))

;; (defmethod process-event :exchange-deposit [{:keys [accounts] :as ledger} {:keys [fees] :as event}]
;; 	(update ledger :fees-outstanding (partial + (->> fees
;; 																						(filter (fn [{:keys [description amount]}]
;; 																											(or
;; 																											 (= description :swift-fee)
;; 																											 (= description :swift-commission))) )
;; 																						(reduce +)))))


(defn process-events [ledger events]
  (reduce process-event ledger events))

;; (process-event (make-empty-ledger) (first arbitrage-log))
(defn get-profits [{accounts :accounts :as ledger} account-key]
  (let [{{:keys [withdrawn deposited balance]} account-key} accounts]

    (-> balance
        (- deposited)
        (+ withdrawn))))

(def ledger
  (process-events (make-empty-ledger)  arbitrage-log))

(process-events (make-empty-ledger) (take 5 arbitrage-log))
