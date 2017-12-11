// Compiled by ClojureScript 1.9.908 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(56),(0)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__54332 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__54332,(0),null);
var yc = cljs.core.nth.call(null,vec__54332,(1),null);
var zc = cljs.core.nth.call(null,vec__54332,(2),null);
var vec__54335 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__54335,(0),null);
var ym = cljs.core.nth.call(null,vec__54335,(1),null);
var zm = cljs.core.nth.call(null,vec__54335,(2),null);
var vec__54338 = cljs.core.mapv.call(null,((function (vec__54332,xc,yc,zc,vec__54335,xm,ym,zm){
return (function (p1__54331_SHARP_){
var or__41411__auto__ = p1__54331_SHARP_;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return (0);
}
});})(vec__54332,xc,yc,zc,vec__54335,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__54338,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__54338,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__54338,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Insufficient `com.taoensso/encore` version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution)."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Given a name symbol and sigs, returns [<name-with-attrs-meta> <args>]
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__54342 = arguments.length;
switch (G__54342) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,sigs){
return taoensso.encore.name_with_attrs.call(null,sym,null,sigs);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,attrs_merge,sigs){
var vec__54343 = (((typeof cljs.core.first.call(null,sigs) === 'string') && (cljs.core.next.call(null,sigs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs),cljs.core.next.call(null,sigs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sigs], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__54343,(0),null);
var sigs__$1 = cljs.core.nth.call(null,vec__54343,(1),null);
var vec__54346 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,sigs__$1))) && (cljs.core.next.call(null,sigs__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,sigs__$1),cljs.core.next.call(null,sigs__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,sigs__$1], null));
var attrs = cljs.core.nth.call(null,vec__54346,(0),null);
var sigs__$2 = cljs.core.nth.call(null,vec__54346,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),sigs__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__54351 = arguments.length;
switch (G__54351) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__54354 = arguments.length;
switch (G__54354) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_54355 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_54356 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_54356;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_54355;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__5278__auto__ = (function (){var or__41411__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var data_map = temp__5278__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
return !((x == null));
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__41384__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__41384__auto__){
var and__41384__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__41384__auto____$1)){
return true;
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__41384__auto__ = (x instanceof cljs.core.Symbol);
if(and__41384__auto__){
var and__41384__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__41384__auto____$1)){
return true;
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__41384__auto__ = (x instanceof cljs.core.Keyword);
if(and__41384__auto__){
var and__41384__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__41384__auto____$1)){
return true;
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.call(null,x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__41384__auto__ = typeof x === 'number';
if(and__41384__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__41384__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = (function taoensso$encore$kw_identical_QMARK_(x,y){
if((x === y)){
return true;
} else {
if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword))){
return (x.fqn === y.fqn);
} else {
return false;
}
}
});
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var temp__5276__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__5276__auto__)){
var ns = temp__5276__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var temp__5278__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__5278__auto__)){
var n = temp__5278__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var temp__5278__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__5278__auto__)){
var n = temp__5278__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var temp__5278__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(temp__5278__auto__)){
var n = temp__5278__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var temp__5278__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__5278__auto__)){
var n = temp__5278__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var temp__5278__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__5278__auto__)){
var n = temp__5278__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var temp__5278__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(temp__5278__auto__)){
var f = temp__5278__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__5278__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__5278__auto__)){
var email = temp__5278__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e54364){if((e54364 instanceof Error)){
var _ = e54364;
return false;
} else {
throw e54364;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__54366 = arguments.length;
switch (G__54366) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join(''))," failure against arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arg-val","arg-val",1802419280),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,["`as-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,as_name)),"` failed against: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x)),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});
taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});
taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});
taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__41411__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__54369 = arguments.length;
switch (G__54369) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,no_slash_QMARK_){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * Like `force` for refs
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,cljs.core.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__54376 = arguments.length;
switch (G__54376) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54378 = arguments.length;
var i__44090__auto___54379 = (0);
while(true){
if((i__44090__auto___54379 < len__44089__auto___54378)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54379]));

var G__54380 = (i__44090__auto___54379 + (1));
i__44090__auto___54379 = G__54380;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44113__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__41384__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__41384__auto__){
var and__41384__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__41384__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__41384__auto____$1,and__41384__auto__){
return (function (p1__54371_SHARP_){
return cljs.core._EQ_.call(null,p1__54371_SHARP_,x);
});})(and__41384__auto____$1,and__41384__auto__))
,more);
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq54373){
var G__54374 = cljs.core.first.call(null,seq54373);
var seq54373__$1 = cljs.core.next.call(null,seq54373);
var G__54375 = cljs.core.first.call(null,seq54373__$1);
var seq54373__$2 = cljs.core.next.call(null,seq54373__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__54374,G__54375,seq54373__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__54386 = arguments.length;
switch (G__54386) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54388 = arguments.length;
var i__44090__auto___54389 = (0);
while(true){
if((i__44090__auto___54389 < len__44089__auto___54388)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54389]));

var G__54390 = (i__44090__auto___54389 + (1));
i__44090__auto___54389 = G__54390;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44113__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq54382){
var G__54383 = cljs.core.first.call(null,seq54382);
var seq54382__$1 = cljs.core.next.call(null,seq54382);
var G__54384 = cljs.core.first.call(null,seq54382__$1);
var seq54382__$2 = cljs.core.next.call(null,seq54382__$1);
var G__54385 = cljs.core.first.call(null,seq54382__$2);
var seq54382__$3 = cljs.core.next.call(null,seq54382__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__54383,G__54384,G__54385,seq54382__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__54393 = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__54393,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__54393,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var temp__5278__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(temp__5278__auto__)){
var s = temp__5278__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var temp__5278__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(temp__5278__auto__)){
var s = temp__5278__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * May not be available with Node.js, etc.
 */
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__54397 = arguments.length;
switch (G__54397) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ_.call(null,x,y,0.001);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__54400 = arguments.length;
switch (G__54400) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__54401 = type;
var G__54401__$1 = (((G__54401 instanceof cljs.core.Keyword))?G__54401.fqn:null);
switch (G__54401__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54412 = arguments.length;
var i__44090__auto___54413 = (0);
while(true){
if((i__44090__auto___54413 < len__44089__auto___54412)){
args__44096__auto__.push((arguments[i__44090__auto___54413]));

var G__54414 = (i__44090__auto___54413 + (1));
i__44090__auto___54413 = G__54414;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__54406){
var vec__54407 = p__54406;
var map__54410 = cljs.core.nth.call(null,vec__54407,(0),null);
var map__54410__$1 = ((((!((map__54410 == null)))?((((map__54410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54410):map__54410);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__54410__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__54410__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__54410__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__42186__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__42187__auto__ = cljs.core.long$.call(null,time);
return ((x__42186__auto__ > y__42187__auto__) ? x__42186__auto__ : y__42187__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__42204__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__42205__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__42204__auto__ < y__42205__auto__) ? x__42204__auto__ : y__42205__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq54404){
var G__54405 = cljs.core.first.call(null,seq54404);
var seq54404__$1 = cljs.core.next.call(null,seq54404);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__54405,seq54404__$1);
});

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54432 = arguments.length;
var i__44090__auto___54433 = (0);
while(true){
if((i__44090__auto___54433 < len__44089__auto___54432)){
args__44096__auto__.push((arguments[i__44090__auto___54433]));

var G__54434 = (i__44090__auto___54433 + (1));
i__44090__auto___54433 = G__54434;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__54428){
var map__54429 = p__54428;
var map__54429__$1 = ((((!((map__54429 == null)))?((((map__54429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54429):map__54429);
var opts = map__54429__$1;
var years = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__54429,map__54429__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e54431){if((e54431 instanceof Error)){
var __t = e54431;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e54431;

}
}});})(map__54429,map__54429__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq54427){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54427));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__54444 = arguments.length;
switch (G__54444) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54446 = arguments.length;
var i__44090__auto___54447 = (0);
while(true){
if((i__44090__auto___54447 < len__44089__auto___54446)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54447]));

var G__54448 = (i__44090__auto___54447 + (1));
i__44090__auto___54447 = G__54448;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44113__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__5278__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__5278__auto__)){
var o__$1 = temp__5278__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__5278__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__5278__auto__)){
var o__$1 = temp__5278__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq54440){
var G__54441 = cljs.core.first.call(null,seq54440);
var seq54440__$1 = cljs.core.next.call(null,seq54440);
var G__54442 = cljs.core.first.call(null,seq54440__$1);
var seq54440__$2 = cljs.core.next.call(null,seq54440__$1);
var G__54443 = cljs.core.first.call(null,seq54440__$2);
var seq54440__$3 = cljs.core.next.call(null,seq54440__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__54441,G__54442,G__54443,seq54440__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__54449 = coll;
var c1 = cljs.core.nth.call(null,vec__54449,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__54452 = v;
var v1 = cljs.core.nth.call(null,vec__54452,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__54459 = arguments.length;
switch (G__54459) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54461 = arguments.length;
var i__44090__auto___54462 = (0);
while(true){
if((i__44090__auto___54462 < len__44089__auto___54461)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54462]));

var G__54463 = (i__44090__auto___54462 + (1));
i__44090__auto___54462 = G__54463;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44113__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(taoensso.encore.some_QMARK_.call(null,_QMARK_x)){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq54456){
var G__54457 = cljs.core.first.call(null,seq54456);
var seq54456__$1 = cljs.core.next.call(null,seq54456);
var G__54458 = cljs.core.first.call(null,seq54456__$1);
var seq54456__$2 = cljs.core.next.call(null,seq54456__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__54457,G__54458,seq54456__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);

/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__54466_SHARP_,p2__54464_SHARP_,p3__54465_SHARP_){
return proc.call(null,p2__54464_SHARP_,p3__54465_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__54468_SHARP_,p2__54467_SHARP_){
return proc.call(null,p2__54467_SHARP_);
}),null,coll);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__5278__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__5278__auto__)){
var p = temp__5278__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.every = (function taoensso$encore$every(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__54474){
var vec__54475 = p__54474;
var k = cljs.core.nth.call(null,vec__54475,(0),null);
var v = cljs.core.nth.call(null,vec__54475,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
/**
 * Like `reduce-kv` but for JavaScript objects
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__54483 = arguments.length;
switch (G__54483) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__54490 = arguments.length;
switch (G__54490) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__54492 = null;
var G__54492__0 = (function (){
return rf.call(null);
});
var G__54492__1 = (function (acc){
return rf.call(null,acc);
});
var G__54492__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__54492 = function(acc,input){
switch(arguments.length){
case 0:
return G__54492__0.call(this);
case 1:
return G__54492__1.call(this,acc);
case 2:
return G__54492__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__54492.cljs$core$IFn$_invoke$arity$0 = G__54492__0;
G__54492.cljs$core$IFn$_invoke$arity$1 = G__54492__1;
G__54492.cljs$core$IFn$_invoke$arity$2 = G__54492__2;
return G__54492;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
var or__41411__auto__ = taoensso.encore._QMARK_subvec_LT_len.call(null,coll,(0),n);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__54501 = arguments.length;
switch (G__54501) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54503 = arguments.length;
var i__44090__auto___54504 = (0);
while(true){
if((i__44090__auto___54504 < len__44089__auto___54503)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54504]));

var G__54505 = (i__44090__auto___54504 + (1));
i__44090__auto___54504 = G__54505;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44113__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq54498){
var G__54499 = cljs.core.first.call(null,seq54498);
var seq54498__$1 = cljs.core.next.call(null,seq54498);
var G__54500 = cljs.core.first.call(null,seq54498__$1);
var seq54498__$2 = cljs.core.next.call(null,seq54498__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__54499,G__54500,seq54498__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
return taoensso.encore.filter_vals.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
return taoensso.encore.filter_keys.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.complement.call(null,pred),m);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__54506_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__54506_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__54507 = ks;
var seq__54508 = cljs.core.seq.call(null,vec__54507);
var first__54509 = cljs.core.first.call(null,seq__54508);
var seq__54508__$1 = cljs.core.next.call(null,seq__54508);
var k = first__54509;
var ks__$1 = seq__54508__$1;
if(ks__$1){
return cljs.core.assoc.call(null,m,k,taoensso.encore.update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
/**
 * Like `subvec` but:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty vector.
 */
taoensso.encore._QMARK_subvec_LT_idx = (function taoensso$encore$_QMARK_subvec_LT_idx(var_args){
var G__54511 = arguments.length;
switch (G__54511) {
case 2:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return null;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return null;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
});

taoensso.encore._QMARK_subvec_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?subvec<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore._QMARK_subvec_LT_len = (function taoensso$encore$_QMARK_subvec_LT_len(var_args){
var G__54514 = arguments.length;
switch (G__54514) {
case 2:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return null;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return null;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return null;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
});

taoensso.encore._QMARK_subvec_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__54517 = arguments.length;
switch (G__54517) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__54524 = arguments.length;
switch (G__54524) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54526 = arguments.length;
var i__44090__auto___54527 = (0);
while(true){
if((i__44090__auto___54527 < len__44089__auto___54526)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54527]));

var G__54528 = (i__44090__auto___54527 + (1));
i__44090__auto___54527 = G__54528;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44113__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq54520){
var G__54521 = cljs.core.first.call(null,seq54520);
var seq54520__$1 = cljs.core.next.call(null,seq54520);
var G__54522 = cljs.core.first.call(null,seq54520__$1);
var seq54520__$2 = cljs.core.next.call(null,seq54520__$1);
var G__54523 = cljs.core.first.call(null,seq54520__$2);
var seq54520__$3 = cljs.core.next.call(null,seq54520__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__54521,G__54522,G__54523,seq54520__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__54534 = arguments.length;
switch (G__54534) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54536 = arguments.length;
var i__44090__auto___54537 = (0);
while(true){
if((i__44090__auto___54537 < len__44089__auto___54536)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54537]));

var G__54538 = (i__44090__auto___54537 + (1));
i__44090__auto___54537 = G__54538;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44113__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_some.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq54530){
var G__54531 = cljs.core.first.call(null,seq54530);
var seq54530__$1 = cljs.core.next.call(null,seq54530);
var G__54532 = cljs.core.first.call(null,seq54530__$1);
var seq54530__$2 = cljs.core.next.call(null,seq54530__$1);
var G__54533 = cljs.core.first.call(null,seq54530__$2);
var seq54530__$3 = cljs.core.next.call(null,seq54530__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__54531,G__54532,G__54533,seq54530__$3);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);

/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__54544 = arguments.length;
switch (G__54544) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54546 = arguments.length;
var i__44090__auto___54547 = (0);
while(true){
if((i__44090__auto___54547 < len__44089__auto___54546)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54547]));

var G__54548 = (i__44090__auto___54547 + (1));
i__44090__auto___54547 = G__54548;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44113__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (acc,k__$1,v__$1){
return taoensso.encore.assoc_when.call(null,acc,k__$1,v__$1);
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq54540){
var G__54541 = cljs.core.first.call(null,seq54540);
var seq54540__$1 = cljs.core.next.call(null,seq54540);
var G__54542 = cljs.core.first.call(null,seq54540__$1);
var seq54540__$2 = cljs.core.next.call(null,seq54540__$1);
var G__54543 = cljs.core.first.call(null,seq54540__$2);
var seq54540__$3 = cljs.core.next.call(null,seq54540__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__54541,G__54542,G__54543,seq54540__$3);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);

taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__54550 = arguments.length;
switch (G__54550) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54553 = arguments.length;
var i__44090__auto___54554 = (0);
while(true){
if((i__44090__auto___54554 < len__44089__auto___54553)){
args__44096__auto__.push((arguments[i__44090__auto___54554]));

var G__54555 = (i__44090__auto___54554 + (1));
i__44090__auto___54554 = G__54555;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq54552){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54552));
});

/**
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54558 = arguments.length;
var i__44090__auto___54559 = (0);
while(true){
if((i__44090__auto___54559 < len__44089__auto___54558)){
args__44096__auto__.push((arguments[i__44090__auto___54559]));

var G__54560 = (i__44090__auto___54559 + (1));
i__44090__auto___54559 = G__54560;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq54556){
var G__54557 = cljs.core.first.call(null,seq54556);
var seq54556__$1 = cljs.core.next.call(null,seq54556);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__54557,seq54556__$1);
});

/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__54561 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__54562 = cljs.core.next.call(null,ks__$1);
var G__54563 = cljs.core.next.call(null,vs__$1);
m = G__54561;
ks__$1 = G__54562;
vs__$1 = G__54563;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__54568 = arguments.length;
switch (G__54568) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54570 = arguments.length;
var i__44090__auto___54571 = (0);
while(true){
if((i__44090__auto___54571 < len__44089__auto___54570)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54571]));

var G__54572 = (i__44090__auto___54571 + (1));
i__44090__auto___54571 = G__54572;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44113__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq54565){
var G__54566 = cljs.core.first.call(null,seq54565);
var seq54565__$1 = cljs.core.next.call(null,seq54565);
var G__54567 = cljs.core.first.call(null,seq54565__$1);
var seq54565__$2 = cljs.core.next.call(null,seq54565__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__54566,G__54567,seq54565__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if((s1) && (s2)){
var G__54573 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__54574 = cljs.core.next.call(null,s1);
var G__54575 = cljs.core.next.call(null,s2);
v = G__54573;
s1 = G__54574;
s2 = G__54575;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore._nested_merge_with = (function taoensso$encore$_nested_merge_with(f,maps){
if(cljs.core.truth_(taoensso.encore.rsome.call(null,cljs.core.identity,maps))){
return cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce_kv.call(null,(function taoensso$encore$_nested_merge_with_$_rf2(acc__$1,k,rv){
if(cljs.core.contains_QMARK_.call(null,acc__$1,k)){
var lv = cljs.core.get.call(null,acc__$1,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_nested_merge_with_$_rf2,lv,rv));
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("merge","dissoc","merge/dissoc",-706655261))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
var new_rv = f.call(null,lv,rv);
if(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("merge","dissoc","merge/dissoc",-706655261))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
} else {
return cljs.core.assoc.call(null,acc__$1,k,rv);
}
}),acc,in$);
}),cljs.core.PersistentArrayMap.EMPTY,maps);
} else {
return null;
}
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54578 = arguments.length;
var i__44090__auto___54579 = (0);
while(true){
if((i__44090__auto___54579 < len__44089__auto___54578)){
args__44096__auto__.push((arguments[i__44090__auto___54579]));

var G__54580 = (i__44090__auto___54579 + (1));
i__44090__auto___54579 = G__54580;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._nested_merge_with.call(null,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq54576){
var G__54577 = cljs.core.first.call(null,seq54576);
var seq54576__$1 = cljs.core.next.call(null,seq54576);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__54577,seq54576__$1);
});

taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54582 = arguments.length;
var i__44090__auto___54583 = (0);
while(true){
if((i__44090__auto___54583 < len__44089__auto___54582)){
args__44096__auto__.push((arguments[i__44090__auto___54583]));

var G__54584 = (i__44090__auto___54583 + (1));
i__44090__auto___54583 = G__54584;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._nested_merge_with.call(null,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq54581){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54581));
});

/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore._platform_cas_BANG_ = (function taoensso$encore$_platform_cas_BANG_(atom_,old_val,new_val){
cljs.core.reset_BANG_.call(null,atom_,new_val);

return true;
});
/**
 * Returns [<old-val> <new-val>]
 */
taoensso.encore.dswap_BANG_ = (function taoensso$encore$dswap_BANG_(atom_,f){
var ov = cljs.core.deref.call(null,atom_);
var nv = f.call(null,ov);
cljs.core.reset_BANG_.call(null,atom_,nv);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ov,nv], null);
});
/**
 * Used by memoization utils
 */
taoensso.encore._swap_cache_BANG_ = (function taoensso$encore$_swap_cache_BANG_(atom_,k,f){
var om = cljs.core.deref.call(null,atom_);
var nv = f.call(null,cljs.core.get.call(null,om,k));
var nm = cljs.core.assoc.call(null,om,k,nv);
cljs.core.reset_BANG_.call(null,atom_,nm);

return nv;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k54586,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__54590 = k54586;
var G__54590__$1 = (((G__54590 instanceof cljs.core.Keyword))?G__54590.fqn:null);
switch (G__54590__$1) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54586,else__42885__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#taoensso.encore.Swapped{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54585){
var self__ = this;
var G__54585__$1 = this;
return (new cljs.core.RecordIter((0),G__54585__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (67130970 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54587,other54588){
var self__ = this;
var this54587__$1 = this;
return (!((other54588 == null))) && ((this54587__$1.constructor === other54588.constructor)) && (cljs.core._EQ_.call(null,this54587__$1.new_val,other54588.new_val)) && (cljs.core._EQ_.call(null,this54587__$1.return_val,other54588.return_val)) && (cljs.core._EQ_.call(null,this54587__$1.__extmap,other54588.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__54585){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__54591 = cljs.core.keyword_identical_QMARK_;
var expr__54592 = k__42890__auto__;
if(cljs.core.truth_(pred__54591.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__54592))){
return (new taoensso.encore.Swapped(G__54585,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54591.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__54592))){
return (new taoensso.encore.Swapped(self__.new_val,G__54585,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__54585),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__54585){
var self__ = this;
var this__42881__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__54585,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__54589){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__54589),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__54589),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__54589,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489))),null));
});

taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
/**
 * Returns [<new-val> <return-val>]
 */
taoensso.encore._swapped = (function taoensso$encore$_swapped(var_args){
var G__54596 = arguments.length;
switch (G__54596) {
case 1:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(taoensso.encore.swapped_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$2 = (function (old_val,f){
return taoensso.encore._swapped.call(null,f.call(null,old_val));
});

taoensso.encore._swapped.cljs$core$IFn$_invoke$arity$3 = (function (old_val,ks,f){
var vec__54597 = ks;
var seq__54598 = cljs.core.seq.call(null,vec__54597);
var first__54599 = cljs.core.first.call(null,seq__54598);
var seq__54598__$1 = cljs.core.next.call(null,seq__54598);
var k1 = first__54599;
var kn = seq__54598__$1;
var m = old_val;
if(kn){
if(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
return taoensso.encore._swapped.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__54600 = taoensso.encore._swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__54600,(0),null);
var return_val = cljs.core.nth.call(null,vec__54600,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
} else {
if(((k1 == null)) && (cljs.core.empty_QMARK_.call(null,ks))){
return taoensso.encore._swapped.call(null,f.call(null,old_val));
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782))){
return taoensso.encore._swapped.call(null,cljs.core.dissoc.call(null,m,k1));
} else {
var old_val_in = cljs.core.get.call(null,m,k1);
var vec__54603 = taoensso.encore._swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__54603,(0),null);
var return_val = cljs.core.nth.call(null,vec__54603,(1),null);
var new_val = ((taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m,k1):cljs.core.assoc.call(null,m,k1,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
}
}
});

taoensso.encore._swapped.cljs$lang$maxFixedArity = 3;

/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore._replace_in = (function taoensso$encore$_replace_in(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (acc,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__54607 = (cljs.core.truth_(_QMARK_vf_type)?cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op):_QMARK_op);
var vf_type = cljs.core.nth.call(null,vec__54607,(0),null);
var ks = cljs.core.nth.call(null,vec__54607,(1),null);
var valf = cljs.core.nth.call(null,vec__54607,(2),null);
var G__54610 = vf_type;
var G__54610__$1 = (((G__54610 instanceof cljs.core.Keyword))?G__54610.fqn:null);
switch (G__54610__$1) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,acc,ks,valf);
}

break;
case "swap":
if((valf == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,acc);
} else {
return cljs.core.nth.call(null,taoensso.encore._swapped.call(null,acc,ks,valf),(0));
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54610__$1)].join('')));

}
} else {
return acc;
}
}),m,ops);
});
/**
 * For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54614 = arguments.length;
var i__44090__auto___54615 = (0);
while(true){
if((i__44090__auto___54615 < len__44089__auto___54614)){
args__44096__auto__.push((arguments[i__44090__auto___54615]));

var G__54616 = (i__44090__auto___54615 + (1));
i__44090__auto___54615 = G__54616;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore._replace_in.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq54612){
var G__54613 = cljs.core.first.call(null,seq54612);
var seq54612__$1 = cljs.core.next.call(null,seq54612);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__54613,seq54612__$1);
});

taoensso.encore.pairs_into = (function taoensso$encore$pairs_into(to,from){
return cljs.core.into.call(null,to,cljs.core.partition_all.call(null,(2)),from);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var G__54626 = arguments.length;
switch (G__54626) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54636 = arguments.length;
var i__44090__auto___54637 = (0);
while(true){
if((i__44090__auto___54637 < len__44089__auto___54636)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54637]));

var G__54638 = (i__44090__auto___54637 + (1));
i__44090__auto___54637 = G__54638;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44113__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,f){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__54627 = taoensso.encore._swapped.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__54627,(0),null);
var return_val = cljs.core.nth.call(null,vec__54627,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__54630 = taoensso.encore._swapped.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__54630,(0),null);
var return_val = cljs.core.nth.call(null,vec__54630,(1),null);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e54633){if((e54633 instanceof Error)){
var __t = e54633;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e54633;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e54634){if((e54634 instanceof Error)){
var __t = e54634;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e54634;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),more);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore._replace_in.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq54622){
var G__54623 = cljs.core.first.call(null,seq54622);
var seq54622__$1 = cljs.core.next.call(null,seq54622);
var G__54624 = cljs.core.first.call(null,seq54622__$1);
var seq54622__$2 = cljs.core.next.call(null,seq54622__$1);
var G__54625 = cljs.core.first.call(null,seq54622__$2);
var seq54622__$3 = cljs.core.next.call(null,seq54622__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54623,G__54624,G__54625,seq54622__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var G__54644 = arguments.length;
switch (G__54644) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54648 = arguments.length;
var i__44090__auto___54649 = (0);
while(true){
if((i__44090__auto___54649 < len__44089__auto___54648)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54649]));

var G__54650 = (i__44090__auto___54649 + (1));
i__44090__auto___54649 = G__54650;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44113__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e54645){if((e54645 instanceof Error)){
var __t = e54645;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e54645;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e54646){if((e54646 instanceof Error)){
var __t = e54646;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e54646;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var op_pairs = taoensso.encore.pairs_into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),more);
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore._replace_in.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,op_pairs);
if(cljs.core.truth_(taoensso.encore._platform_cas_BANG_.call(null,atom_,old_val,new_val__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq54640){
var G__54641 = cljs.core.first.call(null,seq54640);
var seq54640__$1 = cljs.core.next.call(null,seq54640);
var G__54642 = cljs.core.first.call(null,seq54640__$1);
var seq54640__$2 = cljs.core.next.call(null,seq54640__$1);
var G__54643 = cljs.core.first.call(null,seq54640__$2);
var seq54640__$3 = cljs.core.next.call(null,seq54640__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54641,G__54642,G__54643,seq54640__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__54655 = arguments.length;
switch (G__54655) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__44112__auto__ = [];
var len__44089__auto___54657 = arguments.length;
var i__44090__auto___54658 = (0);
while(true){
if((i__44090__auto___54658 < len__44089__auto___54657)){
args_arr__44112__auto__.push((arguments[i__44090__auto___54658]));

var G__54659 = (i__44090__auto___54658 + (1));
i__44090__auto___54658 = G__54659;
continue;
} else {
}
break;
}

var argseq__44113__auto__ = (new cljs.core.IndexedSeq(args_arr__44112__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44113__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq54652){
var G__54653 = cljs.core.first.call(null,seq54652);
var seq54652__$1 = cljs.core.next.call(null,seq54652);
var G__54654 = cljs.core.first.call(null,seq54652__$1);
var seq54652__$2 = cljs.core.next.call(null,seq54652__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__54653,G__54654,seq54652__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__54665 = arguments.length;
switch (G__54665) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__41384__auto__ = separator;
if(cljs.core.truth_(and__41384__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__41384__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__41411__auto__ = fmt;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE
 *  * Formats nil as "nil" rather than "null"
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!)
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54669 = arguments.length;
var i__44090__auto___54670 = (0);
while(true){
if((i__44090__auto___54670 < len__44089__auto___54669)){
args__44096__auto__.push((arguments[i__44090__auto___54670]));

var G__54671 = (i__44090__auto___54670 + (1));
i__44090__auto___54670 = G__54671;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq54667){
var G__54668 = cljs.core.first.call(null,seq54667);
var seq54667__$1 = cljs.core.next.call(null,seq54667);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__54668,seq54667__$1);
});

/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides behaviour consistent between Clojure/Script.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__54672__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__54672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54673__i = 0, G__54673__a = new Array(arguments.length -  0);
while (G__54673__i < G__54673__a.length) {G__54673__a[G__54673__i] = arguments[G__54673__i + 0]; ++G__54673__i;}
  args = new cljs.core.IndexedSeq(G__54673__a,0,null);
} 
return G__54672__delegate.call(this,args);};
G__54672.cljs$lang$maxFixedArity = 0;
G__54672.cljs$lang$applyTo = (function (arglist__54674){
var args = cljs.core.seq(arglist__54674);
return G__54672__delegate(args);
});
G__54672.cljs$core$IFn$_invoke$arity$variadic = G__54672__delegate;
return G__54672;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__54676 = arguments.length;
switch (G__54676) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour:
 *  - Never throws; snaps to valid start and end indexes.
 *  - Returns nil rather than an empty string.
 */
taoensso.encore._QMARK_substr_LT_idx = (function taoensso$encore$_QMARK_substr_LT_idx(var_args){
var G__54679 = arguments.length;
switch (G__54679) {
case 2:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substring(start));
});

taoensso.encore._QMARK_substr_LT_idx.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return null;
} else {
return s.substring(start,end);
}
});

taoensso.encore._QMARK_substr_LT_idx.cljs$lang$maxFixedArity = 3;

/**
 * Like `?substr<idx` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore._QMARK_substr_LT_len = (function taoensso$encore$_QMARK_substr_LT_len(var_args){
var G__54682 = arguments.length;
switch (G__54682) {
case 2:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
});

taoensso.encore._QMARK_substr_LT_len.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
});

taoensso.encore._QMARK_substr_LT_len.cljs$lang$maxFixedArity = 3;

/**
 * Like `string/join` but skips duplicate separators
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(cljs.core.truth_(in_starts_with_sep_QMARK_)){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__41411__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54687 = arguments.length;
var i__44090__auto___54688 = (0);
while(true){
if((i__44090__auto___54688 < len__44089__auto___54687)){
args__44096__auto__.push((arguments[i__44090__auto___54688]));

var G__54689 = (i__44090__auto___54688 + (1));
i__44090__auto___54688 = G__54689;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq54686){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54686));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__54691 = arguments.length;
switch (G__54691) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore._QMARK_substr_LT_len.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Like `core/memoize` but avoids write races, supports invalidation
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__54695__delegate = function (xs){
var get_sentinel = {};
var x1 = cljs.core.first.call(null,xs);
if(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__54695 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__54696__i = 0, G__54696__a = new Array(arguments.length -  0);
while (G__54696__i < G__54696__a.length) {G__54696__a[G__54696__i] = arguments[G__54696__i + 0]; ++G__54696__i;}
  xs = new cljs.core.IndexedSeq(G__54696__a,0,null);
} 
return G__54695__delegate.call(this,xs);};
G__54695.cljs$lang$maxFixedArity = 0;
G__54695.cljs$lang$applyTo = (function (arglist__54697){
var xs = cljs.core.seq(arglist__54697);
return G__54695__delegate(xs);
});
G__54695.cljs$core$IFn$_invoke$arity$variadic = G__54695__delegate;
return G__54695;
})()
;
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__54698__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__41411__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__41411__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__41411__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__41411__auto__,cache_))
,null))]);
}
});})(or__41411__auto__,cache_))
),args);
}
})());
};
var G__54698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54699__i = 0, G__54699__a = new Array(arguments.length -  0);
while (G__54699__i < G__54699__a.length) {G__54699__a[G__54699__i] = arguments[G__54699__i + 0]; ++G__54699__i;}
  args = new cljs.core.IndexedSeq(G__54699__a,0,null);
} 
return G__54698__delegate.call(this,args);};
G__54698.cljs$lang$maxFixedArity = 0;
G__54698.cljs$lang$applyTo = (function (arglist__54700){
var args = cljs.core.seq(arglist__54700);
return G__54698__delegate(args);
});
G__54698.cljs$core$IFn$_invoke$arity$variadic = G__54698__delegate;
return G__54698;
})()
;
;})(cache_))
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Like `core/memoize` but:
 *  * Often faster, depends on opts
 *  * Prevents race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` opt
 *  * Supports cache size limit & gc with `cache-size` opt
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var G__54702 = arguments.length;
switch (G__54702) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_54738 = ttl_ms;
try{if(taoensso.encore.pos_int_QMARK_.call(null,__x_54738)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e54703){if((e54703 instanceof Error)){
var __t_54739 = e54703;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_54738,__t_54739,null);
} else {
throw e54703;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__41384__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__41384__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__41384__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__41384__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__41384__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__54704){
var vec__54705 = p__54704;
var dv = cljs.core.nth.call(null,vec__54705,(0),null);
var udt = cljs.core.nth.call(null,vec__54705,(1),null);
var cv = vec__54705;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__54740__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?cljs.core.next.call(null,args):args);
var instant = taoensso.encore.now_udt.call(null);
var vec__54708 = taoensso.encore._swap_cache_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__41384__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__41384__auto__)){
var and__41384__auto____$1 = !(fresh_QMARK_);
if(and__41384__auto____$1){
var vec__54714 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__54714,(0),null);
var udt = cljs.core.nth.call(null,vec__54714,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__54708,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__54740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54741__i = 0, G__54741__a = new Array(arguments.length -  0);
while (G__54741__i < G__54741__a.length) {G__54741__a[G__54741__i] = arguments[G__54741__i + 0]; ++G__54741__i;}
  args = new cljs.core.IndexedSeq(G__54741__a,0,null);
} 
return G__54740__delegate.call(this,args);};
G__54740.cljs$lang$maxFixedArity = 0;
G__54740.cljs$lang$applyTo = (function (arglist__54742){
var args = cljs.core.seq(arglist__54742);
return G__54740__delegate(args);
});
G__54740.cljs$core$IFn$_invoke$arity$variadic = G__54740__delegate;
return G__54740;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_54743 = ttl_ms;
if(cljs.core.truth_(((function (__x_54743){
return (function (__x__$1){
var or__41411__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_54743))
.call(null,__x_54743))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_54743,null,null);
}

var __x_54744 = cache_size;
try{if(taoensso.encore.pos_int_QMARK_.call(null,__x_54744)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e54717){if((e54717 instanceof Error)){
var __t_54745 = e54717;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_54744,__t_54745,null);
} else {
throw e54717;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__41411__auto__ = ttl_ms;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__41384__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__41384__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__41384__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__41384__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__41384__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_54746 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_54747 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_54746,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__54718){
var vec__54719 = p__54718;
var dv = cljs.core.nth.call(null,vec__54719,(0),null);
var udt = cljs.core.nth.call(null,vec__54719,(1),null);
var _ = cljs.core.nth.call(null,vec__54719,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__54719,(3),null);
var cv = vec__54719;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_54746,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_54746));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_54746,ks_to_gc_54747,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_54746,ks_to_gc_54747,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_54746,ks_to_gc_54747,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_54747));
});})(snapshot_54746,ks_to_gc_54747,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_54748 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_54749 = (cljs.core.count.call(null,snapshot_54748) - cache_size__$1);
if((n_to_gc_54749 > (64))){
var ks_to_gc_54750 = taoensso.encore.top.call(null,n_to_gc_54749,((function (snapshot_54748,n_to_gc_54749,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__54722 = snapshot_54748.call(null,k);
var _ = cljs.core.nth.call(null,vec__54722,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__54722,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__54722,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__54722,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_54748,n_to_gc_54749,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_54748));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_54750,snapshot_54748,n_to_gc_54749,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_54750,snapshot_54748,n_to_gc_54749,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_54750,snapshot_54748,n_to_gc_54749,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_54750));
});})(ks_to_gc_54750,snapshot_54748,n_to_gc_54749,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((ttl_ms_QMARK_)?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore._swap_cache_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__41384__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__41384__auto__)){
var and__41384__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__41384__auto____$1){
var vec__54728 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__54728,(0),null);
var udt = cljs.core.nth.call(null,vec__54728,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore._swap_cache_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__41384__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__41384__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__41384__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__54751__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = ((fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__54731 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__54731,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__54731,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__5276__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__5276__auto__)){
var vec__54734 = temp__5276__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__54734,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__54734,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__54734,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__54734,(3),null);
var cv = vec__54734;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null));
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)));
}
});})(fresh_QMARK_,args__$1,tick,vec__54731,dv,a1,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);
}
};
var G__54751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54752__i = 0, G__54752__a = new Array(arguments.length -  0);
while (G__54752__i < G__54752__a.length) {G__54752__a[G__54752__i] = arguments[G__54752__i + 0]; ++G__54752__i;}
  args = new cljs.core.IndexedSeq(G__54752__a,0,null);
} 
return G__54751__delegate.call(this,args);};
G__54751.cljs$lang$maxFixedArity = 0;
G__54751.cljs$lang$applyTo = (function (arglist__54753){
var args = cljs.core.seq(arglist__54753);
return G__54751__delegate(args);
});
G__54751.cljs$core$IFn$_invoke$arity$variadic = G__54751__delegate;
return G__54751;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__54754){
var vec__54755 = p__54754;
var _ = cljs.core.nth.call(null,vec__54755,(0),null);
var win_ms = cljs.core.nth.call(null,vec__54755,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__54755,(2),null);
var spec = vec__54755;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__54758){
var vec__54759 = p__54758;
var _ = cljs.core.nth.call(null,vec__54759,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__54759,(1),null);
var id = cljs.core.nth.call(null,vec__54759,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__54762){
var vec__54763 = p__54762;
var _QMARK_a1 = cljs.core.nth.call(null,vec__54763,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__54763,(1),null);
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","debug","rl/debug",-1608167914))){
return vstates_;
} else {
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","reset","rl/reset",-800926172))){
if(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a2,new cljs.core.Keyword("rl","all","rl/all",892118056))){
cljs.core.reset_BANG_.call(null,vstates_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","peek","rl/peek",-291391771));
var req_id = ((peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__41384__auto__ = req_id;
if(cljs.core.truth_(and__41384__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__41384__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__54766){
var vec__54767 = p__54766;
var ___$1 = cljs.core.nth.call(null,vec__54767,(0),null);
var udt = cljs.core.nth.call(null,vec__54767,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__54767,(2),null);
var x__42186__auto__ = acc;
var y__42187__auto__ = udt;
return ((x__42186__auto__ > y__42187__auto__) ? x__42186__auto__ : y__42187__auto__);
});})(peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.truth_(_QMARK_vstate)){
var vec__54770 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__54773 = in_vspecs;
var seq__54774 = cljs.core.seq.call(null,vec__54773);
var first__54775 = cljs.core.first.call(null,seq__54774);
var seq__54774__$1 = cljs.core.next.call(null,seq__54774);
var vec__54776 = first__54775;
var ncalls_limit = cljs.core.nth.call(null,vec__54776,(0),null);
var win_ms = cljs.core.nth.call(null,vec__54776,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__54776,(2),null);
var next_in_vspecs = seq__54774__$1;
var vec__54779 = in_vstate;
var seq__54780 = cljs.core.seq.call(null,vec__54779);
var first__54781 = cljs.core.first.call(null,seq__54780);
var seq__54780__$1 = cljs.core.next.call(null,seq__54780);
var vec__54782 = first__54781;
var ncalls = cljs.core.nth.call(null,vec__54782,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__54782,(1),null);
var next_in_vstate = seq__54780__$1;
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((rate_limited_QMARK_)?(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__41411__auto__ = (_QMARK_worst_limit_offence == null);
if(or__41411__auto__){
return or__41411__auto__;
} else {
var vec__54788 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__54788,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__54788,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})():_QMARK_worst_limit_offence);
if(next_in_vspecs){
var G__54798 = next_in_vspecs;
var G__54799 = next_in_vstate;
var G__54800 = new_out_vstate;
var G__54801 = new__QMARK_worst_limit_offence;
in_vspecs = G__54798;
in_vstate = G__54799;
out_vstate = G__54800;
_QMARK_worst_limit_offence = G__54801;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__54770,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__54770,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__54770,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__54791){
var vec__54792 = p__54791;
var ncalls = cljs.core.nth.call(null,vec__54792,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__54792,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__54770,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)));
var result = (function (){var temp__5278__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__5278__auto__)){
var wlo = temp__5278__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__54795 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__54795,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__54795,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
} else {
if(peek_QMARK_){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
}
});})(peek_QMARK_,req_id,instant,vec__54763,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__54762 = null;
if (arguments.length > 0) {
var G__54802__i = 0, G__54802__a = new Array(arguments.length -  0);
while (G__54802__i < G__54802__a.length) {G__54802__a[G__54802__i] = arguments[G__54802__i + 0]; ++G__54802__i;}
  p__54762 = new cljs.core.IndexedSeq(G__54802__a,0,null);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__54762);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__54803){
var p__54762 = cljs.core.seq(arglist__54803);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__54762);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__54804__delegate = function (args){
var temp__5276__auto__ = rl.call(null);
if(cljs.core.truth_(temp__5276__auto__)){
var backoff = temp__5276__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__54804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54805__i = 0, G__54805__a = new Array(arguments.length -  0);
while (G__54805__i < G__54805__a.length) {G__54805__a[G__54805__i] = arguments[G__54805__i + 0]; ++G__54805__i;}
  args = new cljs.core.IndexedSeq(G__54805__a,0,null);
} 
return G__54804__delegate.call(this,args);};
G__54804.cljs$lang$maxFixedArity = 0;
G__54804.cljs$lang$applyTo = (function (arglist__54806){
var args = cljs.core.seq(arglist__54806);
return G__54804__delegate(args);
});
G__54804.cljs$core$IFn$_invoke$arity$variadic = G__54804__delegate;
return G__54804;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__5276__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(temp__5276__auto__)){
var perf = temp__5276__auto__;
var temp__5276__auto____$1 = (function (){var or__41411__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
var or__41411__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__41411__auto____$2)){
return or__41411__auto____$2;
} else {
var or__41411__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__41411__auto____$3)){
return or__41411__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(temp__5276__auto____$1)){
var f = temp__5276__auto____$1;
return ((function (f,temp__5276__auto____$1,perf,temp__5276__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__5276__auto____$1,perf,temp__5276__auto__))
} else {
return ((function (temp__5276__auto____$1,perf,temp__5276__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__5276__auto____$1,perf,temp__5276__auto__))
}
} else {
return ((function (temp__5276__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__5276__auto__))
}
})();

taoensso.encore.console_log = (function (){var temp__5276__auto__ = (function (){var and__41384__auto__ = typeof console !== 'undefined';
if(and__41384__auto__){
return console.log;
} else {
return and__41384__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var f = temp__5276__auto__;
return ((function (f,temp__5276__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__5276__auto__))
} else {
return ((function (temp__5276__auto__){
return (function (xs){
return null;
});
;})(temp__5276__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54814 = arguments.length;
var i__44090__auto___54815 = (0);
while(true){
if((i__44090__auto___54815 < len__44089__auto___54814)){
args__44096__auto__.push((arguments[i__44090__auto___54815]));

var G__54816 = (i__44090__auto___54815 + (1));
i__44090__auto___54815 = G__54816;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq54807){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54807));
});


taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54817 = arguments.length;
var i__44090__auto___54818 = (0);
while(true){
if((i__44090__auto___54818 < len__44089__auto___54817)){
args__44096__auto__.push((arguments[i__44090__auto___54818]));

var G__54819 = (i__44090__auto___54818 + (1));
i__44090__auto___54818 = G__54819;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq54808){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54808));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54820 = arguments.length;
var i__44090__auto___54821 = (0);
while(true){
if((i__44090__auto___54821 < len__44089__auto___54820)){
args__44096__auto__.push((arguments[i__44090__auto___54821]));

var G__54822 = (i__44090__auto___54821 + (1));
i__44090__auto___54821 = G__54822;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq54809){
var G__54810 = cljs.core.first.call(null,seq54809);
var seq54809__$1 = cljs.core.next.call(null,seq54809);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__54810,seq54809__$1);
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54823 = arguments.length;
var i__44090__auto___54824 = (0);
while(true){
if((i__44090__auto___54824 < len__44089__auto___54823)){
args__44096__auto__.push((arguments[i__44090__auto___54824]));

var G__54825 = (i__44090__auto___54824 + (1));
i__44090__auto___54824 = G__54825;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq54811){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54811));
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54826 = arguments.length;
var i__44090__auto___54827 = (0);
while(true){
if((i__44090__auto___54827 < len__44089__auto___54826)){
args__44096__auto__.push((arguments[i__44090__auto___54827]));

var G__54828 = (i__44090__auto___54827 + (1));
i__44090__auto___54827 = G__54828;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq54812){
var G__54813 = cljs.core.first.call(null,seq54812);
var seq54812__$1 = cljs.core.next.call(null,seq54812);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__54813,seq54812__$1);
});

/**
 * Returns `js/window`'s current location as a map
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var temp__5278__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__5278__auto__)){
var js_win = temp__5278__auto__;
var temp__5278__auto____$1 = js_win.location;
if(cljs.core.truth_(temp__5278__auto____$1)){
var loc = temp__5278__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var __x = params;
if(cljs.core.truth_(((function (__x){
return (function (__x__$1){
var or__41411__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});})(__x))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.seq.call(null,params))?(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})():null);
var G__54829 = method;
var G__54829__$1 = (((G__54829 instanceof cljs.core.Keyword))?G__54829.fqn:null);
switch (G__54829__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54829__$1)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__54833,callback){
var map__54834 = p__54833;
var map__54834__$1 = ((((!((map__54834 == null)))?((((map__54834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54834):map__54834);
var opts = map__54834__$1;
var method = cljs.core.get.call(null,map__54834__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__54834__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__54834__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__54834__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__54834__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__54834__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__54834__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__54834__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__41411__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nat-int?] timeout-ms)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nat-int?] timeout-ms)"));
}

var temp__5276__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__5276__auto__)){
var xhr = temp__5276__auto__;
try{var timeout_ms__$1 = (function (){var or__41411__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__54840 = method;
var G__54840__$1 = (((G__54840 instanceof cljs.core.Keyword))?G__54840.fqn:null);
switch (G__54840__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54840__$1)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__54837 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__54837,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__54837,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,(cljs.core.truth_(post_content_STAR_)?cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8"):headers__$1));
var G__54841_54849 = xhr;
goog.events.listenOnce(G__54841_54849,goog.net.EventType.READY,((function (G__54841_54849,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__54837,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__5276__auto__,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__54841_54849,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__54837,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__5276__auto__,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__54841_54849,goog.net.EventType.COMPLETE,((function (G__54841_54849,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__54837,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__5276__auto__,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?(function (){var pred__54842 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__54841_54849,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__54837,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__5276__auto__,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__54832_SHARP_,p2__54831_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__54831_SHARP_,p1__54832_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__54841_54849,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__54837,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__5276__auto__,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__54843 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__54842.call(null,"/edn",expr__54843))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__54842.call(null,"/json",expr__54843))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__54842.call(null,"/xml",expr__54843))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__54842.call(null,"/html",expr__54843))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})():resp_type);
try{var G__54846 = resp_type__$1;
var G__54846__$1 = (((G__54846 instanceof cljs.core.Keyword))?G__54846.fqn:null);
switch (G__54846__$1) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54846__$1)].join('')));

}
}catch (e54845){if((e54845 instanceof Error)){
var e = e54845;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e54845;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__41411__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__54841_54849,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__54837,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__5276__auto__,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__5278__auto___54851 = progress_fn;
if(cljs.core.truth_(temp__5278__auto___54851)){
var pf_54852 = temp__5278__auto___54851;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_54852,temp__5278__auto___54851,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__54837,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__5276__auto__,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__41384__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__41384__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__41384__auto__;
}
})())?(loaded / total):null);
return pf_54852.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_54852,temp__5278__auto___54851,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__54837,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__5276__auto__,map__54834,map__54834__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__54847_54853 = xhr;
var temp__5278__auto___54854 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__5278__auto___54854)){
var x_54855 = temp__5278__auto___54854;
G__54847_54853.setTimeoutInterval((function (){var or__41411__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__5278__auto___54856 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__5278__auto___54856)){
var x_54857 = temp__5278__auto___54856;
G__54847_54853.setWithCredentials(true);
} else {
}

var temp__5278__auto___54858 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__5278__auto___54858)){
var x_54859 = temp__5278__auto___54858;
G__54847_54853.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e54836){if((e54836 instanceof Error)){
var e = e54836;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e54836;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54866 = arguments.length;
var i__44090__auto___54867 = (0);
while(true){
if((i__44090__auto___54867 < len__44089__auto___54866)){
args__44096__auto__.push((arguments[i__44090__auto___54867]));

var G__54868 = (i__44090__auto___54867 + (1));
i__44090__auto___54867 = G__54868;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__54862){
var vec__54863 = p__54862;
var encoding = cljs.core.nth.call(null,vec__54863,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq54860){
var G__54861 = cljs.core.first.call(null,seq54860);
var seq54860__$1 = cljs.core.next.call(null,seq54860);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__54861,seq54860__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode.call(null,(function (){var or__41411__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__43357__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__54869(s__54870){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__54870__$1 = s__54870;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__54870__$1);
if(temp__5278__auto__){
var s__54870__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54870__$2)){
var c__43355__auto__ = cljs.core.chunk_first.call(null,s__54870__$2);
var size__43356__auto__ = cljs.core.count.call(null,c__43355__auto__);
var b__54872 = cljs.core.chunk_buffer.call(null,size__43356__auto__);
if((function (){var i__54871 = (0);
while(true){
if((i__54871 < size__43356__auto__)){
var vec__54873 = cljs.core._nth.call(null,c__43355__auto__,i__54871);
var k = cljs.core.nth.call(null,vec__54873,(0),null);
var v = cljs.core.nth.call(null,vec__54873,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__54872,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__41411__auto__ = cljs.core.seq.call(null,v);
if(or__41411__auto__){
return or__41411__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__54879 = (i__54871 + (1));
i__54871 = G__54879;
continue;
} else {
var G__54880 = (i__54871 + (1));
i__54871 = G__54880;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54872),taoensso$encore$format_query_string_$_iter__54869.call(null,cljs.core.chunk_rest.call(null,s__54870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54872),null);
}
} else {
var vec__54876 = cljs.core.first.call(null,s__54870__$2);
var k = cljs.core.nth.call(null,vec__54876,(0),null);
var v = cljs.core.nth.call(null,vec__54876,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__41411__auto__ = cljs.core.seq.call(null,v);
if(or__41411__auto__){
return or__41411__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__54869.call(null,cljs.core.rest.call(null,s__54870__$2)));
} else {
var G__54881 = cljs.core.rest.call(null,s__54870__$2);
s__54870__$1 = G__54881;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__43357__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__5276__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5276__auto__)){
var cur = temp__5276__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54892 = arguments.length;
var i__44090__auto___54893 = (0);
while(true){
if((i__44090__auto___54893 < len__44089__auto___54892)){
args__44096__auto__.push((arguments[i__44090__auto___54893]));

var G__54894 = (i__44090__auto___54893 + (1));
i__44090__auto___54893 = G__54894;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__54884){
var vec__54885 = p__54884;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__54885,(0),null);
var encoding = cljs.core.nth.call(null,vec__54885,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
if(cljs.core.truth_(taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
var m = cljs.core.reduce.call(null,((function (s__$1,vec__54885,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__5276__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__5276__auto__)){
var vec__54888 = temp__5276__auto__;
var k = cljs.core.nth.call(null,vec__54888,(0),null);
var v = cljs.core.nth.call(null,vec__54888,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__54885,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core.truth_((function (){var __x = _PERCENT_;
try{if(cljs.core.map_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e54891){if((e54891 instanceof Error)){
var __t = e54891;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e54891;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq54882){
var G__54883 = cljs.core.first.call(null,seq54882);
var seq54882__$1 = cljs.core.next.call(null,seq54882);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__54883,seq54882__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__54895 = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__54895,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__54895,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__5276__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__5276__auto__)){
var qstr = temp__5276__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stub_ = (function taoensso$encore$_new_stub_(sfn_name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__54898__delegate = function (args){
throw cljs.core.ex_info.call(null,["No stubfn implementation for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sfn_name)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sfn-name","sfn-name",-968697222),sfn_name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__54898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54899__i = 0, G__54899__a = new Array(arguments.length -  0);
while (G__54899__i < G__54899__a.length) {G__54899__a[G__54899__i] = arguments[G__54899__i + 0]; ++G__54899__i;}
  args = new cljs.core.IndexedSeq(G__54899__a,0,null);
} 
return G__54898__delegate.call(this,args);};
G__54898.cljs$lang$maxFixedArity = 0;
G__54898.cljs$lang$applyTo = (function (arglist__54900){
var args = cljs.core.seq(arglist__54900);
return G__54898__delegate(args);
});
G__54898.cljs$core$IFn$_invoke$arity$variadic = G__54898__delegate;
return G__54898;
})()
);
});
taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__54902){
var map__54903 = p__54902;
var map__54903__$1 = ((((!((map__54903 == null)))?((((map__54903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54903):map__54903);
var before = cljs.core.get.call(null,map__54903__$1,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Symbol(null,"do","do",1686842252,null));
var after = cljs.core.get.call(null,map__54903__$1,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Symbol(null,"do","do",1686842252,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__43484__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__54901__auto__","f__54901__auto__",-2086956678,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43484__auto__);
})(),(function (){var x__43484__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__43484__auto__ = before;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43484__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43484__auto__);
})(),(function (){var x__43484__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__54901__auto__","f__54901__auto__",-2086956678,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43484__auto__);
})(),(function (){var x__43484__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__43484__auto__ = after;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43484__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43484__auto__);
})())));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore._swapped;

taoensso.encore.swap_val_BANG_ = taoensso.encore._swap_cache_BANG_;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize1;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54994 = arguments.length;
var i__44090__auto___54995 = (0);
while(true){
if((i__44090__auto___54995 < len__44089__auto___54994)){
args__44096__auto__.push((arguments[i__44090__auto___54995]));

var G__54996 = (i__44090__auto___54995 + (1));
i__44090__auto___54995 = G__54996;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__54911){
var vec__54912 = p__54911;
var type = cljs.core.nth.call(null,vec__54912,(0),null);
var nplaces = cljs.core.nth.call(null,vec__54912,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__41411__auto__ = type;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq54909){
var G__54910 = cljs.core.first.call(null,seq54909);
var seq54909__$1 = cljs.core.next.call(null,seq54909);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__54910,seq54909__$1);
});


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__44096__auto__ = [];
var len__44089__auto___54997 = arguments.length;
var i__44090__auto___54998 = (0);
while(true){
if((i__44090__auto___54998 < len__44089__auto___54997)){
args__44096__auto__.push((arguments[i__44090__auto___54998]));

var G__54999 = (i__44090__auto___54998 + (1));
i__44090__auto___54998 = G__54999;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq54915){
var G__54916 = cljs.core.first.call(null,seq54915);
var seq54915__$1 = cljs.core.next.call(null,seq54915);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__54916,seq54915__$1);
});


taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__55000__delegate = function (args){
var temp__5276__auto__ = rl.call(null);
if(cljs.core.truth_(temp__5276__auto__)){
var backoff_ms = temp__5276__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__55000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55001__i = 0, G__55001__a = new Array(arguments.length -  0);
while (G__55001__i < G__55001__a.length) {G__55001__a[G__55001__i] = arguments[G__55001__i + 0]; ++G__55001__i;}
  args = new cljs.core.IndexedSeq(G__55001__a,0,null);
} 
return G__55000__delegate.call(this,args);};
G__55000.cljs$lang$maxFixedArity = 0;
G__55000.cljs$lang$applyTo = (function (arglist__55002){
var args = cljs.core.seq(arglist__55002);
return G__55000__delegate(args);
});
G__55000.cljs$core$IFn$_invoke$arity$variadic = G__55000__delegate;
return G__55000;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55003 = arguments.length;
var i__44090__auto___55004 = (0);
while(true){
if((i__44090__auto___55004 < len__44089__auto___55003)){
args__44096__auto__.push((arguments[i__44090__auto___55004]));

var G__55005 = (i__44090__auto___55004 + (1));
i__44090__auto___55004 = G__55005;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__54919){
var vec__54920 = p__54919;
var nattempt = cljs.core.nth.call(null,vec__54920,(0),null);
var temp__5278__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(temp__5278__auto__)){
var js_win = temp__5278__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__41411__auto__ = nattempt;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq54917){
var G__54918 = cljs.core.first.call(null,seq54917);
var seq54917__$1 = cljs.core.next.call(null,seq54917);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54918,seq54917__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55006 = arguments.length;
var i__44090__auto___55007 = (0);
while(true){
if((i__44090__auto___55007 < len__44089__auto___55006)){
args__44096__auto__.push((arguments[i__44090__auto___55007]));

var G__55008 = (i__44090__auto___55007 + (1));
i__44090__auto___55007 = G__55008;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq54923){
var G__54924 = cljs.core.first.call(null,seq54923);
var seq54923__$1 = cljs.core.next.call(null,seq54923);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__54924,seq54923__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55009 = arguments.length;
var i__44090__auto___55010 = (0);
while(true){
if((i__44090__auto___55010 < len__44089__auto___55009)){
args__44096__auto__.push((arguments[i__44090__auto___55010]));

var G__55011 = (i__44090__auto___55010 + (1));
i__44090__auto___55010 = G__55011;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq54925){
var G__54926 = cljs.core.first.call(null,seq54925);
var seq54925__$1 = cljs.core.next.call(null,seq54925);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__54926,seq54925__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55012 = arguments.length;
var i__44090__auto___55013 = (0);
while(true){
if((i__44090__auto___55013 < len__44089__auto___55012)){
args__44096__auto__.push((arguments[i__44090__auto___55013]));

var G__55014 = (i__44090__auto___55013 + (1));
i__44090__auto___55013 = G__55014;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq54927){
var G__54928 = cljs.core.first.call(null,seq54927);
var seq54927__$1 = cljs.core.next.call(null,seq54927);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__54928,seq54927__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55015 = arguments.length;
var i__44090__auto___55016 = (0);
while(true){
if((i__44090__auto___55016 < len__44089__auto___55015)){
args__44096__auto__.push((arguments[i__44090__auto___55016]));

var G__55017 = (i__44090__auto___55016 + (1));
i__44090__auto___55016 = G__55017;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq54929){
var G__54930 = cljs.core.first.call(null,seq54929);
var seq54929__$1 = cljs.core.next.call(null,seq54929);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__54930,seq54929__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55018 = arguments.length;
var i__44090__auto___55019 = (0);
while(true){
if((i__44090__auto___55019 < len__44089__auto___55018)){
args__44096__auto__.push((arguments[i__44090__auto___55019]));

var G__55020 = (i__44090__auto___55019 + (1));
i__44090__auto___55019 = G__55020;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq54931){
var G__54932 = cljs.core.first.call(null,seq54931);
var seq54931__$1 = cljs.core.next.call(null,seq54931);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__54932,seq54931__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55021 = arguments.length;
var i__44090__auto___55022 = (0);
while(true){
if((i__44090__auto___55022 < len__44089__auto___55021)){
args__44096__auto__.push((arguments[i__44090__auto___55022]));

var G__55023 = (i__44090__auto___55022 + (1));
i__44090__auto___55022 = G__55023;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq54933){
var G__54934 = cljs.core.first.call(null,seq54933);
var seq54933__$1 = cljs.core.next.call(null,seq54933);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__54934,seq54933__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55024 = arguments.length;
var i__44090__auto___55025 = (0);
while(true){
if((i__44090__auto___55025 < len__44089__auto___55024)){
args__44096__auto__.push((arguments[i__44090__auto___55025]));

var G__55026 = (i__44090__auto___55025 + (1));
i__44090__auto___55025 = G__55026;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq54935){
var G__54936 = cljs.core.first.call(null,seq54935);
var seq54935__$1 = cljs.core.next.call(null,seq54935);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__54936,seq54935__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55027 = arguments.length;
var i__44090__auto___55028 = (0);
while(true){
if((i__44090__auto___55028 < len__44089__auto___55027)){
args__44096__auto__.push((arguments[i__44090__auto___55028]));

var G__55029 = (i__44090__auto___55028 + (1));
i__44090__auto___55028 = G__55029;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__54939){
var vec__54940 = p__54939;
var _QMARK_comparator = cljs.core.nth.call(null,vec__54940,(0),null);
var comparator = (function (){var or__41411__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__54940,_QMARK_comparator){
return (function (p1__54905_SHARP_,p2__54906_SHARP_){
if((comparator.call(null,p1__54905_SHARP_,p2__54906_SHARP_) > (0))){
return p2__54906_SHARP_;
} else {
return p1__54905_SHARP_;
}
});})(comparator,vec__54940,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq54937){
var G__54938 = cljs.core.first.call(null,seq54937);
var seq54937__$1 = cljs.core.next.call(null,seq54937);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__54938,seq54937__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55030 = arguments.length;
var i__44090__auto___55031 = (0);
while(true){
if((i__44090__auto___55031 < len__44089__auto___55030)){
args__44096__auto__.push((arguments[i__44090__auto___55031]));

var G__55032 = (i__44090__auto___55031 + (1));
i__44090__auto___55031 = G__55032;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__54945){
var vec__54946 = p__54945;
var _QMARK_comparator = cljs.core.nth.call(null,vec__54946,(0),null);
var comparator = (function (){var or__41411__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__54946,_QMARK_comparator){
return (function (p1__54907_SHARP_,p2__54908_SHARP_){
if((comparator.call(null,p1__54907_SHARP_,p2__54908_SHARP_) < (0))){
return p2__54908_SHARP_;
} else {
return p1__54907_SHARP_;
}
});})(comparator,vec__54946,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq54943){
var G__54944 = cljs.core.first.call(null,seq54943);
var seq54943__$1 = cljs.core.next.call(null,seq54943);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__54944,seq54943__$1);
});



/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__41411__auto__ = x;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__54949,seen__$1){
while(true){
var vec__54950 = p__54949;
var v = cljs.core.nth.call(null,vec__54950,(0),null);
var xs__$1 = vec__54950;
var temp__5278__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5278__auto__){
var s = temp__5278__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__55033 = cljs.core.rest.call(null,s);
var G__55034 = seen__$1;
p__54949 = G__55033;
seen__$1 = G__55034;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__54954 = arguments.length;
switch (G__54954) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__54955,in$){
var vec__54956 = p__54955;
var v = cljs.core.nth.call(null,vec__54956,(0),null);
var seen = cljs.core.nth.call(null,vec__54956,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:((taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55036 = arguments.length;
var i__44090__auto___55037 = (0);
while(true){
if((i__44090__auto___55037 < len__44089__auto___55036)){
args__44096__auto__.push((arguments[i__44090__auto___55037]));

var G__55038 = (i__44090__auto___55037 + (1));
i__44090__auto___55037 = G__55038;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__54961){
var vec__54962 = p__54961;
var kf = cljs.core.nth.call(null,vec__54962,(0),null);
var vf = cljs.core.nth.call(null,vec__54962,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__54962,kf,vf){
return (function (_,v){
return v;
});})(vec__54962,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__54962,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__54962,kf,vf))
:((taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__54962,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__54962,kf,vf))
:kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__54962,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__54962,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq54959){
var G__54960 = cljs.core.first.call(null,seq54959);
var seq54959__$1 = cljs.core.next.call(null,seq54959);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__54960,seq54959__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55039 = arguments.length;
var i__44090__auto___55040 = (0);
while(true){
if((i__44090__auto___55040 < len__44089__auto___55039)){
args__44096__auto__.push((arguments[i__44090__auto___55040]));

var G__55041 = (i__44090__auto___55040 + (1));
i__44090__auto___55040 = G__55041;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((2) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44097__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_cache_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq54965){
var G__54966 = cljs.core.first.call(null,seq54965);
var seq54965__$1 = cljs.core.next.call(null,seq54965);
var G__54967 = cljs.core.first.call(null,seq54965__$1);
var seq54965__$2 = cljs.core.next.call(null,seq54965__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__54966,G__54967,seq54965__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__42204__auto__ = signed_idx;
var y__42205__auto__ = max_idx;
return ((x__42204__auto__ < y__42205__auto__) ? x__42204__auto__ : y__42205__auto__);
} else {
var x__42186__auto__ = (0);
var y__42187__auto__ = (signed_idx + max_idx);
return ((x__42186__auto__ > y__42187__auto__) ? x__42186__auto__ : y__42187__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55042 = arguments.length;
var i__44090__auto___55043 = (0);
while(true){
if((i__44090__auto___55043 < len__44089__auto___55042)){
args__44096__auto__.push((arguments[i__44090__auto___55043]));

var G__55044 = (i__44090__auto___55043 + (1));
i__44090__auto___55043 = G__55044;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((2) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44097__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__54971){
var map__54972 = p__54971;
var map__54972__$1 = ((((!((map__54972 == null)))?((((map__54972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54972):map__54972);
var max_len = cljs.core.get.call(null,map__54972__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__54972__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__53426__auto__ = (start_idx_STAR_ + max_len);
var n2__53427__auto__ = xlen;
if((n1__53426__auto__ > n2__53427__auto__)){
return n2__53427__auto__;
} else {
return n1__53426__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq54968){
var G__54969 = cljs.core.first.call(null,seq54968);
var seq54968__$1 = cljs.core.next.call(null,seq54968);
var G__54970 = cljs.core.first.call(null,seq54968__$1);
var seq54968__$2 = cljs.core.next.call(null,seq54968__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__54969,G__54970,seq54968__$2);
});


/**
 * Deprecated, prefer `?substr<idx` or `?substr<len`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55045 = arguments.length;
var i__44090__auto___55046 = (0);
while(true){
if((i__44090__auto___55046 < len__44089__auto___55045)){
args__44096__auto__.push((arguments[i__44090__auto___55046]));

var G__55047 = (i__44090__auto___55046 + (1));
i__44090__auto___55046 = G__55047;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((2) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44097__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__54977){
var vec__54978 = p__54977;
var _QMARK_max_len = cljs.core.nth.call(null,vec__54978,(0),null);
var vec__54981 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__54981,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__54981,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq54974){
var G__54975 = cljs.core.first.call(null,seq54974);
var seq54974__$1 = cljs.core.next.call(null,seq54974);
var G__54976 = cljs.core.first.call(null,seq54974__$1);
var seq54974__$2 = cljs.core.next.call(null,seq54974__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__54975,G__54976,seq54974__$2);
});



/**
 * Deprecated, prefer `?subvec<idx` or `?subvec<len`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___55048 = arguments.length;
var i__44090__auto___55049 = (0);
while(true){
if((i__44090__auto___55049 < len__44089__auto___55048)){
args__44096__auto__.push((arguments[i__44090__auto___55049]));

var G__55050 = (i__44090__auto___55049 + (1));
i__44090__auto___55049 = G__55050;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((2) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44097__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__54987){
var vec__54988 = p__54987;
var _QMARK_max_len = cljs.core.nth.call(null,vec__54988,(0),null);
var vec__54991 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__54991,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__54991,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq54984){
var G__54985 = cljs.core.first.call(null,seq54984);
var seq54984__$1 = cljs.core.next.call(null,seq54984);
var G__54986 = cljs.core.first.call(null,seq54984__$1);
var seq54984__$2 = cljs.core.next.call(null,seq54984__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__54985,G__54986,seq54984__$2);
});



//# sourceMappingURL=encore.js.map?rel=1512631536729
