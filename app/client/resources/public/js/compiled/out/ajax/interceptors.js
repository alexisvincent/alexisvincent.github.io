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
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k46212,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__46216 = k46212;
var G__46216__$1 = (((G__46216 instanceof cljs.core.Keyword))?G__46216.fqn:null);
switch (G__46216__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k46212,else__42885__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__46217,opts){
var self__ = this;
var map__46218 = p__46217;
var map__46218__$1 = ((((!((map__46218 == null)))?((((map__46218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46218):map__46218);
var request__$1 = cljs.core.get.call(null,map__46218__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__46220 = this;
var map__46220__$1 = ((((!((map__46220 == null)))?((((map__46220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46220):map__46220);
var request__$2 = cljs.core.get.call(null,map__46220__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__46222,xhrio){
var self__ = this;
var map__46223 = p__46222;
var map__46223__$1 = ((((!((map__46223 == null)))?((((map__46223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46223):map__46223);
var response__$1 = cljs.core.get.call(null,map__46223__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__46225 = this;
var map__46225__$1 = ((((!((map__46225 == null)))?((((map__46225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46225):map__46225);
var response__$2 = cljs.core.get.call(null,map__46225__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46211){
var self__ = this;
var G__46211__$1 = this;
return (new cljs.core.RecordIter((0),G__46211__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46213,other46214){
var self__ = this;
var this46213__$1 = this;
return (!((other46214 == null))) && ((this46213__$1.constructor === other46214.constructor)) && (cljs.core._EQ_.call(null,this46213__$1.name,other46214.name)) && (cljs.core._EQ_.call(null,this46213__$1.request,other46214.request)) && (cljs.core._EQ_.call(null,this46213__$1.response,other46214.response)) && (cljs.core._EQ_.call(null,this46213__$1.__extmap,other46214.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__46211){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__46227 = cljs.core.keyword_identical_QMARK_;
var expr__46228 = k__42890__auto__;
if(cljs.core.truth_(pred__46227.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__46228))){
return (new ajax.interceptors.StandardInterceptor(G__46211,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46227.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__46228))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__46211,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46227.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__46228))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__46211,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__46211),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__46211){
var self__ = this;
var this__42881__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__46211,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__46215){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__46215),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__46215),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__46215),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46215,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
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
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__46231,xhrio){
var map__46232 = p__46231;
var map__46232__$1 = ((((!((map__46232 == null)))?((((map__46232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46232.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46232):map__46232);
var description = cljs.core.get.call(null,map__46232__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var args__44096__auto__ = [];
var len__44089__auto___46238 = arguments.length;
var i__44090__auto___46239 = (0);
while(true){
if((i__44090__auto___46239 < len__44089__auto___46238)){
args__44096__auto__.push((arguments[i__44090__auto___46239]));

var G__46240 = (i__44090__auto___46239 + (1));
i__44090__auto___46239 = G__46240;
continue;
} else {
}
break;
}

var argseq__44097__auto__ = ((((3) < args__44096__auto__.length))?(new cljs.core.IndexedSeq(args__44096__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__44097__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq46234){
var G__46235 = cljs.core.first.call(null,seq46234);
var seq46234__$1 = cljs.core.next.call(null,seq46234);
var G__46236 = cljs.core.first.call(null,seq46234__$1);
var seq46234__$2 = cljs.core.next.call(null,seq46234__$1);
var G__46237 = cljs.core.first.call(null,seq46234__$2);
var seq46234__$3 = cljs.core.next.call(null,seq46234__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__46235,G__46236,G__46237,seq46234__$3);
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
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k46243,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__46247 = k46243;
var G__46247__$1 = (((G__46247 instanceof cljs.core.Keyword))?G__46247.fqn:null);
switch (G__46247__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k46243,else__42885__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__46248,request){
var self__ = this;
var map__46249 = p__46248;
var map__46249__$1 = ((((!((map__46249 == null)))?((((map__46249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46249):map__46249);
var content_type__$1 = cljs.core.get.call(null,map__46249__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__46251 = this;
var map__46251__$1 = ((((!((map__46251 == null)))?((((map__46251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46251):map__46251);
var content_type__$2 = cljs.core.get.call(null,map__46251__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__46251,map__46251__$1,content_type__$2,map__46249,map__46249__$1,content_type__$1){
return (function (p1__46241_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__41411__auto__ = p1__46241_SHARP_;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__46251,map__46251__$1,content_type__$2,map__46249,map__46249__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__46253,xhrio){
var self__ = this;
var map__46254 = p__46253;
var map__46254__$1 = ((((!((map__46254 == null)))?((((map__46254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46254):map__46254);
var format = map__46254__$1;
var read__$1 = cljs.core.get.call(null,map__46254__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__46256 = this;
var map__46256__$1 = ((((!((map__46256 == null)))?((((map__46256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46256):map__46256);
var format__$1 = map__46256__$1;
var read__$2 = cljs.core.get.call(null,map__46256__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__46259 = status;
switch (G__46259) {
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
}catch (e46260){if((e46260 instanceof Object)){
var e = e46260;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e46260;

}
}
}
}catch (e46258){if((e46258 instanceof Object)){
var e = e46258;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e46258;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46242){
var self__ = this;
var G__46242__$1 = this;
return (new cljs.core.RecordIter((0),G__46242__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46244,other46245){
var self__ = this;
var this46244__$1 = this;
return (!((other46245 == null))) && ((this46244__$1.constructor === other46245.constructor)) && (cljs.core._EQ_.call(null,this46244__$1.read,other46245.read)) && (cljs.core._EQ_.call(null,this46244__$1.description,other46245.description)) && (cljs.core._EQ_.call(null,this46244__$1.content_type,other46245.content_type)) && (cljs.core._EQ_.call(null,this46244__$1.__extmap,other46245.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__46242){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__46261 = cljs.core.keyword_identical_QMARK_;
var expr__46262 = k__42890__auto__;
if(cljs.core.truth_(pred__46261.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__46262))){
return (new ajax.interceptors.ResponseFormat(G__46242,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46261.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__46262))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__46242,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__46261.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__46262))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__46242,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__46242),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__46242){
var self__ = this;
var this__42881__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__46242,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__46246){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__46246),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__46246),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__46246),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46246,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
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
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k46267,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__46271 = k46267;
switch (G__46271) {
default:
return cljs.core.get.call(null,self__.__extmap,k46267,else__42885__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__46272){
var self__ = this;
var map__46273 = p__46272;
var map__46273__$1 = ((((!((map__46273 == null)))?((((map__46273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46273):map__46273);
var request = map__46273__$1;
var uri = cljs.core.get.call(null,map__46273__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__46273__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__46273__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__46273__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__46273__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__46275 = ajax.interceptors.get_request_format.call(null,format);
var map__46275__$1 = ((((!((map__46275 == null)))?((((map__46275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46275):map__46275);
var write = cljs.core.get.call(null,map__46275__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__46275__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__41411__auto__ = headers;
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46266){
var self__ = this;
var G__46266__$1 = this;
return (new cljs.core.RecordIter((0),G__46266__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46268,other46269){
var self__ = this;
var this46268__$1 = this;
return (!((other46269 == null))) && ((this46268__$1.constructor === other46269.constructor)) && (cljs.core._EQ_.call(null,this46268__$1.__extmap,other46269.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__46266){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__46277 = cljs.core.keyword_identical_QMARK_;
var expr__46278 = k__42890__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__46266),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__46266){
var self__ = this;
var this__42881__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__46266,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__46270){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46270)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__46282 = arguments.length;
switch (G__46282) {
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

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__46283,uri){
var map__46284 = p__46283;
var map__46284__$1 = ((((!((map__46284 == null)))?((((map__46284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46284):map__46284);
var vec_strategy = cljs.core.get.call(null,map__46284__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__46284__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__46286){
var map__46287 = p__46286;
var map__46287__$1 = ((((!((map__46287 == null)))?((((map__46287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46287):map__46287);
var vec_strategy = cljs.core.get.call(null,map__46287__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__46287__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__46287,map__46287__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__46287,map__46287__$1,vec_strategy,params))
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
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k46291,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__46295 = k46291;
switch (G__46295) {
default:
return cljs.core.get.call(null,self__.__extmap,k46291,else__42885__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__46296){
var self__ = this;
var map__46297 = p__46296;
var map__46297__$1 = ((((!((map__46297 == null)))?((((map__46297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46297):map__46297);
var request = map__46297__$1;
var method = cljs.core.get.call(null,map__46297__$1,new cljs.core.Keyword(null,"method","method",55703592));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46290){
var self__ = this;
var G__46290__$1 = this;
return (new cljs.core.RecordIter((0),G__46290__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46292,other46293){
var self__ = this;
var this46292__$1 = this;
return (!((other46293 == null))) && ((this46292__$1.constructor === other46293.constructor)) && (cljs.core._EQ_.call(null,this46292__$1.__extmap,other46293.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__46290){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__46299 = cljs.core.keyword_identical_QMARK_;
var expr__46300 = k__42890__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__46290),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__46290){
var self__ = this;
var this__42881__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__46290,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__46294){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46294)),null));
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
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k46304,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__46308 = k46304;
switch (G__46308) {
default:
return cljs.core.get.call(null,self__.__extmap,k46304,else__42885__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__46309){
var self__ = this;
var map__46310 = p__46309;
var map__46310__$1 = ((((!((map__46310 == null)))?((((map__46310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46310):map__46310);
var request = map__46310__$1;
var body = cljs.core.get.call(null,map__46310__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46303){
var self__ = this;
var G__46303__$1 = this;
return (new cljs.core.RecordIter((0),G__46303__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46305,other46306){
var self__ = this;
var this46305__$1 = this;
return (!((other46306 == null))) && ((this46305__$1.constructor === other46306.constructor)) && (cljs.core._EQ_.call(null,this46305__$1.__extmap,other46306.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__46303){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__46312 = cljs.core.keyword_identical_QMARK_;
var expr__46313 = k__42890__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__46303),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__46303){
var self__ = this;
var this__42881__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__46303,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__46307){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__46307)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__46316){
var map__46317 = p__46316;
var map__46317__$1 = ((((!((map__46317 == null)))?((((map__46317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46317):map__46317);
var opts = map__46317__$1;
var response_format = cljs.core.get.call(null,map__46317__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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

//# sourceMappingURL=interceptors.js.map?rel=1512631522183
