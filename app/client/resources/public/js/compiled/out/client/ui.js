// Compiled by ClojureScript 1.9.908 {}
goog.provide('client.ui');
goog.require('cljs.core');
goog.require('client.data');
goog.require('reagent.core');
goog.require('datascript.core');
datascript.core.transact_BANG_.call(null,client.data.conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exchange-name","exchange-name",1814705482),"Luno",new cljs.core.Keyword(null,"btc-price","btc-price",1852560328),(234234)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exchange-name","exchange-name",1814705482),"Coinbase",new cljs.core.Keyword(null,"btc-price","btc-price",1852560328),(234234)], null)], null));
client.ui.exchange_pairs = (function client$ui$exchange_pairs(exchange_name,pairs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),exchange_name], null),(function (){var iter__43357__auto__ = (function client$ui$exchange_pairs_$_iter__69923(s__69924){
return (new cljs.core.LazySeq(null,(function (){
var s__69924__$1 = s__69924;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__69924__$1);
if(temp__5278__auto__){
var s__69924__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69924__$2)){
var c__43355__auto__ = cljs.core.chunk_first.call(null,s__69924__$2);
var size__43356__auto__ = cljs.core.count.call(null,c__43355__auto__);
var b__69926 = cljs.core.chunk_buffer.call(null,size__43356__auto__);
if((function (){var i__69925 = (0);
while(true){
if((i__69925 < size__43356__auto__)){
var vec__69927 = cljs.core._nth.call(null,c__43355__auto__,i__69925);
var ticker_1 = cljs.core.nth.call(null,vec__69927,(0),null);
var price_1 = cljs.core.nth.call(null,vec__69927,(1),null);
var ticker_2 = cljs.core.nth.call(null,vec__69927,(2),null);
var price_2 = cljs.core.nth.call(null,vec__69927,(3),null);
cljs.core.chunk_append.call(null,b__69926,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.concat.call(null,ticker_1,"/",ticker_2)," ",(price_2 / price_1)], null));

var G__69933 = (i__69925 + (1));
i__69925 = G__69933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69926),client$ui$exchange_pairs_$_iter__69923.call(null,cljs.core.chunk_rest.call(null,s__69924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69926),null);
}
} else {
var vec__69930 = cljs.core.first.call(null,s__69924__$2);
var ticker_1 = cljs.core.nth.call(null,vec__69930,(0),null);
var price_1 = cljs.core.nth.call(null,vec__69930,(1),null);
var ticker_2 = cljs.core.nth.call(null,vec__69930,(2),null);
var price_2 = cljs.core.nth.call(null,vec__69930,(3),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.concat.call(null,ticker_1,"/",ticker_2)," ",(price_2 / price_1)], null),client$ui$exchange_pairs_$_iter__69923.call(null,cljs.core.rest.call(null,s__69924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43357__auto__.call(null,pairs);
})()], null);
});
client.ui.root = (function client$ui$root(){
var luno_price = client.data.reactive_q.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?price","?price",152171426,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?exchange","?exchange",318822475,null),new cljs.core.Keyword(null,"name","name",1843675177),"Luno"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?exchange","?exchange",318822475,null),new cljs.core.Keyword(null,"btc-price","btc-price",1852560328),new cljs.core.Symbol(null,"?price","?price",152171426,null)], null)], null));
var coinbase_price = client.data.reactive_q.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?price","?price",152171426,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?exchange","?exchange",318822475,null),new cljs.core.Keyword(null,"name","name",1843675177),"Coinbase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?exchange","?exchange",318822475,null),new cljs.core.Keyword(null,"btc-price","btc-price",1852560328),new cljs.core.Symbol(null,"?price","?price",152171426,null)], null)], null));
return ((function (luno_price,coinbase_price){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Arbitrage"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Amount"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(234234)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Luno"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),client.ui.exchange_pairs.call(null,"Luno",cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BTC",(1),"ZAR",(324234234)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BTC",(1),"ZAR",(324234234)], null)))], null)], null);
});
;})(luno_price,coinbase_price))
});

//# sourceMappingURL=ui.js.map?rel=1512634241082
