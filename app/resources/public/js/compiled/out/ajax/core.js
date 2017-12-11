// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55422 = arguments.length;
var i__43968__auto___55423 = (0);
while(true){
if((i__43968__auto___55423 < len__43967__auto___55422)){
args__43979__auto__.push((arguments[i__43968__auto___55423]));

var G__55424 = (i__43968__auto___55423 + (1));
i__43968__auto___55423 = G__55424;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq55420){
var G__55421 = cljs.core.first.call(null,seq55420);
var seq55420__$1 = cljs.core.next.call(null,seq55420);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__55421,seq55420__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55427 = arguments.length;
var i__43968__auto___55428 = (0);
while(true){
if((i__43968__auto___55428 < len__43967__auto___55427)){
args__43979__auto__.push((arguments[i__43968__auto___55428]));

var G__55429 = (i__43968__auto___55428 + (1));
i__43968__auto___55428 = G__55429;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq55425){
var G__55426 = cljs.core.first.call(null,seq55425);
var seq55425__$1 = cljs.core.next.call(null,seq55425);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__55426,seq55425__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55432 = arguments.length;
var i__43968__auto___55433 = (0);
while(true){
if((i__43968__auto___55433 < len__43967__auto___55432)){
args__43979__auto__.push((arguments[i__43968__auto___55433]));

var G__55434 = (i__43968__auto___55433 + (1));
i__43968__auto___55433 = G__55434;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq55430){
var G__55431 = cljs.core.first.call(null,seq55430);
var seq55430__$1 = cljs.core.next.call(null,seq55430);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__55431,seq55430__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55437 = arguments.length;
var i__43968__auto___55438 = (0);
while(true){
if((i__43968__auto___55438 < len__43967__auto___55437)){
args__43979__auto__.push((arguments[i__43968__auto___55438]));

var G__55439 = (i__43968__auto___55438 + (1));
i__43968__auto___55438 = G__55439;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq55435){
var G__55436 = cljs.core.first.call(null,seq55435);
var seq55435__$1 = cljs.core.next.call(null,seq55435);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__55436,seq55435__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55442 = arguments.length;
var i__43968__auto___55443 = (0);
while(true){
if((i__43968__auto___55443 < len__43967__auto___55442)){
args__43979__auto__.push((arguments[i__43968__auto___55443]));

var G__55444 = (i__43968__auto___55443 + (1));
i__43968__auto___55443 = G__55444;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq55440){
var G__55441 = cljs.core.first.call(null,seq55440);
var seq55440__$1 = cljs.core.next.call(null,seq55440);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__55441,seq55440__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55447 = arguments.length;
var i__43968__auto___55448 = (0);
while(true){
if((i__43968__auto___55448 < len__43967__auto___55447)){
args__43979__auto__.push((arguments[i__43968__auto___55448]));

var G__55449 = (i__43968__auto___55448 + (1));
i__43968__auto___55448 = G__55449;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq55445){
var G__55446 = cljs.core.first.call(null,seq55445);
var seq55445__$1 = cljs.core.next.call(null,seq55445);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__55446,seq55445__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55452 = arguments.length;
var i__43968__auto___55453 = (0);
while(true){
if((i__43968__auto___55453 < len__43967__auto___55452)){
args__43979__auto__.push((arguments[i__43968__auto___55453]));

var G__55454 = (i__43968__auto___55453 + (1));
i__43968__auto___55453 = G__55454;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq55450){
var G__55451 = cljs.core.first.call(null,seq55450);
var seq55450__$1 = cljs.core.next.call(null,seq55450);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__55451,seq55450__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55457 = arguments.length;
var i__43968__auto___55458 = (0);
while(true){
if((i__43968__auto___55458 < len__43967__auto___55457)){
args__43979__auto__.push((arguments[i__43968__auto___55458]));

var G__55459 = (i__43968__auto___55458 + (1));
i__43968__auto___55458 = G__55459;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq55455){
var G__55456 = cljs.core.first.call(null,seq55455);
var seq55455__$1 = cljs.core.next.call(null,seq55455);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__55456,seq55455__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55462 = arguments.length;
var i__43968__auto___55463 = (0);
while(true){
if((i__43968__auto___55463 < len__43967__auto___55462)){
args__43979__auto__.push((arguments[i__43968__auto___55463]));

var G__55464 = (i__43968__auto___55463 + (1));
i__43968__auto___55463 = G__55464;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((1) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__43980__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__55019__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__55019__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__55019__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq55460){
var G__55461 = cljs.core.first.call(null,seq55460);
var seq55460__$1 = cljs.core.next.call(null,seq55460);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__55461,seq55460__$1);
});


//# sourceMappingURL=core.js.map?rel=1513007446403
