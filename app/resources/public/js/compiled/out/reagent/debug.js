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
var G__32656__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32657__i = 0, G__32657__a = new Array(arguments.length -  0);
while (G__32657__i < G__32657__a.length) {G__32657__a[G__32657__i] = arguments[G__32657__i + 0]; ++G__32657__i;}
  args = new cljs.core.IndexedSeq(G__32657__a,0,null);
} 
return G__32656__delegate.call(this,args);};
G__32656.cljs$lang$maxFixedArity = 0;
G__32656.cljs$lang$applyTo = (function (arglist__32658){
var args = cljs.core.seq(arglist__32658);
return G__32656__delegate(args);
});
G__32656.cljs$core$IFn$_invoke$arity$variadic = G__32656__delegate;
return G__32656;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32659__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32660__i = 0, G__32660__a = new Array(arguments.length -  0);
while (G__32660__i < G__32660__a.length) {G__32660__a[G__32660__i] = arguments[G__32660__i + 0]; ++G__32660__i;}
  args = new cljs.core.IndexedSeq(G__32660__a,0,null);
} 
return G__32659__delegate.call(this,args);};
G__32659.cljs$lang$maxFixedArity = 0;
G__32659.cljs$lang$applyTo = (function (arglist__32661){
var args = cljs.core.seq(arglist__32661);
return G__32659__delegate(args);
});
G__32659.cljs$core$IFn$_invoke$arity$variadic = G__32659__delegate;
return G__32659;
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

//# sourceMappingURL=debug.js.map?rel=1513003760245
