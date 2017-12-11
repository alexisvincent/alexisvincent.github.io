// Compiled by ClojureScript 1.9.908 {}
goog.provide('client.ui');
goog.require('cljs.core');
goog.require('client.data');
goog.require('ajax.core');
goog.require('promesa.core');
goog.require('promesa.async_cljs');
goog.require('venia.core');
goog.require('clojure.walk');
goog.require('datascript.core');
client.ui.root = (function client$ui$root(){
var people = client.data.reactive_q.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"milestone","milestone",-1282740856)], null)], null));
return ((function (people){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Milestones",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__43395__auto__ = ((function (people){
return (function client$ui$root_$_iter__59817(s__59818){
return (new cljs.core.LazySeq(null,((function (people){
return (function (){
var s__59818__$1 = s__59818;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__59818__$1);
if(temp__5278__auto__){
var s__59818__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__59818__$2)){
var c__43393__auto__ = cljs.core.chunk_first.call(null,s__59818__$2);
var size__43394__auto__ = cljs.core.count.call(null,c__43393__auto__);
var b__59820 = cljs.core.chunk_buffer.call(null,size__43394__auto__);
if((function (){var i__59819 = (0);
while(true){
if((i__59819 < size__43394__auto__)){
var vec__59821 = cljs.core._nth.call(null,c__43393__auto__,i__59819);
var id = cljs.core.nth.call(null,vec__59821,(0),null);
var name = cljs.core.nth.call(null,vec__59821,(1),null);
cljs.core.chunk_append.call(null,b__59820,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),"My name is ",name], null));

var G__59827 = (i__59819 + (1));
i__59819 = G__59827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59820),client$ui$root_$_iter__59817.call(null,cljs.core.chunk_rest.call(null,s__59818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59820),null);
}
} else {
var vec__59824 = cljs.core.first.call(null,s__59818__$2);
var id = cljs.core.nth.call(null,vec__59824,(0),null);
var name = cljs.core.nth.call(null,vec__59824,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),"My name is ",name], null),client$ui$root_$_iter__59817.call(null,cljs.core.rest.call(null,s__59818__$2)));
}
} else {
return null;
}
break;
}
});})(people))
,null,null));
});})(people))
;
return iter__43395__auto__.call(null,cljs.core.deref.call(null,people));
})()], null)], null);
});
;})(people))
});
client.ui.arg__GT_str = (function client$ui$arg__GT_str(v){
if(cljs.core.map_QMARK_.call(null,v)){
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client.ui.args__GT_str.call(null,v)),"}"].join('');
} else {
if((v instanceof cljs.core.Keyword)){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,v)),"\""].join('');
} else {
if(typeof v === 'string'){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\""].join('');
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,client.ui.arg__GT_str,v)))),"]"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');

}
}
}
}
});
client.ui.args__GT_str = (function client$ui$args__GT_str(m){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.interpose.call(null,",",(function (){var iter__43395__auto__ = (function client$ui$args__GT_str_$_iter__59828(s__59829){
return (new cljs.core.LazySeq(null,(function (){
var s__59829__$1 = s__59829;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__59829__$1);
if(temp__5278__auto__){
var s__59829__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__59829__$2)){
var c__43393__auto__ = cljs.core.chunk_first.call(null,s__59829__$2);
var size__43394__auto__ = cljs.core.count.call(null,c__43393__auto__);
var b__59831 = cljs.core.chunk_buffer.call(null,size__43394__auto__);
if((function (){var i__59830 = (0);
while(true){
if((i__59830 < size__43394__auto__)){
var vec__59832 = cljs.core._nth.call(null,c__43393__auto__,i__59830);
var k = cljs.core.nth.call(null,vec__59832,(0),null);
var v = cljs.core.nth.call(null,vec__59832,(1),null);
cljs.core.chunk_append.call(null,b__59831,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),":",client.ui.arg__GT_str.call(null,v)], null));

var G__59838 = (i__59830 + (1));
i__59830 = G__59838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59831),client$ui$args__GT_str_$_iter__59828.call(null,cljs.core.chunk_rest.call(null,s__59829__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59831),null);
}
} else {
var vec__59835 = cljs.core.first.call(null,s__59829__$2);
var k = cljs.core.nth.call(null,vec__59835,(0),null);
var v = cljs.core.nth.call(null,vec__59835,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),":",client.ui.arg__GT_str.call(null,v)], null),client$ui$args__GT_str_$_iter__59828.call(null,cljs.core.rest.call(null,s__59829__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43395__auto__.call(null,m);
})())));
});
client.ui.query__GT_str = (function client$ui$query__GT_str(q){
if((q instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,q);
} else {
var f = cljs.core.first.call(null,q);
var s = cljs.core.second.call(null,q);
var r = ((cljs.core.map_QMARK_.call(null,s))?cljs.core.drop.call(null,(2),q):cljs.core.rest.call(null,q));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,(((f instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,f),((cljs.core.map_QMARK_.call(null,s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",client.ui.args__GT_str.call(null,s),")"], null):""),((cljs.core.seq.call(null,r))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{",cljs.core.interpose.call(null," ",cljs.core.map.call(null,client.ui.query__GT_str,r)),"}"], null):null)], null):((cljs.core.vector_QMARK_.call(null,f))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{",cljs.core.map.call(null,client.ui.query__GT_str,q),"}"], null):""
))));
}
});
client.ui.make_graphql_query = (function client$ui$make_graphql_query(endpoint,auth_token,query){
return promesa.core.promise.call(null,(function (resolve,reject){
return ajax.core.POST.call(null,endpoint,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"auth","auth",1389754926),auth_token,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(auth_token)].join('')], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__59839_SHARP_){
return resolve.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response","response",-1068424192),p1__59839_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"succeded","succeded",-1433405104)], null));
}),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__59840_SHARP_){
return reject.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response","response",-1068424192),p1__59840_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failed","failed",-1397425762)], null));
})], null));
}));
});
client.ui.get_github_issue_data = (function client$ui$get_github_issue_data(owner,repository,api_token){
var query = client.ui.query__GT_str.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repository","repository",1489835364),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),owner,new cljs.core.Keyword(null,"name","name",1843675177),repository], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"milestones","milestones",-634229381),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first","first",-644103046),(100)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"state","state",-1988618099)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"issues","issues",1989874693),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first","first",-644103046),(100)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"milestone","milestone",-1282740856),new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null)], null)], null));
var issue_data = client.ui.make_graphql_query.call(null,"https://api.github.com/graphql",api_token,query);
return issue_data;
});
promesa.core.then.call(null,client.ui.get_github_issue_data.call(null,"alexisvincent","transaction-engine","abdf41090e1f75f11d5b61c28e25410f24907211"),(function (data){
var keyed_data = clojure.walk.keywordize_keys.call(null,data);
var map__59843 = keyed_data;
var map__59843__$1 = ((((!((map__59843 == null)))?((((map__59843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59843):map__59843);
var map__59844 = cljs.core.get.call(null,map__59843__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__59844__$1 = ((((!((map__59844 == null)))?((((map__59844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59844):map__59844);
var map__59845 = cljs.core.get.call(null,map__59844__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59845__$1 = ((((!((map__59845 == null)))?((((map__59845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59845):map__59845);
var map__59846 = cljs.core.get.call(null,map__59845__$1,new cljs.core.Keyword(null,"repository","repository",1489835364));
var map__59846__$1 = ((((!((map__59846 == null)))?((((map__59846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59846):map__59846);
var map__59847 = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"milestones","milestones",-634229381));
var map__59847__$1 = ((((!((map__59847 == null)))?((((map__59847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59847):map__59847);
var milestones = cljs.core.get.call(null,map__59847__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var map__59848 = cljs.core.get.call(null,map__59846__$1,new cljs.core.Keyword(null,"issues","issues",1989874693));
var map__59848__$1 = ((((!((map__59848 == null)))?((((map__59848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59848):map__59848);
var issues = cljs.core.get.call(null,map__59848__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var milestones__$1 = cljs.core.map.call(null,((function (keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues){
return (function (p1__59841_SHARP_){
return cljs.core.assoc.call(null,p1__59841_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"milestone","milestone",-1282740856));
});})(keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues))
,milestones);
var issues__$1 = cljs.core.map.call(null,((function (keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues,milestones__$1){
return (function (p__59855){
var map__59856 = p__59855;
var map__59856__$1 = ((((!((map__59856 == null)))?((((map__59856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59856):map__59856);
var issue = map__59856__$1;
var map__59857 = cljs.core.get.call(null,map__59856__$1,new cljs.core.Keyword(null,"milestone","milestone",-1282740856));
var map__59857__$1 = ((((!((map__59857 == null)))?((((map__59857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59857):map__59857);
var milestone_number = cljs.core.get.call(null,map__59857__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var number = cljs.core.get.call(null,map__59856__$1,new cljs.core.Keyword(null,"number","number",1570378438));
return cljs.core.assoc.call(null,issue,new cljs.core.Keyword(null,"number","number",1570378438),((10000) + number),new cljs.core.Keyword(null,"milestone","milestone",-1282740856),milestone_number);
});})(keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues,milestones__$1))
,cljs.core.map.call(null,((function (keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues,milestones__$1){
return (function (p1__59842_SHARP_){
return cljs.core.assoc.call(null,p1__59842_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"issue","issue",1725456421));
});})(keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues,milestones__$1))
,issues));
var items = cljs.core.map.call(null,((function (keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues,milestones__$1,issues__$1){
return (function (p__59860){
var map__59861 = p__59860;
var map__59861__$1 = ((((!((map__59861 == null)))?((((map__59861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59861):map__59861);
var item = map__59861__$1;
var milestone = cljs.core.get.call(null,map__59861__$1,new cljs.core.Keyword(null,"milestone","milestone",-1282740856));
if((milestone == null)){
return cljs.core.dissoc.call(null,item,new cljs.core.Keyword(null,"milestone","milestone",-1282740856));
} else {
return item;
}
});})(keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues,milestones__$1,issues__$1))
,cljs.core.map.call(null,((function (keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues,milestones__$1,issues__$1){
return (function (p__59863){
var map__59864 = p__59863;
var map__59864__$1 = ((((!((map__59864 == null)))?((((map__59864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59864):map__59864);
var item = map__59864__$1;
var number = cljs.core.get.call(null,map__59864__$1,new cljs.core.Keyword(null,"number","number",1570378438));
return cljs.core.assoc.call(null,item,new cljs.core.Keyword("db","id","db/id",-1388397098),number);
});})(keyed_data,map__59843,map__59843__$1,map__59844,map__59844__$1,map__59845,map__59845__$1,map__59846,map__59846__$1,map__59847,map__59847__$1,milestones,map__59848,map__59848__$1,issues,milestones__$1,issues__$1))
,cljs.core.concat.call(null,milestones__$1,issues__$1)));
return datascript.core.transact_BANG_.call(null,client.data.conn,items);
}));

//# sourceMappingURL=ui.js.map?rel=1509657942273
