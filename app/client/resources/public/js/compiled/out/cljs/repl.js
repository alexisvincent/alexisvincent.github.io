// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61722){
var map__61723 = p__61722;
var map__61723__$1 = ((((!((map__61723 == null)))?((((map__61723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61723):map__61723);
var m = map__61723__$1;
var n = cljs.core.get.call(null,map__61723__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__61723__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__61725_61747 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61726_61748 = null;
var count__61727_61749 = (0);
var i__61728_61750 = (0);
while(true){
if((i__61728_61750 < count__61727_61749)){
var f_61751 = cljs.core._nth.call(null,chunk__61726_61748,i__61728_61750);
cljs.core.println.call(null,"  ",f_61751);

var G__61752 = seq__61725_61747;
var G__61753 = chunk__61726_61748;
var G__61754 = count__61727_61749;
var G__61755 = (i__61728_61750 + (1));
seq__61725_61747 = G__61752;
chunk__61726_61748 = G__61753;
count__61727_61749 = G__61754;
i__61728_61750 = G__61755;
continue;
} else {
var temp__5278__auto___61756 = cljs.core.seq.call(null,seq__61725_61747);
if(temp__5278__auto___61756){
var seq__61725_61757__$1 = temp__5278__auto___61756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61725_61757__$1)){
var c__43430__auto___61758 = cljs.core.chunk_first.call(null,seq__61725_61757__$1);
var G__61759 = cljs.core.chunk_rest.call(null,seq__61725_61757__$1);
var G__61760 = c__43430__auto___61758;
var G__61761 = cljs.core.count.call(null,c__43430__auto___61758);
var G__61762 = (0);
seq__61725_61747 = G__61759;
chunk__61726_61748 = G__61760;
count__61727_61749 = G__61761;
i__61728_61750 = G__61762;
continue;
} else {
var f_61763 = cljs.core.first.call(null,seq__61725_61757__$1);
cljs.core.println.call(null,"  ",f_61763);

var G__61764 = cljs.core.next.call(null,seq__61725_61757__$1);
var G__61765 = null;
var G__61766 = (0);
var G__61767 = (0);
seq__61725_61747 = G__61764;
chunk__61726_61748 = G__61765;
count__61727_61749 = G__61766;
i__61728_61750 = G__61767;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61768 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41411__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_61768);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_61768)))?cljs.core.second.call(null,arglists_61768):arglists_61768));
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
var seq__61729_61769 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61730_61770 = null;
var count__61731_61771 = (0);
var i__61732_61772 = (0);
while(true){
if((i__61732_61772 < count__61731_61771)){
var vec__61733_61773 = cljs.core._nth.call(null,chunk__61730_61770,i__61732_61772);
var name_61774 = cljs.core.nth.call(null,vec__61733_61773,(0),null);
var map__61736_61775 = cljs.core.nth.call(null,vec__61733_61773,(1),null);
var map__61736_61776__$1 = ((((!((map__61736_61775 == null)))?((((map__61736_61775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61736_61775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61736_61775):map__61736_61775);
var doc_61777 = cljs.core.get.call(null,map__61736_61776__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61778 = cljs.core.get.call(null,map__61736_61776__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61774);

cljs.core.println.call(null," ",arglists_61778);

if(cljs.core.truth_(doc_61777)){
cljs.core.println.call(null," ",doc_61777);
} else {
}

var G__61779 = seq__61729_61769;
var G__61780 = chunk__61730_61770;
var G__61781 = count__61731_61771;
var G__61782 = (i__61732_61772 + (1));
seq__61729_61769 = G__61779;
chunk__61730_61770 = G__61780;
count__61731_61771 = G__61781;
i__61732_61772 = G__61782;
continue;
} else {
var temp__5278__auto___61783 = cljs.core.seq.call(null,seq__61729_61769);
if(temp__5278__auto___61783){
var seq__61729_61784__$1 = temp__5278__auto___61783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61729_61784__$1)){
var c__43430__auto___61785 = cljs.core.chunk_first.call(null,seq__61729_61784__$1);
var G__61786 = cljs.core.chunk_rest.call(null,seq__61729_61784__$1);
var G__61787 = c__43430__auto___61785;
var G__61788 = cljs.core.count.call(null,c__43430__auto___61785);
var G__61789 = (0);
seq__61729_61769 = G__61786;
chunk__61730_61770 = G__61787;
count__61731_61771 = G__61788;
i__61732_61772 = G__61789;
continue;
} else {
var vec__61738_61790 = cljs.core.first.call(null,seq__61729_61784__$1);
var name_61791 = cljs.core.nth.call(null,vec__61738_61790,(0),null);
var map__61741_61792 = cljs.core.nth.call(null,vec__61738_61790,(1),null);
var map__61741_61793__$1 = ((((!((map__61741_61792 == null)))?((((map__61741_61792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61741_61792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61741_61792):map__61741_61792);
var doc_61794 = cljs.core.get.call(null,map__61741_61793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61795 = cljs.core.get.call(null,map__61741_61793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61791);

cljs.core.println.call(null," ",arglists_61795);

if(cljs.core.truth_(doc_61794)){
cljs.core.println.call(null," ",doc_61794);
} else {
}

var G__61796 = cljs.core.next.call(null,seq__61729_61784__$1);
var G__61797 = null;
var G__61798 = (0);
var G__61799 = (0);
seq__61729_61769 = G__61796;
chunk__61730_61770 = G__61797;
count__61731_61771 = G__61798;
i__61732_61772 = G__61799;
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

var seq__61743 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61744 = null;
var count__61745 = (0);
var i__61746 = (0);
while(true){
if((i__61746 < count__61745)){
var role = cljs.core._nth.call(null,chunk__61744,i__61746);
var temp__5278__auto___61800__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___61800__$1)){
var spec_61801 = temp__5278__auto___61800__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_61801));
} else {
}

var G__61802 = seq__61743;
var G__61803 = chunk__61744;
var G__61804 = count__61745;
var G__61805 = (i__61746 + (1));
seq__61743 = G__61802;
chunk__61744 = G__61803;
count__61745 = G__61804;
i__61746 = G__61805;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__61743);
if(temp__5278__auto____$1){
var seq__61743__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61743__$1)){
var c__43430__auto__ = cljs.core.chunk_first.call(null,seq__61743__$1);
var G__61806 = cljs.core.chunk_rest.call(null,seq__61743__$1);
var G__61807 = c__43430__auto__;
var G__61808 = cljs.core.count.call(null,c__43430__auto__);
var G__61809 = (0);
seq__61743 = G__61806;
chunk__61744 = G__61807;
count__61745 = G__61808;
i__61746 = G__61809;
continue;
} else {
var role = cljs.core.first.call(null,seq__61743__$1);
var temp__5278__auto___61810__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___61810__$2)){
var spec_61811 = temp__5278__auto___61810__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_61811));
} else {
}

var G__61812 = cljs.core.next.call(null,seq__61743__$1);
var G__61813 = null;
var G__61814 = (0);
var G__61815 = (0);
seq__61743 = G__61812;
chunk__61744 = G__61813;
count__61745 = G__61814;
i__61746 = G__61815;
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

//# sourceMappingURL=repl.js.map?rel=1512631543908
