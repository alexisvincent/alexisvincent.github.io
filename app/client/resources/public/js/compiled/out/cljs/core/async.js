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
var G__56449 = arguments.length;
switch (G__56449) {
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
if(typeof cljs.core.async.t_cljs$core$async56450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56450 = (function (f,blockable,meta56451){
this.f = f;
this.blockable = blockable;
this.meta56451 = meta56451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56452,meta56451__$1){
var self__ = this;
var _56452__$1 = this;
return (new cljs.core.async.t_cljs$core$async56450(self__.f,self__.blockable,meta56451__$1));
});

cljs.core.async.t_cljs$core$async56450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56452){
var self__ = this;
var _56452__$1 = this;
return self__.meta56451;
});

cljs.core.async.t_cljs$core$async56450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async56450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async56450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56451","meta56451",-288820702,null)], null);
});

cljs.core.async.t_cljs$core$async56450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56450";

cljs.core.async.t_cljs$core$async56450.cljs$lang$ctorPrWriter = (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async56450");
});

cljs.core.async.__GT_t_cljs$core$async56450 = (function cljs$core$async$__GT_t_cljs$core$async56450(f__$1,blockable__$1,meta56451){
return (new cljs.core.async.t_cljs$core$async56450(f__$1,blockable__$1,meta56451));
});

}

return (new cljs.core.async.t_cljs$core$async56450(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56456 = arguments.length;
switch (G__56456) {
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
var G__56459 = arguments.length;
switch (G__56459) {
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
var G__56462 = arguments.length;
switch (G__56462) {
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
var val_56464 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_56464);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_56464,ret){
return (function (){
return fn1.call(null,val_56464);
});})(val_56464,ret))
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
var G__56466 = arguments.length;
switch (G__56466) {
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
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
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
var n__43665__auto___56468 = n;
var x_56469 = (0);
while(true){
if((x_56469 < n__43665__auto___56468)){
(a[x_56469] = (0));

var G__56470 = (x_56469 + (1));
x_56469 = G__56470;
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

var G__56471 = (i + (1));
i = G__56471;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async56472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56472 = (function (flag,meta56473){
this.flag = flag;
this.meta56473 = meta56473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_56474,meta56473__$1){
var self__ = this;
var _56474__$1 = this;
return (new cljs.core.async.t_cljs$core$async56472(self__.flag,meta56473__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async56472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_56474){
var self__ = this;
var _56474__$1 = this;
return self__.meta56473;
});})(flag))
;

cljs.core.async.t_cljs$core$async56472.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async56472.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async56472.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56473","meta56473",-1705459869,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async56472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56472";

cljs.core.async.t_cljs$core$async56472.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async56472");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async56472 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56472(flag__$1,meta56473){
return (new cljs.core.async.t_cljs$core$async56472(flag__$1,meta56473));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async56472(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async56475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56475 = (function (flag,cb,meta56476){
this.flag = flag;
this.cb = cb;
this.meta56476 = meta56476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56477,meta56476__$1){
var self__ = this;
var _56477__$1 = this;
return (new cljs.core.async.t_cljs$core$async56475(self__.flag,self__.cb,meta56476__$1));
});

cljs.core.async.t_cljs$core$async56475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56477){
var self__ = this;
var _56477__$1 = this;
return self__.meta56476;
});

cljs.core.async.t_cljs$core$async56475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async56475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async56475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async56475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56476","meta56476",2013961386,null)], null);
});

cljs.core.async.t_cljs$core$async56475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56475";

cljs.core.async.t_cljs$core$async56475.cljs$lang$ctorPrWriter = (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async56475");
});

cljs.core.async.__GT_t_cljs$core$async56475 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56475(flag__$1,cb__$1,meta56476){
return (new cljs.core.async.t_cljs$core$async56475(flag__$1,cb__$1,meta56476));
});

}

return (new cljs.core.async.t_cljs$core$async56475(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__56478_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56478_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56479_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56479_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41411__auto__ = wport;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return port;
}
})()], null));
} else {
var G__56480 = (i + (1));
i = G__56480;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41411__auto__ = ret;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__41384__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41384__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41384__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
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
var args__44096__auto__ = [];
var len__44089__auto___56486 = arguments.length;
var i__44090__auto___56487 = (0);
while(true){
if((i__44090__auto___56487 < len__44089__auto___56486)){
args__44096__auto__.push((arguments[i__44090__auto___56487]));

var G__56488 = (i__44090__auto___56487 + (1));
i__44090__auto___56487 = G__56488;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((1) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__44097__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56483){
var map__56484 = p__56483;
var map__56484__$1 = ((((!((map__56484 == null)))?((((map__56484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56484):map__56484);
var opts = map__56484__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56481){
var G__56482 = cljs.core.first.call(null,seq56481);
var seq56481__$1 = cljs.core.next.call(null,seq56481);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__56482,seq56481__$1);
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
var G__56490 = arguments.length;
switch (G__56490) {
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
var c__56389__auto___56536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___56536){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___56536){
return (function (state_56514){
var state_val_56515 = (state_56514[(1)]);
if((state_val_56515 === (7))){
var inst_56510 = (state_56514[(2)]);
var state_56514__$1 = state_56514;
var statearr_56516_56537 = state_56514__$1;
(statearr_56516_56537[(2)] = inst_56510);

(statearr_56516_56537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (1))){
var state_56514__$1 = state_56514;
var statearr_56517_56538 = state_56514__$1;
(statearr_56517_56538[(2)] = null);

(statearr_56517_56538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (4))){
var inst_56493 = (state_56514[(7)]);
var inst_56493__$1 = (state_56514[(2)]);
var inst_56494 = (inst_56493__$1 == null);
var state_56514__$1 = (function (){var statearr_56518 = state_56514;
(statearr_56518[(7)] = inst_56493__$1);

return statearr_56518;
})();
if(cljs.core.truth_(inst_56494)){
var statearr_56519_56539 = state_56514__$1;
(statearr_56519_56539[(1)] = (5));

} else {
var statearr_56520_56540 = state_56514__$1;
(statearr_56520_56540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (13))){
var state_56514__$1 = state_56514;
var statearr_56521_56541 = state_56514__$1;
(statearr_56521_56541[(2)] = null);

(statearr_56521_56541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (6))){
var inst_56493 = (state_56514[(7)]);
var state_56514__$1 = state_56514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56514__$1,(11),to,inst_56493);
} else {
if((state_val_56515 === (3))){
var inst_56512 = (state_56514[(2)]);
var state_56514__$1 = state_56514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56514__$1,inst_56512);
} else {
if((state_val_56515 === (12))){
var state_56514__$1 = state_56514;
var statearr_56522_56542 = state_56514__$1;
(statearr_56522_56542[(2)] = null);

(statearr_56522_56542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (2))){
var state_56514__$1 = state_56514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56514__$1,(4),from);
} else {
if((state_val_56515 === (11))){
var inst_56503 = (state_56514[(2)]);
var state_56514__$1 = state_56514;
if(cljs.core.truth_(inst_56503)){
var statearr_56523_56543 = state_56514__$1;
(statearr_56523_56543[(1)] = (12));

} else {
var statearr_56524_56544 = state_56514__$1;
(statearr_56524_56544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (9))){
var state_56514__$1 = state_56514;
var statearr_56525_56545 = state_56514__$1;
(statearr_56525_56545[(2)] = null);

(statearr_56525_56545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (5))){
var state_56514__$1 = state_56514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56526_56546 = state_56514__$1;
(statearr_56526_56546[(1)] = (8));

} else {
var statearr_56527_56547 = state_56514__$1;
(statearr_56527_56547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (14))){
var inst_56508 = (state_56514[(2)]);
var state_56514__$1 = state_56514;
var statearr_56528_56548 = state_56514__$1;
(statearr_56528_56548[(2)] = inst_56508);

(statearr_56528_56548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (10))){
var inst_56500 = (state_56514[(2)]);
var state_56514__$1 = state_56514;
var statearr_56529_56549 = state_56514__$1;
(statearr_56529_56549[(2)] = inst_56500);

(statearr_56529_56549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56515 === (8))){
var inst_56497 = cljs.core.async.close_BANG_.call(null,to);
var state_56514__$1 = state_56514;
var statearr_56530_56550 = state_56514__$1;
(statearr_56530_56550[(2)] = inst_56497);

(statearr_56530_56550[(1)] = (10));


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
});})(c__56389__auto___56536))
;
return ((function (switch__56299__auto__,c__56389__auto___56536){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_56531 = [null,null,null,null,null,null,null,null];
(statearr_56531[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_56531[(1)] = (1));

return statearr_56531;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_56514){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56532){if((e56532 instanceof Object)){
var ex__56303__auto__ = e56532;
var statearr_56533_56551 = state_56514;
(statearr_56533_56551[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56552 = state_56514;
state_56514 = G__56552;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_56514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_56514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___56536))
})();
var state__56391__auto__ = (function (){var statearr_56534 = f__56390__auto__.call(null);
(statearr_56534[(6)] = c__56389__auto___56536);

return statearr_56534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___56536))
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
return (function (p__56553){
var vec__56554 = p__56553;
var v = cljs.core.nth.call(null,vec__56554,(0),null);
var p = cljs.core.nth.call(null,vec__56554,(1),null);
var job = vec__56554;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__56389__auto___56725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___56725,res,vec__56554,v,p,job,jobs,results){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___56725,res,vec__56554,v,p,job,jobs,results){
return (function (state_56561){
var state_val_56562 = (state_56561[(1)]);
if((state_val_56562 === (1))){
var state_56561__$1 = state_56561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56561__$1,(2),res,v);
} else {
if((state_val_56562 === (2))){
var inst_56558 = (state_56561[(2)]);
var inst_56559 = cljs.core.async.close_BANG_.call(null,res);
var state_56561__$1 = (function (){var statearr_56563 = state_56561;
(statearr_56563[(7)] = inst_56558);

return statearr_56563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56561__$1,inst_56559);
} else {
return null;
}
}
});})(c__56389__auto___56725,res,vec__56554,v,p,job,jobs,results))
;
return ((function (switch__56299__auto__,c__56389__auto___56725,res,vec__56554,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0 = (function (){
var statearr_56564 = [null,null,null,null,null,null,null,null];
(statearr_56564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__);

(statearr_56564[(1)] = (1));

return statearr_56564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1 = (function (state_56561){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56565){if((e56565 instanceof Object)){
var ex__56303__auto__ = e56565;
var statearr_56566_56726 = state_56561;
(statearr_56566_56726[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56727 = state_56561;
state_56561 = G__56727;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = function(state_56561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1.call(this,state_56561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___56725,res,vec__56554,v,p,job,jobs,results))
})();
var state__56391__auto__ = (function (){var statearr_56567 = f__56390__auto__.call(null);
(statearr_56567[(6)] = c__56389__auto___56725);

return statearr_56567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___56725,res,vec__56554,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__56568){
var vec__56569 = p__56568;
var v = cljs.core.nth.call(null,vec__56569,(0),null);
var p = cljs.core.nth.call(null,vec__56569,(1),null);
var job = vec__56569;
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
var n__43665__auto___56728 = n;
var __56729 = (0);
while(true){
if((__56729 < n__43665__auto___56728)){
var G__56572_56730 = type;
var G__56572_56731__$1 = (((G__56572_56730 instanceof cljs.core.Keyword))?G__56572_56730.fqn:null);
switch (G__56572_56731__$1) {
case "compute":
var c__56389__auto___56733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__56729,c__56389__auto___56733,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (__56729,c__56389__auto___56733,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async){
return (function (state_56585){
var state_val_56586 = (state_56585[(1)]);
if((state_val_56586 === (1))){
var state_56585__$1 = state_56585;
var statearr_56587_56734 = state_56585__$1;
(statearr_56587_56734[(2)] = null);

(statearr_56587_56734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (2))){
var state_56585__$1 = state_56585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56585__$1,(4),jobs);
} else {
if((state_val_56586 === (3))){
var inst_56583 = (state_56585[(2)]);
var state_56585__$1 = state_56585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56585__$1,inst_56583);
} else {
if((state_val_56586 === (4))){
var inst_56575 = (state_56585[(2)]);
var inst_56576 = process.call(null,inst_56575);
var state_56585__$1 = state_56585;
if(cljs.core.truth_(inst_56576)){
var statearr_56588_56735 = state_56585__$1;
(statearr_56588_56735[(1)] = (5));

} else {
var statearr_56589_56736 = state_56585__$1;
(statearr_56589_56736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (5))){
var state_56585__$1 = state_56585;
var statearr_56590_56737 = state_56585__$1;
(statearr_56590_56737[(2)] = null);

(statearr_56590_56737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (6))){
var state_56585__$1 = state_56585;
var statearr_56591_56738 = state_56585__$1;
(statearr_56591_56738[(2)] = null);

(statearr_56591_56738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (7))){
var inst_56581 = (state_56585[(2)]);
var state_56585__$1 = state_56585;
var statearr_56592_56739 = state_56585__$1;
(statearr_56592_56739[(2)] = inst_56581);

(statearr_56592_56739[(1)] = (3));


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
});})(__56729,c__56389__auto___56733,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async))
;
return ((function (__56729,switch__56299__auto__,c__56389__auto___56733,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0 = (function (){
var statearr_56593 = [null,null,null,null,null,null,null];
(statearr_56593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__);

(statearr_56593[(1)] = (1));

return statearr_56593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1 = (function (state_56585){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56594){if((e56594 instanceof Object)){
var ex__56303__auto__ = e56594;
var statearr_56595_56740 = state_56585;
(statearr_56595_56740[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56741 = state_56585;
state_56585 = G__56741;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = function(state_56585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1.call(this,state_56585);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__;
})()
;})(__56729,switch__56299__auto__,c__56389__auto___56733,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async))
})();
var state__56391__auto__ = (function (){var statearr_56596 = f__56390__auto__.call(null);
(statearr_56596[(6)] = c__56389__auto___56733);

return statearr_56596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(__56729,c__56389__auto___56733,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async))
);


break;
case "async":
var c__56389__auto___56742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__56729,c__56389__auto___56742,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (__56729,c__56389__auto___56742,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async){
return (function (state_56609){
var state_val_56610 = (state_56609[(1)]);
if((state_val_56610 === (1))){
var state_56609__$1 = state_56609;
var statearr_56611_56743 = state_56609__$1;
(statearr_56611_56743[(2)] = null);

(statearr_56611_56743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56610 === (2))){
var state_56609__$1 = state_56609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56609__$1,(4),jobs);
} else {
if((state_val_56610 === (3))){
var inst_56607 = (state_56609[(2)]);
var state_56609__$1 = state_56609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56609__$1,inst_56607);
} else {
if((state_val_56610 === (4))){
var inst_56599 = (state_56609[(2)]);
var inst_56600 = async.call(null,inst_56599);
var state_56609__$1 = state_56609;
if(cljs.core.truth_(inst_56600)){
var statearr_56612_56744 = state_56609__$1;
(statearr_56612_56744[(1)] = (5));

} else {
var statearr_56613_56745 = state_56609__$1;
(statearr_56613_56745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56610 === (5))){
var state_56609__$1 = state_56609;
var statearr_56614_56746 = state_56609__$1;
(statearr_56614_56746[(2)] = null);

(statearr_56614_56746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56610 === (6))){
var state_56609__$1 = state_56609;
var statearr_56615_56747 = state_56609__$1;
(statearr_56615_56747[(2)] = null);

(statearr_56615_56747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56610 === (7))){
var inst_56605 = (state_56609[(2)]);
var state_56609__$1 = state_56609;
var statearr_56616_56748 = state_56609__$1;
(statearr_56616_56748[(2)] = inst_56605);

(statearr_56616_56748[(1)] = (3));


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
});})(__56729,c__56389__auto___56742,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async))
;
return ((function (__56729,switch__56299__auto__,c__56389__auto___56742,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0 = (function (){
var statearr_56617 = [null,null,null,null,null,null,null];
(statearr_56617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__);

(statearr_56617[(1)] = (1));

return statearr_56617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1 = (function (state_56609){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56618){if((e56618 instanceof Object)){
var ex__56303__auto__ = e56618;
var statearr_56619_56749 = state_56609;
(statearr_56619_56749[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56750 = state_56609;
state_56609 = G__56750;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = function(state_56609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1.call(this,state_56609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__;
})()
;})(__56729,switch__56299__auto__,c__56389__auto___56742,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async))
})();
var state__56391__auto__ = (function (){var statearr_56620 = f__56390__auto__.call(null);
(statearr_56620[(6)] = c__56389__auto___56742);

return statearr_56620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(__56729,c__56389__auto___56742,G__56572_56730,G__56572_56731__$1,n__43665__auto___56728,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56572_56731__$1)].join('')));

}

var G__56751 = (__56729 + (1));
__56729 = G__56751;
continue;
} else {
}
break;
}

var c__56389__auto___56752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___56752,jobs,results,process,async){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___56752,jobs,results,process,async){
return (function (state_56642){
var state_val_56643 = (state_56642[(1)]);
if((state_val_56643 === (1))){
var state_56642__$1 = state_56642;
var statearr_56644_56753 = state_56642__$1;
(statearr_56644_56753[(2)] = null);

(statearr_56644_56753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56643 === (2))){
var state_56642__$1 = state_56642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56642__$1,(4),from);
} else {
if((state_val_56643 === (3))){
var inst_56640 = (state_56642[(2)]);
var state_56642__$1 = state_56642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56642__$1,inst_56640);
} else {
if((state_val_56643 === (4))){
var inst_56623 = (state_56642[(7)]);
var inst_56623__$1 = (state_56642[(2)]);
var inst_56624 = (inst_56623__$1 == null);
var state_56642__$1 = (function (){var statearr_56645 = state_56642;
(statearr_56645[(7)] = inst_56623__$1);

return statearr_56645;
})();
if(cljs.core.truth_(inst_56624)){
var statearr_56646_56754 = state_56642__$1;
(statearr_56646_56754[(1)] = (5));

} else {
var statearr_56647_56755 = state_56642__$1;
(statearr_56647_56755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56643 === (5))){
var inst_56626 = cljs.core.async.close_BANG_.call(null,jobs);
var state_56642__$1 = state_56642;
var statearr_56648_56756 = state_56642__$1;
(statearr_56648_56756[(2)] = inst_56626);

(statearr_56648_56756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56643 === (6))){
var inst_56623 = (state_56642[(7)]);
var inst_56628 = (state_56642[(8)]);
var inst_56628__$1 = cljs.core.async.chan.call(null,(1));
var inst_56629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56630 = [inst_56623,inst_56628__$1];
var inst_56631 = (new cljs.core.PersistentVector(null,2,(5),inst_56629,inst_56630,null));
var state_56642__$1 = (function (){var statearr_56649 = state_56642;
(statearr_56649[(8)] = inst_56628__$1);

return statearr_56649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56642__$1,(8),jobs,inst_56631);
} else {
if((state_val_56643 === (7))){
var inst_56638 = (state_56642[(2)]);
var state_56642__$1 = state_56642;
var statearr_56650_56757 = state_56642__$1;
(statearr_56650_56757[(2)] = inst_56638);

(statearr_56650_56757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56643 === (8))){
var inst_56628 = (state_56642[(8)]);
var inst_56633 = (state_56642[(2)]);
var state_56642__$1 = (function (){var statearr_56651 = state_56642;
(statearr_56651[(9)] = inst_56633);

return statearr_56651;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56642__$1,(9),results,inst_56628);
} else {
if((state_val_56643 === (9))){
var inst_56635 = (state_56642[(2)]);
var state_56642__$1 = (function (){var statearr_56652 = state_56642;
(statearr_56652[(10)] = inst_56635);

return statearr_56652;
})();
var statearr_56653_56758 = state_56642__$1;
(statearr_56653_56758[(2)] = null);

(statearr_56653_56758[(1)] = (2));


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
});})(c__56389__auto___56752,jobs,results,process,async))
;
return ((function (switch__56299__auto__,c__56389__auto___56752,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0 = (function (){
var statearr_56654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__);

(statearr_56654[(1)] = (1));

return statearr_56654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1 = (function (state_56642){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56655){if((e56655 instanceof Object)){
var ex__56303__auto__ = e56655;
var statearr_56656_56759 = state_56642;
(statearr_56656_56759[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56760 = state_56642;
state_56642 = G__56760;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = function(state_56642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1.call(this,state_56642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___56752,jobs,results,process,async))
})();
var state__56391__auto__ = (function (){var statearr_56657 = f__56390__auto__.call(null);
(statearr_56657[(6)] = c__56389__auto___56752);

return statearr_56657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___56752,jobs,results,process,async))
);


var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__,jobs,results,process,async){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__,jobs,results,process,async){
return (function (state_56695){
var state_val_56696 = (state_56695[(1)]);
if((state_val_56696 === (7))){
var inst_56691 = (state_56695[(2)]);
var state_56695__$1 = state_56695;
var statearr_56697_56761 = state_56695__$1;
(statearr_56697_56761[(2)] = inst_56691);

(statearr_56697_56761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (20))){
var state_56695__$1 = state_56695;
var statearr_56698_56762 = state_56695__$1;
(statearr_56698_56762[(2)] = null);

(statearr_56698_56762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (1))){
var state_56695__$1 = state_56695;
var statearr_56699_56763 = state_56695__$1;
(statearr_56699_56763[(2)] = null);

(statearr_56699_56763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (4))){
var inst_56660 = (state_56695[(7)]);
var inst_56660__$1 = (state_56695[(2)]);
var inst_56661 = (inst_56660__$1 == null);
var state_56695__$1 = (function (){var statearr_56700 = state_56695;
(statearr_56700[(7)] = inst_56660__$1);

return statearr_56700;
})();
if(cljs.core.truth_(inst_56661)){
var statearr_56701_56764 = state_56695__$1;
(statearr_56701_56764[(1)] = (5));

} else {
var statearr_56702_56765 = state_56695__$1;
(statearr_56702_56765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (15))){
var inst_56673 = (state_56695[(8)]);
var state_56695__$1 = state_56695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56695__$1,(18),to,inst_56673);
} else {
if((state_val_56696 === (21))){
var inst_56686 = (state_56695[(2)]);
var state_56695__$1 = state_56695;
var statearr_56703_56766 = state_56695__$1;
(statearr_56703_56766[(2)] = inst_56686);

(statearr_56703_56766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (13))){
var inst_56688 = (state_56695[(2)]);
var state_56695__$1 = (function (){var statearr_56704 = state_56695;
(statearr_56704[(9)] = inst_56688);

return statearr_56704;
})();
var statearr_56705_56767 = state_56695__$1;
(statearr_56705_56767[(2)] = null);

(statearr_56705_56767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (6))){
var inst_56660 = (state_56695[(7)]);
var state_56695__$1 = state_56695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56695__$1,(11),inst_56660);
} else {
if((state_val_56696 === (17))){
var inst_56681 = (state_56695[(2)]);
var state_56695__$1 = state_56695;
if(cljs.core.truth_(inst_56681)){
var statearr_56706_56768 = state_56695__$1;
(statearr_56706_56768[(1)] = (19));

} else {
var statearr_56707_56769 = state_56695__$1;
(statearr_56707_56769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (3))){
var inst_56693 = (state_56695[(2)]);
var state_56695__$1 = state_56695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56695__$1,inst_56693);
} else {
if((state_val_56696 === (12))){
var inst_56670 = (state_56695[(10)]);
var state_56695__$1 = state_56695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56695__$1,(14),inst_56670);
} else {
if((state_val_56696 === (2))){
var state_56695__$1 = state_56695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56695__$1,(4),results);
} else {
if((state_val_56696 === (19))){
var state_56695__$1 = state_56695;
var statearr_56708_56770 = state_56695__$1;
(statearr_56708_56770[(2)] = null);

(statearr_56708_56770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (11))){
var inst_56670 = (state_56695[(2)]);
var state_56695__$1 = (function (){var statearr_56709 = state_56695;
(statearr_56709[(10)] = inst_56670);

return statearr_56709;
})();
var statearr_56710_56771 = state_56695__$1;
(statearr_56710_56771[(2)] = null);

(statearr_56710_56771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (9))){
var state_56695__$1 = state_56695;
var statearr_56711_56772 = state_56695__$1;
(statearr_56711_56772[(2)] = null);

(statearr_56711_56772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (5))){
var state_56695__$1 = state_56695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56712_56773 = state_56695__$1;
(statearr_56712_56773[(1)] = (8));

} else {
var statearr_56713_56774 = state_56695__$1;
(statearr_56713_56774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (14))){
var inst_56673 = (state_56695[(8)]);
var inst_56675 = (state_56695[(11)]);
var inst_56673__$1 = (state_56695[(2)]);
var inst_56674 = (inst_56673__$1 == null);
var inst_56675__$1 = cljs.core.not.call(null,inst_56674);
var state_56695__$1 = (function (){var statearr_56714 = state_56695;
(statearr_56714[(8)] = inst_56673__$1);

(statearr_56714[(11)] = inst_56675__$1);

return statearr_56714;
})();
if(inst_56675__$1){
var statearr_56715_56775 = state_56695__$1;
(statearr_56715_56775[(1)] = (15));

} else {
var statearr_56716_56776 = state_56695__$1;
(statearr_56716_56776[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (16))){
var inst_56675 = (state_56695[(11)]);
var state_56695__$1 = state_56695;
var statearr_56717_56777 = state_56695__$1;
(statearr_56717_56777[(2)] = inst_56675);

(statearr_56717_56777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (10))){
var inst_56667 = (state_56695[(2)]);
var state_56695__$1 = state_56695;
var statearr_56718_56778 = state_56695__$1;
(statearr_56718_56778[(2)] = inst_56667);

(statearr_56718_56778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (18))){
var inst_56678 = (state_56695[(2)]);
var state_56695__$1 = state_56695;
var statearr_56719_56779 = state_56695__$1;
(statearr_56719_56779[(2)] = inst_56678);

(statearr_56719_56779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56696 === (8))){
var inst_56664 = cljs.core.async.close_BANG_.call(null,to);
var state_56695__$1 = state_56695;
var statearr_56720_56780 = state_56695__$1;
(statearr_56720_56780[(2)] = inst_56664);

(statearr_56720_56780[(1)] = (10));


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
});})(c__56389__auto__,jobs,results,process,async))
;
return ((function (switch__56299__auto__,c__56389__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0 = (function (){
var statearr_56721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__);

(statearr_56721[(1)] = (1));

return statearr_56721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1 = (function (state_56695){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56722){if((e56722 instanceof Object)){
var ex__56303__auto__ = e56722;
var statearr_56723_56781 = state_56695;
(statearr_56723_56781[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56782 = state_56695;
state_56695 = G__56782;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__ = function(state_56695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1.call(this,state_56695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56300__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__,jobs,results,process,async))
})();
var state__56391__auto__ = (function (){var statearr_56724 = f__56390__auto__.call(null);
(statearr_56724[(6)] = c__56389__auto__);

return statearr_56724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__,jobs,results,process,async))
);

return c__56389__auto__;
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
var G__56784 = arguments.length;
switch (G__56784) {
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
var G__56787 = arguments.length;
switch (G__56787) {
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
var G__56790 = arguments.length;
switch (G__56790) {
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
var c__56389__auto___56839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___56839,tc,fc){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___56839,tc,fc){
return (function (state_56816){
var state_val_56817 = (state_56816[(1)]);
if((state_val_56817 === (7))){
var inst_56812 = (state_56816[(2)]);
var state_56816__$1 = state_56816;
var statearr_56818_56840 = state_56816__$1;
(statearr_56818_56840[(2)] = inst_56812);

(statearr_56818_56840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (1))){
var state_56816__$1 = state_56816;
var statearr_56819_56841 = state_56816__$1;
(statearr_56819_56841[(2)] = null);

(statearr_56819_56841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (4))){
var inst_56793 = (state_56816[(7)]);
var inst_56793__$1 = (state_56816[(2)]);
var inst_56794 = (inst_56793__$1 == null);
var state_56816__$1 = (function (){var statearr_56820 = state_56816;
(statearr_56820[(7)] = inst_56793__$1);

return statearr_56820;
})();
if(cljs.core.truth_(inst_56794)){
var statearr_56821_56842 = state_56816__$1;
(statearr_56821_56842[(1)] = (5));

} else {
var statearr_56822_56843 = state_56816__$1;
(statearr_56822_56843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (13))){
var state_56816__$1 = state_56816;
var statearr_56823_56844 = state_56816__$1;
(statearr_56823_56844[(2)] = null);

(statearr_56823_56844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (6))){
var inst_56793 = (state_56816[(7)]);
var inst_56799 = p.call(null,inst_56793);
var state_56816__$1 = state_56816;
if(cljs.core.truth_(inst_56799)){
var statearr_56824_56845 = state_56816__$1;
(statearr_56824_56845[(1)] = (9));

} else {
var statearr_56825_56846 = state_56816__$1;
(statearr_56825_56846[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (3))){
var inst_56814 = (state_56816[(2)]);
var state_56816__$1 = state_56816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56816__$1,inst_56814);
} else {
if((state_val_56817 === (12))){
var state_56816__$1 = state_56816;
var statearr_56826_56847 = state_56816__$1;
(statearr_56826_56847[(2)] = null);

(statearr_56826_56847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (2))){
var state_56816__$1 = state_56816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56816__$1,(4),ch);
} else {
if((state_val_56817 === (11))){
var inst_56793 = (state_56816[(7)]);
var inst_56803 = (state_56816[(2)]);
var state_56816__$1 = state_56816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56816__$1,(8),inst_56803,inst_56793);
} else {
if((state_val_56817 === (9))){
var state_56816__$1 = state_56816;
var statearr_56827_56848 = state_56816__$1;
(statearr_56827_56848[(2)] = tc);

(statearr_56827_56848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (5))){
var inst_56796 = cljs.core.async.close_BANG_.call(null,tc);
var inst_56797 = cljs.core.async.close_BANG_.call(null,fc);
var state_56816__$1 = (function (){var statearr_56828 = state_56816;
(statearr_56828[(8)] = inst_56796);

return statearr_56828;
})();
var statearr_56829_56849 = state_56816__$1;
(statearr_56829_56849[(2)] = inst_56797);

(statearr_56829_56849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (14))){
var inst_56810 = (state_56816[(2)]);
var state_56816__$1 = state_56816;
var statearr_56830_56850 = state_56816__$1;
(statearr_56830_56850[(2)] = inst_56810);

(statearr_56830_56850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (10))){
var state_56816__$1 = state_56816;
var statearr_56831_56851 = state_56816__$1;
(statearr_56831_56851[(2)] = fc);

(statearr_56831_56851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56817 === (8))){
var inst_56805 = (state_56816[(2)]);
var state_56816__$1 = state_56816;
if(cljs.core.truth_(inst_56805)){
var statearr_56832_56852 = state_56816__$1;
(statearr_56832_56852[(1)] = (12));

} else {
var statearr_56833_56853 = state_56816__$1;
(statearr_56833_56853[(1)] = (13));

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
});})(c__56389__auto___56839,tc,fc))
;
return ((function (switch__56299__auto__,c__56389__auto___56839,tc,fc){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_56834 = [null,null,null,null,null,null,null,null,null];
(statearr_56834[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_56834[(1)] = (1));

return statearr_56834;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_56816){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56835){if((e56835 instanceof Object)){
var ex__56303__auto__ = e56835;
var statearr_56836_56854 = state_56816;
(statearr_56836_56854[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56855 = state_56816;
state_56816 = G__56855;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_56816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_56816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___56839,tc,fc))
})();
var state__56391__auto__ = (function (){var statearr_56837 = f__56390__auto__.call(null);
(statearr_56837[(6)] = c__56389__auto___56839);

return statearr_56837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___56839,tc,fc))
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
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__){
return (function (state_56876){
var state_val_56877 = (state_56876[(1)]);
if((state_val_56877 === (7))){
var inst_56872 = (state_56876[(2)]);
var state_56876__$1 = state_56876;
var statearr_56878_56896 = state_56876__$1;
(statearr_56878_56896[(2)] = inst_56872);

(statearr_56878_56896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (1))){
var inst_56856 = init;
var state_56876__$1 = (function (){var statearr_56879 = state_56876;
(statearr_56879[(7)] = inst_56856);

return statearr_56879;
})();
var statearr_56880_56897 = state_56876__$1;
(statearr_56880_56897[(2)] = null);

(statearr_56880_56897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (4))){
var inst_56859 = (state_56876[(8)]);
var inst_56859__$1 = (state_56876[(2)]);
var inst_56860 = (inst_56859__$1 == null);
var state_56876__$1 = (function (){var statearr_56881 = state_56876;
(statearr_56881[(8)] = inst_56859__$1);

return statearr_56881;
})();
if(cljs.core.truth_(inst_56860)){
var statearr_56882_56898 = state_56876__$1;
(statearr_56882_56898[(1)] = (5));

} else {
var statearr_56883_56899 = state_56876__$1;
(statearr_56883_56899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (6))){
var inst_56856 = (state_56876[(7)]);
var inst_56863 = (state_56876[(9)]);
var inst_56859 = (state_56876[(8)]);
var inst_56863__$1 = f.call(null,inst_56856,inst_56859);
var inst_56864 = cljs.core.reduced_QMARK_.call(null,inst_56863__$1);
var state_56876__$1 = (function (){var statearr_56884 = state_56876;
(statearr_56884[(9)] = inst_56863__$1);

return statearr_56884;
})();
if(inst_56864){
var statearr_56885_56900 = state_56876__$1;
(statearr_56885_56900[(1)] = (8));

} else {
var statearr_56886_56901 = state_56876__$1;
(statearr_56886_56901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (3))){
var inst_56874 = (state_56876[(2)]);
var state_56876__$1 = state_56876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56876__$1,inst_56874);
} else {
if((state_val_56877 === (2))){
var state_56876__$1 = state_56876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56876__$1,(4),ch);
} else {
if((state_val_56877 === (9))){
var inst_56863 = (state_56876[(9)]);
var inst_56856 = inst_56863;
var state_56876__$1 = (function (){var statearr_56887 = state_56876;
(statearr_56887[(7)] = inst_56856);

return statearr_56887;
})();
var statearr_56888_56902 = state_56876__$1;
(statearr_56888_56902[(2)] = null);

(statearr_56888_56902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (5))){
var inst_56856 = (state_56876[(7)]);
var state_56876__$1 = state_56876;
var statearr_56889_56903 = state_56876__$1;
(statearr_56889_56903[(2)] = inst_56856);

(statearr_56889_56903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (10))){
var inst_56870 = (state_56876[(2)]);
var state_56876__$1 = state_56876;
var statearr_56890_56904 = state_56876__$1;
(statearr_56890_56904[(2)] = inst_56870);

(statearr_56890_56904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56877 === (8))){
var inst_56863 = (state_56876[(9)]);
var inst_56866 = cljs.core.deref.call(null,inst_56863);
var state_56876__$1 = state_56876;
var statearr_56891_56905 = state_56876__$1;
(statearr_56891_56905[(2)] = inst_56866);

(statearr_56891_56905[(1)] = (10));


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
});})(c__56389__auto__))
;
return ((function (switch__56299__auto__,c__56389__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__56300__auto__ = null;
var cljs$core$async$reduce_$_state_machine__56300__auto____0 = (function (){
var statearr_56892 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56892[(0)] = cljs$core$async$reduce_$_state_machine__56300__auto__);

(statearr_56892[(1)] = (1));

return statearr_56892;
});
var cljs$core$async$reduce_$_state_machine__56300__auto____1 = (function (state_56876){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56893){if((e56893 instanceof Object)){
var ex__56303__auto__ = e56893;
var statearr_56894_56906 = state_56876;
(statearr_56894_56906[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56907 = state_56876;
state_56876 = G__56907;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__56300__auto__ = function(state_56876){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__56300__auto____1.call(this,state_56876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__56300__auto____0;
cljs$core$async$reduce_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__56300__auto____1;
return cljs$core$async$reduce_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__))
})();
var state__56391__auto__ = (function (){var statearr_56895 = f__56390__auto__.call(null);
(statearr_56895[(6)] = c__56389__auto__);

return statearr_56895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__))
);

return c__56389__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__,f__$1){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__,f__$1){
return (function (state_56913){
var state_val_56914 = (state_56913[(1)]);
if((state_val_56914 === (1))){
var inst_56908 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_56913__$1 = state_56913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56913__$1,(2),inst_56908);
} else {
if((state_val_56914 === (2))){
var inst_56910 = (state_56913[(2)]);
var inst_56911 = f__$1.call(null,inst_56910);
var state_56913__$1 = state_56913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56913__$1,inst_56911);
} else {
return null;
}
}
});})(c__56389__auto__,f__$1))
;
return ((function (switch__56299__auto__,c__56389__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__56300__auto__ = null;
var cljs$core$async$transduce_$_state_machine__56300__auto____0 = (function (){
var statearr_56915 = [null,null,null,null,null,null,null];
(statearr_56915[(0)] = cljs$core$async$transduce_$_state_machine__56300__auto__);

(statearr_56915[(1)] = (1));

return statearr_56915;
});
var cljs$core$async$transduce_$_state_machine__56300__auto____1 = (function (state_56913){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56916){if((e56916 instanceof Object)){
var ex__56303__auto__ = e56916;
var statearr_56917_56919 = state_56913;
(statearr_56917_56919[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56920 = state_56913;
state_56913 = G__56920;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__56300__auto__ = function(state_56913){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__56300__auto____1.call(this,state_56913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__56300__auto____0;
cljs$core$async$transduce_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__56300__auto____1;
return cljs$core$async$transduce_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__,f__$1))
})();
var state__56391__auto__ = (function (){var statearr_56918 = f__56390__auto__.call(null);
(statearr_56918[(6)] = c__56389__auto__);

return statearr_56918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__,f__$1))
);

return c__56389__auto__;
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
var G__56922 = arguments.length;
switch (G__56922) {
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
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__){
return (function (state_56947){
var state_val_56948 = (state_56947[(1)]);
if((state_val_56948 === (7))){
var inst_56929 = (state_56947[(2)]);
var state_56947__$1 = state_56947;
var statearr_56949_56970 = state_56947__$1;
(statearr_56949_56970[(2)] = inst_56929);

(statearr_56949_56970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (1))){
var inst_56923 = cljs.core.seq.call(null,coll);
var inst_56924 = inst_56923;
var state_56947__$1 = (function (){var statearr_56950 = state_56947;
(statearr_56950[(7)] = inst_56924);

return statearr_56950;
})();
var statearr_56951_56971 = state_56947__$1;
(statearr_56951_56971[(2)] = null);

(statearr_56951_56971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (4))){
var inst_56924 = (state_56947[(7)]);
var inst_56927 = cljs.core.first.call(null,inst_56924);
var state_56947__$1 = state_56947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56947__$1,(7),ch,inst_56927);
} else {
if((state_val_56948 === (13))){
var inst_56941 = (state_56947[(2)]);
var state_56947__$1 = state_56947;
var statearr_56952_56972 = state_56947__$1;
(statearr_56952_56972[(2)] = inst_56941);

(statearr_56952_56972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (6))){
var inst_56932 = (state_56947[(2)]);
var state_56947__$1 = state_56947;
if(cljs.core.truth_(inst_56932)){
var statearr_56953_56973 = state_56947__$1;
(statearr_56953_56973[(1)] = (8));

} else {
var statearr_56954_56974 = state_56947__$1;
(statearr_56954_56974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (3))){
var inst_56945 = (state_56947[(2)]);
var state_56947__$1 = state_56947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56947__$1,inst_56945);
} else {
if((state_val_56948 === (12))){
var state_56947__$1 = state_56947;
var statearr_56955_56975 = state_56947__$1;
(statearr_56955_56975[(2)] = null);

(statearr_56955_56975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (2))){
var inst_56924 = (state_56947[(7)]);
var state_56947__$1 = state_56947;
if(cljs.core.truth_(inst_56924)){
var statearr_56956_56976 = state_56947__$1;
(statearr_56956_56976[(1)] = (4));

} else {
var statearr_56957_56977 = state_56947__$1;
(statearr_56957_56977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (11))){
var inst_56938 = cljs.core.async.close_BANG_.call(null,ch);
var state_56947__$1 = state_56947;
var statearr_56958_56978 = state_56947__$1;
(statearr_56958_56978[(2)] = inst_56938);

(statearr_56958_56978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (9))){
var state_56947__$1 = state_56947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56959_56979 = state_56947__$1;
(statearr_56959_56979[(1)] = (11));

} else {
var statearr_56960_56980 = state_56947__$1;
(statearr_56960_56980[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (5))){
var inst_56924 = (state_56947[(7)]);
var state_56947__$1 = state_56947;
var statearr_56961_56981 = state_56947__$1;
(statearr_56961_56981[(2)] = inst_56924);

(statearr_56961_56981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (10))){
var inst_56943 = (state_56947[(2)]);
var state_56947__$1 = state_56947;
var statearr_56962_56982 = state_56947__$1;
(statearr_56962_56982[(2)] = inst_56943);

(statearr_56962_56982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56948 === (8))){
var inst_56924 = (state_56947[(7)]);
var inst_56934 = cljs.core.next.call(null,inst_56924);
var inst_56924__$1 = inst_56934;
var state_56947__$1 = (function (){var statearr_56963 = state_56947;
(statearr_56963[(7)] = inst_56924__$1);

return statearr_56963;
})();
var statearr_56964_56983 = state_56947__$1;
(statearr_56964_56983[(2)] = null);

(statearr_56964_56983[(1)] = (2));


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
});})(c__56389__auto__))
;
return ((function (switch__56299__auto__,c__56389__auto__){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_56965 = [null,null,null,null,null,null,null,null];
(statearr_56965[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_56965[(1)] = (1));

return statearr_56965;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_56947){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_56947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e56966){if((e56966 instanceof Object)){
var ex__56303__auto__ = e56966;
var statearr_56967_56984 = state_56947;
(statearr_56967_56984[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56985 = state_56947;
state_56947 = G__56985;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_56947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_56947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__))
})();
var state__56391__auto__ = (function (){var statearr_56968 = f__56390__auto__.call(null);
(statearr_56968[(6)] = c__56389__auto__);

return statearr_56968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__))
);

return c__56389__auto__;
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
var x__43049__auto__ = (((_ == null))?null:_);
var m__43050__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,_);
} else {
var m__43050__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,_);
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
var x__43049__auto__ = (((m == null))?null:m);
var m__43050__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__43050__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__43049__auto__ = (((m == null))?null:m);
var m__43050__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,m,ch);
} else {
var m__43050__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,m,ch);
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
var x__43049__auto__ = (((m == null))?null:m);
var m__43050__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,m);
} else {
var m__43050__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async56986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56986 = (function (ch,cs,meta56987){
this.ch = ch;
this.cs = cs;
this.meta56987 = meta56987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async56986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_56988,meta56987__$1){
var self__ = this;
var _56988__$1 = this;
return (new cljs.core.async.t_cljs$core$async56986(self__.ch,self__.cs,meta56987__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async56986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_56988){
var self__ = this;
var _56988__$1 = this;
return self__.meta56987;
});})(cs))
;

cljs.core.async.t_cljs$core$async56986.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56986.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async56986.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async56986.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56986.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56986.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async56986.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56987","meta56987",-1900688659,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async56986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async56986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56986";

cljs.core.async.t_cljs$core$async56986.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async56986");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async56986 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async56986(ch__$1,cs__$1,meta56987){
return (new cljs.core.async.t_cljs$core$async56986(ch__$1,cs__$1,meta56987));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async56986(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__56389__auto___57208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___57208,cs,m,dchan,dctr,done){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___57208,cs,m,dchan,dctr,done){
return (function (state_57123){
var state_val_57124 = (state_57123[(1)]);
if((state_val_57124 === (7))){
var inst_57119 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57125_57209 = state_57123__$1;
(statearr_57125_57209[(2)] = inst_57119);

(statearr_57125_57209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (20))){
var inst_57022 = (state_57123[(7)]);
var inst_57034 = cljs.core.first.call(null,inst_57022);
var inst_57035 = cljs.core.nth.call(null,inst_57034,(0),null);
var inst_57036 = cljs.core.nth.call(null,inst_57034,(1),null);
var state_57123__$1 = (function (){var statearr_57126 = state_57123;
(statearr_57126[(8)] = inst_57035);

return statearr_57126;
})();
if(cljs.core.truth_(inst_57036)){
var statearr_57127_57210 = state_57123__$1;
(statearr_57127_57210[(1)] = (22));

} else {
var statearr_57128_57211 = state_57123__$1;
(statearr_57128_57211[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (27))){
var inst_57064 = (state_57123[(9)]);
var inst_57071 = (state_57123[(10)]);
var inst_56991 = (state_57123[(11)]);
var inst_57066 = (state_57123[(12)]);
var inst_57071__$1 = cljs.core._nth.call(null,inst_57064,inst_57066);
var inst_57072 = cljs.core.async.put_BANG_.call(null,inst_57071__$1,inst_56991,done);
var state_57123__$1 = (function (){var statearr_57129 = state_57123;
(statearr_57129[(10)] = inst_57071__$1);

return statearr_57129;
})();
if(cljs.core.truth_(inst_57072)){
var statearr_57130_57212 = state_57123__$1;
(statearr_57130_57212[(1)] = (30));

} else {
var statearr_57131_57213 = state_57123__$1;
(statearr_57131_57213[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (1))){
var state_57123__$1 = state_57123;
var statearr_57132_57214 = state_57123__$1;
(statearr_57132_57214[(2)] = null);

(statearr_57132_57214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (24))){
var inst_57022 = (state_57123[(7)]);
var inst_57041 = (state_57123[(2)]);
var inst_57042 = cljs.core.next.call(null,inst_57022);
var inst_57000 = inst_57042;
var inst_57001 = null;
var inst_57002 = (0);
var inst_57003 = (0);
var state_57123__$1 = (function (){var statearr_57133 = state_57123;
(statearr_57133[(13)] = inst_57041);

(statearr_57133[(14)] = inst_57002);

(statearr_57133[(15)] = inst_57003);

(statearr_57133[(16)] = inst_57000);

(statearr_57133[(17)] = inst_57001);

return statearr_57133;
})();
var statearr_57134_57215 = state_57123__$1;
(statearr_57134_57215[(2)] = null);

(statearr_57134_57215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (39))){
var state_57123__$1 = state_57123;
var statearr_57138_57216 = state_57123__$1;
(statearr_57138_57216[(2)] = null);

(statearr_57138_57216[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (4))){
var inst_56991 = (state_57123[(11)]);
var inst_56991__$1 = (state_57123[(2)]);
var inst_56992 = (inst_56991__$1 == null);
var state_57123__$1 = (function (){var statearr_57139 = state_57123;
(statearr_57139[(11)] = inst_56991__$1);

return statearr_57139;
})();
if(cljs.core.truth_(inst_56992)){
var statearr_57140_57217 = state_57123__$1;
(statearr_57140_57217[(1)] = (5));

} else {
var statearr_57141_57218 = state_57123__$1;
(statearr_57141_57218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (15))){
var inst_57002 = (state_57123[(14)]);
var inst_57003 = (state_57123[(15)]);
var inst_57000 = (state_57123[(16)]);
var inst_57001 = (state_57123[(17)]);
var inst_57018 = (state_57123[(2)]);
var inst_57019 = (inst_57003 + (1));
var tmp57135 = inst_57002;
var tmp57136 = inst_57000;
var tmp57137 = inst_57001;
var inst_57000__$1 = tmp57136;
var inst_57001__$1 = tmp57137;
var inst_57002__$1 = tmp57135;
var inst_57003__$1 = inst_57019;
var state_57123__$1 = (function (){var statearr_57142 = state_57123;
(statearr_57142[(14)] = inst_57002__$1);

(statearr_57142[(15)] = inst_57003__$1);

(statearr_57142[(16)] = inst_57000__$1);

(statearr_57142[(17)] = inst_57001__$1);

(statearr_57142[(18)] = inst_57018);

return statearr_57142;
})();
var statearr_57143_57219 = state_57123__$1;
(statearr_57143_57219[(2)] = null);

(statearr_57143_57219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (21))){
var inst_57045 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57147_57220 = state_57123__$1;
(statearr_57147_57220[(2)] = inst_57045);

(statearr_57147_57220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (31))){
var inst_57071 = (state_57123[(10)]);
var inst_57075 = done.call(null,null);
var inst_57076 = cljs.core.async.untap_STAR_.call(null,m,inst_57071);
var state_57123__$1 = (function (){var statearr_57148 = state_57123;
(statearr_57148[(19)] = inst_57075);

return statearr_57148;
})();
var statearr_57149_57221 = state_57123__$1;
(statearr_57149_57221[(2)] = inst_57076);

(statearr_57149_57221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (32))){
var inst_57064 = (state_57123[(9)]);
var inst_57065 = (state_57123[(20)]);
var inst_57063 = (state_57123[(21)]);
var inst_57066 = (state_57123[(12)]);
var inst_57078 = (state_57123[(2)]);
var inst_57079 = (inst_57066 + (1));
var tmp57144 = inst_57064;
var tmp57145 = inst_57065;
var tmp57146 = inst_57063;
var inst_57063__$1 = tmp57146;
var inst_57064__$1 = tmp57144;
var inst_57065__$1 = tmp57145;
var inst_57066__$1 = inst_57079;
var state_57123__$1 = (function (){var statearr_57150 = state_57123;
(statearr_57150[(9)] = inst_57064__$1);

(statearr_57150[(22)] = inst_57078);

(statearr_57150[(20)] = inst_57065__$1);

(statearr_57150[(21)] = inst_57063__$1);

(statearr_57150[(12)] = inst_57066__$1);

return statearr_57150;
})();
var statearr_57151_57222 = state_57123__$1;
(statearr_57151_57222[(2)] = null);

(statearr_57151_57222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (40))){
var inst_57091 = (state_57123[(23)]);
var inst_57095 = done.call(null,null);
var inst_57096 = cljs.core.async.untap_STAR_.call(null,m,inst_57091);
var state_57123__$1 = (function (){var statearr_57152 = state_57123;
(statearr_57152[(24)] = inst_57095);

return statearr_57152;
})();
var statearr_57153_57223 = state_57123__$1;
(statearr_57153_57223[(2)] = inst_57096);

(statearr_57153_57223[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (33))){
var inst_57082 = (state_57123[(25)]);
var inst_57084 = cljs.core.chunked_seq_QMARK_.call(null,inst_57082);
var state_57123__$1 = state_57123;
if(inst_57084){
var statearr_57154_57224 = state_57123__$1;
(statearr_57154_57224[(1)] = (36));

} else {
var statearr_57155_57225 = state_57123__$1;
(statearr_57155_57225[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (13))){
var inst_57012 = (state_57123[(26)]);
var inst_57015 = cljs.core.async.close_BANG_.call(null,inst_57012);
var state_57123__$1 = state_57123;
var statearr_57156_57226 = state_57123__$1;
(statearr_57156_57226[(2)] = inst_57015);

(statearr_57156_57226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (22))){
var inst_57035 = (state_57123[(8)]);
var inst_57038 = cljs.core.async.close_BANG_.call(null,inst_57035);
var state_57123__$1 = state_57123;
var statearr_57157_57227 = state_57123__$1;
(statearr_57157_57227[(2)] = inst_57038);

(statearr_57157_57227[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (36))){
var inst_57082 = (state_57123[(25)]);
var inst_57086 = cljs.core.chunk_first.call(null,inst_57082);
var inst_57087 = cljs.core.chunk_rest.call(null,inst_57082);
var inst_57088 = cljs.core.count.call(null,inst_57086);
var inst_57063 = inst_57087;
var inst_57064 = inst_57086;
var inst_57065 = inst_57088;
var inst_57066 = (0);
var state_57123__$1 = (function (){var statearr_57158 = state_57123;
(statearr_57158[(9)] = inst_57064);

(statearr_57158[(20)] = inst_57065);

(statearr_57158[(21)] = inst_57063);

(statearr_57158[(12)] = inst_57066);

return statearr_57158;
})();
var statearr_57159_57228 = state_57123__$1;
(statearr_57159_57228[(2)] = null);

(statearr_57159_57228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (41))){
var inst_57082 = (state_57123[(25)]);
var inst_57098 = (state_57123[(2)]);
var inst_57099 = cljs.core.next.call(null,inst_57082);
var inst_57063 = inst_57099;
var inst_57064 = null;
var inst_57065 = (0);
var inst_57066 = (0);
var state_57123__$1 = (function (){var statearr_57160 = state_57123;
(statearr_57160[(27)] = inst_57098);

(statearr_57160[(9)] = inst_57064);

(statearr_57160[(20)] = inst_57065);

(statearr_57160[(21)] = inst_57063);

(statearr_57160[(12)] = inst_57066);

return statearr_57160;
})();
var statearr_57161_57229 = state_57123__$1;
(statearr_57161_57229[(2)] = null);

(statearr_57161_57229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (43))){
var state_57123__$1 = state_57123;
var statearr_57162_57230 = state_57123__$1;
(statearr_57162_57230[(2)] = null);

(statearr_57162_57230[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (29))){
var inst_57107 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57163_57231 = state_57123__$1;
(statearr_57163_57231[(2)] = inst_57107);

(statearr_57163_57231[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (44))){
var inst_57116 = (state_57123[(2)]);
var state_57123__$1 = (function (){var statearr_57164 = state_57123;
(statearr_57164[(28)] = inst_57116);

return statearr_57164;
})();
var statearr_57165_57232 = state_57123__$1;
(statearr_57165_57232[(2)] = null);

(statearr_57165_57232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (6))){
var inst_57055 = (state_57123[(29)]);
var inst_57054 = cljs.core.deref.call(null,cs);
var inst_57055__$1 = cljs.core.keys.call(null,inst_57054);
var inst_57056 = cljs.core.count.call(null,inst_57055__$1);
var inst_57057 = cljs.core.reset_BANG_.call(null,dctr,inst_57056);
var inst_57062 = cljs.core.seq.call(null,inst_57055__$1);
var inst_57063 = inst_57062;
var inst_57064 = null;
var inst_57065 = (0);
var inst_57066 = (0);
var state_57123__$1 = (function (){var statearr_57166 = state_57123;
(statearr_57166[(29)] = inst_57055__$1);

(statearr_57166[(9)] = inst_57064);

(statearr_57166[(30)] = inst_57057);

(statearr_57166[(20)] = inst_57065);

(statearr_57166[(21)] = inst_57063);

(statearr_57166[(12)] = inst_57066);

return statearr_57166;
})();
var statearr_57167_57233 = state_57123__$1;
(statearr_57167_57233[(2)] = null);

(statearr_57167_57233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (28))){
var inst_57082 = (state_57123[(25)]);
var inst_57063 = (state_57123[(21)]);
var inst_57082__$1 = cljs.core.seq.call(null,inst_57063);
var state_57123__$1 = (function (){var statearr_57168 = state_57123;
(statearr_57168[(25)] = inst_57082__$1);

return statearr_57168;
})();
if(inst_57082__$1){
var statearr_57169_57234 = state_57123__$1;
(statearr_57169_57234[(1)] = (33));

} else {
var statearr_57170_57235 = state_57123__$1;
(statearr_57170_57235[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (25))){
var inst_57065 = (state_57123[(20)]);
var inst_57066 = (state_57123[(12)]);
var inst_57068 = (inst_57066 < inst_57065);
var inst_57069 = inst_57068;
var state_57123__$1 = state_57123;
if(cljs.core.truth_(inst_57069)){
var statearr_57171_57236 = state_57123__$1;
(statearr_57171_57236[(1)] = (27));

} else {
var statearr_57172_57237 = state_57123__$1;
(statearr_57172_57237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (34))){
var state_57123__$1 = state_57123;
var statearr_57173_57238 = state_57123__$1;
(statearr_57173_57238[(2)] = null);

(statearr_57173_57238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (17))){
var state_57123__$1 = state_57123;
var statearr_57174_57239 = state_57123__$1;
(statearr_57174_57239[(2)] = null);

(statearr_57174_57239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (3))){
var inst_57121 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57123__$1,inst_57121);
} else {
if((state_val_57124 === (12))){
var inst_57050 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57175_57240 = state_57123__$1;
(statearr_57175_57240[(2)] = inst_57050);

(statearr_57175_57240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (2))){
var state_57123__$1 = state_57123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57123__$1,(4),ch);
} else {
if((state_val_57124 === (23))){
var state_57123__$1 = state_57123;
var statearr_57176_57241 = state_57123__$1;
(statearr_57176_57241[(2)] = null);

(statearr_57176_57241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (35))){
var inst_57105 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57177_57242 = state_57123__$1;
(statearr_57177_57242[(2)] = inst_57105);

(statearr_57177_57242[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (19))){
var inst_57022 = (state_57123[(7)]);
var inst_57026 = cljs.core.chunk_first.call(null,inst_57022);
var inst_57027 = cljs.core.chunk_rest.call(null,inst_57022);
var inst_57028 = cljs.core.count.call(null,inst_57026);
var inst_57000 = inst_57027;
var inst_57001 = inst_57026;
var inst_57002 = inst_57028;
var inst_57003 = (0);
var state_57123__$1 = (function (){var statearr_57178 = state_57123;
(statearr_57178[(14)] = inst_57002);

(statearr_57178[(15)] = inst_57003);

(statearr_57178[(16)] = inst_57000);

(statearr_57178[(17)] = inst_57001);

return statearr_57178;
})();
var statearr_57179_57243 = state_57123__$1;
(statearr_57179_57243[(2)] = null);

(statearr_57179_57243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (11))){
var inst_57022 = (state_57123[(7)]);
var inst_57000 = (state_57123[(16)]);
var inst_57022__$1 = cljs.core.seq.call(null,inst_57000);
var state_57123__$1 = (function (){var statearr_57180 = state_57123;
(statearr_57180[(7)] = inst_57022__$1);

return statearr_57180;
})();
if(inst_57022__$1){
var statearr_57181_57244 = state_57123__$1;
(statearr_57181_57244[(1)] = (16));

} else {
var statearr_57182_57245 = state_57123__$1;
(statearr_57182_57245[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (9))){
var inst_57052 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57183_57246 = state_57123__$1;
(statearr_57183_57246[(2)] = inst_57052);

(statearr_57183_57246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (5))){
var inst_56998 = cljs.core.deref.call(null,cs);
var inst_56999 = cljs.core.seq.call(null,inst_56998);
var inst_57000 = inst_56999;
var inst_57001 = null;
var inst_57002 = (0);
var inst_57003 = (0);
var state_57123__$1 = (function (){var statearr_57184 = state_57123;
(statearr_57184[(14)] = inst_57002);

(statearr_57184[(15)] = inst_57003);

(statearr_57184[(16)] = inst_57000);

(statearr_57184[(17)] = inst_57001);

return statearr_57184;
})();
var statearr_57185_57247 = state_57123__$1;
(statearr_57185_57247[(2)] = null);

(statearr_57185_57247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (14))){
var state_57123__$1 = state_57123;
var statearr_57186_57248 = state_57123__$1;
(statearr_57186_57248[(2)] = null);

(statearr_57186_57248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (45))){
var inst_57113 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57187_57249 = state_57123__$1;
(statearr_57187_57249[(2)] = inst_57113);

(statearr_57187_57249[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (26))){
var inst_57055 = (state_57123[(29)]);
var inst_57109 = (state_57123[(2)]);
var inst_57110 = cljs.core.seq.call(null,inst_57055);
var state_57123__$1 = (function (){var statearr_57188 = state_57123;
(statearr_57188[(31)] = inst_57109);

return statearr_57188;
})();
if(inst_57110){
var statearr_57189_57250 = state_57123__$1;
(statearr_57189_57250[(1)] = (42));

} else {
var statearr_57190_57251 = state_57123__$1;
(statearr_57190_57251[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (16))){
var inst_57022 = (state_57123[(7)]);
var inst_57024 = cljs.core.chunked_seq_QMARK_.call(null,inst_57022);
var state_57123__$1 = state_57123;
if(inst_57024){
var statearr_57191_57252 = state_57123__$1;
(statearr_57191_57252[(1)] = (19));

} else {
var statearr_57192_57253 = state_57123__$1;
(statearr_57192_57253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (38))){
var inst_57102 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57193_57254 = state_57123__$1;
(statearr_57193_57254[(2)] = inst_57102);

(statearr_57193_57254[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (30))){
var state_57123__$1 = state_57123;
var statearr_57194_57255 = state_57123__$1;
(statearr_57194_57255[(2)] = null);

(statearr_57194_57255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (10))){
var inst_57003 = (state_57123[(15)]);
var inst_57001 = (state_57123[(17)]);
var inst_57011 = cljs.core._nth.call(null,inst_57001,inst_57003);
var inst_57012 = cljs.core.nth.call(null,inst_57011,(0),null);
var inst_57013 = cljs.core.nth.call(null,inst_57011,(1),null);
var state_57123__$1 = (function (){var statearr_57195 = state_57123;
(statearr_57195[(26)] = inst_57012);

return statearr_57195;
})();
if(cljs.core.truth_(inst_57013)){
var statearr_57196_57256 = state_57123__$1;
(statearr_57196_57256[(1)] = (13));

} else {
var statearr_57197_57257 = state_57123__$1;
(statearr_57197_57257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (18))){
var inst_57048 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57198_57258 = state_57123__$1;
(statearr_57198_57258[(2)] = inst_57048);

(statearr_57198_57258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (42))){
var state_57123__$1 = state_57123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57123__$1,(45),dchan);
} else {
if((state_val_57124 === (37))){
var inst_57091 = (state_57123[(23)]);
var inst_56991 = (state_57123[(11)]);
var inst_57082 = (state_57123[(25)]);
var inst_57091__$1 = cljs.core.first.call(null,inst_57082);
var inst_57092 = cljs.core.async.put_BANG_.call(null,inst_57091__$1,inst_56991,done);
var state_57123__$1 = (function (){var statearr_57199 = state_57123;
(statearr_57199[(23)] = inst_57091__$1);

return statearr_57199;
})();
if(cljs.core.truth_(inst_57092)){
var statearr_57200_57259 = state_57123__$1;
(statearr_57200_57259[(1)] = (39));

} else {
var statearr_57201_57260 = state_57123__$1;
(statearr_57201_57260[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (8))){
var inst_57002 = (state_57123[(14)]);
var inst_57003 = (state_57123[(15)]);
var inst_57005 = (inst_57003 < inst_57002);
var inst_57006 = inst_57005;
var state_57123__$1 = state_57123;
if(cljs.core.truth_(inst_57006)){
var statearr_57202_57261 = state_57123__$1;
(statearr_57202_57261[(1)] = (10));

} else {
var statearr_57203_57262 = state_57123__$1;
(statearr_57203_57262[(1)] = (11));

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
});})(c__56389__auto___57208,cs,m,dchan,dctr,done))
;
return ((function (switch__56299__auto__,c__56389__auto___57208,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__56300__auto__ = null;
var cljs$core$async$mult_$_state_machine__56300__auto____0 = (function (){
var statearr_57204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57204[(0)] = cljs$core$async$mult_$_state_machine__56300__auto__);

(statearr_57204[(1)] = (1));

return statearr_57204;
});
var cljs$core$async$mult_$_state_machine__56300__auto____1 = (function (state_57123){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_57123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e57205){if((e57205 instanceof Object)){
var ex__56303__auto__ = e57205;
var statearr_57206_57263 = state_57123;
(statearr_57206_57263[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57264 = state_57123;
state_57123 = G__57264;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__56300__auto__ = function(state_57123){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__56300__auto____1.call(this,state_57123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__56300__auto____0;
cljs$core$async$mult_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__56300__auto____1;
return cljs$core$async$mult_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___57208,cs,m,dchan,dctr,done))
})();
var state__56391__auto__ = (function (){var statearr_57207 = f__56390__auto__.call(null);
(statearr_57207[(6)] = c__56389__auto___57208);

return statearr_57207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___57208,cs,m,dchan,dctr,done))
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
var G__57266 = arguments.length;
switch (G__57266) {
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
var x__43049__auto__ = (((m == null))?null:m);
var m__43050__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,m,ch);
} else {
var m__43050__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,m,ch);
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
var x__43049__auto__ = (((m == null))?null:m);
var m__43050__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,m,ch);
} else {
var m__43050__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,m,ch);
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
var x__43049__auto__ = (((m == null))?null:m);
var m__43050__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,m);
} else {
var m__43050__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,m);
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
var x__43049__auto__ = (((m == null))?null:m);
var m__43050__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,m,state_map);
} else {
var m__43050__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,m,state_map);
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
var x__43049__auto__ = (((m == null))?null:m);
var m__43050__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,m,mode);
} else {
var m__43050__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__44096__auto__ = [];
var len__44089__auto___57278 = arguments.length;
var i__44090__auto___57279 = (0);
while(true){
if((i__44090__auto___57279 < len__44089__auto___57278)){
args__44096__auto__.push((arguments[i__44090__auto___57279]));

var G__57280 = (i__44090__auto___57279 + (1));
i__44090__auto___57279 = G__57280;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((3) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44097__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57272){
var map__57273 = p__57272;
var map__57273__$1 = ((((!((map__57273 == null)))?((((map__57273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57273):map__57273);
var opts = map__57273__$1;
var statearr_57275_57281 = state;
(statearr_57275_57281[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__57273,map__57273__$1,opts){
return (function (val){
var statearr_57276_57282 = state;
(statearr_57276_57282[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__57273,map__57273__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_57277_57283 = state;
(statearr_57277_57283[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57268){
var G__57269 = cljs.core.first.call(null,seq57268);
var seq57268__$1 = cljs.core.next.call(null,seq57268);
var G__57270 = cljs.core.first.call(null,seq57268__$1);
var seq57268__$2 = cljs.core.next.call(null,seq57268__$1);
var G__57271 = cljs.core.first.call(null,seq57268__$2);
var seq57268__$3 = cljs.core.next.call(null,seq57268__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57269,G__57270,G__57271,seq57268__$3);
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
if(typeof cljs.core.async.t_cljs$core$async57284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57284 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta57285){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta57285 = meta57285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57286,meta57285__$1){
var self__ = this;
var _57286__$1 = this;
return (new cljs.core.async.t_cljs$core$async57284(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta57285__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_57286){
var self__ = this;
var _57286__$1 = this;
return self__.meta57285;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57284.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async57284.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta57285","meta57285",2067209147,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async57284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57284";

cljs.core.async.t_cljs$core$async57284.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async57284");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async57284 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async57284(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta57285){
return (new cljs.core.async.t_cljs$core$async57284(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta57285));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async57284(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56389__auto___57448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___57448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___57448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_57388){
var state_val_57389 = (state_57388[(1)]);
if((state_val_57389 === (7))){
var inst_57303 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
var statearr_57390_57449 = state_57388__$1;
(statearr_57390_57449[(2)] = inst_57303);

(statearr_57390_57449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (20))){
var inst_57315 = (state_57388[(7)]);
var state_57388__$1 = state_57388;
var statearr_57391_57450 = state_57388__$1;
(statearr_57391_57450[(2)] = inst_57315);

(statearr_57391_57450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (27))){
var state_57388__$1 = state_57388;
var statearr_57392_57451 = state_57388__$1;
(statearr_57392_57451[(2)] = null);

(statearr_57392_57451[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (1))){
var inst_57290 = (state_57388[(8)]);
var inst_57290__$1 = calc_state.call(null);
var inst_57292 = (inst_57290__$1 == null);
var inst_57293 = cljs.core.not.call(null,inst_57292);
var state_57388__$1 = (function (){var statearr_57393 = state_57388;
(statearr_57393[(8)] = inst_57290__$1);

return statearr_57393;
})();
if(inst_57293){
var statearr_57394_57452 = state_57388__$1;
(statearr_57394_57452[(1)] = (2));

} else {
var statearr_57395_57453 = state_57388__$1;
(statearr_57395_57453[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (24))){
var inst_57348 = (state_57388[(9)]);
var inst_57362 = (state_57388[(10)]);
var inst_57339 = (state_57388[(11)]);
var inst_57362__$1 = inst_57339.call(null,inst_57348);
var state_57388__$1 = (function (){var statearr_57396 = state_57388;
(statearr_57396[(10)] = inst_57362__$1);

return statearr_57396;
})();
if(cljs.core.truth_(inst_57362__$1)){
var statearr_57397_57454 = state_57388__$1;
(statearr_57397_57454[(1)] = (29));

} else {
var statearr_57398_57455 = state_57388__$1;
(statearr_57398_57455[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (4))){
var inst_57306 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
if(cljs.core.truth_(inst_57306)){
var statearr_57399_57456 = state_57388__$1;
(statearr_57399_57456[(1)] = (8));

} else {
var statearr_57400_57457 = state_57388__$1;
(statearr_57400_57457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (15))){
var inst_57333 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
if(cljs.core.truth_(inst_57333)){
var statearr_57401_57458 = state_57388__$1;
(statearr_57401_57458[(1)] = (19));

} else {
var statearr_57402_57459 = state_57388__$1;
(statearr_57402_57459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (21))){
var inst_57338 = (state_57388[(12)]);
var inst_57338__$1 = (state_57388[(2)]);
var inst_57339 = cljs.core.get.call(null,inst_57338__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57340 = cljs.core.get.call(null,inst_57338__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57341 = cljs.core.get.call(null,inst_57338__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57388__$1 = (function (){var statearr_57403 = state_57388;
(statearr_57403[(11)] = inst_57339);

(statearr_57403[(13)] = inst_57340);

(statearr_57403[(12)] = inst_57338__$1);

return statearr_57403;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_57388__$1,(22),inst_57341);
} else {
if((state_val_57389 === (31))){
var inst_57370 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
if(cljs.core.truth_(inst_57370)){
var statearr_57404_57460 = state_57388__$1;
(statearr_57404_57460[(1)] = (32));

} else {
var statearr_57405_57461 = state_57388__$1;
(statearr_57405_57461[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (32))){
var inst_57347 = (state_57388[(14)]);
var state_57388__$1 = state_57388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57388__$1,(35),out,inst_57347);
} else {
if((state_val_57389 === (33))){
var inst_57338 = (state_57388[(12)]);
var inst_57315 = inst_57338;
var state_57388__$1 = (function (){var statearr_57406 = state_57388;
(statearr_57406[(7)] = inst_57315);

return statearr_57406;
})();
var statearr_57407_57462 = state_57388__$1;
(statearr_57407_57462[(2)] = null);

(statearr_57407_57462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (13))){
var inst_57315 = (state_57388[(7)]);
var inst_57322 = inst_57315.cljs$lang$protocol_mask$partition0$;
var inst_57323 = (inst_57322 & (64));
var inst_57324 = inst_57315.cljs$core$ISeq$;
var inst_57325 = (cljs.core.PROTOCOL_SENTINEL === inst_57324);
var inst_57326 = (inst_57323) || (inst_57325);
var state_57388__$1 = state_57388;
if(cljs.core.truth_(inst_57326)){
var statearr_57408_57463 = state_57388__$1;
(statearr_57408_57463[(1)] = (16));

} else {
var statearr_57409_57464 = state_57388__$1;
(statearr_57409_57464[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (22))){
var inst_57348 = (state_57388[(9)]);
var inst_57347 = (state_57388[(14)]);
var inst_57346 = (state_57388[(2)]);
var inst_57347__$1 = cljs.core.nth.call(null,inst_57346,(0),null);
var inst_57348__$1 = cljs.core.nth.call(null,inst_57346,(1),null);
var inst_57349 = (inst_57347__$1 == null);
var inst_57350 = cljs.core._EQ_.call(null,inst_57348__$1,change);
var inst_57351 = (inst_57349) || (inst_57350);
var state_57388__$1 = (function (){var statearr_57410 = state_57388;
(statearr_57410[(9)] = inst_57348__$1);

(statearr_57410[(14)] = inst_57347__$1);

return statearr_57410;
})();
if(cljs.core.truth_(inst_57351)){
var statearr_57411_57465 = state_57388__$1;
(statearr_57411_57465[(1)] = (23));

} else {
var statearr_57412_57466 = state_57388__$1;
(statearr_57412_57466[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (36))){
var inst_57338 = (state_57388[(12)]);
var inst_57315 = inst_57338;
var state_57388__$1 = (function (){var statearr_57413 = state_57388;
(statearr_57413[(7)] = inst_57315);

return statearr_57413;
})();
var statearr_57414_57467 = state_57388__$1;
(statearr_57414_57467[(2)] = null);

(statearr_57414_57467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (29))){
var inst_57362 = (state_57388[(10)]);
var state_57388__$1 = state_57388;
var statearr_57415_57468 = state_57388__$1;
(statearr_57415_57468[(2)] = inst_57362);

(statearr_57415_57468[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (6))){
var state_57388__$1 = state_57388;
var statearr_57416_57469 = state_57388__$1;
(statearr_57416_57469[(2)] = false);

(statearr_57416_57469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (28))){
var inst_57358 = (state_57388[(2)]);
var inst_57359 = calc_state.call(null);
var inst_57315 = inst_57359;
var state_57388__$1 = (function (){var statearr_57417 = state_57388;
(statearr_57417[(7)] = inst_57315);

(statearr_57417[(15)] = inst_57358);

return statearr_57417;
})();
var statearr_57418_57470 = state_57388__$1;
(statearr_57418_57470[(2)] = null);

(statearr_57418_57470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (25))){
var inst_57384 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
var statearr_57419_57471 = state_57388__$1;
(statearr_57419_57471[(2)] = inst_57384);

(statearr_57419_57471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (34))){
var inst_57382 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
var statearr_57420_57472 = state_57388__$1;
(statearr_57420_57472[(2)] = inst_57382);

(statearr_57420_57472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (17))){
var state_57388__$1 = state_57388;
var statearr_57421_57473 = state_57388__$1;
(statearr_57421_57473[(2)] = false);

(statearr_57421_57473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (3))){
var state_57388__$1 = state_57388;
var statearr_57422_57474 = state_57388__$1;
(statearr_57422_57474[(2)] = false);

(statearr_57422_57474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (12))){
var inst_57386 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57388__$1,inst_57386);
} else {
if((state_val_57389 === (2))){
var inst_57290 = (state_57388[(8)]);
var inst_57295 = inst_57290.cljs$lang$protocol_mask$partition0$;
var inst_57296 = (inst_57295 & (64));
var inst_57297 = inst_57290.cljs$core$ISeq$;
var inst_57298 = (cljs.core.PROTOCOL_SENTINEL === inst_57297);
var inst_57299 = (inst_57296) || (inst_57298);
var state_57388__$1 = state_57388;
if(cljs.core.truth_(inst_57299)){
var statearr_57423_57475 = state_57388__$1;
(statearr_57423_57475[(1)] = (5));

} else {
var statearr_57424_57476 = state_57388__$1;
(statearr_57424_57476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (23))){
var inst_57347 = (state_57388[(14)]);
var inst_57353 = (inst_57347 == null);
var state_57388__$1 = state_57388;
if(cljs.core.truth_(inst_57353)){
var statearr_57425_57477 = state_57388__$1;
(statearr_57425_57477[(1)] = (26));

} else {
var statearr_57426_57478 = state_57388__$1;
(statearr_57426_57478[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (35))){
var inst_57373 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
if(cljs.core.truth_(inst_57373)){
var statearr_57427_57479 = state_57388__$1;
(statearr_57427_57479[(1)] = (36));

} else {
var statearr_57428_57480 = state_57388__$1;
(statearr_57428_57480[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (19))){
var inst_57315 = (state_57388[(7)]);
var inst_57335 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57315);
var state_57388__$1 = state_57388;
var statearr_57429_57481 = state_57388__$1;
(statearr_57429_57481[(2)] = inst_57335);

(statearr_57429_57481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (11))){
var inst_57315 = (state_57388[(7)]);
var inst_57319 = (inst_57315 == null);
var inst_57320 = cljs.core.not.call(null,inst_57319);
var state_57388__$1 = state_57388;
if(inst_57320){
var statearr_57430_57482 = state_57388__$1;
(statearr_57430_57482[(1)] = (13));

} else {
var statearr_57431_57483 = state_57388__$1;
(statearr_57431_57483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (9))){
var inst_57290 = (state_57388[(8)]);
var state_57388__$1 = state_57388;
var statearr_57432_57484 = state_57388__$1;
(statearr_57432_57484[(2)] = inst_57290);

(statearr_57432_57484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (5))){
var state_57388__$1 = state_57388;
var statearr_57433_57485 = state_57388__$1;
(statearr_57433_57485[(2)] = true);

(statearr_57433_57485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (14))){
var state_57388__$1 = state_57388;
var statearr_57434_57486 = state_57388__$1;
(statearr_57434_57486[(2)] = false);

(statearr_57434_57486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (26))){
var inst_57348 = (state_57388[(9)]);
var inst_57355 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_57348);
var state_57388__$1 = state_57388;
var statearr_57435_57487 = state_57388__$1;
(statearr_57435_57487[(2)] = inst_57355);

(statearr_57435_57487[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (16))){
var state_57388__$1 = state_57388;
var statearr_57436_57488 = state_57388__$1;
(statearr_57436_57488[(2)] = true);

(statearr_57436_57488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (38))){
var inst_57378 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
var statearr_57437_57489 = state_57388__$1;
(statearr_57437_57489[(2)] = inst_57378);

(statearr_57437_57489[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (30))){
var inst_57348 = (state_57388[(9)]);
var inst_57339 = (state_57388[(11)]);
var inst_57340 = (state_57388[(13)]);
var inst_57365 = cljs.core.empty_QMARK_.call(null,inst_57339);
var inst_57366 = inst_57340.call(null,inst_57348);
var inst_57367 = cljs.core.not.call(null,inst_57366);
var inst_57368 = (inst_57365) && (inst_57367);
var state_57388__$1 = state_57388;
var statearr_57438_57490 = state_57388__$1;
(statearr_57438_57490[(2)] = inst_57368);

(statearr_57438_57490[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (10))){
var inst_57290 = (state_57388[(8)]);
var inst_57311 = (state_57388[(2)]);
var inst_57312 = cljs.core.get.call(null,inst_57311,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57313 = cljs.core.get.call(null,inst_57311,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57314 = cljs.core.get.call(null,inst_57311,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57315 = inst_57290;
var state_57388__$1 = (function (){var statearr_57439 = state_57388;
(statearr_57439[(16)] = inst_57313);

(statearr_57439[(17)] = inst_57312);

(statearr_57439[(7)] = inst_57315);

(statearr_57439[(18)] = inst_57314);

return statearr_57439;
})();
var statearr_57440_57491 = state_57388__$1;
(statearr_57440_57491[(2)] = null);

(statearr_57440_57491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (18))){
var inst_57330 = (state_57388[(2)]);
var state_57388__$1 = state_57388;
var statearr_57441_57492 = state_57388__$1;
(statearr_57441_57492[(2)] = inst_57330);

(statearr_57441_57492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (37))){
var state_57388__$1 = state_57388;
var statearr_57442_57493 = state_57388__$1;
(statearr_57442_57493[(2)] = null);

(statearr_57442_57493[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57389 === (8))){
var inst_57290 = (state_57388[(8)]);
var inst_57308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57290);
var state_57388__$1 = state_57388;
var statearr_57443_57494 = state_57388__$1;
(statearr_57443_57494[(2)] = inst_57308);

(statearr_57443_57494[(1)] = (10));


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
});})(c__56389__auto___57448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__56299__auto__,c__56389__auto___57448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__56300__auto__ = null;
var cljs$core$async$mix_$_state_machine__56300__auto____0 = (function (){
var statearr_57444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57444[(0)] = cljs$core$async$mix_$_state_machine__56300__auto__);

(statearr_57444[(1)] = (1));

return statearr_57444;
});
var cljs$core$async$mix_$_state_machine__56300__auto____1 = (function (state_57388){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_57388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e57445){if((e57445 instanceof Object)){
var ex__56303__auto__ = e57445;
var statearr_57446_57495 = state_57388;
(statearr_57446_57495[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57496 = state_57388;
state_57388 = G__57496;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__56300__auto__ = function(state_57388){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__56300__auto____1.call(this,state_57388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__56300__auto____0;
cljs$core$async$mix_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__56300__auto____1;
return cljs$core$async$mix_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___57448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__56391__auto__ = (function (){var statearr_57447 = f__56390__auto__.call(null);
(statearr_57447[(6)] = c__56389__auto___57448);

return statearr_57447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___57448,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__43049__auto__ = (((p == null))?null:p);
var m__43050__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__43050__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__43049__auto__ = (((p == null))?null:p);
var m__43050__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,p,v,ch);
} else {
var m__43050__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57498 = arguments.length;
switch (G__57498) {
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
var x__43049__auto__ = (((p == null))?null:p);
var m__43050__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,p);
} else {
var m__43050__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,p);
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
var x__43049__auto__ = (((p == null))?null:p);
var m__43050__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,p,v);
} else {
var m__43050__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,p,v);
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
var G__57502 = arguments.length;
switch (G__57502) {
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
var or__41411__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41411__auto__,mults){
return (function (p1__57500_SHARP_){
if(cljs.core.truth_(p1__57500_SHARP_.call(null,topic))){
return p1__57500_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__57500_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41411__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async57503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57503 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57504){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57504 = meta57504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_57505,meta57504__$1){
var self__ = this;
var _57505__$1 = this;
return (new cljs.core.async.t_cljs$core$async57503(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57504__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_57505){
var self__ = this;
var _57505__$1 = this;
return self__.meta57504;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57503.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57504","meta57504",646420175,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async57503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57503";

cljs.core.async.t_cljs$core$async57503.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async57503");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async57503 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async57503(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57504){
return (new cljs.core.async.t_cljs$core$async57503(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57504));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async57503(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56389__auto___57623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___57623,mults,ensure_mult,p){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___57623,mults,ensure_mult,p){
return (function (state_57577){
var state_val_57578 = (state_57577[(1)]);
if((state_val_57578 === (7))){
var inst_57573 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57579_57624 = state_57577__$1;
(statearr_57579_57624[(2)] = inst_57573);

(statearr_57579_57624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (20))){
var state_57577__$1 = state_57577;
var statearr_57580_57625 = state_57577__$1;
(statearr_57580_57625[(2)] = null);

(statearr_57580_57625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (1))){
var state_57577__$1 = state_57577;
var statearr_57581_57626 = state_57577__$1;
(statearr_57581_57626[(2)] = null);

(statearr_57581_57626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (24))){
var inst_57556 = (state_57577[(7)]);
var inst_57565 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_57556);
var state_57577__$1 = state_57577;
var statearr_57582_57627 = state_57577__$1;
(statearr_57582_57627[(2)] = inst_57565);

(statearr_57582_57627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (4))){
var inst_57508 = (state_57577[(8)]);
var inst_57508__$1 = (state_57577[(2)]);
var inst_57509 = (inst_57508__$1 == null);
var state_57577__$1 = (function (){var statearr_57583 = state_57577;
(statearr_57583[(8)] = inst_57508__$1);

return statearr_57583;
})();
if(cljs.core.truth_(inst_57509)){
var statearr_57584_57628 = state_57577__$1;
(statearr_57584_57628[(1)] = (5));

} else {
var statearr_57585_57629 = state_57577__$1;
(statearr_57585_57629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (15))){
var inst_57550 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57586_57630 = state_57577__$1;
(statearr_57586_57630[(2)] = inst_57550);

(statearr_57586_57630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (21))){
var inst_57570 = (state_57577[(2)]);
var state_57577__$1 = (function (){var statearr_57587 = state_57577;
(statearr_57587[(9)] = inst_57570);

return statearr_57587;
})();
var statearr_57588_57631 = state_57577__$1;
(statearr_57588_57631[(2)] = null);

(statearr_57588_57631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (13))){
var inst_57532 = (state_57577[(10)]);
var inst_57534 = cljs.core.chunked_seq_QMARK_.call(null,inst_57532);
var state_57577__$1 = state_57577;
if(inst_57534){
var statearr_57589_57632 = state_57577__$1;
(statearr_57589_57632[(1)] = (16));

} else {
var statearr_57590_57633 = state_57577__$1;
(statearr_57590_57633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (22))){
var inst_57562 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
if(cljs.core.truth_(inst_57562)){
var statearr_57591_57634 = state_57577__$1;
(statearr_57591_57634[(1)] = (23));

} else {
var statearr_57592_57635 = state_57577__$1;
(statearr_57592_57635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (6))){
var inst_57556 = (state_57577[(7)]);
var inst_57508 = (state_57577[(8)]);
var inst_57558 = (state_57577[(11)]);
var inst_57556__$1 = topic_fn.call(null,inst_57508);
var inst_57557 = cljs.core.deref.call(null,mults);
var inst_57558__$1 = cljs.core.get.call(null,inst_57557,inst_57556__$1);
var state_57577__$1 = (function (){var statearr_57593 = state_57577;
(statearr_57593[(7)] = inst_57556__$1);

(statearr_57593[(11)] = inst_57558__$1);

return statearr_57593;
})();
if(cljs.core.truth_(inst_57558__$1)){
var statearr_57594_57636 = state_57577__$1;
(statearr_57594_57636[(1)] = (19));

} else {
var statearr_57595_57637 = state_57577__$1;
(statearr_57595_57637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (25))){
var inst_57567 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57596_57638 = state_57577__$1;
(statearr_57596_57638[(2)] = inst_57567);

(statearr_57596_57638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (17))){
var inst_57532 = (state_57577[(10)]);
var inst_57541 = cljs.core.first.call(null,inst_57532);
var inst_57542 = cljs.core.async.muxch_STAR_.call(null,inst_57541);
var inst_57543 = cljs.core.async.close_BANG_.call(null,inst_57542);
var inst_57544 = cljs.core.next.call(null,inst_57532);
var inst_57518 = inst_57544;
var inst_57519 = null;
var inst_57520 = (0);
var inst_57521 = (0);
var state_57577__$1 = (function (){var statearr_57597 = state_57577;
(statearr_57597[(12)] = inst_57518);

(statearr_57597[(13)] = inst_57519);

(statearr_57597[(14)] = inst_57543);

(statearr_57597[(15)] = inst_57520);

(statearr_57597[(16)] = inst_57521);

return statearr_57597;
})();
var statearr_57598_57639 = state_57577__$1;
(statearr_57598_57639[(2)] = null);

(statearr_57598_57639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (3))){
var inst_57575 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57577__$1,inst_57575);
} else {
if((state_val_57578 === (12))){
var inst_57552 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57599_57640 = state_57577__$1;
(statearr_57599_57640[(2)] = inst_57552);

(statearr_57599_57640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (2))){
var state_57577__$1 = state_57577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57577__$1,(4),ch);
} else {
if((state_val_57578 === (23))){
var state_57577__$1 = state_57577;
var statearr_57600_57641 = state_57577__$1;
(statearr_57600_57641[(2)] = null);

(statearr_57600_57641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (19))){
var inst_57508 = (state_57577[(8)]);
var inst_57558 = (state_57577[(11)]);
var inst_57560 = cljs.core.async.muxch_STAR_.call(null,inst_57558);
var state_57577__$1 = state_57577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57577__$1,(22),inst_57560,inst_57508);
} else {
if((state_val_57578 === (11))){
var inst_57532 = (state_57577[(10)]);
var inst_57518 = (state_57577[(12)]);
var inst_57532__$1 = cljs.core.seq.call(null,inst_57518);
var state_57577__$1 = (function (){var statearr_57601 = state_57577;
(statearr_57601[(10)] = inst_57532__$1);

return statearr_57601;
})();
if(inst_57532__$1){
var statearr_57602_57642 = state_57577__$1;
(statearr_57602_57642[(1)] = (13));

} else {
var statearr_57603_57643 = state_57577__$1;
(statearr_57603_57643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (9))){
var inst_57554 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57604_57644 = state_57577__$1;
(statearr_57604_57644[(2)] = inst_57554);

(statearr_57604_57644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (5))){
var inst_57515 = cljs.core.deref.call(null,mults);
var inst_57516 = cljs.core.vals.call(null,inst_57515);
var inst_57517 = cljs.core.seq.call(null,inst_57516);
var inst_57518 = inst_57517;
var inst_57519 = null;
var inst_57520 = (0);
var inst_57521 = (0);
var state_57577__$1 = (function (){var statearr_57605 = state_57577;
(statearr_57605[(12)] = inst_57518);

(statearr_57605[(13)] = inst_57519);

(statearr_57605[(15)] = inst_57520);

(statearr_57605[(16)] = inst_57521);

return statearr_57605;
})();
var statearr_57606_57645 = state_57577__$1;
(statearr_57606_57645[(2)] = null);

(statearr_57606_57645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (14))){
var state_57577__$1 = state_57577;
var statearr_57610_57646 = state_57577__$1;
(statearr_57610_57646[(2)] = null);

(statearr_57610_57646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (16))){
var inst_57532 = (state_57577[(10)]);
var inst_57536 = cljs.core.chunk_first.call(null,inst_57532);
var inst_57537 = cljs.core.chunk_rest.call(null,inst_57532);
var inst_57538 = cljs.core.count.call(null,inst_57536);
var inst_57518 = inst_57537;
var inst_57519 = inst_57536;
var inst_57520 = inst_57538;
var inst_57521 = (0);
var state_57577__$1 = (function (){var statearr_57611 = state_57577;
(statearr_57611[(12)] = inst_57518);

(statearr_57611[(13)] = inst_57519);

(statearr_57611[(15)] = inst_57520);

(statearr_57611[(16)] = inst_57521);

return statearr_57611;
})();
var statearr_57612_57647 = state_57577__$1;
(statearr_57612_57647[(2)] = null);

(statearr_57612_57647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (10))){
var inst_57518 = (state_57577[(12)]);
var inst_57519 = (state_57577[(13)]);
var inst_57520 = (state_57577[(15)]);
var inst_57521 = (state_57577[(16)]);
var inst_57526 = cljs.core._nth.call(null,inst_57519,inst_57521);
var inst_57527 = cljs.core.async.muxch_STAR_.call(null,inst_57526);
var inst_57528 = cljs.core.async.close_BANG_.call(null,inst_57527);
var inst_57529 = (inst_57521 + (1));
var tmp57607 = inst_57518;
var tmp57608 = inst_57519;
var tmp57609 = inst_57520;
var inst_57518__$1 = tmp57607;
var inst_57519__$1 = tmp57608;
var inst_57520__$1 = tmp57609;
var inst_57521__$1 = inst_57529;
var state_57577__$1 = (function (){var statearr_57613 = state_57577;
(statearr_57613[(17)] = inst_57528);

(statearr_57613[(12)] = inst_57518__$1);

(statearr_57613[(13)] = inst_57519__$1);

(statearr_57613[(15)] = inst_57520__$1);

(statearr_57613[(16)] = inst_57521__$1);

return statearr_57613;
})();
var statearr_57614_57648 = state_57577__$1;
(statearr_57614_57648[(2)] = null);

(statearr_57614_57648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (18))){
var inst_57547 = (state_57577[(2)]);
var state_57577__$1 = state_57577;
var statearr_57615_57649 = state_57577__$1;
(statearr_57615_57649[(2)] = inst_57547);

(statearr_57615_57649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57578 === (8))){
var inst_57520 = (state_57577[(15)]);
var inst_57521 = (state_57577[(16)]);
var inst_57523 = (inst_57521 < inst_57520);
var inst_57524 = inst_57523;
var state_57577__$1 = state_57577;
if(cljs.core.truth_(inst_57524)){
var statearr_57616_57650 = state_57577__$1;
(statearr_57616_57650[(1)] = (10));

} else {
var statearr_57617_57651 = state_57577__$1;
(statearr_57617_57651[(1)] = (11));

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
});})(c__56389__auto___57623,mults,ensure_mult,p))
;
return ((function (switch__56299__auto__,c__56389__auto___57623,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_57618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57618[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_57618[(1)] = (1));

return statearr_57618;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_57577){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_57577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e57619){if((e57619 instanceof Object)){
var ex__56303__auto__ = e57619;
var statearr_57620_57652 = state_57577;
(statearr_57620_57652[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57653 = state_57577;
state_57577 = G__57653;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_57577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_57577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___57623,mults,ensure_mult,p))
})();
var state__56391__auto__ = (function (){var statearr_57621 = f__56390__auto__.call(null);
(statearr_57621[(6)] = c__56389__auto___57623);

return statearr_57621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___57623,mults,ensure_mult,p))
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
var G__57655 = arguments.length;
switch (G__57655) {
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
var G__57658 = arguments.length;
switch (G__57658) {
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
var G__57661 = arguments.length;
switch (G__57661) {
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
var c__56389__auto___57728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___57728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___57728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_57700){
var state_val_57701 = (state_57700[(1)]);
if((state_val_57701 === (7))){
var state_57700__$1 = state_57700;
var statearr_57702_57729 = state_57700__$1;
(statearr_57702_57729[(2)] = null);

(statearr_57702_57729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (1))){
var state_57700__$1 = state_57700;
var statearr_57703_57730 = state_57700__$1;
(statearr_57703_57730[(2)] = null);

(statearr_57703_57730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (4))){
var inst_57664 = (state_57700[(7)]);
var inst_57666 = (inst_57664 < cnt);
var state_57700__$1 = state_57700;
if(cljs.core.truth_(inst_57666)){
var statearr_57704_57731 = state_57700__$1;
(statearr_57704_57731[(1)] = (6));

} else {
var statearr_57705_57732 = state_57700__$1;
(statearr_57705_57732[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (15))){
var inst_57696 = (state_57700[(2)]);
var state_57700__$1 = state_57700;
var statearr_57706_57733 = state_57700__$1;
(statearr_57706_57733[(2)] = inst_57696);

(statearr_57706_57733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (13))){
var inst_57689 = cljs.core.async.close_BANG_.call(null,out);
var state_57700__$1 = state_57700;
var statearr_57707_57734 = state_57700__$1;
(statearr_57707_57734[(2)] = inst_57689);

(statearr_57707_57734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (6))){
var state_57700__$1 = state_57700;
var statearr_57708_57735 = state_57700__$1;
(statearr_57708_57735[(2)] = null);

(statearr_57708_57735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (3))){
var inst_57698 = (state_57700[(2)]);
var state_57700__$1 = state_57700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57700__$1,inst_57698);
} else {
if((state_val_57701 === (12))){
var inst_57686 = (state_57700[(8)]);
var inst_57686__$1 = (state_57700[(2)]);
var inst_57687 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_57686__$1);
var state_57700__$1 = (function (){var statearr_57709 = state_57700;
(statearr_57709[(8)] = inst_57686__$1);

return statearr_57709;
})();
if(cljs.core.truth_(inst_57687)){
var statearr_57710_57736 = state_57700__$1;
(statearr_57710_57736[(1)] = (13));

} else {
var statearr_57711_57737 = state_57700__$1;
(statearr_57711_57737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (2))){
var inst_57663 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_57664 = (0);
var state_57700__$1 = (function (){var statearr_57712 = state_57700;
(statearr_57712[(9)] = inst_57663);

(statearr_57712[(7)] = inst_57664);

return statearr_57712;
})();
var statearr_57713_57738 = state_57700__$1;
(statearr_57713_57738[(2)] = null);

(statearr_57713_57738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (11))){
var inst_57664 = (state_57700[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_57700,(10),Object,null,(9));
var inst_57673 = chs__$1.call(null,inst_57664);
var inst_57674 = done.call(null,inst_57664);
var inst_57675 = cljs.core.async.take_BANG_.call(null,inst_57673,inst_57674);
var state_57700__$1 = state_57700;
var statearr_57714_57739 = state_57700__$1;
(statearr_57714_57739[(2)] = inst_57675);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57700__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (9))){
var inst_57664 = (state_57700[(7)]);
var inst_57677 = (state_57700[(2)]);
var inst_57678 = (inst_57664 + (1));
var inst_57664__$1 = inst_57678;
var state_57700__$1 = (function (){var statearr_57715 = state_57700;
(statearr_57715[(10)] = inst_57677);

(statearr_57715[(7)] = inst_57664__$1);

return statearr_57715;
})();
var statearr_57716_57740 = state_57700__$1;
(statearr_57716_57740[(2)] = null);

(statearr_57716_57740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (5))){
var inst_57684 = (state_57700[(2)]);
var state_57700__$1 = (function (){var statearr_57717 = state_57700;
(statearr_57717[(11)] = inst_57684);

return statearr_57717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57700__$1,(12),dchan);
} else {
if((state_val_57701 === (14))){
var inst_57686 = (state_57700[(8)]);
var inst_57691 = cljs.core.apply.call(null,f,inst_57686);
var state_57700__$1 = state_57700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57700__$1,(16),out,inst_57691);
} else {
if((state_val_57701 === (16))){
var inst_57693 = (state_57700[(2)]);
var state_57700__$1 = (function (){var statearr_57718 = state_57700;
(statearr_57718[(12)] = inst_57693);

return statearr_57718;
})();
var statearr_57719_57741 = state_57700__$1;
(statearr_57719_57741[(2)] = null);

(statearr_57719_57741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (10))){
var inst_57668 = (state_57700[(2)]);
var inst_57669 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_57700__$1 = (function (){var statearr_57720 = state_57700;
(statearr_57720[(13)] = inst_57668);

return statearr_57720;
})();
var statearr_57721_57742 = state_57700__$1;
(statearr_57721_57742[(2)] = inst_57669);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57700__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57701 === (8))){
var inst_57682 = (state_57700[(2)]);
var state_57700__$1 = state_57700;
var statearr_57722_57743 = state_57700__$1;
(statearr_57722_57743[(2)] = inst_57682);

(statearr_57722_57743[(1)] = (5));


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
});})(c__56389__auto___57728,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__56299__auto__,c__56389__auto___57728,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_57723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57723[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_57723[(1)] = (1));

return statearr_57723;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_57700){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_57700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e57724){if((e57724 instanceof Object)){
var ex__56303__auto__ = e57724;
var statearr_57725_57744 = state_57700;
(statearr_57725_57744[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57745 = state_57700;
state_57700 = G__57745;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_57700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_57700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___57728,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__56391__auto__ = (function (){var statearr_57726 = f__56390__auto__.call(null);
(statearr_57726[(6)] = c__56389__auto___57728);

return statearr_57726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___57728,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__57748 = arguments.length;
switch (G__57748) {
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
var c__56389__auto___57802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___57802,out){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___57802,out){
return (function (state_57780){
var state_val_57781 = (state_57780[(1)]);
if((state_val_57781 === (7))){
var inst_57760 = (state_57780[(7)]);
var inst_57759 = (state_57780[(8)]);
var inst_57759__$1 = (state_57780[(2)]);
var inst_57760__$1 = cljs.core.nth.call(null,inst_57759__$1,(0),null);
var inst_57761 = cljs.core.nth.call(null,inst_57759__$1,(1),null);
var inst_57762 = (inst_57760__$1 == null);
var state_57780__$1 = (function (){var statearr_57782 = state_57780;
(statearr_57782[(9)] = inst_57761);

(statearr_57782[(7)] = inst_57760__$1);

(statearr_57782[(8)] = inst_57759__$1);

return statearr_57782;
})();
if(cljs.core.truth_(inst_57762)){
var statearr_57783_57803 = state_57780__$1;
(statearr_57783_57803[(1)] = (8));

} else {
var statearr_57784_57804 = state_57780__$1;
(statearr_57784_57804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57781 === (1))){
var inst_57749 = cljs.core.vec.call(null,chs);
var inst_57750 = inst_57749;
var state_57780__$1 = (function (){var statearr_57785 = state_57780;
(statearr_57785[(10)] = inst_57750);

return statearr_57785;
})();
var statearr_57786_57805 = state_57780__$1;
(statearr_57786_57805[(2)] = null);

(statearr_57786_57805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57781 === (4))){
var inst_57750 = (state_57780[(10)]);
var state_57780__$1 = state_57780;
return cljs.core.async.ioc_alts_BANG_.call(null,state_57780__$1,(7),inst_57750);
} else {
if((state_val_57781 === (6))){
var inst_57776 = (state_57780[(2)]);
var state_57780__$1 = state_57780;
var statearr_57787_57806 = state_57780__$1;
(statearr_57787_57806[(2)] = inst_57776);

(statearr_57787_57806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57781 === (3))){
var inst_57778 = (state_57780[(2)]);
var state_57780__$1 = state_57780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57780__$1,inst_57778);
} else {
if((state_val_57781 === (2))){
var inst_57750 = (state_57780[(10)]);
var inst_57752 = cljs.core.count.call(null,inst_57750);
var inst_57753 = (inst_57752 > (0));
var state_57780__$1 = state_57780;
if(cljs.core.truth_(inst_57753)){
var statearr_57789_57807 = state_57780__$1;
(statearr_57789_57807[(1)] = (4));

} else {
var statearr_57790_57808 = state_57780__$1;
(statearr_57790_57808[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57781 === (11))){
var inst_57750 = (state_57780[(10)]);
var inst_57769 = (state_57780[(2)]);
var tmp57788 = inst_57750;
var inst_57750__$1 = tmp57788;
var state_57780__$1 = (function (){var statearr_57791 = state_57780;
(statearr_57791[(10)] = inst_57750__$1);

(statearr_57791[(11)] = inst_57769);

return statearr_57791;
})();
var statearr_57792_57809 = state_57780__$1;
(statearr_57792_57809[(2)] = null);

(statearr_57792_57809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57781 === (9))){
var inst_57760 = (state_57780[(7)]);
var state_57780__$1 = state_57780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57780__$1,(11),out,inst_57760);
} else {
if((state_val_57781 === (5))){
var inst_57774 = cljs.core.async.close_BANG_.call(null,out);
var state_57780__$1 = state_57780;
var statearr_57793_57810 = state_57780__$1;
(statearr_57793_57810[(2)] = inst_57774);

(statearr_57793_57810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57781 === (10))){
var inst_57772 = (state_57780[(2)]);
var state_57780__$1 = state_57780;
var statearr_57794_57811 = state_57780__$1;
(statearr_57794_57811[(2)] = inst_57772);

(statearr_57794_57811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57781 === (8))){
var inst_57750 = (state_57780[(10)]);
var inst_57761 = (state_57780[(9)]);
var inst_57760 = (state_57780[(7)]);
var inst_57759 = (state_57780[(8)]);
var inst_57764 = (function (){var cs = inst_57750;
var vec__57755 = inst_57759;
var v = inst_57760;
var c = inst_57761;
return ((function (cs,vec__57755,v,c,inst_57750,inst_57761,inst_57760,inst_57759,state_val_57781,c__56389__auto___57802,out){
return (function (p1__57746_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__57746_SHARP_);
});
;})(cs,vec__57755,v,c,inst_57750,inst_57761,inst_57760,inst_57759,state_val_57781,c__56389__auto___57802,out))
})();
var inst_57765 = cljs.core.filterv.call(null,inst_57764,inst_57750);
var inst_57750__$1 = inst_57765;
var state_57780__$1 = (function (){var statearr_57795 = state_57780;
(statearr_57795[(10)] = inst_57750__$1);

return statearr_57795;
})();
var statearr_57796_57812 = state_57780__$1;
(statearr_57796_57812[(2)] = null);

(statearr_57796_57812[(1)] = (2));


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
});})(c__56389__auto___57802,out))
;
return ((function (switch__56299__auto__,c__56389__auto___57802,out){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_57797 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57797[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_57797[(1)] = (1));

return statearr_57797;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_57780){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_57780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e57798){if((e57798 instanceof Object)){
var ex__56303__auto__ = e57798;
var statearr_57799_57813 = state_57780;
(statearr_57799_57813[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57814 = state_57780;
state_57780 = G__57814;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_57780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_57780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___57802,out))
})();
var state__56391__auto__ = (function (){var statearr_57800 = f__56390__auto__.call(null);
(statearr_57800[(6)] = c__56389__auto___57802);

return statearr_57800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___57802,out))
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
var G__57816 = arguments.length;
switch (G__57816) {
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
var c__56389__auto___57861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___57861,out){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___57861,out){
return (function (state_57840){
var state_val_57841 = (state_57840[(1)]);
if((state_val_57841 === (7))){
var inst_57822 = (state_57840[(7)]);
var inst_57822__$1 = (state_57840[(2)]);
var inst_57823 = (inst_57822__$1 == null);
var inst_57824 = cljs.core.not.call(null,inst_57823);
var state_57840__$1 = (function (){var statearr_57842 = state_57840;
(statearr_57842[(7)] = inst_57822__$1);

return statearr_57842;
})();
if(inst_57824){
var statearr_57843_57862 = state_57840__$1;
(statearr_57843_57862[(1)] = (8));

} else {
var statearr_57844_57863 = state_57840__$1;
(statearr_57844_57863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57841 === (1))){
var inst_57817 = (0);
var state_57840__$1 = (function (){var statearr_57845 = state_57840;
(statearr_57845[(8)] = inst_57817);

return statearr_57845;
})();
var statearr_57846_57864 = state_57840__$1;
(statearr_57846_57864[(2)] = null);

(statearr_57846_57864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57841 === (4))){
var state_57840__$1 = state_57840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57840__$1,(7),ch);
} else {
if((state_val_57841 === (6))){
var inst_57835 = (state_57840[(2)]);
var state_57840__$1 = state_57840;
var statearr_57847_57865 = state_57840__$1;
(statearr_57847_57865[(2)] = inst_57835);

(statearr_57847_57865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57841 === (3))){
var inst_57837 = (state_57840[(2)]);
var inst_57838 = cljs.core.async.close_BANG_.call(null,out);
var state_57840__$1 = (function (){var statearr_57848 = state_57840;
(statearr_57848[(9)] = inst_57837);

return statearr_57848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57840__$1,inst_57838);
} else {
if((state_val_57841 === (2))){
var inst_57817 = (state_57840[(8)]);
var inst_57819 = (inst_57817 < n);
var state_57840__$1 = state_57840;
if(cljs.core.truth_(inst_57819)){
var statearr_57849_57866 = state_57840__$1;
(statearr_57849_57866[(1)] = (4));

} else {
var statearr_57850_57867 = state_57840__$1;
(statearr_57850_57867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57841 === (11))){
var inst_57817 = (state_57840[(8)]);
var inst_57827 = (state_57840[(2)]);
var inst_57828 = (inst_57817 + (1));
var inst_57817__$1 = inst_57828;
var state_57840__$1 = (function (){var statearr_57851 = state_57840;
(statearr_57851[(8)] = inst_57817__$1);

(statearr_57851[(10)] = inst_57827);

return statearr_57851;
})();
var statearr_57852_57868 = state_57840__$1;
(statearr_57852_57868[(2)] = null);

(statearr_57852_57868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57841 === (9))){
var state_57840__$1 = state_57840;
var statearr_57853_57869 = state_57840__$1;
(statearr_57853_57869[(2)] = null);

(statearr_57853_57869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57841 === (5))){
var state_57840__$1 = state_57840;
var statearr_57854_57870 = state_57840__$1;
(statearr_57854_57870[(2)] = null);

(statearr_57854_57870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57841 === (10))){
var inst_57832 = (state_57840[(2)]);
var state_57840__$1 = state_57840;
var statearr_57855_57871 = state_57840__$1;
(statearr_57855_57871[(2)] = inst_57832);

(statearr_57855_57871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57841 === (8))){
var inst_57822 = (state_57840[(7)]);
var state_57840__$1 = state_57840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57840__$1,(11),out,inst_57822);
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
});})(c__56389__auto___57861,out))
;
return ((function (switch__56299__auto__,c__56389__auto___57861,out){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_57856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57856[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_57856[(1)] = (1));

return statearr_57856;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_57840){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_57840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e57857){if((e57857 instanceof Object)){
var ex__56303__auto__ = e57857;
var statearr_57858_57872 = state_57840;
(statearr_57858_57872[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57873 = state_57840;
state_57840 = G__57873;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_57840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_57840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___57861,out))
})();
var state__56391__auto__ = (function (){var statearr_57859 = f__56390__auto__.call(null);
(statearr_57859[(6)] = c__56389__auto___57861);

return statearr_57859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___57861,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async57875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57875 = (function (f,ch,meta57876){
this.f = f;
this.ch = ch;
this.meta57876 = meta57876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57877,meta57876__$1){
var self__ = this;
var _57877__$1 = this;
return (new cljs.core.async.t_cljs$core$async57875(self__.f,self__.ch,meta57876__$1));
});

cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57877){
var self__ = this;
var _57877__$1 = this;
return self__.meta57876;
});

cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async57878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57878 = (function (f,ch,meta57876,_,fn1,meta57879){
this.f = f;
this.ch = ch;
this.meta57876 = meta57876;
this._ = _;
this.fn1 = fn1;
this.meta57879 = meta57879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_57880,meta57879__$1){
var self__ = this;
var _57880__$1 = this;
return (new cljs.core.async.t_cljs$core$async57878(self__.f,self__.ch,self__.meta57876,self__._,self__.fn1,meta57879__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async57878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_57880){
var self__ = this;
var _57880__$1 = this;
return self__.meta57879;
});})(___$1))
;

cljs.core.async.t_cljs$core$async57878.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async57878.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async57878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__57874_SHARP_){
return f1.call(null,(((p1__57874_SHARP_ == null))?null:self__.f.call(null,p1__57874_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async57878.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57876","meta57876",1954647558,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57875","cljs.core.async/t_cljs$core$async57875",-1730096444,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57879","meta57879",-1616248058,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async57878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57878";

cljs.core.async.t_cljs$core$async57878.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async57878");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async57878 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57878(f__$1,ch__$1,meta57876__$1,___$2,fn1__$1,meta57879){
return (new cljs.core.async.t_cljs$core$async57878(f__$1,ch__$1,meta57876__$1,___$2,fn1__$1,meta57879));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async57878(self__.f,self__.ch,self__.meta57876,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41384__auto__ = ret;
if(cljs.core.truth_(and__41384__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41384__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57875.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async57875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57876","meta57876",1954647558,null)], null);
});

cljs.core.async.t_cljs$core$async57875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57875";

cljs.core.async.t_cljs$core$async57875.cljs$lang$ctorPrWriter = (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async57875");
});

cljs.core.async.__GT_t_cljs$core$async57875 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57875(f__$1,ch__$1,meta57876){
return (new cljs.core.async.t_cljs$core$async57875(f__$1,ch__$1,meta57876));
});

}

return (new cljs.core.async.t_cljs$core$async57875(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async57881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57881 = (function (f,ch,meta57882){
this.f = f;
this.ch = ch;
this.meta57882 = meta57882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57883,meta57882__$1){
var self__ = this;
var _57883__$1 = this;
return (new cljs.core.async.t_cljs$core$async57881(self__.f,self__.ch,meta57882__$1));
});

cljs.core.async.t_cljs$core$async57881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57883){
var self__ = this;
var _57883__$1 = this;
return self__.meta57882;
});

cljs.core.async.t_cljs$core$async57881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async57881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async57881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57882","meta57882",-1256747161,null)], null);
});

cljs.core.async.t_cljs$core$async57881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57881";

cljs.core.async.t_cljs$core$async57881.cljs$lang$ctorPrWriter = (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async57881");
});

cljs.core.async.__GT_t_cljs$core$async57881 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57881(f__$1,ch__$1,meta57882){
return (new cljs.core.async.t_cljs$core$async57881(f__$1,ch__$1,meta57882));
});

}

return (new cljs.core.async.t_cljs$core$async57881(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async57884 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57884 = (function (p,ch,meta57885){
this.p = p;
this.ch = ch;
this.meta57885 = meta57885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57886,meta57885__$1){
var self__ = this;
var _57886__$1 = this;
return (new cljs.core.async.t_cljs$core$async57884(self__.p,self__.ch,meta57885__$1));
});

cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57886){
var self__ = this;
var _57886__$1 = this;
return self__.meta57885;
});

cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57884.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async57884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57885","meta57885",968149923,null)], null);
});

cljs.core.async.t_cljs$core$async57884.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57884";

cljs.core.async.t_cljs$core$async57884.cljs$lang$ctorPrWriter = (function (this__42859__auto__,writer__42860__auto__,opt__42861__auto__){
return cljs.core._write.call(null,writer__42860__auto__,"cljs.core.async/t_cljs$core$async57884");
});

cljs.core.async.__GT_t_cljs$core$async57884 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57884(p__$1,ch__$1,meta57885){
return (new cljs.core.async.t_cljs$core$async57884(p__$1,ch__$1,meta57885));
});

}

return (new cljs.core.async.t_cljs$core$async57884(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__57888 = arguments.length;
switch (G__57888) {
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
var c__56389__auto___57928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___57928,out){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___57928,out){
return (function (state_57909){
var state_val_57910 = (state_57909[(1)]);
if((state_val_57910 === (7))){
var inst_57905 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
var statearr_57911_57929 = state_57909__$1;
(statearr_57911_57929[(2)] = inst_57905);

(statearr_57911_57929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (1))){
var state_57909__$1 = state_57909;
var statearr_57912_57930 = state_57909__$1;
(statearr_57912_57930[(2)] = null);

(statearr_57912_57930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (4))){
var inst_57891 = (state_57909[(7)]);
var inst_57891__$1 = (state_57909[(2)]);
var inst_57892 = (inst_57891__$1 == null);
var state_57909__$1 = (function (){var statearr_57913 = state_57909;
(statearr_57913[(7)] = inst_57891__$1);

return statearr_57913;
})();
if(cljs.core.truth_(inst_57892)){
var statearr_57914_57931 = state_57909__$1;
(statearr_57914_57931[(1)] = (5));

} else {
var statearr_57915_57932 = state_57909__$1;
(statearr_57915_57932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (6))){
var inst_57891 = (state_57909[(7)]);
var inst_57896 = p.call(null,inst_57891);
var state_57909__$1 = state_57909;
if(cljs.core.truth_(inst_57896)){
var statearr_57916_57933 = state_57909__$1;
(statearr_57916_57933[(1)] = (8));

} else {
var statearr_57917_57934 = state_57909__$1;
(statearr_57917_57934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (3))){
var inst_57907 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57909__$1,inst_57907);
} else {
if((state_val_57910 === (2))){
var state_57909__$1 = state_57909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57909__$1,(4),ch);
} else {
if((state_val_57910 === (11))){
var inst_57899 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
var statearr_57918_57935 = state_57909__$1;
(statearr_57918_57935[(2)] = inst_57899);

(statearr_57918_57935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (9))){
var state_57909__$1 = state_57909;
var statearr_57919_57936 = state_57909__$1;
(statearr_57919_57936[(2)] = null);

(statearr_57919_57936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (5))){
var inst_57894 = cljs.core.async.close_BANG_.call(null,out);
var state_57909__$1 = state_57909;
var statearr_57920_57937 = state_57909__$1;
(statearr_57920_57937[(2)] = inst_57894);

(statearr_57920_57937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (10))){
var inst_57902 = (state_57909[(2)]);
var state_57909__$1 = (function (){var statearr_57921 = state_57909;
(statearr_57921[(8)] = inst_57902);

return statearr_57921;
})();
var statearr_57922_57938 = state_57909__$1;
(statearr_57922_57938[(2)] = null);

(statearr_57922_57938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (8))){
var inst_57891 = (state_57909[(7)]);
var state_57909__$1 = state_57909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57909__$1,(11),out,inst_57891);
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
});})(c__56389__auto___57928,out))
;
return ((function (switch__56299__auto__,c__56389__auto___57928,out){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_57923 = [null,null,null,null,null,null,null,null,null];
(statearr_57923[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_57923[(1)] = (1));

return statearr_57923;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_57909){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_57909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e57924){if((e57924 instanceof Object)){
var ex__56303__auto__ = e57924;
var statearr_57925_57939 = state_57909;
(statearr_57925_57939[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57940 = state_57909;
state_57909 = G__57940;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_57909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_57909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___57928,out))
})();
var state__56391__auto__ = (function (){var statearr_57926 = f__56390__auto__.call(null);
(statearr_57926[(6)] = c__56389__auto___57928);

return statearr_57926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___57928,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57942 = arguments.length;
switch (G__57942) {
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
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__){
return (function (state_58005){
var state_val_58006 = (state_58005[(1)]);
if((state_val_58006 === (7))){
var inst_58001 = (state_58005[(2)]);
var state_58005__$1 = state_58005;
var statearr_58007_58045 = state_58005__$1;
(statearr_58007_58045[(2)] = inst_58001);

(statearr_58007_58045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (20))){
var inst_57971 = (state_58005[(7)]);
var inst_57982 = (state_58005[(2)]);
var inst_57983 = cljs.core.next.call(null,inst_57971);
var inst_57957 = inst_57983;
var inst_57958 = null;
var inst_57959 = (0);
var inst_57960 = (0);
var state_58005__$1 = (function (){var statearr_58008 = state_58005;
(statearr_58008[(8)] = inst_57960);

(statearr_58008[(9)] = inst_57958);

(statearr_58008[(10)] = inst_57982);

(statearr_58008[(11)] = inst_57959);

(statearr_58008[(12)] = inst_57957);

return statearr_58008;
})();
var statearr_58009_58046 = state_58005__$1;
(statearr_58009_58046[(2)] = null);

(statearr_58009_58046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (1))){
var state_58005__$1 = state_58005;
var statearr_58010_58047 = state_58005__$1;
(statearr_58010_58047[(2)] = null);

(statearr_58010_58047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (4))){
var inst_57946 = (state_58005[(13)]);
var inst_57946__$1 = (state_58005[(2)]);
var inst_57947 = (inst_57946__$1 == null);
var state_58005__$1 = (function (){var statearr_58011 = state_58005;
(statearr_58011[(13)] = inst_57946__$1);

return statearr_58011;
})();
if(cljs.core.truth_(inst_57947)){
var statearr_58012_58048 = state_58005__$1;
(statearr_58012_58048[(1)] = (5));

} else {
var statearr_58013_58049 = state_58005__$1;
(statearr_58013_58049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (15))){
var state_58005__$1 = state_58005;
var statearr_58017_58050 = state_58005__$1;
(statearr_58017_58050[(2)] = null);

(statearr_58017_58050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (21))){
var state_58005__$1 = state_58005;
var statearr_58018_58051 = state_58005__$1;
(statearr_58018_58051[(2)] = null);

(statearr_58018_58051[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (13))){
var inst_57960 = (state_58005[(8)]);
var inst_57958 = (state_58005[(9)]);
var inst_57959 = (state_58005[(11)]);
var inst_57957 = (state_58005[(12)]);
var inst_57967 = (state_58005[(2)]);
var inst_57968 = (inst_57960 + (1));
var tmp58014 = inst_57958;
var tmp58015 = inst_57959;
var tmp58016 = inst_57957;
var inst_57957__$1 = tmp58016;
var inst_57958__$1 = tmp58014;
var inst_57959__$1 = tmp58015;
var inst_57960__$1 = inst_57968;
var state_58005__$1 = (function (){var statearr_58019 = state_58005;
(statearr_58019[(8)] = inst_57960__$1);

(statearr_58019[(9)] = inst_57958__$1);

(statearr_58019[(14)] = inst_57967);

(statearr_58019[(11)] = inst_57959__$1);

(statearr_58019[(12)] = inst_57957__$1);

return statearr_58019;
})();
var statearr_58020_58052 = state_58005__$1;
(statearr_58020_58052[(2)] = null);

(statearr_58020_58052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (22))){
var state_58005__$1 = state_58005;
var statearr_58021_58053 = state_58005__$1;
(statearr_58021_58053[(2)] = null);

(statearr_58021_58053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (6))){
var inst_57946 = (state_58005[(13)]);
var inst_57955 = f.call(null,inst_57946);
var inst_57956 = cljs.core.seq.call(null,inst_57955);
var inst_57957 = inst_57956;
var inst_57958 = null;
var inst_57959 = (0);
var inst_57960 = (0);
var state_58005__$1 = (function (){var statearr_58022 = state_58005;
(statearr_58022[(8)] = inst_57960);

(statearr_58022[(9)] = inst_57958);

(statearr_58022[(11)] = inst_57959);

(statearr_58022[(12)] = inst_57957);

return statearr_58022;
})();
var statearr_58023_58054 = state_58005__$1;
(statearr_58023_58054[(2)] = null);

(statearr_58023_58054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (17))){
var inst_57971 = (state_58005[(7)]);
var inst_57975 = cljs.core.chunk_first.call(null,inst_57971);
var inst_57976 = cljs.core.chunk_rest.call(null,inst_57971);
var inst_57977 = cljs.core.count.call(null,inst_57975);
var inst_57957 = inst_57976;
var inst_57958 = inst_57975;
var inst_57959 = inst_57977;
var inst_57960 = (0);
var state_58005__$1 = (function (){var statearr_58024 = state_58005;
(statearr_58024[(8)] = inst_57960);

(statearr_58024[(9)] = inst_57958);

(statearr_58024[(11)] = inst_57959);

(statearr_58024[(12)] = inst_57957);

return statearr_58024;
})();
var statearr_58025_58055 = state_58005__$1;
(statearr_58025_58055[(2)] = null);

(statearr_58025_58055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (3))){
var inst_58003 = (state_58005[(2)]);
var state_58005__$1 = state_58005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58005__$1,inst_58003);
} else {
if((state_val_58006 === (12))){
var inst_57991 = (state_58005[(2)]);
var state_58005__$1 = state_58005;
var statearr_58026_58056 = state_58005__$1;
(statearr_58026_58056[(2)] = inst_57991);

(statearr_58026_58056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (2))){
var state_58005__$1 = state_58005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58005__$1,(4),in$);
} else {
if((state_val_58006 === (23))){
var inst_57999 = (state_58005[(2)]);
var state_58005__$1 = state_58005;
var statearr_58027_58057 = state_58005__$1;
(statearr_58027_58057[(2)] = inst_57999);

(statearr_58027_58057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (19))){
var inst_57986 = (state_58005[(2)]);
var state_58005__$1 = state_58005;
var statearr_58028_58058 = state_58005__$1;
(statearr_58028_58058[(2)] = inst_57986);

(statearr_58028_58058[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (11))){
var inst_57971 = (state_58005[(7)]);
var inst_57957 = (state_58005[(12)]);
var inst_57971__$1 = cljs.core.seq.call(null,inst_57957);
var state_58005__$1 = (function (){var statearr_58029 = state_58005;
(statearr_58029[(7)] = inst_57971__$1);

return statearr_58029;
})();
if(inst_57971__$1){
var statearr_58030_58059 = state_58005__$1;
(statearr_58030_58059[(1)] = (14));

} else {
var statearr_58031_58060 = state_58005__$1;
(statearr_58031_58060[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (9))){
var inst_57993 = (state_58005[(2)]);
var inst_57994 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_58005__$1 = (function (){var statearr_58032 = state_58005;
(statearr_58032[(15)] = inst_57993);

return statearr_58032;
})();
if(cljs.core.truth_(inst_57994)){
var statearr_58033_58061 = state_58005__$1;
(statearr_58033_58061[(1)] = (21));

} else {
var statearr_58034_58062 = state_58005__$1;
(statearr_58034_58062[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (5))){
var inst_57949 = cljs.core.async.close_BANG_.call(null,out);
var state_58005__$1 = state_58005;
var statearr_58035_58063 = state_58005__$1;
(statearr_58035_58063[(2)] = inst_57949);

(statearr_58035_58063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (14))){
var inst_57971 = (state_58005[(7)]);
var inst_57973 = cljs.core.chunked_seq_QMARK_.call(null,inst_57971);
var state_58005__$1 = state_58005;
if(inst_57973){
var statearr_58036_58064 = state_58005__$1;
(statearr_58036_58064[(1)] = (17));

} else {
var statearr_58037_58065 = state_58005__$1;
(statearr_58037_58065[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (16))){
var inst_57989 = (state_58005[(2)]);
var state_58005__$1 = state_58005;
var statearr_58038_58066 = state_58005__$1;
(statearr_58038_58066[(2)] = inst_57989);

(statearr_58038_58066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58006 === (10))){
var inst_57960 = (state_58005[(8)]);
var inst_57958 = (state_58005[(9)]);
var inst_57965 = cljs.core._nth.call(null,inst_57958,inst_57960);
var state_58005__$1 = state_58005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58005__$1,(13),out,inst_57965);
} else {
if((state_val_58006 === (18))){
var inst_57971 = (state_58005[(7)]);
var inst_57980 = cljs.core.first.call(null,inst_57971);
var state_58005__$1 = state_58005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58005__$1,(20),out,inst_57980);
} else {
if((state_val_58006 === (8))){
var inst_57960 = (state_58005[(8)]);
var inst_57959 = (state_58005[(11)]);
var inst_57962 = (inst_57960 < inst_57959);
var inst_57963 = inst_57962;
var state_58005__$1 = state_58005;
if(cljs.core.truth_(inst_57963)){
var statearr_58039_58067 = state_58005__$1;
(statearr_58039_58067[(1)] = (10));

} else {
var statearr_58040_58068 = state_58005__$1;
(statearr_58040_58068[(1)] = (11));

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
});})(c__56389__auto__))
;
return ((function (switch__56299__auto__,c__56389__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__56300__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__56300__auto____0 = (function (){
var statearr_58041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58041[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__56300__auto__);

(statearr_58041[(1)] = (1));

return statearr_58041;
});
var cljs$core$async$mapcat_STAR__$_state_machine__56300__auto____1 = (function (state_58005){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_58005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e58042){if((e58042 instanceof Object)){
var ex__56303__auto__ = e58042;
var statearr_58043_58069 = state_58005;
(statearr_58043_58069[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58070 = state_58005;
state_58005 = G__58070;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__56300__auto__ = function(state_58005){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__56300__auto____1.call(this,state_58005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__56300__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__56300__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__))
})();
var state__56391__auto__ = (function (){var statearr_58044 = f__56390__auto__.call(null);
(statearr_58044[(6)] = c__56389__auto__);

return statearr_58044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__))
);

return c__56389__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58072 = arguments.length;
switch (G__58072) {
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
var G__58075 = arguments.length;
switch (G__58075) {
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
var G__58078 = arguments.length;
switch (G__58078) {
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
var c__56389__auto___58125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___58125,out){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___58125,out){
return (function (state_58102){
var state_val_58103 = (state_58102[(1)]);
if((state_val_58103 === (7))){
var inst_58097 = (state_58102[(2)]);
var state_58102__$1 = state_58102;
var statearr_58104_58126 = state_58102__$1;
(statearr_58104_58126[(2)] = inst_58097);

(statearr_58104_58126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58103 === (1))){
var inst_58079 = null;
var state_58102__$1 = (function (){var statearr_58105 = state_58102;
(statearr_58105[(7)] = inst_58079);

return statearr_58105;
})();
var statearr_58106_58127 = state_58102__$1;
(statearr_58106_58127[(2)] = null);

(statearr_58106_58127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58103 === (4))){
var inst_58082 = (state_58102[(8)]);
var inst_58082__$1 = (state_58102[(2)]);
var inst_58083 = (inst_58082__$1 == null);
var inst_58084 = cljs.core.not.call(null,inst_58083);
var state_58102__$1 = (function (){var statearr_58107 = state_58102;
(statearr_58107[(8)] = inst_58082__$1);

return statearr_58107;
})();
if(inst_58084){
var statearr_58108_58128 = state_58102__$1;
(statearr_58108_58128[(1)] = (5));

} else {
var statearr_58109_58129 = state_58102__$1;
(statearr_58109_58129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58103 === (6))){
var state_58102__$1 = state_58102;
var statearr_58110_58130 = state_58102__$1;
(statearr_58110_58130[(2)] = null);

(statearr_58110_58130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58103 === (3))){
var inst_58099 = (state_58102[(2)]);
var inst_58100 = cljs.core.async.close_BANG_.call(null,out);
var state_58102__$1 = (function (){var statearr_58111 = state_58102;
(statearr_58111[(9)] = inst_58099);

return statearr_58111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58102__$1,inst_58100);
} else {
if((state_val_58103 === (2))){
var state_58102__$1 = state_58102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58102__$1,(4),ch);
} else {
if((state_val_58103 === (11))){
var inst_58082 = (state_58102[(8)]);
var inst_58091 = (state_58102[(2)]);
var inst_58079 = inst_58082;
var state_58102__$1 = (function (){var statearr_58112 = state_58102;
(statearr_58112[(10)] = inst_58091);

(statearr_58112[(7)] = inst_58079);

return statearr_58112;
})();
var statearr_58113_58131 = state_58102__$1;
(statearr_58113_58131[(2)] = null);

(statearr_58113_58131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58103 === (9))){
var inst_58082 = (state_58102[(8)]);
var state_58102__$1 = state_58102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58102__$1,(11),out,inst_58082);
} else {
if((state_val_58103 === (5))){
var inst_58082 = (state_58102[(8)]);
var inst_58079 = (state_58102[(7)]);
var inst_58086 = cljs.core._EQ_.call(null,inst_58082,inst_58079);
var state_58102__$1 = state_58102;
if(inst_58086){
var statearr_58115_58132 = state_58102__$1;
(statearr_58115_58132[(1)] = (8));

} else {
var statearr_58116_58133 = state_58102__$1;
(statearr_58116_58133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58103 === (10))){
var inst_58094 = (state_58102[(2)]);
var state_58102__$1 = state_58102;
var statearr_58117_58134 = state_58102__$1;
(statearr_58117_58134[(2)] = inst_58094);

(statearr_58117_58134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58103 === (8))){
var inst_58079 = (state_58102[(7)]);
var tmp58114 = inst_58079;
var inst_58079__$1 = tmp58114;
var state_58102__$1 = (function (){var statearr_58118 = state_58102;
(statearr_58118[(7)] = inst_58079__$1);

return statearr_58118;
})();
var statearr_58119_58135 = state_58102__$1;
(statearr_58119_58135[(2)] = null);

(statearr_58119_58135[(1)] = (2));


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
});})(c__56389__auto___58125,out))
;
return ((function (switch__56299__auto__,c__56389__auto___58125,out){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_58120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58120[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_58120[(1)] = (1));

return statearr_58120;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_58102){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_58102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e58121){if((e58121 instanceof Object)){
var ex__56303__auto__ = e58121;
var statearr_58122_58136 = state_58102;
(statearr_58122_58136[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58137 = state_58102;
state_58102 = G__58137;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_58102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_58102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___58125,out))
})();
var state__56391__auto__ = (function (){var statearr_58123 = f__56390__auto__.call(null);
(statearr_58123[(6)] = c__56389__auto___58125);

return statearr_58123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___58125,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58139 = arguments.length;
switch (G__58139) {
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
var c__56389__auto___58205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___58205,out){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___58205,out){
return (function (state_58177){
var state_val_58178 = (state_58177[(1)]);
if((state_val_58178 === (7))){
var inst_58173 = (state_58177[(2)]);
var state_58177__$1 = state_58177;
var statearr_58179_58206 = state_58177__$1;
(statearr_58179_58206[(2)] = inst_58173);

(statearr_58179_58206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (1))){
var inst_58140 = (new Array(n));
var inst_58141 = inst_58140;
var inst_58142 = (0);
var state_58177__$1 = (function (){var statearr_58180 = state_58177;
(statearr_58180[(7)] = inst_58141);

(statearr_58180[(8)] = inst_58142);

return statearr_58180;
})();
var statearr_58181_58207 = state_58177__$1;
(statearr_58181_58207[(2)] = null);

(statearr_58181_58207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (4))){
var inst_58145 = (state_58177[(9)]);
var inst_58145__$1 = (state_58177[(2)]);
var inst_58146 = (inst_58145__$1 == null);
var inst_58147 = cljs.core.not.call(null,inst_58146);
var state_58177__$1 = (function (){var statearr_58182 = state_58177;
(statearr_58182[(9)] = inst_58145__$1);

return statearr_58182;
})();
if(inst_58147){
var statearr_58183_58208 = state_58177__$1;
(statearr_58183_58208[(1)] = (5));

} else {
var statearr_58184_58209 = state_58177__$1;
(statearr_58184_58209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (15))){
var inst_58167 = (state_58177[(2)]);
var state_58177__$1 = state_58177;
var statearr_58185_58210 = state_58177__$1;
(statearr_58185_58210[(2)] = inst_58167);

(statearr_58185_58210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (13))){
var state_58177__$1 = state_58177;
var statearr_58186_58211 = state_58177__$1;
(statearr_58186_58211[(2)] = null);

(statearr_58186_58211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (6))){
var inst_58142 = (state_58177[(8)]);
var inst_58163 = (inst_58142 > (0));
var state_58177__$1 = state_58177;
if(cljs.core.truth_(inst_58163)){
var statearr_58187_58212 = state_58177__$1;
(statearr_58187_58212[(1)] = (12));

} else {
var statearr_58188_58213 = state_58177__$1;
(statearr_58188_58213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (3))){
var inst_58175 = (state_58177[(2)]);
var state_58177__$1 = state_58177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58177__$1,inst_58175);
} else {
if((state_val_58178 === (12))){
var inst_58141 = (state_58177[(7)]);
var inst_58165 = cljs.core.vec.call(null,inst_58141);
var state_58177__$1 = state_58177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58177__$1,(15),out,inst_58165);
} else {
if((state_val_58178 === (2))){
var state_58177__$1 = state_58177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58177__$1,(4),ch);
} else {
if((state_val_58178 === (11))){
var inst_58157 = (state_58177[(2)]);
var inst_58158 = (new Array(n));
var inst_58141 = inst_58158;
var inst_58142 = (0);
var state_58177__$1 = (function (){var statearr_58189 = state_58177;
(statearr_58189[(10)] = inst_58157);

(statearr_58189[(7)] = inst_58141);

(statearr_58189[(8)] = inst_58142);

return statearr_58189;
})();
var statearr_58190_58214 = state_58177__$1;
(statearr_58190_58214[(2)] = null);

(statearr_58190_58214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (9))){
var inst_58141 = (state_58177[(7)]);
var inst_58155 = cljs.core.vec.call(null,inst_58141);
var state_58177__$1 = state_58177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58177__$1,(11),out,inst_58155);
} else {
if((state_val_58178 === (5))){
var inst_58141 = (state_58177[(7)]);
var inst_58145 = (state_58177[(9)]);
var inst_58150 = (state_58177[(11)]);
var inst_58142 = (state_58177[(8)]);
var inst_58149 = (inst_58141[inst_58142] = inst_58145);
var inst_58150__$1 = (inst_58142 + (1));
var inst_58151 = (inst_58150__$1 < n);
var state_58177__$1 = (function (){var statearr_58191 = state_58177;
(statearr_58191[(12)] = inst_58149);

(statearr_58191[(11)] = inst_58150__$1);

return statearr_58191;
})();
if(cljs.core.truth_(inst_58151)){
var statearr_58192_58215 = state_58177__$1;
(statearr_58192_58215[(1)] = (8));

} else {
var statearr_58193_58216 = state_58177__$1;
(statearr_58193_58216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (14))){
var inst_58170 = (state_58177[(2)]);
var inst_58171 = cljs.core.async.close_BANG_.call(null,out);
var state_58177__$1 = (function (){var statearr_58195 = state_58177;
(statearr_58195[(13)] = inst_58170);

return statearr_58195;
})();
var statearr_58196_58217 = state_58177__$1;
(statearr_58196_58217[(2)] = inst_58171);

(statearr_58196_58217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (10))){
var inst_58161 = (state_58177[(2)]);
var state_58177__$1 = state_58177;
var statearr_58197_58218 = state_58177__$1;
(statearr_58197_58218[(2)] = inst_58161);

(statearr_58197_58218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58178 === (8))){
var inst_58141 = (state_58177[(7)]);
var inst_58150 = (state_58177[(11)]);
var tmp58194 = inst_58141;
var inst_58141__$1 = tmp58194;
var inst_58142 = inst_58150;
var state_58177__$1 = (function (){var statearr_58198 = state_58177;
(statearr_58198[(7)] = inst_58141__$1);

(statearr_58198[(8)] = inst_58142);

return statearr_58198;
})();
var statearr_58199_58219 = state_58177__$1;
(statearr_58199_58219[(2)] = null);

(statearr_58199_58219[(1)] = (2));


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
});})(c__56389__auto___58205,out))
;
return ((function (switch__56299__auto__,c__56389__auto___58205,out){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_58200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58200[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_58200[(1)] = (1));

return statearr_58200;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_58177){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_58177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e58201){if((e58201 instanceof Object)){
var ex__56303__auto__ = e58201;
var statearr_58202_58220 = state_58177;
(statearr_58202_58220[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58221 = state_58177;
state_58177 = G__58221;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_58177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_58177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___58205,out))
})();
var state__56391__auto__ = (function (){var statearr_58203 = f__56390__auto__.call(null);
(statearr_58203[(6)] = c__56389__auto___58205);

return statearr_58203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___58205,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58223 = arguments.length;
switch (G__58223) {
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
var c__56389__auto___58293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___58293,out){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___58293,out){
return (function (state_58265){
var state_val_58266 = (state_58265[(1)]);
if((state_val_58266 === (7))){
var inst_58261 = (state_58265[(2)]);
var state_58265__$1 = state_58265;
var statearr_58267_58294 = state_58265__$1;
(statearr_58267_58294[(2)] = inst_58261);

(statearr_58267_58294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (1))){
var inst_58224 = [];
var inst_58225 = inst_58224;
var inst_58226 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58265__$1 = (function (){var statearr_58268 = state_58265;
(statearr_58268[(7)] = inst_58226);

(statearr_58268[(8)] = inst_58225);

return statearr_58268;
})();
var statearr_58269_58295 = state_58265__$1;
(statearr_58269_58295[(2)] = null);

(statearr_58269_58295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (4))){
var inst_58229 = (state_58265[(9)]);
var inst_58229__$1 = (state_58265[(2)]);
var inst_58230 = (inst_58229__$1 == null);
var inst_58231 = cljs.core.not.call(null,inst_58230);
var state_58265__$1 = (function (){var statearr_58270 = state_58265;
(statearr_58270[(9)] = inst_58229__$1);

return statearr_58270;
})();
if(inst_58231){
var statearr_58271_58296 = state_58265__$1;
(statearr_58271_58296[(1)] = (5));

} else {
var statearr_58272_58297 = state_58265__$1;
(statearr_58272_58297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (15))){
var inst_58255 = (state_58265[(2)]);
var state_58265__$1 = state_58265;
var statearr_58273_58298 = state_58265__$1;
(statearr_58273_58298[(2)] = inst_58255);

(statearr_58273_58298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (13))){
var state_58265__$1 = state_58265;
var statearr_58274_58299 = state_58265__$1;
(statearr_58274_58299[(2)] = null);

(statearr_58274_58299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (6))){
var inst_58225 = (state_58265[(8)]);
var inst_58250 = inst_58225.length;
var inst_58251 = (inst_58250 > (0));
var state_58265__$1 = state_58265;
if(cljs.core.truth_(inst_58251)){
var statearr_58275_58300 = state_58265__$1;
(statearr_58275_58300[(1)] = (12));

} else {
var statearr_58276_58301 = state_58265__$1;
(statearr_58276_58301[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (3))){
var inst_58263 = (state_58265[(2)]);
var state_58265__$1 = state_58265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58265__$1,inst_58263);
} else {
if((state_val_58266 === (12))){
var inst_58225 = (state_58265[(8)]);
var inst_58253 = cljs.core.vec.call(null,inst_58225);
var state_58265__$1 = state_58265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58265__$1,(15),out,inst_58253);
} else {
if((state_val_58266 === (2))){
var state_58265__$1 = state_58265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58265__$1,(4),ch);
} else {
if((state_val_58266 === (11))){
var inst_58233 = (state_58265[(10)]);
var inst_58229 = (state_58265[(9)]);
var inst_58243 = (state_58265[(2)]);
var inst_58244 = [];
var inst_58245 = inst_58244.push(inst_58229);
var inst_58225 = inst_58244;
var inst_58226 = inst_58233;
var state_58265__$1 = (function (){var statearr_58277 = state_58265;
(statearr_58277[(7)] = inst_58226);

(statearr_58277[(8)] = inst_58225);

(statearr_58277[(11)] = inst_58245);

(statearr_58277[(12)] = inst_58243);

return statearr_58277;
})();
var statearr_58278_58302 = state_58265__$1;
(statearr_58278_58302[(2)] = null);

(statearr_58278_58302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (9))){
var inst_58225 = (state_58265[(8)]);
var inst_58241 = cljs.core.vec.call(null,inst_58225);
var state_58265__$1 = state_58265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58265__$1,(11),out,inst_58241);
} else {
if((state_val_58266 === (5))){
var inst_58233 = (state_58265[(10)]);
var inst_58229 = (state_58265[(9)]);
var inst_58226 = (state_58265[(7)]);
var inst_58233__$1 = f.call(null,inst_58229);
var inst_58234 = cljs.core._EQ_.call(null,inst_58233__$1,inst_58226);
var inst_58235 = cljs.core.keyword_identical_QMARK_.call(null,inst_58226,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_58236 = (inst_58234) || (inst_58235);
var state_58265__$1 = (function (){var statearr_58279 = state_58265;
(statearr_58279[(10)] = inst_58233__$1);

return statearr_58279;
})();
if(cljs.core.truth_(inst_58236)){
var statearr_58280_58303 = state_58265__$1;
(statearr_58280_58303[(1)] = (8));

} else {
var statearr_58281_58304 = state_58265__$1;
(statearr_58281_58304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (14))){
var inst_58258 = (state_58265[(2)]);
var inst_58259 = cljs.core.async.close_BANG_.call(null,out);
var state_58265__$1 = (function (){var statearr_58283 = state_58265;
(statearr_58283[(13)] = inst_58258);

return statearr_58283;
})();
var statearr_58284_58305 = state_58265__$1;
(statearr_58284_58305[(2)] = inst_58259);

(statearr_58284_58305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (10))){
var inst_58248 = (state_58265[(2)]);
var state_58265__$1 = state_58265;
var statearr_58285_58306 = state_58265__$1;
(statearr_58285_58306[(2)] = inst_58248);

(statearr_58285_58306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58266 === (8))){
var inst_58233 = (state_58265[(10)]);
var inst_58229 = (state_58265[(9)]);
var inst_58225 = (state_58265[(8)]);
var inst_58238 = inst_58225.push(inst_58229);
var tmp58282 = inst_58225;
var inst_58225__$1 = tmp58282;
var inst_58226 = inst_58233;
var state_58265__$1 = (function (){var statearr_58286 = state_58265;
(statearr_58286[(7)] = inst_58226);

(statearr_58286[(8)] = inst_58225__$1);

(statearr_58286[(14)] = inst_58238);

return statearr_58286;
})();
var statearr_58287_58307 = state_58265__$1;
(statearr_58287_58307[(2)] = null);

(statearr_58287_58307[(1)] = (2));


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
});})(c__56389__auto___58293,out))
;
return ((function (switch__56299__auto__,c__56389__auto___58293,out){
return (function() {
var cljs$core$async$state_machine__56300__auto__ = null;
var cljs$core$async$state_machine__56300__auto____0 = (function (){
var statearr_58288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58288[(0)] = cljs$core$async$state_machine__56300__auto__);

(statearr_58288[(1)] = (1));

return statearr_58288;
});
var cljs$core$async$state_machine__56300__auto____1 = (function (state_58265){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_58265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e58289){if((e58289 instanceof Object)){
var ex__56303__auto__ = e58289;
var statearr_58290_58308 = state_58265;
(statearr_58290_58308[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58309 = state_58265;
state_58265 = G__58309;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
cljs$core$async$state_machine__56300__auto__ = function(state_58265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56300__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56300__auto____1.call(this,state_58265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56300__auto____0;
cljs$core$async$state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56300__auto____1;
return cljs$core$async$state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___58293,out))
})();
var state__56391__auto__ = (function (){var statearr_58291 = f__56390__auto__.call(null);
(statearr_58291[(6)] = c__56389__auto___58293);

return statearr_58291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___58293,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512631539156
