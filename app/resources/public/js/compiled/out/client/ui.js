// Compiled by ClojureScript 1.9.908 {}
goog.provide('client.ui');
goog.require('cljs.core');
goog.require('client.data');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('datascript.core');
client.ui.root = (function client$ui$root(){
var luno_price = reagent.core.atom.call(null,(250000));
var initial_amount = reagent.core.atom.call(null,(10000));
var forex_rate = reagent.core.atom.call(null,13.59);
var foreign_price = reagent.core.atom.call(null,(16000));
setInterval(((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (){
return ajax.core.GET.call(null,"https://cors-anywhere.herokuapp.com/https://api.mybitx.com/api/1/ticker?pair=XBTZAR",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (p__57184){
var map__57185 = p__57184;
var map__57185__$1 = ((((!((map__57185 == null)))?((((map__57185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57185):map__57185);
var x = cljs.core.get.call(null,map__57185__$1,"last_trade");
return cljs.core.reset_BANG_.call(null,luno_price,x);
});})(luno_price,initial_amount,forex_rate,foreign_price))
);
});})(luno_price,initial_amount,forex_rate,foreign_price))
,(10000));

setInterval(((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (){
return ajax.core.GET.call(null,"https://cors-anywhere.herokuapp.com/https://www.bitstamp.net/api/v2/ticker/btcusd/",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (p__57187){
var map__57188 = p__57187;
var map__57188__$1 = ((((!((map__57188 == null)))?((((map__57188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57188):map__57188);
var x = cljs.core.get.call(null,map__57188__$1,"last");
return cljs.core.reset_BANG_.call(null,foreign_price,x);
});})(luno_price,initial_amount,forex_rate,foreign_price))
);
});})(luno_price,initial_amount,forex_rate,foreign_price))
,(5000));

setInterval(((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (){
return ajax.core.GET.call(null,"https://api.fixer.io/latest?base=USD",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (p__57190){
var map__57191 = p__57190;
var map__57191__$1 = ((((!((map__57191 == null)))?((((map__57191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57191):map__57191);
var map__57192 = cljs.core.get.call(null,map__57191__$1,"rates");
var map__57192__$1 = ((((!((map__57192 == null)))?((((map__57192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57192):map__57192);
var zar = cljs.core.get.call(null,map__57192__$1,"ZAR");
return cljs.core.reset_BANG_.call(null,forex_rate,zar);
});})(luno_price,initial_amount,forex_rate,foreign_price))
);
});})(luno_price,initial_amount,forex_rate,foreign_price))
,(5000));

return ((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (){
var forex_amount = (cljs.core.deref.call(null,initial_amount) / cljs.core.deref.call(null,forex_rate));
var foreign_bitcoins = (forex_amount / cljs.core.deref.call(null,foreign_price));
var final_amount = (foreign_bitcoins * cljs.core.deref.call(null,luno_price));
var arbitrage_percentage = (((100) * (final_amount / cljs.core.deref.call(null,initial_amount))) - (100));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Local Exchange Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,luno_price),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price){
return (function (p1__57181_SHARP_){
return cljs.core.reset_BANG_.call(null,luno_price,p1__57181_SHARP_.target.value);
});})(forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Foreign Exchange Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,foreign_price),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price){
return (function (p1__57182_SHARP_){
return cljs.core.reset_BANG_.call(null,foreign_price,p1__57182_SHARP_.target.value);
});})(forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rands per Foreign Currency"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,forex_rate),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price){
return (function (p1__57183_SHARP_){
return cljs.core.reset_BANG_.call(null,forex_rate,p1__57183_SHARP_.target.value);
});})(forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"initial amount ",cljs.core.deref.call(null,initial_amount)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"after forex ",forex_amount], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"foreign bitcoins ",foreign_bitcoins], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"final amount ",final_amount], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"arbitrage percentage ",arbitrage_percentage,"%"], null)], null);
});
;})(luno_price,initial_amount,forex_rate,foreign_price))
});

//# sourceMappingURL=ui.js.map?rel=1513011230704
