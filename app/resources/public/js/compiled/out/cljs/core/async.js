// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__52102 = arguments.length;
switch (G__52102) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async52103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52103 = (function (f,blockable,meta52104){
this.f = f;
this.blockable = blockable;
this.meta52104 = meta52104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52105,meta52104__$1){
var self__ = this;
var _52105__$1 = this;
return (new cljs.core.async.t_cljs$core$async52103(self__.f,self__.blockable,meta52104__$1));
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52105){
var self__ = this;
var _52105__$1 = this;
return self__.meta52104;
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async52103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async52103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta52104","meta52104",2097478741,null)], null);
});

cljs.core.async.t_cljs$core$async52103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52103";

cljs.core.async.t_cljs$core$async52103.cljs$lang$ctorPrWriter = (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async52103");
});

cljs.core.async.__GT_t_cljs$core$async52103 = (function cljs$core$async$__GT_t_cljs$core$async52103(f__$1,blockable__$1,meta52104){
return (new cljs.core.async.t_cljs$core$async52103(f__$1,blockable__$1,meta52104));
});

}

return (new cljs.core.async.t_cljs$core$async52103(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__52109 = arguments.length;
switch (G__52109) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__52112 = arguments.length;
switch (G__52112) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__52115 = arguments.length;
switch (G__52115) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_52117 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_52117);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_52117,ret){
return (function (){
return fn1.call(null,val_52117);
});})(val_52117,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__52119 = arguments.length;
switch (G__52119) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__43535__auto___52121 = n;
var x_52122 = (0);
while(true){
if((x_52122 < n__43535__auto___52121)){
(a[x_52122] = (0));

var G__52123 = (x_52122 + (1));
x_52122 = G__52123;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__52124 = (i + (1));
i = G__52124;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async52125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52125 = (function (flag,meta52126){
this.flag = flag;
this.meta52126 = meta52126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52127,meta52126__$1){
var self__ = this;
var _52127__$1 = this;
return (new cljs.core.async.t_cljs$core$async52125(self__.flag,meta52126__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async52125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52127){
var self__ = this;
var _52127__$1 = this;
return self__.meta52126;
});})(flag))
;

cljs.core.async.t_cljs$core$async52125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async52125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async52125.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta52126","meta52126",591102203,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async52125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52125";

cljs.core.async.t_cljs$core$async52125.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async52125");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async52125 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async52125(flag__$1,meta52126){
return (new cljs.core.async.t_cljs$core$async52125(flag__$1,meta52126));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async52125(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async52128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52128 = (function (flag,cb,meta52129){
this.flag = flag;
this.cb = cb;
this.meta52129 = meta52129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52130,meta52129__$1){
var self__ = this;
var _52130__$1 = this;
return (new cljs.core.async.t_cljs$core$async52128(self__.flag,self__.cb,meta52129__$1));
});

cljs.core.async.t_cljs$core$async52128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52130){
var self__ = this;
var _52130__$1 = this;
return self__.meta52129;
});

cljs.core.async.t_cljs$core$async52128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async52128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async52128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async52128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta52129","meta52129",1799752319,null)], null);
});

cljs.core.async.t_cljs$core$async52128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52128";

cljs.core.async.t_cljs$core$async52128.cljs$lang$ctorPrWriter = (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async52128");
});

cljs.core.async.__GT_t_cljs$core$async52128 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async52128(flag__$1,cb__$1,meta52129){
return (new cljs.core.async.t_cljs$core$async52128(flag__$1,cb__$1,meta52129));
});

}

return (new cljs.core.async.t_cljs$core$async52128(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52131_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52131_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__52132_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52132_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41331__auto__ = wport;
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52133 = (i + (1));
i = G__52133;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41331__auto__ = ret;
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__41318__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41318__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41318__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__44034__auto__ = [];
var len__44016__auto___52139 = arguments.length;
var i__44017__auto___52140 = (0);
while(true){
if((i__44017__auto___52140 < len__44016__auto___52139)){
args__44034__auto__.push((arguments[i__44017__auto___52140]));

var G__52141 = (i__44017__auto___52140 + (1));
i__44017__auto___52140 = G__52141;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((1) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44035__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__52136){
var map__52137 = p__52136;
var map__52137__$1 = ((((!((map__52137 == null)))?((((map__52137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52137):map__52137);
var opts = map__52137__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq52134){
var G__52135 = cljs.core.first.call(null,seq52134);
var seq52134__$1 = cljs.core.next.call(null,seq52134);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52135,seq52134__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__52143 = arguments.length;
switch (G__52143) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__52042__auto___52189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___52189){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___52189){
return (function (state_52167){
var state_val_52168 = (state_52167[(1)]);
if((state_val_52168 === (7))){
var inst_52163 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52169_52190 = state_52167__$1;
(statearr_52169_52190[(2)] = inst_52163);

(statearr_52169_52190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (1))){
var state_52167__$1 = state_52167;
var statearr_52170_52191 = state_52167__$1;
(statearr_52170_52191[(2)] = null);

(statearr_52170_52191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (4))){
var inst_52146 = (state_52167[(7)]);
var inst_52146__$1 = (state_52167[(2)]);
var inst_52147 = (inst_52146__$1 == null);
var state_52167__$1 = (function (){var statearr_52171 = state_52167;
(statearr_52171[(7)] = inst_52146__$1);

return statearr_52171;
})();
if(cljs.core.truth_(inst_52147)){
var statearr_52172_52192 = state_52167__$1;
(statearr_52172_52192[(1)] = (5));

} else {
var statearr_52173_52193 = state_52167__$1;
(statearr_52173_52193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (13))){
var state_52167__$1 = state_52167;
var statearr_52174_52194 = state_52167__$1;
(statearr_52174_52194[(2)] = null);

(statearr_52174_52194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (6))){
var inst_52146 = (state_52167[(7)]);
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52167__$1,(11),to,inst_52146);
} else {
if((state_val_52168 === (3))){
var inst_52165 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52167__$1,inst_52165);
} else {
if((state_val_52168 === (12))){
var state_52167__$1 = state_52167;
var statearr_52175_52195 = state_52167__$1;
(statearr_52175_52195[(2)] = null);

(statearr_52175_52195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (2))){
var state_52167__$1 = state_52167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52167__$1,(4),from);
} else {
if((state_val_52168 === (11))){
var inst_52156 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
if(cljs.core.truth_(inst_52156)){
var statearr_52176_52196 = state_52167__$1;
(statearr_52176_52196[(1)] = (12));

} else {
var statearr_52177_52197 = state_52167__$1;
(statearr_52177_52197[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (9))){
var state_52167__$1 = state_52167;
var statearr_52178_52198 = state_52167__$1;
(statearr_52178_52198[(2)] = null);

(statearr_52178_52198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (5))){
var state_52167__$1 = state_52167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52179_52199 = state_52167__$1;
(statearr_52179_52199[(1)] = (8));

} else {
var statearr_52180_52200 = state_52167__$1;
(statearr_52180_52200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (14))){
var inst_52161 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52181_52201 = state_52167__$1;
(statearr_52181_52201[(2)] = inst_52161);

(statearr_52181_52201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (10))){
var inst_52153 = (state_52167[(2)]);
var state_52167__$1 = state_52167;
var statearr_52182_52202 = state_52167__$1;
(statearr_52182_52202[(2)] = inst_52153);

(statearr_52182_52202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52168 === (8))){
var inst_52150 = cljs.core.async.close_BANG_.call(null,to);
var state_52167__$1 = state_52167;
var statearr_52183_52203 = state_52167__$1;
(statearr_52183_52203[(2)] = inst_52150);

(statearr_52183_52203[(1)] = (10));


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
});})(c__52042__auto___52189))
;
return ((function (switch__51952__auto__,c__52042__auto___52189){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_52184 = [null,null,null,null,null,null,null,null];
(statearr_52184[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_52184[(1)] = (1));

return statearr_52184;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_52167){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52185){if((e52185 instanceof Object)){
var ex__51956__auto__ = e52185;
var statearr_52186_52204 = state_52167;
(statearr_52186_52204[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52205 = state_52167;
state_52167 = G__52205;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_52167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_52167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___52189))
})();
var state__52044__auto__ = (function (){var statearr_52187 = f__52043__auto__.call(null);
(statearr_52187[(6)] = c__52042__auto___52189);

return statearr_52187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___52189))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__52206){
var vec__52207 = p__52206;
var v = cljs.core.nth.call(null,vec__52207,(0),null);
var p = cljs.core.nth.call(null,vec__52207,(1),null);
var job = vec__52207;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__52042__auto___52378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___52378,res,vec__52207,v,p,job,jobs,results){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___52378,res,vec__52207,v,p,job,jobs,results){
return (function (state_52214){
var state_val_52215 = (state_52214[(1)]);
if((state_val_52215 === (1))){
var state_52214__$1 = state_52214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52214__$1,(2),res,v);
} else {
if((state_val_52215 === (2))){
var inst_52211 = (state_52214[(2)]);
var inst_52212 = cljs.core.async.close_BANG_.call(null,res);
var state_52214__$1 = (function (){var statearr_52216 = state_52214;
(statearr_52216[(7)] = inst_52211);

return statearr_52216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52214__$1,inst_52212);
} else {
return null;
}
}
});})(c__52042__auto___52378,res,vec__52207,v,p,job,jobs,results))
;
return ((function (switch__51952__auto__,c__52042__auto___52378,res,vec__52207,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0 = (function (){
var statearr_52217 = [null,null,null,null,null,null,null,null];
(statearr_52217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__);

(statearr_52217[(1)] = (1));

return statearr_52217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1 = (function (state_52214){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52218){if((e52218 instanceof Object)){
var ex__51956__auto__ = e52218;
var statearr_52219_52379 = state_52214;
(statearr_52219_52379[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52380 = state_52214;
state_52214 = G__52380;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = function(state_52214){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1.call(this,state_52214);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___52378,res,vec__52207,v,p,job,jobs,results))
})();
var state__52044__auto__ = (function (){var statearr_52220 = f__52043__auto__.call(null);
(statearr_52220[(6)] = c__52042__auto___52378);

return statearr_52220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___52378,res,vec__52207,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__52221){
var vec__52222 = p__52221;
var v = cljs.core.nth.call(null,vec__52222,(0),null);
var p = cljs.core.nth.call(null,vec__52222,(1),null);
var job = vec__52222;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__43535__auto___52381 = n;
var __52382 = (0);
while(true){
if((__52382 < n__43535__auto___52381)){
var G__52225_52383 = type;
var G__52225_52384__$1 = (((G__52225_52383 instanceof cljs.core.Keyword))?G__52225_52383.fqn:null);
switch (G__52225_52384__$1) {
case "compute":
var c__52042__auto___52386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52382,c__52042__auto___52386,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (__52382,c__52042__auto___52386,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async){
return (function (state_52238){
var state_val_52239 = (state_52238[(1)]);
if((state_val_52239 === (1))){
var state_52238__$1 = state_52238;
var statearr_52240_52387 = state_52238__$1;
(statearr_52240_52387[(2)] = null);

(statearr_52240_52387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (2))){
var state_52238__$1 = state_52238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52238__$1,(4),jobs);
} else {
if((state_val_52239 === (3))){
var inst_52236 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52238__$1,inst_52236);
} else {
if((state_val_52239 === (4))){
var inst_52228 = (state_52238[(2)]);
var inst_52229 = process.call(null,inst_52228);
var state_52238__$1 = state_52238;
if(cljs.core.truth_(inst_52229)){
var statearr_52241_52388 = state_52238__$1;
(statearr_52241_52388[(1)] = (5));

} else {
var statearr_52242_52389 = state_52238__$1;
(statearr_52242_52389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (5))){
var state_52238__$1 = state_52238;
var statearr_52243_52390 = state_52238__$1;
(statearr_52243_52390[(2)] = null);

(statearr_52243_52390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (6))){
var state_52238__$1 = state_52238;
var statearr_52244_52391 = state_52238__$1;
(statearr_52244_52391[(2)] = null);

(statearr_52244_52391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (7))){
var inst_52234 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52245_52392 = state_52238__$1;
(statearr_52245_52392[(2)] = inst_52234);

(statearr_52245_52392[(1)] = (3));


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
});})(__52382,c__52042__auto___52386,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async))
;
return ((function (__52382,switch__51952__auto__,c__52042__auto___52386,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0 = (function (){
var statearr_52246 = [null,null,null,null,null,null,null];
(statearr_52246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__);

(statearr_52246[(1)] = (1));

return statearr_52246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1 = (function (state_52238){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52247){if((e52247 instanceof Object)){
var ex__51956__auto__ = e52247;
var statearr_52248_52393 = state_52238;
(statearr_52248_52393[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52394 = state_52238;
state_52238 = G__52394;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = function(state_52238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1.call(this,state_52238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__;
})()
;})(__52382,switch__51952__auto__,c__52042__auto___52386,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async))
})();
var state__52044__auto__ = (function (){var statearr_52249 = f__52043__auto__.call(null);
(statearr_52249[(6)] = c__52042__auto___52386);

return statearr_52249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(__52382,c__52042__auto___52386,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async))
);


break;
case "async":
var c__52042__auto___52395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__52382,c__52042__auto___52395,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (__52382,c__52042__auto___52395,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async){
return (function (state_52262){
var state_val_52263 = (state_52262[(1)]);
if((state_val_52263 === (1))){
var state_52262__$1 = state_52262;
var statearr_52264_52396 = state_52262__$1;
(statearr_52264_52396[(2)] = null);

(statearr_52264_52396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52263 === (2))){
var state_52262__$1 = state_52262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52262__$1,(4),jobs);
} else {
if((state_val_52263 === (3))){
var inst_52260 = (state_52262[(2)]);
var state_52262__$1 = state_52262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52262__$1,inst_52260);
} else {
if((state_val_52263 === (4))){
var inst_52252 = (state_52262[(2)]);
var inst_52253 = async.call(null,inst_52252);
var state_52262__$1 = state_52262;
if(cljs.core.truth_(inst_52253)){
var statearr_52265_52397 = state_52262__$1;
(statearr_52265_52397[(1)] = (5));

} else {
var statearr_52266_52398 = state_52262__$1;
(statearr_52266_52398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52263 === (5))){
var state_52262__$1 = state_52262;
var statearr_52267_52399 = state_52262__$1;
(statearr_52267_52399[(2)] = null);

(statearr_52267_52399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52263 === (6))){
var state_52262__$1 = state_52262;
var statearr_52268_52400 = state_52262__$1;
(statearr_52268_52400[(2)] = null);

(statearr_52268_52400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52263 === (7))){
var inst_52258 = (state_52262[(2)]);
var state_52262__$1 = state_52262;
var statearr_52269_52401 = state_52262__$1;
(statearr_52269_52401[(2)] = inst_52258);

(statearr_52269_52401[(1)] = (3));


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
});})(__52382,c__52042__auto___52395,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async))
;
return ((function (__52382,switch__51952__auto__,c__52042__auto___52395,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0 = (function (){
var statearr_52270 = [null,null,null,null,null,null,null];
(statearr_52270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__);

(statearr_52270[(1)] = (1));

return statearr_52270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1 = (function (state_52262){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52271){if((e52271 instanceof Object)){
var ex__51956__auto__ = e52271;
var statearr_52272_52402 = state_52262;
(statearr_52272_52402[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52403 = state_52262;
state_52262 = G__52403;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = function(state_52262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1.call(this,state_52262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__;
})()
;})(__52382,switch__51952__auto__,c__52042__auto___52395,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async))
})();
var state__52044__auto__ = (function (){var statearr_52273 = f__52043__auto__.call(null);
(statearr_52273[(6)] = c__52042__auto___52395);

return statearr_52273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(__52382,c__52042__auto___52395,G__52225_52383,G__52225_52384__$1,n__43535__auto___52381,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52225_52384__$1)].join('')));

}

var G__52404 = (__52382 + (1));
__52382 = G__52404;
continue;
} else {
}
break;
}

var c__52042__auto___52405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___52405,jobs,results,process,async){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___52405,jobs,results,process,async){
return (function (state_52295){
var state_val_52296 = (state_52295[(1)]);
if((state_val_52296 === (1))){
var state_52295__$1 = state_52295;
var statearr_52297_52406 = state_52295__$1;
(statearr_52297_52406[(2)] = null);

(statearr_52297_52406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52296 === (2))){
var state_52295__$1 = state_52295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52295__$1,(4),from);
} else {
if((state_val_52296 === (3))){
var inst_52293 = (state_52295[(2)]);
var state_52295__$1 = state_52295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52295__$1,inst_52293);
} else {
if((state_val_52296 === (4))){
var inst_52276 = (state_52295[(7)]);
var inst_52276__$1 = (state_52295[(2)]);
var inst_52277 = (inst_52276__$1 == null);
var state_52295__$1 = (function (){var statearr_52298 = state_52295;
(statearr_52298[(7)] = inst_52276__$1);

return statearr_52298;
})();
if(cljs.core.truth_(inst_52277)){
var statearr_52299_52407 = state_52295__$1;
(statearr_52299_52407[(1)] = (5));

} else {
var statearr_52300_52408 = state_52295__$1;
(statearr_52300_52408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52296 === (5))){
var inst_52279 = cljs.core.async.close_BANG_.call(null,jobs);
var state_52295__$1 = state_52295;
var statearr_52301_52409 = state_52295__$1;
(statearr_52301_52409[(2)] = inst_52279);

(statearr_52301_52409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52296 === (6))){
var inst_52281 = (state_52295[(8)]);
var inst_52276 = (state_52295[(7)]);
var inst_52281__$1 = cljs.core.async.chan.call(null,(1));
var inst_52282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52283 = [inst_52276,inst_52281__$1];
var inst_52284 = (new cljs.core.PersistentVector(null,2,(5),inst_52282,inst_52283,null));
var state_52295__$1 = (function (){var statearr_52302 = state_52295;
(statearr_52302[(8)] = inst_52281__$1);

return statearr_52302;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52295__$1,(8),jobs,inst_52284);
} else {
if((state_val_52296 === (7))){
var inst_52291 = (state_52295[(2)]);
var state_52295__$1 = state_52295;
var statearr_52303_52410 = state_52295__$1;
(statearr_52303_52410[(2)] = inst_52291);

(statearr_52303_52410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52296 === (8))){
var inst_52281 = (state_52295[(8)]);
var inst_52286 = (state_52295[(2)]);
var state_52295__$1 = (function (){var statearr_52304 = state_52295;
(statearr_52304[(9)] = inst_52286);

return statearr_52304;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52295__$1,(9),results,inst_52281);
} else {
if((state_val_52296 === (9))){
var inst_52288 = (state_52295[(2)]);
var state_52295__$1 = (function (){var statearr_52305 = state_52295;
(statearr_52305[(10)] = inst_52288);

return statearr_52305;
})();
var statearr_52306_52411 = state_52295__$1;
(statearr_52306_52411[(2)] = null);

(statearr_52306_52411[(1)] = (2));


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
});})(c__52042__auto___52405,jobs,results,process,async))
;
return ((function (switch__51952__auto__,c__52042__auto___52405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0 = (function (){
var statearr_52307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__);

(statearr_52307[(1)] = (1));

return statearr_52307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1 = (function (state_52295){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52308){if((e52308 instanceof Object)){
var ex__51956__auto__ = e52308;
var statearr_52309_52412 = state_52295;
(statearr_52309_52412[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52413 = state_52295;
state_52295 = G__52413;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = function(state_52295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1.call(this,state_52295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___52405,jobs,results,process,async))
})();
var state__52044__auto__ = (function (){var statearr_52310 = f__52043__auto__.call(null);
(statearr_52310[(6)] = c__52042__auto___52405);

return statearr_52310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___52405,jobs,results,process,async))
);


var c__52042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto__,jobs,results,process,async){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto__,jobs,results,process,async){
return (function (state_52348){
var state_val_52349 = (state_52348[(1)]);
if((state_val_52349 === (7))){
var inst_52344 = (state_52348[(2)]);
var state_52348__$1 = state_52348;
var statearr_52350_52414 = state_52348__$1;
(statearr_52350_52414[(2)] = inst_52344);

(statearr_52350_52414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (20))){
var state_52348__$1 = state_52348;
var statearr_52351_52415 = state_52348__$1;
(statearr_52351_52415[(2)] = null);

(statearr_52351_52415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (1))){
var state_52348__$1 = state_52348;
var statearr_52352_52416 = state_52348__$1;
(statearr_52352_52416[(2)] = null);

(statearr_52352_52416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (4))){
var inst_52313 = (state_52348[(7)]);
var inst_52313__$1 = (state_52348[(2)]);
var inst_52314 = (inst_52313__$1 == null);
var state_52348__$1 = (function (){var statearr_52353 = state_52348;
(statearr_52353[(7)] = inst_52313__$1);

return statearr_52353;
})();
if(cljs.core.truth_(inst_52314)){
var statearr_52354_52417 = state_52348__$1;
(statearr_52354_52417[(1)] = (5));

} else {
var statearr_52355_52418 = state_52348__$1;
(statearr_52355_52418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (15))){
var inst_52326 = (state_52348[(8)]);
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52348__$1,(18),to,inst_52326);
} else {
if((state_val_52349 === (21))){
var inst_52339 = (state_52348[(2)]);
var state_52348__$1 = state_52348;
var statearr_52356_52419 = state_52348__$1;
(statearr_52356_52419[(2)] = inst_52339);

(statearr_52356_52419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (13))){
var inst_52341 = (state_52348[(2)]);
var state_52348__$1 = (function (){var statearr_52357 = state_52348;
(statearr_52357[(9)] = inst_52341);

return statearr_52357;
})();
var statearr_52358_52420 = state_52348__$1;
(statearr_52358_52420[(2)] = null);

(statearr_52358_52420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (6))){
var inst_52313 = (state_52348[(7)]);
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52348__$1,(11),inst_52313);
} else {
if((state_val_52349 === (17))){
var inst_52334 = (state_52348[(2)]);
var state_52348__$1 = state_52348;
if(cljs.core.truth_(inst_52334)){
var statearr_52359_52421 = state_52348__$1;
(statearr_52359_52421[(1)] = (19));

} else {
var statearr_52360_52422 = state_52348__$1;
(statearr_52360_52422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (3))){
var inst_52346 = (state_52348[(2)]);
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52348__$1,inst_52346);
} else {
if((state_val_52349 === (12))){
var inst_52323 = (state_52348[(10)]);
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52348__$1,(14),inst_52323);
} else {
if((state_val_52349 === (2))){
var state_52348__$1 = state_52348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52348__$1,(4),results);
} else {
if((state_val_52349 === (19))){
var state_52348__$1 = state_52348;
var statearr_52361_52423 = state_52348__$1;
(statearr_52361_52423[(2)] = null);

(statearr_52361_52423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (11))){
var inst_52323 = (state_52348[(2)]);
var state_52348__$1 = (function (){var statearr_52362 = state_52348;
(statearr_52362[(10)] = inst_52323);

return statearr_52362;
})();
var statearr_52363_52424 = state_52348__$1;
(statearr_52363_52424[(2)] = null);

(statearr_52363_52424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (9))){
var state_52348__$1 = state_52348;
var statearr_52364_52425 = state_52348__$1;
(statearr_52364_52425[(2)] = null);

(statearr_52364_52425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (5))){
var state_52348__$1 = state_52348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52365_52426 = state_52348__$1;
(statearr_52365_52426[(1)] = (8));

} else {
var statearr_52366_52427 = state_52348__$1;
(statearr_52366_52427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (14))){
var inst_52328 = (state_52348[(11)]);
var inst_52326 = (state_52348[(8)]);
var inst_52326__$1 = (state_52348[(2)]);
var inst_52327 = (inst_52326__$1 == null);
var inst_52328__$1 = cljs.core.not.call(null,inst_52327);
var state_52348__$1 = (function (){var statearr_52367 = state_52348;
(statearr_52367[(11)] = inst_52328__$1);

(statearr_52367[(8)] = inst_52326__$1);

return statearr_52367;
})();
if(inst_52328__$1){
var statearr_52368_52428 = state_52348__$1;
(statearr_52368_52428[(1)] = (15));

} else {
var statearr_52369_52429 = state_52348__$1;
(statearr_52369_52429[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (16))){
var inst_52328 = (state_52348[(11)]);
var state_52348__$1 = state_52348;
var statearr_52370_52430 = state_52348__$1;
(statearr_52370_52430[(2)] = inst_52328);

(statearr_52370_52430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (10))){
var inst_52320 = (state_52348[(2)]);
var state_52348__$1 = state_52348;
var statearr_52371_52431 = state_52348__$1;
(statearr_52371_52431[(2)] = inst_52320);

(statearr_52371_52431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (18))){
var inst_52331 = (state_52348[(2)]);
var state_52348__$1 = state_52348;
var statearr_52372_52432 = state_52348__$1;
(statearr_52372_52432[(2)] = inst_52331);

(statearr_52372_52432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52349 === (8))){
var inst_52317 = cljs.core.async.close_BANG_.call(null,to);
var state_52348__$1 = state_52348;
var statearr_52373_52433 = state_52348__$1;
(statearr_52373_52433[(2)] = inst_52317);

(statearr_52373_52433[(1)] = (10));


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
});})(c__52042__auto__,jobs,results,process,async))
;
return ((function (switch__51952__auto__,c__52042__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0 = (function (){
var statearr_52374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__);

(statearr_52374[(1)] = (1));

return statearr_52374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1 = (function (state_52348){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52375){if((e52375 instanceof Object)){
var ex__51956__auto__ = e52375;
var statearr_52376_52434 = state_52348;
(statearr_52376_52434[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52435 = state_52348;
state_52348 = G__52435;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__ = function(state_52348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1.call(this,state_52348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__51953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto__,jobs,results,process,async))
})();
var state__52044__auto__ = (function (){var statearr_52377 = f__52043__auto__.call(null);
(statearr_52377[(6)] = c__52042__auto__);

return statearr_52377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto__,jobs,results,process,async))
);

return c__52042__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__52437 = arguments.length;
switch (G__52437) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__52440 = arguments.length;
switch (G__52440) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__52443 = arguments.length;
switch (G__52443) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__52042__auto___52492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___52492,tc,fc){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___52492,tc,fc){
return (function (state_52469){
var state_val_52470 = (state_52469[(1)]);
if((state_val_52470 === (7))){
var inst_52465 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
var statearr_52471_52493 = state_52469__$1;
(statearr_52471_52493[(2)] = inst_52465);

(statearr_52471_52493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (1))){
var state_52469__$1 = state_52469;
var statearr_52472_52494 = state_52469__$1;
(statearr_52472_52494[(2)] = null);

(statearr_52472_52494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (4))){
var inst_52446 = (state_52469[(7)]);
var inst_52446__$1 = (state_52469[(2)]);
var inst_52447 = (inst_52446__$1 == null);
var state_52469__$1 = (function (){var statearr_52473 = state_52469;
(statearr_52473[(7)] = inst_52446__$1);

return statearr_52473;
})();
if(cljs.core.truth_(inst_52447)){
var statearr_52474_52495 = state_52469__$1;
(statearr_52474_52495[(1)] = (5));

} else {
var statearr_52475_52496 = state_52469__$1;
(statearr_52475_52496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (13))){
var state_52469__$1 = state_52469;
var statearr_52476_52497 = state_52469__$1;
(statearr_52476_52497[(2)] = null);

(statearr_52476_52497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (6))){
var inst_52446 = (state_52469[(7)]);
var inst_52452 = p.call(null,inst_52446);
var state_52469__$1 = state_52469;
if(cljs.core.truth_(inst_52452)){
var statearr_52477_52498 = state_52469__$1;
(statearr_52477_52498[(1)] = (9));

} else {
var statearr_52478_52499 = state_52469__$1;
(statearr_52478_52499[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (3))){
var inst_52467 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52469__$1,inst_52467);
} else {
if((state_val_52470 === (12))){
var state_52469__$1 = state_52469;
var statearr_52479_52500 = state_52469__$1;
(statearr_52479_52500[(2)] = null);

(statearr_52479_52500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (2))){
var state_52469__$1 = state_52469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52469__$1,(4),ch);
} else {
if((state_val_52470 === (11))){
var inst_52446 = (state_52469[(7)]);
var inst_52456 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52469__$1,(8),inst_52456,inst_52446);
} else {
if((state_val_52470 === (9))){
var state_52469__$1 = state_52469;
var statearr_52480_52501 = state_52469__$1;
(statearr_52480_52501[(2)] = tc);

(statearr_52480_52501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (5))){
var inst_52449 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52450 = cljs.core.async.close_BANG_.call(null,fc);
var state_52469__$1 = (function (){var statearr_52481 = state_52469;
(statearr_52481[(8)] = inst_52449);

return statearr_52481;
})();
var statearr_52482_52502 = state_52469__$1;
(statearr_52482_52502[(2)] = inst_52450);

(statearr_52482_52502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (14))){
var inst_52463 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
var statearr_52483_52503 = state_52469__$1;
(statearr_52483_52503[(2)] = inst_52463);

(statearr_52483_52503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (10))){
var state_52469__$1 = state_52469;
var statearr_52484_52504 = state_52469__$1;
(statearr_52484_52504[(2)] = fc);

(statearr_52484_52504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52470 === (8))){
var inst_52458 = (state_52469[(2)]);
var state_52469__$1 = state_52469;
if(cljs.core.truth_(inst_52458)){
var statearr_52485_52505 = state_52469__$1;
(statearr_52485_52505[(1)] = (12));

} else {
var statearr_52486_52506 = state_52469__$1;
(statearr_52486_52506[(1)] = (13));

}

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
});})(c__52042__auto___52492,tc,fc))
;
return ((function (switch__51952__auto__,c__52042__auto___52492,tc,fc){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_52487 = [null,null,null,null,null,null,null,null,null];
(statearr_52487[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_52487[(1)] = (1));

return statearr_52487;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_52469){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52488){if((e52488 instanceof Object)){
var ex__51956__auto__ = e52488;
var statearr_52489_52507 = state_52469;
(statearr_52489_52507[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52508 = state_52469;
state_52469 = G__52508;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_52469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_52469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___52492,tc,fc))
})();
var state__52044__auto__ = (function (){var statearr_52490 = f__52043__auto__.call(null);
(statearr_52490[(6)] = c__52042__auto___52492);

return statearr_52490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___52492,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__52042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto__){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto__){
return (function (state_52529){
var state_val_52530 = (state_52529[(1)]);
if((state_val_52530 === (7))){
var inst_52525 = (state_52529[(2)]);
var state_52529__$1 = state_52529;
var statearr_52531_52549 = state_52529__$1;
(statearr_52531_52549[(2)] = inst_52525);

(statearr_52531_52549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52530 === (1))){
var inst_52509 = init;
var state_52529__$1 = (function (){var statearr_52532 = state_52529;
(statearr_52532[(7)] = inst_52509);

return statearr_52532;
})();
var statearr_52533_52550 = state_52529__$1;
(statearr_52533_52550[(2)] = null);

(statearr_52533_52550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52530 === (4))){
var inst_52512 = (state_52529[(8)]);
var inst_52512__$1 = (state_52529[(2)]);
var inst_52513 = (inst_52512__$1 == null);
var state_52529__$1 = (function (){var statearr_52534 = state_52529;
(statearr_52534[(8)] = inst_52512__$1);

return statearr_52534;
})();
if(cljs.core.truth_(inst_52513)){
var statearr_52535_52551 = state_52529__$1;
(statearr_52535_52551[(1)] = (5));

} else {
var statearr_52536_52552 = state_52529__$1;
(statearr_52536_52552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52530 === (6))){
var inst_52516 = (state_52529[(9)]);
var inst_52509 = (state_52529[(7)]);
var inst_52512 = (state_52529[(8)]);
var inst_52516__$1 = f.call(null,inst_52509,inst_52512);
var inst_52517 = cljs.core.reduced_QMARK_.call(null,inst_52516__$1);
var state_52529__$1 = (function (){var statearr_52537 = state_52529;
(statearr_52537[(9)] = inst_52516__$1);

return statearr_52537;
})();
if(inst_52517){
var statearr_52538_52553 = state_52529__$1;
(statearr_52538_52553[(1)] = (8));

} else {
var statearr_52539_52554 = state_52529__$1;
(statearr_52539_52554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52530 === (3))){
var inst_52527 = (state_52529[(2)]);
var state_52529__$1 = state_52529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52529__$1,inst_52527);
} else {
if((state_val_52530 === (2))){
var state_52529__$1 = state_52529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52529__$1,(4),ch);
} else {
if((state_val_52530 === (9))){
var inst_52516 = (state_52529[(9)]);
var inst_52509 = inst_52516;
var state_52529__$1 = (function (){var statearr_52540 = state_52529;
(statearr_52540[(7)] = inst_52509);

return statearr_52540;
})();
var statearr_52541_52555 = state_52529__$1;
(statearr_52541_52555[(2)] = null);

(statearr_52541_52555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52530 === (5))){
var inst_52509 = (state_52529[(7)]);
var state_52529__$1 = state_52529;
var statearr_52542_52556 = state_52529__$1;
(statearr_52542_52556[(2)] = inst_52509);

(statearr_52542_52556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52530 === (10))){
var inst_52523 = (state_52529[(2)]);
var state_52529__$1 = state_52529;
var statearr_52543_52557 = state_52529__$1;
(statearr_52543_52557[(2)] = inst_52523);

(statearr_52543_52557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52530 === (8))){
var inst_52516 = (state_52529[(9)]);
var inst_52519 = cljs.core.deref.call(null,inst_52516);
var state_52529__$1 = state_52529;
var statearr_52544_52558 = state_52529__$1;
(statearr_52544_52558[(2)] = inst_52519);

(statearr_52544_52558[(1)] = (10));


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
});})(c__52042__auto__))
;
return ((function (switch__51952__auto__,c__52042__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__51953__auto__ = null;
var cljs$core$async$reduce_$_state_machine__51953__auto____0 = (function (){
var statearr_52545 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52545[(0)] = cljs$core$async$reduce_$_state_machine__51953__auto__);

(statearr_52545[(1)] = (1));

return statearr_52545;
});
var cljs$core$async$reduce_$_state_machine__51953__auto____1 = (function (state_52529){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52546){if((e52546 instanceof Object)){
var ex__51956__auto__ = e52546;
var statearr_52547_52559 = state_52529;
(statearr_52547_52559[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52560 = state_52529;
state_52529 = G__52560;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__51953__auto__ = function(state_52529){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__51953__auto____1.call(this,state_52529);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__51953__auto____0;
cljs$core$async$reduce_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__51953__auto____1;
return cljs$core$async$reduce_$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto__))
})();
var state__52044__auto__ = (function (){var statearr_52548 = f__52043__auto__.call(null);
(statearr_52548[(6)] = c__52042__auto__);

return statearr_52548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto__))
);

return c__52042__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__52042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto__,f__$1){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto__,f__$1){
return (function (state_52566){
var state_val_52567 = (state_52566[(1)]);
if((state_val_52567 === (1))){
var inst_52561 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_52566__$1 = state_52566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52566__$1,(2),inst_52561);
} else {
if((state_val_52567 === (2))){
var inst_52563 = (state_52566[(2)]);
var inst_52564 = f__$1.call(null,inst_52563);
var state_52566__$1 = state_52566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52566__$1,inst_52564);
} else {
return null;
}
}
});})(c__52042__auto__,f__$1))
;
return ((function (switch__51952__auto__,c__52042__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__51953__auto__ = null;
var cljs$core$async$transduce_$_state_machine__51953__auto____0 = (function (){
var statearr_52568 = [null,null,null,null,null,null,null];
(statearr_52568[(0)] = cljs$core$async$transduce_$_state_machine__51953__auto__);

(statearr_52568[(1)] = (1));

return statearr_52568;
});
var cljs$core$async$transduce_$_state_machine__51953__auto____1 = (function (state_52566){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52569){if((e52569 instanceof Object)){
var ex__51956__auto__ = e52569;
var statearr_52570_52572 = state_52566;
(statearr_52570_52572[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52573 = state_52566;
state_52566 = G__52573;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__51953__auto__ = function(state_52566){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__51953__auto____1.call(this,state_52566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__51953__auto____0;
cljs$core$async$transduce_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__51953__auto____1;
return cljs$core$async$transduce_$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto__,f__$1))
})();
var state__52044__auto__ = (function (){var statearr_52571 = f__52043__auto__.call(null);
(statearr_52571[(6)] = c__52042__auto__);

return statearr_52571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto__,f__$1))
);

return c__52042__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__52575 = arguments.length;
switch (G__52575) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__52042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto__){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto__){
return (function (state_52600){
var state_val_52601 = (state_52600[(1)]);
if((state_val_52601 === (7))){
var inst_52582 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
var statearr_52602_52623 = state_52600__$1;
(statearr_52602_52623[(2)] = inst_52582);

(statearr_52602_52623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (1))){
var inst_52576 = cljs.core.seq.call(null,coll);
var inst_52577 = inst_52576;
var state_52600__$1 = (function (){var statearr_52603 = state_52600;
(statearr_52603[(7)] = inst_52577);

return statearr_52603;
})();
var statearr_52604_52624 = state_52600__$1;
(statearr_52604_52624[(2)] = null);

(statearr_52604_52624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (4))){
var inst_52577 = (state_52600[(7)]);
var inst_52580 = cljs.core.first.call(null,inst_52577);
var state_52600__$1 = state_52600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52600__$1,(7),ch,inst_52580);
} else {
if((state_val_52601 === (13))){
var inst_52594 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
var statearr_52605_52625 = state_52600__$1;
(statearr_52605_52625[(2)] = inst_52594);

(statearr_52605_52625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (6))){
var inst_52585 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
if(cljs.core.truth_(inst_52585)){
var statearr_52606_52626 = state_52600__$1;
(statearr_52606_52626[(1)] = (8));

} else {
var statearr_52607_52627 = state_52600__$1;
(statearr_52607_52627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (3))){
var inst_52598 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52600__$1,inst_52598);
} else {
if((state_val_52601 === (12))){
var state_52600__$1 = state_52600;
var statearr_52608_52628 = state_52600__$1;
(statearr_52608_52628[(2)] = null);

(statearr_52608_52628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (2))){
var inst_52577 = (state_52600[(7)]);
var state_52600__$1 = state_52600;
if(cljs.core.truth_(inst_52577)){
var statearr_52609_52629 = state_52600__$1;
(statearr_52609_52629[(1)] = (4));

} else {
var statearr_52610_52630 = state_52600__$1;
(statearr_52610_52630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (11))){
var inst_52591 = cljs.core.async.close_BANG_.call(null,ch);
var state_52600__$1 = state_52600;
var statearr_52611_52631 = state_52600__$1;
(statearr_52611_52631[(2)] = inst_52591);

(statearr_52611_52631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (9))){
var state_52600__$1 = state_52600;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52612_52632 = state_52600__$1;
(statearr_52612_52632[(1)] = (11));

} else {
var statearr_52613_52633 = state_52600__$1;
(statearr_52613_52633[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (5))){
var inst_52577 = (state_52600[(7)]);
var state_52600__$1 = state_52600;
var statearr_52614_52634 = state_52600__$1;
(statearr_52614_52634[(2)] = inst_52577);

(statearr_52614_52634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (10))){
var inst_52596 = (state_52600[(2)]);
var state_52600__$1 = state_52600;
var statearr_52615_52635 = state_52600__$1;
(statearr_52615_52635[(2)] = inst_52596);

(statearr_52615_52635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52601 === (8))){
var inst_52577 = (state_52600[(7)]);
var inst_52587 = cljs.core.next.call(null,inst_52577);
var inst_52577__$1 = inst_52587;
var state_52600__$1 = (function (){var statearr_52616 = state_52600;
(statearr_52616[(7)] = inst_52577__$1);

return statearr_52616;
})();
var statearr_52617_52636 = state_52600__$1;
(statearr_52617_52636[(2)] = null);

(statearr_52617_52636[(1)] = (2));


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
});})(c__52042__auto__))
;
return ((function (switch__51952__auto__,c__52042__auto__){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_52618 = [null,null,null,null,null,null,null,null];
(statearr_52618[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_52618[(1)] = (1));

return statearr_52618;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_52600){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52619){if((e52619 instanceof Object)){
var ex__51956__auto__ = e52619;
var statearr_52620_52637 = state_52600;
(statearr_52620_52637[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52638 = state_52600;
state_52600 = G__52638;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_52600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_52600);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto__))
})();
var state__52044__auto__ = (function (){var statearr_52621 = f__52043__auto__.call(null);
(statearr_52621[(6)] = c__52042__auto__);

return statearr_52621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto__))
);

return c__52042__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__42871__auto__ = (((_ == null))?null:_);
var m__42872__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,_);
} else {
var m__42872__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__42871__auto__ = (((m == null))?null:m);
var m__42872__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__42872__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__42871__auto__ = (((m == null))?null:m);
var m__42872__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,m,ch);
} else {
var m__42872__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__42871__auto__ = (((m == null))?null:m);
var m__42872__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,m);
} else {
var m__42872__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async52639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52639 = (function (ch,cs,meta52640){
this.ch = ch;
this.cs = cs;
this.meta52640 = meta52640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52641,meta52640__$1){
var self__ = this;
var _52641__$1 = this;
return (new cljs.core.async.t_cljs$core$async52639(self__.ch,self__.cs,meta52640__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52641){
var self__ = this;
var _52641__$1 = this;
return self__.meta52640;
});})(cs))
;

cljs.core.async.t_cljs$core$async52639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52639.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52639.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52639.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52639.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52639.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52640","meta52640",-780796076,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52639";

cljs.core.async.t_cljs$core$async52639.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async52639");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async52639 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52639(ch__$1,cs__$1,meta52640){
return (new cljs.core.async.t_cljs$core$async52639(ch__$1,cs__$1,meta52640));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52639(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__52042__auto___52861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___52861,cs,m,dchan,dctr,done){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___52861,cs,m,dchan,dctr,done){
return (function (state_52776){
var state_val_52777 = (state_52776[(1)]);
if((state_val_52777 === (7))){
var inst_52772 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52778_52862 = state_52776__$1;
(statearr_52778_52862[(2)] = inst_52772);

(statearr_52778_52862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (20))){
var inst_52675 = (state_52776[(7)]);
var inst_52687 = cljs.core.first.call(null,inst_52675);
var inst_52688 = cljs.core.nth.call(null,inst_52687,(0),null);
var inst_52689 = cljs.core.nth.call(null,inst_52687,(1),null);
var state_52776__$1 = (function (){var statearr_52779 = state_52776;
(statearr_52779[(8)] = inst_52688);

return statearr_52779;
})();
if(cljs.core.truth_(inst_52689)){
var statearr_52780_52863 = state_52776__$1;
(statearr_52780_52863[(1)] = (22));

} else {
var statearr_52781_52864 = state_52776__$1;
(statearr_52781_52864[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (27))){
var inst_52644 = (state_52776[(9)]);
var inst_52719 = (state_52776[(10)]);
var inst_52724 = (state_52776[(11)]);
var inst_52717 = (state_52776[(12)]);
var inst_52724__$1 = cljs.core._nth.call(null,inst_52717,inst_52719);
var inst_52725 = cljs.core.async.put_BANG_.call(null,inst_52724__$1,inst_52644,done);
var state_52776__$1 = (function (){var statearr_52782 = state_52776;
(statearr_52782[(11)] = inst_52724__$1);

return statearr_52782;
})();
if(cljs.core.truth_(inst_52725)){
var statearr_52783_52865 = state_52776__$1;
(statearr_52783_52865[(1)] = (30));

} else {
var statearr_52784_52866 = state_52776__$1;
(statearr_52784_52866[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (1))){
var state_52776__$1 = state_52776;
var statearr_52785_52867 = state_52776__$1;
(statearr_52785_52867[(2)] = null);

(statearr_52785_52867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (24))){
var inst_52675 = (state_52776[(7)]);
var inst_52694 = (state_52776[(2)]);
var inst_52695 = cljs.core.next.call(null,inst_52675);
var inst_52653 = inst_52695;
var inst_52654 = null;
var inst_52655 = (0);
var inst_52656 = (0);
var state_52776__$1 = (function (){var statearr_52786 = state_52776;
(statearr_52786[(13)] = inst_52653);

(statearr_52786[(14)] = inst_52654);

(statearr_52786[(15)] = inst_52694);

(statearr_52786[(16)] = inst_52656);

(statearr_52786[(17)] = inst_52655);

return statearr_52786;
})();
var statearr_52787_52868 = state_52776__$1;
(statearr_52787_52868[(2)] = null);

(statearr_52787_52868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (39))){
var state_52776__$1 = state_52776;
var statearr_52791_52869 = state_52776__$1;
(statearr_52791_52869[(2)] = null);

(statearr_52791_52869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (4))){
var inst_52644 = (state_52776[(9)]);
var inst_52644__$1 = (state_52776[(2)]);
var inst_52645 = (inst_52644__$1 == null);
var state_52776__$1 = (function (){var statearr_52792 = state_52776;
(statearr_52792[(9)] = inst_52644__$1);

return statearr_52792;
})();
if(cljs.core.truth_(inst_52645)){
var statearr_52793_52870 = state_52776__$1;
(statearr_52793_52870[(1)] = (5));

} else {
var statearr_52794_52871 = state_52776__$1;
(statearr_52794_52871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (15))){
var inst_52653 = (state_52776[(13)]);
var inst_52654 = (state_52776[(14)]);
var inst_52656 = (state_52776[(16)]);
var inst_52655 = (state_52776[(17)]);
var inst_52671 = (state_52776[(2)]);
var inst_52672 = (inst_52656 + (1));
var tmp52788 = inst_52653;
var tmp52789 = inst_52654;
var tmp52790 = inst_52655;
var inst_52653__$1 = tmp52788;
var inst_52654__$1 = tmp52789;
var inst_52655__$1 = tmp52790;
var inst_52656__$1 = inst_52672;
var state_52776__$1 = (function (){var statearr_52795 = state_52776;
(statearr_52795[(13)] = inst_52653__$1);

(statearr_52795[(14)] = inst_52654__$1);

(statearr_52795[(16)] = inst_52656__$1);

(statearr_52795[(18)] = inst_52671);

(statearr_52795[(17)] = inst_52655__$1);

return statearr_52795;
})();
var statearr_52796_52872 = state_52776__$1;
(statearr_52796_52872[(2)] = null);

(statearr_52796_52872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (21))){
var inst_52698 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52800_52873 = state_52776__$1;
(statearr_52800_52873[(2)] = inst_52698);

(statearr_52800_52873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (31))){
var inst_52724 = (state_52776[(11)]);
var inst_52728 = done.call(null,null);
var inst_52729 = cljs.core.async.untap_STAR_.call(null,m,inst_52724);
var state_52776__$1 = (function (){var statearr_52801 = state_52776;
(statearr_52801[(19)] = inst_52728);

return statearr_52801;
})();
var statearr_52802_52874 = state_52776__$1;
(statearr_52802_52874[(2)] = inst_52729);

(statearr_52802_52874[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (32))){
var inst_52718 = (state_52776[(20)]);
var inst_52716 = (state_52776[(21)]);
var inst_52719 = (state_52776[(10)]);
var inst_52717 = (state_52776[(12)]);
var inst_52731 = (state_52776[(2)]);
var inst_52732 = (inst_52719 + (1));
var tmp52797 = inst_52718;
var tmp52798 = inst_52716;
var tmp52799 = inst_52717;
var inst_52716__$1 = tmp52798;
var inst_52717__$1 = tmp52799;
var inst_52718__$1 = tmp52797;
var inst_52719__$1 = inst_52732;
var state_52776__$1 = (function (){var statearr_52803 = state_52776;
(statearr_52803[(22)] = inst_52731);

(statearr_52803[(20)] = inst_52718__$1);

(statearr_52803[(21)] = inst_52716__$1);

(statearr_52803[(10)] = inst_52719__$1);

(statearr_52803[(12)] = inst_52717__$1);

return statearr_52803;
})();
var statearr_52804_52875 = state_52776__$1;
(statearr_52804_52875[(2)] = null);

(statearr_52804_52875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (40))){
var inst_52744 = (state_52776[(23)]);
var inst_52748 = done.call(null,null);
var inst_52749 = cljs.core.async.untap_STAR_.call(null,m,inst_52744);
var state_52776__$1 = (function (){var statearr_52805 = state_52776;
(statearr_52805[(24)] = inst_52748);

return statearr_52805;
})();
var statearr_52806_52876 = state_52776__$1;
(statearr_52806_52876[(2)] = inst_52749);

(statearr_52806_52876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (33))){
var inst_52735 = (state_52776[(25)]);
var inst_52737 = cljs.core.chunked_seq_QMARK_.call(null,inst_52735);
var state_52776__$1 = state_52776;
if(inst_52737){
var statearr_52807_52877 = state_52776__$1;
(statearr_52807_52877[(1)] = (36));

} else {
var statearr_52808_52878 = state_52776__$1;
(statearr_52808_52878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (13))){
var inst_52665 = (state_52776[(26)]);
var inst_52668 = cljs.core.async.close_BANG_.call(null,inst_52665);
var state_52776__$1 = state_52776;
var statearr_52809_52879 = state_52776__$1;
(statearr_52809_52879[(2)] = inst_52668);

(statearr_52809_52879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (22))){
var inst_52688 = (state_52776[(8)]);
var inst_52691 = cljs.core.async.close_BANG_.call(null,inst_52688);
var state_52776__$1 = state_52776;
var statearr_52810_52880 = state_52776__$1;
(statearr_52810_52880[(2)] = inst_52691);

(statearr_52810_52880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (36))){
var inst_52735 = (state_52776[(25)]);
var inst_52739 = cljs.core.chunk_first.call(null,inst_52735);
var inst_52740 = cljs.core.chunk_rest.call(null,inst_52735);
var inst_52741 = cljs.core.count.call(null,inst_52739);
var inst_52716 = inst_52740;
var inst_52717 = inst_52739;
var inst_52718 = inst_52741;
var inst_52719 = (0);
var state_52776__$1 = (function (){var statearr_52811 = state_52776;
(statearr_52811[(20)] = inst_52718);

(statearr_52811[(21)] = inst_52716);

(statearr_52811[(10)] = inst_52719);

(statearr_52811[(12)] = inst_52717);

return statearr_52811;
})();
var statearr_52812_52881 = state_52776__$1;
(statearr_52812_52881[(2)] = null);

(statearr_52812_52881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (41))){
var inst_52735 = (state_52776[(25)]);
var inst_52751 = (state_52776[(2)]);
var inst_52752 = cljs.core.next.call(null,inst_52735);
var inst_52716 = inst_52752;
var inst_52717 = null;
var inst_52718 = (0);
var inst_52719 = (0);
var state_52776__$1 = (function (){var statearr_52813 = state_52776;
(statearr_52813[(20)] = inst_52718);

(statearr_52813[(27)] = inst_52751);

(statearr_52813[(21)] = inst_52716);

(statearr_52813[(10)] = inst_52719);

(statearr_52813[(12)] = inst_52717);

return statearr_52813;
})();
var statearr_52814_52882 = state_52776__$1;
(statearr_52814_52882[(2)] = null);

(statearr_52814_52882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (43))){
var state_52776__$1 = state_52776;
var statearr_52815_52883 = state_52776__$1;
(statearr_52815_52883[(2)] = null);

(statearr_52815_52883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (29))){
var inst_52760 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52816_52884 = state_52776__$1;
(statearr_52816_52884[(2)] = inst_52760);

(statearr_52816_52884[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (44))){
var inst_52769 = (state_52776[(2)]);
var state_52776__$1 = (function (){var statearr_52817 = state_52776;
(statearr_52817[(28)] = inst_52769);

return statearr_52817;
})();
var statearr_52818_52885 = state_52776__$1;
(statearr_52818_52885[(2)] = null);

(statearr_52818_52885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (6))){
var inst_52708 = (state_52776[(29)]);
var inst_52707 = cljs.core.deref.call(null,cs);
var inst_52708__$1 = cljs.core.keys.call(null,inst_52707);
var inst_52709 = cljs.core.count.call(null,inst_52708__$1);
var inst_52710 = cljs.core.reset_BANG_.call(null,dctr,inst_52709);
var inst_52715 = cljs.core.seq.call(null,inst_52708__$1);
var inst_52716 = inst_52715;
var inst_52717 = null;
var inst_52718 = (0);
var inst_52719 = (0);
var state_52776__$1 = (function (){var statearr_52819 = state_52776;
(statearr_52819[(20)] = inst_52718);

(statearr_52819[(21)] = inst_52716);

(statearr_52819[(10)] = inst_52719);

(statearr_52819[(12)] = inst_52717);

(statearr_52819[(29)] = inst_52708__$1);

(statearr_52819[(30)] = inst_52710);

return statearr_52819;
})();
var statearr_52820_52886 = state_52776__$1;
(statearr_52820_52886[(2)] = null);

(statearr_52820_52886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (28))){
var inst_52716 = (state_52776[(21)]);
var inst_52735 = (state_52776[(25)]);
var inst_52735__$1 = cljs.core.seq.call(null,inst_52716);
var state_52776__$1 = (function (){var statearr_52821 = state_52776;
(statearr_52821[(25)] = inst_52735__$1);

return statearr_52821;
})();
if(inst_52735__$1){
var statearr_52822_52887 = state_52776__$1;
(statearr_52822_52887[(1)] = (33));

} else {
var statearr_52823_52888 = state_52776__$1;
(statearr_52823_52888[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (25))){
var inst_52718 = (state_52776[(20)]);
var inst_52719 = (state_52776[(10)]);
var inst_52721 = (inst_52719 < inst_52718);
var inst_52722 = inst_52721;
var state_52776__$1 = state_52776;
if(cljs.core.truth_(inst_52722)){
var statearr_52824_52889 = state_52776__$1;
(statearr_52824_52889[(1)] = (27));

} else {
var statearr_52825_52890 = state_52776__$1;
(statearr_52825_52890[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (34))){
var state_52776__$1 = state_52776;
var statearr_52826_52891 = state_52776__$1;
(statearr_52826_52891[(2)] = null);

(statearr_52826_52891[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (17))){
var state_52776__$1 = state_52776;
var statearr_52827_52892 = state_52776__$1;
(statearr_52827_52892[(2)] = null);

(statearr_52827_52892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (3))){
var inst_52774 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52776__$1,inst_52774);
} else {
if((state_val_52777 === (12))){
var inst_52703 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52828_52893 = state_52776__$1;
(statearr_52828_52893[(2)] = inst_52703);

(statearr_52828_52893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (2))){
var state_52776__$1 = state_52776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52776__$1,(4),ch);
} else {
if((state_val_52777 === (23))){
var state_52776__$1 = state_52776;
var statearr_52829_52894 = state_52776__$1;
(statearr_52829_52894[(2)] = null);

(statearr_52829_52894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (35))){
var inst_52758 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52830_52895 = state_52776__$1;
(statearr_52830_52895[(2)] = inst_52758);

(statearr_52830_52895[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (19))){
var inst_52675 = (state_52776[(7)]);
var inst_52679 = cljs.core.chunk_first.call(null,inst_52675);
var inst_52680 = cljs.core.chunk_rest.call(null,inst_52675);
var inst_52681 = cljs.core.count.call(null,inst_52679);
var inst_52653 = inst_52680;
var inst_52654 = inst_52679;
var inst_52655 = inst_52681;
var inst_52656 = (0);
var state_52776__$1 = (function (){var statearr_52831 = state_52776;
(statearr_52831[(13)] = inst_52653);

(statearr_52831[(14)] = inst_52654);

(statearr_52831[(16)] = inst_52656);

(statearr_52831[(17)] = inst_52655);

return statearr_52831;
})();
var statearr_52832_52896 = state_52776__$1;
(statearr_52832_52896[(2)] = null);

(statearr_52832_52896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (11))){
var inst_52653 = (state_52776[(13)]);
var inst_52675 = (state_52776[(7)]);
var inst_52675__$1 = cljs.core.seq.call(null,inst_52653);
var state_52776__$1 = (function (){var statearr_52833 = state_52776;
(statearr_52833[(7)] = inst_52675__$1);

return statearr_52833;
})();
if(inst_52675__$1){
var statearr_52834_52897 = state_52776__$1;
(statearr_52834_52897[(1)] = (16));

} else {
var statearr_52835_52898 = state_52776__$1;
(statearr_52835_52898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (9))){
var inst_52705 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52836_52899 = state_52776__$1;
(statearr_52836_52899[(2)] = inst_52705);

(statearr_52836_52899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (5))){
var inst_52651 = cljs.core.deref.call(null,cs);
var inst_52652 = cljs.core.seq.call(null,inst_52651);
var inst_52653 = inst_52652;
var inst_52654 = null;
var inst_52655 = (0);
var inst_52656 = (0);
var state_52776__$1 = (function (){var statearr_52837 = state_52776;
(statearr_52837[(13)] = inst_52653);

(statearr_52837[(14)] = inst_52654);

(statearr_52837[(16)] = inst_52656);

(statearr_52837[(17)] = inst_52655);

return statearr_52837;
})();
var statearr_52838_52900 = state_52776__$1;
(statearr_52838_52900[(2)] = null);

(statearr_52838_52900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (14))){
var state_52776__$1 = state_52776;
var statearr_52839_52901 = state_52776__$1;
(statearr_52839_52901[(2)] = null);

(statearr_52839_52901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (45))){
var inst_52766 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52840_52902 = state_52776__$1;
(statearr_52840_52902[(2)] = inst_52766);

(statearr_52840_52902[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (26))){
var inst_52708 = (state_52776[(29)]);
var inst_52762 = (state_52776[(2)]);
var inst_52763 = cljs.core.seq.call(null,inst_52708);
var state_52776__$1 = (function (){var statearr_52841 = state_52776;
(statearr_52841[(31)] = inst_52762);

return statearr_52841;
})();
if(inst_52763){
var statearr_52842_52903 = state_52776__$1;
(statearr_52842_52903[(1)] = (42));

} else {
var statearr_52843_52904 = state_52776__$1;
(statearr_52843_52904[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (16))){
var inst_52675 = (state_52776[(7)]);
var inst_52677 = cljs.core.chunked_seq_QMARK_.call(null,inst_52675);
var state_52776__$1 = state_52776;
if(inst_52677){
var statearr_52844_52905 = state_52776__$1;
(statearr_52844_52905[(1)] = (19));

} else {
var statearr_52845_52906 = state_52776__$1;
(statearr_52845_52906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (38))){
var inst_52755 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52846_52907 = state_52776__$1;
(statearr_52846_52907[(2)] = inst_52755);

(statearr_52846_52907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (30))){
var state_52776__$1 = state_52776;
var statearr_52847_52908 = state_52776__$1;
(statearr_52847_52908[(2)] = null);

(statearr_52847_52908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (10))){
var inst_52654 = (state_52776[(14)]);
var inst_52656 = (state_52776[(16)]);
var inst_52664 = cljs.core._nth.call(null,inst_52654,inst_52656);
var inst_52665 = cljs.core.nth.call(null,inst_52664,(0),null);
var inst_52666 = cljs.core.nth.call(null,inst_52664,(1),null);
var state_52776__$1 = (function (){var statearr_52848 = state_52776;
(statearr_52848[(26)] = inst_52665);

return statearr_52848;
})();
if(cljs.core.truth_(inst_52666)){
var statearr_52849_52909 = state_52776__$1;
(statearr_52849_52909[(1)] = (13));

} else {
var statearr_52850_52910 = state_52776__$1;
(statearr_52850_52910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (18))){
var inst_52701 = (state_52776[(2)]);
var state_52776__$1 = state_52776;
var statearr_52851_52911 = state_52776__$1;
(statearr_52851_52911[(2)] = inst_52701);

(statearr_52851_52911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (42))){
var state_52776__$1 = state_52776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52776__$1,(45),dchan);
} else {
if((state_val_52777 === (37))){
var inst_52644 = (state_52776[(9)]);
var inst_52744 = (state_52776[(23)]);
var inst_52735 = (state_52776[(25)]);
var inst_52744__$1 = cljs.core.first.call(null,inst_52735);
var inst_52745 = cljs.core.async.put_BANG_.call(null,inst_52744__$1,inst_52644,done);
var state_52776__$1 = (function (){var statearr_52852 = state_52776;
(statearr_52852[(23)] = inst_52744__$1);

return statearr_52852;
})();
if(cljs.core.truth_(inst_52745)){
var statearr_52853_52912 = state_52776__$1;
(statearr_52853_52912[(1)] = (39));

} else {
var statearr_52854_52913 = state_52776__$1;
(statearr_52854_52913[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52777 === (8))){
var inst_52656 = (state_52776[(16)]);
var inst_52655 = (state_52776[(17)]);
var inst_52658 = (inst_52656 < inst_52655);
var inst_52659 = inst_52658;
var state_52776__$1 = state_52776;
if(cljs.core.truth_(inst_52659)){
var statearr_52855_52914 = state_52776__$1;
(statearr_52855_52914[(1)] = (10));

} else {
var statearr_52856_52915 = state_52776__$1;
(statearr_52856_52915[(1)] = (11));

}

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
});})(c__52042__auto___52861,cs,m,dchan,dctr,done))
;
return ((function (switch__51952__auto__,c__52042__auto___52861,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__51953__auto__ = null;
var cljs$core$async$mult_$_state_machine__51953__auto____0 = (function (){
var statearr_52857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52857[(0)] = cljs$core$async$mult_$_state_machine__51953__auto__);

(statearr_52857[(1)] = (1));

return statearr_52857;
});
var cljs$core$async$mult_$_state_machine__51953__auto____1 = (function (state_52776){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_52776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e52858){if((e52858 instanceof Object)){
var ex__51956__auto__ = e52858;
var statearr_52859_52916 = state_52776;
(statearr_52859_52916[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52917 = state_52776;
state_52776 = G__52917;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__51953__auto__ = function(state_52776){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__51953__auto____1.call(this,state_52776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__51953__auto____0;
cljs$core$async$mult_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__51953__auto____1;
return cljs$core$async$mult_$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___52861,cs,m,dchan,dctr,done))
})();
var state__52044__auto__ = (function (){var statearr_52860 = f__52043__auto__.call(null);
(statearr_52860[(6)] = c__52042__auto___52861);

return statearr_52860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___52861,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52919 = arguments.length;
switch (G__52919) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__42871__auto__ = (((m == null))?null:m);
var m__42872__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,m,ch);
} else {
var m__42872__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__42871__auto__ = (((m == null))?null:m);
var m__42872__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,m,ch);
} else {
var m__42872__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__42871__auto__ = (((m == null))?null:m);
var m__42872__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,m);
} else {
var m__42872__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__42871__auto__ = (((m == null))?null:m);
var m__42872__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,m,state_map);
} else {
var m__42872__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__42871__auto__ = (((m == null))?null:m);
var m__42872__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,m,mode);
} else {
var m__42872__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__44034__auto__ = [];
var len__44016__auto___52931 = arguments.length;
var i__44017__auto___52932 = (0);
while(true){
if((i__44017__auto___52932 < len__44016__auto___52931)){
args__44034__auto__.push((arguments[i__44017__auto___52932]));

var G__52933 = (i__44017__auto___52932 + (1));
i__44017__auto___52932 = G__52933;
continue;
} else {
}
break;
}

var argseq__44035__auto__ = ((((3) < args__44034__auto__.length))?(new cljs.core.IndexedSeq(args__44034__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44035__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52925){
var map__52926 = p__52925;
var map__52926__$1 = ((((!((map__52926 == null)))?((((map__52926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52926):map__52926);
var opts = map__52926__$1;
var statearr_52928_52934 = state;
(statearr_52928_52934[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__52926,map__52926__$1,opts){
return (function (val){
var statearr_52929_52935 = state;
(statearr_52929_52935[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__52926,map__52926__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_52930_52936 = state;
(statearr_52930_52936[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52921){
var G__52922 = cljs.core.first.call(null,seq52921);
var seq52921__$1 = cljs.core.next.call(null,seq52921);
var G__52923 = cljs.core.first.call(null,seq52921__$1);
var seq52921__$2 = cljs.core.next.call(null,seq52921__$1);
var G__52924 = cljs.core.first.call(null,seq52921__$2);
var seq52921__$3 = cljs.core.next.call(null,seq52921__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__52922,G__52923,G__52924,seq52921__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async52937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52937 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta52938){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta52938 = meta52938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52939,meta52938__$1){
var self__ = this;
var _52939__$1 = this;
return (new cljs.core.async.t_cljs$core$async52937(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta52938__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52939){
var self__ = this;
var _52939__$1 = this;
return self__.meta52938;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta52938","meta52938",1886044165,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52937";

cljs.core.async.t_cljs$core$async52937.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async52937");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async52937 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52937(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta52938){
return (new cljs.core.async.t_cljs$core$async52937(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta52938));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52937(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52042__auto___53101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53041){
var state_val_53042 = (state_53041[(1)]);
if((state_val_53042 === (7))){
var inst_52956 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
var statearr_53043_53102 = state_53041__$1;
(statearr_53043_53102[(2)] = inst_52956);

(statearr_53043_53102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (20))){
var inst_52968 = (state_53041[(7)]);
var state_53041__$1 = state_53041;
var statearr_53044_53103 = state_53041__$1;
(statearr_53044_53103[(2)] = inst_52968);

(statearr_53044_53103[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (27))){
var state_53041__$1 = state_53041;
var statearr_53045_53104 = state_53041__$1;
(statearr_53045_53104[(2)] = null);

(statearr_53045_53104[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (1))){
var inst_52943 = (state_53041[(8)]);
var inst_52943__$1 = calc_state.call(null);
var inst_52945 = (inst_52943__$1 == null);
var inst_52946 = cljs.core.not.call(null,inst_52945);
var state_53041__$1 = (function (){var statearr_53046 = state_53041;
(statearr_53046[(8)] = inst_52943__$1);

return statearr_53046;
})();
if(inst_52946){
var statearr_53047_53105 = state_53041__$1;
(statearr_53047_53105[(1)] = (2));

} else {
var statearr_53048_53106 = state_53041__$1;
(statearr_53048_53106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (24))){
var inst_53015 = (state_53041[(9)]);
var inst_52992 = (state_53041[(10)]);
var inst_53001 = (state_53041[(11)]);
var inst_53015__$1 = inst_52992.call(null,inst_53001);
var state_53041__$1 = (function (){var statearr_53049 = state_53041;
(statearr_53049[(9)] = inst_53015__$1);

return statearr_53049;
})();
if(cljs.core.truth_(inst_53015__$1)){
var statearr_53050_53107 = state_53041__$1;
(statearr_53050_53107[(1)] = (29));

} else {
var statearr_53051_53108 = state_53041__$1;
(statearr_53051_53108[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (4))){
var inst_52959 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
if(cljs.core.truth_(inst_52959)){
var statearr_53052_53109 = state_53041__$1;
(statearr_53052_53109[(1)] = (8));

} else {
var statearr_53053_53110 = state_53041__$1;
(statearr_53053_53110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (15))){
var inst_52986 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
if(cljs.core.truth_(inst_52986)){
var statearr_53054_53111 = state_53041__$1;
(statearr_53054_53111[(1)] = (19));

} else {
var statearr_53055_53112 = state_53041__$1;
(statearr_53055_53112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (21))){
var inst_52991 = (state_53041[(12)]);
var inst_52991__$1 = (state_53041[(2)]);
var inst_52992 = cljs.core.get.call(null,inst_52991__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52993 = cljs.core.get.call(null,inst_52991__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52994 = cljs.core.get.call(null,inst_52991__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_53041__$1 = (function (){var statearr_53056 = state_53041;
(statearr_53056[(13)] = inst_52993);

(statearr_53056[(12)] = inst_52991__$1);

(statearr_53056[(10)] = inst_52992);

return statearr_53056;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53041__$1,(22),inst_52994);
} else {
if((state_val_53042 === (31))){
var inst_53023 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
if(cljs.core.truth_(inst_53023)){
var statearr_53057_53113 = state_53041__$1;
(statearr_53057_53113[(1)] = (32));

} else {
var statearr_53058_53114 = state_53041__$1;
(statearr_53058_53114[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (32))){
var inst_53000 = (state_53041[(14)]);
var state_53041__$1 = state_53041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53041__$1,(35),out,inst_53000);
} else {
if((state_val_53042 === (33))){
var inst_52991 = (state_53041[(12)]);
var inst_52968 = inst_52991;
var state_53041__$1 = (function (){var statearr_53059 = state_53041;
(statearr_53059[(7)] = inst_52968);

return statearr_53059;
})();
var statearr_53060_53115 = state_53041__$1;
(statearr_53060_53115[(2)] = null);

(statearr_53060_53115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (13))){
var inst_52968 = (state_53041[(7)]);
var inst_52975 = inst_52968.cljs$lang$protocol_mask$partition0$;
var inst_52976 = (inst_52975 & (64));
var inst_52977 = inst_52968.cljs$core$ISeq$;
var inst_52978 = (cljs.core.PROTOCOL_SENTINEL === inst_52977);
var inst_52979 = (inst_52976) || (inst_52978);
var state_53041__$1 = state_53041;
if(cljs.core.truth_(inst_52979)){
var statearr_53061_53116 = state_53041__$1;
(statearr_53061_53116[(1)] = (16));

} else {
var statearr_53062_53117 = state_53041__$1;
(statearr_53062_53117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (22))){
var inst_53000 = (state_53041[(14)]);
var inst_53001 = (state_53041[(11)]);
var inst_52999 = (state_53041[(2)]);
var inst_53000__$1 = cljs.core.nth.call(null,inst_52999,(0),null);
var inst_53001__$1 = cljs.core.nth.call(null,inst_52999,(1),null);
var inst_53002 = (inst_53000__$1 == null);
var inst_53003 = cljs.core._EQ_.call(null,inst_53001__$1,change);
var inst_53004 = (inst_53002) || (inst_53003);
var state_53041__$1 = (function (){var statearr_53063 = state_53041;
(statearr_53063[(14)] = inst_53000__$1);

(statearr_53063[(11)] = inst_53001__$1);

return statearr_53063;
})();
if(cljs.core.truth_(inst_53004)){
var statearr_53064_53118 = state_53041__$1;
(statearr_53064_53118[(1)] = (23));

} else {
var statearr_53065_53119 = state_53041__$1;
(statearr_53065_53119[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (36))){
var inst_52991 = (state_53041[(12)]);
var inst_52968 = inst_52991;
var state_53041__$1 = (function (){var statearr_53066 = state_53041;
(statearr_53066[(7)] = inst_52968);

return statearr_53066;
})();
var statearr_53067_53120 = state_53041__$1;
(statearr_53067_53120[(2)] = null);

(statearr_53067_53120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (29))){
var inst_53015 = (state_53041[(9)]);
var state_53041__$1 = state_53041;
var statearr_53068_53121 = state_53041__$1;
(statearr_53068_53121[(2)] = inst_53015);

(statearr_53068_53121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (6))){
var state_53041__$1 = state_53041;
var statearr_53069_53122 = state_53041__$1;
(statearr_53069_53122[(2)] = false);

(statearr_53069_53122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (28))){
var inst_53011 = (state_53041[(2)]);
var inst_53012 = calc_state.call(null);
var inst_52968 = inst_53012;
var state_53041__$1 = (function (){var statearr_53070 = state_53041;
(statearr_53070[(15)] = inst_53011);

(statearr_53070[(7)] = inst_52968);

return statearr_53070;
})();
var statearr_53071_53123 = state_53041__$1;
(statearr_53071_53123[(2)] = null);

(statearr_53071_53123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (25))){
var inst_53037 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
var statearr_53072_53124 = state_53041__$1;
(statearr_53072_53124[(2)] = inst_53037);

(statearr_53072_53124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (34))){
var inst_53035 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
var statearr_53073_53125 = state_53041__$1;
(statearr_53073_53125[(2)] = inst_53035);

(statearr_53073_53125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (17))){
var state_53041__$1 = state_53041;
var statearr_53074_53126 = state_53041__$1;
(statearr_53074_53126[(2)] = false);

(statearr_53074_53126[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (3))){
var state_53041__$1 = state_53041;
var statearr_53075_53127 = state_53041__$1;
(statearr_53075_53127[(2)] = false);

(statearr_53075_53127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (12))){
var inst_53039 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53041__$1,inst_53039);
} else {
if((state_val_53042 === (2))){
var inst_52943 = (state_53041[(8)]);
var inst_52948 = inst_52943.cljs$lang$protocol_mask$partition0$;
var inst_52949 = (inst_52948 & (64));
var inst_52950 = inst_52943.cljs$core$ISeq$;
var inst_52951 = (cljs.core.PROTOCOL_SENTINEL === inst_52950);
var inst_52952 = (inst_52949) || (inst_52951);
var state_53041__$1 = state_53041;
if(cljs.core.truth_(inst_52952)){
var statearr_53076_53128 = state_53041__$1;
(statearr_53076_53128[(1)] = (5));

} else {
var statearr_53077_53129 = state_53041__$1;
(statearr_53077_53129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (23))){
var inst_53000 = (state_53041[(14)]);
var inst_53006 = (inst_53000 == null);
var state_53041__$1 = state_53041;
if(cljs.core.truth_(inst_53006)){
var statearr_53078_53130 = state_53041__$1;
(statearr_53078_53130[(1)] = (26));

} else {
var statearr_53079_53131 = state_53041__$1;
(statearr_53079_53131[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (35))){
var inst_53026 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
if(cljs.core.truth_(inst_53026)){
var statearr_53080_53132 = state_53041__$1;
(statearr_53080_53132[(1)] = (36));

} else {
var statearr_53081_53133 = state_53041__$1;
(statearr_53081_53133[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (19))){
var inst_52968 = (state_53041[(7)]);
var inst_52988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52968);
var state_53041__$1 = state_53041;
var statearr_53082_53134 = state_53041__$1;
(statearr_53082_53134[(2)] = inst_52988);

(statearr_53082_53134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (11))){
var inst_52968 = (state_53041[(7)]);
var inst_52972 = (inst_52968 == null);
var inst_52973 = cljs.core.not.call(null,inst_52972);
var state_53041__$1 = state_53041;
if(inst_52973){
var statearr_53083_53135 = state_53041__$1;
(statearr_53083_53135[(1)] = (13));

} else {
var statearr_53084_53136 = state_53041__$1;
(statearr_53084_53136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (9))){
var inst_52943 = (state_53041[(8)]);
var state_53041__$1 = state_53041;
var statearr_53085_53137 = state_53041__$1;
(statearr_53085_53137[(2)] = inst_52943);

(statearr_53085_53137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (5))){
var state_53041__$1 = state_53041;
var statearr_53086_53138 = state_53041__$1;
(statearr_53086_53138[(2)] = true);

(statearr_53086_53138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (14))){
var state_53041__$1 = state_53041;
var statearr_53087_53139 = state_53041__$1;
(statearr_53087_53139[(2)] = false);

(statearr_53087_53139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (26))){
var inst_53001 = (state_53041[(11)]);
var inst_53008 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53001);
var state_53041__$1 = state_53041;
var statearr_53088_53140 = state_53041__$1;
(statearr_53088_53140[(2)] = inst_53008);

(statearr_53088_53140[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (16))){
var state_53041__$1 = state_53041;
var statearr_53089_53141 = state_53041__$1;
(statearr_53089_53141[(2)] = true);

(statearr_53089_53141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (38))){
var inst_53031 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
var statearr_53090_53142 = state_53041__$1;
(statearr_53090_53142[(2)] = inst_53031);

(statearr_53090_53142[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (30))){
var inst_52993 = (state_53041[(13)]);
var inst_52992 = (state_53041[(10)]);
var inst_53001 = (state_53041[(11)]);
var inst_53018 = cljs.core.empty_QMARK_.call(null,inst_52992);
var inst_53019 = inst_52993.call(null,inst_53001);
var inst_53020 = cljs.core.not.call(null,inst_53019);
var inst_53021 = (inst_53018) && (inst_53020);
var state_53041__$1 = state_53041;
var statearr_53091_53143 = state_53041__$1;
(statearr_53091_53143[(2)] = inst_53021);

(statearr_53091_53143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (10))){
var inst_52943 = (state_53041[(8)]);
var inst_52964 = (state_53041[(2)]);
var inst_52965 = cljs.core.get.call(null,inst_52964,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52966 = cljs.core.get.call(null,inst_52964,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52967 = cljs.core.get.call(null,inst_52964,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52968 = inst_52943;
var state_53041__$1 = (function (){var statearr_53092 = state_53041;
(statearr_53092[(16)] = inst_52965);

(statearr_53092[(7)] = inst_52968);

(statearr_53092[(17)] = inst_52966);

(statearr_53092[(18)] = inst_52967);

return statearr_53092;
})();
var statearr_53093_53144 = state_53041__$1;
(statearr_53093_53144[(2)] = null);

(statearr_53093_53144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (18))){
var inst_52983 = (state_53041[(2)]);
var state_53041__$1 = state_53041;
var statearr_53094_53145 = state_53041__$1;
(statearr_53094_53145[(2)] = inst_52983);

(statearr_53094_53145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (37))){
var state_53041__$1 = state_53041;
var statearr_53095_53146 = state_53041__$1;
(statearr_53095_53146[(2)] = null);

(statearr_53095_53146[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53042 === (8))){
var inst_52943 = (state_53041[(8)]);
var inst_52961 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52943);
var state_53041__$1 = state_53041;
var statearr_53096_53147 = state_53041__$1;
(statearr_53096_53147[(2)] = inst_52961);

(statearr_53096_53147[(1)] = (10));


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
});})(c__52042__auto___53101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__51952__auto__,c__52042__auto___53101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__51953__auto__ = null;
var cljs$core$async$mix_$_state_machine__51953__auto____0 = (function (){
var statearr_53097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53097[(0)] = cljs$core$async$mix_$_state_machine__51953__auto__);

(statearr_53097[(1)] = (1));

return statearr_53097;
});
var cljs$core$async$mix_$_state_machine__51953__auto____1 = (function (state_53041){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53098){if((e53098 instanceof Object)){
var ex__51956__auto__ = e53098;
var statearr_53099_53148 = state_53041;
(statearr_53099_53148[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53149 = state_53041;
state_53041 = G__53149;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__51953__auto__ = function(state_53041){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__51953__auto____1.call(this,state_53041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__51953__auto____0;
cljs$core$async$mix_$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__51953__auto____1;
return cljs$core$async$mix_$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__52044__auto__ = (function (){var statearr_53100 = f__52043__auto__.call(null);
(statearr_53100[(6)] = c__52042__auto___53101);

return statearr_53100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53101,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__42871__auto__ = (((p == null))?null:p);
var m__42872__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__42872__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__42871__auto__ = (((p == null))?null:p);
var m__42872__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,p,v,ch);
} else {
var m__42872__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__53151 = arguments.length;
switch (G__53151) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__42871__auto__ = (((p == null))?null:p);
var m__42872__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,p);
} else {
var m__42872__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__42871__auto__ = (((p == null))?null:p);
var m__42872__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42871__auto__)]);
if(!((m__42872__auto__ == null))){
return m__42872__auto__.call(null,p,v);
} else {
var m__42872__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42872__auto____$1 == null))){
return m__42872__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__53155 = arguments.length;
switch (G__53155) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41331__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41331__auto__)){
return or__41331__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41331__auto__,mults){
return (function (p1__53153_SHARP_){
if(cljs.core.truth_(p1__53153_SHARP_.call(null,topic))){
return p1__53153_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__53153_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41331__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async53156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53156 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53157){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53157 = meta53157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53158,meta53157__$1){
var self__ = this;
var _53158__$1 = this;
return (new cljs.core.async.t_cljs$core$async53156(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53157__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53158){
var self__ = this;
var _53158__$1 = this;
return self__.meta53157;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53156.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53156.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53157","meta53157",-59546667,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53156";

cljs.core.async.t_cljs$core$async53156.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async53156");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async53156 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53156(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53157){
return (new cljs.core.async.t_cljs$core$async53156(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53157));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53156(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__52042__auto___53276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53276,mults,ensure_mult,p){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53276,mults,ensure_mult,p){
return (function (state_53230){
var state_val_53231 = (state_53230[(1)]);
if((state_val_53231 === (7))){
var inst_53226 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53232_53277 = state_53230__$1;
(statearr_53232_53277[(2)] = inst_53226);

(statearr_53232_53277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (20))){
var state_53230__$1 = state_53230;
var statearr_53233_53278 = state_53230__$1;
(statearr_53233_53278[(2)] = null);

(statearr_53233_53278[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (1))){
var state_53230__$1 = state_53230;
var statearr_53234_53279 = state_53230__$1;
(statearr_53234_53279[(2)] = null);

(statearr_53234_53279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (24))){
var inst_53209 = (state_53230[(7)]);
var inst_53218 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53209);
var state_53230__$1 = state_53230;
var statearr_53235_53280 = state_53230__$1;
(statearr_53235_53280[(2)] = inst_53218);

(statearr_53235_53280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (4))){
var inst_53161 = (state_53230[(8)]);
var inst_53161__$1 = (state_53230[(2)]);
var inst_53162 = (inst_53161__$1 == null);
var state_53230__$1 = (function (){var statearr_53236 = state_53230;
(statearr_53236[(8)] = inst_53161__$1);

return statearr_53236;
})();
if(cljs.core.truth_(inst_53162)){
var statearr_53237_53281 = state_53230__$1;
(statearr_53237_53281[(1)] = (5));

} else {
var statearr_53238_53282 = state_53230__$1;
(statearr_53238_53282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (15))){
var inst_53203 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53239_53283 = state_53230__$1;
(statearr_53239_53283[(2)] = inst_53203);

(statearr_53239_53283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (21))){
var inst_53223 = (state_53230[(2)]);
var state_53230__$1 = (function (){var statearr_53240 = state_53230;
(statearr_53240[(9)] = inst_53223);

return statearr_53240;
})();
var statearr_53241_53284 = state_53230__$1;
(statearr_53241_53284[(2)] = null);

(statearr_53241_53284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (13))){
var inst_53185 = (state_53230[(10)]);
var inst_53187 = cljs.core.chunked_seq_QMARK_.call(null,inst_53185);
var state_53230__$1 = state_53230;
if(inst_53187){
var statearr_53242_53285 = state_53230__$1;
(statearr_53242_53285[(1)] = (16));

} else {
var statearr_53243_53286 = state_53230__$1;
(statearr_53243_53286[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (22))){
var inst_53215 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
if(cljs.core.truth_(inst_53215)){
var statearr_53244_53287 = state_53230__$1;
(statearr_53244_53287[(1)] = (23));

} else {
var statearr_53245_53288 = state_53230__$1;
(statearr_53245_53288[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (6))){
var inst_53161 = (state_53230[(8)]);
var inst_53211 = (state_53230[(11)]);
var inst_53209 = (state_53230[(7)]);
var inst_53209__$1 = topic_fn.call(null,inst_53161);
var inst_53210 = cljs.core.deref.call(null,mults);
var inst_53211__$1 = cljs.core.get.call(null,inst_53210,inst_53209__$1);
var state_53230__$1 = (function (){var statearr_53246 = state_53230;
(statearr_53246[(11)] = inst_53211__$1);

(statearr_53246[(7)] = inst_53209__$1);

return statearr_53246;
})();
if(cljs.core.truth_(inst_53211__$1)){
var statearr_53247_53289 = state_53230__$1;
(statearr_53247_53289[(1)] = (19));

} else {
var statearr_53248_53290 = state_53230__$1;
(statearr_53248_53290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (25))){
var inst_53220 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53249_53291 = state_53230__$1;
(statearr_53249_53291[(2)] = inst_53220);

(statearr_53249_53291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (17))){
var inst_53185 = (state_53230[(10)]);
var inst_53194 = cljs.core.first.call(null,inst_53185);
var inst_53195 = cljs.core.async.muxch_STAR_.call(null,inst_53194);
var inst_53196 = cljs.core.async.close_BANG_.call(null,inst_53195);
var inst_53197 = cljs.core.next.call(null,inst_53185);
var inst_53171 = inst_53197;
var inst_53172 = null;
var inst_53173 = (0);
var inst_53174 = (0);
var state_53230__$1 = (function (){var statearr_53250 = state_53230;
(statearr_53250[(12)] = inst_53196);

(statearr_53250[(13)] = inst_53171);

(statearr_53250[(14)] = inst_53172);

(statearr_53250[(15)] = inst_53173);

(statearr_53250[(16)] = inst_53174);

return statearr_53250;
})();
var statearr_53251_53292 = state_53230__$1;
(statearr_53251_53292[(2)] = null);

(statearr_53251_53292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (3))){
var inst_53228 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53230__$1,inst_53228);
} else {
if((state_val_53231 === (12))){
var inst_53205 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53252_53293 = state_53230__$1;
(statearr_53252_53293[(2)] = inst_53205);

(statearr_53252_53293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (2))){
var state_53230__$1 = state_53230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53230__$1,(4),ch);
} else {
if((state_val_53231 === (23))){
var state_53230__$1 = state_53230;
var statearr_53253_53294 = state_53230__$1;
(statearr_53253_53294[(2)] = null);

(statearr_53253_53294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (19))){
var inst_53161 = (state_53230[(8)]);
var inst_53211 = (state_53230[(11)]);
var inst_53213 = cljs.core.async.muxch_STAR_.call(null,inst_53211);
var state_53230__$1 = state_53230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53230__$1,(22),inst_53213,inst_53161);
} else {
if((state_val_53231 === (11))){
var inst_53185 = (state_53230[(10)]);
var inst_53171 = (state_53230[(13)]);
var inst_53185__$1 = cljs.core.seq.call(null,inst_53171);
var state_53230__$1 = (function (){var statearr_53254 = state_53230;
(statearr_53254[(10)] = inst_53185__$1);

return statearr_53254;
})();
if(inst_53185__$1){
var statearr_53255_53295 = state_53230__$1;
(statearr_53255_53295[(1)] = (13));

} else {
var statearr_53256_53296 = state_53230__$1;
(statearr_53256_53296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (9))){
var inst_53207 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53257_53297 = state_53230__$1;
(statearr_53257_53297[(2)] = inst_53207);

(statearr_53257_53297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (5))){
var inst_53168 = cljs.core.deref.call(null,mults);
var inst_53169 = cljs.core.vals.call(null,inst_53168);
var inst_53170 = cljs.core.seq.call(null,inst_53169);
var inst_53171 = inst_53170;
var inst_53172 = null;
var inst_53173 = (0);
var inst_53174 = (0);
var state_53230__$1 = (function (){var statearr_53258 = state_53230;
(statearr_53258[(13)] = inst_53171);

(statearr_53258[(14)] = inst_53172);

(statearr_53258[(15)] = inst_53173);

(statearr_53258[(16)] = inst_53174);

return statearr_53258;
})();
var statearr_53259_53298 = state_53230__$1;
(statearr_53259_53298[(2)] = null);

(statearr_53259_53298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (14))){
var state_53230__$1 = state_53230;
var statearr_53263_53299 = state_53230__$1;
(statearr_53263_53299[(2)] = null);

(statearr_53263_53299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (16))){
var inst_53185 = (state_53230[(10)]);
var inst_53189 = cljs.core.chunk_first.call(null,inst_53185);
var inst_53190 = cljs.core.chunk_rest.call(null,inst_53185);
var inst_53191 = cljs.core.count.call(null,inst_53189);
var inst_53171 = inst_53190;
var inst_53172 = inst_53189;
var inst_53173 = inst_53191;
var inst_53174 = (0);
var state_53230__$1 = (function (){var statearr_53264 = state_53230;
(statearr_53264[(13)] = inst_53171);

(statearr_53264[(14)] = inst_53172);

(statearr_53264[(15)] = inst_53173);

(statearr_53264[(16)] = inst_53174);

return statearr_53264;
})();
var statearr_53265_53300 = state_53230__$1;
(statearr_53265_53300[(2)] = null);

(statearr_53265_53300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (10))){
var inst_53171 = (state_53230[(13)]);
var inst_53172 = (state_53230[(14)]);
var inst_53173 = (state_53230[(15)]);
var inst_53174 = (state_53230[(16)]);
var inst_53179 = cljs.core._nth.call(null,inst_53172,inst_53174);
var inst_53180 = cljs.core.async.muxch_STAR_.call(null,inst_53179);
var inst_53181 = cljs.core.async.close_BANG_.call(null,inst_53180);
var inst_53182 = (inst_53174 + (1));
var tmp53260 = inst_53171;
var tmp53261 = inst_53172;
var tmp53262 = inst_53173;
var inst_53171__$1 = tmp53260;
var inst_53172__$1 = tmp53261;
var inst_53173__$1 = tmp53262;
var inst_53174__$1 = inst_53182;
var state_53230__$1 = (function (){var statearr_53266 = state_53230;
(statearr_53266[(17)] = inst_53181);

(statearr_53266[(13)] = inst_53171__$1);

(statearr_53266[(14)] = inst_53172__$1);

(statearr_53266[(15)] = inst_53173__$1);

(statearr_53266[(16)] = inst_53174__$1);

return statearr_53266;
})();
var statearr_53267_53301 = state_53230__$1;
(statearr_53267_53301[(2)] = null);

(statearr_53267_53301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (18))){
var inst_53200 = (state_53230[(2)]);
var state_53230__$1 = state_53230;
var statearr_53268_53302 = state_53230__$1;
(statearr_53268_53302[(2)] = inst_53200);

(statearr_53268_53302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53231 === (8))){
var inst_53173 = (state_53230[(15)]);
var inst_53174 = (state_53230[(16)]);
var inst_53176 = (inst_53174 < inst_53173);
var inst_53177 = inst_53176;
var state_53230__$1 = state_53230;
if(cljs.core.truth_(inst_53177)){
var statearr_53269_53303 = state_53230__$1;
(statearr_53269_53303[(1)] = (10));

} else {
var statearr_53270_53304 = state_53230__$1;
(statearr_53270_53304[(1)] = (11));

}

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
});})(c__52042__auto___53276,mults,ensure_mult,p))
;
return ((function (switch__51952__auto__,c__52042__auto___53276,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_53271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53271[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_53271[(1)] = (1));

return statearr_53271;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_53230){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53272){if((e53272 instanceof Object)){
var ex__51956__auto__ = e53272;
var statearr_53273_53305 = state_53230;
(statearr_53273_53305[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53306 = state_53230;
state_53230 = G__53306;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_53230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_53230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53276,mults,ensure_mult,p))
})();
var state__52044__auto__ = (function (){var statearr_53274 = f__52043__auto__.call(null);
(statearr_53274[(6)] = c__52042__auto___53276);

return statearr_53274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53276,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__53308 = arguments.length;
switch (G__53308) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__53311 = arguments.length;
switch (G__53311) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__53314 = arguments.length;
switch (G__53314) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__52042__auto___53381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53353){
var state_val_53354 = (state_53353[(1)]);
if((state_val_53354 === (7))){
var state_53353__$1 = state_53353;
var statearr_53355_53382 = state_53353__$1;
(statearr_53355_53382[(2)] = null);

(statearr_53355_53382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (1))){
var state_53353__$1 = state_53353;
var statearr_53356_53383 = state_53353__$1;
(statearr_53356_53383[(2)] = null);

(statearr_53356_53383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (4))){
var inst_53317 = (state_53353[(7)]);
var inst_53319 = (inst_53317 < cnt);
var state_53353__$1 = state_53353;
if(cljs.core.truth_(inst_53319)){
var statearr_53357_53384 = state_53353__$1;
(statearr_53357_53384[(1)] = (6));

} else {
var statearr_53358_53385 = state_53353__$1;
(statearr_53358_53385[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (15))){
var inst_53349 = (state_53353[(2)]);
var state_53353__$1 = state_53353;
var statearr_53359_53386 = state_53353__$1;
(statearr_53359_53386[(2)] = inst_53349);

(statearr_53359_53386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (13))){
var inst_53342 = cljs.core.async.close_BANG_.call(null,out);
var state_53353__$1 = state_53353;
var statearr_53360_53387 = state_53353__$1;
(statearr_53360_53387[(2)] = inst_53342);

(statearr_53360_53387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (6))){
var state_53353__$1 = state_53353;
var statearr_53361_53388 = state_53353__$1;
(statearr_53361_53388[(2)] = null);

(statearr_53361_53388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (3))){
var inst_53351 = (state_53353[(2)]);
var state_53353__$1 = state_53353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53353__$1,inst_53351);
} else {
if((state_val_53354 === (12))){
var inst_53339 = (state_53353[(8)]);
var inst_53339__$1 = (state_53353[(2)]);
var inst_53340 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53339__$1);
var state_53353__$1 = (function (){var statearr_53362 = state_53353;
(statearr_53362[(8)] = inst_53339__$1);

return statearr_53362;
})();
if(cljs.core.truth_(inst_53340)){
var statearr_53363_53389 = state_53353__$1;
(statearr_53363_53389[(1)] = (13));

} else {
var statearr_53364_53390 = state_53353__$1;
(statearr_53364_53390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (2))){
var inst_53316 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_53317 = (0);
var state_53353__$1 = (function (){var statearr_53365 = state_53353;
(statearr_53365[(9)] = inst_53316);

(statearr_53365[(7)] = inst_53317);

return statearr_53365;
})();
var statearr_53366_53391 = state_53353__$1;
(statearr_53366_53391[(2)] = null);

(statearr_53366_53391[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (11))){
var inst_53317 = (state_53353[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53353,(10),Object,null,(9));
var inst_53326 = chs__$1.call(null,inst_53317);
var inst_53327 = done.call(null,inst_53317);
var inst_53328 = cljs.core.async.take_BANG_.call(null,inst_53326,inst_53327);
var state_53353__$1 = state_53353;
var statearr_53367_53392 = state_53353__$1;
(statearr_53367_53392[(2)] = inst_53328);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (9))){
var inst_53317 = (state_53353[(7)]);
var inst_53330 = (state_53353[(2)]);
var inst_53331 = (inst_53317 + (1));
var inst_53317__$1 = inst_53331;
var state_53353__$1 = (function (){var statearr_53368 = state_53353;
(statearr_53368[(7)] = inst_53317__$1);

(statearr_53368[(10)] = inst_53330);

return statearr_53368;
})();
var statearr_53369_53393 = state_53353__$1;
(statearr_53369_53393[(2)] = null);

(statearr_53369_53393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (5))){
var inst_53337 = (state_53353[(2)]);
var state_53353__$1 = (function (){var statearr_53370 = state_53353;
(statearr_53370[(11)] = inst_53337);

return statearr_53370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53353__$1,(12),dchan);
} else {
if((state_val_53354 === (14))){
var inst_53339 = (state_53353[(8)]);
var inst_53344 = cljs.core.apply.call(null,f,inst_53339);
var state_53353__$1 = state_53353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53353__$1,(16),out,inst_53344);
} else {
if((state_val_53354 === (16))){
var inst_53346 = (state_53353[(2)]);
var state_53353__$1 = (function (){var statearr_53371 = state_53353;
(statearr_53371[(12)] = inst_53346);

return statearr_53371;
})();
var statearr_53372_53394 = state_53353__$1;
(statearr_53372_53394[(2)] = null);

(statearr_53372_53394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (10))){
var inst_53321 = (state_53353[(2)]);
var inst_53322 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_53353__$1 = (function (){var statearr_53373 = state_53353;
(statearr_53373[(13)] = inst_53321);

return statearr_53373;
})();
var statearr_53374_53395 = state_53353__$1;
(statearr_53374_53395[(2)] = inst_53322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53354 === (8))){
var inst_53335 = (state_53353[(2)]);
var state_53353__$1 = state_53353;
var statearr_53375_53396 = state_53353__$1;
(statearr_53375_53396[(2)] = inst_53335);

(statearr_53375_53396[(1)] = (5));


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
});})(c__52042__auto___53381,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__51952__auto__,c__52042__auto___53381,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_53376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53376[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_53376[(1)] = (1));

return statearr_53376;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_53353){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53377){if((e53377 instanceof Object)){
var ex__51956__auto__ = e53377;
var statearr_53378_53397 = state_53353;
(statearr_53378_53397[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53398 = state_53353;
state_53353 = G__53398;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_53353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_53353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53381,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__52044__auto__ = (function (){var statearr_53379 = f__52043__auto__.call(null);
(statearr_53379[(6)] = c__52042__auto___53381);

return statearr_53379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53381,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__53401 = arguments.length;
switch (G__53401) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__52042__auto___53455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53455,out){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53455,out){
return (function (state_53433){
var state_val_53434 = (state_53433[(1)]);
if((state_val_53434 === (7))){
var inst_53413 = (state_53433[(7)]);
var inst_53412 = (state_53433[(8)]);
var inst_53412__$1 = (state_53433[(2)]);
var inst_53413__$1 = cljs.core.nth.call(null,inst_53412__$1,(0),null);
var inst_53414 = cljs.core.nth.call(null,inst_53412__$1,(1),null);
var inst_53415 = (inst_53413__$1 == null);
var state_53433__$1 = (function (){var statearr_53435 = state_53433;
(statearr_53435[(7)] = inst_53413__$1);

(statearr_53435[(8)] = inst_53412__$1);

(statearr_53435[(9)] = inst_53414);

return statearr_53435;
})();
if(cljs.core.truth_(inst_53415)){
var statearr_53436_53456 = state_53433__$1;
(statearr_53436_53456[(1)] = (8));

} else {
var statearr_53437_53457 = state_53433__$1;
(statearr_53437_53457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (1))){
var inst_53402 = cljs.core.vec.call(null,chs);
var inst_53403 = inst_53402;
var state_53433__$1 = (function (){var statearr_53438 = state_53433;
(statearr_53438[(10)] = inst_53403);

return statearr_53438;
})();
var statearr_53439_53458 = state_53433__$1;
(statearr_53439_53458[(2)] = null);

(statearr_53439_53458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (4))){
var inst_53403 = (state_53433[(10)]);
var state_53433__$1 = state_53433;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53433__$1,(7),inst_53403);
} else {
if((state_val_53434 === (6))){
var inst_53429 = (state_53433[(2)]);
var state_53433__$1 = state_53433;
var statearr_53440_53459 = state_53433__$1;
(statearr_53440_53459[(2)] = inst_53429);

(statearr_53440_53459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (3))){
var inst_53431 = (state_53433[(2)]);
var state_53433__$1 = state_53433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53433__$1,inst_53431);
} else {
if((state_val_53434 === (2))){
var inst_53403 = (state_53433[(10)]);
var inst_53405 = cljs.core.count.call(null,inst_53403);
var inst_53406 = (inst_53405 > (0));
var state_53433__$1 = state_53433;
if(cljs.core.truth_(inst_53406)){
var statearr_53442_53460 = state_53433__$1;
(statearr_53442_53460[(1)] = (4));

} else {
var statearr_53443_53461 = state_53433__$1;
(statearr_53443_53461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (11))){
var inst_53403 = (state_53433[(10)]);
var inst_53422 = (state_53433[(2)]);
var tmp53441 = inst_53403;
var inst_53403__$1 = tmp53441;
var state_53433__$1 = (function (){var statearr_53444 = state_53433;
(statearr_53444[(10)] = inst_53403__$1);

(statearr_53444[(11)] = inst_53422);

return statearr_53444;
})();
var statearr_53445_53462 = state_53433__$1;
(statearr_53445_53462[(2)] = null);

(statearr_53445_53462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (9))){
var inst_53413 = (state_53433[(7)]);
var state_53433__$1 = state_53433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53433__$1,(11),out,inst_53413);
} else {
if((state_val_53434 === (5))){
var inst_53427 = cljs.core.async.close_BANG_.call(null,out);
var state_53433__$1 = state_53433;
var statearr_53446_53463 = state_53433__$1;
(statearr_53446_53463[(2)] = inst_53427);

(statearr_53446_53463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (10))){
var inst_53425 = (state_53433[(2)]);
var state_53433__$1 = state_53433;
var statearr_53447_53464 = state_53433__$1;
(statearr_53447_53464[(2)] = inst_53425);

(statearr_53447_53464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53434 === (8))){
var inst_53413 = (state_53433[(7)]);
var inst_53412 = (state_53433[(8)]);
var inst_53403 = (state_53433[(10)]);
var inst_53414 = (state_53433[(9)]);
var inst_53417 = (function (){var cs = inst_53403;
var vec__53408 = inst_53412;
var v = inst_53413;
var c = inst_53414;
return ((function (cs,vec__53408,v,c,inst_53413,inst_53412,inst_53403,inst_53414,state_val_53434,c__52042__auto___53455,out){
return (function (p1__53399_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__53399_SHARP_);
});
;})(cs,vec__53408,v,c,inst_53413,inst_53412,inst_53403,inst_53414,state_val_53434,c__52042__auto___53455,out))
})();
var inst_53418 = cljs.core.filterv.call(null,inst_53417,inst_53403);
var inst_53403__$1 = inst_53418;
var state_53433__$1 = (function (){var statearr_53448 = state_53433;
(statearr_53448[(10)] = inst_53403__$1);

return statearr_53448;
})();
var statearr_53449_53465 = state_53433__$1;
(statearr_53449_53465[(2)] = null);

(statearr_53449_53465[(1)] = (2));


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
});})(c__52042__auto___53455,out))
;
return ((function (switch__51952__auto__,c__52042__auto___53455,out){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_53450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53450[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_53450[(1)] = (1));

return statearr_53450;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_53433){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53451){if((e53451 instanceof Object)){
var ex__51956__auto__ = e53451;
var statearr_53452_53466 = state_53433;
(statearr_53452_53466[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53467 = state_53433;
state_53433 = G__53467;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_53433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_53433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53455,out))
})();
var state__52044__auto__ = (function (){var statearr_53453 = f__52043__auto__.call(null);
(statearr_53453[(6)] = c__52042__auto___53455);

return statearr_53453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53455,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__53469 = arguments.length;
switch (G__53469) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__52042__auto___53514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53514,out){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53514,out){
return (function (state_53493){
var state_val_53494 = (state_53493[(1)]);
if((state_val_53494 === (7))){
var inst_53475 = (state_53493[(7)]);
var inst_53475__$1 = (state_53493[(2)]);
var inst_53476 = (inst_53475__$1 == null);
var inst_53477 = cljs.core.not.call(null,inst_53476);
var state_53493__$1 = (function (){var statearr_53495 = state_53493;
(statearr_53495[(7)] = inst_53475__$1);

return statearr_53495;
})();
if(inst_53477){
var statearr_53496_53515 = state_53493__$1;
(statearr_53496_53515[(1)] = (8));

} else {
var statearr_53497_53516 = state_53493__$1;
(statearr_53497_53516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53494 === (1))){
var inst_53470 = (0);
var state_53493__$1 = (function (){var statearr_53498 = state_53493;
(statearr_53498[(8)] = inst_53470);

return statearr_53498;
})();
var statearr_53499_53517 = state_53493__$1;
(statearr_53499_53517[(2)] = null);

(statearr_53499_53517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53494 === (4))){
var state_53493__$1 = state_53493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53493__$1,(7),ch);
} else {
if((state_val_53494 === (6))){
var inst_53488 = (state_53493[(2)]);
var state_53493__$1 = state_53493;
var statearr_53500_53518 = state_53493__$1;
(statearr_53500_53518[(2)] = inst_53488);

(statearr_53500_53518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53494 === (3))){
var inst_53490 = (state_53493[(2)]);
var inst_53491 = cljs.core.async.close_BANG_.call(null,out);
var state_53493__$1 = (function (){var statearr_53501 = state_53493;
(statearr_53501[(9)] = inst_53490);

return statearr_53501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53493__$1,inst_53491);
} else {
if((state_val_53494 === (2))){
var inst_53470 = (state_53493[(8)]);
var inst_53472 = (inst_53470 < n);
var state_53493__$1 = state_53493;
if(cljs.core.truth_(inst_53472)){
var statearr_53502_53519 = state_53493__$1;
(statearr_53502_53519[(1)] = (4));

} else {
var statearr_53503_53520 = state_53493__$1;
(statearr_53503_53520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53494 === (11))){
var inst_53470 = (state_53493[(8)]);
var inst_53480 = (state_53493[(2)]);
var inst_53481 = (inst_53470 + (1));
var inst_53470__$1 = inst_53481;
var state_53493__$1 = (function (){var statearr_53504 = state_53493;
(statearr_53504[(10)] = inst_53480);

(statearr_53504[(8)] = inst_53470__$1);

return statearr_53504;
})();
var statearr_53505_53521 = state_53493__$1;
(statearr_53505_53521[(2)] = null);

(statearr_53505_53521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53494 === (9))){
var state_53493__$1 = state_53493;
var statearr_53506_53522 = state_53493__$1;
(statearr_53506_53522[(2)] = null);

(statearr_53506_53522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53494 === (5))){
var state_53493__$1 = state_53493;
var statearr_53507_53523 = state_53493__$1;
(statearr_53507_53523[(2)] = null);

(statearr_53507_53523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53494 === (10))){
var inst_53485 = (state_53493[(2)]);
var state_53493__$1 = state_53493;
var statearr_53508_53524 = state_53493__$1;
(statearr_53508_53524[(2)] = inst_53485);

(statearr_53508_53524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53494 === (8))){
var inst_53475 = (state_53493[(7)]);
var state_53493__$1 = state_53493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53493__$1,(11),out,inst_53475);
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
});})(c__52042__auto___53514,out))
;
return ((function (switch__51952__auto__,c__52042__auto___53514,out){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_53509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53509[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_53509[(1)] = (1));

return statearr_53509;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_53493){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53510){if((e53510 instanceof Object)){
var ex__51956__auto__ = e53510;
var statearr_53511_53525 = state_53493;
(statearr_53511_53525[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53526 = state_53493;
state_53493 = G__53526;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_53493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_53493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53514,out))
})();
var state__52044__auto__ = (function (){var statearr_53512 = f__52043__auto__.call(null);
(statearr_53512[(6)] = c__52042__auto___53514);

return statearr_53512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53514,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async53528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53528 = (function (f,ch,meta53529){
this.f = f;
this.ch = ch;
this.meta53529 = meta53529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53530,meta53529__$1){
var self__ = this;
var _53530__$1 = this;
return (new cljs.core.async.t_cljs$core$async53528(self__.f,self__.ch,meta53529__$1));
});

cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53530){
var self__ = this;
var _53530__$1 = this;
return self__.meta53529;
});

cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async53531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53531 = (function (f,ch,meta53529,_,fn1,meta53532){
this.f = f;
this.ch = ch;
this.meta53529 = meta53529;
this._ = _;
this.fn1 = fn1;
this.meta53532 = meta53532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53533,meta53532__$1){
var self__ = this;
var _53533__$1 = this;
return (new cljs.core.async.t_cljs$core$async53531(self__.f,self__.ch,self__.meta53529,self__._,self__.fn1,meta53532__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53533){
var self__ = this;
var _53533__$1 = this;
return self__.meta53532;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53527_SHARP_){
return f1.call(null,(((p1__53527_SHARP_ == null))?null:self__.f.call(null,p1__53527_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53531.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53529","meta53529",-1631360794,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53528","cljs.core.async/t_cljs$core$async53528",-292531778,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53532","meta53532",-1567150793,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53531";

cljs.core.async.t_cljs$core$async53531.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async53531");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async53531 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53531(f__$1,ch__$1,meta53529__$1,___$2,fn1__$1,meta53532){
return (new cljs.core.async.t_cljs$core$async53531(f__$1,ch__$1,meta53529__$1,___$2,fn1__$1,meta53532));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53531(self__.f,self__.ch,self__.meta53529,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41318__auto__ = ret;
if(cljs.core.truth_(and__41318__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41318__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53529","meta53529",-1631360794,null)], null);
});

cljs.core.async.t_cljs$core$async53528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53528";

cljs.core.async.t_cljs$core$async53528.cljs$lang$ctorPrWriter = (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async53528");
});

cljs.core.async.__GT_t_cljs$core$async53528 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53528(f__$1,ch__$1,meta53529){
return (new cljs.core.async.t_cljs$core$async53528(f__$1,ch__$1,meta53529));
});

}

return (new cljs.core.async.t_cljs$core$async53528(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async53534 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53534 = (function (f,ch,meta53535){
this.f = f;
this.ch = ch;
this.meta53535 = meta53535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53536,meta53535__$1){
var self__ = this;
var _53536__$1 = this;
return (new cljs.core.async.t_cljs$core$async53534(self__.f,self__.ch,meta53535__$1));
});

cljs.core.async.t_cljs$core$async53534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53536){
var self__ = this;
var _53536__$1 = this;
return self__.meta53535;
});

cljs.core.async.t_cljs$core$async53534.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53534.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53534.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async53534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53535","meta53535",1548196717,null)], null);
});

cljs.core.async.t_cljs$core$async53534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53534";

cljs.core.async.t_cljs$core$async53534.cljs$lang$ctorPrWriter = (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async53534");
});

cljs.core.async.__GT_t_cljs$core$async53534 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53534(f__$1,ch__$1,meta53535){
return (new cljs.core.async.t_cljs$core$async53534(f__$1,ch__$1,meta53535));
});

}

return (new cljs.core.async.t_cljs$core$async53534(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async53537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53537 = (function (p,ch,meta53538){
this.p = p;
this.ch = ch;
this.meta53538 = meta53538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53539,meta53538__$1){
var self__ = this;
var _53539__$1 = this;
return (new cljs.core.async.t_cljs$core$async53537(self__.p,self__.ch,meta53538__$1));
});

cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53539){
var self__ = this;
var _53539__$1 = this;
return self__.meta53538;
});

cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53538","meta53538",370483147,null)], null);
});

cljs.core.async.t_cljs$core$async53537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53537";

cljs.core.async.t_cljs$core$async53537.cljs$lang$ctorPrWriter = (function (this__42774__auto__,writer__42775__auto__,opt__42776__auto__){
return cljs.core._write.call(null,writer__42775__auto__,"cljs.core.async/t_cljs$core$async53537");
});

cljs.core.async.__GT_t_cljs$core$async53537 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53537(p__$1,ch__$1,meta53538){
return (new cljs.core.async.t_cljs$core$async53537(p__$1,ch__$1,meta53538));
});

}

return (new cljs.core.async.t_cljs$core$async53537(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__53541 = arguments.length;
switch (G__53541) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__52042__auto___53581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53581,out){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53581,out){
return (function (state_53562){
var state_val_53563 = (state_53562[(1)]);
if((state_val_53563 === (7))){
var inst_53558 = (state_53562[(2)]);
var state_53562__$1 = state_53562;
var statearr_53564_53582 = state_53562__$1;
(statearr_53564_53582[(2)] = inst_53558);

(statearr_53564_53582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53563 === (1))){
var state_53562__$1 = state_53562;
var statearr_53565_53583 = state_53562__$1;
(statearr_53565_53583[(2)] = null);

(statearr_53565_53583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53563 === (4))){
var inst_53544 = (state_53562[(7)]);
var inst_53544__$1 = (state_53562[(2)]);
var inst_53545 = (inst_53544__$1 == null);
var state_53562__$1 = (function (){var statearr_53566 = state_53562;
(statearr_53566[(7)] = inst_53544__$1);

return statearr_53566;
})();
if(cljs.core.truth_(inst_53545)){
var statearr_53567_53584 = state_53562__$1;
(statearr_53567_53584[(1)] = (5));

} else {
var statearr_53568_53585 = state_53562__$1;
(statearr_53568_53585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53563 === (6))){
var inst_53544 = (state_53562[(7)]);
var inst_53549 = p.call(null,inst_53544);
var state_53562__$1 = state_53562;
if(cljs.core.truth_(inst_53549)){
var statearr_53569_53586 = state_53562__$1;
(statearr_53569_53586[(1)] = (8));

} else {
var statearr_53570_53587 = state_53562__$1;
(statearr_53570_53587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53563 === (3))){
var inst_53560 = (state_53562[(2)]);
var state_53562__$1 = state_53562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53562__$1,inst_53560);
} else {
if((state_val_53563 === (2))){
var state_53562__$1 = state_53562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53562__$1,(4),ch);
} else {
if((state_val_53563 === (11))){
var inst_53552 = (state_53562[(2)]);
var state_53562__$1 = state_53562;
var statearr_53571_53588 = state_53562__$1;
(statearr_53571_53588[(2)] = inst_53552);

(statearr_53571_53588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53563 === (9))){
var state_53562__$1 = state_53562;
var statearr_53572_53589 = state_53562__$1;
(statearr_53572_53589[(2)] = null);

(statearr_53572_53589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53563 === (5))){
var inst_53547 = cljs.core.async.close_BANG_.call(null,out);
var state_53562__$1 = state_53562;
var statearr_53573_53590 = state_53562__$1;
(statearr_53573_53590[(2)] = inst_53547);

(statearr_53573_53590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53563 === (10))){
var inst_53555 = (state_53562[(2)]);
var state_53562__$1 = (function (){var statearr_53574 = state_53562;
(statearr_53574[(8)] = inst_53555);

return statearr_53574;
})();
var statearr_53575_53591 = state_53562__$1;
(statearr_53575_53591[(2)] = null);

(statearr_53575_53591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53563 === (8))){
var inst_53544 = (state_53562[(7)]);
var state_53562__$1 = state_53562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53562__$1,(11),out,inst_53544);
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
});})(c__52042__auto___53581,out))
;
return ((function (switch__51952__auto__,c__52042__auto___53581,out){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_53576 = [null,null,null,null,null,null,null,null,null];
(statearr_53576[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_53576[(1)] = (1));

return statearr_53576;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_53562){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53577){if((e53577 instanceof Object)){
var ex__51956__auto__ = e53577;
var statearr_53578_53592 = state_53562;
(statearr_53578_53592[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53593 = state_53562;
state_53562 = G__53593;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_53562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_53562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53581,out))
})();
var state__52044__auto__ = (function (){var statearr_53579 = f__52043__auto__.call(null);
(statearr_53579[(6)] = c__52042__auto___53581);

return statearr_53579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53581,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53595 = arguments.length;
switch (G__53595) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__52042__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto__){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto__){
return (function (state_53658){
var state_val_53659 = (state_53658[(1)]);
if((state_val_53659 === (7))){
var inst_53654 = (state_53658[(2)]);
var state_53658__$1 = state_53658;
var statearr_53660_53698 = state_53658__$1;
(statearr_53660_53698[(2)] = inst_53654);

(statearr_53660_53698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (20))){
var inst_53624 = (state_53658[(7)]);
var inst_53635 = (state_53658[(2)]);
var inst_53636 = cljs.core.next.call(null,inst_53624);
var inst_53610 = inst_53636;
var inst_53611 = null;
var inst_53612 = (0);
var inst_53613 = (0);
var state_53658__$1 = (function (){var statearr_53661 = state_53658;
(statearr_53661[(8)] = inst_53613);

(statearr_53661[(9)] = inst_53611);

(statearr_53661[(10)] = inst_53612);

(statearr_53661[(11)] = inst_53635);

(statearr_53661[(12)] = inst_53610);

return statearr_53661;
})();
var statearr_53662_53699 = state_53658__$1;
(statearr_53662_53699[(2)] = null);

(statearr_53662_53699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (1))){
var state_53658__$1 = state_53658;
var statearr_53663_53700 = state_53658__$1;
(statearr_53663_53700[(2)] = null);

(statearr_53663_53700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (4))){
var inst_53599 = (state_53658[(13)]);
var inst_53599__$1 = (state_53658[(2)]);
var inst_53600 = (inst_53599__$1 == null);
var state_53658__$1 = (function (){var statearr_53664 = state_53658;
(statearr_53664[(13)] = inst_53599__$1);

return statearr_53664;
})();
if(cljs.core.truth_(inst_53600)){
var statearr_53665_53701 = state_53658__$1;
(statearr_53665_53701[(1)] = (5));

} else {
var statearr_53666_53702 = state_53658__$1;
(statearr_53666_53702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (15))){
var state_53658__$1 = state_53658;
var statearr_53670_53703 = state_53658__$1;
(statearr_53670_53703[(2)] = null);

(statearr_53670_53703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (21))){
var state_53658__$1 = state_53658;
var statearr_53671_53704 = state_53658__$1;
(statearr_53671_53704[(2)] = null);

(statearr_53671_53704[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (13))){
var inst_53613 = (state_53658[(8)]);
var inst_53611 = (state_53658[(9)]);
var inst_53612 = (state_53658[(10)]);
var inst_53610 = (state_53658[(12)]);
var inst_53620 = (state_53658[(2)]);
var inst_53621 = (inst_53613 + (1));
var tmp53667 = inst_53611;
var tmp53668 = inst_53612;
var tmp53669 = inst_53610;
var inst_53610__$1 = tmp53669;
var inst_53611__$1 = tmp53667;
var inst_53612__$1 = tmp53668;
var inst_53613__$1 = inst_53621;
var state_53658__$1 = (function (){var statearr_53672 = state_53658;
(statearr_53672[(8)] = inst_53613__$1);

(statearr_53672[(9)] = inst_53611__$1);

(statearr_53672[(10)] = inst_53612__$1);

(statearr_53672[(14)] = inst_53620);

(statearr_53672[(12)] = inst_53610__$1);

return statearr_53672;
})();
var statearr_53673_53705 = state_53658__$1;
(statearr_53673_53705[(2)] = null);

(statearr_53673_53705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (22))){
var state_53658__$1 = state_53658;
var statearr_53674_53706 = state_53658__$1;
(statearr_53674_53706[(2)] = null);

(statearr_53674_53706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (6))){
var inst_53599 = (state_53658[(13)]);
var inst_53608 = f.call(null,inst_53599);
var inst_53609 = cljs.core.seq.call(null,inst_53608);
var inst_53610 = inst_53609;
var inst_53611 = null;
var inst_53612 = (0);
var inst_53613 = (0);
var state_53658__$1 = (function (){var statearr_53675 = state_53658;
(statearr_53675[(8)] = inst_53613);

(statearr_53675[(9)] = inst_53611);

(statearr_53675[(10)] = inst_53612);

(statearr_53675[(12)] = inst_53610);

return statearr_53675;
})();
var statearr_53676_53707 = state_53658__$1;
(statearr_53676_53707[(2)] = null);

(statearr_53676_53707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (17))){
var inst_53624 = (state_53658[(7)]);
var inst_53628 = cljs.core.chunk_first.call(null,inst_53624);
var inst_53629 = cljs.core.chunk_rest.call(null,inst_53624);
var inst_53630 = cljs.core.count.call(null,inst_53628);
var inst_53610 = inst_53629;
var inst_53611 = inst_53628;
var inst_53612 = inst_53630;
var inst_53613 = (0);
var state_53658__$1 = (function (){var statearr_53677 = state_53658;
(statearr_53677[(8)] = inst_53613);

(statearr_53677[(9)] = inst_53611);

(statearr_53677[(10)] = inst_53612);

(statearr_53677[(12)] = inst_53610);

return statearr_53677;
})();
var statearr_53678_53708 = state_53658__$1;
(statearr_53678_53708[(2)] = null);

(statearr_53678_53708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (3))){
var inst_53656 = (state_53658[(2)]);
var state_53658__$1 = state_53658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53658__$1,inst_53656);
} else {
if((state_val_53659 === (12))){
var inst_53644 = (state_53658[(2)]);
var state_53658__$1 = state_53658;
var statearr_53679_53709 = state_53658__$1;
(statearr_53679_53709[(2)] = inst_53644);

(statearr_53679_53709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (2))){
var state_53658__$1 = state_53658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53658__$1,(4),in$);
} else {
if((state_val_53659 === (23))){
var inst_53652 = (state_53658[(2)]);
var state_53658__$1 = state_53658;
var statearr_53680_53710 = state_53658__$1;
(statearr_53680_53710[(2)] = inst_53652);

(statearr_53680_53710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (19))){
var inst_53639 = (state_53658[(2)]);
var state_53658__$1 = state_53658;
var statearr_53681_53711 = state_53658__$1;
(statearr_53681_53711[(2)] = inst_53639);

(statearr_53681_53711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (11))){
var inst_53610 = (state_53658[(12)]);
var inst_53624 = (state_53658[(7)]);
var inst_53624__$1 = cljs.core.seq.call(null,inst_53610);
var state_53658__$1 = (function (){var statearr_53682 = state_53658;
(statearr_53682[(7)] = inst_53624__$1);

return statearr_53682;
})();
if(inst_53624__$1){
var statearr_53683_53712 = state_53658__$1;
(statearr_53683_53712[(1)] = (14));

} else {
var statearr_53684_53713 = state_53658__$1;
(statearr_53684_53713[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (9))){
var inst_53646 = (state_53658[(2)]);
var inst_53647 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_53658__$1 = (function (){var statearr_53685 = state_53658;
(statearr_53685[(15)] = inst_53646);

return statearr_53685;
})();
if(cljs.core.truth_(inst_53647)){
var statearr_53686_53714 = state_53658__$1;
(statearr_53686_53714[(1)] = (21));

} else {
var statearr_53687_53715 = state_53658__$1;
(statearr_53687_53715[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (5))){
var inst_53602 = cljs.core.async.close_BANG_.call(null,out);
var state_53658__$1 = state_53658;
var statearr_53688_53716 = state_53658__$1;
(statearr_53688_53716[(2)] = inst_53602);

(statearr_53688_53716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (14))){
var inst_53624 = (state_53658[(7)]);
var inst_53626 = cljs.core.chunked_seq_QMARK_.call(null,inst_53624);
var state_53658__$1 = state_53658;
if(inst_53626){
var statearr_53689_53717 = state_53658__$1;
(statearr_53689_53717[(1)] = (17));

} else {
var statearr_53690_53718 = state_53658__$1;
(statearr_53690_53718[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (16))){
var inst_53642 = (state_53658[(2)]);
var state_53658__$1 = state_53658;
var statearr_53691_53719 = state_53658__$1;
(statearr_53691_53719[(2)] = inst_53642);

(statearr_53691_53719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53659 === (10))){
var inst_53613 = (state_53658[(8)]);
var inst_53611 = (state_53658[(9)]);
var inst_53618 = cljs.core._nth.call(null,inst_53611,inst_53613);
var state_53658__$1 = state_53658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53658__$1,(13),out,inst_53618);
} else {
if((state_val_53659 === (18))){
var inst_53624 = (state_53658[(7)]);
var inst_53633 = cljs.core.first.call(null,inst_53624);
var state_53658__$1 = state_53658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53658__$1,(20),out,inst_53633);
} else {
if((state_val_53659 === (8))){
var inst_53613 = (state_53658[(8)]);
var inst_53612 = (state_53658[(10)]);
var inst_53615 = (inst_53613 < inst_53612);
var inst_53616 = inst_53615;
var state_53658__$1 = state_53658;
if(cljs.core.truth_(inst_53616)){
var statearr_53692_53720 = state_53658__$1;
(statearr_53692_53720[(1)] = (10));

} else {
var statearr_53693_53721 = state_53658__$1;
(statearr_53693_53721[(1)] = (11));

}

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
});})(c__52042__auto__))
;
return ((function (switch__51952__auto__,c__52042__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__51953__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__51953__auto____0 = (function (){
var statearr_53694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53694[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__51953__auto__);

(statearr_53694[(1)] = (1));

return statearr_53694;
});
var cljs$core$async$mapcat_STAR__$_state_machine__51953__auto____1 = (function (state_53658){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53695){if((e53695 instanceof Object)){
var ex__51956__auto__ = e53695;
var statearr_53696_53722 = state_53658;
(statearr_53696_53722[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53723 = state_53658;
state_53658 = G__53723;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__51953__auto__ = function(state_53658){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__51953__auto____1.call(this,state_53658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__51953__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__51953__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto__))
})();
var state__52044__auto__ = (function (){var statearr_53697 = f__52043__auto__.call(null);
(statearr_53697[(6)] = c__52042__auto__);

return statearr_53697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto__))
);

return c__52042__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53725 = arguments.length;
switch (G__53725) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53728 = arguments.length;
switch (G__53728) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53731 = arguments.length;
switch (G__53731) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__52042__auto___53778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53778,out){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53778,out){
return (function (state_53755){
var state_val_53756 = (state_53755[(1)]);
if((state_val_53756 === (7))){
var inst_53750 = (state_53755[(2)]);
var state_53755__$1 = state_53755;
var statearr_53757_53779 = state_53755__$1;
(statearr_53757_53779[(2)] = inst_53750);

(statearr_53757_53779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53756 === (1))){
var inst_53732 = null;
var state_53755__$1 = (function (){var statearr_53758 = state_53755;
(statearr_53758[(7)] = inst_53732);

return statearr_53758;
})();
var statearr_53759_53780 = state_53755__$1;
(statearr_53759_53780[(2)] = null);

(statearr_53759_53780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53756 === (4))){
var inst_53735 = (state_53755[(8)]);
var inst_53735__$1 = (state_53755[(2)]);
var inst_53736 = (inst_53735__$1 == null);
var inst_53737 = cljs.core.not.call(null,inst_53736);
var state_53755__$1 = (function (){var statearr_53760 = state_53755;
(statearr_53760[(8)] = inst_53735__$1);

return statearr_53760;
})();
if(inst_53737){
var statearr_53761_53781 = state_53755__$1;
(statearr_53761_53781[(1)] = (5));

} else {
var statearr_53762_53782 = state_53755__$1;
(statearr_53762_53782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53756 === (6))){
var state_53755__$1 = state_53755;
var statearr_53763_53783 = state_53755__$1;
(statearr_53763_53783[(2)] = null);

(statearr_53763_53783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53756 === (3))){
var inst_53752 = (state_53755[(2)]);
var inst_53753 = cljs.core.async.close_BANG_.call(null,out);
var state_53755__$1 = (function (){var statearr_53764 = state_53755;
(statearr_53764[(9)] = inst_53752);

return statearr_53764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53755__$1,inst_53753);
} else {
if((state_val_53756 === (2))){
var state_53755__$1 = state_53755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53755__$1,(4),ch);
} else {
if((state_val_53756 === (11))){
var inst_53735 = (state_53755[(8)]);
var inst_53744 = (state_53755[(2)]);
var inst_53732 = inst_53735;
var state_53755__$1 = (function (){var statearr_53765 = state_53755;
(statearr_53765[(10)] = inst_53744);

(statearr_53765[(7)] = inst_53732);

return statearr_53765;
})();
var statearr_53766_53784 = state_53755__$1;
(statearr_53766_53784[(2)] = null);

(statearr_53766_53784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53756 === (9))){
var inst_53735 = (state_53755[(8)]);
var state_53755__$1 = state_53755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53755__$1,(11),out,inst_53735);
} else {
if((state_val_53756 === (5))){
var inst_53735 = (state_53755[(8)]);
var inst_53732 = (state_53755[(7)]);
var inst_53739 = cljs.core._EQ_.call(null,inst_53735,inst_53732);
var state_53755__$1 = state_53755;
if(inst_53739){
var statearr_53768_53785 = state_53755__$1;
(statearr_53768_53785[(1)] = (8));

} else {
var statearr_53769_53786 = state_53755__$1;
(statearr_53769_53786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53756 === (10))){
var inst_53747 = (state_53755[(2)]);
var state_53755__$1 = state_53755;
var statearr_53770_53787 = state_53755__$1;
(statearr_53770_53787[(2)] = inst_53747);

(statearr_53770_53787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53756 === (8))){
var inst_53732 = (state_53755[(7)]);
var tmp53767 = inst_53732;
var inst_53732__$1 = tmp53767;
var state_53755__$1 = (function (){var statearr_53771 = state_53755;
(statearr_53771[(7)] = inst_53732__$1);

return statearr_53771;
})();
var statearr_53772_53788 = state_53755__$1;
(statearr_53772_53788[(2)] = null);

(statearr_53772_53788[(1)] = (2));


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
});})(c__52042__auto___53778,out))
;
return ((function (switch__51952__auto__,c__52042__auto___53778,out){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_53773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53773[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_53773[(1)] = (1));

return statearr_53773;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_53755){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53774){if((e53774 instanceof Object)){
var ex__51956__auto__ = e53774;
var statearr_53775_53789 = state_53755;
(statearr_53775_53789[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53790 = state_53755;
state_53755 = G__53790;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_53755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_53755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53778,out))
})();
var state__52044__auto__ = (function (){var statearr_53776 = f__52043__auto__.call(null);
(statearr_53776[(6)] = c__52042__auto___53778);

return statearr_53776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53778,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53792 = arguments.length;
switch (G__53792) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__52042__auto___53858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53858,out){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53858,out){
return (function (state_53830){
var state_val_53831 = (state_53830[(1)]);
if((state_val_53831 === (7))){
var inst_53826 = (state_53830[(2)]);
var state_53830__$1 = state_53830;
var statearr_53832_53859 = state_53830__$1;
(statearr_53832_53859[(2)] = inst_53826);

(statearr_53832_53859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (1))){
var inst_53793 = (new Array(n));
var inst_53794 = inst_53793;
var inst_53795 = (0);
var state_53830__$1 = (function (){var statearr_53833 = state_53830;
(statearr_53833[(7)] = inst_53795);

(statearr_53833[(8)] = inst_53794);

return statearr_53833;
})();
var statearr_53834_53860 = state_53830__$1;
(statearr_53834_53860[(2)] = null);

(statearr_53834_53860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (4))){
var inst_53798 = (state_53830[(9)]);
var inst_53798__$1 = (state_53830[(2)]);
var inst_53799 = (inst_53798__$1 == null);
var inst_53800 = cljs.core.not.call(null,inst_53799);
var state_53830__$1 = (function (){var statearr_53835 = state_53830;
(statearr_53835[(9)] = inst_53798__$1);

return statearr_53835;
})();
if(inst_53800){
var statearr_53836_53861 = state_53830__$1;
(statearr_53836_53861[(1)] = (5));

} else {
var statearr_53837_53862 = state_53830__$1;
(statearr_53837_53862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (15))){
var inst_53820 = (state_53830[(2)]);
var state_53830__$1 = state_53830;
var statearr_53838_53863 = state_53830__$1;
(statearr_53838_53863[(2)] = inst_53820);

(statearr_53838_53863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (13))){
var state_53830__$1 = state_53830;
var statearr_53839_53864 = state_53830__$1;
(statearr_53839_53864[(2)] = null);

(statearr_53839_53864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (6))){
var inst_53795 = (state_53830[(7)]);
var inst_53816 = (inst_53795 > (0));
var state_53830__$1 = state_53830;
if(cljs.core.truth_(inst_53816)){
var statearr_53840_53865 = state_53830__$1;
(statearr_53840_53865[(1)] = (12));

} else {
var statearr_53841_53866 = state_53830__$1;
(statearr_53841_53866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (3))){
var inst_53828 = (state_53830[(2)]);
var state_53830__$1 = state_53830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53830__$1,inst_53828);
} else {
if((state_val_53831 === (12))){
var inst_53794 = (state_53830[(8)]);
var inst_53818 = cljs.core.vec.call(null,inst_53794);
var state_53830__$1 = state_53830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53830__$1,(15),out,inst_53818);
} else {
if((state_val_53831 === (2))){
var state_53830__$1 = state_53830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53830__$1,(4),ch);
} else {
if((state_val_53831 === (11))){
var inst_53810 = (state_53830[(2)]);
var inst_53811 = (new Array(n));
var inst_53794 = inst_53811;
var inst_53795 = (0);
var state_53830__$1 = (function (){var statearr_53842 = state_53830;
(statearr_53842[(7)] = inst_53795);

(statearr_53842[(8)] = inst_53794);

(statearr_53842[(10)] = inst_53810);

return statearr_53842;
})();
var statearr_53843_53867 = state_53830__$1;
(statearr_53843_53867[(2)] = null);

(statearr_53843_53867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (9))){
var inst_53794 = (state_53830[(8)]);
var inst_53808 = cljs.core.vec.call(null,inst_53794);
var state_53830__$1 = state_53830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53830__$1,(11),out,inst_53808);
} else {
if((state_val_53831 === (5))){
var inst_53795 = (state_53830[(7)]);
var inst_53803 = (state_53830[(11)]);
var inst_53794 = (state_53830[(8)]);
var inst_53798 = (state_53830[(9)]);
var inst_53802 = (inst_53794[inst_53795] = inst_53798);
var inst_53803__$1 = (inst_53795 + (1));
var inst_53804 = (inst_53803__$1 < n);
var state_53830__$1 = (function (){var statearr_53844 = state_53830;
(statearr_53844[(11)] = inst_53803__$1);

(statearr_53844[(12)] = inst_53802);

return statearr_53844;
})();
if(cljs.core.truth_(inst_53804)){
var statearr_53845_53868 = state_53830__$1;
(statearr_53845_53868[(1)] = (8));

} else {
var statearr_53846_53869 = state_53830__$1;
(statearr_53846_53869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (14))){
var inst_53823 = (state_53830[(2)]);
var inst_53824 = cljs.core.async.close_BANG_.call(null,out);
var state_53830__$1 = (function (){var statearr_53848 = state_53830;
(statearr_53848[(13)] = inst_53823);

return statearr_53848;
})();
var statearr_53849_53870 = state_53830__$1;
(statearr_53849_53870[(2)] = inst_53824);

(statearr_53849_53870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (10))){
var inst_53814 = (state_53830[(2)]);
var state_53830__$1 = state_53830;
var statearr_53850_53871 = state_53830__$1;
(statearr_53850_53871[(2)] = inst_53814);

(statearr_53850_53871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53831 === (8))){
var inst_53803 = (state_53830[(11)]);
var inst_53794 = (state_53830[(8)]);
var tmp53847 = inst_53794;
var inst_53794__$1 = tmp53847;
var inst_53795 = inst_53803;
var state_53830__$1 = (function (){var statearr_53851 = state_53830;
(statearr_53851[(7)] = inst_53795);

(statearr_53851[(8)] = inst_53794__$1);

return statearr_53851;
})();
var statearr_53852_53872 = state_53830__$1;
(statearr_53852_53872[(2)] = null);

(statearr_53852_53872[(1)] = (2));


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
});})(c__52042__auto___53858,out))
;
return ((function (switch__51952__auto__,c__52042__auto___53858,out){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_53853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53853[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_53853[(1)] = (1));

return statearr_53853;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_53830){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53854){if((e53854 instanceof Object)){
var ex__51956__auto__ = e53854;
var statearr_53855_53873 = state_53830;
(statearr_53855_53873[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53874 = state_53830;
state_53830 = G__53874;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_53830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_53830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53858,out))
})();
var state__52044__auto__ = (function (){var statearr_53856 = f__52043__auto__.call(null);
(statearr_53856[(6)] = c__52042__auto___53858);

return statearr_53856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53858,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53876 = arguments.length;
switch (G__53876) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__52042__auto___53946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__52042__auto___53946,out){
return (function (){
var f__52043__auto__ = (function (){var switch__51952__auto__ = ((function (c__52042__auto___53946,out){
return (function (state_53918){
var state_val_53919 = (state_53918[(1)]);
if((state_val_53919 === (7))){
var inst_53914 = (state_53918[(2)]);
var state_53918__$1 = state_53918;
var statearr_53920_53947 = state_53918__$1;
(statearr_53920_53947[(2)] = inst_53914);

(statearr_53920_53947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (1))){
var inst_53877 = [];
var inst_53878 = inst_53877;
var inst_53879 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53918__$1 = (function (){var statearr_53921 = state_53918;
(statearr_53921[(7)] = inst_53878);

(statearr_53921[(8)] = inst_53879);

return statearr_53921;
})();
var statearr_53922_53948 = state_53918__$1;
(statearr_53922_53948[(2)] = null);

(statearr_53922_53948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (4))){
var inst_53882 = (state_53918[(9)]);
var inst_53882__$1 = (state_53918[(2)]);
var inst_53883 = (inst_53882__$1 == null);
var inst_53884 = cljs.core.not.call(null,inst_53883);
var state_53918__$1 = (function (){var statearr_53923 = state_53918;
(statearr_53923[(9)] = inst_53882__$1);

return statearr_53923;
})();
if(inst_53884){
var statearr_53924_53949 = state_53918__$1;
(statearr_53924_53949[(1)] = (5));

} else {
var statearr_53925_53950 = state_53918__$1;
(statearr_53925_53950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (15))){
var inst_53908 = (state_53918[(2)]);
var state_53918__$1 = state_53918;
var statearr_53926_53951 = state_53918__$1;
(statearr_53926_53951[(2)] = inst_53908);

(statearr_53926_53951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (13))){
var state_53918__$1 = state_53918;
var statearr_53927_53952 = state_53918__$1;
(statearr_53927_53952[(2)] = null);

(statearr_53927_53952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (6))){
var inst_53878 = (state_53918[(7)]);
var inst_53903 = inst_53878.length;
var inst_53904 = (inst_53903 > (0));
var state_53918__$1 = state_53918;
if(cljs.core.truth_(inst_53904)){
var statearr_53928_53953 = state_53918__$1;
(statearr_53928_53953[(1)] = (12));

} else {
var statearr_53929_53954 = state_53918__$1;
(statearr_53929_53954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (3))){
var inst_53916 = (state_53918[(2)]);
var state_53918__$1 = state_53918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53918__$1,inst_53916);
} else {
if((state_val_53919 === (12))){
var inst_53878 = (state_53918[(7)]);
var inst_53906 = cljs.core.vec.call(null,inst_53878);
var state_53918__$1 = state_53918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53918__$1,(15),out,inst_53906);
} else {
if((state_val_53919 === (2))){
var state_53918__$1 = state_53918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53918__$1,(4),ch);
} else {
if((state_val_53919 === (11))){
var inst_53882 = (state_53918[(9)]);
var inst_53886 = (state_53918[(10)]);
var inst_53896 = (state_53918[(2)]);
var inst_53897 = [];
var inst_53898 = inst_53897.push(inst_53882);
var inst_53878 = inst_53897;
var inst_53879 = inst_53886;
var state_53918__$1 = (function (){var statearr_53930 = state_53918;
(statearr_53930[(7)] = inst_53878);

(statearr_53930[(11)] = inst_53898);

(statearr_53930[(8)] = inst_53879);

(statearr_53930[(12)] = inst_53896);

return statearr_53930;
})();
var statearr_53931_53955 = state_53918__$1;
(statearr_53931_53955[(2)] = null);

(statearr_53931_53955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (9))){
var inst_53878 = (state_53918[(7)]);
var inst_53894 = cljs.core.vec.call(null,inst_53878);
var state_53918__$1 = state_53918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53918__$1,(11),out,inst_53894);
} else {
if((state_val_53919 === (5))){
var inst_53882 = (state_53918[(9)]);
var inst_53879 = (state_53918[(8)]);
var inst_53886 = (state_53918[(10)]);
var inst_53886__$1 = f.call(null,inst_53882);
var inst_53887 = cljs.core._EQ_.call(null,inst_53886__$1,inst_53879);
var inst_53888 = cljs.core.keyword_identical_QMARK_.call(null,inst_53879,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53889 = (inst_53887) || (inst_53888);
var state_53918__$1 = (function (){var statearr_53932 = state_53918;
(statearr_53932[(10)] = inst_53886__$1);

return statearr_53932;
})();
if(cljs.core.truth_(inst_53889)){
var statearr_53933_53956 = state_53918__$1;
(statearr_53933_53956[(1)] = (8));

} else {
var statearr_53934_53957 = state_53918__$1;
(statearr_53934_53957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (14))){
var inst_53911 = (state_53918[(2)]);
var inst_53912 = cljs.core.async.close_BANG_.call(null,out);
var state_53918__$1 = (function (){var statearr_53936 = state_53918;
(statearr_53936[(13)] = inst_53911);

return statearr_53936;
})();
var statearr_53937_53958 = state_53918__$1;
(statearr_53937_53958[(2)] = inst_53912);

(statearr_53937_53958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (10))){
var inst_53901 = (state_53918[(2)]);
var state_53918__$1 = state_53918;
var statearr_53938_53959 = state_53918__$1;
(statearr_53938_53959[(2)] = inst_53901);

(statearr_53938_53959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53919 === (8))){
var inst_53878 = (state_53918[(7)]);
var inst_53882 = (state_53918[(9)]);
var inst_53886 = (state_53918[(10)]);
var inst_53891 = inst_53878.push(inst_53882);
var tmp53935 = inst_53878;
var inst_53878__$1 = tmp53935;
var inst_53879 = inst_53886;
var state_53918__$1 = (function (){var statearr_53939 = state_53918;
(statearr_53939[(7)] = inst_53878__$1);

(statearr_53939[(8)] = inst_53879);

(statearr_53939[(14)] = inst_53891);

return statearr_53939;
})();
var statearr_53940_53960 = state_53918__$1;
(statearr_53940_53960[(2)] = null);

(statearr_53940_53960[(1)] = (2));


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
});})(c__52042__auto___53946,out))
;
return ((function (switch__51952__auto__,c__52042__auto___53946,out){
return (function() {
var cljs$core$async$state_machine__51953__auto__ = null;
var cljs$core$async$state_machine__51953__auto____0 = (function (){
var statearr_53941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53941[(0)] = cljs$core$async$state_machine__51953__auto__);

(statearr_53941[(1)] = (1));

return statearr_53941;
});
var cljs$core$async$state_machine__51953__auto____1 = (function (state_53918){
while(true){
var ret_value__51954__auto__ = (function (){try{while(true){
var result__51955__auto__ = switch__51952__auto__.call(null,state_53918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__51955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__51955__auto__;
}
break;
}
}catch (e53942){if((e53942 instanceof Object)){
var ex__51956__auto__ = e53942;
var statearr_53943_53961 = state_53918;
(statearr_53943_53961[(5)] = ex__51956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__51954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53962 = state_53918;
state_53918 = G__53962;
continue;
} else {
return ret_value__51954__auto__;
}
break;
}
});
cljs$core$async$state_machine__51953__auto__ = function(state_53918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__51953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__51953__auto____1.call(this,state_53918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__51953__auto____0;
cljs$core$async$state_machine__51953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__51953__auto____1;
return cljs$core$async$state_machine__51953__auto__;
})()
;})(switch__51952__auto__,c__52042__auto___53946,out))
})();
var state__52044__auto__ = (function (){var statearr_53944 = f__52043__auto__.call(null);
(statearr_53944[(6)] = c__52042__auto___53946);

return statearr_53944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__52044__auto__);
});})(c__52042__auto___53946,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513003907613
