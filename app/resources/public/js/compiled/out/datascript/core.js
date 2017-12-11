// Compiled by ClojureScript 1.9.908 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.query');
goog.require('datascript.impl.entity');
goog.require('datascript.btset');
datascript.core.q = (function datascript$core$q(var_args){
var args__44034__auto__ = [];
var len__44016__auto___47786 = arguments.length;
var i__44017__auto___47787 = (0);
while(true){
if((i__44017__auto___47787 < len__44016__auto___47786)){
args__44034__auto__.push((arguments[i__44017__auto___47787]));

var G__47788 = (i__44017__auto___47787 + (1));
i__44017__auto___47787 = G__47788;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((1) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((1)),(0),null)):null);
return datascript.core.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44035__auto__);
});

datascript.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
return null;
});

datascript.core.q.cljs$lang$maxFixedArity = (1);

datascript.core.q.cljs$lang$applyTo = (function (seq47784){
var G__47785 = cljs.core.first.call(null,seq47784);
var seq47784__$1 = cljs.core.next.call(null,seq47784);
return datascript.core.q.cljs$core$IFn$_invoke$arity$variadic(G__47785,seq47784__$1);
});

datascript.core.q = datascript.query.q;
datascript.core.entity = (function datascript$core$entity(db,eid){
return null;
});
datascript.core.entity = datascript.impl.entity.entity;
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
datascript.core.datom = (function datascript$core$datom(var_args){
var G__47790 = arguments.length;
switch (G__47790) {
case 3:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return null;
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return null;
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return null;
});

datascript.core.datom.cljs$lang$maxFixedArity = 5;

datascript.core.datom = datascript.db.datom;
datascript.core.pull = (function datascript$core$pull(db,selector,eid){
return null;
});
datascript.core.pull = datascript.pull_api.pull;
datascript.core.pull_many = (function datascript$core$pull_many(db,selector,eids){
return null;
});
datascript.core.pull_many = datascript.pull_api.pull_many;
datascript.core.touch = (function datascript$core$touch(e){
return null;
});
datascript.core.touch = datascript.impl.entity.touch;
datascript.core.empty_db = (function datascript$core$empty_db(var_args){
var G__47793 = arguments.length;
switch (G__47793) {
case 0:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return null;
});

datascript.core.empty_db.cljs$lang$maxFixedArity = 1;

datascript.core.empty_db = datascript.db.empty_db;
datascript.core.init_db = (function datascript$core$init_db(var_args){
var G__47796 = arguments.length;
switch (G__47796) {
case 1:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return null;
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return null;
});

datascript.core.init_db.cljs$lang$maxFixedArity = 2;

datascript.core.init_db = datascript.db.init_db;
datascript.core.datom_QMARK_ = (function datascript$core$datom_QMARK_(x){
return null;
});
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
datascript.core.db_QMARK_ = (function datascript$core$db_QMARK_(x){
return null;
});
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
datascript.core.tx0 = (536870912);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__47798_SHARP_){
var and__41318__auto__ = orig_pred.call(null,p1__47798_SHARP_);
if(cljs.core.truth_(and__41318__auto__)){
return pred.call(null,orig_db,p1__47798_SHARP_);
} else {
return and__41318__auto__;
}
});})(fdb,orig_pred,orig_db))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__47799_SHARP_){
return pred.call(null,db,p1__47799_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
datascript.core.with$ = (function datascript$core$with(var_args){
var G__47801 = arguments.length;
switch (G__47801) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
datascript.core.datoms = (function datascript$core$datoms(var_args){
var G__47804 = arguments.length;
switch (G__47804) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var G__47807 = arguments.length;
switch (G__47807) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
datascript.core.entid = (function datascript$core$entid(db,eid){
return null;
});
datascript.core.entid = datascript.db.entid;
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__41318__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__41318__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__41318__auto__;
}
});
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var G__47812 = arguments.length;
switch (G__47812) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var G__47815 = arguments.length;
switch (G__47815) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var G__47818 = arguments.length;
switch (G__47818) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__47819_47830 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__47820_47831 = null;
var count__47821_47832 = (0);
var i__47822_47833 = (0);
while(true){
if((i__47822_47833 < count__47821_47832)){
var vec__47823_47834 = cljs.core._nth.call(null,chunk__47820_47831,i__47822_47833);
var __47835 = cljs.core.nth.call(null,vec__47823_47834,(0),null);
var callback_47836 = cljs.core.nth.call(null,vec__47823_47834,(1),null);
callback_47836.call(null,report);

var G__47837 = seq__47819_47830;
var G__47838 = chunk__47820_47831;
var G__47839 = count__47821_47832;
var G__47840 = (i__47822_47833 + (1));
seq__47819_47830 = G__47837;
chunk__47820_47831 = G__47838;
count__47821_47832 = G__47839;
i__47822_47833 = G__47840;
continue;
} else {
var temp__5457__auto___47841 = cljs.core.seq.call(null,seq__47819_47830);
if(temp__5457__auto___47841){
var seq__47819_47842__$1 = temp__5457__auto___47841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47819_47842__$1)){
var c__43322__auto___47843 = cljs.core.chunk_first.call(null,seq__47819_47842__$1);
var G__47844 = cljs.core.chunk_rest.call(null,seq__47819_47842__$1);
var G__47845 = c__43322__auto___47843;
var G__47846 = cljs.core.count.call(null,c__43322__auto___47843);
var G__47847 = (0);
seq__47819_47830 = G__47844;
chunk__47820_47831 = G__47845;
count__47821_47832 = G__47846;
i__47822_47833 = G__47847;
continue;
} else {
var vec__47826_47848 = cljs.core.first.call(null,seq__47819_47842__$1);
var __47849 = cljs.core.nth.call(null,vec__47826_47848,(0),null);
var callback_47850 = cljs.core.nth.call(null,vec__47826_47848,(1),null);
callback_47850.call(null,report);

var G__47851 = cljs.core.next.call(null,seq__47819_47842__$1);
var G__47852 = null;
var G__47853 = (0);
var G__47854 = (0);
seq__47819_47830 = G__47851;
chunk__47820_47831 = G__47852;
count__47821_47832 = G__47853;
i__47822_47833 = G__47854;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var G__47857 = arguments.length;
switch (G__47857) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__47855_SHARP_){
return cljs.core.assoc.call(null,p1__47855_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__47858_47869 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__47859_47870 = null;
var count__47860_47871 = (0);
var i__47861_47872 = (0);
while(true){
if((i__47861_47872 < count__47860_47871)){
var vec__47862_47873 = cljs.core._nth.call(null,chunk__47859_47870,i__47861_47872);
var __47874 = cljs.core.nth.call(null,vec__47862_47873,(0),null);
var callback_47875 = cljs.core.nth.call(null,vec__47862_47873,(1),null);
callback_47875.call(null,report);

var G__47876 = seq__47858_47869;
var G__47877 = chunk__47859_47870;
var G__47878 = count__47860_47871;
var G__47879 = (i__47861_47872 + (1));
seq__47858_47869 = G__47876;
chunk__47859_47870 = G__47877;
count__47860_47871 = G__47878;
i__47861_47872 = G__47879;
continue;
} else {
var temp__5457__auto___47880 = cljs.core.seq.call(null,seq__47858_47869);
if(temp__5457__auto___47880){
var seq__47858_47881__$1 = temp__5457__auto___47880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47858_47881__$1)){
var c__43322__auto___47882 = cljs.core.chunk_first.call(null,seq__47858_47881__$1);
var G__47883 = cljs.core.chunk_rest.call(null,seq__47858_47881__$1);
var G__47884 = c__43322__auto___47882;
var G__47885 = cljs.core.count.call(null,c__43322__auto___47882);
var G__47886 = (0);
seq__47858_47869 = G__47883;
chunk__47859_47870 = G__47884;
count__47860_47871 = G__47885;
i__47861_47872 = G__47886;
continue;
} else {
var vec__47865_47887 = cljs.core.first.call(null,seq__47858_47881__$1);
var __47888 = cljs.core.nth.call(null,vec__47865_47887,(0),null);
var callback_47889 = cljs.core.nth.call(null,vec__47865_47887,(1),null);
callback_47889.call(null,report);

var G__47890 = cljs.core.next.call(null,seq__47858_47881__$1);
var G__47891 = null;
var G__47892 = (0);
var G__47893 = (0);
seq__47858_47869 = G__47890;
chunk__47859_47870 = G__47891;
count__47860_47871 = G__47892;
i__47861_47872 = G__47893;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var G__47895 = arguments.length;
switch (G__47895) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__47897_47907 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__47898_47908 = null;
var count__47899_47909 = (0);
var i__47900_47910 = (0);
while(true){
if((i__47900_47910 < count__47899_47909)){
var vec__47901_47911 = cljs.core._nth.call(null,chunk__47898_47908,i__47900_47910);
var tag_47912 = cljs.core.nth.call(null,vec__47901_47911,(0),null);
var cb_47913 = cljs.core.nth.call(null,vec__47901_47911,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_47912,cb_47913);

var G__47914 = seq__47897_47907;
var G__47915 = chunk__47898_47908;
var G__47916 = count__47899_47909;
var G__47917 = (i__47900_47910 + (1));
seq__47897_47907 = G__47914;
chunk__47898_47908 = G__47915;
count__47899_47909 = G__47916;
i__47900_47910 = G__47917;
continue;
} else {
var temp__5457__auto___47918 = cljs.core.seq.call(null,seq__47897_47907);
if(temp__5457__auto___47918){
var seq__47897_47919__$1 = temp__5457__auto___47918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47897_47919__$1)){
var c__43322__auto___47920 = cljs.core.chunk_first.call(null,seq__47897_47919__$1);
var G__47921 = cljs.core.chunk_rest.call(null,seq__47897_47919__$1);
var G__47922 = c__43322__auto___47920;
var G__47923 = cljs.core.count.call(null,c__43322__auto___47920);
var G__47924 = (0);
seq__47897_47907 = G__47921;
chunk__47898_47908 = G__47922;
count__47899_47909 = G__47923;
i__47900_47910 = G__47924;
continue;
} else {
var vec__47904_47925 = cljs.core.first.call(null,seq__47897_47919__$1);
var tag_47926 = cljs.core.nth.call(null,vec__47904_47925,(0),null);
var cb_47927 = cljs.core.nth.call(null,vec__47904_47925,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_47926,cb_47927);

var G__47928 = cljs.core.next.call(null,seq__47897_47919__$1);
var G__47929 = null;
var G__47930 = (0);
var G__47931 = (0);
seq__47897_47907 = G__47928;
chunk__47898_47908 = G__47929;
count__47899_47909 = G__47930;
i__47900_47910 = G__47931;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var G__47933 = arguments.length;
switch (G__47933) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
datascript.core.transact = (function datascript$core$transact(var_args){
var G__47936 = arguments.length;
switch (G__47936) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core47937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core47937 = (function (conn,tx_data,tx_meta,res,meta47938){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta47938 = meta47938;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
datascript.core.t_datascript$core47937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_47939,meta47938__$1){
var self__ = this;
var _47939__$1 = this;
return (new datascript.core.t_datascript$core47937(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta47938__$1));
});})(res))
;

datascript.core.t_datascript$core47937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_47939){
var self__ = this;
var _47939__$1 = this;
return self__.meta47938;
});})(res))
;

datascript.core.t_datascript$core47937.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core47937.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core47937.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core47937.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta47938","meta47938",1994870419,null)], null);
});})(res))
;

datascript.core.t_datascript$core47937.cljs$lang$type = true;

datascript.core.t_datascript$core47937.cljs$lang$ctorStr = "datascript.core/t_datascript$core47937";

datascript.core.t_datascript$core47937.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"datascript.core/t_datascript$core47937");
});})(res))
;

datascript.core.__GT_t_datascript$core47937 = ((function (res){
return (function datascript$core$__GT_t_datascript$core47937(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta47938){
return (new datascript.core.t_datascript$core47937(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta47938));
});})(res))
;

}

return (new datascript.core.t_datascript$core47937(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core47941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core47941 = (function (f,res,realized,meta47942){
this.f = f;
this.res = res;
this.realized = realized;
this.meta47942 = meta47942;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
datascript.core.t_datascript$core47941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_47943,meta47942__$1){
var self__ = this;
var _47943__$1 = this;
return (new datascript.core.t_datascript$core47941(self__.f,self__.res,self__.realized,meta47942__$1));
});})(res,realized))
;

datascript.core.t_datascript$core47941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_47943){
var self__ = this;
var _47943__$1 = this;
return self__.meta47942;
});})(res,realized))
;

datascript.core.t_datascript$core47941.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core47941.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core47941.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core47941.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta47942","meta47942",-301381739,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core47941.cljs$lang$type = true;

datascript.core.t_datascript$core47941.cljs$lang$ctorStr = "datascript.core/t_datascript$core47941";

datascript.core.t_datascript$core47941.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"datascript.core/t_datascript$core47941");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core47941 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core47941(f__$1,res__$1,realized__$1,meta47942){
return (new datascript.core.t_datascript$core47941(f__$1,res__$1,realized__$1,meta47942));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core47941(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var G__47945 = arguments.length;
switch (G__47945) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var G__47948 = arguments.length;
switch (G__47948) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=core.js.map?rel=1513003827555
