// Compiled by ClojureScript 1.9.908 {}
goog.provide('posh.reagent');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.stateful');
goog.require('posh.lib.db');
goog.require('posh.lib.update');
goog.require('datascript.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
posh.reagent.missing_pull_result = (function posh$reagent$missing_pull_result(pull_expr){
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.reagent.safe_pull = (function posh$reagent$safe_pull(db,query,id){
if(cljs.core.integer_QMARK_.call(null,id)){
return datascript.core.pull.call(null,db,query,id);
} else {
if(cljs.core.vector_QMARK_.call(null,id)){
var temp__5276__auto__ = datascript.core.entid.call(null,db,id);
if(cljs.core.truth_(temp__5276__auto__)){
var eid = temp__5276__auto__;
return datascript.core.pull.call(null,db,query,eid);
} else {
return posh.reagent.missing_pull_result.call(null,query);
}
} else {
if((id == null)){
return posh.reagent.missing_pull_result.call(null,query);
} else {
return null;
}
}
}
});
posh.reagent.dcfg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"db","db",993250759),datascript.core.db,new cljs.core.Keyword(null,"pull","pull",-860544805),posh.reagent.safe_pull,new cljs.core.Keyword(null,"q","q",689001697),datascript.core.q,new cljs.core.Keyword(null,"filter","filter",-948537934),datascript.core.filter,new cljs.core.Keyword(null,"with","with",-1536296876),datascript.core.with$,new cljs.core.Keyword(null,"entid","entid",1720688982),datascript.core.entid,new cljs.core.Keyword(null,"transact!","transact!",-822725810),datascript.core.transact_BANG_], null);
posh.reagent.set_conn_listener_BANG_ = (function posh$reagent$set_conn_listener_BANG_(posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
datascript.core.listen_BANG_.call(null,conn,new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766),((function (posh_vars){
return (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.call(null,posh_vars,var$);
} else {
return null;
}
});})(posh_vars))
);

cljs.core.add_watch.call(null,conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),((function (posh_vars){
return (function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.call(null,posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
});})(posh_vars))
);

datascript.core.listen_BANG_.call(null,conn,new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061),((function (posh_vars){
return (function (tx_report){
var map__51624 = cljs.core.swap_BANG_.call(null,posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__51624__$1 = ((((!((map__51624 == null)))?((((map__51624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51624):map__51624);
var ratoms = cljs.core.get.call(null,map__51624__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.call(null,map__51624__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__51626 = cljs.core.seq.call(null,changed);
var chunk__51627 = null;
var count__51628 = (0);
var i__51629 = (0);
while(true){
if((i__51629 < count__51628)){
var vec__51630 = cljs.core._nth.call(null,chunk__51627,i__51629);
var k = cljs.core.nth.call(null,vec__51630,(0),null);
var v = cljs.core.nth.call(null,vec__51630,(1),null);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));

var G__51636 = seq__51626;
var G__51637 = chunk__51627;
var G__51638 = count__51628;
var G__51639 = (i__51629 + (1));
seq__51626 = G__51636;
chunk__51627 = G__51637;
count__51628 = G__51638;
i__51629 = G__51639;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__51626);
if(temp__5278__auto__){
var seq__51626__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51626__$1)){
var c__43741__auto__ = cljs.core.chunk_first.call(null,seq__51626__$1);
var G__51640 = cljs.core.chunk_rest.call(null,seq__51626__$1);
var G__51641 = c__43741__auto__;
var G__51642 = cljs.core.count.call(null,c__43741__auto__);
var G__51643 = (0);
seq__51626 = G__51640;
chunk__51627 = G__51641;
count__51628 = G__51642;
i__51629 = G__51643;
continue;
} else {
var vec__51633 = cljs.core.first.call(null,seq__51626__$1);
var k = cljs.core.nth.call(null,vec__51633,(0),null);
var v = cljs.core.nth.call(null,vec__51633,(1),null);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));

var G__51644 = cljs.core.next.call(null,seq__51626__$1);
var G__51645 = null;
var G__51646 = (0);
var G__51647 = (0);
seq__51626 = G__51644;
chunk__51627 = G__51645;
count__51628 = G__51646;
i__51629 = G__51647;
continue;
}
} else {
return null;
}
}
break;
}
});})(posh_vars))
);

return conn;
});
posh.reagent.posh_BANG_ = (function posh$reagent$posh_BANG_(var_args){
var args__44094__auto__ = [];
var len__44087__auto___51649 = arguments.length;
var i__44088__auto___51650 = (0);
while(true){
if((i__44088__auto___51650 < len__44087__auto___51649)){
args__44094__auto__.push((arguments[i__44088__auto___51650]));

var G__51651 = (i__44088__auto___51650 + (1));
i__44088__auto___51650 = G__51651;
continue;
} else {
}
break;
}

var argseq__44095__auto__ = ((((0) < args__44094__auto__.length))?(new cljs.core.IndexedSeq(args__44094__auto__.slice((0)),(0),null)):null);
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__44095__auto__);
});

posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns){
var posh_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_.call(null,posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.call(null,posh.core.empty_tree.call(null,posh.reagent.dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,conns__$1)){
return posh_tree;
} else {
var G__51652 = (n + (1));
var G__51653 = cljs.core.rest.call(null,conns__$1);
var G__51654 = (function (){var db_id = cljs.core.keyword.call(null,["conn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.call(null,posh_tree,db_id,posh.reagent.set_conn_listener_BANG_.call(null,posh_atom,cljs.core.first.call(null,conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.first.call(null,conns__$1))));
})();
n = G__51652;
conns__$1 = G__51653;
posh_tree = G__51654;
continue;
}
break;
}
})());
});

posh.reagent.posh_BANG_.cljs$lang$maxFixedArity = (0);

posh.reagent.posh_BANG_.cljs$lang$applyTo = (function (seq51648){
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51648));
});

posh.reagent.get_conn_var = (function posh$reagent$get_conn_var(conn,var$){
return new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)))).call(null,var$);
});
posh.reagent.get_posh_atom = (function posh$reagent$get_posh_atom(poshdb_or_conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))){
return posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom.call(null,poshdb_or_conn);
}
});
posh.reagent.get_db = (function posh$reagent$get_db(poshdb_or_conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.reagent.rm_posh_item = (function posh$reagent$rm_posh_item(posh_atom,storage_key){
return cljs.core.swap_BANG_.call(null,posh_atom,(function (posh_atom_val){
return cljs.core.assoc.call(null,posh.core.remove_item.call(null,posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key));
}));
});
posh.reagent.make_query_reaction = (function posh$reagent$make_query_reaction(var_args){
var G__51656 = arguments.length;
switch (G__51656) {
case 4:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (posh_atom,storage_key,add_query_fn,options){
var temp__5276__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__5276__auto__)){
var r = temp__5276__auto__;
return r;
} else {
return cljs.core.get.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,posh_atom,((function (temp__5276__auto__){
return (function (posh_atom_val){
var posh_atom_with_query = add_query_fn.call(null,posh_atom_val);
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__42312__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__42312__auto__)){
return or__42312__auto__;
} else {
return reagent.core.atom.call(null,query_result);
}
})();
var query_reaction = reagent.ratom.make_reaction.call(null,((function (posh_atom_with_query,query_result,query_ratom,temp__5276__auto__){
return (function (){
return cljs.core.deref.call(null,query_ratom);
});})(posh_atom_with_query,query_result,query_ratom,temp__5276__auto__))
,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (posh_atom_with_query,query_result,query_ratom,temp__5276__auto__){
return (function (_,___$1){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,posh_atom,((function (posh_atom_with_query,query_result,query_ratom,temp__5276__auto__){
return (function (posh_atom_val__$1){
return cljs.core.assoc.call(null,posh.core.remove_item.call(null,posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key));
});})(posh_atom_with_query,query_result,query_ratom,temp__5276__auto__))
);
}
});})(posh_atom_with_query,query_result,query_ratom,temp__5276__auto__))
);
return cljs.core.assoc.call(null,posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction));
});})(temp__5276__auto__))
)),storage_key);
}
});

posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3 = (function (posh_atom,storage_key,add_query_fn){
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
});

posh.reagent.make_query_reaction.cljs$lang$maxFixedArity = 4;

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.reagent.pull = (function posh$reagent$pull(var_args){
var G__51660 = arguments.length;
switch (G__51660) {
case 4:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.reagent.pull.cljs$core$IFn$_invoke$arity$4 = (function (poshdb,pull_pattern,eid,options){
var true_poshdb = posh.reagent.get_db.call(null,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom.call(null,poshdb);
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,((function (true_poshdb,storage_key,posh_atom){
return (function (p1__51658_SHARP_){
return posh.core.add_pull.call(null,p1__51658_SHARP_,true_poshdb,pull_pattern,eid);
});})(true_poshdb,storage_key,posh_atom))
,options);
});

posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 = (function (poshdb,pull_pattern,eid){
return posh.reagent.pull.call(null,poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
});

posh.reagent.pull.cljs$lang$maxFixedArity = 4;

posh.reagent.pull_info = (function posh$reagent$pull_info(poshdb,pull_pattern,eid){
var true_poshdb = posh.reagent.get_db.call(null,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom.call(null,poshdb);
return cljs.core.dissoc.call(null,posh.lib.update.update_pull.call(null,cljs.core.deref.call(null,posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.reagent.pull_tx = (function posh$reagent$pull_tx(tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.call(null,"pull-tx is deprecated. Calling pull without your tx-patterns.");

return posh.reagent.pull.call(null,poshdb,pull_pattern,eid);
});
posh.reagent.parse_q_query = (function posh$reagent$parse_q_query(query){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__51662,query_item){
var vec__51663 = p__51662;
var parsed_query = cljs.core.nth.call(null,vec__51663,(0),null);
var last_key = cljs.core.nth.call(null,vec__51663,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.reagent.q_args_count = (function posh$reagent$q_args_count(query){
var parsed_query = posh.reagent.parse_q_query.call(null,query);
var temp__5276__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__5276__auto__)){
var in_clause = temp__5276__auto__;
return cljs.core.count.call(null,in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.reagent.q = (function posh$reagent$q(var_args){
var args__44094__auto__ = [];
var len__44087__auto___51673 = arguments.length;
var i__44088__auto___51674 = (0);
while(true){
if((i__44088__auto___51674 < len__44087__auto___51673)){
args__44094__auto__.push((arguments[i__44088__auto___51674]));

var G__51675 = (i__44088__auto___51674 + (1));
i__44088__auto___51674 = G__51675;
continue;
} else {
}
break;
}

var argseq__44095__auto__ = ((((1) < args__44094__auto__.length))?(new cljs.core.IndexedSeq(args__44094__auto__.slice((1)),(0),null)):null);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44095__auto__);
});

posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var n_query_args = posh.reagent.q_args_count.call(null,query);
var vec__51670 = ((cljs.core._EQ_.call(null,n_query_args,cljs.core.count.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.call(null,(n_query_args + (1)),cljs.core.count.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.call(null,vec__51670,(0),null);
var options = cljs.core.nth.call(null,vec__51670,(1),null);
var true_poshdb_args = cljs.core.map.call(null,((function (n_query_args,vec__51670,args__$1,options){
return (function (p1__51666_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__51666_SHARP_))){
return posh.reagent.get_db.call(null,p1__51666_SHARP_);
} else {
return p1__51666_SHARP_;
}
});})(n_query_args,vec__51670,args__$1,options))
,args__$1);
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,posh.reagent.get_posh_atom,args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,((function (n_query_args,vec__51670,args__$1,options,true_poshdb_args,posh_atom,storage_key){
return (function (p1__51667_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,posh.core.add_q,p1__51667_SHARP_,query),true_poshdb_args);
});})(n_query_args,vec__51670,args__$1,options,true_poshdb_args,posh_atom,storage_key))
,options);
});

posh.reagent.q.cljs$lang$maxFixedArity = (1);

posh.reagent.q.cljs$lang$applyTo = (function (seq51668){
var G__51669 = cljs.core.first.call(null,seq51668);
var seq51668__$1 = cljs.core.next.call(null,seq51668);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(G__51669,seq51668__$1);
});

posh.reagent.q_info = (function posh$reagent$q_info(var_args){
var args__44094__auto__ = [];
var len__44087__auto___51679 = arguments.length;
var i__44088__auto___51680 = (0);
while(true){
if((i__44088__auto___51680 < len__44087__auto___51679)){
args__44094__auto__.push((arguments[i__44088__auto___51680]));

var G__51681 = (i__44088__auto___51680 + (1));
i__44088__auto___51680 = G__51681;
continue;
} else {
}
break;
}

var argseq__44095__auto__ = ((((1) < args__44094__auto__.length))?(new cljs.core.IndexedSeq(args__44094__auto__.slice((1)),(0),null)):null);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44095__auto__);
});

posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.call(null,(function (p1__51676_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__51676_SHARP_))){
return posh.reagent.get_db.call(null,p1__51676_SHARP_);
} else {
return p1__51676_SHARP_;
}
}),args);
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,posh.reagent.get_posh_atom,args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.call(null,posh.lib.update.update_q.call(null,cljs.core.deref.call(null,posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});

posh.reagent.q_info.cljs$lang$maxFixedArity = (1);

posh.reagent.q_info.cljs$lang$applyTo = (function (seq51677){
var G__51678 = cljs.core.first.call(null,seq51677);
var seq51677__$1 = cljs.core.next.call(null,seq51677);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic(G__51678,seq51677__$1);
});

posh.reagent.q_tx = (function posh$reagent$q_tx(var_args){
var args__44094__auto__ = [];
var len__44087__auto___51685 = arguments.length;
var i__44088__auto___51686 = (0);
while(true){
if((i__44088__auto___51686 < len__44087__auto___51685)){
args__44094__auto__.push((arguments[i__44088__auto___51686]));

var G__51687 = (i__44088__auto___51686 + (1));
i__44088__auto___51686 = G__51687;
continue;
} else {
}
break;
}

var argseq__44095__auto__ = ((((2) < args__44094__auto__.length))?(new cljs.core.IndexedSeq(args__44094__auto__.slice((2)),(0),null)):null);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44095__auto__);
});

posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (tx_patterns,query,args){
cljs.core.println.call(null,"q-tx is deprecated. Calling q without your tx-patterns.");

return cljs.core.apply.call(null,posh.reagent.q,query,args);
});

posh.reagent.q_tx.cljs$lang$maxFixedArity = (2);

posh.reagent.q_tx.cljs$lang$applyTo = (function (seq51682){
var G__51683 = cljs.core.first.call(null,seq51682);
var seq51682__$1 = cljs.core.next.call(null,seq51682);
var G__51684 = cljs.core.first.call(null,seq51682__$1);
var seq51682__$2 = cljs.core.next.call(null,seq51682__$1);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic(G__51683,G__51684,seq51682__$2);
});

posh.reagent.filter_tx = (function posh$reagent$filter_tx(poshdb,tx_patterns){
return posh.stateful.add_filter_tx.call(null,posh.reagent.get_db.call(null,poshdb),tx_patterns);
});
posh.reagent.filter_pull = (function posh$reagent$filter_pull(poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull.call(null,posh.reagent.get_db.call(null,poshdb),pull_pattern,eid);
});
posh.reagent.filter_q = (function posh$reagent$filter_q(var_args){
var args__44094__auto__ = [];
var len__44087__auto___51691 = arguments.length;
var i__44088__auto___51692 = (0);
while(true){
if((i__44088__auto___51692 < len__44087__auto___51691)){
args__44094__auto__.push((arguments[i__44088__auto___51692]));

var G__51693 = (i__44088__auto___51692 + (1));
i__44088__auto___51692 = G__51693;
continue;
} else {
}
break;
}

var argseq__44095__auto__ = ((((1) < args__44094__auto__.length))?(new cljs.core.IndexedSeq(args__44094__auto__.slice((1)),(0),null)):null);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44095__auto__);
});

posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.call(null,(function (p1__51688_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__51688_SHARP_))){
return posh.reagent.get_db.call(null,p1__51688_SHARP_);
} else {
return p1__51688_SHARP_;
}
}),args);
return cljs.core.apply.call(null,posh.stateful.add_filter_q,query,true_poshdb_args);
});

posh.reagent.filter_q.cljs$lang$maxFixedArity = (1);

posh.reagent.filter_q.cljs$lang$applyTo = (function (seq51689){
var G__51690 = cljs.core.first.call(null,seq51689);
var seq51689__$1 = cljs.core.next.call(null,seq51689);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic(G__51690,seq51689__$1);
});

posh.reagent.transact_BANG_ = (function posh$reagent$transact_BANG_(poshdb_or_conn,txs){
return datascript.core.transact_BANG_.call(null,(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))?poshdb_or_conn:posh.stateful.poshdb__GT_conn.call(null,poshdb_or_conn)),txs);
});

//# sourceMappingURL=reagent.js.map?rel=1509370378851
