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
var args__44096__auto__ = [];
var len__44089__auto___46606 = arguments.length;
var i__44090__auto___46607 = (0);
while(true){
if((i__44090__auto___46607 < len__44089__auto___46606)){
args__44096__auto__.push((arguments[i__44090__auto___46607]));

var G__46608 = (i__44090__auto___46607 + (1));
i__44090__auto___46607 = G__46608;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq46604){
var G__46605 = cljs.core.first.call(null,seq46604);
var seq46604__$1 = cljs.core.next.call(null,seq46604);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__46605,seq46604__$1);
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
var args__44096__auto__ = [];
var len__44089__auto___46611 = arguments.length;
var i__44090__auto___46612 = (0);
while(true){
if((i__44090__auto___46612 < len__44089__auto___46611)){
args__44096__auto__.push((arguments[i__44090__auto___46612]));

var G__46613 = (i__44090__auto___46612 + (1));
i__44090__auto___46612 = G__46613;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq46609){
var G__46610 = cljs.core.first.call(null,seq46609);
var seq46609__$1 = cljs.core.next.call(null,seq46609);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__46610,seq46609__$1);
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
var args__44096__auto__ = [];
var len__44089__auto___46616 = arguments.length;
var i__44090__auto___46617 = (0);
while(true){
if((i__44090__auto___46617 < len__44089__auto___46616)){
args__44096__auto__.push((arguments[i__44090__auto___46617]));

var G__46618 = (i__44090__auto___46617 + (1));
i__44090__auto___46617 = G__46618;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq46614){
var G__46615 = cljs.core.first.call(null,seq46614);
var seq46614__$1 = cljs.core.next.call(null,seq46614);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__46615,seq46614__$1);
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
var args__44096__auto__ = [];
var len__44089__auto___46621 = arguments.length;
var i__44090__auto___46622 = (0);
while(true){
if((i__44090__auto___46622 < len__44089__auto___46621)){
args__44096__auto__.push((arguments[i__44090__auto___46622]));

var G__46623 = (i__44090__auto___46622 + (1));
i__44090__auto___46622 = G__46623;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq46619){
var G__46620 = cljs.core.first.call(null,seq46619);
var seq46619__$1 = cljs.core.next.call(null,seq46619);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__46620,seq46619__$1);
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
var args__44096__auto__ = [];
var len__44089__auto___46626 = arguments.length;
var i__44090__auto___46627 = (0);
while(true){
if((i__44090__auto___46627 < len__44089__auto___46626)){
args__44096__auto__.push((arguments[i__44090__auto___46627]));

var G__46628 = (i__44090__auto___46627 + (1));
i__44090__auto___46627 = G__46628;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq46624){
var G__46625 = cljs.core.first.call(null,seq46624);
var seq46624__$1 = cljs.core.next.call(null,seq46624);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__46625,seq46624__$1);
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
var args__44096__auto__ = [];
var len__44089__auto___46631 = arguments.length;
var i__44090__auto___46632 = (0);
while(true){
if((i__44090__auto___46632 < len__44089__auto___46631)){
args__44096__auto__.push((arguments[i__44090__auto___46632]));

var G__46633 = (i__44090__auto___46632 + (1));
i__44090__auto___46632 = G__46633;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq46629){
var G__46630 = cljs.core.first.call(null,seq46629);
var seq46629__$1 = cljs.core.next.call(null,seq46629);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__46630,seq46629__$1);
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
var args__44096__auto__ = [];
var len__44089__auto___46636 = arguments.length;
var i__44090__auto___46637 = (0);
while(true){
if((i__44090__auto___46637 < len__44089__auto___46636)){
args__44096__auto__.push((arguments[i__44090__auto___46637]));

var G__46638 = (i__44090__auto___46637 + (1));
i__44090__auto___46637 = G__46638;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq46634){
var G__46635 = cljs.core.first.call(null,seq46634);
var seq46634__$1 = cljs.core.next.call(null,seq46634);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__46635,seq46634__$1);
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
var args__44096__auto__ = [];
var len__44089__auto___46641 = arguments.length;
var i__44090__auto___46642 = (0);
while(true){
if((i__44090__auto___46642 < len__44089__auto___46641)){
args__44096__auto__.push((arguments[i__44090__auto___46642]));

var G__46643 = (i__44090__auto___46642 + (1));
i__44090__auto___46642 = G__46643;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq46639){
var G__46640 = cljs.core.first.call(null,seq46639);
var seq46639__$1 = cljs.core.next.call(null,seq46639);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__46640,seq46639__$1);
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
var args__44096__auto__ = [];
var len__44089__auto___46646 = arguments.length;
var i__44090__auto___46647 = (0);
while(true){
if((i__44090__auto___46647 < len__44089__auto___46646)){
args__44096__auto__.push((arguments[i__44090__auto___46647]));

var G__46648 = (i__44090__auto___46647 + (1));
i__44090__auto___46647 = G__46648;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__46203__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__46203__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__46203__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq46644){
var G__46645 = cljs.core.first.call(null,seq46644);
var seq46644__$1 = cljs.core.next.call(null,seq46644);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__46645,seq46644__$1);
});


//# sourceMappingURL=core.js.map?rel=1512631523276
