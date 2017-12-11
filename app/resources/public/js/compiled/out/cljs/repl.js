// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48426){
var map__48427 = p__48426;
var map__48427__$1 = ((((!((map__48427 == null)))?((((map__48427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48427):map__48427);
var m = map__48427__$1;
var n = cljs.core.get.call(null,map__48427__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
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
var seq__48429_48451 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48430_48452 = null;
var count__48431_48453 = (0);
var i__48432_48454 = (0);
while(true){
if((i__48432_48454 < count__48431_48453)){
var f_48455 = cljs.core._nth.call(null,chunk__48430_48452,i__48432_48454);
cljs.core.println.call(null,"  ",f_48455);

var G__48456 = seq__48429_48451;
var G__48457 = chunk__48430_48452;
var G__48458 = count__48431_48453;
var G__48459 = (i__48432_48454 + (1));
seq__48429_48451 = G__48456;
chunk__48430_48452 = G__48457;
count__48431_48453 = G__48458;
i__48432_48454 = G__48459;
continue;
} else {
var temp__5457__auto___48460 = cljs.core.seq.call(null,seq__48429_48451);
if(temp__5457__auto___48460){
var seq__48429_48461__$1 = temp__5457__auto___48460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48429_48461__$1)){
var c__43322__auto___48462 = cljs.core.chunk_first.call(null,seq__48429_48461__$1);
var G__48463 = cljs.core.chunk_rest.call(null,seq__48429_48461__$1);
var G__48464 = c__43322__auto___48462;
var G__48465 = cljs.core.count.call(null,c__43322__auto___48462);
var G__48466 = (0);
seq__48429_48451 = G__48463;
chunk__48430_48452 = G__48464;
count__48431_48453 = G__48465;
i__48432_48454 = G__48466;
continue;
} else {
var f_48467 = cljs.core.first.call(null,seq__48429_48461__$1);
cljs.core.println.call(null,"  ",f_48467);

var G__48468 = cljs.core.next.call(null,seq__48429_48461__$1);
var G__48469 = null;
var G__48470 = (0);
var G__48471 = (0);
seq__48429_48451 = G__48468;
chunk__48430_48452 = G__48469;
count__48431_48453 = G__48470;
i__48432_48454 = G__48471;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48472 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41331__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48472);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48472)))?cljs.core.second.call(null,arglists_48472):arglists_48472));
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
var seq__48433_48473 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48434_48474 = null;
var count__48435_48475 = (0);
var i__48436_48476 = (0);
while(true){
if((i__48436_48476 < count__48435_48475)){
var vec__48437_48477 = cljs.core._nth.call(null,chunk__48434_48474,i__48436_48476);
var name_48478 = cljs.core.nth.call(null,vec__48437_48477,(0),null);
var map__48440_48479 = cljs.core.nth.call(null,vec__48437_48477,(1),null);
var map__48440_48480__$1 = ((((!((map__48440_48479 == null)))?((((map__48440_48479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48440_48479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48440_48479):map__48440_48479);
var doc_48481 = cljs.core.get.call(null,map__48440_48480__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48482 = cljs.core.get.call(null,map__48440_48480__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48478);

cljs.core.println.call(null," ",arglists_48482);

if(cljs.core.truth_(doc_48481)){
cljs.core.println.call(null," ",doc_48481);
} else {
}

var G__48483 = seq__48433_48473;
var G__48484 = chunk__48434_48474;
var G__48485 = count__48435_48475;
var G__48486 = (i__48436_48476 + (1));
seq__48433_48473 = G__48483;
chunk__48434_48474 = G__48484;
count__48435_48475 = G__48485;
i__48436_48476 = G__48486;
continue;
} else {
var temp__5457__auto___48487 = cljs.core.seq.call(null,seq__48433_48473);
if(temp__5457__auto___48487){
var seq__48433_48488__$1 = temp__5457__auto___48487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48433_48488__$1)){
var c__43322__auto___48489 = cljs.core.chunk_first.call(null,seq__48433_48488__$1);
var G__48490 = cljs.core.chunk_rest.call(null,seq__48433_48488__$1);
var G__48491 = c__43322__auto___48489;
var G__48492 = cljs.core.count.call(null,c__43322__auto___48489);
var G__48493 = (0);
seq__48433_48473 = G__48490;
chunk__48434_48474 = G__48491;
count__48435_48475 = G__48492;
i__48436_48476 = G__48493;
continue;
} else {
var vec__48442_48494 = cljs.core.first.call(null,seq__48433_48488__$1);
var name_48495 = cljs.core.nth.call(null,vec__48442_48494,(0),null);
var map__48445_48496 = cljs.core.nth.call(null,vec__48442_48494,(1),null);
var map__48445_48497__$1 = ((((!((map__48445_48496 == null)))?((((map__48445_48496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48445_48496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48445_48496):map__48445_48496);
var doc_48498 = cljs.core.get.call(null,map__48445_48497__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48499 = cljs.core.get.call(null,map__48445_48497__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48495);

cljs.core.println.call(null," ",arglists_48499);

if(cljs.core.truth_(doc_48498)){
cljs.core.println.call(null," ",doc_48498);
} else {
}

var G__48500 = cljs.core.next.call(null,seq__48433_48488__$1);
var G__48501 = null;
var G__48502 = (0);
var G__48503 = (0);
seq__48433_48473 = G__48500;
chunk__48434_48474 = G__48501;
count__48435_48475 = G__48502;
i__48436_48476 = G__48503;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__48447 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48448 = null;
var count__48449 = (0);
var i__48450 = (0);
while(true){
if((i__48450 < count__48449)){
var role = cljs.core._nth.call(null,chunk__48448,i__48450);
var temp__5457__auto___48504__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___48504__$1)){
var spec_48505 = temp__5457__auto___48504__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48505));
} else {
}

var G__48506 = seq__48447;
var G__48507 = chunk__48448;
var G__48508 = count__48449;
var G__48509 = (i__48450 + (1));
seq__48447 = G__48506;
chunk__48448 = G__48507;
count__48449 = G__48508;
i__48450 = G__48509;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__48447);
if(temp__5457__auto____$1){
var seq__48447__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48447__$1)){
var c__43322__auto__ = cljs.core.chunk_first.call(null,seq__48447__$1);
var G__48510 = cljs.core.chunk_rest.call(null,seq__48447__$1);
var G__48511 = c__43322__auto__;
var G__48512 = cljs.core.count.call(null,c__43322__auto__);
var G__48513 = (0);
seq__48447 = G__48510;
chunk__48448 = G__48511;
count__48449 = G__48512;
i__48450 = G__48513;
continue;
} else {
var role = cljs.core.first.call(null,seq__48447__$1);
var temp__5457__auto___48514__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___48514__$2)){
var spec_48515 = temp__5457__auto___48514__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48515));
} else {
}

var G__48516 = cljs.core.next.call(null,seq__48447__$1);
var G__48517 = null;
var G__48518 = (0);
var G__48519 = (0);
seq__48447 = G__48516;
chunk__48448 = G__48517;
count__48449 = G__48518;
i__48450 = G__48519;
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

//# sourceMappingURL=repl.js.map?rel=1513003830170
