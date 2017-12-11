// Compiled by ClojureScript 1.9.908 {}
goog.provide('client.ui');
goog.require('cljs.core');
goog.require('client.data');
goog.require('reagent.core');
goog.require('datascript.core');
datascript.core.transact_BANG_.call(null,client.data.conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exchange-name","exchange-name",1814705482),"Luno",new cljs.core.Keyword(null,"btc-price","btc-price",1852560328),(234234)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exchange-name","exchange-name",1814705482),"Coinbase",new cljs.core.Keyword(null,"btc-price","btc-price",1852560328),(234234)], null)], null));
client.ui.exchange_pairs = (function client$ui$exchange_pairs(exchange_name,pairs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),exchange_name], null),(function (){var iter__43196__auto__ = (function client$ui$exchange_pairs_$_iter__54625(s__54626){
return (new cljs.core.LazySeq(null,(function (){
var s__54626__$1 = s__54626;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__54626__$1);
if(temp__5457__auto__){
var s__54626__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54626__$2)){
var c__43194__auto__ = cljs.core.chunk_first.call(null,s__54626__$2);
var size__43195__auto__ = cljs.core.count.call(null,c__43194__auto__);
var b__54628 = cljs.core.chunk_buffer.call(null,size__43195__auto__);
if((function (){var i__54627 = (0);
while(true){
if((i__54627 < size__43195__auto__)){
var vec__54629 = cljs.core._nth.call(null,c__43194__auto__,i__54627);
var ticker_1 = cljs.core.nth.call(null,vec__54629,(0),null);
var price_1 = cljs.core.nth.call(null,vec__54629,(1),null);
var ticker_2 = cljs.core.nth.call(null,vec__54629,(2),null);
var price_2 = cljs.core.nth.call(null,vec__54629,(3),null);
cljs.core.chunk_append.call(null,b__54628,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.concat.call(null,ticker_1,"/",ticker_2)," ",(price_2 / price_1)], null));

var G__54635 = (i__54627 + (1));
i__54627 = G__54635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54628),client$ui$exchange_pairs_$_iter__54625.call(null,cljs.core.chunk_rest.call(null,s__54626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54628),null);
}
} else {
var vec__54632 = cljs.core.first.call(null,s__54626__$2);
var ticker_1 = cljs.core.nth.call(null,vec__54632,(0),null);
var price_1 = cljs.core.nth.call(null,vec__54632,(1),null);
var ticker_2 = cljs.core.nth.call(null,vec__54632,(2),null);
var price_2 = cljs.core.nth.call(null,vec__54632,(3),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.concat.call(null,ticker_1,"/",ticker_2)," ",(price_2 / price_1)], null),client$ui$exchange_pairs_$_iter__54625.call(null,cljs.core.rest.call(null,s__54626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43196__auto__.call(null,pairs);
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

//# sourceMappingURL=ui.js.map?rel=1513003908316
