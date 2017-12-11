// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_33011 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_33011){
return (function (){
var _STAR_always_update_STAR_33012 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_33012;
}});})(_STAR_always_update_STAR_33011))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_33011;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__33014 = arguments.length;
switch (G__33014) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__33016_33020 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__33017_33021 = null;
var count__33018_33022 = (0);
var i__33019_33023 = (0);
while(true){
if((i__33019_33023 < count__33018_33022)){
var v_33024 = cljs.core._nth.call(null,chunk__33017_33021,i__33019_33023);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_33024);

var G__33025 = seq__33016_33020;
var G__33026 = chunk__33017_33021;
var G__33027 = count__33018_33022;
var G__33028 = (i__33019_33023 + (1));
seq__33016_33020 = G__33025;
chunk__33017_33021 = G__33026;
count__33018_33022 = G__33027;
i__33019_33023 = G__33028;
continue;
} else {
var temp__5457__auto___33029 = cljs.core.seq.call(null,seq__33016_33020);
if(temp__5457__auto___33029){
var seq__33016_33030__$1 = temp__5457__auto___33029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33016_33030__$1)){
var c__31658__auto___33031 = cljs.core.chunk_first.call(null,seq__33016_33030__$1);
var G__33032 = cljs.core.chunk_rest.call(null,seq__33016_33030__$1);
var G__33033 = c__31658__auto___33031;
var G__33034 = cljs.core.count.call(null,c__31658__auto___33031);
var G__33035 = (0);
seq__33016_33020 = G__33032;
chunk__33017_33021 = G__33033;
count__33018_33022 = G__33034;
i__33019_33023 = G__33035;
continue;
} else {
var v_33036 = cljs.core.first.call(null,seq__33016_33030__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_33036);

var G__33037 = cljs.core.next.call(null,seq__33016_33030__$1);
var G__33038 = null;
var G__33039 = (0);
var G__33040 = (0);
seq__33016_33020 = G__33037;
chunk__33017_33021 = G__33038;
count__33018_33022 = G__33039;
i__33019_33023 = G__33040;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1513003761489
