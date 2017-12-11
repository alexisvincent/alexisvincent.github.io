// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41411__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41411__auto__){
return or__41411__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41411__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__60285_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__60285_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__60286 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__60287 = null;
var count__60288 = (0);
var i__60289 = (0);
while(true){
if((i__60289 < count__60288)){
var n = cljs.core._nth.call(null,chunk__60287,i__60289);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__60290 = seq__60286;
var G__60291 = chunk__60287;
var G__60292 = count__60288;
var G__60293 = (i__60289 + (1));
seq__60286 = G__60290;
chunk__60287 = G__60291;
count__60288 = G__60292;
i__60289 = G__60293;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__60286);
if(temp__5278__auto__){
var seq__60286__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60286__$1)){
var c__43430__auto__ = cljs.core.chunk_first.call(null,seq__60286__$1);
var G__60294 = cljs.core.chunk_rest.call(null,seq__60286__$1);
var G__60295 = c__43430__auto__;
var G__60296 = cljs.core.count.call(null,c__43430__auto__);
var G__60297 = (0);
seq__60286 = G__60294;
chunk__60287 = G__60295;
count__60288 = G__60296;
i__60289 = G__60297;
continue;
} else {
var n = cljs.core.first.call(null,seq__60286__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__60298 = cljs.core.next.call(null,seq__60286__$1);
var G__60299 = null;
var G__60300 = (0);
var G__60301 = (0);
seq__60286 = G__60298;
chunk__60287 = G__60299;
count__60288 = G__60300;
i__60289 = G__60301;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__60311_60319 = cljs.core.seq.call(null,deps);
var chunk__60312_60320 = null;
var count__60313_60321 = (0);
var i__60314_60322 = (0);
while(true){
if((i__60314_60322 < count__60313_60321)){
var dep_60323 = cljs.core._nth.call(null,chunk__60312_60320,i__60314_60322);
topo_sort_helper_STAR_.call(null,dep_60323,(depth + (1)),state);

var G__60324 = seq__60311_60319;
var G__60325 = chunk__60312_60320;
var G__60326 = count__60313_60321;
var G__60327 = (i__60314_60322 + (1));
seq__60311_60319 = G__60324;
chunk__60312_60320 = G__60325;
count__60313_60321 = G__60326;
i__60314_60322 = G__60327;
continue;
} else {
var temp__5278__auto___60328 = cljs.core.seq.call(null,seq__60311_60319);
if(temp__5278__auto___60328){
var seq__60311_60329__$1 = temp__5278__auto___60328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60311_60329__$1)){
var c__43430__auto___60330 = cljs.core.chunk_first.call(null,seq__60311_60329__$1);
var G__60331 = cljs.core.chunk_rest.call(null,seq__60311_60329__$1);
var G__60332 = c__43430__auto___60330;
var G__60333 = cljs.core.count.call(null,c__43430__auto___60330);
var G__60334 = (0);
seq__60311_60319 = G__60331;
chunk__60312_60320 = G__60332;
count__60313_60321 = G__60333;
i__60314_60322 = G__60334;
continue;
} else {
var dep_60335 = cljs.core.first.call(null,seq__60311_60329__$1);
topo_sort_helper_STAR_.call(null,dep_60335,(depth + (1)),state);

var G__60336 = cljs.core.next.call(null,seq__60311_60329__$1);
var G__60337 = null;
var G__60338 = (0);
var G__60339 = (0);
seq__60311_60319 = G__60336;
chunk__60312_60320 = G__60337;
count__60313_60321 = G__60338;
i__60314_60322 = G__60339;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__60315){
var vec__60316 = p__60315;
var seq__60317 = cljs.core.seq.call(null,vec__60316);
var first__60318 = cljs.core.first.call(null,seq__60317);
var seq__60317__$1 = cljs.core.next.call(null,seq__60317);
var x = first__60318;
var xs = seq__60317__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__60316,seq__60317,first__60318,seq__60317__$1,x,xs,get_deps__$1){
return (function (p1__60302_SHARP_){
return clojure.set.difference.call(null,p1__60302_SHARP_,x);
});})(vec__60316,seq__60317,first__60318,seq__60317__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__60340 = cljs.core.seq.call(null,provides);
var chunk__60341 = null;
var count__60342 = (0);
var i__60343 = (0);
while(true){
if((i__60343 < count__60342)){
var prov = cljs.core._nth.call(null,chunk__60341,i__60343);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__60344_60352 = cljs.core.seq.call(null,requires);
var chunk__60345_60353 = null;
var count__60346_60354 = (0);
var i__60347_60355 = (0);
while(true){
if((i__60347_60355 < count__60346_60354)){
var req_60356 = cljs.core._nth.call(null,chunk__60345_60353,i__60347_60355);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_60356,prov);

var G__60357 = seq__60344_60352;
var G__60358 = chunk__60345_60353;
var G__60359 = count__60346_60354;
var G__60360 = (i__60347_60355 + (1));
seq__60344_60352 = G__60357;
chunk__60345_60353 = G__60358;
count__60346_60354 = G__60359;
i__60347_60355 = G__60360;
continue;
} else {
var temp__5278__auto___60361 = cljs.core.seq.call(null,seq__60344_60352);
if(temp__5278__auto___60361){
var seq__60344_60362__$1 = temp__5278__auto___60361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60344_60362__$1)){
var c__43430__auto___60363 = cljs.core.chunk_first.call(null,seq__60344_60362__$1);
var G__60364 = cljs.core.chunk_rest.call(null,seq__60344_60362__$1);
var G__60365 = c__43430__auto___60363;
var G__60366 = cljs.core.count.call(null,c__43430__auto___60363);
var G__60367 = (0);
seq__60344_60352 = G__60364;
chunk__60345_60353 = G__60365;
count__60346_60354 = G__60366;
i__60347_60355 = G__60367;
continue;
} else {
var req_60368 = cljs.core.first.call(null,seq__60344_60362__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_60368,prov);

var G__60369 = cljs.core.next.call(null,seq__60344_60362__$1);
var G__60370 = null;
var G__60371 = (0);
var G__60372 = (0);
seq__60344_60352 = G__60369;
chunk__60345_60353 = G__60370;
count__60346_60354 = G__60371;
i__60347_60355 = G__60372;
continue;
}
} else {
}
}
break;
}

var G__60373 = seq__60340;
var G__60374 = chunk__60341;
var G__60375 = count__60342;
var G__60376 = (i__60343 + (1));
seq__60340 = G__60373;
chunk__60341 = G__60374;
count__60342 = G__60375;
i__60343 = G__60376;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__60340);
if(temp__5278__auto__){
var seq__60340__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60340__$1)){
var c__43430__auto__ = cljs.core.chunk_first.call(null,seq__60340__$1);
var G__60377 = cljs.core.chunk_rest.call(null,seq__60340__$1);
var G__60378 = c__43430__auto__;
var G__60379 = cljs.core.count.call(null,c__43430__auto__);
var G__60380 = (0);
seq__60340 = G__60377;
chunk__60341 = G__60378;
count__60342 = G__60379;
i__60343 = G__60380;
continue;
} else {
var prov = cljs.core.first.call(null,seq__60340__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__60348_60381 = cljs.core.seq.call(null,requires);
var chunk__60349_60382 = null;
var count__60350_60383 = (0);
var i__60351_60384 = (0);
while(true){
if((i__60351_60384 < count__60350_60383)){
var req_60385 = cljs.core._nth.call(null,chunk__60349_60382,i__60351_60384);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_60385,prov);

var G__60386 = seq__60348_60381;
var G__60387 = chunk__60349_60382;
var G__60388 = count__60350_60383;
var G__60389 = (i__60351_60384 + (1));
seq__60348_60381 = G__60386;
chunk__60349_60382 = G__60387;
count__60350_60383 = G__60388;
i__60351_60384 = G__60389;
continue;
} else {
var temp__5278__auto___60390__$1 = cljs.core.seq.call(null,seq__60348_60381);
if(temp__5278__auto___60390__$1){
var seq__60348_60391__$1 = temp__5278__auto___60390__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60348_60391__$1)){
var c__43430__auto___60392 = cljs.core.chunk_first.call(null,seq__60348_60391__$1);
var G__60393 = cljs.core.chunk_rest.call(null,seq__60348_60391__$1);
var G__60394 = c__43430__auto___60392;
var G__60395 = cljs.core.count.call(null,c__43430__auto___60392);
var G__60396 = (0);
seq__60348_60381 = G__60393;
chunk__60349_60382 = G__60394;
count__60350_60383 = G__60395;
i__60351_60384 = G__60396;
continue;
} else {
var req_60397 = cljs.core.first.call(null,seq__60348_60391__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_60397,prov);

var G__60398 = cljs.core.next.call(null,seq__60348_60391__$1);
var G__60399 = null;
var G__60400 = (0);
var G__60401 = (0);
seq__60348_60381 = G__60398;
chunk__60349_60382 = G__60399;
count__60350_60383 = G__60400;
i__60351_60384 = G__60401;
continue;
}
} else {
}
}
break;
}

var G__60402 = cljs.core.next.call(null,seq__60340__$1);
var G__60403 = null;
var G__60404 = (0);
var G__60405 = (0);
seq__60340 = G__60402;
chunk__60341 = G__60403;
count__60342 = G__60404;
i__60343 = G__60405;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__60406_60410 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__60407_60411 = null;
var count__60408_60412 = (0);
var i__60409_60413 = (0);
while(true){
if((i__60409_60413 < count__60408_60412)){
var ns_60414 = cljs.core._nth.call(null,chunk__60407_60411,i__60409_60413);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_60414);

var G__60415 = seq__60406_60410;
var G__60416 = chunk__60407_60411;
var G__60417 = count__60408_60412;
var G__60418 = (i__60409_60413 + (1));
seq__60406_60410 = G__60415;
chunk__60407_60411 = G__60416;
count__60408_60412 = G__60417;
i__60409_60413 = G__60418;
continue;
} else {
var temp__5278__auto___60419 = cljs.core.seq.call(null,seq__60406_60410);
if(temp__5278__auto___60419){
var seq__60406_60420__$1 = temp__5278__auto___60419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60406_60420__$1)){
var c__43430__auto___60421 = cljs.core.chunk_first.call(null,seq__60406_60420__$1);
var G__60422 = cljs.core.chunk_rest.call(null,seq__60406_60420__$1);
var G__60423 = c__43430__auto___60421;
var G__60424 = cljs.core.count.call(null,c__43430__auto___60421);
var G__60425 = (0);
seq__60406_60410 = G__60422;
chunk__60407_60411 = G__60423;
count__60408_60412 = G__60424;
i__60409_60413 = G__60425;
continue;
} else {
var ns_60426 = cljs.core.first.call(null,seq__60406_60420__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_60426);

var G__60427 = cljs.core.next.call(null,seq__60406_60420__$1);
var G__60428 = null;
var G__60429 = (0);
var G__60430 = (0);
seq__60406_60410 = G__60427;
chunk__60407_60411 = G__60428;
count__60408_60412 = G__60429;
i__60409_60413 = G__60430;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41411__auto__ = goog.require__;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__60431__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__60431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60432__i = 0, G__60432__a = new Array(arguments.length -  0);
while (G__60432__i < G__60432__a.length) {G__60432__a[G__60432__i] = arguments[G__60432__i + 0]; ++G__60432__i;}
  args = new cljs.core.IndexedSeq(G__60432__a,0,null);
} 
return G__60431__delegate.call(this,args);};
G__60431.cljs$lang$maxFixedArity = 0;
G__60431.cljs$lang$applyTo = (function (arglist__60433){
var args = cljs.core.seq(arglist__60433);
return G__60431__delegate(args);
});
G__60431.cljs$core$IFn$_invoke$arity$variadic = G__60431__delegate;
return G__60431;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__60434_SHARP_,p2__60435_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60434_SHARP_)].join('')),p2__60435_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__60436_SHARP_,p2__60437_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60436_SHARP_)].join(''),p2__60437_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__60438 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__60438.addCallback(((function (G__60438){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__60438))
);

G__60438.addErrback(((function (G__60438){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__60438))
);

return G__60438;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__60439 = cljs.core._EQ_;
var expr__60440 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__60439.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__60440))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__60439,expr__60440){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__60439,expr__60440))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__60439,expr__60440){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e60442){if((e60442 instanceof Error)){
var e = e60442;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e60442;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__60439,expr__60440))
} else {
if(cljs.core.truth_(pred__60439.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__60440))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__60439.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__60440))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__60439.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__60440))){
return ((function (pred__60439,expr__60440){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e60443){if((e60443 instanceof Error)){
var e = e60443;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e60443;

}
}})());
});
;})(pred__60439,expr__60440))
} else {
return ((function (pred__60439,expr__60440){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__60439,expr__60440))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__60444,callback){
var map__60445 = p__60444;
var map__60445__$1 = ((((!((map__60445 == null)))?((((map__60445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60445):map__60445);
var file_msg = map__60445__$1;
var request_url = cljs.core.get.call(null,map__60445__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__60445,map__60445__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__60445,map__60445__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__){
return (function (state_60469){
var state_val_60470 = (state_60469[(1)]);
if((state_val_60470 === (7))){
var inst_60465 = (state_60469[(2)]);
var state_60469__$1 = state_60469;
var statearr_60471_60488 = state_60469__$1;
(statearr_60471_60488[(2)] = inst_60465);

(statearr_60471_60488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (1))){
var state_60469__$1 = state_60469;
var statearr_60472_60489 = state_60469__$1;
(statearr_60472_60489[(2)] = null);

(statearr_60472_60489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (4))){
var inst_60449 = (state_60469[(7)]);
var inst_60449__$1 = (state_60469[(2)]);
var state_60469__$1 = (function (){var statearr_60473 = state_60469;
(statearr_60473[(7)] = inst_60449__$1);

return statearr_60473;
})();
if(cljs.core.truth_(inst_60449__$1)){
var statearr_60474_60490 = state_60469__$1;
(statearr_60474_60490[(1)] = (5));

} else {
var statearr_60475_60491 = state_60469__$1;
(statearr_60475_60491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (6))){
var state_60469__$1 = state_60469;
var statearr_60476_60492 = state_60469__$1;
(statearr_60476_60492[(2)] = null);

(statearr_60476_60492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (3))){
var inst_60467 = (state_60469[(2)]);
var state_60469__$1 = state_60469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60469__$1,inst_60467);
} else {
if((state_val_60470 === (2))){
var state_60469__$1 = state_60469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60469__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_60470 === (11))){
var inst_60461 = (state_60469[(2)]);
var state_60469__$1 = (function (){var statearr_60477 = state_60469;
(statearr_60477[(8)] = inst_60461);

return statearr_60477;
})();
var statearr_60478_60493 = state_60469__$1;
(statearr_60478_60493[(2)] = null);

(statearr_60478_60493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (9))){
var inst_60455 = (state_60469[(9)]);
var inst_60453 = (state_60469[(10)]);
var inst_60457 = inst_60455.call(null,inst_60453);
var state_60469__$1 = state_60469;
var statearr_60479_60494 = state_60469__$1;
(statearr_60479_60494[(2)] = inst_60457);

(statearr_60479_60494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (5))){
var inst_60449 = (state_60469[(7)]);
var inst_60451 = figwheel.client.file_reloading.blocking_load.call(null,inst_60449);
var state_60469__$1 = state_60469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60469__$1,(8),inst_60451);
} else {
if((state_val_60470 === (10))){
var inst_60453 = (state_60469[(10)]);
var inst_60459 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_60453);
var state_60469__$1 = state_60469;
var statearr_60480_60495 = state_60469__$1;
(statearr_60480_60495[(2)] = inst_60459);

(statearr_60480_60495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (8))){
var inst_60455 = (state_60469[(9)]);
var inst_60449 = (state_60469[(7)]);
var inst_60453 = (state_60469[(2)]);
var inst_60454 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_60455__$1 = cljs.core.get.call(null,inst_60454,inst_60449);
var state_60469__$1 = (function (){var statearr_60481 = state_60469;
(statearr_60481[(9)] = inst_60455__$1);

(statearr_60481[(10)] = inst_60453);

return statearr_60481;
})();
if(cljs.core.truth_(inst_60455__$1)){
var statearr_60482_60496 = state_60469__$1;
(statearr_60482_60496[(1)] = (9));

} else {
var statearr_60483_60497 = state_60469__$1;
(statearr_60483_60497[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__56389__auto__))
;
return ((function (switch__56299__auto__,c__56389__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__56300__auto__ = null;
var figwheel$client$file_reloading$state_machine__56300__auto____0 = (function (){
var statearr_60484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60484[(0)] = figwheel$client$file_reloading$state_machine__56300__auto__);

(statearr_60484[(1)] = (1));

return statearr_60484;
});
var figwheel$client$file_reloading$state_machine__56300__auto____1 = (function (state_60469){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_60469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e60485){if((e60485 instanceof Object)){
var ex__56303__auto__ = e60485;
var statearr_60486_60498 = state_60469;
(statearr_60486_60498[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60499 = state_60469;
state_60469 = G__60499;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__56300__auto__ = function(state_60469){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__56300__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__56300__auto____1.call(this,state_60469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__56300__auto____0;
figwheel$client$file_reloading$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__56300__auto____1;
return figwheel$client$file_reloading$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__))
})();
var state__56391__auto__ = (function (){var statearr_60487 = f__56390__auto__.call(null);
(statearr_60487[(6)] = c__56389__auto__);

return statearr_60487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__))
);

return c__56389__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__60500,callback){
var map__60501 = p__60500;
var map__60501__$1 = ((((!((map__60501 == null)))?((((map__60501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60501):map__60501);
var file_msg = map__60501__$1;
var namespace = cljs.core.get.call(null,map__60501__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__60501,map__60501__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__60501,map__60501__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__60503){
var map__60504 = p__60503;
var map__60504__$1 = ((((!((map__60504 == null)))?((((map__60504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60504):map__60504);
var file_msg = map__60504__$1;
var namespace = cljs.core.get.call(null,map__60504__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__60506){
var map__60507 = p__60506;
var map__60507__$1 = ((((!((map__60507 == null)))?((((map__60507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60507):map__60507);
var file_msg = map__60507__$1;
var namespace = cljs.core.get.call(null,map__60507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41384__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41384__auto__){
var or__41411__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41384__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__60509,callback){
var map__60510 = p__60509;
var map__60510__$1 = ((((!((map__60510 == null)))?((((map__60510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60510):map__60510);
var file_msg = map__60510__$1;
var request_url = cljs.core.get.call(null,map__60510__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__60510__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__56389__auto___60560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___60560,out){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___60560,out){
return (function (state_60545){
var state_val_60546 = (state_60545[(1)]);
if((state_val_60546 === (1))){
var inst_60519 = cljs.core.seq.call(null,files);
var inst_60520 = cljs.core.first.call(null,inst_60519);
var inst_60521 = cljs.core.next.call(null,inst_60519);
var inst_60522 = files;
var state_60545__$1 = (function (){var statearr_60547 = state_60545;
(statearr_60547[(7)] = inst_60521);

(statearr_60547[(8)] = inst_60522);

(statearr_60547[(9)] = inst_60520);

return statearr_60547;
})();
var statearr_60548_60561 = state_60545__$1;
(statearr_60548_60561[(2)] = null);

(statearr_60548_60561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (2))){
var inst_60522 = (state_60545[(8)]);
var inst_60528 = (state_60545[(10)]);
var inst_60527 = cljs.core.seq.call(null,inst_60522);
var inst_60528__$1 = cljs.core.first.call(null,inst_60527);
var inst_60529 = cljs.core.next.call(null,inst_60527);
var inst_60530 = (inst_60528__$1 == null);
var inst_60531 = cljs.core.not.call(null,inst_60530);
var state_60545__$1 = (function (){var statearr_60549 = state_60545;
(statearr_60549[(11)] = inst_60529);

(statearr_60549[(10)] = inst_60528__$1);

return statearr_60549;
})();
if(inst_60531){
var statearr_60550_60562 = state_60545__$1;
(statearr_60550_60562[(1)] = (4));

} else {
var statearr_60551_60563 = state_60545__$1;
(statearr_60551_60563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (3))){
var inst_60543 = (state_60545[(2)]);
var state_60545__$1 = state_60545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60545__$1,inst_60543);
} else {
if((state_val_60546 === (4))){
var inst_60528 = (state_60545[(10)]);
var inst_60533 = figwheel.client.file_reloading.reload_js_file.call(null,inst_60528);
var state_60545__$1 = state_60545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60545__$1,(7),inst_60533);
} else {
if((state_val_60546 === (5))){
var inst_60539 = cljs.core.async.close_BANG_.call(null,out);
var state_60545__$1 = state_60545;
var statearr_60552_60564 = state_60545__$1;
(statearr_60552_60564[(2)] = inst_60539);

(statearr_60552_60564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (6))){
var inst_60541 = (state_60545[(2)]);
var state_60545__$1 = state_60545;
var statearr_60553_60565 = state_60545__$1;
(statearr_60553_60565[(2)] = inst_60541);

(statearr_60553_60565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60546 === (7))){
var inst_60529 = (state_60545[(11)]);
var inst_60535 = (state_60545[(2)]);
var inst_60536 = cljs.core.async.put_BANG_.call(null,out,inst_60535);
var inst_60522 = inst_60529;
var state_60545__$1 = (function (){var statearr_60554 = state_60545;
(statearr_60554[(8)] = inst_60522);

(statearr_60554[(12)] = inst_60536);

return statearr_60554;
})();
var statearr_60555_60566 = state_60545__$1;
(statearr_60555_60566[(2)] = null);

(statearr_60555_60566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__56389__auto___60560,out))
;
return ((function (switch__56299__auto__,c__56389__auto___60560,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto____0 = (function (){
var statearr_60556 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60556[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto__);

(statearr_60556[(1)] = (1));

return statearr_60556;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto____1 = (function (state_60545){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_60545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e60557){if((e60557 instanceof Object)){
var ex__56303__auto__ = e60557;
var statearr_60558_60567 = state_60545;
(statearr_60558_60567[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60568 = state_60545;
state_60545 = G__60568;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto__ = function(state_60545){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto____1.call(this,state_60545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___60560,out))
})();
var state__56391__auto__ = (function (){var statearr_60559 = f__56390__auto__.call(null);
(statearr_60559[(6)] = c__56389__auto___60560);

return statearr_60559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___60560,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__60569,opts){
var map__60570 = p__60569;
var map__60570__$1 = ((((!((map__60570 == null)))?((((map__60570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60570):map__60570);
var eval_body = cljs.core.get.call(null,map__60570__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__60570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41384__auto__ = eval_body;
if(cljs.core.truth_(and__41384__auto__)){
return typeof eval_body === 'string';
} else {
return and__41384__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e60572){var e = e60572;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__60573_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__60573_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__60574){
var vec__60575 = p__60574;
var k = cljs.core.nth.call(null,vec__60575,(0),null);
var v = cljs.core.nth.call(null,vec__60575,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__60578){
var vec__60579 = p__60578;
var k = cljs.core.nth.call(null,vec__60579,(0),null);
var v = cljs.core.nth.call(null,vec__60579,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__60585,p__60586){
var map__60587 = p__60585;
var map__60587__$1 = ((((!((map__60587 == null)))?((((map__60587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60587):map__60587);
var opts = map__60587__$1;
var before_jsload = cljs.core.get.call(null,map__60587__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__60587__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__60587__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__60588 = p__60586;
var map__60588__$1 = ((((!((map__60588 == null)))?((((map__60588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60588):map__60588);
var msg = map__60588__$1;
var files = cljs.core.get.call(null,map__60588__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__60588__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__60588__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_60742){
var state_val_60743 = (state_60742[(1)]);
if((state_val_60743 === (7))){
var inst_60605 = (state_60742[(7)]);
var inst_60602 = (state_60742[(8)]);
var inst_60603 = (state_60742[(9)]);
var inst_60604 = (state_60742[(10)]);
var inst_60610 = cljs.core._nth.call(null,inst_60603,inst_60605);
var inst_60611 = figwheel.client.file_reloading.eval_body.call(null,inst_60610,opts);
var inst_60612 = (inst_60605 + (1));
var tmp60744 = inst_60602;
var tmp60745 = inst_60603;
var tmp60746 = inst_60604;
var inst_60602__$1 = tmp60744;
var inst_60603__$1 = tmp60745;
var inst_60604__$1 = tmp60746;
var inst_60605__$1 = inst_60612;
var state_60742__$1 = (function (){var statearr_60747 = state_60742;
(statearr_60747[(7)] = inst_60605__$1);

(statearr_60747[(8)] = inst_60602__$1);

(statearr_60747[(11)] = inst_60611);

(statearr_60747[(9)] = inst_60603__$1);

(statearr_60747[(10)] = inst_60604__$1);

return statearr_60747;
})();
var statearr_60748_60831 = state_60742__$1;
(statearr_60748_60831[(2)] = null);

(statearr_60748_60831[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (20))){
var inst_60645 = (state_60742[(12)]);
var inst_60653 = figwheel.client.file_reloading.sort_files.call(null,inst_60645);
var state_60742__$1 = state_60742;
var statearr_60749_60832 = state_60742__$1;
(statearr_60749_60832[(2)] = inst_60653);

(statearr_60749_60832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (27))){
var state_60742__$1 = state_60742;
var statearr_60750_60833 = state_60742__$1;
(statearr_60750_60833[(2)] = null);

(statearr_60750_60833[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (1))){
var inst_60594 = (state_60742[(13)]);
var inst_60591 = before_jsload.call(null,files);
var inst_60592 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_60593 = (function (){return ((function (inst_60594,inst_60591,inst_60592,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60582_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__60582_SHARP_);
});
;})(inst_60594,inst_60591,inst_60592,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60594__$1 = cljs.core.filter.call(null,inst_60593,files);
var inst_60595 = cljs.core.not_empty.call(null,inst_60594__$1);
var state_60742__$1 = (function (){var statearr_60751 = state_60742;
(statearr_60751[(14)] = inst_60591);

(statearr_60751[(13)] = inst_60594__$1);

(statearr_60751[(15)] = inst_60592);

return statearr_60751;
})();
if(cljs.core.truth_(inst_60595)){
var statearr_60752_60834 = state_60742__$1;
(statearr_60752_60834[(1)] = (2));

} else {
var statearr_60753_60835 = state_60742__$1;
(statearr_60753_60835[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (24))){
var state_60742__$1 = state_60742;
var statearr_60754_60836 = state_60742__$1;
(statearr_60754_60836[(2)] = null);

(statearr_60754_60836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (39))){
var inst_60695 = (state_60742[(16)]);
var state_60742__$1 = state_60742;
var statearr_60755_60837 = state_60742__$1;
(statearr_60755_60837[(2)] = inst_60695);

(statearr_60755_60837[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (46))){
var inst_60737 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
var statearr_60756_60838 = state_60742__$1;
(statearr_60756_60838[(2)] = inst_60737);

(statearr_60756_60838[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (4))){
var inst_60639 = (state_60742[(2)]);
var inst_60640 = cljs.core.List.EMPTY;
var inst_60641 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_60640);
var inst_60642 = (function (){return ((function (inst_60639,inst_60640,inst_60641,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60583_SHARP_){
var and__41384__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__60583_SHARP_);
if(cljs.core.truth_(and__41384__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__60583_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__60583_SHARP_)));
} else {
return and__41384__auto__;
}
});
;})(inst_60639,inst_60640,inst_60641,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60643 = cljs.core.filter.call(null,inst_60642,files);
var inst_60644 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_60645 = cljs.core.concat.call(null,inst_60643,inst_60644);
var state_60742__$1 = (function (){var statearr_60757 = state_60742;
(statearr_60757[(17)] = inst_60639);

(statearr_60757[(18)] = inst_60641);

(statearr_60757[(12)] = inst_60645);

return statearr_60757;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_60758_60839 = state_60742__$1;
(statearr_60758_60839[(1)] = (16));

} else {
var statearr_60759_60840 = state_60742__$1;
(statearr_60759_60840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (15))){
var inst_60629 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
var statearr_60760_60841 = state_60742__$1;
(statearr_60760_60841[(2)] = inst_60629);

(statearr_60760_60841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (21))){
var inst_60655 = (state_60742[(19)]);
var inst_60655__$1 = (state_60742[(2)]);
var inst_60656 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_60655__$1);
var state_60742__$1 = (function (){var statearr_60761 = state_60742;
(statearr_60761[(19)] = inst_60655__$1);

return statearr_60761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60742__$1,(22),inst_60656);
} else {
if((state_val_60743 === (31))){
var inst_60740 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60742__$1,inst_60740);
} else {
if((state_val_60743 === (32))){
var inst_60695 = (state_60742[(16)]);
var inst_60700 = inst_60695.cljs$lang$protocol_mask$partition0$;
var inst_60701 = (inst_60700 & (64));
var inst_60702 = inst_60695.cljs$core$ISeq$;
var inst_60703 = (cljs.core.PROTOCOL_SENTINEL === inst_60702);
var inst_60704 = (inst_60701) || (inst_60703);
var state_60742__$1 = state_60742;
if(cljs.core.truth_(inst_60704)){
var statearr_60762_60842 = state_60742__$1;
(statearr_60762_60842[(1)] = (35));

} else {
var statearr_60763_60843 = state_60742__$1;
(statearr_60763_60843[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (40))){
var inst_60717 = (state_60742[(20)]);
var inst_60716 = (state_60742[(2)]);
var inst_60717__$1 = cljs.core.get.call(null,inst_60716,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_60718 = cljs.core.get.call(null,inst_60716,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_60719 = cljs.core.not_empty.call(null,inst_60717__$1);
var state_60742__$1 = (function (){var statearr_60764 = state_60742;
(statearr_60764[(20)] = inst_60717__$1);

(statearr_60764[(21)] = inst_60718);

return statearr_60764;
})();
if(cljs.core.truth_(inst_60719)){
var statearr_60765_60844 = state_60742__$1;
(statearr_60765_60844[(1)] = (41));

} else {
var statearr_60766_60845 = state_60742__$1;
(statearr_60766_60845[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (33))){
var state_60742__$1 = state_60742;
var statearr_60767_60846 = state_60742__$1;
(statearr_60767_60846[(2)] = false);

(statearr_60767_60846[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (13))){
var inst_60615 = (state_60742[(22)]);
var inst_60619 = cljs.core.chunk_first.call(null,inst_60615);
var inst_60620 = cljs.core.chunk_rest.call(null,inst_60615);
var inst_60621 = cljs.core.count.call(null,inst_60619);
var inst_60602 = inst_60620;
var inst_60603 = inst_60619;
var inst_60604 = inst_60621;
var inst_60605 = (0);
var state_60742__$1 = (function (){var statearr_60768 = state_60742;
(statearr_60768[(7)] = inst_60605);

(statearr_60768[(8)] = inst_60602);

(statearr_60768[(9)] = inst_60603);

(statearr_60768[(10)] = inst_60604);

return statearr_60768;
})();
var statearr_60769_60847 = state_60742__$1;
(statearr_60769_60847[(2)] = null);

(statearr_60769_60847[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (22))){
var inst_60655 = (state_60742[(19)]);
var inst_60659 = (state_60742[(23)]);
var inst_60663 = (state_60742[(24)]);
var inst_60658 = (state_60742[(25)]);
var inst_60658__$1 = (state_60742[(2)]);
var inst_60659__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60658__$1);
var inst_60660 = (function (){var all_files = inst_60655;
var res_SINGLEQUOTE_ = inst_60658__$1;
var res = inst_60659__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_60655,inst_60659,inst_60663,inst_60658,inst_60658__$1,inst_60659__$1,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__60584_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__60584_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_60655,inst_60659,inst_60663,inst_60658,inst_60658__$1,inst_60659__$1,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60661 = cljs.core.filter.call(null,inst_60660,inst_60658__$1);
var inst_60662 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_60663__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_60662);
var inst_60664 = cljs.core.not_empty.call(null,inst_60663__$1);
var state_60742__$1 = (function (){var statearr_60770 = state_60742;
(statearr_60770[(23)] = inst_60659__$1);

(statearr_60770[(26)] = inst_60661);

(statearr_60770[(24)] = inst_60663__$1);

(statearr_60770[(25)] = inst_60658__$1);

return statearr_60770;
})();
if(cljs.core.truth_(inst_60664)){
var statearr_60771_60848 = state_60742__$1;
(statearr_60771_60848[(1)] = (23));

} else {
var statearr_60772_60849 = state_60742__$1;
(statearr_60772_60849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (36))){
var state_60742__$1 = state_60742;
var statearr_60773_60850 = state_60742__$1;
(statearr_60773_60850[(2)] = false);

(statearr_60773_60850[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (41))){
var inst_60717 = (state_60742[(20)]);
var inst_60721 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_60722 = cljs.core.map.call(null,inst_60721,inst_60717);
var inst_60723 = cljs.core.pr_str.call(null,inst_60722);
var inst_60724 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60723)].join('');
var inst_60725 = figwheel.client.utils.log.call(null,inst_60724);
var state_60742__$1 = state_60742;
var statearr_60774_60851 = state_60742__$1;
(statearr_60774_60851[(2)] = inst_60725);

(statearr_60774_60851[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (43))){
var inst_60718 = (state_60742[(21)]);
var inst_60728 = (state_60742[(2)]);
var inst_60729 = cljs.core.not_empty.call(null,inst_60718);
var state_60742__$1 = (function (){var statearr_60775 = state_60742;
(statearr_60775[(27)] = inst_60728);

return statearr_60775;
})();
if(cljs.core.truth_(inst_60729)){
var statearr_60776_60852 = state_60742__$1;
(statearr_60776_60852[(1)] = (44));

} else {
var statearr_60777_60853 = state_60742__$1;
(statearr_60777_60853[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (29))){
var inst_60655 = (state_60742[(19)]);
var inst_60659 = (state_60742[(23)]);
var inst_60661 = (state_60742[(26)]);
var inst_60695 = (state_60742[(16)]);
var inst_60663 = (state_60742[(24)]);
var inst_60658 = (state_60742[(25)]);
var inst_60691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_60694 = (function (){var all_files = inst_60655;
var res_SINGLEQUOTE_ = inst_60658;
var res = inst_60659;
var files_not_loaded = inst_60661;
var dependencies_that_loaded = inst_60663;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60655,inst_60659,inst_60661,inst_60695,inst_60663,inst_60658,inst_60691,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60693){
var map__60778 = p__60693;
var map__60778__$1 = ((((!((map__60778 == null)))?((((map__60778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60778):map__60778);
var namespace = cljs.core.get.call(null,map__60778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60655,inst_60659,inst_60661,inst_60695,inst_60663,inst_60658,inst_60691,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60695__$1 = cljs.core.group_by.call(null,inst_60694,inst_60661);
var inst_60697 = (inst_60695__$1 == null);
var inst_60698 = cljs.core.not.call(null,inst_60697);
var state_60742__$1 = (function (){var statearr_60780 = state_60742;
(statearr_60780[(28)] = inst_60691);

(statearr_60780[(16)] = inst_60695__$1);

return statearr_60780;
})();
if(inst_60698){
var statearr_60781_60854 = state_60742__$1;
(statearr_60781_60854[(1)] = (32));

} else {
var statearr_60782_60855 = state_60742__$1;
(statearr_60782_60855[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (44))){
var inst_60718 = (state_60742[(21)]);
var inst_60731 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_60718);
var inst_60732 = cljs.core.pr_str.call(null,inst_60731);
var inst_60733 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60732)].join('');
var inst_60734 = figwheel.client.utils.log.call(null,inst_60733);
var state_60742__$1 = state_60742;
var statearr_60783_60856 = state_60742__$1;
(statearr_60783_60856[(2)] = inst_60734);

(statearr_60783_60856[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (6))){
var inst_60636 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
var statearr_60784_60857 = state_60742__$1;
(statearr_60784_60857[(2)] = inst_60636);

(statearr_60784_60857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (28))){
var inst_60661 = (state_60742[(26)]);
var inst_60688 = (state_60742[(2)]);
var inst_60689 = cljs.core.not_empty.call(null,inst_60661);
var state_60742__$1 = (function (){var statearr_60785 = state_60742;
(statearr_60785[(29)] = inst_60688);

return statearr_60785;
})();
if(cljs.core.truth_(inst_60689)){
var statearr_60786_60858 = state_60742__$1;
(statearr_60786_60858[(1)] = (29));

} else {
var statearr_60787_60859 = state_60742__$1;
(statearr_60787_60859[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (25))){
var inst_60659 = (state_60742[(23)]);
var inst_60675 = (state_60742[(2)]);
var inst_60676 = cljs.core.not_empty.call(null,inst_60659);
var state_60742__$1 = (function (){var statearr_60788 = state_60742;
(statearr_60788[(30)] = inst_60675);

return statearr_60788;
})();
if(cljs.core.truth_(inst_60676)){
var statearr_60789_60860 = state_60742__$1;
(statearr_60789_60860[(1)] = (26));

} else {
var statearr_60790_60861 = state_60742__$1;
(statearr_60790_60861[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (34))){
var inst_60711 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
if(cljs.core.truth_(inst_60711)){
var statearr_60791_60862 = state_60742__$1;
(statearr_60791_60862[(1)] = (38));

} else {
var statearr_60792_60863 = state_60742__$1;
(statearr_60792_60863[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (17))){
var state_60742__$1 = state_60742;
var statearr_60793_60864 = state_60742__$1;
(statearr_60793_60864[(2)] = recompile_dependents);

(statearr_60793_60864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (3))){
var state_60742__$1 = state_60742;
var statearr_60794_60865 = state_60742__$1;
(statearr_60794_60865[(2)] = null);

(statearr_60794_60865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (12))){
var inst_60632 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
var statearr_60795_60866 = state_60742__$1;
(statearr_60795_60866[(2)] = inst_60632);

(statearr_60795_60866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (2))){
var inst_60594 = (state_60742[(13)]);
var inst_60601 = cljs.core.seq.call(null,inst_60594);
var inst_60602 = inst_60601;
var inst_60603 = null;
var inst_60604 = (0);
var inst_60605 = (0);
var state_60742__$1 = (function (){var statearr_60796 = state_60742;
(statearr_60796[(7)] = inst_60605);

(statearr_60796[(8)] = inst_60602);

(statearr_60796[(9)] = inst_60603);

(statearr_60796[(10)] = inst_60604);

return statearr_60796;
})();
var statearr_60797_60867 = state_60742__$1;
(statearr_60797_60867[(2)] = null);

(statearr_60797_60867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (23))){
var inst_60655 = (state_60742[(19)]);
var inst_60659 = (state_60742[(23)]);
var inst_60661 = (state_60742[(26)]);
var inst_60663 = (state_60742[(24)]);
var inst_60658 = (state_60742[(25)]);
var inst_60666 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_60668 = (function (){var all_files = inst_60655;
var res_SINGLEQUOTE_ = inst_60658;
var res = inst_60659;
var files_not_loaded = inst_60661;
var dependencies_that_loaded = inst_60663;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60655,inst_60659,inst_60661,inst_60663,inst_60658,inst_60666,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60667){
var map__60798 = p__60667;
var map__60798__$1 = ((((!((map__60798 == null)))?((((map__60798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60798):map__60798);
var request_url = cljs.core.get.call(null,map__60798__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60655,inst_60659,inst_60661,inst_60663,inst_60658,inst_60666,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60669 = cljs.core.reverse.call(null,inst_60663);
var inst_60670 = cljs.core.map.call(null,inst_60668,inst_60669);
var inst_60671 = cljs.core.pr_str.call(null,inst_60670);
var inst_60672 = figwheel.client.utils.log.call(null,inst_60671);
var state_60742__$1 = (function (){var statearr_60800 = state_60742;
(statearr_60800[(31)] = inst_60666);

return statearr_60800;
})();
var statearr_60801_60868 = state_60742__$1;
(statearr_60801_60868[(2)] = inst_60672);

(statearr_60801_60868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (35))){
var state_60742__$1 = state_60742;
var statearr_60802_60869 = state_60742__$1;
(statearr_60802_60869[(2)] = true);

(statearr_60802_60869[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (19))){
var inst_60645 = (state_60742[(12)]);
var inst_60651 = figwheel.client.file_reloading.expand_files.call(null,inst_60645);
var state_60742__$1 = state_60742;
var statearr_60803_60870 = state_60742__$1;
(statearr_60803_60870[(2)] = inst_60651);

(statearr_60803_60870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (11))){
var state_60742__$1 = state_60742;
var statearr_60804_60871 = state_60742__$1;
(statearr_60804_60871[(2)] = null);

(statearr_60804_60871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (9))){
var inst_60634 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
var statearr_60805_60872 = state_60742__$1;
(statearr_60805_60872[(2)] = inst_60634);

(statearr_60805_60872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (5))){
var inst_60605 = (state_60742[(7)]);
var inst_60604 = (state_60742[(10)]);
var inst_60607 = (inst_60605 < inst_60604);
var inst_60608 = inst_60607;
var state_60742__$1 = state_60742;
if(cljs.core.truth_(inst_60608)){
var statearr_60806_60873 = state_60742__$1;
(statearr_60806_60873[(1)] = (7));

} else {
var statearr_60807_60874 = state_60742__$1;
(statearr_60807_60874[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (14))){
var inst_60615 = (state_60742[(22)]);
var inst_60624 = cljs.core.first.call(null,inst_60615);
var inst_60625 = figwheel.client.file_reloading.eval_body.call(null,inst_60624,opts);
var inst_60626 = cljs.core.next.call(null,inst_60615);
var inst_60602 = inst_60626;
var inst_60603 = null;
var inst_60604 = (0);
var inst_60605 = (0);
var state_60742__$1 = (function (){var statearr_60808 = state_60742;
(statearr_60808[(7)] = inst_60605);

(statearr_60808[(8)] = inst_60602);

(statearr_60808[(32)] = inst_60625);

(statearr_60808[(9)] = inst_60603);

(statearr_60808[(10)] = inst_60604);

return statearr_60808;
})();
var statearr_60809_60875 = state_60742__$1;
(statearr_60809_60875[(2)] = null);

(statearr_60809_60875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (45))){
var state_60742__$1 = state_60742;
var statearr_60810_60876 = state_60742__$1;
(statearr_60810_60876[(2)] = null);

(statearr_60810_60876[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (26))){
var inst_60655 = (state_60742[(19)]);
var inst_60659 = (state_60742[(23)]);
var inst_60661 = (state_60742[(26)]);
var inst_60663 = (state_60742[(24)]);
var inst_60658 = (state_60742[(25)]);
var inst_60678 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_60680 = (function (){var all_files = inst_60655;
var res_SINGLEQUOTE_ = inst_60658;
var res = inst_60659;
var files_not_loaded = inst_60661;
var dependencies_that_loaded = inst_60663;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60655,inst_60659,inst_60661,inst_60663,inst_60658,inst_60678,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__60679){
var map__60811 = p__60679;
var map__60811__$1 = ((((!((map__60811 == null)))?((((map__60811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60811):map__60811);
var namespace = cljs.core.get.call(null,map__60811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__60811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60655,inst_60659,inst_60661,inst_60663,inst_60658,inst_60678,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60681 = cljs.core.map.call(null,inst_60680,inst_60659);
var inst_60682 = cljs.core.pr_str.call(null,inst_60681);
var inst_60683 = figwheel.client.utils.log.call(null,inst_60682);
var inst_60684 = (function (){var all_files = inst_60655;
var res_SINGLEQUOTE_ = inst_60658;
var res = inst_60659;
var files_not_loaded = inst_60661;
var dependencies_that_loaded = inst_60663;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60655,inst_60659,inst_60661,inst_60663,inst_60658,inst_60678,inst_60680,inst_60681,inst_60682,inst_60683,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_60655,inst_60659,inst_60661,inst_60663,inst_60658,inst_60678,inst_60680,inst_60681,inst_60682,inst_60683,state_val_60743,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_60685 = setTimeout(inst_60684,(10));
var state_60742__$1 = (function (){var statearr_60813 = state_60742;
(statearr_60813[(33)] = inst_60678);

(statearr_60813[(34)] = inst_60683);

return statearr_60813;
})();
var statearr_60814_60877 = state_60742__$1;
(statearr_60814_60877[(2)] = inst_60685);

(statearr_60814_60877[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (16))){
var state_60742__$1 = state_60742;
var statearr_60815_60878 = state_60742__$1;
(statearr_60815_60878[(2)] = reload_dependents);

(statearr_60815_60878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (38))){
var inst_60695 = (state_60742[(16)]);
var inst_60713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_60695);
var state_60742__$1 = state_60742;
var statearr_60816_60879 = state_60742__$1;
(statearr_60816_60879[(2)] = inst_60713);

(statearr_60816_60879[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (30))){
var state_60742__$1 = state_60742;
var statearr_60817_60880 = state_60742__$1;
(statearr_60817_60880[(2)] = null);

(statearr_60817_60880[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (10))){
var inst_60615 = (state_60742[(22)]);
var inst_60617 = cljs.core.chunked_seq_QMARK_.call(null,inst_60615);
var state_60742__$1 = state_60742;
if(inst_60617){
var statearr_60818_60881 = state_60742__$1;
(statearr_60818_60881[(1)] = (13));

} else {
var statearr_60819_60882 = state_60742__$1;
(statearr_60819_60882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (18))){
var inst_60649 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
if(cljs.core.truth_(inst_60649)){
var statearr_60820_60883 = state_60742__$1;
(statearr_60820_60883[(1)] = (19));

} else {
var statearr_60821_60884 = state_60742__$1;
(statearr_60821_60884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (42))){
var state_60742__$1 = state_60742;
var statearr_60822_60885 = state_60742__$1;
(statearr_60822_60885[(2)] = null);

(statearr_60822_60885[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (37))){
var inst_60708 = (state_60742[(2)]);
var state_60742__$1 = state_60742;
var statearr_60823_60886 = state_60742__$1;
(statearr_60823_60886[(2)] = inst_60708);

(statearr_60823_60886[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60743 === (8))){
var inst_60602 = (state_60742[(8)]);
var inst_60615 = (state_60742[(22)]);
var inst_60615__$1 = cljs.core.seq.call(null,inst_60602);
var state_60742__$1 = (function (){var statearr_60824 = state_60742;
(statearr_60824[(22)] = inst_60615__$1);

return statearr_60824;
})();
if(inst_60615__$1){
var statearr_60825_60887 = state_60742__$1;
(statearr_60825_60887[(1)] = (10));

} else {
var statearr_60826_60888 = state_60742__$1;
(statearr_60826_60888[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__56299__auto__,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto____0 = (function (){
var statearr_60827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60827[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto__);

(statearr_60827[(1)] = (1));

return statearr_60827;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto____1 = (function (state_60742){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_60742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e60828){if((e60828 instanceof Object)){
var ex__56303__auto__ = e60828;
var statearr_60829_60889 = state_60742;
(statearr_60829_60889[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60890 = state_60742;
state_60742 = G__60890;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto__ = function(state_60742){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto____1.call(this,state_60742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__56391__auto__ = (function (){var statearr_60830 = f__56390__auto__.call(null);
(statearr_60830[(6)] = c__56389__auto__);

return statearr_60830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__,map__60587,map__60587__$1,opts,before_jsload,on_jsload,reload_dependents,map__60588,map__60588__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__56389__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__60893,link){
var map__60894 = p__60893;
var map__60894__$1 = ((((!((map__60894 == null)))?((((map__60894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60894.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60894):map__60894);
var file = cljs.core.get.call(null,map__60894__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__60894,map__60894__$1,file){
return (function (p1__60891_SHARP_,p2__60892_SHARP_){
if(cljs.core._EQ_.call(null,p1__60891_SHARP_,p2__60892_SHARP_)){
return p1__60891_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__60894,map__60894__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__60897){
var map__60898 = p__60897;
var map__60898__$1 = ((((!((map__60898 == null)))?((((map__60898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60898.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60898):map__60898);
var match_length = cljs.core.get.call(null,map__60898__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__60898__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__60896_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__60896_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__60900_SHARP_,p2__60901_SHARP_){
return cljs.core.assoc.call(null,p1__60900_SHARP_,cljs.core.get.call(null,p2__60901_SHARP_,key),p2__60901_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_60902 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_60902);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_60902);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__60903,p__60904){
var map__60905 = p__60903;
var map__60905__$1 = ((((!((map__60905 == null)))?((((map__60905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60905):map__60905);
var on_cssload = cljs.core.get.call(null,map__60905__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__60906 = p__60904;
var map__60906__$1 = ((((!((map__60906 == null)))?((((map__60906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60906):map__60906);
var files_msg = map__60906__$1;
var files = cljs.core.get.call(null,map__60906__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1512631541926
