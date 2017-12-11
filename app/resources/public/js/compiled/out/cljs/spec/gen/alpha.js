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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__44034__auto__ = [];
var len__44016__auto___49099 = arguments.length;
var i__44017__auto___49100 = (0);
while(true){
if((i__44017__auto___49100 < len__44016__auto___49099)){
args__44034__auto__.push((arguments[i__44017__auto___49100]));

var G__49101 = (i__44017__auto___49100 + (1));
i__44017__auto___49100 = G__49101;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq49098){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49098));
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
var args__44034__auto__ = [];
var len__44016__auto___49103 = arguments.length;
var i__44017__auto___49104 = (0);
while(true){
if((i__44017__auto___49104 < len__44016__auto___49103)){
args__44034__auto__.push((arguments[i__44017__auto___49104]));

var G__49105 = (i__44017__auto___49104 + (1));
i__44017__auto___49104 = G__49105;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq49102){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49102));
});

var g_QMARK__49106 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_49107 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49106){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__49106))
,null));
var mkg_49108 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49106,g_49107){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__49106,g_49107))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__49106,g_49107,mkg_49108){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49106).call(null,x);
});})(g_QMARK__49106,g_49107,mkg_49108))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__49106,g_49107,mkg_49108){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_49108).call(null,gfn);
});})(g_QMARK__49106,g_49107,mkg_49108))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__49106,g_49107,mkg_49108){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_49107).call(null,generator);
});})(g_QMARK__49106,g_49107,mkg_49108))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__44577__auto___49128 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__44577__auto___49128){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49129 = arguments.length;
var i__44017__auto___49130 = (0);
while(true){
if((i__44017__auto___49130 < len__44016__auto___49129)){
args__44034__auto__.push((arguments[i__44017__auto___49130]));

var G__49131 = (i__44017__auto___49130 + (1));
i__44017__auto___49130 = G__49131;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49128))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49128){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49128),args);
});})(g__44577__auto___49128))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__44577__auto___49128){
return (function (seq49109){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49109));
});})(g__44577__auto___49128))
;


var g__44577__auto___49132 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__44577__auto___49132){
return (function cljs$spec$gen$alpha$list(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49133 = arguments.length;
var i__44017__auto___49134 = (0);
while(true){
if((i__44017__auto___49134 < len__44016__auto___49133)){
args__44034__auto__.push((arguments[i__44017__auto___49134]));

var G__49135 = (i__44017__auto___49134 + (1));
i__44017__auto___49134 = G__49135;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49132))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49132){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49132),args);
});})(g__44577__auto___49132))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__44577__auto___49132){
return (function (seq49110){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49110));
});})(g__44577__auto___49132))
;


var g__44577__auto___49136 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__44577__auto___49136){
return (function cljs$spec$gen$alpha$map(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49137 = arguments.length;
var i__44017__auto___49138 = (0);
while(true){
if((i__44017__auto___49138 < len__44016__auto___49137)){
args__44034__auto__.push((arguments[i__44017__auto___49138]));

var G__49139 = (i__44017__auto___49138 + (1));
i__44017__auto___49138 = G__49139;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49136))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49136){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49136),args);
});})(g__44577__auto___49136))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__44577__auto___49136){
return (function (seq49111){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49111));
});})(g__44577__auto___49136))
;


var g__44577__auto___49140 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__44577__auto___49140){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49141 = arguments.length;
var i__44017__auto___49142 = (0);
while(true){
if((i__44017__auto___49142 < len__44016__auto___49141)){
args__44034__auto__.push((arguments[i__44017__auto___49142]));

var G__49143 = (i__44017__auto___49142 + (1));
i__44017__auto___49142 = G__49143;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49140))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49140){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49140),args);
});})(g__44577__auto___49140))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__44577__auto___49140){
return (function (seq49112){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49112));
});})(g__44577__auto___49140))
;


var g__44577__auto___49144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__44577__auto___49144){
return (function cljs$spec$gen$alpha$set(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49145 = arguments.length;
var i__44017__auto___49146 = (0);
while(true){
if((i__44017__auto___49146 < len__44016__auto___49145)){
args__44034__auto__.push((arguments[i__44017__auto___49146]));

var G__49147 = (i__44017__auto___49146 + (1));
i__44017__auto___49146 = G__49147;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49144))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49144){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49144),args);
});})(g__44577__auto___49144))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__44577__auto___49144){
return (function (seq49113){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49113));
});})(g__44577__auto___49144))
;


var g__44577__auto___49148 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__44577__auto___49148){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49149 = arguments.length;
var i__44017__auto___49150 = (0);
while(true){
if((i__44017__auto___49150 < len__44016__auto___49149)){
args__44034__auto__.push((arguments[i__44017__auto___49150]));

var G__49151 = (i__44017__auto___49150 + (1));
i__44017__auto___49150 = G__49151;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49148))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49148){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49148),args);
});})(g__44577__auto___49148))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__44577__auto___49148){
return (function (seq49114){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49114));
});})(g__44577__auto___49148))
;


var g__44577__auto___49152 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__44577__auto___49152){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49153 = arguments.length;
var i__44017__auto___49154 = (0);
while(true){
if((i__44017__auto___49154 < len__44016__auto___49153)){
args__44034__auto__.push((arguments[i__44017__auto___49154]));

var G__49155 = (i__44017__auto___49154 + (1));
i__44017__auto___49154 = G__49155;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49152))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49152){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49152),args);
});})(g__44577__auto___49152))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__44577__auto___49152){
return (function (seq49115){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49115));
});})(g__44577__auto___49152))
;


var g__44577__auto___49156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__44577__auto___49156){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49157 = arguments.length;
var i__44017__auto___49158 = (0);
while(true){
if((i__44017__auto___49158 < len__44016__auto___49157)){
args__44034__auto__.push((arguments[i__44017__auto___49158]));

var G__49159 = (i__44017__auto___49158 + (1));
i__44017__auto___49158 = G__49159;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49156))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49156){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49156),args);
});})(g__44577__auto___49156))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__44577__auto___49156){
return (function (seq49116){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49116));
});})(g__44577__auto___49156))
;


var g__44577__auto___49160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__44577__auto___49160){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49161 = arguments.length;
var i__44017__auto___49162 = (0);
while(true){
if((i__44017__auto___49162 < len__44016__auto___49161)){
args__44034__auto__.push((arguments[i__44017__auto___49162]));

var G__49163 = (i__44017__auto___49162 + (1));
i__44017__auto___49162 = G__49163;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49160))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49160){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49160),args);
});})(g__44577__auto___49160))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__44577__auto___49160){
return (function (seq49117){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49117));
});})(g__44577__auto___49160))
;


var g__44577__auto___49164 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__44577__auto___49164){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49165 = arguments.length;
var i__44017__auto___49166 = (0);
while(true){
if((i__44017__auto___49166 < len__44016__auto___49165)){
args__44034__auto__.push((arguments[i__44017__auto___49166]));

var G__49167 = (i__44017__auto___49166 + (1));
i__44017__auto___49166 = G__49167;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49164))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49164){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49164),args);
});})(g__44577__auto___49164))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__44577__auto___49164){
return (function (seq49118){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49118));
});})(g__44577__auto___49164))
;


var g__44577__auto___49168 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__44577__auto___49168){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49169 = arguments.length;
var i__44017__auto___49170 = (0);
while(true){
if((i__44017__auto___49170 < len__44016__auto___49169)){
args__44034__auto__.push((arguments[i__44017__auto___49170]));

var G__49171 = (i__44017__auto___49170 + (1));
i__44017__auto___49170 = G__49171;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49168))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49168){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49168),args);
});})(g__44577__auto___49168))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__44577__auto___49168){
return (function (seq49119){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49119));
});})(g__44577__auto___49168))
;


var g__44577__auto___49172 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__44577__auto___49172){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49173 = arguments.length;
var i__44017__auto___49174 = (0);
while(true){
if((i__44017__auto___49174 < len__44016__auto___49173)){
args__44034__auto__.push((arguments[i__44017__auto___49174]));

var G__49175 = (i__44017__auto___49174 + (1));
i__44017__auto___49174 = G__49175;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49172))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49172){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49172),args);
});})(g__44577__auto___49172))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__44577__auto___49172){
return (function (seq49120){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49120));
});})(g__44577__auto___49172))
;


var g__44577__auto___49176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__44577__auto___49176){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49177 = arguments.length;
var i__44017__auto___49178 = (0);
while(true){
if((i__44017__auto___49178 < len__44016__auto___49177)){
args__44034__auto__.push((arguments[i__44017__auto___49178]));

var G__49179 = (i__44017__auto___49178 + (1));
i__44017__auto___49178 = G__49179;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49176))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49176){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49176),args);
});})(g__44577__auto___49176))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__44577__auto___49176){
return (function (seq49121){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49121));
});})(g__44577__auto___49176))
;


var g__44577__auto___49180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__44577__auto___49180){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49181 = arguments.length;
var i__44017__auto___49182 = (0);
while(true){
if((i__44017__auto___49182 < len__44016__auto___49181)){
args__44034__auto__.push((arguments[i__44017__auto___49182]));

var G__49183 = (i__44017__auto___49182 + (1));
i__44017__auto___49182 = G__49183;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49180))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49180){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49180),args);
});})(g__44577__auto___49180))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__44577__auto___49180){
return (function (seq49122){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49122));
});})(g__44577__auto___49180))
;


var g__44577__auto___49184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__44577__auto___49184){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49185 = arguments.length;
var i__44017__auto___49186 = (0);
while(true){
if((i__44017__auto___49186 < len__44016__auto___49185)){
args__44034__auto__.push((arguments[i__44017__auto___49186]));

var G__49187 = (i__44017__auto___49186 + (1));
i__44017__auto___49186 = G__49187;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49184))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49184),args);
});})(g__44577__auto___49184))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__44577__auto___49184){
return (function (seq49123){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49123));
});})(g__44577__auto___49184))
;


var g__44577__auto___49188 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__44577__auto___49188){
return (function cljs$spec$gen$alpha$return(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49189 = arguments.length;
var i__44017__auto___49190 = (0);
while(true){
if((i__44017__auto___49190 < len__44016__auto___49189)){
args__44034__auto__.push((arguments[i__44017__auto___49190]));

var G__49191 = (i__44017__auto___49190 + (1));
i__44017__auto___49190 = G__49191;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49188))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49188){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49188),args);
});})(g__44577__auto___49188))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__44577__auto___49188){
return (function (seq49124){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49124));
});})(g__44577__auto___49188))
;


var g__44577__auto___49192 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__44577__auto___49192){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49193 = arguments.length;
var i__44017__auto___49194 = (0);
while(true){
if((i__44017__auto___49194 < len__44016__auto___49193)){
args__44034__auto__.push((arguments[i__44017__auto___49194]));

var G__49195 = (i__44017__auto___49194 + (1));
i__44017__auto___49194 = G__49195;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49192))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49192){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49192),args);
});})(g__44577__auto___49192))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__44577__auto___49192){
return (function (seq49125){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49125));
});})(g__44577__auto___49192))
;


var g__44577__auto___49196 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__44577__auto___49196){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49197 = arguments.length;
var i__44017__auto___49198 = (0);
while(true){
if((i__44017__auto___49198 < len__44016__auto___49197)){
args__44034__auto__.push((arguments[i__44017__auto___49198]));

var G__49199 = (i__44017__auto___49198 + (1));
i__44017__auto___49198 = G__49199;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49196))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49196){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49196),args);
});})(g__44577__auto___49196))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__44577__auto___49196){
return (function (seq49126){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49126));
});})(g__44577__auto___49196))
;


var g__44577__auto___49200 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__44577__auto___49200){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49201 = arguments.length;
var i__44017__auto___49202 = (0);
while(true){
if((i__44017__auto___49202 < len__44016__auto___49201)){
args__44034__auto__.push((arguments[i__44017__auto___49202]));

var G__49203 = (i__44017__auto___49202 + (1));
i__44017__auto___49202 = G__49203;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44577__auto___49200))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44577__auto___49200){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__44577__auto___49200),args);
});})(g__44577__auto___49200))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__44577__auto___49200){
return (function (seq49127){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49127));
});})(g__44577__auto___49200))
;

var g__44590__auto___49226 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__44590__auto___49226){
return (function cljs$spec$gen$alpha$any(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49227 = arguments.length;
var i__44017__auto___49228 = (0);
while(true){
if((i__44017__auto___49228 < len__44016__auto___49227)){
args__44034__auto__.push((arguments[i__44017__auto___49228]));

var G__49229 = (i__44017__auto___49228 + (1));
i__44017__auto___49228 = G__49229;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49226))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49226){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49226);
});})(g__44590__auto___49226))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__44590__auto___49226){
return (function (seq49204){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49204));
});})(g__44590__auto___49226))
;


var g__44590__auto___49230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__44590__auto___49230){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49231 = arguments.length;
var i__44017__auto___49232 = (0);
while(true){
if((i__44017__auto___49232 < len__44016__auto___49231)){
args__44034__auto__.push((arguments[i__44017__auto___49232]));

var G__49233 = (i__44017__auto___49232 + (1));
i__44017__auto___49232 = G__49233;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49230))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49230){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49230);
});})(g__44590__auto___49230))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__44590__auto___49230){
return (function (seq49205){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49205));
});})(g__44590__auto___49230))
;


var g__44590__auto___49234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__44590__auto___49234){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49235 = arguments.length;
var i__44017__auto___49236 = (0);
while(true){
if((i__44017__auto___49236 < len__44016__auto___49235)){
args__44034__auto__.push((arguments[i__44017__auto___49236]));

var G__49237 = (i__44017__auto___49236 + (1));
i__44017__auto___49236 = G__49237;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49234))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49234){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49234);
});})(g__44590__auto___49234))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__44590__auto___49234){
return (function (seq49206){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49206));
});})(g__44590__auto___49234))
;


var g__44590__auto___49238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__44590__auto___49238){
return (function cljs$spec$gen$alpha$char(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49239 = arguments.length;
var i__44017__auto___49240 = (0);
while(true){
if((i__44017__auto___49240 < len__44016__auto___49239)){
args__44034__auto__.push((arguments[i__44017__auto___49240]));

var G__49241 = (i__44017__auto___49240 + (1));
i__44017__auto___49240 = G__49241;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49238))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49238){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49238);
});})(g__44590__auto___49238))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__44590__auto___49238){
return (function (seq49207){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49207));
});})(g__44590__auto___49238))
;


var g__44590__auto___49242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__44590__auto___49242){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49243 = arguments.length;
var i__44017__auto___49244 = (0);
while(true){
if((i__44017__auto___49244 < len__44016__auto___49243)){
args__44034__auto__.push((arguments[i__44017__auto___49244]));

var G__49245 = (i__44017__auto___49244 + (1));
i__44017__auto___49244 = G__49245;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49242))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49242){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49242);
});})(g__44590__auto___49242))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__44590__auto___49242){
return (function (seq49208){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49208));
});})(g__44590__auto___49242))
;


var g__44590__auto___49246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__44590__auto___49246){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49247 = arguments.length;
var i__44017__auto___49248 = (0);
while(true){
if((i__44017__auto___49248 < len__44016__auto___49247)){
args__44034__auto__.push((arguments[i__44017__auto___49248]));

var G__49249 = (i__44017__auto___49248 + (1));
i__44017__auto___49248 = G__49249;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49246))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49246){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49246);
});})(g__44590__auto___49246))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__44590__auto___49246){
return (function (seq49210){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49210));
});})(g__44590__auto___49246))
;


var g__44590__auto___49250 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__44590__auto___49250){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49251 = arguments.length;
var i__44017__auto___49252 = (0);
while(true){
if((i__44017__auto___49252 < len__44016__auto___49251)){
args__44034__auto__.push((arguments[i__44017__auto___49252]));

var G__49253 = (i__44017__auto___49252 + (1));
i__44017__auto___49252 = G__49253;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49250))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49250){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49250);
});})(g__44590__auto___49250))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__44590__auto___49250){
return (function (seq49211){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49211));
});})(g__44590__auto___49250))
;


var g__44590__auto___49254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__44590__auto___49254){
return (function cljs$spec$gen$alpha$double(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49255 = arguments.length;
var i__44017__auto___49256 = (0);
while(true){
if((i__44017__auto___49256 < len__44016__auto___49255)){
args__44034__auto__.push((arguments[i__44017__auto___49256]));

var G__49257 = (i__44017__auto___49256 + (1));
i__44017__auto___49256 = G__49257;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49254))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49254){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49254);
});})(g__44590__auto___49254))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__44590__auto___49254){
return (function (seq49212){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49212));
});})(g__44590__auto___49254))
;


var g__44590__auto___49258 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__44590__auto___49258){
return (function cljs$spec$gen$alpha$int(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49259 = arguments.length;
var i__44017__auto___49260 = (0);
while(true){
if((i__44017__auto___49260 < len__44016__auto___49259)){
args__44034__auto__.push((arguments[i__44017__auto___49260]));

var G__49261 = (i__44017__auto___49260 + (1));
i__44017__auto___49260 = G__49261;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49258))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49258){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49258);
});})(g__44590__auto___49258))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__44590__auto___49258){
return (function (seq49213){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49213));
});})(g__44590__auto___49258))
;


var g__44590__auto___49262 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__44590__auto___49262){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49263 = arguments.length;
var i__44017__auto___49264 = (0);
while(true){
if((i__44017__auto___49264 < len__44016__auto___49263)){
args__44034__auto__.push((arguments[i__44017__auto___49264]));

var G__49265 = (i__44017__auto___49264 + (1));
i__44017__auto___49264 = G__49265;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49262))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49262){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49262);
});})(g__44590__auto___49262))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__44590__auto___49262){
return (function (seq49214){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49214));
});})(g__44590__auto___49262))
;


var g__44590__auto___49266 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__44590__auto___49266){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49267 = arguments.length;
var i__44017__auto___49268 = (0);
while(true){
if((i__44017__auto___49268 < len__44016__auto___49267)){
args__44034__auto__.push((arguments[i__44017__auto___49268]));

var G__49269 = (i__44017__auto___49268 + (1));
i__44017__auto___49268 = G__49269;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49266))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49266){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49266);
});})(g__44590__auto___49266))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__44590__auto___49266){
return (function (seq49215){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49215));
});})(g__44590__auto___49266))
;


var g__44590__auto___49270 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__44590__auto___49270){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49271 = arguments.length;
var i__44017__auto___49272 = (0);
while(true){
if((i__44017__auto___49272 < len__44016__auto___49271)){
args__44034__auto__.push((arguments[i__44017__auto___49272]));

var G__49273 = (i__44017__auto___49272 + (1));
i__44017__auto___49272 = G__49273;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49270))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49270){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49270);
});})(g__44590__auto___49270))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__44590__auto___49270){
return (function (seq49216){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49216));
});})(g__44590__auto___49270))
;


var g__44590__auto___49274 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__44590__auto___49274){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49275 = arguments.length;
var i__44017__auto___49276 = (0);
while(true){
if((i__44017__auto___49276 < len__44016__auto___49275)){
args__44034__auto__.push((arguments[i__44017__auto___49276]));

var G__49277 = (i__44017__auto___49276 + (1));
i__44017__auto___49276 = G__49277;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49274))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49274){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49274);
});})(g__44590__auto___49274))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__44590__auto___49274){
return (function (seq49217){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49217));
});})(g__44590__auto___49274))
;


var g__44590__auto___49278 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__44590__auto___49278){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49279 = arguments.length;
var i__44017__auto___49280 = (0);
while(true){
if((i__44017__auto___49280 < len__44016__auto___49279)){
args__44034__auto__.push((arguments[i__44017__auto___49280]));

var G__49281 = (i__44017__auto___49280 + (1));
i__44017__auto___49280 = G__49281;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49278))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49278){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49278);
});})(g__44590__auto___49278))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__44590__auto___49278){
return (function (seq49218){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49218));
});})(g__44590__auto___49278))
;


var g__44590__auto___49282 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__44590__auto___49282){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49283 = arguments.length;
var i__44017__auto___49284 = (0);
while(true){
if((i__44017__auto___49284 < len__44016__auto___49283)){
args__44034__auto__.push((arguments[i__44017__auto___49284]));

var G__49285 = (i__44017__auto___49284 + (1));
i__44017__auto___49284 = G__49285;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49282))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49282){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49282);
});})(g__44590__auto___49282))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__44590__auto___49282){
return (function (seq49219){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49219));
});})(g__44590__auto___49282))
;


var g__44590__auto___49286 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__44590__auto___49286){
return (function cljs$spec$gen$alpha$string(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49287 = arguments.length;
var i__44017__auto___49288 = (0);
while(true){
if((i__44017__auto___49288 < len__44016__auto___49287)){
args__44034__auto__.push((arguments[i__44017__auto___49288]));

var G__49289 = (i__44017__auto___49288 + (1));
i__44017__auto___49288 = G__49289;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49286))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49286){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49286);
});})(g__44590__auto___49286))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__44590__auto___49286){
return (function (seq49220){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49220));
});})(g__44590__auto___49286))
;


var g__44590__auto___49290 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__44590__auto___49290){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49291 = arguments.length;
var i__44017__auto___49292 = (0);
while(true){
if((i__44017__auto___49292 < len__44016__auto___49291)){
args__44034__auto__.push((arguments[i__44017__auto___49292]));

var G__49293 = (i__44017__auto___49292 + (1));
i__44017__auto___49292 = G__49293;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49290))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49290){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49290);
});})(g__44590__auto___49290))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__44590__auto___49290){
return (function (seq49221){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49221));
});})(g__44590__auto___49290))
;


var g__44590__auto___49294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__44590__auto___49294){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49295 = arguments.length;
var i__44017__auto___49296 = (0);
while(true){
if((i__44017__auto___49296 < len__44016__auto___49295)){
args__44034__auto__.push((arguments[i__44017__auto___49296]));

var G__49297 = (i__44017__auto___49296 + (1));
i__44017__auto___49296 = G__49297;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49294))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49294){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49294);
});})(g__44590__auto___49294))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__44590__auto___49294){
return (function (seq49222){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49222));
});})(g__44590__auto___49294))
;


var g__44590__auto___49298 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__44590__auto___49298){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49299 = arguments.length;
var i__44017__auto___49300 = (0);
while(true){
if((i__44017__auto___49300 < len__44016__auto___49299)){
args__44034__auto__.push((arguments[i__44017__auto___49300]));

var G__49301 = (i__44017__auto___49300 + (1));
i__44017__auto___49300 = G__49301;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49298))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49298){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49298);
});})(g__44590__auto___49298))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__44590__auto___49298){
return (function (seq49223){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49223));
});})(g__44590__auto___49298))
;


var g__44590__auto___49302 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__44590__auto___49302){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49303 = arguments.length;
var i__44017__auto___49304 = (0);
while(true){
if((i__44017__auto___49304 < len__44016__auto___49303)){
args__44034__auto__.push((arguments[i__44017__auto___49304]));

var G__49305 = (i__44017__auto___49304 + (1));
i__44017__auto___49304 = G__49305;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49302))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49302){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49302);
});})(g__44590__auto___49302))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__44590__auto___49302){
return (function (seq49224){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49224));
});})(g__44590__auto___49302))
;


var g__44590__auto___49306 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__44590__auto___49306){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49307 = arguments.length;
var i__44017__auto___49308 = (0);
while(true){
if((i__44017__auto___49308 < len__44016__auto___49307)){
args__44034__auto__.push((arguments[i__44017__auto___49308]));

var G__49309 = (i__44017__auto___49308 + (1));
i__44017__auto___49308 = G__49309;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});})(g__44590__auto___49306))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__44590__auto___49306){
return (function (args){
return cljs.core.deref.call(null,g__44590__auto___49306);
});})(g__44590__auto___49306))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__44590__auto___49306){
return (function (seq49225){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49225));
});})(g__44590__auto___49306))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__44034__auto__ = [];
var len__44016__auto___49312 = arguments.length;
var i__44017__auto___49313 = (0);
while(true){
if((i__44017__auto___49313 < len__44016__auto___49312)){
args__44034__auto__.push((arguments[i__44017__auto___49313]));

var G__49314 = (i__44017__auto___49313 + (1));
i__44017__auto___49313 = G__49314;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__49310_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__49310_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq49311){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49311));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__49315_SHARP_){
return (new Date(p1__49315_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1513003832067
