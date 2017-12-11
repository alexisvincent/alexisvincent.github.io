// Compiled by ClojureScript 1.9.908 {}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__44096__auto__ = [];
var len__44089__auto___58319 = arguments.length;
var i__44090__auto___58320 = (0);
while(true){
if((i__44090__auto___58320 < len__44089__auto___58319)){
args__44096__auto__.push((arguments[i__44090__auto___58320]));

var G__58321 = (i__44090__auto___58320 + (1));
i__44090__auto___58320 = G__58321;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__58313){
var vec__58314 = p__58313;
var _opts = cljs.core.nth.call(null,vec__58314,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__58314,_opts){
return (function (data){
var map__58317 = data;
var map__58317__$1 = ((((!((map__58317 == null)))?((((map__58317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58317):map__58317);
var output_fn = cljs.core.get.call(null,map__58317__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
return cljs.core.println.call(null,output_fn.call(null,data));
});})(vec__58314,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq58312){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58312));
});

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__44096__auto__ = [];
var len__44089__auto___58336 = arguments.length;
var i__44090__auto___58337 = (0);
while(true){
if((i__44090__auto___58337 < len__44089__auto___58336)){
args__44096__auto__.push((arguments[i__44090__auto___58337]));

var G__58338 = (i__44090__auto___58337 + (1));
i__44090__auto___58337 = G__58338;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__58323){
var vec__58324 = p__58323;
var map__58327 = cljs.core.nth.call(null,vec__58324,(0),null);
var map__58327__$1 = ((((!((map__58327 == null)))?((((map__58327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58327):map__58327);
var raw_output_QMARK_ = cljs.core.get.call(null,map__58327__$1,new cljs.core.Keyword(null,"raw-output?","raw-output?",1301869164));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_((function (){var and__41384__auto__ = typeof console !== 'undefined';
if(and__41384__auto__){
return console.log;
} else {
return and__41384__auto__;
}
})())?(function (){var level__GT_logger = ((function (vec__58324,map__58327,map__58327__$1,raw_output_QMARK_){
return (function (level){
var or__41411__auto__ = (function (){var G__58330 = level;
var G__58330__$1 = (((G__58330 instanceof cljs.core.Keyword))?G__58330.fqn:null);
switch (G__58330__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58330__$1)].join('')));

}
})();
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return console.log;
}
});})(vec__58324,map__58327,map__58327__$1,raw_output_QMARK_))
;
return ((function (level__GT_logger,vec__58324,map__58327,map__58327__$1,raw_output_QMARK_){
return (function (data){
var map__58331 = data;
var map__58331__$1 = ((((!((map__58331 == null)))?((((map__58331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58331):map__58331);
var level = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var output_fn = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var vargs_ = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var vargs = cljs.core.deref.call(null,vargs_);
var vec__58332 = taoensso.encore.vsplit_first.call(null,vargs);
var v1 = cljs.core.nth.call(null,vec__58332,(0),null);
var vnext = cljs.core.nth.call(null,vec__58332,(1),null);
var logger = level__GT_logger.call(null,level);
if(cljs.core.truth_((function (){var or__41411__auto__ = raw_output_QMARK_;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("timbre","raw","timbre/raw",-1823417723));
}
})())){
var output = output_fn.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay(((function (map__58331,map__58331__$1,level,output_fn,vargs_,vargs,vec__58332,v1,vnext,logger,level__GT_logger,vec__58324,map__58327,map__58327__$1,raw_output_QMARK_){
return (function (){
return "";
});})(map__58331,map__58331__$1,level,output_fn,vargs_,vargs,vec__58332,v1,vnext,logger,level__GT_logger,vec__58324,map__58327,map__58327__$1,raw_output_QMARK_))
,null)),new cljs.core.Keyword(null,"?err_","?err_",789480858),(new cljs.core.Delay(((function (map__58331,map__58331__$1,level,output_fn,vargs_,vargs,vec__58332,v1,vnext,logger,level__GT_logger,vec__58324,map__58327,map__58327__$1,raw_output_QMARK_){
return (function (){
return null;
});})(map__58331,map__58331__$1,level,output_fn,vargs_,vargs,vec__58332,v1,vnext,logger,level__GT_logger,vec__58324,map__58327,map__58327__$1,raw_output_QMARK_))
,null))));
var args = cljs.core.cons.call(null,output,cljs.core.cons.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"?err_","?err_",789480858).cljs$core$IFn$_invoke$arity$1(data)),vnext));
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,output_fn.call(null,data));
}
});
;})(level__GT_logger,vec__58324,map__58327,map__58327__$1,raw_output_QMARK_))
})():((function (vec__58324,map__58327,map__58327__$1,raw_output_QMARK_){
return (function (data){
return null;
});})(vec__58324,map__58327,map__58327__$1,raw_output_QMARK_))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq58322){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58322));
});

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=core.js.map?rel=1512631539457
