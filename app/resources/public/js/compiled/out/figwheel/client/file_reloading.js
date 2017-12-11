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
var or__41331__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41331__auto__){
return or__41331__auto__;
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
var or__41331__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
} else {
var or__41331__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__41331__auto____$1)){
return or__41331__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__53999_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__53999_SHARP_));
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
var seq__54000 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54001 = null;
var count__54002 = (0);
var i__54003 = (0);
while(true){
if((i__54003 < count__54002)){
var n = cljs.core._nth.call(null,chunk__54001,i__54003);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54004 = seq__54000;
var G__54005 = chunk__54001;
var G__54006 = count__54002;
var G__54007 = (i__54003 + (1));
seq__54000 = G__54004;
chunk__54001 = G__54005;
count__54002 = G__54006;
i__54003 = G__54007;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54000);
if(temp__5457__auto__){
var seq__54000__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54000__$1)){
var c__43322__auto__ = cljs.core.chunk_first.call(null,seq__54000__$1);
var G__54008 = cljs.core.chunk_rest.call(null,seq__54000__$1);
var G__54009 = c__43322__auto__;
var G__54010 = cljs.core.count.call(null,c__43322__auto__);
var G__54011 = (0);
seq__54000 = G__54008;
chunk__54001 = G__54009;
count__54002 = G__54010;
i__54003 = G__54011;
continue;
} else {
var n = cljs.core.first.call(null,seq__54000__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54012 = cljs.core.next.call(null,seq__54000__$1);
var G__54013 = null;
var G__54014 = (0);
var G__54015 = (0);
seq__54000 = G__54012;
chunk__54001 = G__54013;
count__54002 = G__54014;
i__54003 = G__54015;
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

var seq__54025_54033 = cljs.core.seq.call(null,deps);
var chunk__54026_54034 = null;
var count__54027_54035 = (0);
var i__54028_54036 = (0);
while(true){
if((i__54028_54036 < count__54027_54035)){
var dep_54037 = cljs.core._nth.call(null,chunk__54026_54034,i__54028_54036);
topo_sort_helper_STAR_.call(null,dep_54037,(depth + (1)),state);

var G__54038 = seq__54025_54033;
var G__54039 = chunk__54026_54034;
var G__54040 = count__54027_54035;
var G__54041 = (i__54028_54036 + (1));
seq__54025_54033 = G__54038;
chunk__54026_54034 = G__54039;
count__54027_54035 = G__54040;
i__54028_54036 = G__54041;
continue;
} else {
var temp__5457__auto___54042 = cljs.core.seq.call(null,seq__54025_54033);
if(temp__5457__auto___54042){
var seq__54025_54043__$1 = temp__5457__auto___54042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54025_54043__$1)){
var c__43322__auto___54044 = cljs.core.chunk_first.call(null,seq__54025_54043__$1);
var G__54045 = cljs.core.chunk_rest.call(null,seq__54025_54043__$1);
var G__54046 = c__43322__auto___54044;
var G__54047 = cljs.core.count.call(null,c__43322__auto___54044);
var G__54048 = (0);
seq__54025_54033 = G__54045;
chunk__54026_54034 = G__54046;
count__54027_54035 = G__54047;
i__54028_54036 = G__54048;
continue;
} else {
var dep_54049 = cljs.core.first.call(null,seq__54025_54043__$1);
topo_sort_helper_STAR_.call(null,dep_54049,(depth + (1)),state);

var G__54050 = cljs.core.next.call(null,seq__54025_54043__$1);
var G__54051 = null;
var G__54052 = (0);
var G__54053 = (0);
seq__54025_54033 = G__54050;
chunk__54026_54034 = G__54051;
count__54027_54035 = G__54052;
i__54028_54036 = G__54053;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54029){
var vec__54030 = p__54029;
var seq__54031 = cljs.core.seq.call(null,vec__54030);
var first__54032 = cljs.core.first.call(null,seq__54031);
var seq__54031__$1 = cljs.core.next.call(null,seq__54031);
var x = first__54032;
var xs = seq__54031__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54030,seq__54031,first__54032,seq__54031__$1,x,xs,get_deps__$1){
return (function (p1__54016_SHARP_){
return clojure.set.difference.call(null,p1__54016_SHARP_,x);
});})(vec__54030,seq__54031,first__54032,seq__54031__$1,x,xs,get_deps__$1))
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
var seq__54054 = cljs.core.seq.call(null,provides);
var chunk__54055 = null;
var count__54056 = (0);
var i__54057 = (0);
while(true){
if((i__54057 < count__54056)){
var prov = cljs.core._nth.call(null,chunk__54055,i__54057);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54058_54066 = cljs.core.seq.call(null,requires);
var chunk__54059_54067 = null;
var count__54060_54068 = (0);
var i__54061_54069 = (0);
while(true){
if((i__54061_54069 < count__54060_54068)){
var req_54070 = cljs.core._nth.call(null,chunk__54059_54067,i__54061_54069);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54070,prov);

var G__54071 = seq__54058_54066;
var G__54072 = chunk__54059_54067;
var G__54073 = count__54060_54068;
var G__54074 = (i__54061_54069 + (1));
seq__54058_54066 = G__54071;
chunk__54059_54067 = G__54072;
count__54060_54068 = G__54073;
i__54061_54069 = G__54074;
continue;
} else {
var temp__5457__auto___54075 = cljs.core.seq.call(null,seq__54058_54066);
if(temp__5457__auto___54075){
var seq__54058_54076__$1 = temp__5457__auto___54075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54058_54076__$1)){
var c__43322__auto___54077 = cljs.core.chunk_first.call(null,seq__54058_54076__$1);
var G__54078 = cljs.core.chunk_rest.call(null,seq__54058_54076__$1);
var G__54079 = c__43322__auto___54077;
var G__54080 = cljs.core.count.call(null,c__43322__auto___54077);
var G__54081 = (0);
seq__54058_54066 = G__54078;
chunk__54059_54067 = G__54079;
count__54060_54068 = G__54080;
i__54061_54069 = G__54081;
continue;
} else {
var req_54082 = cljs.core.first.call(null,seq__54058_54076__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54082,prov);

var G__54083 = cljs.core.next.call(null,seq__54058_54076__$1);
var G__54084 = null;
var G__54085 = (0);
var G__54086 = (0);
seq__54058_54066 = G__54083;
chunk__54059_54067 = G__54084;
count__54060_54068 = G__54085;
i__54061_54069 = G__54086;
continue;
}
} else {
}
}
break;
}

var G__54087 = seq__54054;
var G__54088 = chunk__54055;
var G__54089 = count__54056;
var G__54090 = (i__54057 + (1));
seq__54054 = G__54087;
chunk__54055 = G__54088;
count__54056 = G__54089;
i__54057 = G__54090;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54054);
if(temp__5457__auto__){
var seq__54054__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54054__$1)){
var c__43322__auto__ = cljs.core.chunk_first.call(null,seq__54054__$1);
var G__54091 = cljs.core.chunk_rest.call(null,seq__54054__$1);
var G__54092 = c__43322__auto__;
var G__54093 = cljs.core.count.call(null,c__43322__auto__);
var G__54094 = (0);
seq__54054 = G__54091;
chunk__54055 = G__54092;
count__54056 = G__54093;
i__54057 = G__54094;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54054__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54062_54095 = cljs.core.seq.call(null,requires);
var chunk__54063_54096 = null;
var count__54064_54097 = (0);
var i__54065_54098 = (0);
while(true){
if((i__54065_54098 < count__54064_54097)){
var req_54099 = cljs.core._nth.call(null,chunk__54063_54096,i__54065_54098);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54099,prov);

var G__54100 = seq__54062_54095;
var G__54101 = chunk__54063_54096;
var G__54102 = count__54064_54097;
var G__54103 = (i__54065_54098 + (1));
seq__54062_54095 = G__54100;
chunk__54063_54096 = G__54101;
count__54064_54097 = G__54102;
i__54065_54098 = G__54103;
continue;
} else {
var temp__5457__auto___54104__$1 = cljs.core.seq.call(null,seq__54062_54095);
if(temp__5457__auto___54104__$1){
var seq__54062_54105__$1 = temp__5457__auto___54104__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54062_54105__$1)){
var c__43322__auto___54106 = cljs.core.chunk_first.call(null,seq__54062_54105__$1);
var G__54107 = cljs.core.chunk_rest.call(null,seq__54062_54105__$1);
var G__54108 = c__43322__auto___54106;
var G__54109 = cljs.core.count.call(null,c__43322__auto___54106);
var G__54110 = (0);
seq__54062_54095 = G__54107;
chunk__54063_54096 = G__54108;
count__54064_54097 = G__54109;
i__54065_54098 = G__54110;
continue;
} else {
var req_54111 = cljs.core.first.call(null,seq__54062_54105__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54111,prov);

var G__54112 = cljs.core.next.call(null,seq__54062_54105__$1);
var G__54113 = null;
var G__54114 = (0);
var G__54115 = (0);
seq__54062_54095 = G__54112;
chunk__54063_54096 = G__54113;
count__54064_54097 = G__54114;
i__54065_54098 = G__54115;
continue;
}
} else {
}
}
break;
}

var G__54116 = cljs.core.next.call(null,seq__54054__$1);
var G__54117 = null;
var G__54118 = (0);
var G__54119 = (0);
seq__54054 = G__54116;
chunk__54055 = G__54117;
count__54056 = G__54118;
i__54057 = G__54119;
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
var seq__54120_54124 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__54121_54125 = null;
var count__54122_54126 = (0);
var i__54123_54127 = (0);
while(true){
if((i__54123_54127 < count__54122_54126)){
var ns_54128 = cljs.core._nth.call(null,chunk__54121_54125,i__54123_54127);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54128);

var G__54129 = seq__54120_54124;
var G__54130 = chunk__54121_54125;
var G__54131 = count__54122_54126;
var G__54132 = (i__54123_54127 + (1));
seq__54120_54124 = G__54129;
chunk__54121_54125 = G__54130;
count__54122_54126 = G__54131;
i__54123_54127 = G__54132;
continue;
} else {
var temp__5457__auto___54133 = cljs.core.seq.call(null,seq__54120_54124);
if(temp__5457__auto___54133){
var seq__54120_54134__$1 = temp__5457__auto___54133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54120_54134__$1)){
var c__43322__auto___54135 = cljs.core.chunk_first.call(null,seq__54120_54134__$1);
var G__54136 = cljs.core.chunk_rest.call(null,seq__54120_54134__$1);
var G__54137 = c__43322__auto___54135;
var G__54138 = cljs.core.count.call(null,c__43322__auto___54135);
var G__54139 = (0);
seq__54120_54124 = G__54136;
chunk__54121_54125 = G__54137;
count__54122_54126 = G__54138;
i__54123_54127 = G__54139;
continue;
} else {
var ns_54140 = cljs.core.first.call(null,seq__54120_54134__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54140);

var G__54141 = cljs.core.next.call(null,seq__54120_54134__$1);
var G__54142 = null;
var G__54143 = (0);
var G__54144 = (0);
seq__54120_54124 = G__54141;
chunk__54121_54125 = G__54142;
count__54122_54126 = G__54143;
i__54123_54127 = G__54144;
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
goog.require_figwheel_backup_ = (function (){var or__41331__auto__ = goog.require__;
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
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
var G__54145__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__54145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54146__i = 0, G__54146__a = new Array(arguments.length -  0);
while (G__54146__i < G__54146__a.length) {G__54146__a[G__54146__i] = arguments[G__54146__i + 0]; ++G__54146__i;}
  args = new cljs.core.IndexedSeq(G__54146__a,0,null);
} 
return G__54145__delegate.call(this,args);};
G__54145.cljs$lang$maxFixedArity = 0;
G__54145.cljs$lang$applyTo = (function (arglist__54147){
var args = cljs.core.seq(arglist__54147);
return G__54145__delegate(args);
});
G__54145.cljs$core$IFn$_invoke$arity$variadic = G__54145__delegate;
return G__54145;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__54148_SHARP_,p2__54149_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54148_SHARP_)].join('')),p2__54149_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__54150_SHARP_,p2__54151_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54150_SHARP_)].join(''),p2__54151_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__54152 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__54152.addCallback(((function (G__54152){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__54152))
);

G__54152.addErrback(((function (G__54152){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__54152))
);

return G__54152;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__54153 = cljs.core._EQ_;
var expr__54154 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__54153.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__54154))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__54153,expr__54154){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__54153,expr__54154))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__54153,expr__54154){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e54156){if((e54156 instanceof Error)){
var e = e54156;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54156;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__54153,expr__54154))
} else {
if(cljs.core.truth_(pred__54153.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__54154))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__54153.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__54154))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__54153.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__54154))){
return ((function (pred__54153,expr__54154){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e54157){if((e54157 instanceof Error)){
var e = e54157;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54157;

}
}})());
});
;})(pred__54153,expr__54154))
} else {
return ((function (pred__54153,expr__54154){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__54153,expr__54154))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__54158,callback){
var map__54159 = p__54158;
var map__54159__$1 = ((((!((map__54159 == null)))?((((map__54159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54159):map__54159);
var file_msg = map__54159__$1;
var request_url = cljs.core.get.call(null,map__54159__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__54159,map__54159__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__54159,map__54159__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__52042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto__){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto__){
return (function (state_54183){
var state_val_54184 = (state_54183[(1)]);
if((state_val_54184 === (7))){
var inst_54179 = (state_54183[(2)]);
var state_54183__$1 = state_54183;
var statearr_54185_54202 = state_54183__$1;
(statearr_54185_54202[(2)] = inst_54179);

(statearr_54185_54202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54184 === (1))){
var state_54183__$1 = state_54183;
var statearr_54186_54203 = state_54183__$1;
(statearr_54186_54203[(2)] = null);

(statearr_54186_54203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54184 === (4))){
var inst_54163 = (state_54183[(7)]);
var inst_54163__$1 = (state_54183[(2)]);
var state_54183__$1 = (function (){var statearr_54187 = state_54183;
(statearr_54187[(7)] = inst_54163__$1);

return statearr_54187;
})();
if(cljs.core.truth_(inst_54163__$1)){
var statearr_54188_54204 = state_54183__$1;
(statearr_54188_54204[(1)] = (5));

} else {
var statearr_54189_54205 = state_54183__$1;
(statearr_54189_54205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54184 === (6))){
var state_54183__$1 = state_54183;
var statearr_54190_54206 = state_54183__$1;
(statearr_54190_54206[(2)] = null);

(statearr_54190_54206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54184 === (3))){
var inst_54181 = (state_54183[(2)]);
var state_54183__$1 = state_54183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54183__$1,inst_54181);
} else {
if((state_val_54184 === (2))){
var state_54183__$1 = state_54183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54183__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_54184 === (11))){
var inst_54175 = (state_54183[(2)]);
var state_54183__$1 = (function (){var statearr_54191 = state_54183;
(statearr_54191[(8)] = inst_54175);

return statearr_54191;
})();
var statearr_54192_54207 = state_54183__$1;
(statearr_54192_54207[(2)] = null);

(statearr_54192_54207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54184 === (9))){
var inst_54167 = (state_54183[(9)]);
var inst_54169 = (state_54183[(10)]);
var inst_54171 = inst_54169.call(null,inst_54167);
var state_54183__$1 = state_54183;
var statearr_54193_54208 = state_54183__$1;
(statearr_54193_54208[(2)] = inst_54171);

(statearr_54193_54208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54184 === (5))){
var inst_54163 = (state_54183[(7)]);
var inst_54165 = figwheel.client.file_reloading.blocking_load.call(null,inst_54163);
var state_54183__$1 = state_54183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54183__$1,(8),inst_54165);
} else {
if((state_val_54184 === (10))){
var inst_54167 = (state_54183[(9)]);
var inst_54173 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_54167);
var state_54183__$1 = state_54183;
var statearr_54194_54209 = state_54183__$1;
(statearr_54194_54209[(2)] = inst_54173);

(statearr_54194_54209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54184 === (8))){
var inst_54163 = (state_54183[(7)]);
var inst_54169 = (state_54183[(10)]);
var inst_54167 = (state_54183[(2)]);
var inst_54168 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_54169__$1 = cljs.core.get.call(null,inst_54168,inst_54163);
var state_54183__$1 = (function (){var statearr_54195 = state_54183;
(statearr_54195[(9)] = inst_54167);

(statearr_54195[(10)] = inst_54169__$1);

return statearr_54195;
})();
if(cljs.core.truth_(inst_54169__$1)){
var statearr_54196_54210 = state_54183__$1;
(statearr_54196_54210[(1)] = (9));

} else {
var statearr_54197_54211 = state_54183__$1;
(statearr_54197_54211[(1)] = (10));

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
});})(c__52042__auto__))
;
return ((function (switch__51952__auto__,c__52042__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__51953__auto__ = null;
var figwheel$client$file_reloading$state_machine__51953__auto____0 = (function (){
var statearr_54198 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54198[(0)] = figwheel$client$file_reloading$state_machine__51953__auto__);

(statearr_54198[(1)] = (1));

return statearr_54198;
});
var figwheel$client$file_reloading$state_machine__51953__auto____1 = (function (state_54183){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_54183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e54199){if((e54199 instanceof Object)){
var ex__51956__auto__ = e54199;
var statearr_54200_54212 = state_54183;
(statearr_54200_54212[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54213 = state_54183;
state_54183 = G__54213;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__51953__auto__ = function(state_54183){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__51953__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__51953__auto____1.call(this,state_54183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__51953__auto____0;
figwheel$client$file_reloading$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__51953__auto____1;
return figwheel$client$file_reloading$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto__))
})();
var state__52044__auto__ = (function (){var statearr_54201 = f__52043__auto__.call(null);
(statearr_54201[(6)] = c__52042__auto__);

return statearr_54201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto__))
);

return c__52042__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__54214,callback){
var map__54215 = p__54214;
var map__54215__$1 = ((((!((map__54215 == null)))?((((map__54215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54215):map__54215);
var file_msg = map__54215__$1;
var namespace = cljs.core.get.call(null,map__54215__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__54215,map__54215__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__54215,map__54215__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__54217){
var map__54218 = p__54217;
var map__54218__$1 = ((((!((map__54218 == null)))?((((map__54218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54218):map__54218);
var file_msg = map__54218__$1;
var namespace = cljs.core.get.call(null,map__54218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__54220){
var map__54221 = p__54220;
var map__54221__$1 = ((((!((map__54221 == null)))?((((map__54221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54221):map__54221);
var file_msg = map__54221__$1;
var namespace = cljs.core.get.call(null,map__54221__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41318__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41318__auto__){
var or__41331__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
} else {
var or__41331__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41331__auto____$1)){
return or__41331__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41318__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__54223,callback){
var map__54224 = p__54223;
var map__54224__$1 = ((((!((map__54224 == null)))?((((map__54224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54224):map__54224);
var file_msg = map__54224__$1;
var request_url = cljs.core.get.call(null,map__54224__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__54224__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__52042__auto___54274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___54274,out){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___54274,out){
return (function (state_54259){
var state_val_54260 = (state_54259[(1)]);
if((state_val_54260 === (1))){
var inst_54233 = cljs.core.seq.call(null,files);
var inst_54234 = cljs.core.first.call(null,inst_54233);
var inst_54235 = cljs.core.next.call(null,inst_54233);
var inst_54236 = files;
var state_54259__$1 = (function (){var statearr_54261 = state_54259;
(statearr_54261[(7)] = inst_54235);

(statearr_54261[(8)] = inst_54236);

(statearr_54261[(9)] = inst_54234);

return statearr_54261;
})();
var statearr_54262_54275 = state_54259__$1;
(statearr_54262_54275[(2)] = null);

(statearr_54262_54275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54260 === (2))){
var inst_54236 = (state_54259[(8)]);
var inst_54242 = (state_54259[(10)]);
var inst_54241 = cljs.core.seq.call(null,inst_54236);
var inst_54242__$1 = cljs.core.first.call(null,inst_54241);
var inst_54243 = cljs.core.next.call(null,inst_54241);
var inst_54244 = (inst_54242__$1 == null);
var inst_54245 = cljs.core.not.call(null,inst_54244);
var state_54259__$1 = (function (){var statearr_54263 = state_54259;
(statearr_54263[(11)] = inst_54243);

(statearr_54263[(10)] = inst_54242__$1);

return statearr_54263;
})();
if(inst_54245){
var statearr_54264_54276 = state_54259__$1;
(statearr_54264_54276[(1)] = (4));

} else {
var statearr_54265_54277 = state_54259__$1;
(statearr_54265_54277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54260 === (3))){
var inst_54257 = (state_54259[(2)]);
var state_54259__$1 = state_54259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54259__$1,inst_54257);
} else {
if((state_val_54260 === (4))){
var inst_54242 = (state_54259[(10)]);
var inst_54247 = figwheel.client.file_reloading.reload_js_file.call(null,inst_54242);
var state_54259__$1 = state_54259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54259__$1,(7),inst_54247);
} else {
if((state_val_54260 === (5))){
var inst_54253 = cljs.core.async.close_BANG_.call(null,out);
var state_54259__$1 = state_54259;
var statearr_54266_54278 = state_54259__$1;
(statearr_54266_54278[(2)] = inst_54253);

(statearr_54266_54278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54260 === (6))){
var inst_54255 = (state_54259[(2)]);
var state_54259__$1 = state_54259;
var statearr_54267_54279 = state_54259__$1;
(statearr_54267_54279[(2)] = inst_54255);

(statearr_54267_54279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54260 === (7))){
var inst_54243 = (state_54259[(11)]);
var inst_54249 = (state_54259[(2)]);
var inst_54250 = cljs.core.async.put_BANG_.call(null,out,inst_54249);
var inst_54236 = inst_54243;
var state_54259__$1 = (function (){var statearr_54268 = state_54259;
(statearr_54268[(12)] = inst_54250);

(statearr_54268[(8)] = inst_54236);

return statearr_54268;
})();
var statearr_54269_54280 = state_54259__$1;
(statearr_54269_54280[(2)] = null);

(statearr_54269_54280[(1)] = (2));


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
});})(c__52042__auto___54274,out))
;
return ((function (switch__51952__auto__,c__52042__auto___54274,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto____0 = (function (){
var statearr_54270 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54270[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto__);

(statearr_54270[(1)] = (1));

return statearr_54270;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto____1 = (function (state_54259){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_54259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e54271){if((e54271 instanceof Object)){
var ex__51956__auto__ = e54271;
var statearr_54272_54281 = state_54259;
(statearr_54272_54281[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54282 = state_54259;
state_54259 = G__54282;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto__ = function(state_54259){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto____1.call(this,state_54259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___54274,out))
})();
var state__52044__auto__ = (function (){var statearr_54273 = f__52043__auto__.call(null);
(statearr_54273[(6)] = c__52042__auto___54274);

return statearr_54273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___54274,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__54283,opts){
var map__54284 = p__54283;
var map__54284__$1 = ((((!((map__54284 == null)))?((((map__54284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54284):map__54284);
var eval_body = cljs.core.get.call(null,map__54284__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__54284__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41318__auto__ = eval_body;
if(cljs.core.truth_(and__41318__auto__)){
return typeof eval_body === 'string';
} else {
return and__41318__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e54286){var e = e54286;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__54287_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54287_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
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
return cljs.core.map.call(null,(function (p__54288){
var vec__54289 = p__54288;
var k = cljs.core.nth.call(null,vec__54289,(0),null);
var v = cljs.core.nth.call(null,vec__54289,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__54292){
var vec__54293 = p__54292;
var k = cljs.core.nth.call(null,vec__54293,(0),null);
var v = cljs.core.nth.call(null,vec__54293,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__54299,p__54300){
var map__54301 = p__54299;
var map__54301__$1 = ((((!((map__54301 == null)))?((((map__54301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54301):map__54301);
var opts = map__54301__$1;
var before_jsload = cljs.core.get.call(null,map__54301__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__54301__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__54301__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__54302 = p__54300;
var map__54302__$1 = ((((!((map__54302 == null)))?((((map__54302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54302):map__54302);
var msg = map__54302__$1;
var files = cljs.core.get.call(null,map__54302__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__54302__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__54302__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__52042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_54456){
var state_val_54457 = (state_54456[(1)]);
if((state_val_54457 === (7))){
var inst_54319 = (state_54456[(7)]);
var inst_54318 = (state_54456[(8)]);
var inst_54317 = (state_54456[(9)]);
var inst_54316 = (state_54456[(10)]);
var inst_54324 = cljs.core._nth.call(null,inst_54317,inst_54319);
var inst_54325 = figwheel.client.file_reloading.eval_body.call(null,inst_54324,opts);
var inst_54326 = (inst_54319 + (1));
var tmp54458 = inst_54318;
var tmp54459 = inst_54317;
var tmp54460 = inst_54316;
var inst_54316__$1 = tmp54460;
var inst_54317__$1 = tmp54459;
var inst_54318__$1 = tmp54458;
var inst_54319__$1 = inst_54326;
var state_54456__$1 = (function (){var statearr_54461 = state_54456;
(statearr_54461[(7)] = inst_54319__$1);

(statearr_54461[(8)] = inst_54318__$1);

(statearr_54461[(9)] = inst_54317__$1);

(statearr_54461[(10)] = inst_54316__$1);

(statearr_54461[(11)] = inst_54325);

return statearr_54461;
})();
var statearr_54462_54545 = state_54456__$1;
(statearr_54462_54545[(2)] = null);

(statearr_54462_54545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (20))){
var inst_54359 = (state_54456[(12)]);
var inst_54367 = figwheel.client.file_reloading.sort_files.call(null,inst_54359);
var state_54456__$1 = state_54456;
var statearr_54463_54546 = state_54456__$1;
(statearr_54463_54546[(2)] = inst_54367);

(statearr_54463_54546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (27))){
var state_54456__$1 = state_54456;
var statearr_54464_54547 = state_54456__$1;
(statearr_54464_54547[(2)] = null);

(statearr_54464_54547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (1))){
var inst_54308 = (state_54456[(13)]);
var inst_54305 = before_jsload.call(null,files);
var inst_54306 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_54307 = (function (){return ((function (inst_54308,inst_54305,inst_54306,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54296_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__54296_SHARP_);
});
;})(inst_54308,inst_54305,inst_54306,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54308__$1 = cljs.core.filter.call(null,inst_54307,files);
var inst_54309 = cljs.core.not_empty.call(null,inst_54308__$1);
var state_54456__$1 = (function (){var statearr_54465 = state_54456;
(statearr_54465[(14)] = inst_54305);

(statearr_54465[(15)] = inst_54306);

(statearr_54465[(13)] = inst_54308__$1);

return statearr_54465;
})();
if(cljs.core.truth_(inst_54309)){
var statearr_54466_54548 = state_54456__$1;
(statearr_54466_54548[(1)] = (2));

} else {
var statearr_54467_54549 = state_54456__$1;
(statearr_54467_54549[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (24))){
var state_54456__$1 = state_54456;
var statearr_54468_54550 = state_54456__$1;
(statearr_54468_54550[(2)] = null);

(statearr_54468_54550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (39))){
var inst_54409 = (state_54456[(16)]);
var state_54456__$1 = state_54456;
var statearr_54469_54551 = state_54456__$1;
(statearr_54469_54551[(2)] = inst_54409);

(statearr_54469_54551[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (46))){
var inst_54451 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54470_54552 = state_54456__$1;
(statearr_54470_54552[(2)] = inst_54451);

(statearr_54470_54552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (4))){
var inst_54353 = (state_54456[(2)]);
var inst_54354 = cljs.core.List.EMPTY;
var inst_54355 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_54354);
var inst_54356 = (function (){return ((function (inst_54353,inst_54354,inst_54355,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54297_SHARP_){
var and__41318__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54297_SHARP_);
if(cljs.core.truth_(and__41318__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__54297_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__54297_SHARP_)));
} else {
return and__41318__auto__;
}
});
;})(inst_54353,inst_54354,inst_54355,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54357 = cljs.core.filter.call(null,inst_54356,files);
var inst_54358 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_54359 = cljs.core.concat.call(null,inst_54357,inst_54358);
var state_54456__$1 = (function (){var statearr_54471 = state_54456;
(statearr_54471[(17)] = inst_54355);

(statearr_54471[(18)] = inst_54353);

(statearr_54471[(12)] = inst_54359);

return statearr_54471;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_54472_54553 = state_54456__$1;
(statearr_54472_54553[(1)] = (16));

} else {
var statearr_54473_54554 = state_54456__$1;
(statearr_54473_54554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (15))){
var inst_54343 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54474_54555 = state_54456__$1;
(statearr_54474_54555[(2)] = inst_54343);

(statearr_54474_54555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (21))){
var inst_54369 = (state_54456[(19)]);
var inst_54369__$1 = (state_54456[(2)]);
var inst_54370 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_54369__$1);
var state_54456__$1 = (function (){var statearr_54475 = state_54456;
(statearr_54475[(19)] = inst_54369__$1);

return statearr_54475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54456__$1,(22),inst_54370);
} else {
if((state_val_54457 === (31))){
var inst_54454 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54456__$1,inst_54454);
} else {
if((state_val_54457 === (32))){
var inst_54409 = (state_54456[(16)]);
var inst_54414 = inst_54409.cljs$lang$protocol_mask$partition0$;
var inst_54415 = (inst_54414 & (64));
var inst_54416 = inst_54409.cljs$core$ISeq$;
var inst_54417 = (cljs.core.PROTOCOL_SENTINEL === inst_54416);
var inst_54418 = (inst_54415) || (inst_54417);
var state_54456__$1 = state_54456;
if(cljs.core.truth_(inst_54418)){
var statearr_54476_54556 = state_54456__$1;
(statearr_54476_54556[(1)] = (35));

} else {
var statearr_54477_54557 = state_54456__$1;
(statearr_54477_54557[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (40))){
var inst_54431 = (state_54456[(20)]);
var inst_54430 = (state_54456[(2)]);
var inst_54431__$1 = cljs.core.get.call(null,inst_54430,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_54432 = cljs.core.get.call(null,inst_54430,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_54433 = cljs.core.not_empty.call(null,inst_54431__$1);
var state_54456__$1 = (function (){var statearr_54478 = state_54456;
(statearr_54478[(21)] = inst_54432);

(statearr_54478[(20)] = inst_54431__$1);

return statearr_54478;
})();
if(cljs.core.truth_(inst_54433)){
var statearr_54479_54558 = state_54456__$1;
(statearr_54479_54558[(1)] = (41));

} else {
var statearr_54480_54559 = state_54456__$1;
(statearr_54480_54559[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (33))){
var state_54456__$1 = state_54456;
var statearr_54481_54560 = state_54456__$1;
(statearr_54481_54560[(2)] = false);

(statearr_54481_54560[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (13))){
var inst_54329 = (state_54456[(22)]);
var inst_54333 = cljs.core.chunk_first.call(null,inst_54329);
var inst_54334 = cljs.core.chunk_rest.call(null,inst_54329);
var inst_54335 = cljs.core.count.call(null,inst_54333);
var inst_54316 = inst_54334;
var inst_54317 = inst_54333;
var inst_54318 = inst_54335;
var inst_54319 = (0);
var state_54456__$1 = (function (){var statearr_54482 = state_54456;
(statearr_54482[(7)] = inst_54319);

(statearr_54482[(8)] = inst_54318);

(statearr_54482[(9)] = inst_54317);

(statearr_54482[(10)] = inst_54316);

return statearr_54482;
})();
var statearr_54483_54561 = state_54456__$1;
(statearr_54483_54561[(2)] = null);

(statearr_54483_54561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (22))){
var inst_54369 = (state_54456[(19)]);
var inst_54377 = (state_54456[(23)]);
var inst_54373 = (state_54456[(24)]);
var inst_54372 = (state_54456[(25)]);
var inst_54372__$1 = (state_54456[(2)]);
var inst_54373__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_54372__$1);
var inst_54374 = (function (){var all_files = inst_54369;
var res_SINGLEQUOTE_ = inst_54372__$1;
var res = inst_54373__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_54369,inst_54377,inst_54373,inst_54372,inst_54372__$1,inst_54373__$1,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54298_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__54298_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_54369,inst_54377,inst_54373,inst_54372,inst_54372__$1,inst_54373__$1,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54375 = cljs.core.filter.call(null,inst_54374,inst_54372__$1);
var inst_54376 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_54377__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_54376);
var inst_54378 = cljs.core.not_empty.call(null,inst_54377__$1);
var state_54456__$1 = (function (){var statearr_54484 = state_54456;
(statearr_54484[(23)] = inst_54377__$1);

(statearr_54484[(24)] = inst_54373__$1);

(statearr_54484[(25)] = inst_54372__$1);

(statearr_54484[(26)] = inst_54375);

return statearr_54484;
})();
if(cljs.core.truth_(inst_54378)){
var statearr_54485_54562 = state_54456__$1;
(statearr_54485_54562[(1)] = (23));

} else {
var statearr_54486_54563 = state_54456__$1;
(statearr_54486_54563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (36))){
var state_54456__$1 = state_54456;
var statearr_54487_54564 = state_54456__$1;
(statearr_54487_54564[(2)] = false);

(statearr_54487_54564[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (41))){
var inst_54431 = (state_54456[(20)]);
var inst_54435 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_54436 = cljs.core.map.call(null,inst_54435,inst_54431);
var inst_54437 = cljs.core.pr_str.call(null,inst_54436);
var inst_54438 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54437)].join('');
var inst_54439 = figwheel.client.utils.log.call(null,inst_54438);
var state_54456__$1 = state_54456;
var statearr_54488_54565 = state_54456__$1;
(statearr_54488_54565[(2)] = inst_54439);

(statearr_54488_54565[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (43))){
var inst_54432 = (state_54456[(21)]);
var inst_54442 = (state_54456[(2)]);
var inst_54443 = cljs.core.not_empty.call(null,inst_54432);
var state_54456__$1 = (function (){var statearr_54489 = state_54456;
(statearr_54489[(27)] = inst_54442);

return statearr_54489;
})();
if(cljs.core.truth_(inst_54443)){
var statearr_54490_54566 = state_54456__$1;
(statearr_54490_54566[(1)] = (44));

} else {
var statearr_54491_54567 = state_54456__$1;
(statearr_54491_54567[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (29))){
var inst_54409 = (state_54456[(16)]);
var inst_54369 = (state_54456[(19)]);
var inst_54377 = (state_54456[(23)]);
var inst_54373 = (state_54456[(24)]);
var inst_54372 = (state_54456[(25)]);
var inst_54375 = (state_54456[(26)]);
var inst_54405 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_54408 = (function (){var all_files = inst_54369;
var res_SINGLEQUOTE_ = inst_54372;
var res = inst_54373;
var files_not_loaded = inst_54375;
var dependencies_that_loaded = inst_54377;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54409,inst_54369,inst_54377,inst_54373,inst_54372,inst_54375,inst_54405,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54407){
var map__54492 = p__54407;
var map__54492__$1 = ((((!((map__54492 == null)))?((((map__54492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54492):map__54492);
var namespace = cljs.core.get.call(null,map__54492__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54409,inst_54369,inst_54377,inst_54373,inst_54372,inst_54375,inst_54405,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54409__$1 = cljs.core.group_by.call(null,inst_54408,inst_54375);
var inst_54411 = (inst_54409__$1 == null);
var inst_54412 = cljs.core.not.call(null,inst_54411);
var state_54456__$1 = (function (){var statearr_54494 = state_54456;
(statearr_54494[(16)] = inst_54409__$1);

(statearr_54494[(28)] = inst_54405);

return statearr_54494;
})();
if(inst_54412){
var statearr_54495_54568 = state_54456__$1;
(statearr_54495_54568[(1)] = (32));

} else {
var statearr_54496_54569 = state_54456__$1;
(statearr_54496_54569[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (44))){
var inst_54432 = (state_54456[(21)]);
var inst_54445 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54432);
var inst_54446 = cljs.core.pr_str.call(null,inst_54445);
var inst_54447 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54446)].join('');
var inst_54448 = figwheel.client.utils.log.call(null,inst_54447);
var state_54456__$1 = state_54456;
var statearr_54497_54570 = state_54456__$1;
(statearr_54497_54570[(2)] = inst_54448);

(statearr_54497_54570[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (6))){
var inst_54350 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54498_54571 = state_54456__$1;
(statearr_54498_54571[(2)] = inst_54350);

(statearr_54498_54571[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (28))){
var inst_54375 = (state_54456[(26)]);
var inst_54402 = (state_54456[(2)]);
var inst_54403 = cljs.core.not_empty.call(null,inst_54375);
var state_54456__$1 = (function (){var statearr_54499 = state_54456;
(statearr_54499[(29)] = inst_54402);

return statearr_54499;
})();
if(cljs.core.truth_(inst_54403)){
var statearr_54500_54572 = state_54456__$1;
(statearr_54500_54572[(1)] = (29));

} else {
var statearr_54501_54573 = state_54456__$1;
(statearr_54501_54573[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (25))){
var inst_54373 = (state_54456[(24)]);
var inst_54389 = (state_54456[(2)]);
var inst_54390 = cljs.core.not_empty.call(null,inst_54373);
var state_54456__$1 = (function (){var statearr_54502 = state_54456;
(statearr_54502[(30)] = inst_54389);

return statearr_54502;
})();
if(cljs.core.truth_(inst_54390)){
var statearr_54503_54574 = state_54456__$1;
(statearr_54503_54574[(1)] = (26));

} else {
var statearr_54504_54575 = state_54456__$1;
(statearr_54504_54575[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (34))){
var inst_54425 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
if(cljs.core.truth_(inst_54425)){
var statearr_54505_54576 = state_54456__$1;
(statearr_54505_54576[(1)] = (38));

} else {
var statearr_54506_54577 = state_54456__$1;
(statearr_54506_54577[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (17))){
var state_54456__$1 = state_54456;
var statearr_54507_54578 = state_54456__$1;
(statearr_54507_54578[(2)] = recompile_dependents);

(statearr_54507_54578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (3))){
var state_54456__$1 = state_54456;
var statearr_54508_54579 = state_54456__$1;
(statearr_54508_54579[(2)] = null);

(statearr_54508_54579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (12))){
var inst_54346 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54509_54580 = state_54456__$1;
(statearr_54509_54580[(2)] = inst_54346);

(statearr_54509_54580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (2))){
var inst_54308 = (state_54456[(13)]);
var inst_54315 = cljs.core.seq.call(null,inst_54308);
var inst_54316 = inst_54315;
var inst_54317 = null;
var inst_54318 = (0);
var inst_54319 = (0);
var state_54456__$1 = (function (){var statearr_54510 = state_54456;
(statearr_54510[(7)] = inst_54319);

(statearr_54510[(8)] = inst_54318);

(statearr_54510[(9)] = inst_54317);

(statearr_54510[(10)] = inst_54316);

return statearr_54510;
})();
var statearr_54511_54581 = state_54456__$1;
(statearr_54511_54581[(2)] = null);

(statearr_54511_54581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (23))){
var inst_54369 = (state_54456[(19)]);
var inst_54377 = (state_54456[(23)]);
var inst_54373 = (state_54456[(24)]);
var inst_54372 = (state_54456[(25)]);
var inst_54375 = (state_54456[(26)]);
var inst_54380 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_54382 = (function (){var all_files = inst_54369;
var res_SINGLEQUOTE_ = inst_54372;
var res = inst_54373;
var files_not_loaded = inst_54375;
var dependencies_that_loaded = inst_54377;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54369,inst_54377,inst_54373,inst_54372,inst_54375,inst_54380,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54381){
var map__54512 = p__54381;
var map__54512__$1 = ((((!((map__54512 == null)))?((((map__54512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54512):map__54512);
var request_url = cljs.core.get.call(null,map__54512__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54369,inst_54377,inst_54373,inst_54372,inst_54375,inst_54380,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54383 = cljs.core.reverse.call(null,inst_54377);
var inst_54384 = cljs.core.map.call(null,inst_54382,inst_54383);
var inst_54385 = cljs.core.pr_str.call(null,inst_54384);
var inst_54386 = figwheel.client.utils.log.call(null,inst_54385);
var state_54456__$1 = (function (){var statearr_54514 = state_54456;
(statearr_54514[(31)] = inst_54380);

return statearr_54514;
})();
var statearr_54515_54582 = state_54456__$1;
(statearr_54515_54582[(2)] = inst_54386);

(statearr_54515_54582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (35))){
var state_54456__$1 = state_54456;
var statearr_54516_54583 = state_54456__$1;
(statearr_54516_54583[(2)] = true);

(statearr_54516_54583[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (19))){
var inst_54359 = (state_54456[(12)]);
var inst_54365 = figwheel.client.file_reloading.expand_files.call(null,inst_54359);
var state_54456__$1 = state_54456;
var statearr_54517_54584 = state_54456__$1;
(statearr_54517_54584[(2)] = inst_54365);

(statearr_54517_54584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (11))){
var state_54456__$1 = state_54456;
var statearr_54518_54585 = state_54456__$1;
(statearr_54518_54585[(2)] = null);

(statearr_54518_54585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (9))){
var inst_54348 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54519_54586 = state_54456__$1;
(statearr_54519_54586[(2)] = inst_54348);

(statearr_54519_54586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (5))){
var inst_54319 = (state_54456[(7)]);
var inst_54318 = (state_54456[(8)]);
var inst_54321 = (inst_54319 < inst_54318);
var inst_54322 = inst_54321;
var state_54456__$1 = state_54456;
if(cljs.core.truth_(inst_54322)){
var statearr_54520_54587 = state_54456__$1;
(statearr_54520_54587[(1)] = (7));

} else {
var statearr_54521_54588 = state_54456__$1;
(statearr_54521_54588[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (14))){
var inst_54329 = (state_54456[(22)]);
var inst_54338 = cljs.core.first.call(null,inst_54329);
var inst_54339 = figwheel.client.file_reloading.eval_body.call(null,inst_54338,opts);
var inst_54340 = cljs.core.next.call(null,inst_54329);
var inst_54316 = inst_54340;
var inst_54317 = null;
var inst_54318 = (0);
var inst_54319 = (0);
var state_54456__$1 = (function (){var statearr_54522 = state_54456;
(statearr_54522[(32)] = inst_54339);

(statearr_54522[(7)] = inst_54319);

(statearr_54522[(8)] = inst_54318);

(statearr_54522[(9)] = inst_54317);

(statearr_54522[(10)] = inst_54316);

return statearr_54522;
})();
var statearr_54523_54589 = state_54456__$1;
(statearr_54523_54589[(2)] = null);

(statearr_54523_54589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (45))){
var state_54456__$1 = state_54456;
var statearr_54524_54590 = state_54456__$1;
(statearr_54524_54590[(2)] = null);

(statearr_54524_54590[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (26))){
var inst_54369 = (state_54456[(19)]);
var inst_54377 = (state_54456[(23)]);
var inst_54373 = (state_54456[(24)]);
var inst_54372 = (state_54456[(25)]);
var inst_54375 = (state_54456[(26)]);
var inst_54392 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_54394 = (function (){var all_files = inst_54369;
var res_SINGLEQUOTE_ = inst_54372;
var res = inst_54373;
var files_not_loaded = inst_54375;
var dependencies_that_loaded = inst_54377;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54369,inst_54377,inst_54373,inst_54372,inst_54375,inst_54392,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__54393){
var map__54525 = p__54393;
var map__54525__$1 = ((((!((map__54525 == null)))?((((map__54525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54525):map__54525);
var namespace = cljs.core.get.call(null,map__54525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__54525__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54369,inst_54377,inst_54373,inst_54372,inst_54375,inst_54392,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54395 = cljs.core.map.call(null,inst_54394,inst_54373);
var inst_54396 = cljs.core.pr_str.call(null,inst_54395);
var inst_54397 = figwheel.client.utils.log.call(null,inst_54396);
var inst_54398 = (function (){var all_files = inst_54369;
var res_SINGLEQUOTE_ = inst_54372;
var res = inst_54373;
var files_not_loaded = inst_54375;
var dependencies_that_loaded = inst_54377;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54369,inst_54377,inst_54373,inst_54372,inst_54375,inst_54392,inst_54394,inst_54395,inst_54396,inst_54397,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54369,inst_54377,inst_54373,inst_54372,inst_54375,inst_54392,inst_54394,inst_54395,inst_54396,inst_54397,state_val_54457,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54399 = setTimeout(inst_54398,(10));
var state_54456__$1 = (function (){var statearr_54527 = state_54456;
(statearr_54527[(33)] = inst_54397);

(statearr_54527[(34)] = inst_54392);

return statearr_54527;
})();
var statearr_54528_54591 = state_54456__$1;
(statearr_54528_54591[(2)] = inst_54399);

(statearr_54528_54591[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (16))){
var state_54456__$1 = state_54456;
var statearr_54529_54592 = state_54456__$1;
(statearr_54529_54592[(2)] = reload_dependents);

(statearr_54529_54592[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (38))){
var inst_54409 = (state_54456[(16)]);
var inst_54427 = cljs.core.apply.call(null,cljs.core.hash_map,inst_54409);
var state_54456__$1 = state_54456;
var statearr_54530_54593 = state_54456__$1;
(statearr_54530_54593[(2)] = inst_54427);

(statearr_54530_54593[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (30))){
var state_54456__$1 = state_54456;
var statearr_54531_54594 = state_54456__$1;
(statearr_54531_54594[(2)] = null);

(statearr_54531_54594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (10))){
var inst_54329 = (state_54456[(22)]);
var inst_54331 = cljs.core.chunked_seq_QMARK_.call(null,inst_54329);
var state_54456__$1 = state_54456;
if(inst_54331){
var statearr_54532_54595 = state_54456__$1;
(statearr_54532_54595[(1)] = (13));

} else {
var statearr_54533_54596 = state_54456__$1;
(statearr_54533_54596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (18))){
var inst_54363 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
if(cljs.core.truth_(inst_54363)){
var statearr_54534_54597 = state_54456__$1;
(statearr_54534_54597[(1)] = (19));

} else {
var statearr_54535_54598 = state_54456__$1;
(statearr_54535_54598[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (42))){
var state_54456__$1 = state_54456;
var statearr_54536_54599 = state_54456__$1;
(statearr_54536_54599[(2)] = null);

(statearr_54536_54599[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (37))){
var inst_54422 = (state_54456[(2)]);
var state_54456__$1 = state_54456;
var statearr_54537_54600 = state_54456__$1;
(statearr_54537_54600[(2)] = inst_54422);

(statearr_54537_54600[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54457 === (8))){
var inst_54329 = (state_54456[(22)]);
var inst_54316 = (state_54456[(10)]);
var inst_54329__$1 = cljs.core.seq.call(null,inst_54316);
var state_54456__$1 = (function (){var statearr_54538 = state_54456;
(statearr_54538[(22)] = inst_54329__$1);

return statearr_54538;
})();
if(inst_54329__$1){
var statearr_54539_54601 = state_54456__$1;
(statearr_54539_54601[(1)] = (10));

} else {
var statearr_54540_54602 = state_54456__$1;
(statearr_54540_54602[(1)] = (11));

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
});})(c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__51952__auto__,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto____0 = (function (){
var statearr_54541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54541[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto__);

(statearr_54541[(1)] = (1));

return statearr_54541;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto____1 = (function (state_54456){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_54456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e54542){if((e54542 instanceof Object)){
var ex__51956__auto__ = e54542;
var statearr_54543_54603 = state_54456;
(statearr_54543_54603[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54604 = state_54456;
state_54456 = G__54604;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto__ = function(state_54456){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto____1.call(this,state_54456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__52044__auto__ = (function (){var statearr_54544 = f__52043__auto__.call(null);
(statearr_54544[(6)] = c__52042__auto__);

return statearr_54544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto__,map__54301,map__54301__$1,opts,before_jsload,on_jsload,reload_dependents,map__54302,map__54302__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__52042__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__54607,link){
var map__54608 = p__54607;
var map__54608__$1 = ((((!((map__54608 == null)))?((((map__54608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54608):map__54608);
var file = cljs.core.get.call(null,map__54608__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__54608,map__54608__$1,file){
return (function (p1__54605_SHARP_,p2__54606_SHARP_){
if(cljs.core._EQ_.call(null,p1__54605_SHARP_,p2__54606_SHARP_)){
return p1__54605_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__54608,map__54608__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__54611){
var map__54612 = p__54611;
var map__54612__$1 = ((((!((map__54612 == null)))?((((map__54612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54612):map__54612);
var match_length = cljs.core.get.call(null,map__54612__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__54612__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__54610_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__54610_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__54614_SHARP_,p2__54615_SHARP_){
return cljs.core.assoc.call(null,p1__54614_SHARP_,cljs.core.get.call(null,p2__54615_SHARP_,key),p2__54615_SHARP_);
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
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_54616 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_54616);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_54616);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__54617,p__54618){
var map__54619 = p__54617;
var map__54619__$1 = ((((!((map__54619 == null)))?((((map__54619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54619):map__54619);
var on_cssload = cljs.core.get.call(null,map__54619__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__54620 = p__54618;
var map__54620__$1 = ((((!((map__54620 == null)))?((((map__54620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54620):map__54620);
var files_msg = map__54620__$1;
var files = cljs.core.get.call(null,map__54620__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1513003908236
