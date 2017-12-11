// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44884){
var map__44885 = p__44884;
var map__44885__$1 = ((((!((map__44885 == null)))?((((map__44885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44885):map__44885);
var m = map__44885__$1;
var n = cljs.core.get.call(null,map__44885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__44885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44887_44909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44888_44910 = null;
var count__44889_44911 = (0);
var i__44890_44912 = (0);
while(true){
if((i__44890_44912 < count__44889_44911)){
var f_44913 = cljs.core._nth.call(null,chunk__44888_44910,i__44890_44912);
cljs.core.println.call(null,"  ",f_44913);

var G__44914 = seq__44887_44909;
var G__44915 = chunk__44888_44910;
var G__44916 = count__44889_44911;
var G__44917 = (i__44890_44912 + (1));
seq__44887_44909 = G__44914;
chunk__44888_44910 = G__44915;
count__44889_44911 = G__44916;
i__44890_44912 = G__44917;
continue;
} else {
var temp__5278__auto___44918 = cljs.core.seq.call(null,seq__44887_44909);
if(temp__5278__auto___44918){
var seq__44887_44919__$1 = temp__5278__auto___44918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44887_44919__$1)){
var c__43047__auto___44920 = cljs.core.chunk_first.call(null,seq__44887_44919__$1);
var G__44921 = cljs.core.chunk_rest.call(null,seq__44887_44919__$1);
var G__44922 = c__43047__auto___44920;
var G__44923 = cljs.core.count.call(null,c__43047__auto___44920);
var G__44924 = (0);
seq__44887_44909 = G__44921;
chunk__44888_44910 = G__44922;
count__44889_44911 = G__44923;
i__44890_44912 = G__44924;
continue;
} else {
var f_44925 = cljs.core.first.call(null,seq__44887_44919__$1);
cljs.core.println.call(null,"  ",f_44925);

var G__44926 = cljs.core.next.call(null,seq__44887_44919__$1);
var G__44927 = null;
var G__44928 = (0);
var G__44929 = (0);
seq__44887_44909 = G__44926;
chunk__44888_44910 = G__44927;
count__44889_44911 = G__44928;
i__44890_44912 = G__44929;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44930 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41040__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41040__auto__)){
return or__41040__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44930);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44930)))?cljs.core.second.call(null,arglists_44930):arglists_44930));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44891_44931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44892_44932 = null;
var count__44893_44933 = (0);
var i__44894_44934 = (0);
while(true){
if((i__44894_44934 < count__44893_44933)){
var vec__44895_44935 = cljs.core._nth.call(null,chunk__44892_44932,i__44894_44934);
var name_44936 = cljs.core.nth.call(null,vec__44895_44935,(0),null);
var map__44898_44937 = cljs.core.nth.call(null,vec__44895_44935,(1),null);
var map__44898_44938__$1 = ((((!((map__44898_44937 == null)))?((((map__44898_44937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44898_44937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44898_44937):map__44898_44937);
var doc_44939 = cljs.core.get.call(null,map__44898_44938__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44940 = cljs.core.get.call(null,map__44898_44938__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44936);

cljs.core.println.call(null," ",arglists_44940);

if(cljs.core.truth_(doc_44939)){
cljs.core.println.call(null," ",doc_44939);
} else {
}

var G__44941 = seq__44891_44931;
var G__44942 = chunk__44892_44932;
var G__44943 = count__44893_44933;
var G__44944 = (i__44894_44934 + (1));
seq__44891_44931 = G__44941;
chunk__44892_44932 = G__44942;
count__44893_44933 = G__44943;
i__44894_44934 = G__44944;
continue;
} else {
var temp__5278__auto___44945 = cljs.core.seq.call(null,seq__44891_44931);
if(temp__5278__auto___44945){
var seq__44891_44946__$1 = temp__5278__auto___44945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44891_44946__$1)){
var c__43047__auto___44947 = cljs.core.chunk_first.call(null,seq__44891_44946__$1);
var G__44948 = cljs.core.chunk_rest.call(null,seq__44891_44946__$1);
var G__44949 = c__43047__auto___44947;
var G__44950 = cljs.core.count.call(null,c__43047__auto___44947);
var G__44951 = (0);
seq__44891_44931 = G__44948;
chunk__44892_44932 = G__44949;
count__44893_44933 = G__44950;
i__44894_44934 = G__44951;
continue;
} else {
var vec__44900_44952 = cljs.core.first.call(null,seq__44891_44946__$1);
var name_44953 = cljs.core.nth.call(null,vec__44900_44952,(0),null);
var map__44903_44954 = cljs.core.nth.call(null,vec__44900_44952,(1),null);
var map__44903_44955__$1 = ((((!((map__44903_44954 == null)))?((((map__44903_44954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44903_44954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44903_44954):map__44903_44954);
var doc_44956 = cljs.core.get.call(null,map__44903_44955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44957 = cljs.core.get.call(null,map__44903_44955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44953);

cljs.core.println.call(null," ",arglists_44957);

if(cljs.core.truth_(doc_44956)){
cljs.core.println.call(null," ",doc_44956);
} else {
}

var G__44958 = cljs.core.next.call(null,seq__44891_44946__$1);
var G__44959 = null;
var G__44960 = (0);
var G__44961 = (0);
seq__44891_44931 = G__44958;
chunk__44892_44932 = G__44959;
count__44893_44933 = G__44960;
i__44894_44934 = G__44961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__44905 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44906 = null;
var count__44907 = (0);
var i__44908 = (0);
while(true){
if((i__44908 < count__44907)){
var role = cljs.core._nth.call(null,chunk__44906,i__44908);
var temp__5278__auto___44962__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___44962__$1)){
var spec_44963 = temp__5278__auto___44962__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_44963));
} else {
}

var G__44964 = seq__44905;
var G__44965 = chunk__44906;
var G__44966 = count__44907;
var G__44967 = (i__44908 + (1));
seq__44905 = G__44964;
chunk__44906 = G__44965;
count__44907 = G__44966;
i__44908 = G__44967;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__44905);
if(temp__5278__auto____$1){
var seq__44905__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44905__$1)){
var c__43047__auto__ = cljs.core.chunk_first.call(null,seq__44905__$1);
var G__44968 = cljs.core.chunk_rest.call(null,seq__44905__$1);
var G__44969 = c__43047__auto__;
var G__44970 = cljs.core.count.call(null,c__43047__auto__);
var G__44971 = (0);
seq__44905 = G__44968;
chunk__44906 = G__44969;
count__44907 = G__44970;
i__44908 = G__44971;
continue;
} else {
var role = cljs.core.first.call(null,seq__44905__$1);
var temp__5278__auto___44972__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___44972__$2)){
var spec_44973 = temp__5278__auto___44972__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_44973));
} else {
}

var G__44974 = cljs.core.next.call(null,seq__44905__$1);
var G__44975 = null;
var G__44976 = (0);
var G__44977 = (0);
seq__44905 = G__44974;
chunk__44906 = G__44975;
count__44907 = G__44976;
i__44908 = G__44977;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
