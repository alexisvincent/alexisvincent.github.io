// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__42547__auto__,writer__42548__auto__,opt__42549__auto__){
return cljs.core._write.call(null,writer__42548__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45556 = arguments.length;
var i__43648__auto___45557 = (0);
while(true){
if((i__43648__auto___45557 < len__43647__auto___45556)){
args__43654__auto__.push((arguments[i__43648__auto___45557]));

var G__45558 = (i__43648__auto___45557 + (1));
i__43648__auto___45557 = G__45558;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq45555){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45555));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45560 = arguments.length;
var i__43648__auto___45561 = (0);
while(true){
if((i__43648__auto___45561 < len__43647__auto___45560)){
args__43654__auto__.push((arguments[i__43648__auto___45561]));

var G__45562 = (i__43648__auto___45561 + (1));
i__43648__auto___45561 = G__45562;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq45559){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45559));
});

var g_QMARK__45563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_45564 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__45563){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__45563))
,null));
var mkg_45565 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__45563,g_45564){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__45563,g_45564))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__45563,g_45564,mkg_45565){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__45563).call(null,x);
});})(g_QMARK__45563,g_45564,mkg_45565))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__45563,g_45564,mkg_45565){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_45565).call(null,gfn);
});})(g_QMARK__45563,g_45564,mkg_45565))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__45563,g_45564,mkg_45565){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_45564).call(null,generator);
});})(g_QMARK__45563,g_45564,mkg_45565))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__43750__auto___45585 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__43750__auto___45585){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45586 = arguments.length;
var i__43648__auto___45587 = (0);
while(true){
if((i__43648__auto___45587 < len__43647__auto___45586)){
args__43654__auto__.push((arguments[i__43648__auto___45587]));

var G__45588 = (i__43648__auto___45587 + (1));
i__43648__auto___45587 = G__45588;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45585))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45585),args);
});})(g__43750__auto___45585))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__43750__auto___45585){
return (function (seq45566){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45566));
});})(g__43750__auto___45585))
;


var g__43750__auto___45589 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__43750__auto___45589){
return (function cljs$spec$gen$alpha$list(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45590 = arguments.length;
var i__43648__auto___45591 = (0);
while(true){
if((i__43648__auto___45591 < len__43647__auto___45590)){
args__43654__auto__.push((arguments[i__43648__auto___45591]));

var G__45592 = (i__43648__auto___45591 + (1));
i__43648__auto___45591 = G__45592;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45589))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45589),args);
});})(g__43750__auto___45589))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__43750__auto___45589){
return (function (seq45567){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45567));
});})(g__43750__auto___45589))
;


var g__43750__auto___45593 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__43750__auto___45593){
return (function cljs$spec$gen$alpha$map(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45594 = arguments.length;
var i__43648__auto___45595 = (0);
while(true){
if((i__43648__auto___45595 < len__43647__auto___45594)){
args__43654__auto__.push((arguments[i__43648__auto___45595]));

var G__45596 = (i__43648__auto___45595 + (1));
i__43648__auto___45595 = G__45596;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45593))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45593),args);
});})(g__43750__auto___45593))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__43750__auto___45593){
return (function (seq45568){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45568));
});})(g__43750__auto___45593))
;


var g__43750__auto___45597 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__43750__auto___45597){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45598 = arguments.length;
var i__43648__auto___45599 = (0);
while(true){
if((i__43648__auto___45599 < len__43647__auto___45598)){
args__43654__auto__.push((arguments[i__43648__auto___45599]));

var G__45600 = (i__43648__auto___45599 + (1));
i__43648__auto___45599 = G__45600;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45597))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45597),args);
});})(g__43750__auto___45597))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__43750__auto___45597){
return (function (seq45569){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45569));
});})(g__43750__auto___45597))
;


var g__43750__auto___45601 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__43750__auto___45601){
return (function cljs$spec$gen$alpha$set(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45602 = arguments.length;
var i__43648__auto___45603 = (0);
while(true){
if((i__43648__auto___45603 < len__43647__auto___45602)){
args__43654__auto__.push((arguments[i__43648__auto___45603]));

var G__45604 = (i__43648__auto___45603 + (1));
i__43648__auto___45603 = G__45604;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45601))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45601),args);
});})(g__43750__auto___45601))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__43750__auto___45601){
return (function (seq45570){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45570));
});})(g__43750__auto___45601))
;


var g__43750__auto___45605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__43750__auto___45605){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45606 = arguments.length;
var i__43648__auto___45607 = (0);
while(true){
if((i__43648__auto___45607 < len__43647__auto___45606)){
args__43654__auto__.push((arguments[i__43648__auto___45607]));

var G__45608 = (i__43648__auto___45607 + (1));
i__43648__auto___45607 = G__45608;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45605))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45605),args);
});})(g__43750__auto___45605))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__43750__auto___45605){
return (function (seq45571){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45571));
});})(g__43750__auto___45605))
;


var g__43750__auto___45609 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__43750__auto___45609){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45610 = arguments.length;
var i__43648__auto___45611 = (0);
while(true){
if((i__43648__auto___45611 < len__43647__auto___45610)){
args__43654__auto__.push((arguments[i__43648__auto___45611]));

var G__45612 = (i__43648__auto___45611 + (1));
i__43648__auto___45611 = G__45612;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45609))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45609),args);
});})(g__43750__auto___45609))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__43750__auto___45609){
return (function (seq45572){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45572));
});})(g__43750__auto___45609))
;


var g__43750__auto___45613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__43750__auto___45613){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45614 = arguments.length;
var i__43648__auto___45615 = (0);
while(true){
if((i__43648__auto___45615 < len__43647__auto___45614)){
args__43654__auto__.push((arguments[i__43648__auto___45615]));

var G__45616 = (i__43648__auto___45615 + (1));
i__43648__auto___45615 = G__45616;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45613))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45613),args);
});})(g__43750__auto___45613))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__43750__auto___45613){
return (function (seq45573){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45573));
});})(g__43750__auto___45613))
;


var g__43750__auto___45617 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__43750__auto___45617){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45618 = arguments.length;
var i__43648__auto___45619 = (0);
while(true){
if((i__43648__auto___45619 < len__43647__auto___45618)){
args__43654__auto__.push((arguments[i__43648__auto___45619]));

var G__45620 = (i__43648__auto___45619 + (1));
i__43648__auto___45619 = G__45620;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45617))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45617),args);
});})(g__43750__auto___45617))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__43750__auto___45617){
return (function (seq45574){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45574));
});})(g__43750__auto___45617))
;


var g__43750__auto___45621 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__43750__auto___45621){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45622 = arguments.length;
var i__43648__auto___45623 = (0);
while(true){
if((i__43648__auto___45623 < len__43647__auto___45622)){
args__43654__auto__.push((arguments[i__43648__auto___45623]));

var G__45624 = (i__43648__auto___45623 + (1));
i__43648__auto___45623 = G__45624;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45621))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45621),args);
});})(g__43750__auto___45621))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__43750__auto___45621){
return (function (seq45575){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45575));
});})(g__43750__auto___45621))
;


var g__43750__auto___45625 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__43750__auto___45625){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45626 = arguments.length;
var i__43648__auto___45627 = (0);
while(true){
if((i__43648__auto___45627 < len__43647__auto___45626)){
args__43654__auto__.push((arguments[i__43648__auto___45627]));

var G__45628 = (i__43648__auto___45627 + (1));
i__43648__auto___45627 = G__45628;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45625))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45625),args);
});})(g__43750__auto___45625))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__43750__auto___45625){
return (function (seq45576){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45576));
});})(g__43750__auto___45625))
;


var g__43750__auto___45629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__43750__auto___45629){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45630 = arguments.length;
var i__43648__auto___45631 = (0);
while(true){
if((i__43648__auto___45631 < len__43647__auto___45630)){
args__43654__auto__.push((arguments[i__43648__auto___45631]));

var G__45632 = (i__43648__auto___45631 + (1));
i__43648__auto___45631 = G__45632;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45629))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45629),args);
});})(g__43750__auto___45629))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__43750__auto___45629){
return (function (seq45577){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45577));
});})(g__43750__auto___45629))
;


var g__43750__auto___45633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__43750__auto___45633){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45634 = arguments.length;
var i__43648__auto___45635 = (0);
while(true){
if((i__43648__auto___45635 < len__43647__auto___45634)){
args__43654__auto__.push((arguments[i__43648__auto___45635]));

var G__45636 = (i__43648__auto___45635 + (1));
i__43648__auto___45635 = G__45636;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45633))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45633),args);
});})(g__43750__auto___45633))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__43750__auto___45633){
return (function (seq45578){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45578));
});})(g__43750__auto___45633))
;


var g__43750__auto___45637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__43750__auto___45637){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45638 = arguments.length;
var i__43648__auto___45639 = (0);
while(true){
if((i__43648__auto___45639 < len__43647__auto___45638)){
args__43654__auto__.push((arguments[i__43648__auto___45639]));

var G__45640 = (i__43648__auto___45639 + (1));
i__43648__auto___45639 = G__45640;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45637))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45637),args);
});})(g__43750__auto___45637))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__43750__auto___45637){
return (function (seq45579){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45579));
});})(g__43750__auto___45637))
;


var g__43750__auto___45641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__43750__auto___45641){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45642 = arguments.length;
var i__43648__auto___45643 = (0);
while(true){
if((i__43648__auto___45643 < len__43647__auto___45642)){
args__43654__auto__.push((arguments[i__43648__auto___45643]));

var G__45644 = (i__43648__auto___45643 + (1));
i__43648__auto___45643 = G__45644;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45641))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45641),args);
});})(g__43750__auto___45641))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__43750__auto___45641){
return (function (seq45580){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45580));
});})(g__43750__auto___45641))
;


var g__43750__auto___45645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__43750__auto___45645){
return (function cljs$spec$gen$alpha$return(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45646 = arguments.length;
var i__43648__auto___45647 = (0);
while(true){
if((i__43648__auto___45647 < len__43647__auto___45646)){
args__43654__auto__.push((arguments[i__43648__auto___45647]));

var G__45648 = (i__43648__auto___45647 + (1));
i__43648__auto___45647 = G__45648;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45645))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45645),args);
});})(g__43750__auto___45645))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__43750__auto___45645){
return (function (seq45581){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45581));
});})(g__43750__auto___45645))
;


var g__43750__auto___45649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__43750__auto___45649){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45650 = arguments.length;
var i__43648__auto___45651 = (0);
while(true){
if((i__43648__auto___45651 < len__43647__auto___45650)){
args__43654__auto__.push((arguments[i__43648__auto___45651]));

var G__45652 = (i__43648__auto___45651 + (1));
i__43648__auto___45651 = G__45652;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45649))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45649),args);
});})(g__43750__auto___45649))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__43750__auto___45649){
return (function (seq45582){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45582));
});})(g__43750__auto___45649))
;


var g__43750__auto___45653 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__43750__auto___45653){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45654 = arguments.length;
var i__43648__auto___45655 = (0);
while(true){
if((i__43648__auto___45655 < len__43647__auto___45654)){
args__43654__auto__.push((arguments[i__43648__auto___45655]));

var G__45656 = (i__43648__auto___45655 + (1));
i__43648__auto___45655 = G__45656;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45653))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45653),args);
});})(g__43750__auto___45653))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__43750__auto___45653){
return (function (seq45583){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45583));
});})(g__43750__auto___45653))
;


var g__43750__auto___45657 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__43750__auto___45657){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45658 = arguments.length;
var i__43648__auto___45659 = (0);
while(true){
if((i__43648__auto___45659 < len__43647__auto___45658)){
args__43654__auto__.push((arguments[i__43648__auto___45659]));

var G__45660 = (i__43648__auto___45659 + (1));
i__43648__auto___45659 = G__45660;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43750__auto___45657))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43750__auto___45657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__43750__auto___45657),args);
});})(g__43750__auto___45657))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__43750__auto___45657){
return (function (seq45584){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45584));
});})(g__43750__auto___45657))
;

var g__43763__auto___45682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__43763__auto___45682){
return (function cljs$spec$gen$alpha$any(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45683 = arguments.length;
var i__43648__auto___45684 = (0);
while(true){
if((i__43648__auto___45684 < len__43647__auto___45683)){
args__43654__auto__.push((arguments[i__43648__auto___45684]));

var G__45685 = (i__43648__auto___45684 + (1));
i__43648__auto___45684 = G__45685;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45682))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45682){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45682);
});})(g__43763__auto___45682))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__43763__auto___45682){
return (function (seq45661){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45661));
});})(g__43763__auto___45682))
;


var g__43763__auto___45686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__43763__auto___45686){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45687 = arguments.length;
var i__43648__auto___45688 = (0);
while(true){
if((i__43648__auto___45688 < len__43647__auto___45687)){
args__43654__auto__.push((arguments[i__43648__auto___45688]));

var G__45689 = (i__43648__auto___45688 + (1));
i__43648__auto___45688 = G__45689;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45686))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45686){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45686);
});})(g__43763__auto___45686))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__43763__auto___45686){
return (function (seq45662){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45662));
});})(g__43763__auto___45686))
;


var g__43763__auto___45690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__43763__auto___45690){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45691 = arguments.length;
var i__43648__auto___45692 = (0);
while(true){
if((i__43648__auto___45692 < len__43647__auto___45691)){
args__43654__auto__.push((arguments[i__43648__auto___45692]));

var G__45693 = (i__43648__auto___45692 + (1));
i__43648__auto___45692 = G__45693;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45690))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45690){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45690);
});})(g__43763__auto___45690))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__43763__auto___45690){
return (function (seq45663){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45663));
});})(g__43763__auto___45690))
;


var g__43763__auto___45694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__43763__auto___45694){
return (function cljs$spec$gen$alpha$char(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45695 = arguments.length;
var i__43648__auto___45696 = (0);
while(true){
if((i__43648__auto___45696 < len__43647__auto___45695)){
args__43654__auto__.push((arguments[i__43648__auto___45696]));

var G__45697 = (i__43648__auto___45696 + (1));
i__43648__auto___45696 = G__45697;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45694))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45694){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45694);
});})(g__43763__auto___45694))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__43763__auto___45694){
return (function (seq45664){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45664));
});})(g__43763__auto___45694))
;


var g__43763__auto___45698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__43763__auto___45698){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45699 = arguments.length;
var i__43648__auto___45700 = (0);
while(true){
if((i__43648__auto___45700 < len__43647__auto___45699)){
args__43654__auto__.push((arguments[i__43648__auto___45700]));

var G__45701 = (i__43648__auto___45700 + (1));
i__43648__auto___45700 = G__45701;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45698))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45698){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45698);
});})(g__43763__auto___45698))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__43763__auto___45698){
return (function (seq45665){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45665));
});})(g__43763__auto___45698))
;


var g__43763__auto___45702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__43763__auto___45702){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45703 = arguments.length;
var i__43648__auto___45704 = (0);
while(true){
if((i__43648__auto___45704 < len__43647__auto___45703)){
args__43654__auto__.push((arguments[i__43648__auto___45704]));

var G__45705 = (i__43648__auto___45704 + (1));
i__43648__auto___45704 = G__45705;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45702))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45702){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45702);
});})(g__43763__auto___45702))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__43763__auto___45702){
return (function (seq45666){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45666));
});})(g__43763__auto___45702))
;


var g__43763__auto___45706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__43763__auto___45706){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45707 = arguments.length;
var i__43648__auto___45708 = (0);
while(true){
if((i__43648__auto___45708 < len__43647__auto___45707)){
args__43654__auto__.push((arguments[i__43648__auto___45708]));

var G__45709 = (i__43648__auto___45708 + (1));
i__43648__auto___45708 = G__45709;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45706))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45706){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45706);
});})(g__43763__auto___45706))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__43763__auto___45706){
return (function (seq45667){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45667));
});})(g__43763__auto___45706))
;


var g__43763__auto___45710 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__43763__auto___45710){
return (function cljs$spec$gen$alpha$double(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45711 = arguments.length;
var i__43648__auto___45712 = (0);
while(true){
if((i__43648__auto___45712 < len__43647__auto___45711)){
args__43654__auto__.push((arguments[i__43648__auto___45712]));

var G__45713 = (i__43648__auto___45712 + (1));
i__43648__auto___45712 = G__45713;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45710))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45710){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45710);
});})(g__43763__auto___45710))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__43763__auto___45710){
return (function (seq45668){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45668));
});})(g__43763__auto___45710))
;


var g__43763__auto___45714 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__43763__auto___45714){
return (function cljs$spec$gen$alpha$int(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45715 = arguments.length;
var i__43648__auto___45716 = (0);
while(true){
if((i__43648__auto___45716 < len__43647__auto___45715)){
args__43654__auto__.push((arguments[i__43648__auto___45716]));

var G__45717 = (i__43648__auto___45716 + (1));
i__43648__auto___45716 = G__45717;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45714))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45714){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45714);
});})(g__43763__auto___45714))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__43763__auto___45714){
return (function (seq45669){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45669));
});})(g__43763__auto___45714))
;


var g__43763__auto___45718 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__43763__auto___45718){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45719 = arguments.length;
var i__43648__auto___45720 = (0);
while(true){
if((i__43648__auto___45720 < len__43647__auto___45719)){
args__43654__auto__.push((arguments[i__43648__auto___45720]));

var G__45721 = (i__43648__auto___45720 + (1));
i__43648__auto___45720 = G__45721;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45718))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45718){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45718);
});})(g__43763__auto___45718))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__43763__auto___45718){
return (function (seq45670){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45670));
});})(g__43763__auto___45718))
;


var g__43763__auto___45722 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__43763__auto___45722){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45723 = arguments.length;
var i__43648__auto___45724 = (0);
while(true){
if((i__43648__auto___45724 < len__43647__auto___45723)){
args__43654__auto__.push((arguments[i__43648__auto___45724]));

var G__45725 = (i__43648__auto___45724 + (1));
i__43648__auto___45724 = G__45725;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45722))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45722){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45722);
});})(g__43763__auto___45722))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__43763__auto___45722){
return (function (seq45671){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45671));
});})(g__43763__auto___45722))
;


var g__43763__auto___45726 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__43763__auto___45726){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45727 = arguments.length;
var i__43648__auto___45728 = (0);
while(true){
if((i__43648__auto___45728 < len__43647__auto___45727)){
args__43654__auto__.push((arguments[i__43648__auto___45728]));

var G__45729 = (i__43648__auto___45728 + (1));
i__43648__auto___45728 = G__45729;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45726))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45726){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45726);
});})(g__43763__auto___45726))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__43763__auto___45726){
return (function (seq45672){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45672));
});})(g__43763__auto___45726))
;


var g__43763__auto___45730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__43763__auto___45730){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45731 = arguments.length;
var i__43648__auto___45732 = (0);
while(true){
if((i__43648__auto___45732 < len__43647__auto___45731)){
args__43654__auto__.push((arguments[i__43648__auto___45732]));

var G__45733 = (i__43648__auto___45732 + (1));
i__43648__auto___45732 = G__45733;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45730))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45730){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45730);
});})(g__43763__auto___45730))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__43763__auto___45730){
return (function (seq45673){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45673));
});})(g__43763__auto___45730))
;


var g__43763__auto___45734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__43763__auto___45734){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45735 = arguments.length;
var i__43648__auto___45736 = (0);
while(true){
if((i__43648__auto___45736 < len__43647__auto___45735)){
args__43654__auto__.push((arguments[i__43648__auto___45736]));

var G__45737 = (i__43648__auto___45736 + (1));
i__43648__auto___45736 = G__45737;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45734))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45734){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45734);
});})(g__43763__auto___45734))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__43763__auto___45734){
return (function (seq45674){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45674));
});})(g__43763__auto___45734))
;


var g__43763__auto___45738 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__43763__auto___45738){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45739 = arguments.length;
var i__43648__auto___45740 = (0);
while(true){
if((i__43648__auto___45740 < len__43647__auto___45739)){
args__43654__auto__.push((arguments[i__43648__auto___45740]));

var G__45741 = (i__43648__auto___45740 + (1));
i__43648__auto___45740 = G__45741;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45738))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45738){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45738);
});})(g__43763__auto___45738))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__43763__auto___45738){
return (function (seq45675){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45675));
});})(g__43763__auto___45738))
;


var g__43763__auto___45742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__43763__auto___45742){
return (function cljs$spec$gen$alpha$string(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45743 = arguments.length;
var i__43648__auto___45744 = (0);
while(true){
if((i__43648__auto___45744 < len__43647__auto___45743)){
args__43654__auto__.push((arguments[i__43648__auto___45744]));

var G__45745 = (i__43648__auto___45744 + (1));
i__43648__auto___45744 = G__45745;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45742))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45742){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45742);
});})(g__43763__auto___45742))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__43763__auto___45742){
return (function (seq45676){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45676));
});})(g__43763__auto___45742))
;


var g__43763__auto___45746 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__43763__auto___45746){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45747 = arguments.length;
var i__43648__auto___45748 = (0);
while(true){
if((i__43648__auto___45748 < len__43647__auto___45747)){
args__43654__auto__.push((arguments[i__43648__auto___45748]));

var G__45749 = (i__43648__auto___45748 + (1));
i__43648__auto___45748 = G__45749;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45746))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45746){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45746);
});})(g__43763__auto___45746))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__43763__auto___45746){
return (function (seq45677){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45677));
});})(g__43763__auto___45746))
;


var g__43763__auto___45750 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__43763__auto___45750){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45751 = arguments.length;
var i__43648__auto___45752 = (0);
while(true){
if((i__43648__auto___45752 < len__43647__auto___45751)){
args__43654__auto__.push((arguments[i__43648__auto___45752]));

var G__45753 = (i__43648__auto___45752 + (1));
i__43648__auto___45752 = G__45753;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45750))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45750){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45750);
});})(g__43763__auto___45750))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__43763__auto___45750){
return (function (seq45678){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45678));
});})(g__43763__auto___45750))
;


var g__43763__auto___45754 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__43763__auto___45754){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45755 = arguments.length;
var i__43648__auto___45756 = (0);
while(true){
if((i__43648__auto___45756 < len__43647__auto___45755)){
args__43654__auto__.push((arguments[i__43648__auto___45756]));

var G__45757 = (i__43648__auto___45756 + (1));
i__43648__auto___45756 = G__45757;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45754))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45754){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45754);
});})(g__43763__auto___45754))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__43763__auto___45754){
return (function (seq45679){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45679));
});})(g__43763__auto___45754))
;


var g__43763__auto___45758 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__43763__auto___45758){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45759 = arguments.length;
var i__43648__auto___45760 = (0);
while(true){
if((i__43648__auto___45760 < len__43647__auto___45759)){
args__43654__auto__.push((arguments[i__43648__auto___45760]));

var G__45761 = (i__43648__auto___45760 + (1));
i__43648__auto___45760 = G__45761;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45758))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45758){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45758);
});})(g__43763__auto___45758))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__43763__auto___45758){
return (function (seq45680){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45680));
});})(g__43763__auto___45758))
;


var g__43763__auto___45762 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__43763__auto___45762){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45763 = arguments.length;
var i__43648__auto___45764 = (0);
while(true){
if((i__43648__auto___45764 < len__43647__auto___45763)){
args__43654__auto__.push((arguments[i__43648__auto___45764]));

var G__45765 = (i__43648__auto___45764 + (1));
i__43648__auto___45764 = G__45765;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});})(g__43763__auto___45762))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__43763__auto___45762){
return (function (args){
return cljs.core.deref.call(null,g__43763__auto___45762);
});})(g__43763__auto___45762))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__43763__auto___45762){
return (function (seq45681){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45681));
});})(g__43763__auto___45762))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__43654__auto__ = [];
var len__43647__auto___45768 = arguments.length;
var i__43648__auto___45769 = (0);
while(true){
if((i__43648__auto___45769 < len__43647__auto___45768)){
args__43654__auto__.push((arguments[i__43648__auto___45769]));

var G__45770 = (i__43648__auto___45769 + (1));
i__43648__auto___45769 = G__45770;
continue;
} else {
}
break;
}

var argseq__43655__auto__ = ((((0) < args__43654__auto__.length))?(new cljs.core.IndexedSeq(args__43654__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__43655__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__45766_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__45766_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq45767){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45767));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__45771_SHARP_){
return (new Date(p1__45771_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
