// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__45561__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45562__i = 0, G__45562__a = new Array(arguments.length -  0);
while (G__45562__i < G__45562__a.length) {G__45562__a[G__45562__i] = arguments[G__45562__i + 0]; ++G__45562__i;}
  args = new cljs.core.IndexedSeq(G__45562__a,0,null);
} 
return G__45561__delegate.call(this,args);};
G__45561.cljs$lang$maxFixedArity = 0;
G__45561.cljs$lang$applyTo = (function (arglist__45563){
var args = cljs.core.seq(arglist__45563);
return G__45561__delegate(args);
});
G__45561.cljs$core$IFn$_invoke$arity$variadic = G__45561__delegate;
return G__45561;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__45564__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45565__i = 0, G__45565__a = new Array(arguments.length -  0);
while (G__45565__i < G__45565__a.length) {G__45565__a[G__45565__i] = arguments[G__45565__i + 0]; ++G__45565__i;}
  args = new cljs.core.IndexedSeq(G__45565__a,0,null);
} 
return G__45564__delegate.call(this,args);};
G__45564.cljs$lang$maxFixedArity = 0;
G__45564.cljs$lang$applyTo = (function (arglist__45566){
var args = cljs.core.seq(arglist__45566);
return G__45564__delegate(args);
});
G__45564.cljs$core$IFn$_invoke$arity$variadic = G__45564__delegate;
return G__45564;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1512631520931
