// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x56481_56482 = value;
x56481_56482.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x56484_56485 = value;
x56484_56485.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x56487_56488 = value;
x56487_56488.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__41318__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__41318__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__41318__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__44034__auto__ = [];
var len__44016__auto___56495 = arguments.length;
var i__44017__auto___56496 = (0);
while(true){
if((i__44017__auto___56496 < len__44016__auto___56495)){
args__44034__auto__.push((arguments[i__44017__auto___56496]));

var G__56497 = (i__44017__auto___56496 + (1));
i__44017__auto___56496 = G__56497;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((0) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__44035__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__56491_56498 = cljs.core.seq.call(null,items);
var chunk__56492_56499 = null;
var count__56493_56500 = (0);
var i__56494_56501 = (0);
while(true){
if((i__56494_56501 < count__56493_56500)){
var item_56502 = cljs.core._nth.call(null,chunk__56492_56499,i__56494_56501);
if(!((item_56502 == null))){
if(cljs.core.coll_QMARK_.call(null,item_56502)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_56502)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_56502));
}
} else {
}

var G__56503 = seq__56491_56498;
var G__56504 = chunk__56492_56499;
var G__56505 = count__56493_56500;
var G__56506 = (i__56494_56501 + (1));
seq__56491_56498 = G__56503;
chunk__56492_56499 = G__56504;
count__56493_56500 = G__56505;
i__56494_56501 = G__56506;
continue;
} else {
var temp__5457__auto___56507 = cljs.core.seq.call(null,seq__56491_56498);
if(temp__5457__auto___56507){
var seq__56491_56508__$1 = temp__5457__auto___56507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56491_56508__$1)){
var c__43322__auto___56509 = cljs.core.chunk_first.call(null,seq__56491_56508__$1);
var G__56510 = cljs.core.chunk_rest.call(null,seq__56491_56508__$1);
var G__56511 = c__43322__auto___56509;
var G__56512 = cljs.core.count.call(null,c__43322__auto___56509);
var G__56513 = (0);
seq__56491_56498 = G__56510;
chunk__56492_56499 = G__56511;
count__56493_56500 = G__56512;
i__56494_56501 = G__56513;
continue;
} else {
var item_56514 = cljs.core.first.call(null,seq__56491_56508__$1);
if(!((item_56514 == null))){
if(cljs.core.coll_QMARK_.call(null,item_56514)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_56514)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_56514));
}
} else {
}

var G__56515 = cljs.core.next.call(null,seq__56491_56508__$1);
var G__56516 = null;
var G__56517 = (0);
var G__56518 = (0);
seq__56491_56498 = G__56515;
chunk__56492_56499 = G__56516;
count__56493_56500 = G__56517;
i__56494_56501 = G__56518;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq56490){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56490));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__44034__auto__ = [];
var len__44016__auto___56526 = arguments.length;
var i__44017__auto___56527 = (0);
while(true){
if((i__44017__auto___56527 < len__44016__auto___56526)){
args__44034__auto__.push((arguments[i__44017__auto___56527]));

var G__56528 = (i__44017__auto___56527 + (1));
i__44017__auto___56527 = G__56528;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((2) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44035__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__56522_56529 = cljs.core.seq.call(null,children);
var chunk__56523_56530 = null;
var count__56524_56531 = (0);
var i__56525_56532 = (0);
while(true){
if((i__56525_56532 < count__56524_56531)){
var child_56533 = cljs.core._nth.call(null,chunk__56523_56530,i__56525_56532);
if(!((child_56533 == null))){
if(cljs.core.coll_QMARK_.call(null,child_56533)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_56533))));
} else {
var temp__5455__auto___56534 = devtools.formatters.helpers.pref.call(null,child_56533);
if(cljs.core.truth_(temp__5455__auto___56534)){
var child_value_56535 = temp__5455__auto___56534;
template.push(child_value_56535);
} else {
}
}
} else {
}

var G__56536 = seq__56522_56529;
var G__56537 = chunk__56523_56530;
var G__56538 = count__56524_56531;
var G__56539 = (i__56525_56532 + (1));
seq__56522_56529 = G__56536;
chunk__56523_56530 = G__56537;
count__56524_56531 = G__56538;
i__56525_56532 = G__56539;
continue;
} else {
var temp__5457__auto___56540 = cljs.core.seq.call(null,seq__56522_56529);
if(temp__5457__auto___56540){
var seq__56522_56541__$1 = temp__5457__auto___56540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56522_56541__$1)){
var c__43322__auto___56542 = cljs.core.chunk_first.call(null,seq__56522_56541__$1);
var G__56543 = cljs.core.chunk_rest.call(null,seq__56522_56541__$1);
var G__56544 = c__43322__auto___56542;
var G__56545 = cljs.core.count.call(null,c__43322__auto___56542);
var G__56546 = (0);
seq__56522_56529 = G__56543;
chunk__56523_56530 = G__56544;
count__56524_56531 = G__56545;
i__56525_56532 = G__56546;
continue;
} else {
var child_56547 = cljs.core.first.call(null,seq__56522_56541__$1);
if(!((child_56547 == null))){
if(cljs.core.coll_QMARK_.call(null,child_56547)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_56547))));
} else {
var temp__5455__auto___56548 = devtools.formatters.helpers.pref.call(null,child_56547);
if(cljs.core.truth_(temp__5455__auto___56548)){
var child_value_56549 = temp__5455__auto___56548;
template.push(child_value_56549);
} else {
}
}
} else {
}

var G__56550 = cljs.core.next.call(null,seq__56522_56541__$1);
var G__56551 = null;
var G__56552 = (0);
var G__56553 = (0);
seq__56522_56529 = G__56550;
chunk__56523_56530 = G__56551;
count__56524_56531 = G__56552;
i__56525_56532 = G__56553;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq56519){
var G__56520 = cljs.core.first.call(null,seq56519);
var seq56519__$1 = cljs.core.next.call(null,seq56519);
var G__56521 = cljs.core.first.call(null,seq56519__$1);
var seq56519__$2 = cljs.core.next.call(null,seq56519__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__56520,G__56521,seq56519__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__44034__auto__ = [];
var len__44016__auto___56556 = arguments.length;
var i__44017__auto___56557 = (0);
while(true){
if((i__44017__auto___56557 < len__44016__auto___56556)){
args__44034__auto__.push((arguments[i__44017__auto___56557]));

var G__56558 = (i__44017__auto___56557 + (1));
i__44017__auto___56557 = G__56558;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((1) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44035__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq56554){
var G__56555 = cljs.core.first.call(null,seq56554);
var seq56554__$1 = cljs.core.next.call(null,seq56554);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56555,seq56554__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__44034__auto__ = [];
var len__44016__auto___56561 = arguments.length;
var i__44017__auto___56562 = (0);
while(true){
if((i__44017__auto___56562 < len__44016__auto___56561)){
args__44034__auto__.push((arguments[i__44017__auto___56562]));

var G__56563 = (i__44017__auto___56562 + (1));
i__44017__auto___56562 = G__56563;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((1) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44035__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq56559){
var G__56560 = cljs.core.first.call(null,seq56559);
var seq56559__$1 = cljs.core.next.call(null,seq56559);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56560,seq56559__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__56565 = arguments.length;
switch (G__56565) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj56567 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__41331__auto__ = start_index;
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
} else {
return (0);
}
})()};
return obj56567;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__44034__auto__ = [];
var len__44016__auto___56575 = arguments.length;
var i__44017__auto___56576 = (0);
while(true){
if((i__44017__auto___56576 < len__44016__auto___56575)){
args__44034__auto__.push((arguments[i__44017__auto___56576]));

var G__56577 = (i__44017__auto___56576 + (1));
i__44017__auto___56576 = G__56577;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((1) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44035__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__56571){
var vec__56572 = p__56571;
var state_override_fn = cljs.core.nth.call(null,vec__56572,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq56569){
var G__56570 = cljs.core.first.call(null,seq56569);
var seq56569__$1 = cljs.core.next.call(null,seq56569);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__56570,seq56569__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_56578 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_56578;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__56579 = name;
switch (G__56579) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__56581 = tag;
var html_tag = cljs.core.nth.call(null,vec__56581,(0),null);
var style = cljs.core.nth.call(null,vec__56581,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_56584 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_56584;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_56585 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_56586 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_56586;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_56585;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__56587 = initial_value;
var G__56588 = value.call(null);
initial_value = G__56587;
value = G__56588;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__56589 = initial_value;
var G__56590 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__56589;
value = G__56590;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__56591 = initial_value;
var G__56592 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__56591;
value = G__56592;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1513003910822
