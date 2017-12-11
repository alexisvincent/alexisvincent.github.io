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
var x__42871__auto__ = (((value == null))?null:value);
var m__42872__auto__ = (devtools.format._header[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,value);
} else {
var m__42872__auto____$1 = (devtools.format._header["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,value);
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
var x__42871__auto__ = (((value == null))?null:value);
var m__42872__auto__ = (devtools.format._has_body[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,value);
} else {
var m__42872__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,value);
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
var x__42871__auto__ = (((value == null))?null:value);
var m__42872__auto__ = (devtools.format._body[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,value);
} else {
var m__42872__auto____$1 = (devtools.format._body["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,value);
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

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o55371 = temp__5455__auto__;
var temp__5455__auto____$1 = (o55371["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o55372 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o55372["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o55373 = temp__5455__auto____$2;
return (o55373["make_template"]);
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

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o55374 = temp__5455__auto__;
var temp__5455__auto____$1 = (o55374["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o55375 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o55375["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o55376 = temp__5455__auto____$2;
return (o55376["make_group"]);
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

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o55377 = temp__5455__auto__;
var temp__5455__auto____$1 = (o55377["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o55378 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o55378["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o55379 = temp__5455__auto____$2;
return (o55379["make_reference"]);
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

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o55380 = temp__5455__auto__;
var temp__5455__auto____$1 = (o55380["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o55381 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o55381["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o55382 = temp__5455__auto____$2;
return (o55382["make_surrogate"]);
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

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o55383 = temp__5455__auto__;
var temp__5455__auto____$1 = (o55383["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o55384 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o55384["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o55385 = temp__5455__auto____$2;
return (o55385["render_markup"]);
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

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o55386 = temp__5455__auto__;
var temp__5455__auto____$1 = (o55386["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o55387 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o55387["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o55388 = temp__5455__auto____$2;
return (o55388["_LT_header_GT_"]);
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o55389 = temp__5455__auto__;
var temp__5455__auto____$1 = (o55389["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o55390 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o55390["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o55391 = temp__5455__auto____$2;
return (o55391["_LT_standard_body_GT_"]);
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
var args__44034__auto__ = [];
var len__44016__auto___55393 = arguments.length;
var i__44017__auto___55394 = (0);
while(true){
if((i__44017__auto___55394 < len__44016__auto___55393)){
args__44034__auto__.push((arguments[i__44017__auto___55394]));

var G__55395 = (i__44017__auto___55394 + (1));
i__44017__auto___55394 = G__55395;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq55392){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55392));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55397 = arguments.length;
var i__44017__auto___55398 = (0);
while(true){
if((i__44017__auto___55398 < len__44016__auto___55397)){
args__44034__auto__.push((arguments[i__44017__auto___55398]));

var G__55399 = (i__44017__auto___55398 + (1));
i__44017__auto___55398 = G__55399;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq55396){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55396));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55401 = arguments.length;
var i__44017__auto___55402 = (0);
while(true){
if((i__44017__auto___55402 < len__44016__auto___55401)){
args__44034__auto__.push((arguments[i__44017__auto___55402]));

var G__55403 = (i__44017__auto___55402 + (1));
i__44017__auto___55402 = G__55403;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq55400){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55400));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55405 = arguments.length;
var i__44017__auto___55406 = (0);
while(true){
if((i__44017__auto___55406 < len__44016__auto___55405)){
args__44034__auto__.push((arguments[i__44017__auto___55406]));

var G__55407 = (i__44017__auto___55406 + (1));
i__44017__auto___55406 = G__55407;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq55404){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55404));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55409 = arguments.length;
var i__44017__auto___55410 = (0);
while(true){
if((i__44017__auto___55410 < len__44016__auto___55409)){
args__44034__auto__.push((arguments[i__44017__auto___55410]));

var G__55411 = (i__44017__auto___55410 + (1));
i__44017__auto___55410 = G__55411;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq55408){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55408));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55413 = arguments.length;
var i__44017__auto___55414 = (0);
while(true){
if((i__44017__auto___55414 < len__44016__auto___55413)){
args__44034__auto__.push((arguments[i__44017__auto___55414]));

var G__55415 = (i__44017__auto___55414 + (1));
i__44017__auto___55414 = G__55415;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq55412){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55412));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55417 = arguments.length;
var i__44017__auto___55418 = (0);
while(true){
if((i__44017__auto___55418 < len__44016__auto___55417)){
args__44034__auto__.push((arguments[i__44017__auto___55418]));

var G__55419 = (i__44017__auto___55418 + (1));
i__44017__auto___55418 = G__55419;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq55416){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55416));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55427 = arguments.length;
var i__44017__auto___55428 = (0);
while(true){
if((i__44017__auto___55428 < len__44016__auto___55427)){
args__44034__auto__.push((arguments[i__44017__auto___55428]));

var G__55429 = (i__44017__auto___55428 + (1));
i__44017__auto___55428 = G__55429;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((1) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44035__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__55423){
var vec__55424 = p__55423;
var state_override = cljs.core.nth.call(null,vec__55424,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__55424,state_override){
return (function (p1__55420_SHARP_){
return cljs.core.merge.call(null,p1__55420_SHARP_,state_override);
});})(vec__55424,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq55421){
var G__55422 = cljs.core.first.call(null,seq55421);
var seq55421__$1 = cljs.core.next.call(null,seq55421);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__55422,seq55421__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55431 = arguments.length;
var i__44017__auto___55432 = (0);
while(true){
if((i__44017__auto___55432 < len__44016__auto___55431)){
args__44034__auto__.push((arguments[i__44017__auto___55432]));

var G__55433 = (i__44017__auto___55432 + (1));
i__44017__auto___55432 = G__55433;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq55430){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55430));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__44034__auto__ = [];
var len__44016__auto___55436 = arguments.length;
var i__44017__auto___55437 = (0);
while(true){
if((i__44017__auto___55437 < len__44016__auto___55436)){
args__44034__auto__.push((arguments[i__44017__auto___55437]));

var G__55438 = (i__44017__auto___55437 + (1));
i__44017__auto___55437 = G__55438;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((1) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44035__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq55434){
var G__55435 = cljs.core.first.call(null,seq55434);
var seq55434__$1 = cljs.core.next.call(null,seq55434);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__55435,seq55434__$1);
});


//# sourceMappingURL=format.js.map?rel=1513003909357
