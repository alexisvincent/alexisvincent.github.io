// Compiled by ClojureScript 1.9.908 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
return null;
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
return null;
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return null;
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
return null;
});

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__31460__auto__ = (((_ == null))?null:_);
var m__31461__auto__ = (datascript.parser._collect[goog.typeOf(x__31460__auto__)]);
if(!((m__31461__auto__ == null))){
return m__31461__auto__.call(null,_,pred,acc);
} else {
var m__31461__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__31461__auto____$1 == null))){
return m__31461__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__31460__auto__ = (((_ == null))?null:_);
var m__31461__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__31460__auto__)]);
if(!((m__31461__auto__ == null))){
return m__31461__auto__.call(null,_,acc);
} else {
var m__31461__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__31461__auto____$1 == null))){
return m__31461__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__31460__auto__ = (((_ == null))?null:_);
var m__31461__auto__ = (datascript.parser._postwalk[goog.typeOf(x__31460__auto__)]);
if(!((m__31461__auto__ == null))){
return m__31461__auto__.call(null,_,f);
} else {
var m__31461__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__31461__auto____$1 == null))){
return m__31461__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__35729_SHARP_,p2__35728_SHARP_){
var temp__5455__auto__ = parse_el.call(null,p2__35728_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var parsed = temp__5455__auto__;
return cljs.core.conj.call(null,p1__35729_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__35731 = arguments.length;
switch (G__35731) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.call(null,pred,form,cljs.core.PersistentVector.EMPTY);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc,form);
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (acc__$1,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = 3;

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__30727__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__30727__auto__){
return or__30727__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__35737){
var vec__35738 = p__35737;
var k = cljs.core.nth.call(null,vec__35738,(0),null);
var v = cljs.core.nth.call(null,vec__35738,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript.parser.postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__35734_SHARP_){
return datascript.parser.postwalk.call(null,p1__35734_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__35735_SHARP_){
return datascript.parser.postwalk.call(null,p1__35735_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__30727__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
return obj;
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35745,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35749 = k35745;
switch (G__35749) {
default:
return cljs.core.get.call(null,self__.__extmap,k35745,else__31418__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Placeholder{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35744){
var self__ = this;
var G__35744__$1 = this;
return (new cljs.core.RecordIter((0),G__35744__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35746,other35747){
var self__ = this;
var this35746__$1 = this;
return (!((other35747 == null))) && ((this35746__$1.constructor === other35747.constructor)) && (cljs.core._EQ_.call(null,this35746__$1.__extmap,other35747.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35744){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35750 = cljs.core.keyword_identical_QMARK_;
var expr__35751 = k__31423__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35744),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35744){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Placeholder(G__35744,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35741){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35742,acc35743){
var self__ = this;
var ___34544__auto____$1 = this;
return acc35743;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35743){
var self__ = this;
var ___34544__auto____$1 = this;
return acc35743;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__35748){
return (new datascript.parser.Placeholder(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35748)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35758,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35762 = k35758;
var G__35762__$1 = (((G__35762 instanceof cljs.core.Keyword))?G__35762.fqn:null);
switch (G__35762__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35758,else__31418__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Variable{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35757){
var self__ = this;
var G__35757__$1 = this;
return (new cljs.core.RecordIter((0),G__35757__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35759,other35760){
var self__ = this;
var this35759__$1 = this;
return (!((other35760 == null))) && ((this35759__$1.constructor === other35760.constructor)) && (cljs.core._EQ_.call(null,this35759__$1.symbol,other35760.symbol)) && (cljs.core._EQ_.call(null,this35759__$1.__extmap,other35760.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35757){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35763 = cljs.core.keyword_identical_QMARK_;
var expr__35764 = k__31423__auto__;
if(cljs.core.truth_(pred__35763.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__35764))){
return (new datascript.parser.Variable(G__35757,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35757),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35757){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__35757,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35754){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f35754),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35755,acc35756){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35755,self__.symbol,acc35756);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35756){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35756,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__35761){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__35761),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35761,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35771,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35775 = k35771;
var G__35775__$1 = (((G__35775 instanceof cljs.core.Keyword))?G__35775.fqn:null);
switch (G__35775__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35771,else__31418__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.SrcVar{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35770){
var self__ = this;
var G__35770__$1 = this;
return (new cljs.core.RecordIter((0),G__35770__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35772,other35773){
var self__ = this;
var this35772__$1 = this;
return (!((other35773 == null))) && ((this35772__$1.constructor === other35773.constructor)) && (cljs.core._EQ_.call(null,this35772__$1.symbol,other35773.symbol)) && (cljs.core._EQ_.call(null,this35772__$1.__extmap,other35773.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35770){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35776 = cljs.core.keyword_identical_QMARK_;
var expr__35777 = k__31423__auto__;
if(cljs.core.truth_(pred__35776.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__35777))){
return (new datascript.parser.SrcVar(G__35770,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35770),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35770){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__35770,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35767){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f35767),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35768,acc35769){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35768,self__.symbol,acc35769);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35769){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35769,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__35774){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__35774),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35774,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35784,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35788 = k35784;
switch (G__35788) {
default:
return cljs.core.get.call(null,self__.__extmap,k35784,else__31418__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35783){
var self__ = this;
var G__35783__$1 = this;
return (new cljs.core.RecordIter((0),G__35783__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35785,other35786){
var self__ = this;
var this35785__$1 = this;
return (!((other35786 == null))) && ((this35785__$1.constructor === other35786.constructor)) && (cljs.core._EQ_.call(null,this35785__$1.__extmap,other35786.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35783){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35789 = cljs.core.keyword_identical_QMARK_;
var expr__35790 = k__31423__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35783),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35783){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__35783,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35780){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35781,acc35782){
var self__ = this;
var ___34544__auto____$1 = this;
return acc35782;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35782){
var self__ = this;
var ___34544__auto____$1 = this;
return acc35782;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__35787){
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35787)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35797,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35801 = k35797;
switch (G__35801) {
default:
return cljs.core.get.call(null,self__.__extmap,k35797,else__31418__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.RulesVar{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35796){
var self__ = this;
var G__35796__$1 = this;
return (new cljs.core.RecordIter((0),G__35796__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35798,other35799){
var self__ = this;
var this35798__$1 = this;
return (!((other35799 == null))) && ((this35798__$1.constructor === other35799.constructor)) && (cljs.core._EQ_.call(null,this35798__$1.__extmap,other35799.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35796){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35802 = cljs.core.keyword_identical_QMARK_;
var expr__35803 = k__31423__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35796),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35796){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.RulesVar(G__35796,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35793){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35794,acc35795){
var self__ = this;
var ___34544__auto____$1 = this;
return acc35795;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35795){
var self__ = this;
var ___34544__auto____$1 = this;
return acc35795;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__35800){
return (new datascript.parser.RulesVar(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35800)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35810,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35814 = k35810;
var G__35814__$1 = (((G__35814 instanceof cljs.core.Keyword))?G__35814.fqn:null);
switch (G__35814__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35810,else__31418__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Constant{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35809){
var self__ = this;
var G__35809__$1 = this;
return (new cljs.core.RecordIter((0),G__35809__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35811,other35812){
var self__ = this;
var this35811__$1 = this;
return (!((other35812 == null))) && ((this35811__$1.constructor === other35812.constructor)) && (cljs.core._EQ_.call(null,this35811__$1.value,other35812.value)) && (cljs.core._EQ_.call(null,this35811__$1.__extmap,other35812.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35809){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35815 = cljs.core.keyword_identical_QMARK_;
var expr__35816 = k__31423__auto__;
if(cljs.core.truth_(pred__35815.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__35816))){
return (new datascript.parser.Constant(G__35809,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35809),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35809){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__35809,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35806){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f35806),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35807,acc35808){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35807,self__.value,acc35808);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35808){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35808,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__35813){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__35813),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35813,new cljs.core.Keyword(null,"value","value",305978217))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35823,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35827 = k35823;
var G__35827__$1 = (((G__35827 instanceof cljs.core.Keyword))?G__35827.fqn:null);
switch (G__35827__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35823,else__31418__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35822){
var self__ = this;
var G__35822__$1 = this;
return (new cljs.core.RecordIter((0),G__35822__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35824,other35825){
var self__ = this;
var this35824__$1 = this;
return (!((other35825 == null))) && ((this35824__$1.constructor === other35825.constructor)) && (cljs.core._EQ_.call(null,this35824__$1.symbol,other35825.symbol)) && (cljs.core._EQ_.call(null,this35824__$1.__extmap,other35825.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35822){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35828 = cljs.core.keyword_identical_QMARK_;
var expr__35829 = k__31423__auto__;
if(cljs.core.truth_(pred__35828.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__35829))){
return (new datascript.parser.PlainSymbol(G__35822,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35822),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35822){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__35822,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35819){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f35819),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35820,acc35821){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35820,self__.symbol,acc35821);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35821){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35821,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__35826){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__35826),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35826,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__30727__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35836,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35840 = k35836;
var G__35840__$1 = (((G__35840 instanceof cljs.core.Keyword))?G__35840.fqn:null);
switch (G__35840__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35836,else__31418__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.RuleVars{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35835){
var self__ = this;
var G__35835__$1 = this;
return (new cljs.core.RecordIter((0),G__35835__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35837,other35838){
var self__ = this;
var this35837__$1 = this;
return (!((other35838 == null))) && ((this35837__$1.constructor === other35838.constructor)) && (cljs.core._EQ_.call(null,this35837__$1.required,other35838.required)) && (cljs.core._EQ_.call(null,this35837__$1.free,other35838.free)) && (cljs.core._EQ_.call(null,this35837__$1.__extmap,other35838.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35835){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35841 = cljs.core.keyword_identical_QMARK_;
var expr__35842 = k__31423__auto__;
if(cljs.core.truth_(pred__35841.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__35842))){
return (new datascript.parser.RuleVars(G__35835,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35841.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__35842))){
return (new datascript.parser.RuleVars(self__.required,G__35835,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35835),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35835){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__35835,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35832){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f35832),datascript.parser.postwalk.call(null,self__.free,f35832),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35833,acc35834){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35833,self__.free,datascript.parser.collect.call(null,pred35833,self__.required,acc35834));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35834){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35834,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__35839){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__35839),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__35839),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35839,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328))),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__35845 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__35845,(0),null);
var rest = cljs.core.nth.call(null,vec__35845,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,["Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,["Rule variables should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35852,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35856 = k35852;
switch (G__35856) {
default:
return cljs.core.get.call(null,self__.__extmap,k35852,else__31418__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35851){
var self__ = this;
var G__35851__$1 = this;
return (new cljs.core.RecordIter((0),G__35851__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35853,other35854){
var self__ = this;
var this35853__$1 = this;
return (!((other35854 == null))) && ((this35853__$1.constructor === other35854.constructor)) && (cljs.core._EQ_.call(null,this35853__$1.__extmap,other35854.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35851){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35857 = cljs.core.keyword_identical_QMARK_;
var expr__35858 = k__31423__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35851),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35851){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__35851,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35848){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35849,acc35850){
var self__ = this;
var ___34544__auto____$1 = this;
return acc35850;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35850){
var self__ = this;
var ___34544__auto____$1 = this;
return acc35850;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__35855){
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35855)),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35865,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35869 = k35865;
var G__35869__$1 = (((G__35869 instanceof cljs.core.Keyword))?G__35869.fqn:null);
switch (G__35869__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35865,else__31418__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.BindScalar{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35864){
var self__ = this;
var G__35864__$1 = this;
return (new cljs.core.RecordIter((0),G__35864__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35866,other35867){
var self__ = this;
var this35866__$1 = this;
return (!((other35867 == null))) && ((this35866__$1.constructor === other35867.constructor)) && (cljs.core._EQ_.call(null,this35866__$1.variable,other35867.variable)) && (cljs.core._EQ_.call(null,this35866__$1.__extmap,other35867.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35864){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35870 = cljs.core.keyword_identical_QMARK_;
var expr__35871 = k__31423__auto__;
if(cljs.core.truth_(pred__35870.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__35871))){
return (new datascript.parser.BindScalar(G__35864,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35864),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35864){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__35864,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35861){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f35861),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35862,acc35863){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35862,self__.variable,acc35863);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35863){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35863,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__35868){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__35868),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35868,new cljs.core.Keyword(null,"variable","variable",-281346492))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35878,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35882 = k35878;
var G__35882__$1 = (((G__35882 instanceof cljs.core.Keyword))?G__35882.fqn:null);
switch (G__35882__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35878,else__31418__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.BindTuple{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35877){
var self__ = this;
var G__35877__$1 = this;
return (new cljs.core.RecordIter((0),G__35877__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35879,other35880){
var self__ = this;
var this35879__$1 = this;
return (!((other35880 == null))) && ((this35879__$1.constructor === other35880.constructor)) && (cljs.core._EQ_.call(null,this35879__$1.bindings,other35880.bindings)) && (cljs.core._EQ_.call(null,this35879__$1.__extmap,other35880.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35877){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35883 = cljs.core.keyword_identical_QMARK_;
var expr__35884 = k__31423__auto__;
if(cljs.core.truth_(pred__35883.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__35884))){
return (new datascript.parser.BindTuple(G__35877,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35877),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35877){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__35877,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35874){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f35874),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35875,acc35876){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35875,self__.bindings,acc35876);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35876){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35876,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__35881){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__35881),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35881,new cljs.core.Keyword(null,"bindings","bindings",1271397192))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35891,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35895 = k35891;
var G__35895__$1 = (((G__35895 instanceof cljs.core.Keyword))?G__35895.fqn:null);
switch (G__35895__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35891,else__31418__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.BindColl{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35890){
var self__ = this;
var G__35890__$1 = this;
return (new cljs.core.RecordIter((0),G__35890__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35892,other35893){
var self__ = this;
var this35892__$1 = this;
return (!((other35893 == null))) && ((this35892__$1.constructor === other35893.constructor)) && (cljs.core._EQ_.call(null,this35892__$1.binding,other35893.binding)) && (cljs.core._EQ_.call(null,this35892__$1.__extmap,other35893.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35890){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35896 = cljs.core.keyword_identical_QMARK_;
var expr__35897 = k__31423__auto__;
if(cljs.core.truth_(pred__35896.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__35897))){
return (new datascript.parser.BindColl(G__35890,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35890),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35890){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__35890,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35887){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f35887),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35888,acc35889){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35888,self__.binding,acc35889);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35889){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35889,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__35894){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__35894),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35894,new cljs.core.Keyword(null,"binding","binding",539932593))),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5457__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__5457__auto__)){
var var$ = temp__5457__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__30715__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__30715__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__30715__auto__;
}
})())){
var temp__5455__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5455__auto__)){
var sub_bind = temp__5455__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse collection binding"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__30727__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5457__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5457__auto__)){
var sub_bindings = temp__5457__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,["Tuple binding cannot be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__30715__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__30715__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__30715__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__30727__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
var or__30727__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__30727__auto____$2)){
return or__30727__auto____$2;
} else {
var or__30727__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__30727__auto____$3)){
return or__30727__auto____$3;
} else {
var or__30727__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__30727__auto____$4)){
return or__30727__auto____$4;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__31460__auto__ = (((this$ == null))?null:this$);
var m__31461__auto__ = (datascript.parser._find_vars[goog.typeOf(x__31460__auto__)]);
if(!((m__31461__auto__ == null))){
return m__31461__auto__.call(null,this$);
} else {
var m__31461__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__31461__auto____$1 == null))){
return m__31461__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35904,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35908 = k35904;
var G__35908__$1 = (((G__35908 instanceof cljs.core.Keyword))?G__35908.fqn:null);
switch (G__35908__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35904,else__31418__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Aggregate{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35903){
var self__ = this;
var G__35903__$1 = this;
return (new cljs.core.RecordIter((0),G__35903__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35905,other35906){
var self__ = this;
var this35905__$1 = this;
return (!((other35906 == null))) && ((this35905__$1.constructor === other35906.constructor)) && (cljs.core._EQ_.call(null,this35905__$1.fn,other35906.fn)) && (cljs.core._EQ_.call(null,this35905__$1.args,other35906.args)) && (cljs.core._EQ_.call(null,this35905__$1.__extmap,other35906.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35903){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35909 = cljs.core.keyword_identical_QMARK_;
var expr__35910 = k__31423__auto__;
if(cljs.core.truth_(pred__35909.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__35910))){
return (new datascript.parser.Aggregate(G__35903,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35909.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__35910))){
return (new datascript.parser.Aggregate(self__.fn,G__35903,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35903),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35903){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__35903,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35900){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f35900),datascript.parser.postwalk.call(null,self__.args,f35900),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35901,acc35902){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35901,self__.args,datascript.parser.collect.call(null,pred35901,self__.fn,acc35902));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35902){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35902,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__35907){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__35907),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__35907),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35907,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35917,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35921 = k35917;
var G__35921__$1 = (((G__35921 instanceof cljs.core.Keyword))?G__35921.fqn:null);
switch (G__35921__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35917,else__31418__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Pull{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35916){
var self__ = this;
var G__35916__$1 = this;
return (new cljs.core.RecordIter((0),G__35916__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35918,other35919){
var self__ = this;
var this35918__$1 = this;
return (!((other35919 == null))) && ((this35918__$1.constructor === other35919.constructor)) && (cljs.core._EQ_.call(null,this35918__$1.source,other35919.source)) && (cljs.core._EQ_.call(null,this35918__$1.variable,other35919.variable)) && (cljs.core._EQ_.call(null,this35918__$1.pattern,other35919.pattern)) && (cljs.core._EQ_.call(null,this35918__$1.__extmap,other35919.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35916){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35922 = cljs.core.keyword_identical_QMARK_;
var expr__35923 = k__31423__auto__;
if(cljs.core.truth_(pred__35922.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__35923))){
return (new datascript.parser.Pull(G__35916,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35922.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__35923))){
return (new datascript.parser.Pull(self__.source,G__35916,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35922.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__35923))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__35916,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35916),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35916){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__35916,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35913){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f35913),datascript.parser.postwalk.call(null,self__.variable,f35913),datascript.parser.postwalk.call(null,self__.pattern,f35913),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35914,acc35915){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35914,self__.pattern,datascript.parser.collect.call(null,pred35914,self__.variable,datascript.parser.collect.call(null,pred35914,self__.source,acc35915)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35915){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35915,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__35920){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35920),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__35920),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__35920),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35920,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423))),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__31460__auto__ = (((this$ == null))?null:this$);
var m__31461__auto__ = (datascript.parser.find_elements[goog.typeOf(x__31460__auto__)]);
if(!((m__31461__auto__ == null))){
return m__31461__auto__.call(null,this$);
} else {
var m__31461__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__31461__auto____$1 == null))){
return m__31461__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35930,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35934 = k35930;
var G__35934__$1 = (((G__35934 instanceof cljs.core.Keyword))?G__35934.fqn:null);
switch (G__35934__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35930,else__31418__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.FindRel{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35929){
var self__ = this;
var G__35929__$1 = this;
return (new cljs.core.RecordIter((0),G__35929__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35931,other35932){
var self__ = this;
var this35931__$1 = this;
return (!((other35932 == null))) && ((this35931__$1.constructor === other35932.constructor)) && (cljs.core._EQ_.call(null,this35931__$1.elements,other35932.elements)) && (cljs.core._EQ_.call(null,this35931__$1.__extmap,other35932.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35929){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35935 = cljs.core.keyword_identical_QMARK_;
var expr__35936 = k__31423__auto__;
if(cljs.core.truth_(pred__35935.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__35936))){
return (new datascript.parser.FindRel(G__35929,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35929),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35929){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__35929,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35926){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f35926),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35927,acc35928){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35927,self__.elements,acc35928);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35928){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35928,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__35933){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__35933),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35933,new cljs.core.Keyword(null,"elements","elements",657646735))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35943,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35947 = k35943;
var G__35947__$1 = (((G__35947 instanceof cljs.core.Keyword))?G__35947.fqn:null);
switch (G__35947__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35943,else__31418__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.FindColl{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35942){
var self__ = this;
var G__35942__$1 = this;
return (new cljs.core.RecordIter((0),G__35942__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35944,other35945){
var self__ = this;
var this35944__$1 = this;
return (!((other35945 == null))) && ((this35944__$1.constructor === other35945.constructor)) && (cljs.core._EQ_.call(null,this35944__$1.element,other35945.element)) && (cljs.core._EQ_.call(null,this35944__$1.__extmap,other35945.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35942){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35948 = cljs.core.keyword_identical_QMARK_;
var expr__35949 = k__31423__auto__;
if(cljs.core.truth_(pred__35948.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__35949))){
return (new datascript.parser.FindColl(G__35942,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35942),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35942){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__35942,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35939){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f35939),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35940,acc35941){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35940,self__.element,acc35941);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35941){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35941,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__35946){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__35946),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35946,new cljs.core.Keyword(null,"element","element",1974019749))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35956,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35960 = k35956;
var G__35960__$1 = (((G__35960 instanceof cljs.core.Keyword))?G__35960.fqn:null);
switch (G__35960__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35956,else__31418__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.FindScalar{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35955){
var self__ = this;
var G__35955__$1 = this;
return (new cljs.core.RecordIter((0),G__35955__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35957,other35958){
var self__ = this;
var this35957__$1 = this;
return (!((other35958 == null))) && ((this35957__$1.constructor === other35958.constructor)) && (cljs.core._EQ_.call(null,this35957__$1.element,other35958.element)) && (cljs.core._EQ_.call(null,this35957__$1.__extmap,other35958.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35955){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35961 = cljs.core.keyword_identical_QMARK_;
var expr__35962 = k__31423__auto__;
if(cljs.core.truth_(pred__35961.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__35962))){
return (new datascript.parser.FindScalar(G__35955,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35955),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35955){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__35955,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35952){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f35952),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35953,acc35954){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35953,self__.element,acc35954);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35954){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35954,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__35959){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__35959),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35959,new cljs.core.Keyword(null,"element","element",1974019749))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35969,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35973 = k35969;
var G__35973__$1 = (((G__35973 instanceof cljs.core.Keyword))?G__35973.fqn:null);
switch (G__35973__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35969,else__31418__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.FindTuple{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35968){
var self__ = this;
var G__35968__$1 = this;
return (new cljs.core.RecordIter((0),G__35968__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35970,other35971){
var self__ = this;
var this35970__$1 = this;
return (!((other35971 == null))) && ((this35970__$1.constructor === other35971.constructor)) && (cljs.core._EQ_.call(null,this35970__$1.elements,other35971.elements)) && (cljs.core._EQ_.call(null,this35970__$1.__extmap,other35971.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35968){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__35974 = cljs.core.keyword_identical_QMARK_;
var expr__35975 = k__31423__auto__;
if(cljs.core.truth_(pred__35974.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__35975))){
return (new datascript.parser.FindTuple(G__35968,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35968),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35968){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__35968,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35965){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f35965),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35966,acc35967){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35966,self__.elements,acc35967);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35967){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc35967,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__35972){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__35972),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35972,new cljs.core.Keyword(null,"elements","elements",657646735))),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__35978 = form;
var seq__35979 = cljs.core.seq.call(null,vec__35978);
var first__35980 = cljs.core.first.call(null,seq__35979);
var seq__35979__$1 = cljs.core.next.call(null,seq__35979);
var fn = first__35980;
var args = seq__35979__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__30715__auto__ = fn_STAR_;
if(cljs.core.truth_(and__30715__auto__)){
return args_STAR_;
} else {
return and__30715__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__35981 = form;
var seq__35982 = cljs.core.seq.call(null,vec__35981);
var first__35983 = cljs.core.first.call(null,seq__35982);
var seq__35982__$1 = cljs.core.next.call(null,seq__35982);
var _ = first__35983;
var first__35983__$1 = cljs.core.first.call(null,seq__35982__$1);
var seq__35982__$2 = cljs.core.next.call(null,seq__35982__$1);
var fn = first__35983__$1;
var args = seq__35982__$2;
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__30715__auto__ = fn_STAR_;
if(cljs.core.truth_(and__30715__auto__)){
return args_STAR_;
} else {
return and__30715__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,["Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__35984 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__35984,(0),null);
var pattern = cljs.core.nth.call(null,vec__35984,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__30727__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__30715__auto__ = src_STAR_;
if(cljs.core.truth_(and__30715__auto__)){
var and__30715__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__30715__auto____$1)){
return pattern_STAR_;
} else {
return and__30715__auto____$1;
}
} else {
return and__30715__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,["Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__30727__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
var or__30727__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__30727__auto____$2)){
return or__30727__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__35987 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__35987 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__35987,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__35988 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__35988 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__35988,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__35989 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__35989 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__35989,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__35990 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__35990 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__35990,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__30727__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
var or__30727__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__30727__auto____$2)){
return or__30727__auto____$2;
} else {
var or__30727__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__30727__auto____$3)){
return or__30727__auto____$3;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__30727__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :with clause, expected [ variable+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5455__auto__ = (function (){var or__30727__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var var$ = temp__5455__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__30727__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k35995,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__35999 = k35995;
var G__35999__$1 = (((G__35999 instanceof cljs.core.Keyword))?G__35999.fqn:null);
switch (G__35999__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35995,else__31418__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Pattern{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35994){
var self__ = this;
var G__35994__$1 = this;
return (new cljs.core.RecordIter((0),G__35994__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35996,other35997){
var self__ = this;
var this35996__$1 = this;
return (!((other35997 == null))) && ((this35996__$1.constructor === other35997.constructor)) && (cljs.core._EQ_.call(null,this35996__$1.source,other35997.source)) && (cljs.core._EQ_.call(null,this35996__$1.pattern,other35997.pattern)) && (cljs.core._EQ_.call(null,this35996__$1.__extmap,other35997.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__35994){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36000 = cljs.core.keyword_identical_QMARK_;
var expr__36001 = k__31423__auto__;
if(cljs.core.truth_(pred__36000.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__36001))){
return (new datascript.parser.Pattern(G__35994,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36000.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__36001))){
return (new datascript.parser.Pattern(self__.source,G__35994,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__35994),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__35994){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__35994,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f35991){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f35991),datascript.parser.postwalk.call(null,self__.pattern,f35991),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred35992,acc35993){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred35992,self__.pattern,datascript.parser.collect.call(null,pred35992,self__.source,acc35993));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc35993){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc35993,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__35998){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__35998),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__35998),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35998,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36008,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36012 = k36008;
var G__36012__$1 = (((G__36012 instanceof cljs.core.Keyword))?G__36012.fqn:null);
switch (G__36012__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36008,else__31418__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Predicate{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36007){
var self__ = this;
var G__36007__$1 = this;
return (new cljs.core.RecordIter((0),G__36007__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36009,other36010){
var self__ = this;
var this36009__$1 = this;
return (!((other36010 == null))) && ((this36009__$1.constructor === other36010.constructor)) && (cljs.core._EQ_.call(null,this36009__$1.fn,other36010.fn)) && (cljs.core._EQ_.call(null,this36009__$1.args,other36010.args)) && (cljs.core._EQ_.call(null,this36009__$1.__extmap,other36010.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36007){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36013 = cljs.core.keyword_identical_QMARK_;
var expr__36014 = k__31423__auto__;
if(cljs.core.truth_(pred__36013.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__36014))){
return (new datascript.parser.Predicate(G__36007,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36013.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__36014))){
return (new datascript.parser.Predicate(self__.fn,G__36007,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36007),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36007){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__36007,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36004){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f36004),datascript.parser.postwalk.call(null,self__.args,f36004),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36005,acc36006){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36005,self__.args,datascript.parser.collect.call(null,pred36005,self__.fn,acc36006));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36006){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc36006,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__36011){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__36011),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__36011),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36011,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36021,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36025 = k36021;
var G__36025__$1 = (((G__36025 instanceof cljs.core.Keyword))?G__36025.fqn:null);
switch (G__36025__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36021,else__31418__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Function{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36020){
var self__ = this;
var G__36020__$1 = this;
return (new cljs.core.RecordIter((0),G__36020__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36022,other36023){
var self__ = this;
var this36022__$1 = this;
return (!((other36023 == null))) && ((this36022__$1.constructor === other36023.constructor)) && (cljs.core._EQ_.call(null,this36022__$1.fn,other36023.fn)) && (cljs.core._EQ_.call(null,this36022__$1.args,other36023.args)) && (cljs.core._EQ_.call(null,this36022__$1.binding,other36023.binding)) && (cljs.core._EQ_.call(null,this36022__$1.__extmap,other36023.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36020){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36026 = cljs.core.keyword_identical_QMARK_;
var expr__36027 = k__31423__auto__;
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__36027))){
return (new datascript.parser.Function(G__36020,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__36027))){
return (new datascript.parser.Function(self__.fn,G__36020,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__36027))){
return (new datascript.parser.Function(self__.fn,self__.args,G__36020,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36020),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36020){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__36020,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36017){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f36017),datascript.parser.postwalk.call(null,self__.args,f36017),datascript.parser.postwalk.call(null,self__.binding,f36017),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36018,acc36019){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36018,self__.binding,datascript.parser.collect.call(null,pred36018,self__.args,datascript.parser.collect.call(null,pred36018,self__.fn,acc36019)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36019){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc36019,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__36024){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__36024),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36024,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36034,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36038 = k36034;
var G__36038__$1 = (((G__36038 instanceof cljs.core.Keyword))?G__36038.fqn:null);
switch (G__36038__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36034,else__31418__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36033){
var self__ = this;
var G__36033__$1 = this;
return (new cljs.core.RecordIter((0),G__36033__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36035,other36036){
var self__ = this;
var this36035__$1 = this;
return (!((other36036 == null))) && ((this36035__$1.constructor === other36036.constructor)) && (cljs.core._EQ_.call(null,this36035__$1.source,other36036.source)) && (cljs.core._EQ_.call(null,this36035__$1.name,other36036.name)) && (cljs.core._EQ_.call(null,this36035__$1.args,other36036.args)) && (cljs.core._EQ_.call(null,this36035__$1.__extmap,other36036.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36033){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36039 = cljs.core.keyword_identical_QMARK_;
var expr__36040 = k__31423__auto__;
if(cljs.core.truth_(pred__36039.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__36040))){
return (new datascript.parser.RuleExpr(G__36033,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36039.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__36040))){
return (new datascript.parser.RuleExpr(self__.source,G__36033,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36039.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__36040))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__36033,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36033),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36033){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__36033,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36030){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f36030),datascript.parser.postwalk.call(null,self__.name,f36030),datascript.parser.postwalk.call(null,self__.args,f36030),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36031,acc36032){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36031,self__.args,datascript.parser.collect.call(null,pred36031,self__.name,datascript.parser.collect.call(null,pred36031,self__.source,acc36032)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36032){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc36032,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__36037){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__36037),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__36037),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__36037),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36037,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36047,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36051 = k36047;
var G__36051__$1 = (((G__36051 instanceof cljs.core.Keyword))?G__36051.fqn:null);
switch (G__36051__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36047,else__31418__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Not{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36046){
var self__ = this;
var G__36046__$1 = this;
return (new cljs.core.RecordIter((0),G__36046__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36048,other36049){
var self__ = this;
var this36048__$1 = this;
return (!((other36049 == null))) && ((this36048__$1.constructor === other36049.constructor)) && (cljs.core._EQ_.call(null,this36048__$1.source,other36049.source)) && (cljs.core._EQ_.call(null,this36048__$1.vars,other36049.vars)) && (cljs.core._EQ_.call(null,this36048__$1.clauses,other36049.clauses)) && (cljs.core._EQ_.call(null,this36048__$1.__extmap,other36049.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36046){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36052 = cljs.core.keyword_identical_QMARK_;
var expr__36053 = k__31423__auto__;
if(cljs.core.truth_(pred__36052.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__36053))){
return (new datascript.parser.Not(G__36046,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36052.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__36053))){
return (new datascript.parser.Not(self__.source,G__36046,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36052.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__36053))){
return (new datascript.parser.Not(self__.source,self__.vars,G__36046,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36046),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36046){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__36046,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36043){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f36043),datascript.parser.postwalk.call(null,self__.vars,f36043),datascript.parser.postwalk.call(null,self__.clauses,f36043),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36044,acc36045){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36044,self__.clauses,datascript.parser.collect.call(null,pred36044,self__.vars,datascript.parser.collect.call(null,pred36044,self__.source,acc36045)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36045){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc36045,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__36050){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__36050),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__36050),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__36050),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36050,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36060,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36064 = k36060;
var G__36064__$1 = (((G__36064 instanceof cljs.core.Keyword))?G__36064.fqn:null);
switch (G__36064__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36060,else__31418__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Or{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36059){
var self__ = this;
var G__36059__$1 = this;
return (new cljs.core.RecordIter((0),G__36059__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36061,other36062){
var self__ = this;
var this36061__$1 = this;
return (!((other36062 == null))) && ((this36061__$1.constructor === other36062.constructor)) && (cljs.core._EQ_.call(null,this36061__$1.source,other36062.source)) && (cljs.core._EQ_.call(null,this36061__$1.rule_vars,other36062.rule_vars)) && (cljs.core._EQ_.call(null,this36061__$1.clauses,other36062.clauses)) && (cljs.core._EQ_.call(null,this36061__$1.__extmap,other36062.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36059){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36065 = cljs.core.keyword_identical_QMARK_;
var expr__36066 = k__31423__auto__;
if(cljs.core.truth_(pred__36065.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__36066))){
return (new datascript.parser.Or(G__36059,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36065.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__36066))){
return (new datascript.parser.Or(self__.source,G__36059,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36065.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__36066))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__36059,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36059),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36059){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__36059,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36056){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f36056),datascript.parser.postwalk.call(null,self__.rule_vars,f36056),datascript.parser.postwalk.call(null,self__.clauses,f36056),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36057,acc36058){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36057,self__.clauses,datascript.parser.collect.call(null,pred36057,self__.rule_vars,datascript.parser.collect.call(null,pred36057,self__.source,acc36058)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36058){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc36058,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__36063){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__36063),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__36063),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__36063),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36063,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36073,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36077 = k36073;
var G__36077__$1 = (((G__36077 instanceof cljs.core.Keyword))?G__36077.fqn:null);
switch (G__36077__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36073,else__31418__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.And{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36072){
var self__ = this;
var G__36072__$1 = this;
return (new cljs.core.RecordIter((0),G__36072__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36074,other36075){
var self__ = this;
var this36074__$1 = this;
return (!((other36075 == null))) && ((this36074__$1.constructor === other36075.constructor)) && (cljs.core._EQ_.call(null,this36074__$1.clauses,other36075.clauses)) && (cljs.core._EQ_.call(null,this36074__$1.__extmap,other36075.__extmap));
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36072){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36078 = cljs.core.keyword_identical_QMARK_;
var expr__36079 = k__31423__auto__;
if(cljs.core.truth_(pred__36078.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__36079))){
return (new datascript.parser.And(G__36072,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36072),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36072){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__36072,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36069){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f36069),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36070,acc36071){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36070,self__.clauses,acc36071);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36071){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc36071,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__36076){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__36076),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36076,new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__30727__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__5455__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5455__auto__)){
var source_STAR_ = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5457__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__36082 = temp__5457__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__36082,(0),null);
var next_form = cljs.core.nth.call(null,vec__36082,(1),null);
var temp__5457__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5457__auto____$1)){
var pattern_STAR_ = temp__5457__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,["Pattern could not be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__36085 = form;
var seq__36086 = cljs.core.seq.call(null,vec__36085);
var first__36087 = cljs.core.first.call(null,seq__36086);
var seq__36086__$1 = cljs.core.next.call(null,seq__36086);
var fn = first__36087;
var args = seq__36086__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__30727__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__30715__auto__ = fn_STAR_;
if(cljs.core.truth_(and__30715__auto__)){
return args_STAR_;
} else {
return and__30715__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__5457__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__36088 = temp__5457__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__36088,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__36088,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__36091 = form;
var call = cljs.core.nth.call(null,vec__36091,(0),null);
var binding = cljs.core.nth.call(null,vec__36091,(1),null);
var temp__5457__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__36094 = temp__5457__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__36094,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__36094,(1),null);
var temp__5457__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__5457__auto____$1)){
var binding_STAR_ = temp__5457__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
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
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__5457__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__36097 = temp__5457__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__36097,(0),null);
var next_form = cljs.core.nth.call(null,vec__36097,(1),null);
var vec__36100 = next_form;
var seq__36101 = cljs.core.seq.call(null,vec__36100);
var first__36102 = cljs.core.first.call(null,seq__36101);
var seq__36101__$1 = cljs.core.next.call(null,seq__36101);
var name = first__36102;
var args = seq__36101__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,["rule-expr requires at least one argument"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,["Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript.parser.collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_36104 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_36104)){
} else {
throw cljs.core.ex_info.call(null,["Join variable not declared inside clauses: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_36104)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,["Join variables should not be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__5457__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__36105 = temp__5457__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__36105,(0),null);
var next_form = cljs.core.nth.call(null,vec__36105,(1),null);
var vec__36108 = next_form;
var seq__36109 = cljs.core.seq.call(null,vec__36108);
var first__36110 = cljs.core.first.call(null,seq__36109);
var seq__36109__$1 = cljs.core.next.call(null,seq__36109);
var sym = first__36110;
var clauses = seq__36109__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__5455__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__5455__auto__)){
var clauses_STAR_ = temp__5455__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__5457__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__36111 = temp__5457__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__36111,(0),null);
var next_form = cljs.core.nth.call(null,vec__36111,(1),null);
var vec__36114 = next_form;
var seq__36115 = cljs.core.seq.call(null,vec__36114);
var first__36116 = cljs.core.first.call(null,seq__36115);
var seq__36115__$1 = cljs.core.next.call(null,seq__36115);
var sym = first__36116;
var first__36116__$1 = cljs.core.first.call(null,seq__36115__$1);
var seq__36115__$2 = cljs.core.next.call(null,seq__36115__$1);
var vars = first__36116__$1;
var clauses = seq__36115__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__30715__auto__ = vars_STAR_;
if(cljs.core.truth_(and__30715__auto__)){
return clauses_STAR_;
} else {
return and__30715__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__36117 = clause;
var map__36117__$1 = ((((!((map__36117 == null)))?((((map__36117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36117):map__36117);
var map__36118 = cljs.core.get.call(null,map__36117__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__36118__$1 = ((((!((map__36118 == null)))?((((map__36118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36118):map__36118);
var required = cljs.core.get.call(null,map__36118__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__36118__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__36117__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__36121_36125 = cljs.core.seq.call(null,clauses);
var chunk__36122_36126 = null;
var count__36123_36127 = (0);
var i__36124_36128 = (0);
while(true){
if((i__36124_36128 < count__36123_36127)){
var clause_36129__$1 = cljs.core._nth.call(null,chunk__36122_36126,i__36124_36128);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_36129__$1], null),form);

var G__36130 = seq__36121_36125;
var G__36131 = chunk__36122_36126;
var G__36132 = count__36123_36127;
var G__36133 = (i__36124_36128 + (1));
seq__36121_36125 = G__36130;
chunk__36122_36126 = G__36131;
count__36123_36127 = G__36132;
i__36124_36128 = G__36133;
continue;
} else {
var temp__5457__auto___36134 = cljs.core.seq.call(null,seq__36121_36125);
if(temp__5457__auto___36134){
var seq__36121_36135__$1 = temp__5457__auto___36134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36121_36135__$1)){
var c__31658__auto___36136 = cljs.core.chunk_first.call(null,seq__36121_36135__$1);
var G__36137 = cljs.core.chunk_rest.call(null,seq__36121_36135__$1);
var G__36138 = c__31658__auto___36136;
var G__36139 = cljs.core.count.call(null,c__31658__auto___36136);
var G__36140 = (0);
seq__36121_36125 = G__36137;
chunk__36122_36126 = G__36138;
count__36123_36127 = G__36139;
i__36124_36128 = G__36140;
continue;
} else {
var clause_36141__$1 = cljs.core.first.call(null,seq__36121_36135__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_36141__$1], null),form);

var G__36142 = cljs.core.next.call(null,seq__36121_36135__$1);
var G__36143 = null;
var G__36144 = (0);
var G__36145 = (0);
seq__36121_36125 = G__36142;
chunk__36122_36126 = G__36143;
count__36123_36127 = G__36144;
i__36124_36128 = G__36145;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'and' clause, expected [ 'and' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__5457__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__36146 = temp__5457__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__36146,(0),null);
var next_form = cljs.core.nth.call(null,vec__36146,(1),null);
var vec__36149 = next_form;
var seq__36150 = cljs.core.seq.call(null,vec__36149);
var first__36151 = cljs.core.first.call(null,seq__36150);
var seq__36150__$1 = cljs.core.next.call(null,seq__36150);
var sym = first__36151;
var clauses = seq__36150__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__5455__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5455__auto__)){
var clauses_STAR_ = temp__5455__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__5457__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__36152 = temp__5457__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__36152,(0),null);
var next_form = cljs.core.nth.call(null,vec__36152,(1),null);
var vec__36155 = next_form;
var seq__36156 = cljs.core.seq.call(null,vec__36155);
var first__36157 = cljs.core.first.call(null,seq__36156);
var seq__36156__$1 = cljs.core.next.call(null,seq__36156);
var sym = first__36157;
var first__36157__$1 = cljs.core.first.call(null,seq__36156__$1);
var seq__36156__$2 = cljs.core.next.call(null,seq__36156__$1);
var vars = first__36157__$1;
var clauses = seq__36156__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__30715__auto__ = vars_STAR_;
if(cljs.core.truth_(and__30715__auto__)){
return clauses_STAR_;
} else {
return and__30715__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__30727__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
var or__30727__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__30727__auto____$2)){
return or__30727__auto____$2;
} else {
var or__30727__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__30727__auto____$3)){
return or__30727__auto____$3;
} else {
var or__30727__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__30727__auto____$4)){
return or__30727__auto____$4;
} else {
var or__30727__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__30727__auto____$5)){
return or__30727__auto____$5;
} else {
var or__30727__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__30727__auto____$6)){
return or__30727__auto____$6;
} else {
var or__30727__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__30727__auto____$7)){
return or__30727__auto____$7;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__30727__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :where clause, expected [clause+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36163,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36167 = k36163;
var G__36167__$1 = (((G__36167 instanceof cljs.core.Keyword))?G__36167.fqn:null);
switch (G__36167__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36163,else__31418__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36162){
var self__ = this;
var G__36162__$1 = this;
return (new cljs.core.RecordIter((0),G__36162__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36164,other36165){
var self__ = this;
var this36164__$1 = this;
return (!((other36165 == null))) && ((this36164__$1.constructor === other36165.constructor)) && (cljs.core._EQ_.call(null,this36164__$1.vars,other36165.vars)) && (cljs.core._EQ_.call(null,this36164__$1.clauses,other36165.clauses)) && (cljs.core._EQ_.call(null,this36164__$1.__extmap,other36165.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36162){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36168 = cljs.core.keyword_identical_QMARK_;
var expr__36169 = k__31423__auto__;
if(cljs.core.truth_(pred__36168.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__36169))){
return (new datascript.parser.RuleBranch(G__36162,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36168.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__36169))){
return (new datascript.parser.RuleBranch(self__.vars,G__36162,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36162),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36162){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__36162,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36159){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f36159),datascript.parser.postwalk.call(null,self__.clauses,f36159),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36160,acc36161){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36160,self__.clauses,datascript.parser.collect.call(null,pred36160,self__.vars,acc36161));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36161){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc36161,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__36166){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__36166),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__36166),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36166,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36176,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36180 = k36176;
var G__36180__$1 = (((G__36180 instanceof cljs.core.Keyword))?G__36180.fqn:null);
switch (G__36180__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36176,else__31418__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Rule{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36175){
var self__ = this;
var G__36175__$1 = this;
return (new cljs.core.RecordIter((0),G__36175__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36177,other36178){
var self__ = this;
var this36177__$1 = this;
return (!((other36178 == null))) && ((this36177__$1.constructor === other36178.constructor)) && (cljs.core._EQ_.call(null,this36177__$1.name,other36178.name)) && (cljs.core._EQ_.call(null,this36177__$1.branches,other36178.branches)) && (cljs.core._EQ_.call(null,this36177__$1.__extmap,other36178.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36175){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36181 = cljs.core.keyword_identical_QMARK_;
var expr__36182 = k__31423__auto__;
if(cljs.core.truth_(pred__36181.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__36182))){
return (new datascript.parser.Rule(G__36175,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36181.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__36182))){
return (new datascript.parser.Rule(self__.name,G__36175,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36175),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36175){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__36175,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36172){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f36172),datascript.parser.postwalk.call(null,self__.branches,f36172),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36173,acc36174){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36173,self__.branches,datascript.parser.collect.call(null,pred36173,self__.name,acc36174));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36174){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc36174,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__36179){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__36179),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__36179),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36179,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268))),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__36185_SHARP_){
return (p1__36185_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__36186_SHARP_){
return (p1__36186_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Reference to the unknown variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__36187 = form;
var seq__36188 = cljs.core.seq.call(null,vec__36187);
var first__36189 = cljs.core.first.call(null,seq__36188);
var seq__36188__$1 = cljs.core.next.call(null,seq__36188);
var head = first__36189;
var clauses = seq__36188__$1;
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__36190 = head;
var seq__36191 = cljs.core.seq.call(null,vec__36190);
var first__36192 = cljs.core.first.call(null,seq__36191);
var seq__36191__$1 = cljs.core.next.call(null,seq__36191);
var name = first__36192;
var vars = seq__36191__$1;
var name_STAR_ = (function (){var or__30727__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule name, expected plain-symbol"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__30727__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
throw cljs.core.ex_info.call(null,["Rule branch should have clauses"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule head, expected [rule-name rule-vars]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule, expected [rule-head clause+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__36193 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__36195 = null;
var count__36196 = (0);
var i__36197 = (0);
while(true){
if((i__36197 < count__36196)){
var b = cljs.core._nth.call(null,chunk__36195,i__36197);
var vars_36199 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_36199))){
throw cljs.core.ex_info.call(null,["Arity mismatch for rule '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),"': ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0)))," vs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_36199)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__36200 = seq__36193;
var G__36201 = chunk__36195;
var G__36202 = count__36196;
var G__36203 = (i__36197 + (1));
seq__36193 = G__36200;
chunk__36195 = G__36201;
count__36196 = G__36202;
i__36197 = G__36203;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36193);
if(temp__5457__auto__){
var seq__36193__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36193__$1)){
var c__31658__auto__ = cljs.core.chunk_first.call(null,seq__36193__$1);
var G__36204 = cljs.core.chunk_rest.call(null,seq__36193__$1);
var G__36205 = c__31658__auto__;
var G__36206 = cljs.core.count.call(null,c__31658__auto__);
var G__36207 = (0);
seq__36193 = G__36204;
chunk__36195 = G__36205;
count__36196 = G__36206;
i__36197 = G__36207;
continue;
} else {
var b = cljs.core.first.call(null,seq__36193__$1);
var vars_36208 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_36208))){
throw cljs.core.ex_info.call(null,["Arity mismatch for rule '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),"': ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0)))," vs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_36208)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__36209 = cljs.core.next.call(null,seq__36193__$1);
var G__36210 = null;
var G__36211 = (0);
var G__36212 = (0);
seq__36193 = G__36209;
chunk__36195 = G__36210;
count__36196 = G__36211;
i__36197 = G__36212;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__31609__auto__ = (function datascript$parser$parse_rules_$_iter__36214(s__36215){
return (new cljs.core.LazySeq(null,(function (){
var s__36215__$1 = s__36215;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__36215__$1);
if(temp__5457__auto__){
var s__36215__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36215__$2)){
var c__31607__auto__ = cljs.core.chunk_first.call(null,s__36215__$2);
var size__31608__auto__ = cljs.core.count.call(null,c__31607__auto__);
var b__36217 = cljs.core.chunk_buffer.call(null,size__31608__auto__);
if((function (){var i__36216 = (0);
while(true){
if((i__36216 < size__31608__auto__)){
var vec__36218 = cljs.core._nth.call(null,c__31607__auto__,i__36216);
var name = cljs.core.nth.call(null,vec__36218,(0),null);
var branches = cljs.core.nth.call(null,vec__36218,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__36216,vec__36218,name,branches,c__31607__auto__,size__31608__auto__,b__36217,s__36215__$2,temp__5457__auto__){
return (function (p1__36213_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__36213_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__36213_SHARP_),null,null,null));
});})(i__36216,vec__36218,name,branches,c__31607__auto__,size__31608__auto__,b__36217,s__36215__$2,temp__5457__auto__))
,branches);
cljs.core.chunk_append.call(null,b__36217,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__36224 = (i__36216 + (1));
i__36216 = G__36224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36217),datascript$parser$parse_rules_$_iter__36214.call(null,cljs.core.chunk_rest.call(null,s__36215__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36217),null);
}
} else {
var vec__36221 = cljs.core.first.call(null,s__36215__$2);
var name = cljs.core.nth.call(null,vec__36221,(0),null);
var branches = cljs.core.nth.call(null,vec__36221,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__36221,name,branches,s__36215__$2,temp__5457__auto__){
return (function (p1__36213_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__36213_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__36213_SHARP_),null,null,null));
});})(vec__36221,name,branches,s__36215__$2,temp__5457__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__36214.call(null,cljs.core.rest.call(null,s__36215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31609__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (qfind,qwith,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36229,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36233 = k36229;
var G__36233__$1 = (((G__36233 instanceof cljs.core.Keyword))?G__36233.fqn:null);
switch (G__36233__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36229,else__31418__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.parser.Query{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36228){
var self__ = this;
var G__36228__$1 = this;
return (new cljs.core.RecordIter((0),G__36228__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36230,other36231){
var self__ = this;
var this36230__$1 = this;
return (!((other36231 == null))) && ((this36230__$1.constructor === other36231.constructor)) && (cljs.core._EQ_.call(null,this36230__$1.qfind,other36231.qfind)) && (cljs.core._EQ_.call(null,this36230__$1.qwith,other36231.qwith)) && (cljs.core._EQ_.call(null,this36230__$1.qin,other36231.qin)) && (cljs.core._EQ_.call(null,this36230__$1.qwhere,other36231.qwhere)) && (cljs.core._EQ_.call(null,this36230__$1.__extmap,other36231.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36228){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36234 = cljs.core.keyword_identical_QMARK_;
var expr__36235 = k__31423__auto__;
if(cljs.core.truth_(pred__36234.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__36235))){
return (new datascript.parser.Query(G__36228,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36234.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__36235))){
return (new datascript.parser.Query(self__.qfind,G__36228,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36234.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__36235))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__36228,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36234.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__36235))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,G__36228,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36228),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36228){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,G__36228,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__34541__auto__,f36225){
var self__ = this;
var this__34541__auto____$1 = this;
var new__34542__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.qfind,f36225),datascript.parser.postwalk.call(null,self__.qwith,f36225),datascript.parser.postwalk.call(null,self__.qin,f36225),datascript.parser.postwalk.call(null,self__.qwhere,f36225),null,null,null));
var temp__5455__auto__ = cljs.core.meta.call(null,this__34541__auto____$1);
if(cljs.core.truth_(temp__5455__auto__)){
var meta__34543__auto__ = temp__5455__auto__;
return cljs.core.with_meta.call(null,new__34542__auto__,meta__34543__auto__);
} else {
return new__34542__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___34544__auto__,pred36226,acc36227){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect.call(null,pred36226,self__.qwhere,datascript.parser.collect.call(null,pred36226,self__.qin,datascript.parser.collect.call(null,pred36226,self__.qwith,datascript.parser.collect.call(null,pred36226,self__.qfind,acc36227))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___34544__auto__,acc36227){
var self__ = this;
var ___34544__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc36227,self__.qfind),self__.qwith),self__.qin),self__.qwhere);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qin,qwhere,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__36232){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__36232),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__36232),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__36232),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__36232),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36232,new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378))),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5455__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__5455__auto__)){
var q = temp__5455__auto__;
if((q instanceof cljs.core.Keyword)){
var G__36238 = parsed;
var G__36239 = q;
var G__36240 = cljs.core.next.call(null,qs);
parsed = G__36238;
key = G__36239;
qs = G__36240;
continue;
} else {
var G__36241 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__36242 = key;
var G__36243 = cljs.core.next.call(null,qs);
parsed = G__36241;
key = G__36242;
qs = G__36243;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_36250 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_36251 = cljs.core.set.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_36252 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_36253 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_36254 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_36250,with_vars_36251),clojure.set.union.call(null,where_vars_36253,in_vars_36252));
var shared_36255 = clojure.set.intersection.call(null,find_vars_36250,with_vars_36251);
if(cljs.core.empty_QMARK_.call(null,unknown_36254)){
} else {
throw cljs.core.ex_info.call(null,["Query for unknown vars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_36254)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_36254,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_36255)){
} else {
throw cljs.core.ex_info.call(null,[":in and :with should not use same variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_36255)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_36255,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_36256 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_36257 = datascript.parser.collect.call(null,((function (in_vars_36256){
return (function (p1__36244_SHARP_){
return (p1__36244_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_36256))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_36258 = datascript.parser.collect.call(null,((function (in_vars_36256,in_sources_36257){
return (function (p1__36245_SHARP_){
return (p1__36245_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_36256,in_sources_36257))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__30715__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_36256);
if(cljs.core.truth_(and__30715__auto__)){
var and__30715__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_36257);
if(cljs.core.truth_(and__30715__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_36258);
} else {
return and__30715__auto____$1;
}
} else {
return and__30715__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,["Vars used in :in should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_36259 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_36259))){
} else {
throw cljs.core.ex_info.call(null,["Vars used in :with should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_36260 = datascript.parser.collect.call(null,(function (p1__36246_SHARP_){
return (p1__36246_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_36261 = datascript.parser.collect.call(null,((function (in_sources_36260){
return (function (p1__36247_SHARP_){
return (p1__36247_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_36260))
,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_36262 = clojure.set.difference.call(null,where_sources_36261,in_sources_36260);
if(cljs.core.empty_QMARK_.call(null,unknown_36262)){
} else {
throw cljs.core.ex_info.call(null,["Where uses unknown source vars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_36262)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_36262,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__36248_SHARP_){
return (p1__36248_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__36249_SHARP_){
return (p1__36249_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,["Missing rules var '%' in :in"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,["Query should be a vector or a map"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"qwith","qwith",-45809392),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5457__auto__)){
var with$ = temp__5457__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map?rel=1513003765752
