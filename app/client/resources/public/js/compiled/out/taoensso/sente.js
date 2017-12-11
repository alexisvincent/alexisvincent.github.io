// Compiled by ClojureScript 1.9.908 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__59280 = x;
var ev_id = cljs.core.nth.call(null,vec__59280,(0),null);
var _ = cljs.core.nth.call(null,vec__59280,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5278__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__5278__auto__)){
var _QMARK_err = temp__5278__auto__;
var err_fmt = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__59283 = _QMARK_err;
var G__59283__$1 = (((G__59283 instanceof cljs.core.Keyword))?G__59283.fqn:null);
switch (G__59283__$1) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59283__$1)].join('')));

}
})())," Event should be of `[ev-id ?ev-data]` form: %s"].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__41384__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__41384__auto__){
var and__41384__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__41384__auto____$1)){
var map__59285 = x;
var map__59285__$1 = ((((!((map__59285 == null)))?((((map__59285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59285):map__59285);
var ch_recv = cljs.core.get.call(null,map__59285__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__59285__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__59285__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__59285__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__41384__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__41384__auto____$2){
var and__41384__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__41384__auto____$3){
var and__41384__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(and__41384__auto____$4){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__41384__auto____$4;
}
} else {
return and__41384__auto____$3;
}
} else {
return and__41384__auto____$2;
}
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__41384__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__41384__auto__){
var and__41384__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__41384__auto____$1)){
var map__59287 = x;
var map__59287__$1 = ((((!((map__59287 == null)))?((((map__59287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59287):map__59287);
var ch_recv = cljs.core.get.call(null,map__59287__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__59287__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__59287__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__59287__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__59287__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__59287__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__59287__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__41384__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(and__41384__auto____$2){
var and__41384__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__41384__auto____$3){
var and__41384__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(and__41384__auto____$4){
var and__41384__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__41384__auto____$5){
var and__41384__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(and__41384__auto____$6){
var and__41384__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__41384__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__41384__auto____$7;
}
} else {
return and__41384__auto____$6;
}
} else {
return and__41384__auto____$5;
}
} else {
return and__41384__auto____$4;
}
} else {
return and__41384__auto____$3;
}
} else {
return and__41384__auto____$2;
}
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__59289){
var map__59290 = p__59289;
var map__59290__$1 = ((((!((map__59290 == null)))?((((map__59290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59290):map__59290);
var ev_msg = map__59290__$1;
var event = cljs.core.get.call(null,map__59290__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__59290__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__59292 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__59292,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__59292,(1),null);
var valid_event = vec__59292;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59292,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__59290,map__59290__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__59292,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__59290,map__59290__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59296){if((e59296 instanceof Error)){
var __t = e59296;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e59296;

}
}})());
}catch (e59295){var t = e59295;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var G__59298 = arguments.length;
switch (G__59298) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;

taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__44096__auto__ = [];
var len__44089__auto___59301 = arguments.length;
var i__44090__auto___59302 = (0);
while(true){
if((i__44090__auto___59302 < len__44089__auto___59301)){
args__44096__auto__.push((arguments[i__44090__auto___59302]));

var G__59303 = (i__44090__auto___59302 + (1));
i__44090__auto___59302 = G__59303;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq59300){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59300));
});

/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_59309 = prefixed_pstr;
try{if(typeof __x_59309 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59304){if((e59304 instanceof Error)){
var __t_59310 = e59304;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_59309,__t_59310,null);
} else {
throw e59304;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__59308 = prefix;
switch (G__59308) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59308)].join('')));

}
})();
var vec__59305 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__59305,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__59305,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__59305,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__59305,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation (experimental).
 * 
 *   [1] e.g. `taoensso.sente.server-adapters.http-kit/http-kit-adapter` or
 *         `taoensso.sente.server-adapters.immutant/immutant-adapter`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___59495 = arguments.length;
var i__44090__auto___59496 = (0);
while(true){
if((i__44090__auto___59496 < len__44089__auto___59495)){
args__44096__auto__.push((arguments[i__44090__auto___59496]));

var G__59497 = (i__44090__auto___59496 + (1));
i__44090__auto___59496 = G__59497;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__59315){
var vec__59316 = p__59315;
var map__59319 = cljs.core.nth.call(null,vec__59316,(0),null);
var map__59319__$1 = ((((!((map__59319 == null)))?((((map__59319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59319):map__59319);
var recv_buf_or_n = cljs.core.get.call(null,map__59319__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__59319__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__59319__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__59319__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__59319__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__41411__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__59319__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__59319__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(taoensso.encore.pos_int_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59321){if((e59321 instanceof Error)){
var __t = e59321;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e59321;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(taoensso.encore.pos_int_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59322){if((e59322 instanceof Error)){
var __t = e59322;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e59322;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__59312_SHARP_){
if(!((p1__59312_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__59312_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$))){
return true;
} else {
if((!p1__59312_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__59312_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__59312_SHARP_);
}
});})(__x,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59323){if((e59323 instanceof Error)){
var __t = e59323;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__59312#] (satisfies? interfaces/IServerChanAdapter p1__59312#)) web-server-adapter)",__x,__t,null);
} else {
throw e59323;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__59312#] (satisfies? interfaces/IServerChanAdapter p1__59312#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__41411__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59325){if((e59325 instanceof Error)){
var __t = e59325;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e59325;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__59326){
var map__59327 = p__59326;
var map__59327__$1 = ((((!((map__59327 == null)))?((((map__59327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59327):map__59327);
var old_m = map__59327__$1;
var ws = cljs.core.get.call(null,map__59327__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__59327__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__59327__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__59329 = type;
var G__59329__$1 = (((G__59329 instanceof cljs.core.Keyword))?G__59329.fqn:null);
switch (G__59329__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59329__$1)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59330){if((e59330 instanceof Error)){
var __t = e59330;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e59330;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__59331){
var map__59332 = p__59331;
var map__59332__$1 = ((((!((map__59332 == null)))?((((map__59332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59332):map__59332);
var old_m = map__59332__$1;
var ws = cljs.core.get.call(null,map__59332__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__59332__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__59332__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax__$1,uid):cljs.core.disj.call(null,ajax__$1,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__59499__delegate = function (user_id,ev,p__59334){
var vec__59335 = p__59334;
var map__59338 = cljs.core.nth.call(null,vec__59335,(0),null);
var map__59338__$1 = ((((!((map__59338 == null)))?((((map__59338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59338):map__59338);
var opts = map__59338__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__59338__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_59500 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __59501 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_59500,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_59500,ev], null);
});})(uid_59500,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __59502__$1 = (cljs.core.truth_(uid_59500)?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join('')),"\n","uid"].join('')))})());
var __59503__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_59504 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__59505 = ((function (uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__5278__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__59340 = cljs.core.get.call(null,m,uid_59500);
var ___$3 = cljs.core.nth.call(null,vec__59340,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__59340,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_59504)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_59500),cljs.core.get.call(null,m,uid_59500));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__5278__auto__)){
var pulled = temp__5278__auto__;
var vec__59343 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__59343,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__59343,(1),null);
var __x_59506 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_59506)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59346){if((e59346 instanceof Error)){
var __t_59507 = e59346;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_59506,__t_59507,null);
} else {
throw e59346;

}
}
var __x_59508 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_59508)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59347){if((e59347 instanceof Error)){
var __t_59509 = e59347;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_59508,__t_59509,null);
} else {
throw e59347;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__59343,buffered_evs,ev_uuids,pulled,temp__5278__auto__,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__59343,buffered_evs,ev_uuids,pulled,temp__5278__auto__,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__59348 = type;
var G__59348__$1 = (((G__59348 instanceof cljs.core.Keyword))?G__59348.fqn:null);
switch (G__59348__$1) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_59500,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_59500,buffered_evs_ppstr);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59348__$1)].join('')));

}
} else {
return null;
}
});})(uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_59500], null);
});})(uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__59349_59511 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__59350_59512 = null;
var count__59351_59513 = (0);
var i__59352_59514 = (0);
while(true){
if((i__59352_59514 < count__59351_59513)){
var type_59515 = cljs.core._nth.call(null,chunk__59350_59512,i__59352_59514);
flush_buffer_BANG__59505.call(null,type_59515);

var G__59516 = seq__59349_59511;
var G__59517 = chunk__59350_59512;
var G__59518 = count__59351_59513;
var G__59519 = (i__59352_59514 + (1));
seq__59349_59511 = G__59516;
chunk__59350_59512 = G__59517;
count__59351_59513 = G__59518;
i__59352_59514 = G__59519;
continue;
} else {
var temp__5278__auto___59520 = cljs.core.seq.call(null,seq__59349_59511);
if(temp__5278__auto___59520){
var seq__59349_59521__$1 = temp__5278__auto___59520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59349_59521__$1)){
var c__43430__auto___59522 = cljs.core.chunk_first.call(null,seq__59349_59521__$1);
var G__59523 = cljs.core.chunk_rest.call(null,seq__59349_59521__$1);
var G__59524 = c__43430__auto___59522;
var G__59525 = cljs.core.count.call(null,c__43430__auto___59522);
var G__59526 = (0);
seq__59349_59511 = G__59523;
chunk__59350_59512 = G__59524;
count__59351_59513 = G__59525;
i__59352_59514 = G__59526;
continue;
} else {
var type_59527 = cljs.core.first.call(null,seq__59349_59521__$1);
flush_buffer_BANG__59505.call(null,type_59527);

var G__59528 = cljs.core.next.call(null,seq__59349_59521__$1);
var G__59529 = null;
var G__59530 = (0);
var G__59531 = (0);
seq__59349_59511 = G__59528;
chunk__59350_59512 = G__59529;
count__59351_59513 = G__59530;
i__59352_59514 = G__59531;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__59353_59532 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_59500], null))));
var chunk__59354_59533 = null;
var count__59355_59534 = (0);
var i__59356_59535 = (0);
while(true){
if((i__59356_59535 < count__59355_59534)){
var server_ch_59536 = cljs.core._nth.call(null,chunk__59354_59533,i__59356_59535);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_59536);

var G__59537 = seq__59353_59532;
var G__59538 = chunk__59354_59533;
var G__59539 = count__59355_59534;
var G__59540 = (i__59356_59535 + (1));
seq__59353_59532 = G__59537;
chunk__59354_59533 = G__59538;
count__59355_59534 = G__59539;
i__59356_59535 = G__59540;
continue;
} else {
var temp__5278__auto___59541 = cljs.core.seq.call(null,seq__59353_59532);
if(temp__5278__auto___59541){
var seq__59353_59542__$1 = temp__5278__auto___59541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59353_59542__$1)){
var c__43430__auto___59543 = cljs.core.chunk_first.call(null,seq__59353_59542__$1);
var G__59544 = cljs.core.chunk_rest.call(null,seq__59353_59542__$1);
var G__59545 = c__43430__auto___59543;
var G__59546 = cljs.core.count.call(null,c__43430__auto___59543);
var G__59547 = (0);
seq__59353_59532 = G__59544;
chunk__59354_59533 = G__59545;
count__59355_59534 = G__59546;
i__59356_59535 = G__59547;
continue;
} else {
var server_ch_59548 = cljs.core.first.call(null,seq__59353_59542__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_59548);

var G__59549 = cljs.core.next.call(null,seq__59353_59542__$1);
var G__59550 = null;
var G__59551 = (0);
var G__59552 = (0);
seq__59353_59532 = G__59549;
chunk__59354_59533 = G__59550;
count__59355_59534 = G__59551;
i__59356_59535 = G__59552;
continue;
}
} else {
}
}
break;
}

var seq__59357_59553 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_59500], null))));
var chunk__59358_59554 = null;
var count__59359_59555 = (0);
var i__59360_59556 = (0);
while(true){
if((i__59360_59556 < count__59359_59555)){
var vec__59361_59557 = cljs.core._nth.call(null,chunk__59358_59554,i__59360_59556);
var _QMARK_server_ch_59558 = cljs.core.nth.call(null,vec__59361_59557,(0),null);
var __59559__$3 = cljs.core.nth.call(null,vec__59361_59557,(1),null);
var temp__5278__auto___59560 = _QMARK_server_ch_59558;
if(cljs.core.truth_(temp__5278__auto___59560)){
var server_ch_59561 = temp__5278__auto___59560;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_59561);
} else {
}

var G__59562 = seq__59357_59553;
var G__59563 = chunk__59358_59554;
var G__59564 = count__59359_59555;
var G__59565 = (i__59360_59556 + (1));
seq__59357_59553 = G__59562;
chunk__59358_59554 = G__59563;
count__59359_59555 = G__59564;
i__59360_59556 = G__59565;
continue;
} else {
var temp__5278__auto___59566 = cljs.core.seq.call(null,seq__59357_59553);
if(temp__5278__auto___59566){
var seq__59357_59567__$1 = temp__5278__auto___59566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59357_59567__$1)){
var c__43430__auto___59568 = cljs.core.chunk_first.call(null,seq__59357_59567__$1);
var G__59569 = cljs.core.chunk_rest.call(null,seq__59357_59567__$1);
var G__59570 = c__43430__auto___59568;
var G__59571 = cljs.core.count.call(null,c__43430__auto___59568);
var G__59572 = (0);
seq__59357_59553 = G__59569;
chunk__59358_59554 = G__59570;
count__59359_59555 = G__59571;
i__59360_59556 = G__59572;
continue;
} else {
var vec__59364_59573 = cljs.core.first.call(null,seq__59357_59567__$1);
var _QMARK_server_ch_59574 = cljs.core.nth.call(null,vec__59364_59573,(0),null);
var __59575__$3 = cljs.core.nth.call(null,vec__59364_59573,(1),null);
var temp__5278__auto___59576__$1 = _QMARK_server_ch_59574;
if(cljs.core.truth_(temp__5278__auto___59576__$1)){
var server_ch_59577 = temp__5278__auto___59576__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_59577);
} else {
}

var G__59578 = cljs.core.next.call(null,seq__59357_59567__$1);
var G__59579 = null;
var G__59580 = (0);
var G__59581 = (0);
seq__59357_59553 = G__59578;
chunk__59358_59554 = G__59579;
count__59359_59555 = G__59580;
i__59360_59556 = G__59581;
continue;
}
} else {
}
}
break;
}
} else {
var seq__59367_59582 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__59368_59583 = null;
var count__59369_59584 = (0);
var i__59370_59585 = (0);
while(true){
if((i__59370_59585 < count__59369_59584)){
var type_59586 = cljs.core._nth.call(null,chunk__59368_59583,i__59370_59585);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_59586,uid_59500], null),((function (seq__59367_59582,chunk__59368_59583,count__59369_59584,i__59370_59585,type_59586,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_59504])], null);
} else {
var vec__59371 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__59371,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__59371,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_59504)], null);
}
});})(seq__59367_59582,chunk__59368_59583,count__59369_59584,i__59370_59585,type_59586,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__59587 = seq__59367_59582;
var G__59588 = chunk__59368_59583;
var G__59589 = count__59369_59584;
var G__59590 = (i__59370_59585 + (1));
seq__59367_59582 = G__59587;
chunk__59368_59583 = G__59588;
count__59369_59584 = G__59589;
i__59370_59585 = G__59590;
continue;
} else {
var temp__5278__auto___59591 = cljs.core.seq.call(null,seq__59367_59582);
if(temp__5278__auto___59591){
var seq__59367_59592__$1 = temp__5278__auto___59591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59367_59592__$1)){
var c__43430__auto___59593 = cljs.core.chunk_first.call(null,seq__59367_59592__$1);
var G__59594 = cljs.core.chunk_rest.call(null,seq__59367_59592__$1);
var G__59595 = c__43430__auto___59593;
var G__59596 = cljs.core.count.call(null,c__43430__auto___59593);
var G__59597 = (0);
seq__59367_59582 = G__59594;
chunk__59368_59583 = G__59595;
count__59369_59584 = G__59596;
i__59370_59585 = G__59597;
continue;
} else {
var type_59598 = cljs.core.first.call(null,seq__59367_59592__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_59598,uid_59500], null),((function (seq__59367_59582,chunk__59368_59583,count__59369_59584,i__59370_59585,type_59598,seq__59367_59592__$1,temp__5278__auto___59591,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_59504])], null);
} else {
var vec__59374 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__59374,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__59374,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_59504)], null);
}
});})(seq__59367_59582,chunk__59368_59583,count__59369_59584,i__59370_59585,type_59598,seq__59367_59592__$1,temp__5278__auto___59591,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__59599 = cljs.core.next.call(null,seq__59367_59592__$1);
var G__59600 = null;
var G__59601 = (0);
var G__59602 = (0);
seq__59367_59582 = G__59599;
chunk__59368_59583 = G__59600;
count__59369_59584 = G__59601;
i__59370_59585 = G__59602;
continue;
}
} else {
}
}
break;
}

var c__56389__auto___59603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___59603,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___59603,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_59386){
var state_val_59387 = (state_59386[(1)]);
if((state_val_59387 === (1))){
var state_59386__$1 = state_59386;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_59388_59604 = state_59386__$1;
(statearr_59388_59604[(1)] = (2));

} else {
var statearr_59389_59605 = state_59386__$1;
(statearr_59389_59605[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59387 === (2))){
var state_59386__$1 = state_59386;
var statearr_59390_59606 = state_59386__$1;
(statearr_59390_59606[(2)] = null);

(statearr_59390_59606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59387 === (3))){
var inst_59379 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_59386__$1 = state_59386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59386__$1,(5),inst_59379);
} else {
if((state_val_59387 === (4))){
var inst_59383 = (state_59386[(2)]);
var inst_59384 = flush_buffer_BANG__59505.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_59386__$1 = (function (){var statearr_59391 = state_59386;
(statearr_59391[(7)] = inst_59383);

return statearr_59391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59386__$1,inst_59384);
} else {
if((state_val_59387 === (5))){
var inst_59381 = (state_59386[(2)]);
var state_59386__$1 = state_59386;
var statearr_59392_59607 = state_59386__$1;
(statearr_59392_59607[(2)] = inst_59381);

(statearr_59392_59607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__56389__auto___59603,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__56299__auto__,c__56389__auto___59603,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__56300__auto__ = null;
var taoensso$sente$state_machine__56300__auto____0 = (function (){
var statearr_59393 = [null,null,null,null,null,null,null,null];
(statearr_59393[(0)] = taoensso$sente$state_machine__56300__auto__);

(statearr_59393[(1)] = (1));

return statearr_59393;
});
var taoensso$sente$state_machine__56300__auto____1 = (function (state_59386){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_59386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e59394){if((e59394 instanceof Object)){
var ex__56303__auto__ = e59394;
var statearr_59395_59608 = state_59386;
(statearr_59395_59608[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59609 = state_59386;
state_59386 = G__59609;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
taoensso$sente$state_machine__56300__auto__ = function(state_59386){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__56300__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__56300__auto____1.call(this,state_59386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__56300__auto____0;
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__56300__auto____1;
return taoensso$sente$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___59603,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__56391__auto__ = (function (){var statearr_59396 = f__56390__auto__.call(null);
(statearr_59396[(6)] = c__56389__auto___59603);

return statearr_59396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___59603,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__56389__auto___59610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___59610,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___59610,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_59406){
var state_val_59407 = (state_59406[(1)]);
if((state_val_59407 === (1))){
var state_59406__$1 = state_59406;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_59408_59611 = state_59406__$1;
(statearr_59408_59611[(1)] = (2));

} else {
var statearr_59409_59612 = state_59406__$1;
(statearr_59409_59612[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59407 === (2))){
var state_59406__$1 = state_59406;
var statearr_59410_59613 = state_59406__$1;
(statearr_59410_59613[(2)] = null);

(statearr_59410_59613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59407 === (3))){
var inst_59399 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_59406__$1 = state_59406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59406__$1,(5),inst_59399);
} else {
if((state_val_59407 === (4))){
var inst_59403 = (state_59406[(2)]);
var inst_59404 = flush_buffer_BANG__59505.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_59406__$1 = (function (){var statearr_59411 = state_59406;
(statearr_59411[(7)] = inst_59403);

return statearr_59411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59406__$1,inst_59404);
} else {
if((state_val_59407 === (5))){
var inst_59401 = (state_59406[(2)]);
var state_59406__$1 = state_59406;
var statearr_59412_59614 = state_59406__$1;
(statearr_59412_59614[(2)] = inst_59401);

(statearr_59412_59614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__56389__auto___59610,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__56299__auto__,c__56389__auto___59610,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__56300__auto__ = null;
var taoensso$sente$state_machine__56300__auto____0 = (function (){
var statearr_59413 = [null,null,null,null,null,null,null,null];
(statearr_59413[(0)] = taoensso$sente$state_machine__56300__auto__);

(statearr_59413[(1)] = (1));

return statearr_59413;
});
var taoensso$sente$state_machine__56300__auto____1 = (function (state_59406){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_59406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e59414){if((e59414 instanceof Object)){
var ex__56303__auto__ = e59414;
var statearr_59415_59615 = state_59406;
(statearr_59415_59615[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59616 = state_59406;
state_59406 = G__59616;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
taoensso$sente$state_machine__56300__auto__ = function(state_59406){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__56300__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__56300__auto____1.call(this,state_59406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__56300__auto____0;
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__56300__auto____1;
return taoensso$sente$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___59610,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__56391__auto__ = (function (){var statearr_59416 = f__56390__auto__.call(null);
(statearr_59416[(6)] = c__56389__auto___59610);

return statearr_59416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___59610,uid_59500,__59501,__59502__$1,__59503__$2,ev_uuid_59504,flush_buffer_BANG__59505,vec__59335,map__59338,map__59338__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__59499 = function (user_id,ev,var_args){
var p__59334 = null;
if (arguments.length > 2) {
var G__59617__i = 0, G__59617__a = new Array(arguments.length -  2);
while (G__59617__i < G__59617__a.length) {G__59617__a[G__59617__i] = arguments[G__59617__i + 2]; ++G__59617__i;}
  p__59334 = new cljs.core.IndexedSeq(G__59617__a,0,null);
} 
return G__59499__delegate.call(this,user_id,ev,p__59334);};
G__59499.cljs$lang$maxFixedArity = 2;
G__59499.cljs$lang$applyTo = (function (arglist__59618){
var user_id = cljs.core.first(arglist__59618);
arglist__59618 = cljs.core.next(arglist__59618);
var ev = cljs.core.first(arglist__59618);
var p__59334 = cljs.core.rest(arglist__59618);
return G__59499__delegate(user_id,ev,p__59334);
});
G__59499.cljs$core$IFn$_invoke$arity$variadic = G__59499__delegate;
return G__59499;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__59417 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__59417,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__59417,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__59417,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__59417,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__59417,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__59417,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__59417,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__59417,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__59619__delegate = function (event,p__59420){
var vec__59421 = p__59420;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__59421,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__59619 = function (event,var_args){
var p__59420 = null;
if (arguments.length > 1) {
var G__59620__i = 0, G__59620__a = new Array(arguments.length -  1);
while (G__59620__i < G__59620__a.length) {G__59620__a[G__59620__i] = arguments[G__59620__i + 1]; ++G__59620__i;}
  p__59420 = new cljs.core.IndexedSeq(G__59620__a,0,null);
} 
return G__59619__delegate.call(this,event,p__59420);};
G__59619.cljs$lang$maxFixedArity = 1;
G__59619.cljs$lang$applyTo = (function (arglist__59621){
var event = cljs.core.first(arglist__59621);
var p__59420 = cljs.core.rest(arglist__59621);
return G__59619__delegate(event,p__59420);
});
G__59619.cljs$core$IFn$_invoke$arity$variadic = G__59619__delegate;
return G__59619;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg),": %s"].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__41411__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return handshake_BANG_.call(null,server_ch);
} else {
return null;
}
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__59424 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__59424,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__59424,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__59424,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59424,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__59424,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__59424,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_59440){
var state_val_59441 = (state_59440[(1)]);
if((state_val_59441 === (1))){
var inst_59427 = cljs.core.async.timeout.call(null,(5000));
var state_59440__$1 = state_59440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59440__$1,(2),inst_59427);
} else {
if((state_val_59441 === (2))){
var inst_59429 = (state_59440[(2)]);
var inst_59430 = upd_connected_uid_BANG_.call(null,uid);
var state_59440__$1 = (function (){var statearr_59442 = state_59440;
(statearr_59442[(7)] = inst_59429);

return statearr_59442;
})();
if(cljs.core.truth_(inst_59430)){
var statearr_59443_59622 = state_59440__$1;
(statearr_59443_59622[(1)] = (3));

} else {
var statearr_59444_59623 = state_59440__$1;
(statearr_59444_59623[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59441 === (3))){
var inst_59432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59433 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_59434 = (new cljs.core.PersistentVector(null,1,(5),inst_59432,inst_59433,null));
var inst_59435 = receive_event_msg_BANG_.call(null,inst_59434);
var state_59440__$1 = state_59440;
var statearr_59445_59624 = state_59440__$1;
(statearr_59445_59624[(2)] = inst_59435);

(statearr_59445_59624[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59441 === (4))){
var state_59440__$1 = state_59440;
var statearr_59446_59625 = state_59440__$1;
(statearr_59446_59625[(2)] = null);

(statearr_59446_59625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59441 === (5))){
var inst_59438 = (state_59440[(2)]);
var state_59440__$1 = state_59440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59440__$1,inst_59438);
} else {
return null;
}
}
}
}
}
});})(c__56389__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__56299__auto__,c__56389__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__56300__auto__ = null;
var taoensso$sente$state_machine__56300__auto____0 = (function (){
var statearr_59447 = [null,null,null,null,null,null,null,null];
(statearr_59447[(0)] = taoensso$sente$state_machine__56300__auto__);

(statearr_59447[(1)] = (1));

return statearr_59447;
});
var taoensso$sente$state_machine__56300__auto____1 = (function (state_59440){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_59440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e59448){if((e59448 instanceof Object)){
var ex__56303__auto__ = e59448;
var statearr_59449_59626 = state_59440;
(statearr_59449_59626[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59627 = state_59440;
state_59440 = G__59627;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
taoensso$sente$state_machine__56300__auto__ = function(state_59440){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__56300__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__56300__auto____1.call(this,state_59440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__56300__auto____0;
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__56300__auto____1;
return taoensso$sente$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__56391__auto__ = (function (){var statearr_59450 = f__56390__auto__.call(null);
(statearr_59450[(6)] = c__56389__auto__);

return statearr_59450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__56389__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__59451){
var vec__59452 = p__59451;
var server_ch__$1 = cljs.core.nth.call(null,vec__59452,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__59452,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_59477){
var state_val_59478 = (state_59477[(1)]);
if((state_val_59478 === (1))){
var inst_59455 = cljs.core.async.timeout.call(null,(5000));
var state_59477__$1 = state_59477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59477__$1,(2),inst_59455);
} else {
if((state_val_59478 === (2))){
var inst_59457 = (state_59477[(2)]);
var inst_59458 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59459 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_59460 = (new cljs.core.PersistentVector(null,2,(5),inst_59458,inst_59459,null));
var inst_59461 = (function (){return ((function (inst_59457,inst_59458,inst_59459,inst_59460,state_val_59478,c__56389__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__59479 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__59479,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__59479,(1),null);
var disconnected_QMARK_ = (function (){var and__41384__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__41384__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__41384__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_59457,inst_59458,inst_59459,inst_59460,state_val_59478,c__56389__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_59462 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_59460,inst_59461);
var state_59477__$1 = (function (){var statearr_59482 = state_59477;
(statearr_59482[(7)] = inst_59457);

return statearr_59482;
})();
if(cljs.core.truth_(inst_59462)){
var statearr_59483_59628 = state_59477__$1;
(statearr_59483_59628[(1)] = (3));

} else {
var statearr_59484_59629 = state_59477__$1;
(statearr_59484_59629[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59478 === (3))){
var inst_59464 = upd_connected_uid_BANG_.call(null,uid);
var state_59477__$1 = state_59477;
if(cljs.core.truth_(inst_59464)){
var statearr_59485_59630 = state_59477__$1;
(statearr_59485_59630[(1)] = (6));

} else {
var statearr_59486_59631 = state_59477__$1;
(statearr_59486_59631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59478 === (4))){
var state_59477__$1 = state_59477;
var statearr_59487_59632 = state_59477__$1;
(statearr_59487_59632[(2)] = null);

(statearr_59487_59632[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59478 === (5))){
var inst_59475 = (state_59477[(2)]);
var state_59477__$1 = state_59477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59477__$1,inst_59475);
} else {
if((state_val_59478 === (6))){
var inst_59466 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59467 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_59468 = (new cljs.core.PersistentVector(null,1,(5),inst_59466,inst_59467,null));
var inst_59469 = receive_event_msg_BANG_.call(null,inst_59468);
var state_59477__$1 = state_59477;
var statearr_59488_59633 = state_59477__$1;
(statearr_59488_59633[(2)] = inst_59469);

(statearr_59488_59633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59478 === (7))){
var state_59477__$1 = state_59477;
var statearr_59489_59634 = state_59477__$1;
(statearr_59489_59634[(2)] = null);

(statearr_59489_59634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59478 === (8))){
var inst_59472 = (state_59477[(2)]);
var state_59477__$1 = state_59477;
var statearr_59490_59635 = state_59477__$1;
(statearr_59490_59635[(2)] = inst_59472);

(statearr_59490_59635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__56389__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__56299__auto__,c__56389__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__56300__auto__ = null;
var taoensso$sente$state_machine__56300__auto____0 = (function (){
var statearr_59491 = [null,null,null,null,null,null,null,null];
(statearr_59491[(0)] = taoensso$sente$state_machine__56300__auto__);

(statearr_59491[(1)] = (1));

return statearr_59491;
});
var taoensso$sente$state_machine__56300__auto____1 = (function (state_59477){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_59477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e59492){if((e59492 instanceof Object)){
var ex__56303__auto__ = e59492;
var statearr_59493_59636 = state_59477;
(statearr_59493_59636[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59637 = state_59477;
state_59477 = G__59637;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
taoensso$sente$state_machine__56300__auto__ = function(state_59477){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__56300__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__56300__auto____1.call(this,state_59477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__56300__auto____0;
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__56300__auto____1;
return taoensso$sente$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__56391__auto__ = (function (){var statearr_59494 = f__56390__auto__.call(null);
(statearr_59494[(6)] = c__56389__auto__);

return statearr_59494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__56389__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__59316,map__59319,map__59319__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq59313){
var G__59314 = cljs.core.first.call(null,seq59313);
var seq59313__$1 = cljs.core.next.call(null,seq59313);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59314,seq59313__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__59638 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__59639 = null;
var count__59640 = (0);
var i__59641 = (0);
while(true){
if((i__59641 < count__59640)){
var server_ch = cljs.core._nth.call(null,chunk__59639,i__59641);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__59642 = seq__59638;
var G__59643 = chunk__59639;
var G__59644 = count__59640;
var G__59645 = (i__59641 + (1));
seq__59638 = G__59642;
chunk__59639 = G__59643;
count__59640 = G__59644;
i__59641 = G__59645;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__59638);
if(temp__5278__auto__){
var seq__59638__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59638__$1)){
var c__43430__auto__ = cljs.core.chunk_first.call(null,seq__59638__$1);
var G__59646 = cljs.core.chunk_rest.call(null,seq__59638__$1);
var G__59647 = c__43430__auto__;
var G__59648 = cljs.core.count.call(null,c__43430__auto__);
var G__59649 = (0);
seq__59638 = G__59646;
chunk__59639 = G__59647;
count__59640 = G__59648;
i__59641 = G__59649;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__59638__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__59650 = cljs.core.next.call(null,seq__59638__$1);
var G__59651 = null;
var G__59652 = (0);
var G__59653 = (0);
seq__59638 = G__59650;
chunk__59639 = G__59651;
count__59640 = G__59652;
i__59641 = G__59653;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___59746 = arguments.length;
var i__44090__auto___59747 = (0);
while(true){
if((i__44090__auto___59747 < len__44089__auto___59746)){
args__44096__auto__.push((arguments[i__44090__auto___59747]));

var G__59748 = (i__44090__auto___59747 + (1));
i__44090__auto___59747 = G__59748;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((3) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44097__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__59658){
var vec__59659 = p__59658;
var map__59662 = cljs.core.nth.call(null,vec__59659,(0),null);
var map__59662__$1 = ((((!((map__59662 == null)))?((((map__59662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59662):map__59662);
var nmax_attempts = cljs.core.get.call(null,map__59662__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__59662__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__59662__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_59711){
var state_val_59712 = (state_59711[(1)]);
if((state_val_59712 === (7))){
var inst_59672 = (state_59711[(7)]);
var inst_59665 = (state_59711[(8)]);
var inst_59666 = (state_59711[(9)]);
var inst_59683 = (function (){var n = inst_59665;
var client_ids_satisfied = inst_59666;
var _QMARK_pulled = inst_59672;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_59672,inst_59665,inst_59666,state_val_59712,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__59682){
var vec__59713 = p__59682;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__59713,(0),null);
var _ = cljs.core.nth.call(null,vec__59713,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_59672,inst_59665,inst_59666,state_val_59712,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_59684 = cljs.core.PersistentHashSet.EMPTY;
var inst_59685 = cljs.core.reduce_kv.call(null,inst_59683,inst_59684,inst_59672);
var state_59711__$1 = state_59711;
var statearr_59716_59749 = state_59711__$1;
(statearr_59716_59749[(2)] = inst_59685);

(statearr_59716_59749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (1))){
var inst_59664 = cljs.core.PersistentHashSet.EMPTY;
var inst_59665 = (0);
var inst_59666 = inst_59664;
var state_59711__$1 = (function (){var statearr_59717 = state_59711;
(statearr_59717[(8)] = inst_59665);

(statearr_59717[(9)] = inst_59666);

return statearr_59717;
})();
var statearr_59718_59750 = state_59711__$1;
(statearr_59718_59750[(2)] = null);

(statearr_59718_59750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (4))){
var state_59711__$1 = state_59711;
var statearr_59719_59751 = state_59711__$1;
(statearr_59719_59751[(2)] = true);

(statearr_59719_59751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (15))){
var inst_59707 = (state_59711[(2)]);
var state_59711__$1 = state_59711;
var statearr_59720_59752 = state_59711__$1;
(statearr_59720_59752[(2)] = inst_59707);

(statearr_59720_59752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (13))){
var inst_59698 = cljs.core.rand_int.call(null,ms_rand);
var inst_59699 = (ms_base + inst_59698);
var inst_59700 = cljs.core.async.timeout.call(null,inst_59699);
var state_59711__$1 = state_59711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59711__$1,(16),inst_59700);
} else {
if((state_val_59712 === (6))){
var inst_59672 = (state_59711[(7)]);
var inst_59680 = (state_59711[(2)]);
var state_59711__$1 = (function (){var statearr_59721 = state_59711;
(statearr_59721[(10)] = inst_59680);

return statearr_59721;
})();
if(cljs.core.truth_(inst_59672)){
var statearr_59722_59753 = state_59711__$1;
(statearr_59722_59753[(1)] = (7));

} else {
var statearr_59723_59754 = state_59711__$1;
(statearr_59723_59754[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (3))){
var inst_59709 = (state_59711[(2)]);
var state_59711__$1 = state_59711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59711__$1,inst_59709);
} else {
if((state_val_59712 === (12))){
var inst_59696 = (state_59711[(2)]);
var state_59711__$1 = state_59711;
if(cljs.core.truth_(inst_59696)){
var statearr_59724_59755 = state_59711__$1;
(statearr_59724_59755[(1)] = (13));

} else {
var statearr_59725_59756 = state_59711__$1;
(statearr_59725_59756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (2))){
var inst_59672 = (state_59711[(7)]);
var inst_59665 = (state_59711[(8)]);
var inst_59666 = (state_59711[(9)]);
var inst_59668 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59669 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_59670 = (new cljs.core.PersistentVector(null,2,(5),inst_59668,inst_59669,null));
var inst_59671 = (function (){var n = inst_59665;
var client_ids_satisfied = inst_59666;
return ((function (n,client_ids_satisfied,inst_59672,inst_59665,inst_59666,inst_59668,inst_59669,inst_59670,state_val_59712,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_59672,inst_59665,inst_59666,inst_59668,inst_59669,inst_59670,state_val_59712,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__59726 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__59726,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__59726,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_59672,inst_59665,inst_59666,inst_59668,inst_59669,inst_59670,state_val_59712,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_59672,inst_59665,inst_59666,inst_59668,inst_59669,inst_59670,state_val_59712,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_59672__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_59670,inst_59671);
var inst_59673 = (function (){var n = inst_59665;
var client_ids_satisfied = inst_59666;
var _QMARK_pulled = inst_59672__$1;
var __x = inst_59672__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_59672,inst_59665,inst_59666,inst_59668,inst_59669,inst_59670,inst_59671,inst_59672__$1,state_val_59712,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__41411__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_59672,inst_59665,inst_59666,inst_59668,inst_59669,inst_59670,inst_59671,inst_59672__$1,state_val_59712,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_59674 = inst_59673.call(null,inst_59672__$1);
var state_59711__$1 = (function (){var statearr_59729 = state_59711;
(statearr_59729[(7)] = inst_59672__$1);

return statearr_59729;
})();
if(cljs.core.truth_(inst_59674)){
var statearr_59730_59757 = state_59711__$1;
(statearr_59730_59757[(1)] = (4));

} else {
var statearr_59731_59758 = state_59711__$1;
(statearr_59731_59758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (11))){
var inst_59690 = (state_59711[(11)]);
var state_59711__$1 = state_59711;
var statearr_59732_59759 = state_59711__$1;
(statearr_59732_59759[(2)] = inst_59690);

(statearr_59732_59759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (9))){
var inst_59665 = (state_59711[(8)]);
var inst_59666 = (state_59711[(9)]);
var inst_59690 = (state_59711[(11)]);
var inst_59688 = (state_59711[(2)]);
var inst_59689 = cljs.core.into.call(null,inst_59666,inst_59688);
var inst_59690__$1 = (inst_59665 < nmax_attempts);
var state_59711__$1 = (function (){var statearr_59733 = state_59711;
(statearr_59733[(12)] = inst_59689);

(statearr_59733[(11)] = inst_59690__$1);

return statearr_59733;
})();
if(cljs.core.truth_(inst_59690__$1)){
var statearr_59734_59760 = state_59711__$1;
(statearr_59734_59760[(1)] = (10));

} else {
var statearr_59735_59761 = state_59711__$1;
(statearr_59735_59761[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (5))){
var inst_59672 = (state_59711[(7)]);
var inst_59677 = "([:or nil? map?] ?pulled)";
var inst_59678 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_59677,inst_59672,null,null);
var state_59711__$1 = state_59711;
var statearr_59736_59762 = state_59711__$1;
(statearr_59736_59762[(2)] = inst_59678);

(statearr_59736_59762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (14))){
var state_59711__$1 = state_59711;
var statearr_59737_59763 = state_59711__$1;
(statearr_59737_59763[(2)] = null);

(statearr_59737_59763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (16))){
var inst_59665 = (state_59711[(8)]);
var inst_59689 = (state_59711[(12)]);
var inst_59702 = (state_59711[(2)]);
var inst_59703 = (inst_59665 + (1));
var inst_59665__$1 = inst_59703;
var inst_59666 = inst_59689;
var state_59711__$1 = (function (){var statearr_59738 = state_59711;
(statearr_59738[(13)] = inst_59702);

(statearr_59738[(8)] = inst_59665__$1);

(statearr_59738[(9)] = inst_59666);

return statearr_59738;
})();
var statearr_59739_59764 = state_59711__$1;
(statearr_59739_59764[(2)] = null);

(statearr_59739_59764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (10))){
var inst_59689 = (state_59711[(12)]);
var inst_59692 = cljs.core.complement.call(null,inst_59689);
var inst_59693 = cljs.core.some.call(null,inst_59692,client_ids_unsatisfied);
var state_59711__$1 = state_59711;
var statearr_59740_59765 = state_59711__$1;
(statearr_59740_59765[(2)] = inst_59693);

(statearr_59740_59765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59712 === (8))){
var state_59711__$1 = state_59711;
var statearr_59741_59766 = state_59711__$1;
(statearr_59741_59766[(2)] = null);

(statearr_59741_59766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__56299__auto__,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__56300__auto__ = null;
var taoensso$sente$state_machine__56300__auto____0 = (function (){
var statearr_59742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59742[(0)] = taoensso$sente$state_machine__56300__auto__);

(statearr_59742[(1)] = (1));

return statearr_59742;
});
var taoensso$sente$state_machine__56300__auto____1 = (function (state_59711){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_59711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e59743){if((e59743 instanceof Object)){
var ex__56303__auto__ = e59743;
var statearr_59744_59767 = state_59711;
(statearr_59744_59767[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59768 = state_59711;
state_59711 = G__59768;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
taoensso$sente$state_machine__56300__auto__ = function(state_59711){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__56300__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__56300__auto____1.call(this,state_59711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__56300__auto____0;
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__56300__auto____1;
return taoensso$sente$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__56391__auto__ = (function (){var statearr_59745 = f__56390__auto__.call(null);
(statearr_59745[(6)] = c__56389__auto__);

return statearr_59745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__,client_ids_unsatisfied,vec__59659,map__59662,map__59662__$1,nmax_attempts,ms_base,ms_rand))
);

return c__56389__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq59654){
var G__59655 = cljs.core.first.call(null,seq59654);
var seq59654__$1 = cljs.core.next.call(null,seq59654);
var G__59656 = cljs.core.first.call(null,seq59654__$1);
var seq59654__$2 = cljs.core.next.call(null,seq59654__$1);
var G__59657 = cljs.core.first.call(null,seq59654__$2);
var seq59654__$3 = cljs.core.next.call(null,seq59654__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59655,G__59656,G__59657,seq59654__$3);
});

/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail
 */
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__43049__auto__ = (((chsk == null))?null:chsk);
var m__43050__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,chsk);
} else {
var m__43050__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

/**
 * Implementation detail
 */
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__43049__auto__ = (((chsk == null))?null:chsk);
var m__43050__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,chsk,ev,opts);
} else {
var m__43050__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

/**
 * DEPRECATED: Please use `chsk-disconnect!` instead
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__43049__auto__ = (((chsk == null))?null:chsk);
var m__43050__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,chsk);
} else {
var m__43050__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Disconnects channel socket
 */
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(chsk);
} else {
var x__43049__auto__ = (((chsk == null))?null:chsk);
var m__43050__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,chsk);
} else {
var m__43050__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-disconnect!",chsk);
}
}
}
});

/**
 * Reconnects channel socket (useful for reauthenticating after login/logout, etc.)
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__43049__auto__ = (((chsk == null))?null:chsk);
var m__43050__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,chsk);
} else {
var m__43050__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__59770 = arguments.length;
switch (G__59770) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__41411__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__41411__auto__){
return or__41411__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))"].join('')));
}

if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb)) || (taoensso.encore.chan_QMARK_.call(null,_QMARK_cb))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5278__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5278__auto__)){
var cb_uuid = temp__5278__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__5278__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__5278__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__59772,merge_state){
var map__59773 = p__59772;
var map__59773__$1 = ((((!((map__59773 == null)))?((((map__59773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59773):map__59773);
var chsk = map__59773__$1;
var chs = cljs.core.get.call(null,map__59773__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__59773__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__59775 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__59773,map__59773__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__41384__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__41384__auto__)){
var and__41384__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__41384__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__59773,map__59773__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__59775,(0),null);
var new_state = cljs.core.nth.call(null,vec__59775,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_59782 = _QMARK_cb;
try{if(taoensso.encore.chan_QMARK_.call(null,__x_59782)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59778){if((e59778 instanceof Error)){
var __t_59783 = e59778;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_59782,__t_59783,null);
} else {
throw e59778;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__59779 = ev;
var ev_id = cljs.core.nth.call(null,vec__59779,(0),null);
var _ = cljs.core.nth.call(null,vec__59779,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__59779,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.fq_name.call(null,ev_id)),".cb"].join('')),reply], null));
});
;})(vec__59779,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59784){if((e59784 instanceof Error)){
var __t = e59784;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e59784;

}
}})();
var seq__59785 = cljs.core.seq.call(null,buffered_evs);
var chunk__59786 = null;
var count__59787 = (0);
var i__59788 = (0);
while(true){
if((i__59788 < count__59787)){
var ev = cljs.core._nth.call(null,chunk__59786,i__59788);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__59789 = seq__59785;
var G__59790 = chunk__59786;
var G__59791 = count__59787;
var G__59792 = (i__59788 + (1));
seq__59785 = G__59789;
chunk__59786 = G__59790;
count__59787 = G__59791;
i__59788 = G__59792;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__59785);
if(temp__5278__auto__){
var seq__59785__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59785__$1)){
var c__43430__auto__ = cljs.core.chunk_first.call(null,seq__59785__$1);
var G__59793 = cljs.core.chunk_rest.call(null,seq__59785__$1);
var G__59794 = c__43430__auto__;
var G__59795 = cljs.core.count.call(null,c__43430__auto__);
var G__59796 = (0);
seq__59785 = G__59793;
chunk__59786 = G__59794;
count__59787 = G__59795;
i__59788 = G__59796;
continue;
} else {
var ev = cljs.core.first.call(null,seq__59785__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__59797 = cljs.core.next.call(null,seq__59785__$1);
var G__59798 = null;
var G__59799 = (0);
var G__59800 = (0);
seq__59785 = G__59797;
chunk__59786 = G__59798;
count__59787 = G__59799;
i__59788 = G__59800;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__59801 = clj;
var _ = cljs.core.nth.call(null,vec__59801,(0),null);
var vec__59804 = cljs.core.nth.call(null,vec__59801,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__59804,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__59804,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__59804,(2),null);
var handshake_ev = vec__59801;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59801,_,vec__59804,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__59801,_,vec__59804,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k59808,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__59812 = k59808;
var G__59812__$1 = (((G__59812 instanceof cljs.core.Keyword))?G__59812.fqn:null);
switch (G__59812__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "retry-count_":
return self__.retry_count_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k59808,else__42885__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59807){
var self__ = this;
var G__59807__$1 = this;
return (new cljs.core.RecordIter((0),G__59807__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59809,other59810){
var self__ = this;
var this59809__$1 = this;
return (!((other59810 == null))) && ((this59809__$1.constructor === other59810.constructor)) && (cljs.core._EQ_.call(null,this59809__$1.client_id,other59810.client_id)) && (cljs.core._EQ_.call(null,this59809__$1.chs,other59810.chs)) && (cljs.core._EQ_.call(null,this59809__$1.params,other59810.params)) && (cljs.core._EQ_.call(null,this59809__$1.packer,other59810.packer)) && (cljs.core._EQ_.call(null,this59809__$1.url,other59810.url)) && (cljs.core._EQ_.call(null,this59809__$1.state_,other59810.state_)) && (cljs.core._EQ_.call(null,this59809__$1.cbs_waiting_,other59810.cbs_waiting_)) && (cljs.core._EQ_.call(null,this59809__$1.socket_,other59810.socket_)) && (cljs.core._EQ_.call(null,this59809__$1.kalive_ms,other59810.kalive_ms)) && (cljs.core._EQ_.call(null,this59809__$1.kalive_timer_,other59810.kalive_timer_)) && (cljs.core._EQ_.call(null,this59809__$1.kalive_due_QMARK__,other59810.kalive_due_QMARK__)) && (cljs.core._EQ_.call(null,this59809__$1.backoff_ms_fn,other59810.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this59809__$1.active_retry_id_,other59810.active_retry_id_)) && (cljs.core._EQ_.call(null,this59809__$1.retry_count_,other59810.retry_count_)) && (cljs.core._EQ_.call(null,this59809__$1.__extmap,other59810.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__59807){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__59813 = cljs.core.keyword_identical_QMARK_;
var expr__59814 = k__42890__auto__;
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__59814))){
return (new taoensso.sente.ChWebSocket(G__59807,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__59807,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__59807,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__59807,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__59807,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__59807,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__59807,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__59807,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__59807,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__59807,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__59807,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__59807,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__59807,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59813.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__59814))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__59807,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__59807),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__59807){
var self__ = this;
var this__42881__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__59807,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__59816){
var self__ = this;
var map__59817 = p__59816;
var map__59817__$1 = ((((!((map__59817 == null)))?((((map__59817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59817):map__59817);
var opts = map__59817__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__59817__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__59817__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__59817__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__5278__auto___59849 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5278__auto___59849)){
var cb_uuid_59850 = temp__5278__auto___59849;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_59850], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59819){if((e59819 instanceof Error)){
var __t = e59819;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e59819;

}
}})());

var temp__5278__auto___59851__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5278__auto___59851__$1)){
var timeout_ms_59852 = temp__5278__auto___59851__$1;
var c__56389__auto___59853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___59853,timeout_ms_59852,temp__5278__auto___59851__$1,cb_uuid_59850,temp__5278__auto___59849,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___59853,timeout_ms_59852,temp__5278__auto___59851__$1,cb_uuid_59850,temp__5278__auto___59849,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_59830){
var state_val_59831 = (state_59830[(1)]);
if((state_val_59831 === (1))){
var inst_59820 = cljs.core.async.timeout.call(null,timeout_ms_59852);
var state_59830__$1 = state_59830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59830__$1,(2),inst_59820);
} else {
if((state_val_59831 === (2))){
var inst_59823 = (state_59830[(7)]);
var inst_59822 = (state_59830[(2)]);
var inst_59823__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_59830__$1 = (function (){var statearr_59832 = state_59830;
(statearr_59832[(7)] = inst_59823__$1);

(statearr_59832[(8)] = inst_59822);

return statearr_59832;
})();
if(cljs.core.truth_(inst_59823__$1)){
var statearr_59833_59854 = state_59830__$1;
(statearr_59833_59854[(1)] = (3));

} else {
var statearr_59834_59855 = state_59830__$1;
(statearr_59834_59855[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59831 === (3))){
var inst_59823 = (state_59830[(7)]);
var inst_59825 = inst_59823.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_59830__$1 = state_59830;
var statearr_59835_59856 = state_59830__$1;
(statearr_59835_59856[(2)] = inst_59825);

(statearr_59835_59856[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59831 === (4))){
var state_59830__$1 = state_59830;
var statearr_59836_59857 = state_59830__$1;
(statearr_59836_59857[(2)] = null);

(statearr_59836_59857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59831 === (5))){
var inst_59828 = (state_59830[(2)]);
var state_59830__$1 = state_59830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59830__$1,inst_59828);
} else {
return null;
}
}
}
}
}
});})(c__56389__auto___59853,timeout_ms_59852,temp__5278__auto___59851__$1,cb_uuid_59850,temp__5278__auto___59849,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__56299__auto__,c__56389__auto___59853,timeout_ms_59852,temp__5278__auto___59851__$1,cb_uuid_59850,temp__5278__auto___59849,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__56300__auto__ = null;
var taoensso$sente$state_machine__56300__auto____0 = (function (){
var statearr_59837 = [null,null,null,null,null,null,null,null,null];
(statearr_59837[(0)] = taoensso$sente$state_machine__56300__auto__);

(statearr_59837[(1)] = (1));

return statearr_59837;
});
var taoensso$sente$state_machine__56300__auto____1 = (function (state_59830){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_59830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e59838){if((e59838 instanceof Object)){
var ex__56303__auto__ = e59838;
var statearr_59839_59858 = state_59830;
(statearr_59839_59858[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59859 = state_59830;
state_59830 = G__59859;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
taoensso$sente$state_machine__56300__auto__ = function(state_59830){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__56300__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__56300__auto____1.call(this,state_59830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__56300__auto____0;
taoensso$sente$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__56300__auto____1;
return taoensso$sente$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___59853,timeout_ms_59852,temp__5278__auto___59851__$1,cb_uuid_59850,temp__5278__auto___59849,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__56391__auto__ = (function (){var statearr_59840 = f__56390__auto__.call(null);
(statearr_59840[(6)] = c__56389__auto___59853);

return statearr_59840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___59853,timeout_ms_59852,temp__5278__auto___59851__$1,cb_uuid_59850,temp__5278__auto___59849,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e59841){if((e59841 instanceof Error)){
var e = e59841;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__59817,map__59817__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__5278__auto___59860 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5278__auto___59860)){
var cb_uuid_59861 = temp__5278__auto___59860;
var cb_fn_STAR__59862 = (function (){var or__41411__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_59861);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59842){if((e59842 instanceof Error)){
var __t = e59842;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e59842;

}
}}
})();
cb_fn_STAR__59862.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e59841;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return chsk__$1.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__5278__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__5278__auto__)){
var s = temp__5278__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__5278__auto___59863 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__5278__auto___59863)){
var s_59864 = temp__5278__auto___59863;
s_59864.close((3000),"SENTE_RECONNECT");
} else {
}

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5278__auto__ = (function (){var or__41411__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var WebSocket = temp__5278__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__5278__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e59843){if((e59843 instanceof Error)){
var e = e59843;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e59843;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__59844 = _QMARK_socket;
(G__59844["onerror"] = ((function (G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null);
});})(G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
);

(G__59844["onmessage"] = ((function (G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__59845 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__59845,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__59845,(1),null);
var or__41411__auto__ = (function (){var and__41384__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__41384__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__41384__auto__;
}
})();
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var temp__5276__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5276__auto__)){
var cb_uuid = temp__5276__auto__;
var temp__5276__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5276__auto____$1)){
var cb_fn = temp__5276__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5276__auto____$1,cb_uuid,temp__5276__auto__,or__41411__auto__,ppstr,vec__59845,clj,_QMARK_cb_uuid,G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5276__auto____$1,cb_uuid,temp__5276__auto__,or__41411__auto__,ppstr,vec__59845,clj,_QMARK_cb_uuid,G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
);

(G__59844["onopen"] = ((function (G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
);

(G__59844["onclose"] = ((function (G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__59844,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__5278__auto__,chsk__$1))
);

return G__59844;
})());
}
});})(retry_id,WebSocket,temp__5278__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__59811){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__59811),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__59811),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__59811,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.active_retry_id_ = active_retry_id_;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k59866,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__59870 = k59866;
var G__59870__$1 = (((G__59870 instanceof cljs.core.Keyword))?G__59870.fqn:null);
switch (G__59870__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k59866,else__42885__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59865){
var self__ = this;
var G__59865__$1 = this;
return (new cljs.core.RecordIter((0),G__59865__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59867,other59868){
var self__ = this;
var this59867__$1 = this;
return (!((other59868 == null))) && ((this59867__$1.constructor === other59868.constructor)) && (cljs.core._EQ_.call(null,this59867__$1.client_id,other59868.client_id)) && (cljs.core._EQ_.call(null,this59867__$1.chs,other59868.chs)) && (cljs.core._EQ_.call(null,this59867__$1.params,other59868.params)) && (cljs.core._EQ_.call(null,this59867__$1.packer,other59868.packer)) && (cljs.core._EQ_.call(null,this59867__$1.url,other59868.url)) && (cljs.core._EQ_.call(null,this59867__$1.state_,other59868.state_)) && (cljs.core._EQ_.call(null,this59867__$1.timeout_ms,other59868.timeout_ms)) && (cljs.core._EQ_.call(null,this59867__$1.ajax_opts,other59868.ajax_opts)) && (cljs.core._EQ_.call(null,this59867__$1.curr_xhr_,other59868.curr_xhr_)) && (cljs.core._EQ_.call(null,this59867__$1.active_retry_id_,other59868.active_retry_id_)) && (cljs.core._EQ_.call(null,this59867__$1.backoff_ms_fn,other59868.backoff_ms_fn)) && (cljs.core._EQ_.call(null,this59867__$1.__extmap,other59868.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__59865){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__59871 = cljs.core.keyword_identical_QMARK_;
var expr__59872 = k__42890__auto__;
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(G__59865,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__59865,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__59865,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__59865,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__59865,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__59865,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__59865,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__59865,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__59865,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__59865,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59871.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__59872))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__59865,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__59865),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__59865){
var self__ = this;
var this__42881__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__59865,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__59874){
var self__ = this;
var map__59875 = p__59874;
var map__59875__$1 = ((((!((map__59875 == null)))?((((map__59875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59875):map__59875);
var opts = map__59875__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__59875__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__59875__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__59875__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__59875,map__59875__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__59875,map__59875__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__59875,map__59875__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__59877){
var map__59878 = p__59877;
var map__59878__$1 = ((((!((map__59878 == null)))?((((map__59878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59878):map__59878);
var _QMARK_error = cljs.core.get.call(null,map__59878__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__59878__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__59880 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__59880,(0),null);
var _ = cljs.core.nth.call(null,vec__59880,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__59880,resp_clj,_,map__59878,map__59878__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__59875,map__59875__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__59880,resp_clj,_,map__59878,map__59878__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__59875,map__59875__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__59875,map__59875__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return chsk__$1.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__5278__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__5278__auto__)){
var x = temp__5278__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__5278__auto___59890 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__5278__auto___59890)){
var x_59891 = temp__5278__auto___59890;
x_59891.abort();
} else {
}

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__59883){
var map__59884 = p__59883;
var map__59884__$1 = ((((!((map__59884 == null)))?((((map__59884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59884):map__59884);
var _QMARK_error = cljs.core.get.call(null,map__59884__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__59884__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__59886 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__59886,(0),null);
var _ = cljs.core.nth.call(null,vec__59886,(1),null);
var or__41411__auto___59892 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__41411__auto___59892)){
} else {
var buffered_evs_59893 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_59893);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$poll_fn.call(null,(0));
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__59869){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__59869),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__59869),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__59869,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955))),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__59894 = type;
var G__59894__$1 = (((G__59894 instanceof cljs.core.Keyword))?G__59894.fqn:null);
switch (G__59894__$1) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59894__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket-server!`.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___59915 = arguments.length;
var i__44090__auto___59916 = (0);
while(true){
if((i__44090__auto___59916 < len__44089__auto___59915)){
args__44096__auto__.push((arguments[i__44090__auto___59916]));

var G__59917 = (i__44090__auto___59916 + (1));
i__44090__auto___59916 = G__59917;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__59899){
var vec__59900 = p__59899;
var map__59903 = cljs.core.nth.call(null,vec__59900,(0),null);
var map__59903__$1 = ((((!((map__59903 == null)))?((((map__59903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59903):map__59903);
var opts = map__59903__$1;
var ajax_opts = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__41411__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__59903__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__59900,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59905){if((e59905 instanceof Error)){
var __t = e59905;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e59905;

}
}})())){
} else {
throw (new Error("Assert failed: (have? [:in #{:ws :ajax :auto}] type)"));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(taoensso.encore.nblank_str_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59906){if((e59906 instanceof Error)){
var __t = e59906;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e59906;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__41411__auto__ = host;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__41411__auto__ = path;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__41411__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__41411__auto__){
return or__41411__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__59907 = ev;
var id = cljs.core.nth.call(null,vec__59907,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__59907,(1),null);
var __x_59918 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e59910){if((e59910 instanceof Error)){
var __t = e59910;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__59896#] (not= p1__59896# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e59910;

}
}})();
try{if(((function (__x_59918,vec__59907,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__59896_SHARP_){
return cljs.core.not_EQ_.call(null,p1__59896_SHARP_,"chsk");
});})(__x_59918,vec__59907,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_59918)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e59911){if((e59911 instanceof Error)){
var __t_59919 = e59911;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__59896#] (not= p1__59896# \"chsk\")) (namespace id))",__x_59918,__t_59919,null);
} else {
throw e59911;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__41411__auto__ = (function (){var and__41384__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__41384__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__5276__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5276__auto__)){
var f = temp__5276__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__41384__auto__;
}
})();
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var and__41384__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__41384__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__5276__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5276__auto__)){
var f = temp__5276__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__41384__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error(["Assert failed: ","Failed to create channel socket","\n","chsk"].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__59912 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__59912,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__59912,(1),null);
var ev__$1 = vec__59912;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__59900,map__59903,map__59903__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq59897){
var G__59898 = cljs.core.first.call(null,seq59897);
var seq59897__$1 = cljs.core.next.call(null,seq59897);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59898,seq59897__$1);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__59920 = opts;
var map__59920__$1 = ((((!((map__59920 == null)))?((((map__59920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59920):map__59920);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__59920__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__59920__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__56389__auto___60130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_60058){
var state_val_60059 = (state_60058[(1)]);
if((state_val_60059 === (7))){
var inst_60054 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60060_60131 = state_60058__$1;
(statearr_60060_60131[(2)] = inst_60054);

(statearr_60060_60131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (20))){
var inst_59961 = (state_60058[(7)]);
var inst_59930 = (state_60058[(8)]);
var inst_59933 = (state_60058[(9)]);
var inst_59960 = (state_60058[(10)]);
var inst_59932 = (state_60058[(11)]);
var inst_59931 = (state_60058[(12)]);
var inst_59971 = (function (){var vec__59923 = inst_59930;
var v = inst_59931;
var p = inst_59932;
var stop_QMARK_ = inst_59933;
var map__59936 = inst_59960;
var event_msg = inst_59960;
var event = inst_59961;
return ((function (vec__59923,v,p,stop_QMARK_,map__59936,event_msg,event,inst_59961,inst_59930,inst_59933,inst_59960,inst_59932,inst_59931,state_val_60059,c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__59923,v,p,stop_QMARK_,map__59936,event_msg,event,inst_59961,inst_59930,inst_59933,inst_59960,inst_59932,inst_59931,state_val_60059,c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_59972 = (new cljs.core.Delay(inst_59971,null));
var inst_59973 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_59972,null);
var state_60058__$1 = state_60058;
var statearr_60061_60132 = state_60058__$1;
(statearr_60061_60132[(2)] = inst_59973);

(statearr_60061_60132[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (27))){
var inst_59960 = (state_60058[(10)]);
var inst_59978 = (state_60058[(2)]);
var inst_59979 = "(server-event-msg? event-msg)";
var inst_59980 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_59979,inst_59960,inst_59978,null);
var state_60058__$1 = state_60058;
var statearr_60062_60133 = state_60058__$1;
(statearr_60062_60133[(2)] = inst_59980);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (1))){
var state_60058__$1 = state_60058;
var statearr_60063_60134 = state_60058__$1;
(statearr_60063_60134[(2)] = null);

(statearr_60063_60134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (24))){
var state_60058__$1 = state_60058;
var statearr_60064_60135 = state_60058__$1;
(statearr_60064_60135[(2)] = null);

(statearr_60064_60135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (39))){
var state_60058__$1 = state_60058;
var statearr_60065_60136 = state_60058__$1;
(statearr_60065_60136[(2)] = null);

(statearr_60065_60136[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (46))){
var inst_60027 = (state_60058[(13)]);
var inst_60035 = (state_60058[(2)]);
var inst_60036 = [inst_60035,null];
var inst_60037 = (new cljs.core.PersistentVector(null,2,(5),inst_60027,inst_60036,null));
var state_60058__$1 = state_60058;
var statearr_60066_60137 = state_60058__$1;
(statearr_60066_60137[(2)] = inst_60037);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (4))){
var inst_59930 = (state_60058[(8)]);
var inst_59933 = (state_60058[(9)]);
var inst_59932 = (state_60058[(11)]);
var inst_59930__$1 = (state_60058[(2)]);
var inst_59931 = cljs.core.nth.call(null,inst_59930__$1,(0),null);
var inst_59932__$1 = cljs.core.nth.call(null,inst_59930__$1,(1),null);
var inst_59933__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_59932__$1,ch_ctrl);
var state_60058__$1 = (function (){var statearr_60067 = state_60058;
(statearr_60067[(8)] = inst_59930__$1);

(statearr_60067[(9)] = inst_59933__$1);

(statearr_60067[(11)] = inst_59932__$1);

(statearr_60067[(12)] = inst_59931);

return statearr_60067;
})();
if(inst_59933__$1){
var statearr_60068_60138 = state_60058__$1;
(statearr_60068_60138[(1)] = (5));

} else {
var statearr_60069_60139 = state_60058__$1;
(statearr_60069_60139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (15))){
var inst_59931 = (state_60058[(12)]);
var state_60058__$1 = state_60058;
var statearr_60070_60140 = state_60058__$1;
(statearr_60070_60140[(2)] = inst_59931);

(statearr_60070_60140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (48))){
var state_60058__$1 = state_60058;
var statearr_60071_60141 = state_60058__$1;
(statearr_60071_60141[(2)] = null);

(statearr_60071_60141[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (21))){
var state_60058__$1 = state_60058;
var statearr_60072_60142 = state_60058__$1;
(statearr_60072_60142[(2)] = null);

(statearr_60072_60142[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (31))){
var inst_59989 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60073_60143 = state_60058__$1;
(statearr_60073_60143[(2)] = inst_59989);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (32))){
var inst_60006 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60074_60144 = state_60058__$1;
(statearr_60074_60144[(2)] = inst_60006);

(statearr_60074_60144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (40))){
var inst_60051 = (state_60058[(2)]);
var state_60058__$1 = (function (){var statearr_60075 = state_60058;
(statearr_60075[(14)] = inst_60051);

return statearr_60075;
})();
var statearr_60076_60145 = state_60058__$1;
(statearr_60076_60145[(2)] = null);

(statearr_60076_60145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (33))){
var inst_59960 = (state_60058[(10)]);
var inst_59993 = (state_60058[(2)]);
var inst_59994 = "(client-event-msg? event-msg)";
var inst_59995 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_59994,inst_59960,inst_59993,null);
var state_60058__$1 = state_60058;
var statearr_60077_60146 = state_60058__$1;
(statearr_60077_60146[(2)] = inst_59995);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (13))){
var inst_59952 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60078_60147 = state_60058__$1;
(statearr_60078_60147[(2)] = inst_59952);

(statearr_60078_60147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (22))){
var inst_59976 = (state_60058[(2)]);
var state_60058__$1 = (function (){var statearr_60079 = state_60058;
(statearr_60079[(15)] = inst_59976);

return statearr_60079;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_60080_60148 = state_60058__$1;
(statearr_60080_60148[(1)] = (23));

} else {
var statearr_60081_60149 = state_60058__$1;
(statearr_60081_60149[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (36))){
var inst_60002 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_60058__$1 = state_60058;
var statearr_60082_60150 = state_60058__$1;
(statearr_60082_60150[(2)] = inst_60002);

(statearr_60082_60150[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (41))){
var inst_60041 = (state_60058[(16)]);
var inst_60039 = (state_60058[(17)]);
var inst_60039__$1 = (state_60058[(2)]);
var inst_60040 = cljs.core.nth.call(null,inst_60039__$1,(0),null);
var inst_60041__$1 = cljs.core.nth.call(null,inst_60039__$1,(1),null);
var state_60058__$1 = (function (){var statearr_60083 = state_60058;
(statearr_60083[(16)] = inst_60041__$1);

(statearr_60083[(17)] = inst_60039__$1);

(statearr_60083[(18)] = inst_60040);

return statearr_60083;
})();
if(cljs.core.truth_(inst_60041__$1)){
var statearr_60084_60151 = state_60058__$1;
(statearr_60084_60151[(1)] = (47));

} else {
var statearr_60085_60152 = state_60058__$1;
(statearr_60085_60152[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60058,(42),Error,null,(41));
var inst_60027 = cljs.core.PersistentVector.EMPTY_NODE;
var state_60058__$1 = (function (){var statearr_60086 = state_60058;
(statearr_60086[(13)] = inst_60027);

return statearr_60086;
})();
if(cljs.core.truth_(error_handler)){
var statearr_60087_60153 = state_60058__$1;
(statearr_60087_60153[(1)] = (44));

} else {
var statearr_60088_60154 = state_60058__$1;
(statearr_60088_60154[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (29))){
var inst_59960 = (state_60058[(10)]);
var state_60058__$1 = state_60058;
var statearr_60089_60155 = state_60058__$1;
(statearr_60089_60155[(2)] = inst_59960);

(statearr_60089_60155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (44))){
var inst_60015 = (state_60058[(19)]);
var inst_59960 = (state_60058[(10)]);
var inst_60029 = error_handler.call(null,inst_60015,inst_59960);
var state_60058__$1 = state_60058;
var statearr_60090_60156 = state_60058__$1;
(statearr_60090_60156[(2)] = inst_60029);

(statearr_60090_60156[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (6))){
var inst_59931 = (state_60058[(12)]);
var inst_59941 = (inst_59931 == null);
var inst_59942 = cljs.core.not.call(null,inst_59941);
var state_60058__$1 = state_60058;
if(inst_59942){
var statearr_60091_60157 = state_60058__$1;
(statearr_60091_60157[(1)] = (8));

} else {
var statearr_60092_60158 = state_60058__$1;
(statearr_60092_60158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (28))){
var inst_59960 = (state_60058[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60058,(27),Error,null,(26));
var inst_59984 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_59960);
var state_60058__$1 = state_60058;
if(cljs.core.truth_(inst_59984)){
var statearr_60093_60159 = state_60058__$1;
(statearr_60093_60159[(1)] = (29));

} else {
var statearr_60094_60160 = state_60058__$1;
(statearr_60094_60160[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (25))){
var inst_59969 = (state_60058[(20)]);
var inst_60008 = (state_60058[(2)]);
var inst_60009 = event_msg_handler.call(null,inst_60008);
var inst_60010 = [inst_60009,null];
var inst_60011 = (new cljs.core.PersistentVector(null,2,(5),inst_59969,inst_60010,null));
var state_60058__$1 = state_60058;
var statearr_60095_60161 = state_60058__$1;
(statearr_60095_60161[(2)] = inst_60011);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (34))){
var inst_59960 = (state_60058[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60058,(33),Error,null,(32));
var inst_59999 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_59960);
var state_60058__$1 = state_60058;
if(cljs.core.truth_(inst_59999)){
var statearr_60096_60162 = state_60058__$1;
(statearr_60096_60162[(1)] = (35));

} else {
var statearr_60097_60163 = state_60058__$1;
(statearr_60097_60163[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (17))){
var inst_60013 = (state_60058[(21)]);
var inst_60015 = (state_60058[(19)]);
var inst_60013__$1 = (state_60058[(2)]);
var inst_60014 = cljs.core.nth.call(null,inst_60013__$1,(0),null);
var inst_60015__$1 = cljs.core.nth.call(null,inst_60013__$1,(1),null);
var state_60058__$1 = (function (){var statearr_60098 = state_60058;
(statearr_60098[(21)] = inst_60013__$1);

(statearr_60098[(19)] = inst_60015__$1);

(statearr_60098[(22)] = inst_60014);

return statearr_60098;
})();
if(cljs.core.truth_(inst_60015__$1)){
var statearr_60099_60164 = state_60058__$1;
(statearr_60099_60164[(1)] = (38));

} else {
var statearr_60100_60165 = state_60058__$1;
(statearr_60100_60165[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (3))){
var inst_60056 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60058__$1,inst_60056);
} else {
if((state_val_60059 === (12))){
var state_60058__$1 = state_60058;
var statearr_60101_60166 = state_60058__$1;
(statearr_60101_60166[(2)] = false);

(statearr_60101_60166[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (2))){
var inst_59926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59927 = [ch_recv,ch_ctrl];
var inst_59928 = (new cljs.core.PersistentVector(null,2,(5),inst_59926,inst_59927,null));
var state_60058__$1 = state_60058;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60058__$1,(4),inst_59928);
} else {
if((state_val_60059 === (23))){
var state_60058__$1 = state_60058;
var statearr_60102_60167 = state_60058__$1;
(statearr_60102_60167[(2)] = null);

(statearr_60102_60167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (47))){
var inst_60041 = (state_60058[(16)]);
var inst_60039 = (state_60058[(17)]);
var inst_60013 = (state_60058[(21)]);
var inst_59961 = (state_60058[(7)]);
var inst_60015 = (state_60058[(19)]);
var inst_59930 = (state_60058[(8)]);
var inst_59933 = (state_60058[(9)]);
var inst_59960 = (state_60058[(10)]);
var inst_60040 = (state_60058[(18)]);
var inst_59932 = (state_60058[(11)]);
var inst_59931 = (state_60058[(12)]);
var inst_60043 = (function (){var p = inst_59932;
var _QMARK_error = inst_60015;
var v = inst_59931;
var vec__60017 = inst_60039;
var _ = inst_60040;
var e2 = inst_60041;
var _QMARK_error2 = inst_60041;
var event_msg = inst_59960;
var temp__5278__auto__ = inst_60041;
var e = inst_60015;
var event = inst_59961;
var map__59936 = inst_59960;
var vec__59937 = inst_60013;
var stop_QMARK_ = inst_59933;
var vec__59923 = inst_59930;
return ((function (p,_QMARK_error,v,vec__60017,_,e2,_QMARK_error2,event_msg,temp__5278__auto__,e,event,map__59936,vec__59937,stop_QMARK_,vec__59923,inst_60041,inst_60039,inst_60013,inst_59961,inst_60015,inst_59930,inst_59933,inst_59960,inst_60040,inst_59932,inst_59931,state_val_60059,c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,v,vec__60017,_,e2,_QMARK_error2,event_msg,temp__5278__auto__,e,event,map__59936,vec__59937,stop_QMARK_,vec__59923,inst_60041,inst_60039,inst_60013,inst_59961,inst_60015,inst_59930,inst_59933,inst_59960,inst_60040,inst_59932,inst_59931,state_val_60059,c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_60044 = (new cljs.core.Delay(inst_60043,null));
var inst_60045 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_60044,null);
var state_60058__$1 = state_60058;
var statearr_60103_60168 = state_60058__$1;
(statearr_60103_60168[(2)] = inst_60045);

(statearr_60103_60168[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (35))){
var inst_59960 = (state_60058[(10)]);
var state_60058__$1 = state_60058;
var statearr_60104_60169 = state_60058__$1;
(statearr_60104_60169[(2)] = inst_59960);

(statearr_60104_60169[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60058,(18),Error,null,(17));
var inst_59969 = cljs.core.PersistentVector.EMPTY_NODE;
var state_60058__$1 = (function (){var statearr_60105 = state_60058;
(statearr_60105[(20)] = inst_59969);

return statearr_60105;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_60106_60170 = state_60058__$1;
(statearr_60106_60170[(1)] = (20));

} else {
var statearr_60107_60171 = state_60058__$1;
(statearr_60107_60171[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (11))){
var state_60058__$1 = state_60058;
var statearr_60108_60172 = state_60058__$1;
(statearr_60108_60172[(2)] = true);

(statearr_60108_60172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (9))){
var state_60058__$1 = state_60058;
var statearr_60109_60173 = state_60058__$1;
(statearr_60109_60173[(2)] = false);

(statearr_60109_60173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (5))){
var state_60058__$1 = state_60058;
var statearr_60110_60174 = state_60058__$1;
(statearr_60110_60174[(2)] = null);

(statearr_60110_60174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (14))){
var inst_59931 = (state_60058[(12)]);
var inst_59957 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59931);
var state_60058__$1 = state_60058;
var statearr_60111_60175 = state_60058__$1;
(statearr_60111_60175[(2)] = inst_59957);

(statearr_60111_60175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (45))){
var inst_60013 = (state_60058[(21)]);
var inst_59961 = (state_60058[(7)]);
var inst_60015 = (state_60058[(19)]);
var inst_59930 = (state_60058[(8)]);
var inst_59933 = (state_60058[(9)]);
var inst_60014 = (state_60058[(22)]);
var inst_59960 = (state_60058[(10)]);
var inst_59932 = (state_60058[(11)]);
var inst_59931 = (state_60058[(12)]);
var inst_60031 = (function (){var p = inst_59932;
var _QMARK_error = inst_60015;
var v = inst_59931;
var _ = inst_60014;
var event_msg = inst_59960;
var temp__5278__auto__ = inst_60015;
var e = inst_60015;
var temp__5276__auto__ = error_handler;
var event = inst_59961;
var map__59936 = inst_59960;
var vec__59937 = inst_60013;
var stop_QMARK_ = inst_59933;
var vec__59923 = inst_59930;
return ((function (p,_QMARK_error,v,_,event_msg,temp__5278__auto__,e,temp__5276__auto__,event,map__59936,vec__59937,stop_QMARK_,vec__59923,inst_60013,inst_59961,inst_60015,inst_59930,inst_59933,inst_60014,inst_59960,inst_59932,inst_59931,state_val_60059,c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,v,_,event_msg,temp__5278__auto__,e,temp__5276__auto__,event,map__59936,vec__59937,stop_QMARK_,vec__59923,inst_60013,inst_59961,inst_60015,inst_59930,inst_59933,inst_60014,inst_59960,inst_59932,inst_59931,state_val_60059,c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_60032 = (new cljs.core.Delay(inst_60031,null));
var inst_60033 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/9s/txldqs4x1ts59q6qblrn133c0000gn/T/form-init7079069231951140830.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_60032,null);
var state_60058__$1 = state_60058;
var statearr_60112_60176 = state_60058__$1;
(statearr_60112_60176[(2)] = inst_60033);

(statearr_60112_60176[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (26))){
var inst_59991 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60113_60177 = state_60058__$1;
(statearr_60113_60177[(2)] = inst_59991);

(statearr_60113_60177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (16))){
var inst_59960 = (state_60058[(10)]);
var inst_59960__$1 = (state_60058[(2)]);
var inst_59961 = cljs.core.get.call(null,inst_59960__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_60058__$1 = (function (){var statearr_60114 = state_60058;
(statearr_60114[(7)] = inst_59961);

(statearr_60114[(10)] = inst_59960__$1);

return statearr_60114;
})();
var statearr_60115_60178 = state_60058__$1;
(statearr_60115_60178[(2)] = null);

(statearr_60115_60178[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (38))){
var state_60058__$1 = state_60058;
var statearr_60116_60179 = state_60058__$1;
(statearr_60116_60179[(2)] = null);

(statearr_60116_60179[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (30))){
var inst_59987 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_60058__$1 = state_60058;
var statearr_60117_60180 = state_60058__$1;
(statearr_60117_60180[(2)] = inst_59987);

(statearr_60117_60180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (10))){
var inst_59955 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
if(cljs.core.truth_(inst_59955)){
var statearr_60118_60181 = state_60058__$1;
(statearr_60118_60181[(1)] = (14));

} else {
var statearr_60119_60182 = state_60058__$1;
(statearr_60119_60182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (18))){
var inst_59962 = (state_60058[(2)]);
var inst_59963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59964 = [null,inst_59962];
var inst_59965 = (new cljs.core.PersistentVector(null,2,(5),inst_59963,inst_59964,null));
var state_60058__$1 = state_60058;
var statearr_60120_60183 = state_60058__$1;
(statearr_60120_60183[(2)] = inst_59965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (42))){
var inst_60020 = (state_60058[(2)]);
var inst_60021 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60022 = [null,inst_60020];
var inst_60023 = (new cljs.core.PersistentVector(null,2,(5),inst_60021,inst_60022,null));
var state_60058__$1 = state_60058;
var statearr_60121_60184 = state_60058__$1;
(statearr_60121_60184[(2)] = inst_60023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (37))){
var inst_60004 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60122_60185 = state_60058__$1;
(statearr_60122_60185[(2)] = inst_60004);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (8))){
var inst_59931 = (state_60058[(12)]);
var inst_59944 = inst_59931.cljs$lang$protocol_mask$partition0$;
var inst_59945 = (inst_59944 & (64));
var inst_59946 = inst_59931.cljs$core$ISeq$;
var inst_59947 = (cljs.core.PROTOCOL_SENTINEL === inst_59946);
var inst_59948 = (inst_59945) || (inst_59947);
var state_60058__$1 = state_60058;
if(cljs.core.truth_(inst_59948)){
var statearr_60123_60186 = state_60058__$1;
(statearr_60123_60186[(1)] = (11));

} else {
var statearr_60124_60187 = state_60058__$1;
(statearr_60124_60187[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60059 === (49))){
var inst_60048 = (state_60058[(2)]);
var state_60058__$1 = state_60058;
var statearr_60125_60188 = state_60058__$1;
(statearr_60125_60188[(2)] = inst_60048);

(statearr_60125_60188[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__56299__auto__,c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto____0 = (function (){
var statearr_60126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60126[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto__);

(statearr_60126[(1)] = (1));

return statearr_60126;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto____1 = (function (state_60058){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_60058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e60127){if((e60127 instanceof Object)){
var ex__56303__auto__ = e60127;
var statearr_60128_60189 = state_60058;
(statearr_60128_60189[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60190 = state_60058;
state_60058 = G__60190;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto__ = function(state_60058){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto____1.call(this,state_60058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__56391__auto__ = (function (){var statearr_60129 = f__56390__auto__.call(null);
(statearr_60129[(6)] = c__56389__auto___60130);

return statearr_60129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___60130,map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__59920,map__59920__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___60200 = arguments.length;
var i__44090__auto___60201 = (0);
while(true){
if((i__44090__auto___60201 < len__44089__auto___60200)){
args__44096__auto__.push((arguments[i__44090__auto___60201]));

var G__60202 = (i__44090__auto___60201 + (1));
i__44090__auto___60201 = G__60202;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((2) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44097__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__60194){
var vec__60195 = p__60194;
var map__60198 = cljs.core.nth.call(null,vec__60195,(0),null);
var map__60198__$1 = ((((!((map__60198 == null)))?((((map__60198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60198):map__60198);
var opts = map__60198__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__60198__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__60198__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq60191){
var G__60192 = cljs.core.first.call(null,seq60191);
var seq60191__$1 = cljs.core.next.call(null,seq60191);
var G__60193 = cljs.core.first.call(null,seq60191__$1);
var seq60191__$2 = cljs.core.next.call(null,seq60191__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60192,G__60193,seq60191__$2);
});

/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___60212 = arguments.length;
var i__44090__auto___60213 = (0);
while(true){
if((i__44090__auto___60213 < len__44089__auto___60212)){
args__44096__auto__.push((arguments[i__44090__auto___60213]));

var G__60214 = (i__44090__auto___60213 + (1));
i__44090__auto___60213 = G__60214;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((2) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__44097__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__60206){
var vec__60207 = p__60206;
var map__60210 = cljs.core.nth.call(null,vec__60207,(0),null);
var map__60210__$1 = ((((!((map__60210 == null)))?((((map__60210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60210):map__60210);
var opts = map__60210__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__60210__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__60210__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq60203){
var G__60204 = cljs.core.first.call(null,seq60203);
var seq60203__$1 = cljs.core.next.call(null,seq60203);
var G__60205 = cljs.core.first.call(null,seq60203__$1);
var seq60203__$2 = cljs.core.next.call(null,seq60203__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60204,G__60205,seq60203__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED: Please use `ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__60215,websocket_QMARK_){
var map__60216 = p__60215;
var map__60216__$1 = ((((!((map__60216 == null)))?((((map__60216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60216):map__60216);
var location = map__60216__$1;
var adjusted_protocol = cljs.core.get.call(null,map__60216__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__60216__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__60216__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(adjusted_protocol),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__41411__auto__ = path;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1512631541166
