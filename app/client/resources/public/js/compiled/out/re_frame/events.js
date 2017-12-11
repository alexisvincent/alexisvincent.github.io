// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__45208_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__45208_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__5278__auto___45209 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5278__auto___45209)){
var not_i_45210 = temp__5278__auto___45209;
if(cljs.core.fn_QMARK_.call(null,not_i_45210)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_45210);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_45210);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__5276__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5276__auto__)){
var interceptors = temp__5276__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_45211 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_45212 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__45156__auto___45225 = re_frame.interop.now.call(null);
var duration__45157__auto___45226 = (end__45156__auto___45225 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__45213_45227 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45214_45228 = null;
var count__45215_45229 = (0);
var i__45216_45230 = (0);
while(true){
if((i__45216_45230 < count__45215_45229)){
var vec__45217_45231 = cljs.core._nth.call(null,chunk__45214_45228,i__45216_45230);
var k__45158__auto___45232 = cljs.core.nth.call(null,vec__45217_45231,(0),null);
var cb__45159__auto___45233 = cljs.core.nth.call(null,vec__45217_45231,(1),null);
try{cb__45159__auto___45233.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45157__auto___45226,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45220){if((e45220 instanceof java.lang.Exception)){
var e__45160__auto___45234 = e45220;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__45158__auto___45232,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__45160__auto___45234);
} else {
throw e45220;

}
}
var G__45235 = seq__45213_45227;
var G__45236 = chunk__45214_45228;
var G__45237 = count__45215_45229;
var G__45238 = (i__45216_45230 + (1));
seq__45213_45227 = G__45235;
chunk__45214_45228 = G__45236;
count__45215_45229 = G__45237;
i__45216_45230 = G__45238;
continue;
} else {
var temp__5278__auto___45239 = cljs.core.seq.call(null,seq__45213_45227);
if(temp__5278__auto___45239){
var seq__45213_45240__$1 = temp__5278__auto___45239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45213_45240__$1)){
var c__43741__auto___45241 = cljs.core.chunk_first.call(null,seq__45213_45240__$1);
var G__45242 = cljs.core.chunk_rest.call(null,seq__45213_45240__$1);
var G__45243 = c__43741__auto___45241;
var G__45244 = cljs.core.count.call(null,c__43741__auto___45241);
var G__45245 = (0);
seq__45213_45227 = G__45242;
chunk__45214_45228 = G__45243;
count__45215_45229 = G__45244;
i__45216_45230 = G__45245;
continue;
} else {
var vec__45221_45246 = cljs.core.first.call(null,seq__45213_45240__$1);
var k__45158__auto___45247 = cljs.core.nth.call(null,vec__45221_45246,(0),null);
var cb__45159__auto___45248 = cljs.core.nth.call(null,vec__45221_45246,(1),null);
try{cb__45159__auto___45248.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45157__auto___45226,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45224){if((e45224 instanceof java.lang.Exception)){
var e__45160__auto___45249 = e45224;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__45158__auto___45247,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__45160__auto___45249);
} else {
throw e45224;

}
}
var G__45250 = cljs.core.next.call(null,seq__45213_45240__$1);
var G__45251 = null;
var G__45252 = (0);
var G__45253 = (0);
seq__45213_45227 = G__45250;
chunk__45214_45228 = G__45251;
count__45215_45229 = G__45252;
i__45216_45230 = G__45253;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_45212;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_45211;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1509370369339
