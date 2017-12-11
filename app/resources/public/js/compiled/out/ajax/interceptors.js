// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42754__auto__,k__42755__auto__){
var self__ = this;
var this__42754__auto____$1 = this;
return this__42754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42755__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42756__auto__,k55028,else__42757__auto__){
var self__ = this;
var this__42756__auto____$1 = this;
var G__55032 = k55028;
var G__55032__$1 = (((G__55032 instanceof cljs.core.Keyword))?G__55032.fqn:null);
switch (G__55032__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k55028,else__42757__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__55033,opts){
var self__ = this;
var map__55034 = p__55033;
var map__55034__$1 = ((((!((map__55034 == null)))?((((map__55034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55034):map__55034);
var request__$1 = cljs.core.get.call(null,map__55034__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__55036 = this;
var map__55036__$1 = ((((!((map__55036 == null)))?((((map__55036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55036):map__55036);
var request__$2 = cljs.core.get.call(null,map__55036__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__55038,xhrio){
var self__ = this;
var map__55039 = p__55038;
var map__55039__$1 = ((((!((map__55039 == null)))?((((map__55039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55039):map__55039);
var response__$1 = cljs.core.get.call(null,map__55039__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__55041 = this;
var map__55041__$1 = ((((!((map__55041 == null)))?((((map__55041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55041):map__55041);
var response__$2 = cljs.core.get.call(null,map__55041__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42772__auto__,writer__42773__auto__,opts__42774__auto__){
var self__ = this;
var this__42772__auto____$1 = this;
var pr_pair__42775__auto__ = ((function (this__42772__auto____$1){
return (function (keyval__42776__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,cljs.core.pr_writer,""," ","",opts__42774__auto__,keyval__42776__auto__);
});})(this__42772__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,pr_pair__42775__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__42774__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55027){
var self__ = this;
var G__55027__$1 = this;
return (new cljs.core.RecordIter((0),G__55027__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42752__auto__){
var self__ = this;
var this__42752__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42749__auto__){
var self__ = this;
var this__42749__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42758__auto__){
var self__ = this;
var this__42758__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42750__auto__){
var self__ = this;
var this__42750__auto____$1 = this;
var h__42272__auto__ = self__.__hash;
if(!((h__42272__auto__ == null))){
return h__42272__auto__;
} else {
var h__42272__auto____$1 = ((function (h__42272__auto__,this__42750__auto____$1){
return (function (coll__42751__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__42751__auto__));
});})(h__42272__auto__,this__42750__auto____$1))
.call(null,this__42750__auto____$1);
self__.__hash = h__42272__auto____$1;

return h__42272__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55029,other55030){
var self__ = this;
var this55029__$1 = this;
return (!((other55030 == null))) && ((this55029__$1.constructor === other55030.constructor)) && (cljs.core._EQ_.call(null,this55029__$1.name,other55030.name)) && (cljs.core._EQ_.call(null,this55029__$1.request,other55030.request)) && (cljs.core._EQ_.call(null,this55029__$1.response,other55030.response)) && (cljs.core._EQ_.call(null,this55029__$1.__extmap,other55030.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42763__auto__,k__42764__auto__){
var self__ = this;
var this__42763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__42764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42763__auto____$1),self__.__meta),k__42764__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42764__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42761__auto__,k__42762__auto__,G__55027){
var self__ = this;
var this__42761__auto____$1 = this;
var pred__55043 = cljs.core.keyword_identical_QMARK_;
var expr__55044 = k__42762__auto__;
if(cljs.core.truth_(pred__55043.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__55044))){
return (new ajax.interceptors.StandardInterceptor(G__55027,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55043.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__55044))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__55027,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55043.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__55044))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__55027,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42762__auto__,G__55027),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42766__auto__){
var self__ = this;
var this__42766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42753__auto__,G__55027){
var self__ = this;
var this__42753__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__55027,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42759__auto__,entry__42760__auto__){
var self__ = this;
var this__42759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42760__auto__)){
return this__42759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42760__auto__,(0)),cljs.core._nth.call(null,entry__42760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42759__auto____$1,entry__42760__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__42885__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__42885__auto__,writer__42886__auto__){
return cljs.core._write.call(null,writer__42886__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__55031){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__55031),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__55031),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__55031),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__55031,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__55047,xhrio){
var map__55048 = p__55047;
var map__55048__$1 = ((((!((map__55048 == null)))?((((map__55048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55048):map__55048);
var description = cljs.core.get.call(null,map__55048__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__43979__auto__ = [];
var len__43967__auto___55054 = arguments.length;
var i__43968__auto___55055 = (0);
while(true){
if((i__43968__auto___55055 < len__43967__auto___55054)){
args__43979__auto__.push((arguments[i__43968__auto___55055]));

var G__55056 = (i__43968__auto___55055 + (1));
i__43968__auto___55055 = G__55056;
continue;
} else {
}
break;
}

var argseq__43980__auto__ = ((((3) < args__43979__auto__.length))?(new cljs.core.IndexedSeq(args__43979__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__43980__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq55050){
var G__55051 = cljs.core.first.call(null,seq55050);
var seq55050__$1 = cljs.core.next.call(null,seq55050);
var G__55052 = cljs.core.first.call(null,seq55050__$1);
var seq55050__$2 = cljs.core.next.call(null,seq55050__$1);
var G__55053 = cljs.core.first.call(null,seq55050__$2);
var seq55050__$3 = cljs.core.next.call(null,seq55050__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__55051,G__55052,G__55053,seq55050__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42754__auto__,k__42755__auto__){
var self__ = this;
var this__42754__auto____$1 = this;
return this__42754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42755__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42756__auto__,k55059,else__42757__auto__){
var self__ = this;
var this__42756__auto____$1 = this;
var G__55063 = k55059;
var G__55063__$1 = (((G__55063 instanceof cljs.core.Keyword))?G__55063.fqn:null);
switch (G__55063__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k55059,else__42757__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__55064,request){
var self__ = this;
var map__55065 = p__55064;
var map__55065__$1 = ((((!((map__55065 == null)))?((((map__55065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55065):map__55065);
var content_type__$1 = cljs.core.get.call(null,map__55065__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__55067 = this;
var map__55067__$1 = ((((!((map__55067 == null)))?((((map__55067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55067):map__55067);
var content_type__$2 = cljs.core.get.call(null,map__55067__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__55067,map__55067__$1,content_type__$2,map__55065,map__55065__$1,content_type__$1){
return (function (p1__55057_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__41381__auto__ = p1__55057_SHARP_;
if(cljs.core.truth_(or__41381__auto__)){
return or__41381__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__55067,map__55067__$1,content_type__$2,map__55065,map__55065__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__55069,xhrio){
var self__ = this;
var map__55070 = p__55069;
var map__55070__$1 = ((((!((map__55070 == null)))?((((map__55070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55070):map__55070);
var format = map__55070__$1;
var read__$1 = cljs.core.get.call(null,map__55070__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__55072 = this;
var map__55072__$1 = ((((!((map__55072 == null)))?((((map__55072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55072):map__55072);
var format__$1 = map__55072__$1;
var read__$2 = cljs.core.get.call(null,map__55072__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__55075 = status;
switch (G__55075) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e55076){if((e55076 instanceof Object)){
var e = e55076;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e55076;

}
}
}
}catch (e55074){if((e55074 instanceof Object)){
var e = e55074;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e55074;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42772__auto__,writer__42773__auto__,opts__42774__auto__){
var self__ = this;
var this__42772__auto____$1 = this;
var pr_pair__42775__auto__ = ((function (this__42772__auto____$1){
return (function (keyval__42776__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,cljs.core.pr_writer,""," ","",opts__42774__auto__,keyval__42776__auto__);
});})(this__42772__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,pr_pair__42775__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__42774__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55058){
var self__ = this;
var G__55058__$1 = this;
return (new cljs.core.RecordIter((0),G__55058__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42752__auto__){
var self__ = this;
var this__42752__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42749__auto__){
var self__ = this;
var this__42749__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42758__auto__){
var self__ = this;
var this__42758__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42750__auto__){
var self__ = this;
var this__42750__auto____$1 = this;
var h__42272__auto__ = self__.__hash;
if(!((h__42272__auto__ == null))){
return h__42272__auto__;
} else {
var h__42272__auto____$1 = ((function (h__42272__auto__,this__42750__auto____$1){
return (function (coll__42751__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__42751__auto__));
});})(h__42272__auto__,this__42750__auto____$1))
.call(null,this__42750__auto____$1);
self__.__hash = h__42272__auto____$1;

return h__42272__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55060,other55061){
var self__ = this;
var this55060__$1 = this;
return (!((other55061 == null))) && ((this55060__$1.constructor === other55061.constructor)) && (cljs.core._EQ_.call(null,this55060__$1.read,other55061.read)) && (cljs.core._EQ_.call(null,this55060__$1.description,other55061.description)) && (cljs.core._EQ_.call(null,this55060__$1.content_type,other55061.content_type)) && (cljs.core._EQ_.call(null,this55060__$1.__extmap,other55061.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42763__auto__,k__42764__auto__){
var self__ = this;
var this__42763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__42764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42763__auto____$1),self__.__meta),k__42764__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42764__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42761__auto__,k__42762__auto__,G__55058){
var self__ = this;
var this__42761__auto____$1 = this;
var pred__55077 = cljs.core.keyword_identical_QMARK_;
var expr__55078 = k__42762__auto__;
if(cljs.core.truth_(pred__55077.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__55078))){
return (new ajax.interceptors.ResponseFormat(G__55058,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55077.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__55078))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__55058,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55077.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__55078))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__55058,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42762__auto__,G__55058),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42766__auto__){
var self__ = this;
var this__42766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42753__auto__,G__55058){
var self__ = this;
var this__42753__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__55058,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42759__auto__,entry__42760__auto__){
var self__ = this;
var this__42759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42760__auto__)){
return this__42759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42760__auto__,(0)),cljs.core._nth.call(null,entry__42760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42759__auto____$1,entry__42760__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__42885__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__42885__auto__,writer__42886__auto__){
return cljs.core._write.call(null,writer__42886__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__55062){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__55062),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__55062),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__55062),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__55062,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42754__auto__,k__42755__auto__){
var self__ = this;
var this__42754__auto____$1 = this;
return this__42754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42755__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42756__auto__,k55083,else__42757__auto__){
var self__ = this;
var this__42756__auto____$1 = this;
var G__55087 = k55083;
switch (G__55087) {
default:
return cljs.core.get.call(null,self__.__extmap,k55083,else__42757__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__55088){
var self__ = this;
var map__55089 = p__55088;
var map__55089__$1 = ((((!((map__55089 == null)))?((((map__55089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55089):map__55089);
var request = map__55089__$1;
var uri = cljs.core.get.call(null,map__55089__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__55089__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__55089__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__55089__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__55089__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__55091 = ajax.interceptors.get_request_format.call(null,format);
var map__55091__$1 = ((((!((map__55091 == null)))?((((map__55091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55091):map__55091);
var write = cljs.core.get.call(null,map__55091__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__55091__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__41381__auto__ = headers;
if(cljs.core.truth_(or__41381__auto__)){
return or__41381__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42772__auto__,writer__42773__auto__,opts__42774__auto__){
var self__ = this;
var this__42772__auto____$1 = this;
var pr_pair__42775__auto__ = ((function (this__42772__auto____$1){
return (function (keyval__42776__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,cljs.core.pr_writer,""," ","",opts__42774__auto__,keyval__42776__auto__);
});})(this__42772__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,pr_pair__42775__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__42774__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55082){
var self__ = this;
var G__55082__$1 = this;
return (new cljs.core.RecordIter((0),G__55082__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42752__auto__){
var self__ = this;
var this__42752__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42749__auto__){
var self__ = this;
var this__42749__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42758__auto__){
var self__ = this;
var this__42758__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42750__auto__){
var self__ = this;
var this__42750__auto____$1 = this;
var h__42272__auto__ = self__.__hash;
if(!((h__42272__auto__ == null))){
return h__42272__auto__;
} else {
var h__42272__auto____$1 = ((function (h__42272__auto__,this__42750__auto____$1){
return (function (coll__42751__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__42751__auto__));
});})(h__42272__auto__,this__42750__auto____$1))
.call(null,this__42750__auto____$1);
self__.__hash = h__42272__auto____$1;

return h__42272__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55084,other55085){
var self__ = this;
var this55084__$1 = this;
return (!((other55085 == null))) && ((this55084__$1.constructor === other55085.constructor)) && (cljs.core._EQ_.call(null,this55084__$1.__extmap,other55085.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42763__auto__,k__42764__auto__){
var self__ = this;
var this__42763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42763__auto____$1),self__.__meta),k__42764__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42764__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42761__auto__,k__42762__auto__,G__55082){
var self__ = this;
var this__42761__auto____$1 = this;
var pred__55093 = cljs.core.keyword_identical_QMARK_;
var expr__55094 = k__42762__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42762__auto__,G__55082),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42766__auto__){
var self__ = this;
var this__42766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42753__auto__,G__55082){
var self__ = this;
var this__42753__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__55082,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42759__auto__,entry__42760__auto__){
var self__ = this;
var this__42759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42760__auto__)){
return this__42759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42760__auto__,(0)),cljs.core._nth.call(null,entry__42760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42759__auto____$1,entry__42760__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__42885__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__42885__auto__,writer__42886__auto__){
return cljs.core._write.call(null,writer__42886__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__55086){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__55086)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__55098 = arguments.length;
switch (G__55098) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__55099,uri){
var map__55100 = p__55099;
var map__55100__$1 = ((((!((map__55100 == null)))?((((map__55100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55100):map__55100);
var vec_strategy = cljs.core.get.call(null,map__55100__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__55100__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__55102){
var map__55103 = p__55102;
var map__55103__$1 = ((((!((map__55103 == null)))?((((map__55103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55103):map__55103);
var vec_strategy = cljs.core.get.call(null,map__55103__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__55103__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__55103,map__55103__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__55103,map__55103__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42754__auto__,k__42755__auto__){
var self__ = this;
var this__42754__auto____$1 = this;
return this__42754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42755__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42756__auto__,k55107,else__42757__auto__){
var self__ = this;
var this__42756__auto____$1 = this;
var G__55111 = k55107;
switch (G__55111) {
default:
return cljs.core.get.call(null,self__.__extmap,k55107,else__42757__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__55112){
var self__ = this;
var map__55113 = p__55112;
var map__55113__$1 = ((((!((map__55113 == null)))?((((map__55113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55113):map__55113);
var request = map__55113__$1;
var method = cljs.core.get.call(null,map__55113__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42772__auto__,writer__42773__auto__,opts__42774__auto__){
var self__ = this;
var this__42772__auto____$1 = this;
var pr_pair__42775__auto__ = ((function (this__42772__auto____$1){
return (function (keyval__42776__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,cljs.core.pr_writer,""," ","",opts__42774__auto__,keyval__42776__auto__);
});})(this__42772__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,pr_pair__42775__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__42774__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55106){
var self__ = this;
var G__55106__$1 = this;
return (new cljs.core.RecordIter((0),G__55106__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42752__auto__){
var self__ = this;
var this__42752__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42749__auto__){
var self__ = this;
var this__42749__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42758__auto__){
var self__ = this;
var this__42758__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42750__auto__){
var self__ = this;
var this__42750__auto____$1 = this;
var h__42272__auto__ = self__.__hash;
if(!((h__42272__auto__ == null))){
return h__42272__auto__;
} else {
var h__42272__auto____$1 = ((function (h__42272__auto__,this__42750__auto____$1){
return (function (coll__42751__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__42751__auto__));
});})(h__42272__auto__,this__42750__auto____$1))
.call(null,this__42750__auto____$1);
self__.__hash = h__42272__auto____$1;

return h__42272__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55108,other55109){
var self__ = this;
var this55108__$1 = this;
return (!((other55109 == null))) && ((this55108__$1.constructor === other55109.constructor)) && (cljs.core._EQ_.call(null,this55108__$1.__extmap,other55109.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42763__auto__,k__42764__auto__){
var self__ = this;
var this__42763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42763__auto____$1),self__.__meta),k__42764__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42764__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42761__auto__,k__42762__auto__,G__55106){
var self__ = this;
var this__42761__auto____$1 = this;
var pred__55115 = cljs.core.keyword_identical_QMARK_;
var expr__55116 = k__42762__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42762__auto__,G__55106),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42766__auto__){
var self__ = this;
var this__42766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42753__auto__,G__55106){
var self__ = this;
var this__42753__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__55106,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42759__auto__,entry__42760__auto__){
var self__ = this;
var this__42759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42760__auto__)){
return this__42759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42760__auto__,(0)),cljs.core._nth.call(null,entry__42760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42759__auto____$1,entry__42760__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__42885__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__42885__auto__,writer__42886__auto__){
return cljs.core._write.call(null,writer__42886__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__55110){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__55110)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42754__auto__,k__42755__auto__){
var self__ = this;
var this__42754__auto____$1 = this;
return this__42754__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42755__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42756__auto__,k55120,else__42757__auto__){
var self__ = this;
var this__42756__auto____$1 = this;
var G__55124 = k55120;
switch (G__55124) {
default:
return cljs.core.get.call(null,self__.__extmap,k55120,else__42757__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__55125){
var self__ = this;
var map__55126 = p__55125;
var map__55126__$1 = ((((!((map__55126 == null)))?((((map__55126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55126):map__55126);
var request = map__55126__$1;
var body = cljs.core.get.call(null,map__55126__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42772__auto__,writer__42773__auto__,opts__42774__auto__){
var self__ = this;
var this__42772__auto____$1 = this;
var pr_pair__42775__auto__ = ((function (this__42772__auto____$1){
return (function (keyval__42776__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,cljs.core.pr_writer,""," ","",opts__42774__auto__,keyval__42776__auto__);
});})(this__42772__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42773__auto__,pr_pair__42775__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__42774__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55119){
var self__ = this;
var G__55119__$1 = this;
return (new cljs.core.RecordIter((0),G__55119__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42752__auto__){
var self__ = this;
var this__42752__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42749__auto__){
var self__ = this;
var this__42749__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42758__auto__){
var self__ = this;
var this__42758__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42750__auto__){
var self__ = this;
var this__42750__auto____$1 = this;
var h__42272__auto__ = self__.__hash;
if(!((h__42272__auto__ == null))){
return h__42272__auto__;
} else {
var h__42272__auto____$1 = ((function (h__42272__auto__,this__42750__auto____$1){
return (function (coll__42751__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__42751__auto__));
});})(h__42272__auto__,this__42750__auto____$1))
.call(null,this__42750__auto____$1);
self__.__hash = h__42272__auto____$1;

return h__42272__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55121,other55122){
var self__ = this;
var this55121__$1 = this;
return (!((other55122 == null))) && ((this55121__$1.constructor === other55122.constructor)) && (cljs.core._EQ_.call(null,this55121__$1.__extmap,other55122.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42763__auto__,k__42764__auto__){
var self__ = this;
var this__42763__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42764__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42763__auto____$1),self__.__meta),k__42764__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42764__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42761__auto__,k__42762__auto__,G__55119){
var self__ = this;
var this__42761__auto____$1 = this;
var pred__55128 = cljs.core.keyword_identical_QMARK_;
var expr__55129 = k__42762__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42762__auto__,G__55119),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42766__auto__){
var self__ = this;
var this__42766__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42753__auto__,G__55119){
var self__ = this;
var this__42753__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__55119,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42759__auto__,entry__42760__auto__){
var self__ = this;
var this__42759__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42760__auto__)){
return this__42759__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42760__auto__,(0)),cljs.core._nth.call(null,entry__42760__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42759__auto____$1,entry__42760__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__42885__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__42885__auto__,writer__42886__auto__){
return cljs.core._write.call(null,writer__42886__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__55123){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__55123)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__55132){
var map__55133 = p__55132;
var map__55133__$1 = ((((!((map__55133 == null)))?((((map__55133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55133):map__55133);
var opts = map__55133__$1;
var response_format = cljs.core.get.call(null,map__55133__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map?rel=1513007445526
