// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__45328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45329 = null;
var count__45330 = (0);
var i__45331 = (0);
while(true){
if((i__45331 < count__45330)){
var vec__45332 = cljs.core._nth.call(null,chunk__45329,i__45331);
var effect_key = cljs.core.nth.call(null,vec__45332,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45332,(1),null);
var temp__5276__auto___45338 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5276__auto___45338)){
var effect_fn_45339 = temp__5276__auto___45338;
effect_fn_45339.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45340 = seq__45328;
var G__45341 = chunk__45329;
var G__45342 = count__45330;
var G__45343 = (i__45331 + (1));
seq__45328 = G__45340;
chunk__45329 = G__45341;
count__45330 = G__45342;
i__45331 = G__45343;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45328);
if(temp__5278__auto__){
var seq__45328__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45328__$1)){
var c__43741__auto__ = cljs.core.chunk_first.call(null,seq__45328__$1);
var G__45344 = cljs.core.chunk_rest.call(null,seq__45328__$1);
var G__45345 = c__43741__auto__;
var G__45346 = cljs.core.count.call(null,c__43741__auto__);
var G__45347 = (0);
seq__45328 = G__45344;
chunk__45329 = G__45345;
count__45330 = G__45346;
i__45331 = G__45347;
continue;
} else {
var vec__45335 = cljs.core.first.call(null,seq__45328__$1);
var effect_key = cljs.core.nth.call(null,vec__45335,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45335,(1),null);
var temp__5276__auto___45348 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5276__auto___45348)){
var effect_fn_45349 = temp__5276__auto___45348;
effect_fn_45349.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45350 = cljs.core.next.call(null,seq__45328__$1);
var G__45351 = null;
var G__45352 = (0);
var G__45353 = (0);
seq__45328 = G__45350;
chunk__45329 = G__45351;
count__45330 = G__45352;
i__45331 = G__45353;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45354 = cljs.core.seq.call(null,value);
var chunk__45355 = null;
var count__45356 = (0);
var i__45357 = (0);
while(true){
if((i__45357 < count__45356)){
var map__45358 = cljs.core._nth.call(null,chunk__45355,i__45357);
var map__45358__$1 = ((((!((map__45358 == null)))?((((map__45358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45358):map__45358);
var effect = map__45358__$1;
var ms = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45354,chunk__45355,count__45356,i__45357,map__45358,map__45358__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45354,chunk__45355,count__45356,i__45357,map__45358,map__45358__$1,effect,ms,dispatch))
,ms);
}

var G__45362 = seq__45354;
var G__45363 = chunk__45355;
var G__45364 = count__45356;
var G__45365 = (i__45357 + (1));
seq__45354 = G__45362;
chunk__45355 = G__45363;
count__45356 = G__45364;
i__45357 = G__45365;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45354);
if(temp__5278__auto__){
var seq__45354__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45354__$1)){
var c__43741__auto__ = cljs.core.chunk_first.call(null,seq__45354__$1);
var G__45366 = cljs.core.chunk_rest.call(null,seq__45354__$1);
var G__45367 = c__43741__auto__;
var G__45368 = cljs.core.count.call(null,c__43741__auto__);
var G__45369 = (0);
seq__45354 = G__45366;
chunk__45355 = G__45367;
count__45356 = G__45368;
i__45357 = G__45369;
continue;
} else {
var map__45360 = cljs.core.first.call(null,seq__45354__$1);
var map__45360__$1 = ((((!((map__45360 == null)))?((((map__45360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45360):map__45360);
var effect = map__45360__$1;
var ms = cljs.core.get.call(null,map__45360__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45360__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45354,chunk__45355,count__45356,i__45357,map__45360,map__45360__$1,effect,ms,dispatch,seq__45354__$1,temp__5278__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45354,chunk__45355,count__45356,i__45357,map__45360,map__45360__$1,effect,ms,dispatch,seq__45354__$1,temp__5278__auto__))
,ms);
}

var G__45370 = cljs.core.next.call(null,seq__45354__$1);
var G__45371 = null;
var G__45372 = (0);
var G__45373 = (0);
seq__45354 = G__45370;
chunk__45355 = G__45371;
count__45356 = G__45372;
i__45357 = G__45373;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__45374 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45375 = null;
var count__45376 = (0);
var i__45377 = (0);
while(true){
if((i__45377 < count__45376)){
var event = cljs.core._nth.call(null,chunk__45375,i__45377);
re_frame.router.dispatch.call(null,event);

var G__45378 = seq__45374;
var G__45379 = chunk__45375;
var G__45380 = count__45376;
var G__45381 = (i__45377 + (1));
seq__45374 = G__45378;
chunk__45375 = G__45379;
count__45376 = G__45380;
i__45377 = G__45381;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45374);
if(temp__5278__auto__){
var seq__45374__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45374__$1)){
var c__43741__auto__ = cljs.core.chunk_first.call(null,seq__45374__$1);
var G__45382 = cljs.core.chunk_rest.call(null,seq__45374__$1);
var G__45383 = c__43741__auto__;
var G__45384 = cljs.core.count.call(null,c__43741__auto__);
var G__45385 = (0);
seq__45374 = G__45382;
chunk__45375 = G__45383;
count__45376 = G__45384;
i__45377 = G__45385;
continue;
} else {
var event = cljs.core.first.call(null,seq__45374__$1);
re_frame.router.dispatch.call(null,event);

var G__45386 = cljs.core.next.call(null,seq__45374__$1);
var G__45387 = null;
var G__45388 = (0);
var G__45389 = (0);
seq__45374 = G__45386;
chunk__45375 = G__45387;
count__45376 = G__45388;
i__45377 = G__45389;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__45390 = cljs.core.seq.call(null,value);
var chunk__45391 = null;
var count__45392 = (0);
var i__45393 = (0);
while(true){
if((i__45393 < count__45392)){
var event = cljs.core._nth.call(null,chunk__45391,i__45393);
clear_event.call(null,event);

var G__45394 = seq__45390;
var G__45395 = chunk__45391;
var G__45396 = count__45392;
var G__45397 = (i__45393 + (1));
seq__45390 = G__45394;
chunk__45391 = G__45395;
count__45392 = G__45396;
i__45393 = G__45397;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__45390);
if(temp__5278__auto__){
var seq__45390__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45390__$1)){
var c__43741__auto__ = cljs.core.chunk_first.call(null,seq__45390__$1);
var G__45398 = cljs.core.chunk_rest.call(null,seq__45390__$1);
var G__45399 = c__43741__auto__;
var G__45400 = cljs.core.count.call(null,c__43741__auto__);
var G__45401 = (0);
seq__45390 = G__45398;
chunk__45391 = G__45399;
count__45392 = G__45400;
i__45393 = G__45401;
continue;
} else {
var event = cljs.core.first.call(null,seq__45390__$1);
clear_event.call(null,event);

var G__45402 = cljs.core.next.call(null,seq__45390__$1);
var G__45403 = null;
var G__45404 = (0);
var G__45405 = (0);
seq__45390 = G__45402;
chunk__45391 = G__45403;
count__45392 = G__45404;
i__45393 = G__45405;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1509370369671
