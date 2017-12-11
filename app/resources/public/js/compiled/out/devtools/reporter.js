// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__44034__auto__ = [];
var len__44016__auto___56800 = arguments.length;
var i__44017__auto___56801 = (0);
while(true){
if((i__44017__auto___56801 < len__44016__auto___56800)){
args__44034__auto__.push((arguments[i__44017__auto___56801]));

var G__56802 = (i__44017__auto___56801 + (1));
i__44017__auto___56801 = G__56802;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((1) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44035__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__56795){
var vec__56796 = p__56795;
var context = cljs.core.nth.call(null,vec__56796,(0),null);
var footer = cljs.core.nth.call(null,vec__56796,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__41331__auto__ = e.message;
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e56799){var e__$1 = e56799;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq56793){
var G__56794 = cljs.core.first.call(null,seq56793);
var seq56793__$1 = cljs.core.next.call(null,seq56793);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56794,seq56793__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1513003911208
