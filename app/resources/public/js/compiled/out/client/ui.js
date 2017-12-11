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
ajax.core.GET.call(null,"https://cors-anywhere.herokuapp.com/https://api.mybitx.com/api/1/ticker?pair=XBTZAR",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (p__57009){
var map__57010 = p__57009;
var map__57010__$1 = ((((!((map__57010 == null)))?((((map__57010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57010):map__57010);
var x = cljs.core.get.call(null,map__57010__$1,"last_trade");
return cljs.core.reset_BANG_.call(null,luno_price,x);
});})(luno_price,initial_amount,forex_rate,foreign_price))
);

ajax.core.GET.call(null,"https://cors-anywhere.herokuapp.com/https://www.bitstamp.net/api/v2/ticker/btcusd/",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (p__57012){
var map__57013 = p__57012;
var map__57013__$1 = ((((!((map__57013 == null)))?((((map__57013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57013):map__57013);
var x = cljs.core.get.call(null,map__57013__$1,"last");
return cljs.core.reset_BANG_.call(null,foreign_price,x);
});})(luno_price,initial_amount,forex_rate,foreign_price))
);

ajax.core.GET.call(null,"https://cors-anywhere.herokuapp.com/https://api.fixer.io/latest?base=USD",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (p__57015){
var map__57016 = p__57015;
var map__57016__$1 = ((((!((map__57016 == null)))?((((map__57016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57016):map__57016);
var map__57017 = cljs.core.get.call(null,map__57016__$1,"rates");
var map__57017__$1 = ((((!((map__57017 == null)))?((((map__57017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57017):map__57017);
var zar = cljs.core.get.call(null,map__57017__$1,"ZAR");
return cljs.core.reset_BANG_.call(null,forex_rate,zar);
});})(luno_price,initial_amount,forex_rate,foreign_price))
);

return ((function (luno_price,initial_amount,forex_rate,foreign_price){
return (function (){
var forex_amount = (cljs.core.deref.call(null,initial_amount) / cljs.core.deref.call(null,forex_rate));
var foreign_bitcoins = (forex_amount / cljs.core.deref.call(null,foreign_price));
var final_amount = (foreign_bitcoins * cljs.core.deref.call(null,luno_price));
var arbitrage_percentage = (((100) * (final_amount / cljs.core.deref.call(null,initial_amount))) - (100));
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Local Exchange Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,luno_price),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price){
return (function (p1__57006_SHARP_){
return cljs.core.reset_BANG_.call(null,luno_price,p1__57006_SHARP_.target.value);
});})(forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Foreign Exchange Price"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,foreign_price),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price){
return (function (p1__57007_SHARP_){
return cljs.core.reset_BANG_.call(null,foreign_price,p1__57007_SHARP_.target.value);
});})(forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rands per Foreign Currency"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,forex_rate),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price){
return (function (p1__57008_SHARP_){
return cljs.core.reset_BANG_.call(null,forex_rate,p1__57008_SHARP_.target.value);
});})(forex_amount,foreign_bitcoins,final_amount,arbitrage_percentage,luno_price,initial_amount,forex_rate,foreign_price))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"initial amount ",cljs.core.deref.call(null,initial_amount)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"after forex ",forex_amount], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"foreign bitcoins ",foreign_bitcoins], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"final amount ",final_amount], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"arbitrage percentage ",arbitrage_percentage,"%"], null)], null);
});
;})(luno_price,initial_amount,forex_rate,foreign_price))
});

//# sourceMappingURL=ui.js.map?rel=1513009910932
