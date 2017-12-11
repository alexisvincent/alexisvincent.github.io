// Compiled by ClojureScript 1.9.908 {}
goog.provide('venia.exception');
goog.require('cljs.core');
if(typeof venia.exception.throw_ex !== 'undefined'){
} else {
venia.exception.throw_ex = (function (){var method_table__43840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__43841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__43842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__43843__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__43844__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"venia.exception","throw-ex"),new cljs.core.Keyword("venia","ex-type","venia/ex-type",1589216502),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__43844__auto__,method_table__43840__auto__,prefer_table__43841__auto__,method_cache__43842__auto__,cached_hierarchy__43843__auto__));
})();
}
cljs.core._add_method.call(null,venia.exception.throw_ex,new cljs.core.Keyword("venia","spec-validation","venia/spec-validation",1939479631),(function (data){
throw (new Error(["Invalid query data ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')));
}));
cljs.core._add_method.call(null,venia.exception.throw_ex,new cljs.core.Keyword("venia","invalid-fragments","venia/invalid-fragments",50426835),(function (data){
throw (new Error(["Invalid fragments: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("venia","ex-data","venia/ex-data",-230374216).cljs$core$IFn$_invoke$arity$1(data))].join('')));
}));
cljs.core._add_method.call(null,venia.exception.throw_ex,new cljs.core.Keyword("venia","invalid-variables","venia/invalid-variables",1824725033),(function (data){
throw (new Error(["Invalid variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("venia","ex-data","venia/ex-data",-230374216).cljs$core$IFn$_invoke$arity$1(data))].join('')));
}));

//# sourceMappingURL=exception.js.map?rel=1509630567558
