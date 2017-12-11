// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__43049__auto__ = (((value == null))?null:value);
var m__43050__auto__ = (devtools.format._header[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,value);
} else {
var m__43050__auto____$1 = (devtools.format._header["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__43049__auto__ = (((value == null))?null:value);
var m__43050__auto__ = (devtools.format._has_body[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,value);
} else {
var m__43050__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__43049__auto__ = (((value == null))?null:value);
var m__43050__auto__ = (devtools.format._body[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,value);
} else {
var m__43050__auto____$1 = (devtools.format._body["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o62549 = temp__5276__auto__;
var temp__5276__auto____$1 = (o62549["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o62550 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o62550["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o62551 = temp__5276__auto____$2;
return (o62551["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o62552 = temp__5276__auto__;
var temp__5276__auto____$1 = (o62552["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o62553 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o62553["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o62554 = temp__5276__auto____$2;
return (o62554["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o62555 = temp__5276__auto__;
var temp__5276__auto____$1 = (o62555["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o62556 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o62556["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o62557 = temp__5276__auto____$2;
return (o62557["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o62558 = temp__5276__auto__;
var temp__5276__auto____$1 = (o62558["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o62559 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o62559["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o62560 = temp__5276__auto____$2;
return (o62560["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o62561 = temp__5276__auto__;
var temp__5276__auto____$1 = (o62561["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o62562 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o62562["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o62563 = temp__5276__auto____$2;
return (o62563["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o62564 = temp__5276__auto__;
var temp__5276__auto____$1 = (o62564["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o62565 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o62565["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o62566 = temp__5276__auto____$2;
return (o62566["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o62567 = temp__5276__auto__;
var temp__5276__auto____$1 = (o62567["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o62568 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o62568["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o62569 = temp__5276__auto____$2;
return (o62569["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62571 = arguments.length;
var i__44090__auto___62572 = (0);
while(true){
if((i__44090__auto___62572 < len__44089__auto___62571)){
args__44096__auto__.push((arguments[i__44090__auto___62572]));

var G__62573 = (i__44090__auto___62572 + (1));
i__44090__auto___62572 = G__62573;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq62570){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62570));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62575 = arguments.length;
var i__44090__auto___62576 = (0);
while(true){
if((i__44090__auto___62576 < len__44089__auto___62575)){
args__44096__auto__.push((arguments[i__44090__auto___62576]));

var G__62577 = (i__44090__auto___62576 + (1));
i__44090__auto___62576 = G__62577;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq62574){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62574));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62579 = arguments.length;
var i__44090__auto___62580 = (0);
while(true){
if((i__44090__auto___62580 < len__44089__auto___62579)){
args__44096__auto__.push((arguments[i__44090__auto___62580]));

var G__62581 = (i__44090__auto___62580 + (1));
i__44090__auto___62580 = G__62581;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq62578){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62578));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62583 = arguments.length;
var i__44090__auto___62584 = (0);
while(true){
if((i__44090__auto___62584 < len__44089__auto___62583)){
args__44096__auto__.push((arguments[i__44090__auto___62584]));

var G__62585 = (i__44090__auto___62584 + (1));
i__44090__auto___62584 = G__62585;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq62582){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62582));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62587 = arguments.length;
var i__44090__auto___62588 = (0);
while(true){
if((i__44090__auto___62588 < len__44089__auto___62587)){
args__44096__auto__.push((arguments[i__44090__auto___62588]));

var G__62589 = (i__44090__auto___62588 + (1));
i__44090__auto___62588 = G__62589;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq62586){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62586));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62591 = arguments.length;
var i__44090__auto___62592 = (0);
while(true){
if((i__44090__auto___62592 < len__44089__auto___62591)){
args__44096__auto__.push((arguments[i__44090__auto___62592]));

var G__62593 = (i__44090__auto___62592 + (1));
i__44090__auto___62592 = G__62593;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq62590){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62590));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62595 = arguments.length;
var i__44090__auto___62596 = (0);
while(true){
if((i__44090__auto___62596 < len__44089__auto___62595)){
args__44096__auto__.push((arguments[i__44090__auto___62596]));

var G__62597 = (i__44090__auto___62596 + (1));
i__44090__auto___62596 = G__62597;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq62594){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62594));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62605 = arguments.length;
var i__44090__auto___62606 = (0);
while(true){
if((i__44090__auto___62606 < len__44089__auto___62605)){
args__44096__auto__.push((arguments[i__44090__auto___62606]));

var G__62607 = (i__44090__auto___62606 + (1));
i__44090__auto___62606 = G__62607;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__62601){
var vec__62602 = p__62601;
var state_override = cljs.core.nth.call(null,vec__62602,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__62602,state_override){
return (function (p1__62598_SHARP_){
return cljs.core.merge.call(null,p1__62598_SHARP_,state_override);
});})(vec__62602,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq62599){
var G__62600 = cljs.core.first.call(null,seq62599);
var seq62599__$1 = cljs.core.next.call(null,seq62599);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__62600,seq62599__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62609 = arguments.length;
var i__44090__auto___62610 = (0);
while(true){
if((i__44090__auto___62610 < len__44089__auto___62609)){
args__44096__auto__.push((arguments[i__44090__auto___62610]));

var G__62611 = (i__44090__auto___62610 + (1));
i__44090__auto___62610 = G__62611;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq62608){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62608));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62614 = arguments.length;
var i__44090__auto___62615 = (0);
while(true){
if((i__44090__auto___62615 < len__44089__auto___62614)){
args__44096__auto__.push((arguments[i__44090__auto___62615]));

var G__62616 = (i__44090__auto___62615 + (1));
i__44090__auto___62615 = G__62616;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq62612){
var G__62613 = cljs.core.first.call(null,seq62612);
var seq62612__$1 = cljs.core.next.call(null,seq62612);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__62613,seq62612__$1);
});


//# sourceMappingURL=format.js.map?rel=1512631545012
