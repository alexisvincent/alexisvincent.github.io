// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e62010){if((e62010 instanceof Error)){
var e = e62010;
return "Error: Unable to stringify";
} else {
throw e62010;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__62013 = arguments.length;
switch (G__62013) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__62011_SHARP_){
if(typeof p1__62011_SHARP_ === 'string'){
return p1__62011_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__62011_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62016 = arguments.length;
var i__44090__auto___62017 = (0);
while(true){
if((i__44090__auto___62017 < len__44089__auto___62016)){
args__44096__auto__.push((arguments[i__44090__auto___62017]));

var G__62018 = (i__44090__auto___62017 + (1));
i__44090__auto___62017 = G__62018;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq62015){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62015));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62020 = arguments.length;
var i__44090__auto___62021 = (0);
while(true){
if((i__44090__auto___62021 < len__44089__auto___62020)){
args__44096__auto__.push((arguments[i__44090__auto___62021]));

var G__62022 = (i__44090__auto___62021 + (1));
i__44090__auto___62021 = G__62022;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq62019){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62019));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__62023){
var map__62024 = p__62023;
var map__62024__$1 = ((((!((map__62024 == null)))?((((map__62024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62024):map__62024);
var message = cljs.core.get.call(null,map__62024__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__62024__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__41411__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__41384__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__41384__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__41384__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__56389__auto___62103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___62103,ch){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___62103,ch){
return (function (state_62075){
var state_val_62076 = (state_62075[(1)]);
if((state_val_62076 === (7))){
var inst_62071 = (state_62075[(2)]);
var state_62075__$1 = state_62075;
var statearr_62077_62104 = state_62075__$1;
(statearr_62077_62104[(2)] = inst_62071);

(statearr_62077_62104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (1))){
var state_62075__$1 = state_62075;
var statearr_62078_62105 = state_62075__$1;
(statearr_62078_62105[(2)] = null);

(statearr_62078_62105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (4))){
var inst_62028 = (state_62075[(7)]);
var inst_62028__$1 = (state_62075[(2)]);
var state_62075__$1 = (function (){var statearr_62079 = state_62075;
(statearr_62079[(7)] = inst_62028__$1);

return statearr_62079;
})();
if(cljs.core.truth_(inst_62028__$1)){
var statearr_62080_62106 = state_62075__$1;
(statearr_62080_62106[(1)] = (5));

} else {
var statearr_62081_62107 = state_62075__$1;
(statearr_62081_62107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (15))){
var inst_62035 = (state_62075[(8)]);
var inst_62050 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_62035);
var inst_62051 = cljs.core.first.call(null,inst_62050);
var inst_62052 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_62051);
var inst_62053 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62052)].join('');
var inst_62054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_62053);
var state_62075__$1 = state_62075;
var statearr_62082_62108 = state_62075__$1;
(statearr_62082_62108[(2)] = inst_62054);

(statearr_62082_62108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (13))){
var inst_62059 = (state_62075[(2)]);
var state_62075__$1 = state_62075;
var statearr_62083_62109 = state_62075__$1;
(statearr_62083_62109[(2)] = inst_62059);

(statearr_62083_62109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (6))){
var state_62075__$1 = state_62075;
var statearr_62084_62110 = state_62075__$1;
(statearr_62084_62110[(2)] = null);

(statearr_62084_62110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (17))){
var inst_62057 = (state_62075[(2)]);
var state_62075__$1 = state_62075;
var statearr_62085_62111 = state_62075__$1;
(statearr_62085_62111[(2)] = inst_62057);

(statearr_62085_62111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (3))){
var inst_62073 = (state_62075[(2)]);
var state_62075__$1 = state_62075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62075__$1,inst_62073);
} else {
if((state_val_62076 === (12))){
var inst_62034 = (state_62075[(9)]);
var inst_62048 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_62034,opts);
var state_62075__$1 = state_62075;
if(cljs.core.truth_(inst_62048)){
var statearr_62086_62112 = state_62075__$1;
(statearr_62086_62112[(1)] = (15));

} else {
var statearr_62087_62113 = state_62075__$1;
(statearr_62087_62113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (2))){
var state_62075__$1 = state_62075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62075__$1,(4),ch);
} else {
if((state_val_62076 === (11))){
var inst_62035 = (state_62075[(8)]);
var inst_62040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62041 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_62035);
var inst_62042 = cljs.core.async.timeout.call(null,(1000));
var inst_62043 = [inst_62041,inst_62042];
var inst_62044 = (new cljs.core.PersistentVector(null,2,(5),inst_62040,inst_62043,null));
var state_62075__$1 = state_62075;
return cljs.core.async.ioc_alts_BANG_.call(null,state_62075__$1,(14),inst_62044);
} else {
if((state_val_62076 === (9))){
var inst_62035 = (state_62075[(8)]);
var inst_62061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_62062 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_62035);
var inst_62063 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_62062);
var inst_62064 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_62063)].join('');
var inst_62065 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_62064);
var state_62075__$1 = (function (){var statearr_62088 = state_62075;
(statearr_62088[(10)] = inst_62061);

return statearr_62088;
})();
var statearr_62089_62114 = state_62075__$1;
(statearr_62089_62114[(2)] = inst_62065);

(statearr_62089_62114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (5))){
var inst_62028 = (state_62075[(7)]);
var inst_62030 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_62031 = (new cljs.core.PersistentArrayMap(null,2,inst_62030,null));
var inst_62032 = (new cljs.core.PersistentHashSet(null,inst_62031,null));
var inst_62033 = figwheel.client.focus_msgs.call(null,inst_62032,inst_62028);
var inst_62034 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_62033);
var inst_62035 = cljs.core.first.call(null,inst_62033);
var inst_62036 = figwheel.client.autoload_QMARK_.call(null);
var state_62075__$1 = (function (){var statearr_62090 = state_62075;
(statearr_62090[(8)] = inst_62035);

(statearr_62090[(9)] = inst_62034);

return statearr_62090;
})();
if(cljs.core.truth_(inst_62036)){
var statearr_62091_62115 = state_62075__$1;
(statearr_62091_62115[(1)] = (8));

} else {
var statearr_62092_62116 = state_62075__$1;
(statearr_62092_62116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (14))){
var inst_62046 = (state_62075[(2)]);
var state_62075__$1 = state_62075;
var statearr_62093_62117 = state_62075__$1;
(statearr_62093_62117[(2)] = inst_62046);

(statearr_62093_62117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (16))){
var state_62075__$1 = state_62075;
var statearr_62094_62118 = state_62075__$1;
(statearr_62094_62118[(2)] = null);

(statearr_62094_62118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (10))){
var inst_62067 = (state_62075[(2)]);
var state_62075__$1 = (function (){var statearr_62095 = state_62075;
(statearr_62095[(11)] = inst_62067);

return statearr_62095;
})();
var statearr_62096_62119 = state_62075__$1;
(statearr_62096_62119[(2)] = null);

(statearr_62096_62119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (8))){
var inst_62034 = (state_62075[(9)]);
var inst_62038 = figwheel.client.reload_file_state_QMARK_.call(null,inst_62034,opts);
var state_62075__$1 = state_62075;
if(cljs.core.truth_(inst_62038)){
var statearr_62097_62120 = state_62075__$1;
(statearr_62097_62120[(1)] = (11));

} else {
var statearr_62098_62121 = state_62075__$1;
(statearr_62098_62121[(1)] = (12));

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
});})(c__56389__auto___62103,ch))
;
return ((function (switch__56299__auto__,c__56389__auto___62103,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__56300__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__56300__auto____0 = (function (){
var statearr_62099 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62099[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__56300__auto__);

(statearr_62099[(1)] = (1));

return statearr_62099;
});
var figwheel$client$file_reloader_plugin_$_state_machine__56300__auto____1 = (function (state_62075){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_62075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e62100){if((e62100 instanceof Object)){
var ex__56303__auto__ = e62100;
var statearr_62101_62122 = state_62075;
(statearr_62101_62122[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62123 = state_62075;
state_62075 = G__62123;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__56300__auto__ = function(state_62075){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__56300__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__56300__auto____1.call(this,state_62075);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__56300__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__56300__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___62103,ch))
})();
var state__56391__auto__ = (function (){var statearr_62102 = f__56390__auto__.call(null);
(statearr_62102[(6)] = c__56389__auto___62103);

return statearr_62102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___62103,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__62124_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__62124_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_62126 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_62126){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e62125){if((e62125 instanceof Error)){
var e = e62125;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_62126], null));
} else {
var e = e62125;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_62126))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__62127){
var map__62128 = p__62127;
var map__62128__$1 = ((((!((map__62128 == null)))?((((map__62128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62128):map__62128);
var opts = map__62128__$1;
var build_id = cljs.core.get.call(null,map__62128__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__62128,map__62128__$1,opts,build_id){
return (function (p__62130){
var vec__62131 = p__62130;
var seq__62132 = cljs.core.seq.call(null,vec__62131);
var first__62133 = cljs.core.first.call(null,seq__62132);
var seq__62132__$1 = cljs.core.next.call(null,seq__62132);
var map__62134 = first__62133;
var map__62134__$1 = ((((!((map__62134 == null)))?((((map__62134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62134):map__62134);
var msg = map__62134__$1;
var msg_name = cljs.core.get.call(null,map__62134__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__62132__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__62131,seq__62132,first__62133,seq__62132__$1,map__62134,map__62134__$1,msg,msg_name,_,map__62128,map__62128__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__62131,seq__62132,first__62133,seq__62132__$1,map__62134,map__62134__$1,msg,msg_name,_,map__62128,map__62128__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__62128,map__62128__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__62136){
var vec__62137 = p__62136;
var seq__62138 = cljs.core.seq.call(null,vec__62137);
var first__62139 = cljs.core.first.call(null,seq__62138);
var seq__62138__$1 = cljs.core.next.call(null,seq__62138);
var map__62140 = first__62139;
var map__62140__$1 = ((((!((map__62140 == null)))?((((map__62140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62140):map__62140);
var msg = map__62140__$1;
var msg_name = cljs.core.get.call(null,map__62140__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__62138__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__62142){
var map__62143 = p__62142;
var map__62143__$1 = ((((!((map__62143 == null)))?((((map__62143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62143):map__62143);
var on_compile_warning = cljs.core.get.call(null,map__62143__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__62143__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__62143,map__62143__$1,on_compile_warning,on_compile_fail){
return (function (p__62145){
var vec__62146 = p__62145;
var seq__62147 = cljs.core.seq.call(null,vec__62146);
var first__62148 = cljs.core.first.call(null,seq__62147);
var seq__62147__$1 = cljs.core.next.call(null,seq__62147);
var map__62149 = first__62148;
var map__62149__$1 = ((((!((map__62149 == null)))?((((map__62149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62149):map__62149);
var msg = map__62149__$1;
var msg_name = cljs.core.get.call(null,map__62149__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__62147__$1;
var pred__62151 = cljs.core._EQ_;
var expr__62152 = msg_name;
if(cljs.core.truth_(pred__62151.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__62152))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__62151.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__62152))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__62143,map__62143__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__,msg_hist,msg_names,msg){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__,msg_hist,msg_names,msg){
return (function (state_62241){
var state_val_62242 = (state_62241[(1)]);
if((state_val_62242 === (7))){
var inst_62161 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
if(cljs.core.truth_(inst_62161)){
var statearr_62243_62290 = state_62241__$1;
(statearr_62243_62290[(1)] = (8));

} else {
var statearr_62244_62291 = state_62241__$1;
(statearr_62244_62291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (20))){
var inst_62235 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62245_62292 = state_62241__$1;
(statearr_62245_62292[(2)] = inst_62235);

(statearr_62245_62292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (27))){
var inst_62231 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62246_62293 = state_62241__$1;
(statearr_62246_62293[(2)] = inst_62231);

(statearr_62246_62293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (1))){
var inst_62154 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_62241__$1 = state_62241;
if(cljs.core.truth_(inst_62154)){
var statearr_62247_62294 = state_62241__$1;
(statearr_62247_62294[(1)] = (2));

} else {
var statearr_62248_62295 = state_62241__$1;
(statearr_62248_62295[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (24))){
var inst_62233 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62249_62296 = state_62241__$1;
(statearr_62249_62296[(2)] = inst_62233);

(statearr_62249_62296[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (4))){
var inst_62239 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62241__$1,inst_62239);
} else {
if((state_val_62242 === (15))){
var inst_62237 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62250_62297 = state_62241__$1;
(statearr_62250_62297[(2)] = inst_62237);

(statearr_62250_62297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (21))){
var inst_62190 = (state_62241[(2)]);
var inst_62191 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62192 = figwheel.client.auto_jump_to_error.call(null,opts,inst_62191);
var state_62241__$1 = (function (){var statearr_62251 = state_62241;
(statearr_62251[(7)] = inst_62190);

return statearr_62251;
})();
var statearr_62252_62298 = state_62241__$1;
(statearr_62252_62298[(2)] = inst_62192);

(statearr_62252_62298[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (31))){
var inst_62220 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_62241__$1 = state_62241;
if(cljs.core.truth_(inst_62220)){
var statearr_62253_62299 = state_62241__$1;
(statearr_62253_62299[(1)] = (34));

} else {
var statearr_62254_62300 = state_62241__$1;
(statearr_62254_62300[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (32))){
var inst_62229 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62255_62301 = state_62241__$1;
(statearr_62255_62301[(2)] = inst_62229);

(statearr_62255_62301[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (33))){
var inst_62216 = (state_62241[(2)]);
var inst_62217 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62218 = figwheel.client.auto_jump_to_error.call(null,opts,inst_62217);
var state_62241__$1 = (function (){var statearr_62256 = state_62241;
(statearr_62256[(8)] = inst_62216);

return statearr_62256;
})();
var statearr_62257_62302 = state_62241__$1;
(statearr_62257_62302[(2)] = inst_62218);

(statearr_62257_62302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (13))){
var inst_62175 = figwheel.client.heads_up.clear.call(null);
var state_62241__$1 = state_62241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(16),inst_62175);
} else {
if((state_val_62242 === (22))){
var inst_62196 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62197 = figwheel.client.heads_up.append_warning_message.call(null,inst_62196);
var state_62241__$1 = state_62241;
var statearr_62258_62303 = state_62241__$1;
(statearr_62258_62303[(2)] = inst_62197);

(statearr_62258_62303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (36))){
var inst_62227 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62259_62304 = state_62241__$1;
(statearr_62259_62304[(2)] = inst_62227);

(statearr_62259_62304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (29))){
var inst_62207 = (state_62241[(2)]);
var inst_62208 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62209 = figwheel.client.auto_jump_to_error.call(null,opts,inst_62208);
var state_62241__$1 = (function (){var statearr_62260 = state_62241;
(statearr_62260[(9)] = inst_62207);

return statearr_62260;
})();
var statearr_62261_62305 = state_62241__$1;
(statearr_62261_62305[(2)] = inst_62209);

(statearr_62261_62305[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (6))){
var inst_62156 = (state_62241[(10)]);
var state_62241__$1 = state_62241;
var statearr_62262_62306 = state_62241__$1;
(statearr_62262_62306[(2)] = inst_62156);

(statearr_62262_62306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (28))){
var inst_62203 = (state_62241[(2)]);
var inst_62204 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62205 = figwheel.client.heads_up.display_warning.call(null,inst_62204);
var state_62241__$1 = (function (){var statearr_62263 = state_62241;
(statearr_62263[(11)] = inst_62203);

return statearr_62263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(29),inst_62205);
} else {
if((state_val_62242 === (25))){
var inst_62201 = figwheel.client.heads_up.clear.call(null);
var state_62241__$1 = state_62241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(28),inst_62201);
} else {
if((state_val_62242 === (34))){
var inst_62222 = figwheel.client.heads_up.flash_loaded.call(null);
var state_62241__$1 = state_62241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(37),inst_62222);
} else {
if((state_val_62242 === (17))){
var inst_62181 = (state_62241[(2)]);
var inst_62182 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62183 = figwheel.client.auto_jump_to_error.call(null,opts,inst_62182);
var state_62241__$1 = (function (){var statearr_62264 = state_62241;
(statearr_62264[(12)] = inst_62181);

return statearr_62264;
})();
var statearr_62265_62307 = state_62241__$1;
(statearr_62265_62307[(2)] = inst_62183);

(statearr_62265_62307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (3))){
var inst_62173 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_62241__$1 = state_62241;
if(cljs.core.truth_(inst_62173)){
var statearr_62266_62308 = state_62241__$1;
(statearr_62266_62308[(1)] = (13));

} else {
var statearr_62267_62309 = state_62241__$1;
(statearr_62267_62309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (12))){
var inst_62169 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62268_62310 = state_62241__$1;
(statearr_62268_62310[(2)] = inst_62169);

(statearr_62268_62310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (2))){
var inst_62156 = (state_62241[(10)]);
var inst_62156__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_62241__$1 = (function (){var statearr_62269 = state_62241;
(statearr_62269[(10)] = inst_62156__$1);

return statearr_62269;
})();
if(cljs.core.truth_(inst_62156__$1)){
var statearr_62270_62311 = state_62241__$1;
(statearr_62270_62311[(1)] = (5));

} else {
var statearr_62271_62312 = state_62241__$1;
(statearr_62271_62312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (23))){
var inst_62199 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_62241__$1 = state_62241;
if(cljs.core.truth_(inst_62199)){
var statearr_62272_62313 = state_62241__$1;
(statearr_62272_62313[(1)] = (25));

} else {
var statearr_62273_62314 = state_62241__$1;
(statearr_62273_62314[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (35))){
var state_62241__$1 = state_62241;
var statearr_62274_62315 = state_62241__$1;
(statearr_62274_62315[(2)] = null);

(statearr_62274_62315[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (19))){
var inst_62194 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_62241__$1 = state_62241;
if(cljs.core.truth_(inst_62194)){
var statearr_62275_62316 = state_62241__$1;
(statearr_62275_62316[(1)] = (22));

} else {
var statearr_62276_62317 = state_62241__$1;
(statearr_62276_62317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (11))){
var inst_62165 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62277_62318 = state_62241__$1;
(statearr_62277_62318[(2)] = inst_62165);

(statearr_62277_62318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (9))){
var inst_62167 = figwheel.client.heads_up.clear.call(null);
var state_62241__$1 = state_62241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(12),inst_62167);
} else {
if((state_val_62242 === (5))){
var inst_62158 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_62241__$1 = state_62241;
var statearr_62278_62319 = state_62241__$1;
(statearr_62278_62319[(2)] = inst_62158);

(statearr_62278_62319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (14))){
var inst_62185 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_62241__$1 = state_62241;
if(cljs.core.truth_(inst_62185)){
var statearr_62279_62320 = state_62241__$1;
(statearr_62279_62320[(1)] = (18));

} else {
var statearr_62280_62321 = state_62241__$1;
(statearr_62280_62321[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (26))){
var inst_62211 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_62241__$1 = state_62241;
if(cljs.core.truth_(inst_62211)){
var statearr_62281_62322 = state_62241__$1;
(statearr_62281_62322[(1)] = (30));

} else {
var statearr_62282_62323 = state_62241__$1;
(statearr_62282_62323[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (16))){
var inst_62177 = (state_62241[(2)]);
var inst_62178 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62179 = figwheel.client.heads_up.display_exception.call(null,inst_62178);
var state_62241__$1 = (function (){var statearr_62283 = state_62241;
(statearr_62283[(13)] = inst_62177);

return statearr_62283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(17),inst_62179);
} else {
if((state_val_62242 === (30))){
var inst_62213 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62214 = figwheel.client.heads_up.display_warning.call(null,inst_62213);
var state_62241__$1 = state_62241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(33),inst_62214);
} else {
if((state_val_62242 === (10))){
var inst_62171 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62284_62324 = state_62241__$1;
(statearr_62284_62324[(2)] = inst_62171);

(statearr_62284_62324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (18))){
var inst_62187 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_62188 = figwheel.client.heads_up.display_exception.call(null,inst_62187);
var state_62241__$1 = state_62241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(21),inst_62188);
} else {
if((state_val_62242 === (37))){
var inst_62224 = (state_62241[(2)]);
var state_62241__$1 = state_62241;
var statearr_62285_62325 = state_62241__$1;
(statearr_62285_62325[(2)] = inst_62224);

(statearr_62285_62325[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62242 === (8))){
var inst_62163 = figwheel.client.heads_up.flash_loaded.call(null);
var state_62241__$1 = state_62241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62241__$1,(11),inst_62163);
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
});})(c__56389__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__56299__auto__,c__56389__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto____0 = (function (){
var statearr_62286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62286[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto__);

(statearr_62286[(1)] = (1));

return statearr_62286;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto____1 = (function (state_62241){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_62241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e62287){if((e62287 instanceof Object)){
var ex__56303__auto__ = e62287;
var statearr_62288_62326 = state_62241;
(statearr_62288_62326[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62327 = state_62241;
state_62241 = G__62327;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto__ = function(state_62241){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto____1.call(this,state_62241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__,msg_hist,msg_names,msg))
})();
var state__56391__auto__ = (function (){var statearr_62289 = f__56390__auto__.call(null);
(statearr_62289[(6)] = c__56389__auto__);

return statearr_62289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__,msg_hist,msg_names,msg))
);

return c__56389__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__56389__auto___62356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto___62356,ch){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto___62356,ch){
return (function (state_62342){
var state_val_62343 = (state_62342[(1)]);
if((state_val_62343 === (1))){
var state_62342__$1 = state_62342;
var statearr_62344_62357 = state_62342__$1;
(statearr_62344_62357[(2)] = null);

(statearr_62344_62357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62343 === (2))){
var state_62342__$1 = state_62342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62342__$1,(4),ch);
} else {
if((state_val_62343 === (3))){
var inst_62340 = (state_62342[(2)]);
var state_62342__$1 = state_62342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62342__$1,inst_62340);
} else {
if((state_val_62343 === (4))){
var inst_62330 = (state_62342[(7)]);
var inst_62330__$1 = (state_62342[(2)]);
var state_62342__$1 = (function (){var statearr_62345 = state_62342;
(statearr_62345[(7)] = inst_62330__$1);

return statearr_62345;
})();
if(cljs.core.truth_(inst_62330__$1)){
var statearr_62346_62358 = state_62342__$1;
(statearr_62346_62358[(1)] = (5));

} else {
var statearr_62347_62359 = state_62342__$1;
(statearr_62347_62359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62343 === (5))){
var inst_62330 = (state_62342[(7)]);
var inst_62332 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_62330);
var state_62342__$1 = state_62342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62342__$1,(8),inst_62332);
} else {
if((state_val_62343 === (6))){
var state_62342__$1 = state_62342;
var statearr_62348_62360 = state_62342__$1;
(statearr_62348_62360[(2)] = null);

(statearr_62348_62360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62343 === (7))){
var inst_62338 = (state_62342[(2)]);
var state_62342__$1 = state_62342;
var statearr_62349_62361 = state_62342__$1;
(statearr_62349_62361[(2)] = inst_62338);

(statearr_62349_62361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62343 === (8))){
var inst_62334 = (state_62342[(2)]);
var state_62342__$1 = (function (){var statearr_62350 = state_62342;
(statearr_62350[(8)] = inst_62334);

return statearr_62350;
})();
var statearr_62351_62362 = state_62342__$1;
(statearr_62351_62362[(2)] = null);

(statearr_62351_62362[(1)] = (2));


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
});})(c__56389__auto___62356,ch))
;
return ((function (switch__56299__auto__,c__56389__auto___62356,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__56300__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__56300__auto____0 = (function (){
var statearr_62352 = [null,null,null,null,null,null,null,null,null];
(statearr_62352[(0)] = figwheel$client$heads_up_plugin_$_state_machine__56300__auto__);

(statearr_62352[(1)] = (1));

return statearr_62352;
});
var figwheel$client$heads_up_plugin_$_state_machine__56300__auto____1 = (function (state_62342){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_62342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e62353){if((e62353 instanceof Object)){
var ex__56303__auto__ = e62353;
var statearr_62354_62363 = state_62342;
(statearr_62354_62363[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62364 = state_62342;
state_62342 = G__62364;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__56300__auto__ = function(state_62342){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__56300__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__56300__auto____1.call(this,state_62342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__56300__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__56300__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto___62356,ch))
})();
var state__56391__auto__ = (function (){var statearr_62355 = f__56390__auto__.call(null);
(statearr_62355[(6)] = c__56389__auto___62356);

return statearr_62355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto___62356,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__){
return (function (state_62370){
var state_val_62371 = (state_62370[(1)]);
if((state_val_62371 === (1))){
var inst_62365 = cljs.core.async.timeout.call(null,(3000));
var state_62370__$1 = state_62370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62370__$1,(2),inst_62365);
} else {
if((state_val_62371 === (2))){
var inst_62367 = (state_62370[(2)]);
var inst_62368 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_62370__$1 = (function (){var statearr_62372 = state_62370;
(statearr_62372[(7)] = inst_62367);

return statearr_62372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62370__$1,inst_62368);
} else {
return null;
}
}
});})(c__56389__auto__))
;
return ((function (switch__56299__auto__,c__56389__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__56300__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__56300__auto____0 = (function (){
var statearr_62373 = [null,null,null,null,null,null,null,null];
(statearr_62373[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__56300__auto__);

(statearr_62373[(1)] = (1));

return statearr_62373;
});
var figwheel$client$enforce_project_plugin_$_state_machine__56300__auto____1 = (function (state_62370){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_62370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e62374){if((e62374 instanceof Object)){
var ex__56303__auto__ = e62374;
var statearr_62375_62377 = state_62370;
(statearr_62375_62377[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62378 = state_62370;
state_62370 = G__62378;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__56300__auto__ = function(state_62370){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__56300__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__56300__auto____1.call(this,state_62370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__56300__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__56300__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__))
})();
var state__56391__auto__ = (function (){var statearr_62376 = f__56390__auto__.call(null);
(statearr_62376[(6)] = c__56389__auto__);

return statearr_62376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__))
);

return c__56389__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__56389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__56389__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__56390__auto__ = (function (){var switch__56299__auto__ = ((function (c__56389__auto__,figwheel_version,temp__5278__auto__){
return (function (state_62385){
var state_val_62386 = (state_62385[(1)]);
if((state_val_62386 === (1))){
var inst_62379 = cljs.core.async.timeout.call(null,(2000));
var state_62385__$1 = state_62385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62385__$1,(2),inst_62379);
} else {
if((state_val_62386 === (2))){
var inst_62381 = (state_62385[(2)]);
var inst_62382 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_62383 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_62382);
var state_62385__$1 = (function (){var statearr_62387 = state_62385;
(statearr_62387[(7)] = inst_62381);

return statearr_62387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62385__$1,inst_62383);
} else {
return null;
}
}
});})(c__56389__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__56299__auto__,c__56389__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto____0 = (function (){
var statearr_62388 = [null,null,null,null,null,null,null,null];
(statearr_62388[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto__);

(statearr_62388[(1)] = (1));

return statearr_62388;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto____1 = (function (state_62385){
while(true){
var ret_value__56301__auto__ = (function (){try{while(true){
var result__56302__auto__ = switch__56299__auto__.call(null,state_62385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__56302__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56302__auto__;
}
break;
}
}catch (e62389){if((e62389 instanceof Object)){
var ex__56303__auto__ = e62389;
var statearr_62390_62392 = state_62385;
(statearr_62390_62392[(5)] = ex__56303__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__56301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62393 = state_62385;
state_62385 = G__62393;
continue;
} else {
return ret_value__56301__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto__ = function(state_62385){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto____1.call(this,state_62385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__56300__auto__;
})()
;})(switch__56299__auto__,c__56389__auto__,figwheel_version,temp__5278__auto__))
})();
var state__56391__auto__ = (function (){var statearr_62391 = f__56390__auto__.call(null);
(statearr_62391[(6)] = c__56389__auto__);

return statearr_62391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__56391__auto__);
});})(c__56389__auto__,figwheel_version,temp__5278__auto__))
);

return c__56389__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__62394){
var map__62395 = p__62394;
var map__62395__$1 = ((((!((map__62395 == null)))?((((map__62395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62395):map__62395);
var file = cljs.core.get.call(null,map__62395__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__62395__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__62395__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__62397 = "";
var G__62397__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62397),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__62397);
var G__62397__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62397__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__62397__$1);
if(cljs.core.truth_((function (){var and__41384__auto__ = line;
if(cljs.core.truth_(and__41384__auto__)){
return column;
} else {
return and__41384__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62397__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__62397__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__62398){
var map__62399 = p__62398;
var map__62399__$1 = ((((!((map__62399 == null)))?((((map__62399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62399):map__62399);
var ed = map__62399__$1;
var formatted_exception = cljs.core.get.call(null,map__62399__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__62399__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__62399__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__62401_62405 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__62402_62406 = null;
var count__62403_62407 = (0);
var i__62404_62408 = (0);
while(true){
if((i__62404_62408 < count__62403_62407)){
var msg_62409 = cljs.core._nth.call(null,chunk__62402_62406,i__62404_62408);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_62409);

var G__62410 = seq__62401_62405;
var G__62411 = chunk__62402_62406;
var G__62412 = count__62403_62407;
var G__62413 = (i__62404_62408 + (1));
seq__62401_62405 = G__62410;
chunk__62402_62406 = G__62411;
count__62403_62407 = G__62412;
i__62404_62408 = G__62413;
continue;
} else {
var temp__5278__auto___62414 = cljs.core.seq.call(null,seq__62401_62405);
if(temp__5278__auto___62414){
var seq__62401_62415__$1 = temp__5278__auto___62414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62401_62415__$1)){
var c__43430__auto___62416 = cljs.core.chunk_first.call(null,seq__62401_62415__$1);
var G__62417 = cljs.core.chunk_rest.call(null,seq__62401_62415__$1);
var G__62418 = c__43430__auto___62416;
var G__62419 = cljs.core.count.call(null,c__43430__auto___62416);
var G__62420 = (0);
seq__62401_62405 = G__62417;
chunk__62402_62406 = G__62418;
count__62403_62407 = G__62419;
i__62404_62408 = G__62420;
continue;
} else {
var msg_62421 = cljs.core.first.call(null,seq__62401_62415__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_62421);

var G__62422 = cljs.core.next.call(null,seq__62401_62415__$1);
var G__62423 = null;
var G__62424 = (0);
var G__62425 = (0);
seq__62401_62405 = G__62422;
chunk__62402_62406 = G__62423;
count__62403_62407 = G__62424;
i__62404_62408 = G__62425;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__62426){
var map__62427 = p__62426;
var map__62427__$1 = ((((!((map__62427 == null)))?((((map__62427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62427):map__62427);
var w = map__62427__$1;
var message = cljs.core.get.call(null,map__62427__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__41384__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__41384__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__41384__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__62429 = cljs.core.seq.call(null,plugins);
var chunk__62430 = null;
var count__62431 = (0);
var i__62432 = (0);
while(true){
if((i__62432 < count__62431)){
var vec__62433 = cljs.core._nth.call(null,chunk__62430,i__62432);
var k = cljs.core.nth.call(null,vec__62433,(0),null);
var plugin = cljs.core.nth.call(null,vec__62433,(1),null);
if(cljs.core.truth_(plugin)){
var pl_62439 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__62429,chunk__62430,count__62431,i__62432,pl_62439,vec__62433,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_62439.call(null,msg_hist);
});})(seq__62429,chunk__62430,count__62431,i__62432,pl_62439,vec__62433,k,plugin))
);
} else {
}

var G__62440 = seq__62429;
var G__62441 = chunk__62430;
var G__62442 = count__62431;
var G__62443 = (i__62432 + (1));
seq__62429 = G__62440;
chunk__62430 = G__62441;
count__62431 = G__62442;
i__62432 = G__62443;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__62429);
if(temp__5278__auto__){
var seq__62429__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62429__$1)){
var c__43430__auto__ = cljs.core.chunk_first.call(null,seq__62429__$1);
var G__62444 = cljs.core.chunk_rest.call(null,seq__62429__$1);
var G__62445 = c__43430__auto__;
var G__62446 = cljs.core.count.call(null,c__43430__auto__);
var G__62447 = (0);
seq__62429 = G__62444;
chunk__62430 = G__62445;
count__62431 = G__62446;
i__62432 = G__62447;
continue;
} else {
var vec__62436 = cljs.core.first.call(null,seq__62429__$1);
var k = cljs.core.nth.call(null,vec__62436,(0),null);
var plugin = cljs.core.nth.call(null,vec__62436,(1),null);
if(cljs.core.truth_(plugin)){
var pl_62448 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__62429,chunk__62430,count__62431,i__62432,pl_62448,vec__62436,k,plugin,seq__62429__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_62448.call(null,msg_hist);
});})(seq__62429,chunk__62430,count__62431,i__62432,pl_62448,vec__62436,k,plugin,seq__62429__$1,temp__5278__auto__))
);
} else {
}

var G__62449 = cljs.core.next.call(null,seq__62429__$1);
var G__62450 = null;
var G__62451 = (0);
var G__62452 = (0);
seq__62429 = G__62449;
chunk__62430 = G__62450;
count__62431 = G__62451;
i__62432 = G__62452;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__62454 = arguments.length;
switch (G__62454) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__62455_62460 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__62456_62461 = null;
var count__62457_62462 = (0);
var i__62458_62463 = (0);
while(true){
if((i__62458_62463 < count__62457_62462)){
var msg_62464 = cljs.core._nth.call(null,chunk__62456_62461,i__62458_62463);
figwheel.client.socket.handle_incoming_message.call(null,msg_62464);

var G__62465 = seq__62455_62460;
var G__62466 = chunk__62456_62461;
var G__62467 = count__62457_62462;
var G__62468 = (i__62458_62463 + (1));
seq__62455_62460 = G__62465;
chunk__62456_62461 = G__62466;
count__62457_62462 = G__62467;
i__62458_62463 = G__62468;
continue;
} else {
var temp__5278__auto___62469 = cljs.core.seq.call(null,seq__62455_62460);
if(temp__5278__auto___62469){
var seq__62455_62470__$1 = temp__5278__auto___62469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62455_62470__$1)){
var c__43430__auto___62471 = cljs.core.chunk_first.call(null,seq__62455_62470__$1);
var G__62472 = cljs.core.chunk_rest.call(null,seq__62455_62470__$1);
var G__62473 = c__43430__auto___62471;
var G__62474 = cljs.core.count.call(null,c__43430__auto___62471);
var G__62475 = (0);
seq__62455_62460 = G__62472;
chunk__62456_62461 = G__62473;
count__62457_62462 = G__62474;
i__62458_62463 = G__62475;
continue;
} else {
var msg_62476 = cljs.core.first.call(null,seq__62455_62470__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_62476);

var G__62477 = cljs.core.next.call(null,seq__62455_62470__$1);
var G__62478 = null;
var G__62479 = (0);
var G__62480 = (0);
seq__62455_62460 = G__62477;
chunk__62456_62461 = G__62478;
count__62457_62462 = G__62479;
i__62458_62463 = G__62480;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__44096__auto__ = [];
var len__44089__auto___62485 = arguments.length;
var i__44090__auto___62486 = (0);
while(true){
if((i__44090__auto___62486 < len__44089__auto___62485)){
args__44096__auto__.push((arguments[i__44090__auto___62486]));

var G__62487 = (i__44090__auto___62486 + (1));
i__44090__auto___62486 = G__62487;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((0) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__44097__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__62482){
var map__62483 = p__62482;
var map__62483__$1 = ((((!((map__62483 == null)))?((((map__62483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62483):map__62483);
var opts = map__62483__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq62481){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62481));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e62488){if((e62488 instanceof Error)){
var e = e62488;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e62488;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__62489){
var map__62490 = p__62489;
var map__62490__$1 = ((((!((map__62490 == null)))?((((map__62490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62490):map__62490);
var msg_name = cljs.core.get.call(null,map__62490__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512631544622
