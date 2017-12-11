// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljss.core');
goog.require('cljs.core');
goog.require('cljss.sheet');
goog.require('cljss.utils');
goog.require('clojure.string');
if(typeof cljss.core.sheets !== 'undefined'){
} else {
cljss.core.sheets = cljs.core.atom.call(null,(function (){var x__43484__auto__ = cljss.sheet.create_sheet.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__43484__auto__);
})());
}
if(typeof cljss.core._STAR_id_STAR_ !== 'undefined'){
} else {
cljss.core._STAR_id_STAR_ = cljs.core.atom.call(null,(0));
}
if(typeof cljss.core.cache !== 'undefined'){
} else {
cljss.core.cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljss.core.with_cache_busting = (function cljss$core$with_cache_busting(clsn,cls,static$){
return clojure.string.replace.call(null,static$,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clsn)].join(''),[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)].join(''));
});
/**
 * Takes class name, static styles and dynamic styles.
 * Injects styles and returns a string of generated class names.
 */
cljss.core.css = (function cljss$core$css(clsn,static$,vars){
var sheet = cljs.core.first.call(null,cljs.core.deref.call(null,cljss.core.sheets));
var cls = ((!(cljss.utils.dev_QMARK_))?clsn:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clsn),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,cljss.core._STAR_id_STAR_,cljs.core.inc))].join(''));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_.call(null,sheet))){
cljs.core.swap_BANG_.call(null,cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet.call(null));

return cljss.core.css.call(null,cls,static$,vars);
} else {
if(cljs.core.empty_QMARK_.call(null,static$)){
} else {
if(cljss.utils.dev_QMARK_){
cljss.sheet.insert_BANG_.call(null,sheet,cljss.core.with_cache_busting.call(null,clsn,cls,static$),cls);
} else {
cljss.sheet.insert_BANG_.call(null,sheet,static$,cls);
}
}

if((cljs.core.count.call(null,vars) > (0))){
var temp__5276__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljss.core.cache),vars);
if(cljs.core.truth_(temp__5276__auto__)){
var var_cls = temp__5276__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_cls)].join('');
} else {
var var_cls = ["vars-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,cljss.core._STAR_id_STAR_,cljs.core.inc))].join('');
cljss.sheet.insert_BANG_.call(null,sheet,cljss.utils.build_css.call(null,var_cls,vars),var_cls);

cljs.core.swap_BANG_.call(null,cljss.core.cache,cljs.core.assoc,vars,var_cls);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_cls)].join('');
}
} else {
return cls;
}
}
});
/**
 * Takes CSS animation name, static styles and dynamic styles.
 * Injects styles and returns generated CSS animation name.
 */
cljss.core.css_keyframes = (function cljss$core$css_keyframes(cls,static$,vars){
var sheet = cljs.core.first.call(null,cljs.core.deref.call(null,cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_.call(null,sheet))){
cljs.core.swap_BANG_.call(null,cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet.call(null));

return cljss.core.css_keyframes.call(null,cls,static$,vars);
} else {
var inner = cljs.core.reduce.call(null,((function (sheet){
return (function (s,p__66735){
var vec__66736 = p__66735;
var id = cljs.core.nth.call(null,vec__66736,(0),null);
var val = cljs.core.nth.call(null,vec__66736,(1),null);
return clojure.string.replace.call(null,s,id,val);
});})(sheet))
,static$,vars);
var anim_name = ["animation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,vars))].join('');
var keyframes = ["@keyframes ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anim_name),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner),"}"].join('');
cljss.sheet.insert_BANG_.call(null,sheet,keyframes,anim_name);

return anim_name;
}
});

//# sourceMappingURL=core.js.map?rel=1512632036376
