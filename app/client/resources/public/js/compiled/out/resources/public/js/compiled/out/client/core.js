// Compiled by ClojureScript 1.9.908 {}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('datascript.core');
cljs.core.enable_console_print_BANG_.call(null);
client.core.bind = (function client$core$bind(var_args){
var G__57930 = arguments.length;
switch (G__57930) {
case 2:
return client.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return client.core.bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

client.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (conn,q){
return client.core.bind.call(null,conn,q,cljs.core.atom.call(null,null));
});

client.core.bind.cljs$core$IFn$_invoke$arity$3 = (function (conn,q,state){
var k = uuid.make_random_uuid();
cljs.core.reset_BANG_.call(null,state,datascript.core.q.call(null,q,cljs.core.deref.call(null,conn)));

datascript.core.listen_BANG_.call(null,conn,k,((function (k){
return (function (tx_report){
var novelty = datascript.core.q.call(null,q,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
if(cljs.core.truth_(cljs.core.not_empty.call(null,novelty))){
return cljs.core.reset_BANG_.call(null,state,datascript.core.q.call(null,q,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report)));
} else {
return null;
}
});})(k))
);

state.__key = k;

return state;
});

client.core.bind.cljs$lang$maxFixedArity = 3;

client.core.unbind = (function client$core$unbind(conn,state){
return datascript.core.unlisten_BANG_.call(null,conn,state.__key);
});
client.core.conn = datascript.core.create_conn.call(null);
datascript.core.transact_BANG_.call(null,client.core.conn,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Alexis",new cljs.core.Keyword(null,"age","age",-604307804),(22),new cljs.core.Keyword(null,"surname","surname",1407918027),"Vincent"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Emma",new cljs.core.Keyword(null,"age","age",-604307804),(24),new cljs.core.Keyword(null,"surname","surname",1407918027),"Botha"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Julien",new cljs.core.Keyword(null,"age","age",-604307804),(20),new cljs.core.Keyword(null,"surname","surname",1407918027),"Vincent"], null)], null));
datascript.core.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),cljs.core.deref.call(null,client.core.conn));

//# sourceMappingURL=core.js.map?rel=1509445810361
