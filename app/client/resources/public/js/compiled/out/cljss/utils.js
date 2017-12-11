// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljss.utils');
goog.require('cljs.core');
goog.require('clojure.string');
cljss.utils.dev_QMARK_ = goog.DEBUG;
cljss.utils.literal_QMARK_ = (function cljss$utils$literal_QMARK_(x){
return (typeof x === 'string') || (typeof x === 'number');
});
cljss.utils.escape_val = (function cljss$utils$escape_val(rule,val){
if(cljs.core._EQ_.call(null,rule,new cljs.core.Keyword(null,"content","content",15833224))){
return cljs.core.pr_str.call(null,val);
} else {
return val;
}
});
cljss.utils.build_css = (function cljss$utils$build_css(cls,styles){
return (function (p1__66721_SHARP_){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66721_SHARP_),"}"].join('');
}).call(null,clojure.string.join.call(null,"",cljs.core.map.call(null,(function (p__66722){
var vec__66723 = p__66722;
var rule = cljs.core.nth.call(null,vec__66723,(0),null);
var val = cljs.core.nth.call(null,vec__66723,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rule)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.utils.escape_val.call(null,rule,val)),";"].join('');
}),styles)));
});
cljss.utils.compile_css_rule = (function cljss$utils$compile_css_rule(p__66726){
var vec__66727 = p__66726;
var rule = cljs.core.nth.call(null,vec__66727,(0),null);
var val = cljs.core.nth.call(null,vec__66727,(1),null);
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rule)),":"].join('')], null);
var r__$1 = ((cljs.core.vector_QMARK_.call(null,val))?cljs.core.into.call(null,r,val):cljs.core.conj.call(null,r,val));
return cljs.core.conj.call(null,r__$1,";");
});
cljss.utils.reduce_str = (function cljss$utils$reduce_str(s){
return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (s__$1,s1){
var s0 = cljs.core.first.call(null,s__$1);
var srest = cljs.core.rest.call(null,s__$1);
if(cljs.core.truth_((function (){var and__41384__auto__ = cljss.utils.literal_QMARK_.call(null,s1);
if(cljs.core.truth_(and__41384__auto__)){
return typeof s0 === 'string';
} else {
return and__41384__auto__;
}
})())){
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s0),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)].join(''),srest);
} else {
return cljs.core.cons.call(null,s1,s__$1);
}
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),s));
});

//# sourceMappingURL=utils.js.map?rel=1512632036293
