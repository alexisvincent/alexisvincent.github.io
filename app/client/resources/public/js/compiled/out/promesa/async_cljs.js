// Compiled by ClojureScript 1.9.908 {}
goog.provide('promesa.async_cljs');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('promesa.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
promesa.async_cljs.PROMISE_IDX = (6);
promesa.async_cljs.run_state_machine_wrapped = (function promesa$async_cljs$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e53802){if((e53802 instanceof Error)){
var ex = e53802;
var vec__53803 = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,promesa.async_cljs.PROMISE_IDX);
var resolve = cljs.core.nth.call(null,vec__53803,(0),null);
var reject = cljs.core.nth.call(null,vec__53803,(1),null);
reject.call(null,ex);

throw ex;
} else {
throw e53802;

}
}});
promesa.async_cljs.do_take = (function promesa$async_cljs$do_take(state,blk,p){
promesa.protocols._bind.call(null,p,(function (v){
var statearr_53806_53807 = state;
(statearr_53806_53807[(2)] = v);

(statearr_53806_53807[(1)] = blk);


promesa.async_cljs.run_state_machine_wrapped.call(null,state);

return v;
}));

return null;
});
promesa.async_cljs.do_return = (function promesa$async_cljs$do_return(state,value){
var vec__53808 = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,promesa.async_cljs.PROMISE_IDX);
var resolve = cljs.core.nth.call(null,vec__53808,(0),null);
var reject = cljs.core.nth.call(null,vec__53808,(1),null);
return resolve.call(null,value);
});

//# sourceMappingURL=async_cljs.js.map?rel=1509641109143
