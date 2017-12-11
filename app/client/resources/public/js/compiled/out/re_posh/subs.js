// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_posh.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
re_posh.subs.reg_query_sub = (function re_posh$subs$reg_query_sub(sub_name,query){
return re_frame.core.reg_sub_raw.call(null,sub_name,(function (_,p__51698){
var vec__51699 = p__51698;
var seq__51700 = cljs.core.seq.call(null,vec__51699);
var first__51701 = cljs.core.first.call(null,seq__51700);
var seq__51700__$1 = cljs.core.next.call(null,seq__51700);
var ___$1 = first__51701;
var params = seq__51700__$1;
var pre_q = cljs.core.partial.call(null,posh.reagent.q,query,cljs.core.deref.call(null,re_posh.db.store));
return cljs.core.apply.call(null,pre_q,params);
}));
});
re_posh.subs.reg_pull_sub = (function re_posh$subs$reg_pull_sub(sub_name,pattern){
return re_frame.core.reg_sub_raw.call(null,sub_name,(function (_,p__51702){
var vec__51703 = p__51702;
var ___$1 = cljs.core.nth.call(null,vec__51703,(0),null);
var id = cljs.core.nth.call(null,vec__51703,(1),null);
return posh.reagent.pull.call(null,cljs.core.deref.call(null,re_posh.db.store),pattern,id);
}));
});

//# sourceMappingURL=subs.js.map?rel=1509370378901
