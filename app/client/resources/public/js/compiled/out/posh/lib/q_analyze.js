// Compiled by ClojureScript 1.9.908 {}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('datascript.core');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__42312__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__42312__auto__){
return or__42312__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__42312__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__42312__auto__){
return or__42312__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__51176 = rest_at_QMARK_;
var G__51177 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__51176;
ls = G__51177;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))]),posh.lib.q_analyze.split_list_at.call(null,split_at_QMARK_,posh.lib.q_analyze.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if(!(cljs.core.map_QMARK_.call(null,query))){
return posh.lib.q_analyze.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"$"));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"?"));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_.call(null,query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,query))){
return clojure.set.union.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.first.call(null,query)),posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)));
} else {
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,query)))){
return cljs.core.conj.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)),cljs.core.first.call(null,query));
} else {
return posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.call(null,(3284832));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.call(null,["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return (cljs.core.vector_QMARK_.call(null,v)) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.coll_QMARK_,v)));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.call(null,s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__42286__auto__ = cljs.core.first.call(null,eav);
if(cljs.core.truth_(and__42286__auto__)){
return cljs.core.not.call(null,posh.lib.q_analyze.wildcard_QMARK_.call(null,cljs.core.first.call(null,eav)));
} else {
return and__42286__auto__;
}
})())){
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,cljs.core.first.call(null,eav)),vars);
} else {
var var$ = posh.lib.q_analyze.qvar_gen.call(null);
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,var$),cljs.core.conj.call(null,vars,var$));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = (cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,eav)))?eav:cljs.core.cons.call(null,cljs.core.symbol.call(null,"$"),eav));
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,dbeav),cljs.core.concat.call(null,new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.call(null,(4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_.call(null,where)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.second.call(null,where)], null),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),where))));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,where),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,where))){
return posh.lib.q_analyze.normalize_eav.call(null,where);
} else {
if((cljs.core.vector_QMARK_.call(null,where)) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,where)))){
return where;
} else {
if(cljs.core.coll_QMARK_.call(null,where)){
return cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first.call(null,where);
if(cljs.core.seq_QMARK_.call(null,item)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),item))));
} else {
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,item))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,item))){
return cljs.core.cons.call(null,item,posh.lib.q_analyze.get_eavs.call(null,cljs.core.rest.call(null,where)));
} else {
if((cljs.core.vector_QMARK_.call(null,item)) && (cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,item)))){
var ocr_51178 = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.first.call(null,item))], null),cljs.core.rest.call(null,item)));
try{if((cljs.core.vector_QMARK_.call(null,ocr_51178)) && ((cljs.core.count.call(null,ocr_51178) === 2))){
try{var ocr_51178_0__51181 = cljs.core.nth.call(null,ocr_51178,(0));
if((cljs.core.vector_QMARK_.call(null,ocr_51178_0__51181)) && ((cljs.core.count.call(null,ocr_51178_0__51181) === 5))){
try{var ocr_51178_0__51181_0__51183 = cljs.core.nth.call(null,ocr_51178_0__51181,(0));
if(cljs.core._EQ_.call(null,ocr_51178_0__51181_0__51183,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.call(null,ocr_51178_0__51181,(1));
var e = cljs.core.nth.call(null,ocr_51178_0__51181,(2));
var a = cljs.core.nth.call(null,ocr_51178_0__51181,(3));
var v = cljs.core.nth.call(null,ocr_51178,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e51190){if((e51190 instanceof Error)){
var e__50272__auto__ = e51190;
if((e__50272__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto__;
}
} else {
throw e51190;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51189){if((e51189 instanceof Error)){
var e__50272__auto__ = e51189;
if((e__50272__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto__;
}
} else {
throw e51189;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51188){if((e51188 instanceof Error)){
var e__50272__auto__ = e51188;
if((e__50272__auto__ === cljs.core.match.backtrack)){
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));
} else {
throw e__50272__auto__;
}
} else {
throw e51188;

}
}} else {
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.call(null,(function (xs,p__51191){
var vec__51192 = p__51191;
var k = cljs.core.nth.call(null,vec__51192,(0),null);
var v = cljs.core.nth.call(null,vec__51192,(1),null);
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (r){
var vs = cljs.core.zipmap.call(null,vars,r);
return cljs.core.map.call(null,((function (vs){
return (function (eav){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (vs){
return (function (p1__51195_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__51195_SHARP_))){
return cljs.core.get.call(null,vs,p1__51195_SHARP_);
} else {
return p1__51195_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),results));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,xs))){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,posh.lib.q_analyze.count_qvars.call(null,cljs.core.first.call(null,xs)),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,xs),(1)]):null),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__43692__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__51196(s__51197){
return (new cljs.core.LazySeq(null,(function (){
var s__51197__$1 = s__51197;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__51197__$1);
if(temp__5278__auto__){
var s__51197__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51197__$2)){
var c__43690__auto__ = cljs.core.chunk_first.call(null,s__51197__$2);
var size__43691__auto__ = cljs.core.count.call(null,c__43690__auto__);
var b__51199 = cljs.core.chunk_buffer.call(null,size__43691__auto__);
if((function (){var i__51198 = (0);
while(true){
if((i__51198 < size__43691__auto__)){
var r = cljs.core._nth.call(null,c__43690__auto__,i__51198);
cljs.core.chunk_append.call(null,b__51199,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})());

var G__51200 = (i__51198 + (1));
i__51198 = G__51200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51199),posh$lib$q_analyze$fill_qvar_set_$_iter__51196.call(null,cljs.core.chunk_rest.call(null,s__51197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51199),null);
}
} else {
var r = cljs.core.first.call(null,s__51197__$2);
return cljs.core.cons.call(null,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__51196.call(null,cljs.core.rest.call(null,s__51197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43692__auto__.call(null,results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_.call(null,seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,seq1),cljs.core.first.call(null,seq2)),posh.lib.q_analyze.seq_merge_with.call(null,f,cljs.core.rest.call(null,seq1),cljs.core.rest.call(null,seq2)));
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.call(null,(function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with.call(null,cljs.core.conj,stacked,eav);
}),cljs.core.take.call(null,cljs.core.count.call(null,cljs.core.first.call(null,vs)),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__51203){
var vec__51204 = p__51203;
var e = cljs.core.nth.call(null,vec__51204,(0),null);
var a = cljs.core.nth.call(null,vec__51204,(1),null);
var v = cljs.core.nth.call(null,vec__51204,(2),null);
var eav = vec__51204;
var vec__51207 = cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.call(null,vec__51207,(0),null);
var qa = cljs.core.nth.call(null,vec__51207,(1),null);
var qv = cljs.core.nth.call(null,vec__51207,(2),null);
var iter__43692__auto__ = ((function (vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__51210(s__51211){
return (new cljs.core.LazySeq(null,((function (vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (){
var s__51211__$1 = s__51211;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__51211__$1);
if(temp__5278__auto__){
var xs__5831__auto__ = temp__5278__auto__;
var ee = cljs.core.first.call(null,xs__5831__auto__);
var iterys__43688__auto__ = ((function (s__51211__$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__51210_$_iter__51212(s__51213){
return (new cljs.core.LazySeq(null,((function (s__51211__$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (){
var s__51213__$1 = s__51213;
while(true){
var temp__5278__auto____$1 = cljs.core.seq.call(null,s__51213__$1);
if(temp__5278__auto____$1){
var xs__5831__auto____$1 = temp__5278__auto____$1;
var aa = cljs.core.first.call(null,xs__5831__auto____$1);
var iterys__43688__auto__ = ((function (s__51213__$1,s__51211__$1,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__51210_$_iter__51212_$_iter__51214(s__51215){
return (new cljs.core.LazySeq(null,((function (s__51213__$1,s__51211__$1,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (){
var s__51215__$1 = s__51215;
while(true){
var temp__5278__auto____$2 = cljs.core.seq.call(null,s__51215__$1);
if(temp__5278__auto____$2){
var s__51215__$2 = temp__5278__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51215__$2)){
var c__43690__auto__ = cljs.core.chunk_first.call(null,s__51215__$2);
var size__43691__auto__ = cljs.core.count.call(null,c__43690__auto__);
var b__51217 = cljs.core.chunk_buffer.call(null,size__43691__auto__);
if((function (){var i__51216 = (0);
while(true){
if((i__51216 < size__43691__auto__)){
var vv = cljs.core._nth.call(null,c__43690__auto__,i__51216);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__51216,s__51215__$1,s__51213__$1,s__51211__$1,vv,c__43690__auto__,size__43691__auto__,b__51217,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (p1__51201_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__51201_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__51216,s__51215__$1,s__51213__$1,s__51211__$1,vv,c__43690__auto__,size__43691__auto__,b__51217,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__51216,s__51215__$1,s__51213__$1,s__51211__$1,wildcard_count,vv,c__43690__auto__,size__43691__auto__,b__51217,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (p__51218){
var vec__51219 = p__51218;
var var_QMARK_ = cljs.core.nth.call(null,vec__51219,(0),null);
var val = cljs.core.nth.call(null,vec__51219,(1),null);
if(cljs.core.truth_((function (){var and__42286__auto__ = var_QMARK_;
if(cljs.core.truth_(and__42286__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__42286__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__51216,s__51215__$1,s__51213__$1,s__51211__$1,wildcard_count,vv,c__43690__auto__,size__43691__auto__,b__51217,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__51216,s__51215__$1,s__51213__$1,s__51211__$1,wildcard_count,exposed_qvars,vv,c__43690__auto__,size__43691__auto__,b__51217,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (p1__51202_SHARP_){
if(cljs.core.truth_(p1__51202_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__51216,s__51215__$1,s__51213__$1,s__51211__$1,wildcard_count,exposed_qvars,vv,c__43690__auto__,size__43691__auto__,b__51217,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
cljs.core.chunk_append.call(null,b__51217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__51226 = (i__51216 + (1));
i__51216 = G__51226;
continue;
} else {
var G__51227 = (i__51216 + (1));
i__51216 = G__51227;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51217),posh$lib$q_analyze$pattern_from_eav__old_$_iter__51210_$_iter__51212_$_iter__51214.call(null,cljs.core.chunk_rest.call(null,s__51215__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51217),null);
}
} else {
var vv = cljs.core.first.call(null,s__51215__$2);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__51215__$1,s__51213__$1,s__51211__$1,vv,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (p1__51201_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__51201_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__51215__$1,s__51213__$1,s__51211__$1,vv,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__51215__$1,s__51213__$1,s__51211__$1,wildcard_count,vv,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (p__51222){
var vec__51223 = p__51222;
var var_QMARK_ = cljs.core.nth.call(null,vec__51223,(0),null);
var val = cljs.core.nth.call(null,vec__51223,(1),null);
if(cljs.core.truth_((function (){var and__42286__auto__ = var_QMARK_;
if(cljs.core.truth_(and__42286__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__42286__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__51215__$1,s__51213__$1,s__51211__$1,wildcard_count,vv,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__51215__$1,s__51213__$1,s__51211__$1,wildcard_count,exposed_qvars,vv,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav){
return (function (p1__51202_SHARP_){
if(cljs.core.truth_(p1__51202_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__51215__$1,s__51213__$1,s__51211__$1,wildcard_count,exposed_qvars,vv,s__51215__$2,temp__5278__auto____$2,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__51210_$_iter__51212_$_iter__51214.call(null,cljs.core.rest.call(null,s__51215__$2)));
} else {
var G__51228 = cljs.core.rest.call(null,s__51215__$2);
s__51215__$1 = G__51228;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__51213__$1,s__51211__$1,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,null,null));
});})(s__51213__$1,s__51211__$1,aa,xs__5831__auto____$1,temp__5278__auto____$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
;
var fs__43689__auto__ = cljs.core.seq.call(null,iterys__43688__auto__.call(null,(cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__43689__auto__){
return cljs.core.concat.call(null,fs__43689__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__51210_$_iter__51212.call(null,cljs.core.rest.call(null,s__51213__$1)));
} else {
var G__51229 = cljs.core.rest.call(null,s__51213__$1);
s__51213__$1 = G__51229;
continue;
}
} else {
return null;
}
break;
}
});})(s__51211__$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,null,null));
});})(s__51211__$1,ee,xs__5831__auto__,temp__5278__auto__,vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
;
var fs__43689__auto__ = cljs.core.seq.call(null,iterys__43688__auto__.call(null,(cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__43689__auto__){
return cljs.core.concat.call(null,fs__43689__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__51210.call(null,cljs.core.rest.call(null,s__51211__$1)));
} else {
var G__51230 = cljs.core.rest.call(null,s__51211__$1);
s__51211__$1 = G__51230;
continue;
}
} else {
return null;
}
break;
}
});})(vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
,null,null));
});})(vec__51207,qe,qa,qv,vec__51204,e,a,v,eav))
;
return iter__43692__auto__.call(null,(cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__42312__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__42312__auto__)){
return or__42312__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_51231 = cljs.core.vec.call(null,eav);
var ocr_51232 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_51231)) && ((cljs.core.count.call(null,ocr_51231) === 3))){
try{var ocr_51231_0__51260 = cljs.core.nth.call(null,ocr_51231,(0));
if(cljs.core._EQ_.call(null,ocr_51231_0__51260,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51231_1__51261 = cljs.core.nth.call(null,ocr_51231,(1));
if(cljs.core._EQ_.call(null,ocr_51231_1__51261,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51231_2__51262 = cljs.core.nth.call(null,ocr_51231,(2));
if(cljs.core._EQ_.call(null,ocr_51231_2__51262,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51336){if((e51336 instanceof Error)){
var e__50272__auto__ = e51336;
if((e__50272__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_51232)) && ((cljs.core.count.call(null,ocr_51232) === 3))){
try{var ocr_51232_2__51265 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51265 === false)){
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51338){if((e51338 instanceof Error)){
var e__50272__auto____$1 = e51338;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51265 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51265 === true)){
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51339){if((e51339 instanceof Error)){
var e__50272__auto____$2 = e51339;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$2;
}
} else {
throw e51339;

}
}} else {
throw e__50272__auto____$1;
}
} else {
throw e51338;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51337){if((e51337 instanceof Error)){
var e__50272__auto____$1 = e51337;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51337;

}
}} else {
throw e__50272__auto__;
}
} else {
throw e51336;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51331){if((e51331 instanceof Error)){
var e__50272__auto__ = e51331;
if((e__50272__auto__ === cljs.core.match.backtrack)){
try{var ocr_51231_2__51262 = cljs.core.nth.call(null,ocr_51231,(2));
if(cljs.core._EQ_.call(null,ocr_51231_2__51262,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_51232)) && ((cljs.core.count.call(null,ocr_51232) === 3))){
try{var ocr_51232_1__51267 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51267 === false)){
var a = cljs.core.nth.call(null,ocr_51231,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51334){if((e51334 instanceof Error)){
var e__50272__auto____$1 = e51334;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51232_1__51267 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51267 === true)){
var a = cljs.core.nth.call(null,ocr_51231,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51335){if((e51335 instanceof Error)){
var e__50272__auto____$2 = e51335;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$2;
}
} else {
throw e51335;

}
}} else {
throw e__50272__auto____$1;
}
} else {
throw e51334;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51333){if((e51333 instanceof Error)){
var e__50272__auto____$1 = e51333;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51332){if((e51332 instanceof Error)){
var e__50272__auto____$1 = e51332;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51332;

}
}} else {
throw e__50272__auto__;
}
} else {
throw e51331;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51273){if((e51273 instanceof Error)){
var e__50272__auto__ = e51273;
if((e__50272__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_51232)) && ((cljs.core.count.call(null,ocr_51232) === 3))){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === false)){
try{var ocr_51231_1__51261 = cljs.core.nth.call(null,ocr_51231,(1));
if(cljs.core._EQ_.call(null,ocr_51231_1__51261,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51231_2__51262 = cljs.core.nth.call(null,ocr_51231,(2));
if(cljs.core._EQ_.call(null,ocr_51231_2__51262,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51231,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51330){if((e51330 instanceof Error)){
var e__50272__auto____$1 = e51330;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51330;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51329){if((e51329 instanceof Error)){
var e__50272__auto____$1 = e51329;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51329;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51275){if((e51275 instanceof Error)){
var e__50272__auto____$1 = e51275;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === true)){
try{var ocr_51231_2__51262 = cljs.core.nth.call(null,ocr_51231,(2));
if(cljs.core._EQ_.call(null,ocr_51231_2__51262,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51231_1__51261 = cljs.core.nth.call(null,ocr_51231,(1));
if(cljs.core._EQ_.call(null,ocr_51231_1__51261,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51231,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51326){if((e51326 instanceof Error)){
var e__50272__auto____$2 = e51326;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === true)){
var a = cljs.core.nth.call(null,ocr_51231,(1));
var e = cljs.core.nth.call(null,ocr_51231,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51327){if((e51327 instanceof Error)){
var e__50272__auto____$3 = e51327;
if((e__50272__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === false)){
var a = cljs.core.nth.call(null,ocr_51231,(1));
var e = cljs.core.nth.call(null,ocr_51231,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51328){if((e51328 instanceof Error)){
var e__50272__auto____$4 = e51328;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$4;
}
} else {
throw e51328;

}
}} else {
throw e__50272__auto____$3;
}
} else {
throw e51327;

}
}} else {
throw e__50272__auto____$2;
}
} else {
throw e51326;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51325){if((e51325 instanceof Error)){
var e__50272__auto____$2 = e51325;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$2;
}
} else {
throw e51325;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51276){if((e51276 instanceof Error)){
var e__50272__auto____$2 = e51276;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === false)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === true)){
try{var ocr_51231_2__51262 = cljs.core.nth.call(null,ocr_51231,(2));
if(cljs.core._EQ_.call(null,ocr_51231_2__51262,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51324){if((e51324 instanceof Error)){
var e__50272__auto____$3 = e51324;
if((e__50272__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$3;
}
} else {
throw e51324;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51321){if((e51321 instanceof Error)){
var e__50272__auto____$3 = e51321;
if((e__50272__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === false)){
try{var ocr_51231_2__51262 = cljs.core.nth.call(null,ocr_51231,(2));
if(cljs.core._EQ_.call(null,ocr_51231_2__51262,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51323){if((e51323 instanceof Error)){
var e__50272__auto____$4 = e51323;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$4;
}
} else {
throw e51323;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51322){if((e51322 instanceof Error)){
var e__50272__auto____$4 = e51322;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$4;
}
} else {
throw e51322;

}
}} else {
throw e__50272__auto____$3;
}
} else {
throw e51321;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51277){if((e51277 instanceof Error)){
var e__50272__auto____$3 = e51277;
if((e__50272__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === true)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === true)){
try{var ocr_51231_1__51261 = cljs.core.nth.call(null,ocr_51231,(1));
if(cljs.core._EQ_.call(null,ocr_51231_1__51261,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51320){if((e51320 instanceof Error)){
var e__50272__auto____$4 = e51320;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$4;
}
} else {
throw e51320;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51319){if((e51319 instanceof Error)){
var e__50272__auto____$4 = e51319;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$4;
}
} else {
throw e51319;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51278){if((e51278 instanceof Error)){
var e__50272__auto____$4 = e51278;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === false)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === true)){
try{var ocr_51231_1__51261 = cljs.core.nth.call(null,ocr_51231,(1));
if(cljs.core._EQ_.call(null,ocr_51231_1__51261,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51318){if((e51318 instanceof Error)){
var e__50272__auto____$5 = e51318;
if((e__50272__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$5;
}
} else {
throw e51318;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51317){if((e51317 instanceof Error)){
var e__50272__auto____$5 = e51317;
if((e__50272__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$5;
}
} else {
throw e51317;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51279){if((e51279 instanceof Error)){
var e__50272__auto____$5 = e51279;
if((e__50272__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === true)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === false)){
try{var ocr_51231_1__51261 = cljs.core.nth.call(null,ocr_51231,(1));
if(cljs.core._EQ_.call(null,ocr_51231_1__51261,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51316){if((e51316 instanceof Error)){
var e__50272__auto____$6 = e51316;
if((e__50272__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$6;
}
} else {
throw e51316;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51315){if((e51315 instanceof Error)){
var e__50272__auto____$6 = e51315;
if((e__50272__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$6;
}
} else {
throw e51315;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51280){if((e51280 instanceof Error)){
var e__50272__auto____$6 = e51280;
if((e__50272__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === false)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === false)){
try{var ocr_51231_1__51261 = cljs.core.nth.call(null,ocr_51231,(1));
if(cljs.core._EQ_.call(null,ocr_51231_1__51261,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51314){if((e51314 instanceof Error)){
var e__50272__auto____$7 = e51314;
if((e__50272__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$7;
}
} else {
throw e51314;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51313){if((e51313 instanceof Error)){
var e__50272__auto____$7 = e51313;
if((e__50272__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$7;
}
} else {
throw e51313;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51281){if((e51281 instanceof Error)){
var e__50272__auto____$7 = e51281;
if((e__50272__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === true)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === true)){
try{var ocr_51231_0__51260 = cljs.core.nth.call(null,ocr_51231,(0));
if(cljs.core._EQ_.call(null,ocr_51231_0__51260,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51312){if((e51312 instanceof Error)){
var e__50272__auto____$8 = e51312;
if((e__50272__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$8;
}
} else {
throw e51312;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51311){if((e51311 instanceof Error)){
var e__50272__auto____$8 = e51311;
if((e__50272__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$8;
}
} else {
throw e51311;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51282){if((e51282 instanceof Error)){
var e__50272__auto____$8 = e51282;
if((e__50272__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === false)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === true)){
try{var ocr_51231_0__51260 = cljs.core.nth.call(null,ocr_51231,(0));
if(cljs.core._EQ_.call(null,ocr_51231_0__51260,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51310){if((e51310 instanceof Error)){
var e__50272__auto____$9 = e51310;
if((e__50272__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$9;
}
} else {
throw e51310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51309){if((e51309 instanceof Error)){
var e__50272__auto____$9 = e51309;
if((e__50272__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$9;
}
} else {
throw e51309;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51283){if((e51283 instanceof Error)){
var e__50272__auto____$9 = e51283;
if((e__50272__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === true)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === false)){
try{var ocr_51231_0__51260 = cljs.core.nth.call(null,ocr_51231,(0));
if(cljs.core._EQ_.call(null,ocr_51231_0__51260,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51308){if((e51308 instanceof Error)){
var e__50272__auto____$10 = e51308;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$10;
}
} else {
throw e51308;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51307){if((e51307 instanceof Error)){
var e__50272__auto____$10 = e51307;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$10;
}
} else {
throw e51307;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51284){if((e51284 instanceof Error)){
var e__50272__auto____$10 = e51284;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === false)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === false)){
try{var ocr_51231_0__51260 = cljs.core.nth.call(null,ocr_51231,(0));
if(cljs.core._EQ_.call(null,ocr_51231_0__51260,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51306){if((e51306 instanceof Error)){
var e__50272__auto____$11 = e51306;
if((e__50272__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$11;
}
} else {
throw e51306;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51305){if((e51305 instanceof Error)){
var e__50272__auto____$11 = e51305;
if((e__50272__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$11;
}
} else {
throw e51305;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51285){if((e51285 instanceof Error)){
var e__50272__auto____$11 = e51285;
if((e__50272__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === true)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === true)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === true)){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51304){if((e51304 instanceof Error)){
var e__50272__auto____$12 = e51304;
if((e__50272__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$12;
}
} else {
throw e51304;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51299){if((e51299 instanceof Error)){
var e__50272__auto____$12 = e51299;
if((e__50272__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === false)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === true)){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51303){if((e51303 instanceof Error)){
var e__50272__auto____$13 = e51303;
if((e__50272__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$13;
}
} else {
throw e51303;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51300){if((e51300 instanceof Error)){
var e__50272__auto____$13 = e51300;
if((e__50272__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === true)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === false)){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51302){if((e51302 instanceof Error)){
var e__50272__auto____$14 = e51302;
if((e__50272__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$14;
}
} else {
throw e51302;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51301){if((e51301 instanceof Error)){
var e__50272__auto____$14 = e51301;
if((e__50272__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$14;
}
} else {
throw e51301;

}
}} else {
throw e__50272__auto____$13;
}
} else {
throw e51300;

}
}} else {
throw e__50272__auto____$12;
}
} else {
throw e51299;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51286){if((e51286 instanceof Error)){
var e__50272__auto____$12 = e51286;
if((e__50272__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === false)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === true)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === true)){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51298){if((e51298 instanceof Error)){
var e__50272__auto____$13 = e51298;
if((e__50272__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$13;
}
} else {
throw e51298;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51297){if((e51297 instanceof Error)){
var e__50272__auto____$13 = e51297;
if((e__50272__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$13;
}
} else {
throw e51297;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51287){if((e51287 instanceof Error)){
var e__50272__auto____$13 = e51287;
if((e__50272__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === true)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === false)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === false)){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51296){if((e51296 instanceof Error)){
var e__50272__auto____$14 = e51296;
if((e__50272__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$14;
}
} else {
throw e51296;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51295){if((e51295 instanceof Error)){
var e__50272__auto____$14 = e51295;
if((e__50272__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$14;
}
} else {
throw e51295;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51288){if((e51288 instanceof Error)){
var e__50272__auto____$14 = e51288;
if((e__50272__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_51232_2__51271 = cljs.core.nth.call(null,ocr_51232,(2));
if((ocr_51232_2__51271 === false)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === true)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === false)){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51294){if((e51294 instanceof Error)){
var e__50272__auto____$15 = e51294;
if((e__50272__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$15;
}
} else {
throw e51294;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51290){if((e51290 instanceof Error)){
var e__50272__auto____$15 = e51290;
if((e__50272__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_51232_0__51269 = cljs.core.nth.call(null,ocr_51232,(0));
if((ocr_51232_0__51269 === false)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === true)){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51292){if((e51292 instanceof Error)){
var e__50272__auto____$16 = e51292;
if((e__50272__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_51232_1__51270 = cljs.core.nth.call(null,ocr_51232,(1));
if((ocr_51232_1__51270 === false)){
var e = cljs.core.nth.call(null,ocr_51231,(0));
var a = cljs.core.nth.call(null,ocr_51231,(1));
var v = cljs.core.nth.call(null,ocr_51231,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51293){if((e51293 instanceof Error)){
var e__50272__auto____$17 = e51293;
if((e__50272__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$17;
}
} else {
throw e51293;

}
}} else {
throw e__50272__auto____$16;
}
} else {
throw e51292;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51291){if((e51291 instanceof Error)){
var e__50272__auto____$16 = e51291;
if((e__50272__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$16;
}
} else {
throw e51291;

}
}} else {
throw e__50272__auto____$15;
}
} else {
throw e51290;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51289){if((e51289 instanceof Error)){
var e__50272__auto____$15 = e51289;
if((e__50272__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$15;
}
} else {
throw e51289;

}
}} else {
throw e__50272__auto____$14;
}
} else {
throw e51288;

}
}} else {
throw e__50272__auto____$13;
}
} else {
throw e51287;

}
}} else {
throw e__50272__auto____$12;
}
} else {
throw e51286;

}
}} else {
throw e__50272__auto____$11;
}
} else {
throw e51285;

}
}} else {
throw e__50272__auto____$10;
}
} else {
throw e51284;

}
}} else {
throw e__50272__auto____$9;
}
} else {
throw e51283;

}
}} else {
throw e__50272__auto____$8;
}
} else {
throw e51282;

}
}} else {
throw e__50272__auto____$7;
}
} else {
throw e51281;

}
}} else {
throw e__50272__auto____$6;
}
} else {
throw e51280;

}
}} else {
throw e__50272__auto____$5;
}
} else {
throw e51279;

}
}} else {
throw e__50272__auto____$4;
}
} else {
throw e51278;

}
}} else {
throw e__50272__auto____$3;
}
} else {
throw e51277;

}
}} else {
throw e__50272__auto____$2;
}
} else {
throw e51276;

}
}} else {
throw e__50272__auto____$1;
}
} else {
throw e51275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51274){if((e51274 instanceof Error)){
var e__50272__auto____$1 = e51274;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51274;

}
}} else {
throw e__50272__auto__;
}
} else {
throw e51273;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51272){if((e51272 instanceof Error)){
var e__50272__auto__ = e51272;
if((e__50272__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__50272__auto__;
}
} else {
throw e51272;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_51340 = cljs.core.vec.call(null,eav);
var ocr_51341 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_51340)) && ((cljs.core.count.call(null,ocr_51340) === 3))){
try{var ocr_51340_0__51366 = cljs.core.nth.call(null,ocr_51340,(0));
if(cljs.core._EQ_.call(null,ocr_51340_0__51366,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51340_1__51367 = cljs.core.nth.call(null,ocr_51340,(1));
if(cljs.core._EQ_.call(null,ocr_51340_1__51367,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51340_2__51368 = cljs.core.nth.call(null,ocr_51340,(2));
if(cljs.core._EQ_.call(null,ocr_51340_2__51368,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e51430){if((e51430 instanceof Error)){
var e__50272__auto__ = e51430;
if((e__50272__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_51341)) && ((cljs.core.count.call(null,ocr_51341) === 3))){
try{var ocr_51341_2__51371 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51371 === false)){
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51432){if((e51432 instanceof Error)){
var e__50272__auto____$1 = e51432;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51371 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51371 === true)){
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51433){if((e51433 instanceof Error)){
var e__50272__auto____$2 = e51433;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$2;
}
} else {
throw e51433;

}
}} else {
throw e__50272__auto____$1;
}
} else {
throw e51432;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51431){if((e51431 instanceof Error)){
var e__50272__auto____$1 = e51431;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51431;

}
}} else {
throw e__50272__auto__;
}
} else {
throw e51430;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51425){if((e51425 instanceof Error)){
var e__50272__auto__ = e51425;
if((e__50272__auto__ === cljs.core.match.backtrack)){
try{var ocr_51340_2__51368 = cljs.core.nth.call(null,ocr_51340,(2));
if(cljs.core._EQ_.call(null,ocr_51340_2__51368,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_51341)) && ((cljs.core.count.call(null,ocr_51341) === 3))){
try{var ocr_51341_1__51373 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51373 === false)){
var a = cljs.core.nth.call(null,ocr_51340,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51428){if((e51428 instanceof Error)){
var e__50272__auto____$1 = e51428;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51341_1__51373 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51373 === true)){
var a = cljs.core.nth.call(null,ocr_51340,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51429){if((e51429 instanceof Error)){
var e__50272__auto____$2 = e51429;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$2;
}
} else {
throw e51429;

}
}} else {
throw e__50272__auto____$1;
}
} else {
throw e51428;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51427){if((e51427 instanceof Error)){
var e__50272__auto____$1 = e51427;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51427;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51426){if((e51426 instanceof Error)){
var e__50272__auto____$1 = e51426;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51426;

}
}} else {
throw e__50272__auto__;
}
} else {
throw e51425;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51379){if((e51379 instanceof Error)){
var e__50272__auto__ = e51379;
if((e__50272__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_51341)) && ((cljs.core.count.call(null,ocr_51341) === 3))){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === false)){
try{var ocr_51340_1__51367 = cljs.core.nth.call(null,ocr_51340,(1));
if(cljs.core._EQ_.call(null,ocr_51340_1__51367,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51340_2__51368 = cljs.core.nth.call(null,ocr_51340,(2));
if(cljs.core._EQ_.call(null,ocr_51340_2__51368,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51340,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51424){if((e51424 instanceof Error)){
var e__50272__auto____$1 = e51424;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51424;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51423){if((e51423 instanceof Error)){
var e__50272__auto____$1 = e51423;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51423;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51381){if((e51381 instanceof Error)){
var e__50272__auto____$1 = e51381;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === true)){
try{var ocr_51340_2__51368 = cljs.core.nth.call(null,ocr_51340,(2));
if(cljs.core._EQ_.call(null,ocr_51340_2__51368,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_51340_1__51367 = cljs.core.nth.call(null,ocr_51340,(1));
if(cljs.core._EQ_.call(null,ocr_51340_1__51367,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51340,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51420){if((e51420 instanceof Error)){
var e__50272__auto____$2 = e51420;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === true)){
var a = cljs.core.nth.call(null,ocr_51340,(1));
var e = cljs.core.nth.call(null,ocr_51340,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51421){if((e51421 instanceof Error)){
var e__50272__auto____$3 = e51421;
if((e__50272__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === false)){
var a = cljs.core.nth.call(null,ocr_51340,(1));
var e = cljs.core.nth.call(null,ocr_51340,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51422){if((e51422 instanceof Error)){
var e__50272__auto____$4 = e51422;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$4;
}
} else {
throw e51422;

}
}} else {
throw e__50272__auto____$3;
}
} else {
throw e51421;

}
}} else {
throw e__50272__auto____$2;
}
} else {
throw e51420;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51419){if((e51419 instanceof Error)){
var e__50272__auto____$2 = e51419;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$2;
}
} else {
throw e51419;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51382){if((e51382 instanceof Error)){
var e__50272__auto____$2 = e51382;
if((e__50272__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === false)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === true)){
try{var ocr_51340_2__51368 = cljs.core.nth.call(null,ocr_51340,(2));
if(cljs.core._EQ_.call(null,ocr_51340_2__51368,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var a = cljs.core.nth.call(null,ocr_51340,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51418){if((e51418 instanceof Error)){
var e__50272__auto____$3 = e51418;
if((e__50272__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$3;
}
} else {
throw e51418;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51417){if((e51417 instanceof Error)){
var e__50272__auto____$3 = e51417;
if((e__50272__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$3;
}
} else {
throw e51417;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51383){if((e51383 instanceof Error)){
var e__50272__auto____$3 = e51383;
if((e__50272__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51377 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51377 === true)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === true)){
try{var ocr_51340_1__51367 = cljs.core.nth.call(null,ocr_51340,(1));
if(cljs.core._EQ_.call(null,ocr_51340_1__51367,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51416){if((e51416 instanceof Error)){
var e__50272__auto____$4 = e51416;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$4;
}
} else {
throw e51416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51415){if((e51415 instanceof Error)){
var e__50272__auto____$4 = e51415;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$4;
}
} else {
throw e51415;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51384){if((e51384 instanceof Error)){
var e__50272__auto____$4 = e51384;
if((e__50272__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51377 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51377 === false)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === true)){
try{var ocr_51340_1__51367 = cljs.core.nth.call(null,ocr_51340,(1));
if(cljs.core._EQ_.call(null,ocr_51340_1__51367,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51414){if((e51414 instanceof Error)){
var e__50272__auto____$5 = e51414;
if((e__50272__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$5;
}
} else {
throw e51414;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51413){if((e51413 instanceof Error)){
var e__50272__auto____$5 = e51413;
if((e__50272__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$5;
}
} else {
throw e51413;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51385){if((e51385 instanceof Error)){
var e__50272__auto____$5 = e51385;
if((e__50272__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51377 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51377 === true)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === false)){
try{var ocr_51340_1__51367 = cljs.core.nth.call(null,ocr_51340,(1));
if(cljs.core._EQ_.call(null,ocr_51340_1__51367,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51412){if((e51412 instanceof Error)){
var e__50272__auto____$6 = e51412;
if((e__50272__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$6;
}
} else {
throw e51412;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51409){if((e51409 instanceof Error)){
var e__50272__auto____$6 = e51409;
if((e__50272__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === true)){
try{var ocr_51340_0__51366 = cljs.core.nth.call(null,ocr_51340,(0));
if(cljs.core._EQ_.call(null,ocr_51340_0__51366,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51411){if((e51411 instanceof Error)){
var e__50272__auto____$7 = e51411;
if((e__50272__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$7;
}
} else {
throw e51411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51410){if((e51410 instanceof Error)){
var e__50272__auto____$7 = e51410;
if((e__50272__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$7;
}
} else {
throw e51410;

}
}} else {
throw e__50272__auto____$6;
}
} else {
throw e51409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51386){if((e51386 instanceof Error)){
var e__50272__auto____$6 = e51386;
if((e__50272__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51377 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51377 === false)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === true)){
try{var ocr_51340_0__51366 = cljs.core.nth.call(null,ocr_51340,(0));
if(cljs.core._EQ_.call(null,ocr_51340_0__51366,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51408){if((e51408 instanceof Error)){
var e__50272__auto____$7 = e51408;
if((e__50272__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$7;
}
} else {
throw e51408;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51407){if((e51407 instanceof Error)){
var e__50272__auto____$7 = e51407;
if((e__50272__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$7;
}
} else {
throw e51407;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51387){if((e51387 instanceof Error)){
var e__50272__auto____$7 = e51387;
if((e__50272__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51377 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51377 === true)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === false)){
try{var ocr_51340_0__51366 = cljs.core.nth.call(null,ocr_51340,(0));
if(cljs.core._EQ_.call(null,ocr_51340_0__51366,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51406){if((e51406 instanceof Error)){
var e__50272__auto____$8 = e51406;
if((e__50272__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$8;
}
} else {
throw e51406;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51400){if((e51400 instanceof Error)){
var e__50272__auto____$8 = e51400;
if((e__50272__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === true)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === true)){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51404){if((e51404 instanceof Error)){
var e__50272__auto____$9 = e51404;
if((e__50272__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === false)){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51405){if((e51405 instanceof Error)){
var e__50272__auto____$10 = e51405;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$10;
}
} else {
throw e51405;

}
}} else {
throw e__50272__auto____$9;
}
} else {
throw e51404;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51401){if((e51401 instanceof Error)){
var e__50272__auto____$9 = e51401;
if((e__50272__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === false)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === true)){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51403){if((e51403 instanceof Error)){
var e__50272__auto____$10 = e51403;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$10;
}
} else {
throw e51403;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51402){if((e51402 instanceof Error)){
var e__50272__auto____$10 = e51402;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$10;
}
} else {
throw e51402;

}
}} else {
throw e__50272__auto____$9;
}
} else {
throw e51401;

}
}} else {
throw e__50272__auto____$8;
}
} else {
throw e51400;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51388){if((e51388 instanceof Error)){
var e__50272__auto____$8 = e51388;
if((e__50272__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51377 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51377 === false)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === true)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === true)){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51399){if((e51399 instanceof Error)){
var e__50272__auto____$9 = e51399;
if((e__50272__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$9;
}
} else {
throw e51399;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51398){if((e51398 instanceof Error)){
var e__50272__auto____$9 = e51398;
if((e__50272__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$9;
}
} else {
throw e51398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51389){if((e51389 instanceof Error)){
var e__50272__auto____$9 = e51389;
if((e__50272__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51377 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51377 === true)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === false)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === false)){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51397){if((e51397 instanceof Error)){
var e__50272__auto____$10 = e51397;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$10;
}
} else {
throw e51397;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51396){if((e51396 instanceof Error)){
var e__50272__auto____$10 = e51396;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$10;
}
} else {
throw e51396;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51390){if((e51390 instanceof Error)){
var e__50272__auto____$10 = e51390;
if((e__50272__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_51341_2__51377 = cljs.core.nth.call(null,ocr_51341,(2));
if((ocr_51341_2__51377 === false)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === true)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === false)){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51395){if((e51395 instanceof Error)){
var e__50272__auto____$11 = e51395;
if((e__50272__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$11;
}
} else {
throw e51395;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51392){if((e51392 instanceof Error)){
var e__50272__auto____$11 = e51392;
if((e__50272__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_51341_0__51375 = cljs.core.nth.call(null,ocr_51341,(0));
if((ocr_51341_0__51375 === false)){
try{var ocr_51341_1__51376 = cljs.core.nth.call(null,ocr_51341,(1));
if((ocr_51341_1__51376 === true)){
var e = cljs.core.nth.call(null,ocr_51340,(0));
var a = cljs.core.nth.call(null,ocr_51340,(1));
var v = cljs.core.nth.call(null,ocr_51340,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e51394){if((e51394 instanceof Error)){
var e__50272__auto____$12 = e51394;
if((e__50272__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$12;
}
} else {
throw e51394;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51393){if((e51393 instanceof Error)){
var e__50272__auto____$12 = e51393;
if((e__50272__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$12;
}
} else {
throw e51393;

}
}} else {
throw e__50272__auto____$11;
}
} else {
throw e51392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51391){if((e51391 instanceof Error)){
var e__50272__auto____$11 = e51391;
if((e__50272__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$11;
}
} else {
throw e51391;

}
}} else {
throw e__50272__auto____$10;
}
} else {
throw e51390;

}
}} else {
throw e__50272__auto____$9;
}
} else {
throw e51389;

}
}} else {
throw e__50272__auto____$8;
}
} else {
throw e51388;

}
}} else {
throw e__50272__auto____$7;
}
} else {
throw e51387;

}
}} else {
throw e__50272__auto____$6;
}
} else {
throw e51386;

}
}} else {
throw e__50272__auto____$5;
}
} else {
throw e51385;

}
}} else {
throw e__50272__auto____$4;
}
} else {
throw e51384;

}
}} else {
throw e__50272__auto____$3;
}
} else {
throw e51383;

}
}} else {
throw e__50272__auto____$2;
}
} else {
throw e51382;

}
}} else {
throw e__50272__auto____$1;
}
} else {
throw e51381;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51380){if((e51380 instanceof Error)){
var e__50272__auto____$1 = e51380;
if((e__50272__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__50272__auto____$1;
}
} else {
throw e51380;

}
}} else {
throw e__50272__auto__;
}
} else {
throw e51379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e51378){if((e51378 instanceof Error)){
var e__50272__auto__ = e51378;
if((e__50272__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__50272__auto__;
}
} else {
throw e51378;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__51435){
var vec__51436 = p__51435;
var k = cljs.core.nth.call(null,vec__51436,(0),null);
var v = cljs.core.nth.call(null,vec__51436,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__51436,k,v){
return (function (p1__51434_SHARP_){
return posh.lib.q_analyze.pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__51434_SHARP_));
});})(vec__51436,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__51440){
var vec__51441 = p__51440;
var k = cljs.core.nth.call(null,vec__51441,(0),null);
var v = cljs.core.nth.call(null,vec__51441,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__51441,k,v){
return (function (p1__51439_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__51439_SHARP_));
});})(vec__51441,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,((((cljs.core.first.call(null,ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ins))].join('')),"$")))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)])),posh.lib.q_analyze.just_qvars.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars.call(null,ins,args);
if(!(cljs.core.empty_QMARK_.call(null,varmap))){
var qvars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.keys.call(null,varmap)));
var varvals = cljs.core.apply.call(null,cljs.core.partial.call(null,datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys.call(null,varmap)], null)),cljs.core.vals.call(null,varmap));
var varsets = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap.call(null,qvars,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.call(null,((function (qvars,varvals,varmap){
return (function (p1__51444_SHARP_){
return cljs.core.zipmap.call(null,qvars,p1__51444_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return (cljs.core.coll_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,x)));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,x))){
return cljs.core.second.call(null,x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_.call(null,qfind)){
if(cljs.core.empty_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,qfind))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,qfind),cljs.core.nth.call(null,qfind,(2))]);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_.call(null,dbeavs)){
return null;
} else {
var vec__51445 = cljs.core.first.call(null,dbeavs);
var db = cljs.core.nth.call(null,vec__51445,(0),null);
var e = cljs.core.nth.call(null,vec__51445,(1),null);
var a = cljs.core.nth.call(null,vec__51445,(2),null);
var v = cljs.core.nth.call(null,vec__51445,(3),null);
if(cljs.core.truth_((function (){var or__42312__auto__ = cljs.core._EQ_.call(null,var$,e);
if(or__42312__auto__){
return or__42312__auto__;
} else {
var and__42286__auto__ = cljs.core._EQ_.call(null,var$,v);
if(and__42286__auto__){
return posh.lib.pull_analyze.ref_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db)),a);
} else {
return and__42286__auto__;
}
}
})())){
return dbvarmap.call(null,db);
} else {
var G__51448 = var$;
var G__51449 = dbvarmap;
var G__51450 = cljs.core.rest.call(null,dbeavs);
var$ = G__51448;
dbvarmap = G__51449;
dbeavs = G__51450;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_.call(null,vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,vars),posh.lib.q_analyze.match_var_to_db.call(null,cljs.core.first.call(null,vars),dbvarmap,dbeavs)]),posh.lib.q_analyze.match_vars_to_dbs.call(null,cljs.core.rest.call(null,vars),dbvarmap,dbeavs));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__$1),x)){
return n;
} else {
var G__51451 = (n + (1));
var G__51452 = cljs.core.rest.call(null,xs__$1);
n = G__51451;
xs__$1 = G__51452;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__42286__auto__ = cljs.core.map_QMARK_.call(null,arg);
if(and__42286__auto__){
var and__42286__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__42286__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__42286__auto____$1;
}
} else {
return and__42286__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.call(null,(function (p1__51453_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_.call(null,p1__51453_SHARP_))){
return type.call(null,p1__51453_SHARP_);
} else {
return p1__51453_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)]):null),posh.lib.q_analyze.make_dbarg_map.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__51454){
var vec__51455 = p__51454;
var db_sym = cljs.core.nth.call(null,vec__51455,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__51455,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by.call(null,cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set.call(null,(function (){var iter__43692__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__51458(s__51459){
return (new cljs.core.LazySeq(null,(function (){
var s__51459__$1 = s__51459;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__51459__$1);
if(temp__5278__auto__){
var s__51459__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51459__$2)){
var c__43690__auto__ = cljs.core.chunk_first.call(null,s__51459__$2);
var size__43691__auto__ = cljs.core.count.call(null,c__43690__auto__);
var b__51461 = cljs.core.chunk_buffer.call(null,size__43691__auto__);
if((function (){var i__51460 = (0);
while(true){
if((i__51460 < size__43691__auto__)){
var x = cljs.core._nth.call(null,c__43690__auto__,i__51460);
cljs.core.chunk_append.call(null,b__51461,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x));

var G__51462 = (i__51460 + (1));
i__51460 = G__51462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51461),posh$lib$q_analyze$resolve_any_idents_$_iter__51458.call(null,cljs.core.chunk_rest.call(null,s__51459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51461),null);
}
} else {
var x = cljs.core.first.call(null,s__51459__$2);
return cljs.core.cons.call(null,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x),posh$lib$q_analyze$resolve_any_idents_$_iter__51458.call(null,cljs.core.rest.call(null,s__51459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43692__auto__.call(null,input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var where = posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs.call(null,where);
var vars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,eavs));
var newqm = cljs.core.merge.call(null,qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__51468){
var vec__51469 = p__51468;
var sym = cljs.core.nth.call(null,vec__51469,(0),null);
var arg = cljs.core.nth.call(null,vec__51469,(1),null);
var or__42312__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,sym));
if(cljs.core.truth_(or__42312__auto__)){
return or__42312__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__51472){
var vec__51473 = p__51472;
var a = cljs.core.nth.call(null,vec__51473,(0),null);
var v = cljs.core.nth.call(null,vec__51473,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.call(null,cljs.core.every_pred.call(null,cljs.core.vector_QMARK_,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms.call(null,posh.lib.q_analyze.create_q_datoms.call(null,r,eavs,vars));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__51476){
var vec__51477 = p__51476;
var db_sym = cljs.core.nth.call(null,vec__51477,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__51477,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db_sym)),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__51480){
var vec__51481 = p__51480;
var db_sym = cljs.core.nth.call(null,vec__51481,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__51481,(1),null);
var db = dbvarmap.call(null,db_sym);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null),cljs.core.vec.call(null,r))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.call(null,((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__51484){
var vec__51485 = p__51484;
var seq__51486 = cljs.core.seq.call(null,vec__51485);
var first__51487 = cljs.core.first.call(null,seq__51486);
var seq__51486__$1 = cljs.core.next.call(null,seq__51486);
var db = first__51487;
var eav = seq__51486__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,db,cljs.core.map.call(null,((function (vec__51485,seq__51486,first__51487,seq__51486__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__51465_SHARP_){
var temp__5276__auto__ = in_vars.call(null,p1__51465_SHARP_);
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
return posh.lib.q_analyze.resolve_any_idents.call(null,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),v);
} else {
return p1__51465_SHARP_;
}
});})(vec__51485,seq__51486,first__51487,seq__51486__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.call(null,lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars.call(null,eavs_ins);
var linked_qvars = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__51488){
var vec__51489 = p__51488;
var k = cljs.core.nth.call(null,vec__51489,(0),null);
var v = cljs.core.nth.call(null,vec__51489,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap.call(null,vars,posh.lib.q_analyze.stack_vectors.call(null,r));
var prepped_eavs = clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__51466_SHARP_){
if(cljs.core.truth_((function (){var and__42286__auto__ = posh.lib.q_analyze.qvar_QMARK_.call(null,p1__51466_SHARP_);
if(cljs.core.truth_(and__42286__auto__)){
return cljs.core.not.call(null,linked_qvars.call(null,p1__51466_SHARP_));
} else {
return and__42286__auto__;
}
})())){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__51466_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__51467_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__51467_SHARP_))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__51467_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs)], null):null));
})():null));
});

//# sourceMappingURL=q_analyze.js.map?rel=1509370378312
