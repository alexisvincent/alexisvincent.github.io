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
var x__43049__auto__ = (((_ == null))?null:_);
var m__43050__auto__ = (datascript.parser._collect[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,_,pred,acc);
} else {
var m__43050__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,_,pred,acc);
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
var x__43049__auto__ = (((_ == null))?null:_);
var m__43050__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,_,acc);
} else {
var m__43050__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,_,acc);
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
var x__43049__auto__ = (((_ == null))?null:_);
var m__43050__auto__ = (datascript.parser._postwalk[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,_,f);
} else {
var m__43050__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,_,f);
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
return cljs.core.reduce.call(null,(function (p1__49796_SHARP_,p2__49795_SHARP_){
var temp__5276__auto__ = parse_el.call(null,p2__49795_SHARP_);
if(cljs.core.truth_(temp__5276__auto__)){
var parsed = temp__5276__auto__;
return cljs.core.conj.call(null,p1__49796_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__49798 = arguments.length;
switch (G__49798) {
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
var or__41411__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__41411__auto__){
return or__41411__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__49804){
var vec__49805 = p__49804;
var k = cljs.core.nth.call(null,vec__49805,(0),null);
var v = cljs.core.nth.call(null,vec__49805,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript.parser.postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__49801_SHARP_){
return datascript.parser.postwalk.call(null,p1__49801_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__49802_SHARP_){
return datascript.parser.postwalk.call(null,p1__49802_SHARP_,f);
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
var or__41411__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
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
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49812,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49816 = k49812;
switch (G__49816) {
default:
return cljs.core.get.call(null,self__.__extmap,k49812,else__42885__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Placeholder{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49811){
var self__ = this;
var G__49811__$1 = this;
return (new cljs.core.RecordIter((0),G__49811__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49813,other49814){
var self__ = this;
var this49813__$1 = this;
return (!((other49814 == null))) && ((this49813__$1.constructor === other49814.constructor)) && (cljs.core._EQ_.call(null,this49813__$1.__extmap,other49814.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49811){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49817 = cljs.core.keyword_identical_QMARK_;
var expr__49818 = k__42890__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49811),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49811){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Placeholder(G__49811,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49808){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49809,acc49810){
var self__ = this;
var ___48611__auto____$1 = this;
return acc49810;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49810){
var self__ = this;
var ___48611__auto____$1 = this;
return acc49810;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__49815){
return (new datascript.parser.Placeholder(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49815)),null));
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
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49825,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49829 = k49825;
var G__49829__$1 = (((G__49829 instanceof cljs.core.Keyword))?G__49829.fqn:null);
switch (G__49829__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49825,else__42885__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Variable{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49824){
var self__ = this;
var G__49824__$1 = this;
return (new cljs.core.RecordIter((0),G__49824__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49826,other49827){
var self__ = this;
var this49826__$1 = this;
return (!((other49827 == null))) && ((this49826__$1.constructor === other49827.constructor)) && (cljs.core._EQ_.call(null,this49826__$1.symbol,other49827.symbol)) && (cljs.core._EQ_.call(null,this49826__$1.__extmap,other49827.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49824){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49830 = cljs.core.keyword_identical_QMARK_;
var expr__49831 = k__42890__auto__;
if(cljs.core.truth_(pred__49830.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__49831))){
return (new datascript.parser.Variable(G__49824,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49824),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49824){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__49824,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49821){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f49821),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49822,acc49823){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49822,self__.symbol,acc49823);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49823){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc49823,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__49828){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__49828),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49828,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
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
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49838,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49842 = k49838;
var G__49842__$1 = (((G__49842 instanceof cljs.core.Keyword))?G__49842.fqn:null);
switch (G__49842__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49838,else__42885__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.SrcVar{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49837){
var self__ = this;
var G__49837__$1 = this;
return (new cljs.core.RecordIter((0),G__49837__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49839,other49840){
var self__ = this;
var this49839__$1 = this;
return (!((other49840 == null))) && ((this49839__$1.constructor === other49840.constructor)) && (cljs.core._EQ_.call(null,this49839__$1.symbol,other49840.symbol)) && (cljs.core._EQ_.call(null,this49839__$1.__extmap,other49840.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49837){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49843 = cljs.core.keyword_identical_QMARK_;
var expr__49844 = k__42890__auto__;
if(cljs.core.truth_(pred__49843.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__49844))){
return (new datascript.parser.SrcVar(G__49837,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49837),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49837){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__49837,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49834){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f49834),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49835,acc49836){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49835,self__.symbol,acc49836);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49836){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc49836,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__49841){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__49841),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49841,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
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
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49851,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49855 = k49851;
switch (G__49855) {
default:
return cljs.core.get.call(null,self__.__extmap,k49851,else__42885__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49850){
var self__ = this;
var G__49850__$1 = this;
return (new cljs.core.RecordIter((0),G__49850__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49852,other49853){
var self__ = this;
var this49852__$1 = this;
return (!((other49853 == null))) && ((this49852__$1.constructor === other49853.constructor)) && (cljs.core._EQ_.call(null,this49852__$1.__extmap,other49853.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49850){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49856 = cljs.core.keyword_identical_QMARK_;
var expr__49857 = k__42890__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49850),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49850){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__49850,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49847){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49848,acc49849){
var self__ = this;
var ___48611__auto____$1 = this;
return acc49849;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49849){
var self__ = this;
var ___48611__auto____$1 = this;
return acc49849;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__49854){
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49854)),null));
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
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49864,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49868 = k49864;
switch (G__49868) {
default:
return cljs.core.get.call(null,self__.__extmap,k49864,else__42885__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.RulesVar{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49863){
var self__ = this;
var G__49863__$1 = this;
return (new cljs.core.RecordIter((0),G__49863__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49865,other49866){
var self__ = this;
var this49865__$1 = this;
return (!((other49866 == null))) && ((this49865__$1.constructor === other49866.constructor)) && (cljs.core._EQ_.call(null,this49865__$1.__extmap,other49866.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49863){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49869 = cljs.core.keyword_identical_QMARK_;
var expr__49870 = k__42890__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49863),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49863){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.RulesVar(G__49863,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49860){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49861,acc49862){
var self__ = this;
var ___48611__auto____$1 = this;
return acc49862;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49862){
var self__ = this;
var ___48611__auto____$1 = this;
return acc49862;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__49867){
return (new datascript.parser.RulesVar(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49867)),null));
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
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49877,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49881 = k49877;
var G__49881__$1 = (((G__49881 instanceof cljs.core.Keyword))?G__49881.fqn:null);
switch (G__49881__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49877,else__42885__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Constant{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49876){
var self__ = this;
var G__49876__$1 = this;
return (new cljs.core.RecordIter((0),G__49876__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49878,other49879){
var self__ = this;
var this49878__$1 = this;
return (!((other49879 == null))) && ((this49878__$1.constructor === other49879.constructor)) && (cljs.core._EQ_.call(null,this49878__$1.value,other49879.value)) && (cljs.core._EQ_.call(null,this49878__$1.__extmap,other49879.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49876){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49882 = cljs.core.keyword_identical_QMARK_;
var expr__49883 = k__42890__auto__;
if(cljs.core.truth_(pred__49882.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__49883))){
return (new datascript.parser.Constant(G__49876,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49876),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49876){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__49876,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49873){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f49873),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49874,acc49875){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49874,self__.value,acc49875);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49875){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc49875,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__49880){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__49880),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49880,new cljs.core.Keyword(null,"value","value",305978217))),null));
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
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49890,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49894 = k49890;
var G__49894__$1 = (((G__49894 instanceof cljs.core.Keyword))?G__49894.fqn:null);
switch (G__49894__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49890,else__42885__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49889){
var self__ = this;
var G__49889__$1 = this;
return (new cljs.core.RecordIter((0),G__49889__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49891,other49892){
var self__ = this;
var this49891__$1 = this;
return (!((other49892 == null))) && ((this49891__$1.constructor === other49892.constructor)) && (cljs.core._EQ_.call(null,this49891__$1.symbol,other49892.symbol)) && (cljs.core._EQ_.call(null,this49891__$1.__extmap,other49892.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49889){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49895 = cljs.core.keyword_identical_QMARK_;
var expr__49896 = k__42890__auto__;
if(cljs.core.truth_(pred__49895.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__49896))){
return (new datascript.parser.PlainSymbol(G__49889,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49889),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49889){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__49889,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49886){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f49886),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49887,acc49888){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49887,self__.symbol,acc49888);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49888){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc49888,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__49893){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__49893),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49893,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
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
var or__41411__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
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
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49903,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49907 = k49903;
var G__49907__$1 = (((G__49907 instanceof cljs.core.Keyword))?G__49907.fqn:null);
switch (G__49907__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49903,else__42885__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.RuleVars{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49902){
var self__ = this;
var G__49902__$1 = this;
return (new cljs.core.RecordIter((0),G__49902__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49904,other49905){
var self__ = this;
var this49904__$1 = this;
return (!((other49905 == null))) && ((this49904__$1.constructor === other49905.constructor)) && (cljs.core._EQ_.call(null,this49904__$1.required,other49905.required)) && (cljs.core._EQ_.call(null,this49904__$1.free,other49905.free)) && (cljs.core._EQ_.call(null,this49904__$1.__extmap,other49905.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49902){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49908 = cljs.core.keyword_identical_QMARK_;
var expr__49909 = k__42890__auto__;
if(cljs.core.truth_(pred__49908.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__49909))){
return (new datascript.parser.RuleVars(G__49902,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49908.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__49909))){
return (new datascript.parser.RuleVars(self__.required,G__49902,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49902),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49902){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__49902,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49899){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f49899),datascript.parser.postwalk.call(null,self__.free,f49899),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49900,acc49901){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49900,self__.free,datascript.parser.collect.call(null,pred49900,self__.required,acc49901));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49901){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc49901,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__49906){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__49906),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__49906),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49906,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328))),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__49912 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__49912,(0),null);
var rest = cljs.core.nth.call(null,vec__49912,(1),null);
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
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49919,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49923 = k49919;
switch (G__49923) {
default:
return cljs.core.get.call(null,self__.__extmap,k49919,else__42885__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49918){
var self__ = this;
var G__49918__$1 = this;
return (new cljs.core.RecordIter((0),G__49918__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49920,other49921){
var self__ = this;
var this49920__$1 = this;
return (!((other49921 == null))) && ((this49920__$1.constructor === other49921.constructor)) && (cljs.core._EQ_.call(null,this49920__$1.__extmap,other49921.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49918){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49924 = cljs.core.keyword_identical_QMARK_;
var expr__49925 = k__42890__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49918),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49918){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__49918,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49915){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49916,acc49917){
var self__ = this;
var ___48611__auto____$1 = this;
return acc49917;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49917){
var self__ = this;
var ___48611__auto____$1 = this;
return acc49917;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__49922){
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49922)),null));
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
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49932,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49936 = k49932;
var G__49936__$1 = (((G__49936 instanceof cljs.core.Keyword))?G__49936.fqn:null);
switch (G__49936__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49932,else__42885__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.BindScalar{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49931){
var self__ = this;
var G__49931__$1 = this;
return (new cljs.core.RecordIter((0),G__49931__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49933,other49934){
var self__ = this;
var this49933__$1 = this;
return (!((other49934 == null))) && ((this49933__$1.constructor === other49934.constructor)) && (cljs.core._EQ_.call(null,this49933__$1.variable,other49934.variable)) && (cljs.core._EQ_.call(null,this49933__$1.__extmap,other49934.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49931){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49937 = cljs.core.keyword_identical_QMARK_;
var expr__49938 = k__42890__auto__;
if(cljs.core.truth_(pred__49937.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__49938))){
return (new datascript.parser.BindScalar(G__49931,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49931),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49931){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__49931,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49928){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f49928),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49929,acc49930){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49929,self__.variable,acc49930);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49930){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc49930,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__49935){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__49935),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49935,new cljs.core.Keyword(null,"variable","variable",-281346492))),null));
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
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49945,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49949 = k49945;
var G__49949__$1 = (((G__49949 instanceof cljs.core.Keyword))?G__49949.fqn:null);
switch (G__49949__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49945,else__42885__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.BindTuple{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49944){
var self__ = this;
var G__49944__$1 = this;
return (new cljs.core.RecordIter((0),G__49944__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49946,other49947){
var self__ = this;
var this49946__$1 = this;
return (!((other49947 == null))) && ((this49946__$1.constructor === other49947.constructor)) && (cljs.core._EQ_.call(null,this49946__$1.bindings,other49947.bindings)) && (cljs.core._EQ_.call(null,this49946__$1.__extmap,other49947.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49944){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49950 = cljs.core.keyword_identical_QMARK_;
var expr__49951 = k__42890__auto__;
if(cljs.core.truth_(pred__49950.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__49951))){
return (new datascript.parser.BindTuple(G__49944,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49944),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49944){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__49944,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49941){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f49941),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49942,acc49943){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49942,self__.bindings,acc49943);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49943){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc49943,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__49948){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__49948),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49948,new cljs.core.Keyword(null,"bindings","bindings",1271397192))),null));
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
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49958,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49962 = k49958;
var G__49962__$1 = (((G__49962 instanceof cljs.core.Keyword))?G__49962.fqn:null);
switch (G__49962__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49958,else__42885__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.BindColl{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49957){
var self__ = this;
var G__49957__$1 = this;
return (new cljs.core.RecordIter((0),G__49957__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49959,other49960){
var self__ = this;
var this49959__$1 = this;
return (!((other49960 == null))) && ((this49959__$1.constructor === other49960.constructor)) && (cljs.core._EQ_.call(null,this49959__$1.binding,other49960.binding)) && (cljs.core._EQ_.call(null,this49959__$1.__extmap,other49960.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49957){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49963 = cljs.core.keyword_identical_QMARK_;
var expr__49964 = k__42890__auto__;
if(cljs.core.truth_(pred__49963.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__49964))){
return (new datascript.parser.BindColl(G__49957,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49957),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49957){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__49957,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49954){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f49954),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49955,acc49956){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49955,self__.binding,acc49956);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49956){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc49956,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__49961){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__49961),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49961,new cljs.core.Keyword(null,"binding","binding",539932593))),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5278__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__5278__auto__)){
var var$ = temp__5278__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__41384__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__41384__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__41384__auto__;
}
})())){
var temp__5276__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5276__auto__)){
var sub_bind = temp__5276__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse collection binding"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__41411__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5278__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5278__auto__)){
var sub_bindings = temp__5278__auto__;
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
if(cljs.core.truth_((function (){var and__41384__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__41384__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__41384__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__41411__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
var or__41411__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__41411__auto____$2)){
return or__41411__auto____$2;
} else {
var or__41411__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__41411__auto____$3)){
return or__41411__auto____$3;
} else {
var or__41411__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__41411__auto____$4)){
return or__41411__auto____$4;
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
var x__43049__auto__ = (((this$ == null))?null:this$);
var m__43050__auto__ = (datascript.parser._find_vars[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,this$);
} else {
var m__43050__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,this$);
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

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49971,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49975 = k49971;
var G__49975__$1 = (((G__49975 instanceof cljs.core.Keyword))?G__49975.fqn:null);
switch (G__49975__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49971,else__42885__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Aggregate{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49970){
var self__ = this;
var G__49970__$1 = this;
return (new cljs.core.RecordIter((0),G__49970__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49972,other49973){
var self__ = this;
var this49972__$1 = this;
return (!((other49973 == null))) && ((this49972__$1.constructor === other49973.constructor)) && (cljs.core._EQ_.call(null,this49972__$1.fn,other49973.fn)) && (cljs.core._EQ_.call(null,this49972__$1.args,other49973.args)) && (cljs.core._EQ_.call(null,this49972__$1.__extmap,other49973.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49970){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49976 = cljs.core.keyword_identical_QMARK_;
var expr__49977 = k__42890__auto__;
if(cljs.core.truth_(pred__49976.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__49977))){
return (new datascript.parser.Aggregate(G__49970,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49976.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__49977))){
return (new datascript.parser.Aggregate(self__.fn,G__49970,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49970),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49970){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__49970,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49967){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f49967),datascript.parser.postwalk.call(null,self__.args,f49967),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49968,acc49969){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49968,self__.args,datascript.parser.collect.call(null,pred49968,self__.fn,acc49969));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49969){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc49969,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__49974){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__49974),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__49974),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49974,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49984,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__49988 = k49984;
var G__49988__$1 = (((G__49988 instanceof cljs.core.Keyword))?G__49988.fqn:null);
switch (G__49988__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k49984,else__42885__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Pull{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49983){
var self__ = this;
var G__49983__$1 = this;
return (new cljs.core.RecordIter((0),G__49983__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49985,other49986){
var self__ = this;
var this49985__$1 = this;
return (!((other49986 == null))) && ((this49985__$1.constructor === other49986.constructor)) && (cljs.core._EQ_.call(null,this49985__$1.source,other49986.source)) && (cljs.core._EQ_.call(null,this49985__$1.variable,other49986.variable)) && (cljs.core._EQ_.call(null,this49985__$1.pattern,other49986.pattern)) && (cljs.core._EQ_.call(null,this49985__$1.__extmap,other49986.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49983){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__49989 = cljs.core.keyword_identical_QMARK_;
var expr__49990 = k__42890__auto__;
if(cljs.core.truth_(pred__49989.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__49990))){
return (new datascript.parser.Pull(G__49983,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49989.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__49990))){
return (new datascript.parser.Pull(self__.source,G__49983,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49989.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__49990))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__49983,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49983),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49983){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__49983,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49980){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f49980),datascript.parser.postwalk.call(null,self__.variable,f49980),datascript.parser.postwalk.call(null,self__.pattern,f49980),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49981,acc49982){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49981,self__.pattern,datascript.parser.collect.call(null,pred49981,self__.variable,datascript.parser.collect.call(null,pred49981,self__.source,acc49982)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49982){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc49982,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__49987){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__49987),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__49987),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__49987),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__49987,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423))),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__43049__auto__ = (((this$ == null))?null:this$);
var m__43050__auto__ = (datascript.parser.find_elements[goog.typeOf(x__43049__auto__)]);
if(!((m__43050__auto__ == null))){
return m__43050__auto__.call(null,this$);
} else {
var m__43050__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__43050__auto____$1 == null))){
return m__43050__auto____$1.call(null,this$);
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
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k49997,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50001 = k49997;
var G__50001__$1 = (((G__50001 instanceof cljs.core.Keyword))?G__50001.fqn:null);
switch (G__50001__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49997,else__42885__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.FindRel{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49996){
var self__ = this;
var G__49996__$1 = this;
return (new cljs.core.RecordIter((0),G__49996__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49998,other49999){
var self__ = this;
var this49998__$1 = this;
return (!((other49999 == null))) && ((this49998__$1.constructor === other49999.constructor)) && (cljs.core._EQ_.call(null,this49998__$1.elements,other49999.elements)) && (cljs.core._EQ_.call(null,this49998__$1.__extmap,other49999.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__49996){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50002 = cljs.core.keyword_identical_QMARK_;
var expr__50003 = k__42890__auto__;
if(cljs.core.truth_(pred__50002.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__50003))){
return (new datascript.parser.FindRel(G__49996,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__49996),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__49996){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__49996,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f49993){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f49993),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred49994,acc49995){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred49994,self__.elements,acc49995);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc49995){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc49995,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__50000){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__50000),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50000,new cljs.core.Keyword(null,"elements","elements",657646735))),null));
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
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50010,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50014 = k50010;
var G__50014__$1 = (((G__50014 instanceof cljs.core.Keyword))?G__50014.fqn:null);
switch (G__50014__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50010,else__42885__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.FindColl{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50009){
var self__ = this;
var G__50009__$1 = this;
return (new cljs.core.RecordIter((0),G__50009__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50011,other50012){
var self__ = this;
var this50011__$1 = this;
return (!((other50012 == null))) && ((this50011__$1.constructor === other50012.constructor)) && (cljs.core._EQ_.call(null,this50011__$1.element,other50012.element)) && (cljs.core._EQ_.call(null,this50011__$1.__extmap,other50012.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50009){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50015 = cljs.core.keyword_identical_QMARK_;
var expr__50016 = k__42890__auto__;
if(cljs.core.truth_(pred__50015.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__50016))){
return (new datascript.parser.FindColl(G__50009,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50009),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50009){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__50009,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50006){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f50006),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50007,acc50008){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50007,self__.element,acc50008);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50008){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc50008,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__50013){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__50013),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50013,new cljs.core.Keyword(null,"element","element",1974019749))),null));
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
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50023,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50027 = k50023;
var G__50027__$1 = (((G__50027 instanceof cljs.core.Keyword))?G__50027.fqn:null);
switch (G__50027__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50023,else__42885__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.FindScalar{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50022){
var self__ = this;
var G__50022__$1 = this;
return (new cljs.core.RecordIter((0),G__50022__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50024,other50025){
var self__ = this;
var this50024__$1 = this;
return (!((other50025 == null))) && ((this50024__$1.constructor === other50025.constructor)) && (cljs.core._EQ_.call(null,this50024__$1.element,other50025.element)) && (cljs.core._EQ_.call(null,this50024__$1.__extmap,other50025.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50022){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50028 = cljs.core.keyword_identical_QMARK_;
var expr__50029 = k__42890__auto__;
if(cljs.core.truth_(pred__50028.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__50029))){
return (new datascript.parser.FindScalar(G__50022,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50022),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50022){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__50022,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50019){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f50019),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50020,acc50021){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50020,self__.element,acc50021);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50021){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc50021,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__50026){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__50026),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50026,new cljs.core.Keyword(null,"element","element",1974019749))),null));
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
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50036,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50040 = k50036;
var G__50040__$1 = (((G__50040 instanceof cljs.core.Keyword))?G__50040.fqn:null);
switch (G__50040__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50036,else__42885__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.FindTuple{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50035){
var self__ = this;
var G__50035__$1 = this;
return (new cljs.core.RecordIter((0),G__50035__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50037,other50038){
var self__ = this;
var this50037__$1 = this;
return (!((other50038 == null))) && ((this50037__$1.constructor === other50038.constructor)) && (cljs.core._EQ_.call(null,this50037__$1.elements,other50038.elements)) && (cljs.core._EQ_.call(null,this50037__$1.__extmap,other50038.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50035){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50041 = cljs.core.keyword_identical_QMARK_;
var expr__50042 = k__42890__auto__;
if(cljs.core.truth_(pred__50041.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__50042))){
return (new datascript.parser.FindTuple(G__50035,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50035),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50035){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__50035,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50032){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f50032),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50033,acc50034){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50033,self__.elements,acc50034);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50034){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc50034,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__50039){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__50039),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50039,new cljs.core.Keyword(null,"elements","elements",657646735))),null));
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
var vec__50045 = form;
var seq__50046 = cljs.core.seq.call(null,vec__50045);
var first__50047 = cljs.core.first.call(null,seq__50046);
var seq__50046__$1 = cljs.core.next.call(null,seq__50046);
var fn = first__50047;
var args = seq__50046__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__41384__auto__ = fn_STAR_;
if(cljs.core.truth_(and__41384__auto__)){
return args_STAR_;
} else {
return and__41384__auto__;
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
var vec__50048 = form;
var seq__50049 = cljs.core.seq.call(null,vec__50048);
var first__50050 = cljs.core.first.call(null,seq__50049);
var seq__50049__$1 = cljs.core.next.call(null,seq__50049);
var _ = first__50050;
var first__50050__$1 = cljs.core.first.call(null,seq__50049__$1);
var seq__50049__$2 = cljs.core.next.call(null,seq__50049__$1);
var fn = first__50050__$1;
var args = seq__50049__$2;
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__41384__auto__ = fn_STAR_;
if(cljs.core.truth_(and__41384__auto__)){
return args_STAR_;
} else {
return and__41384__auto__;
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
var vec__50051 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__50051,(0),null);
var pattern = cljs.core.nth.call(null,vec__50051,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__41411__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__41384__auto__ = src_STAR_;
if(cljs.core.truth_(and__41384__auto__)){
var and__41384__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__41384__auto____$1)){
return pattern_STAR_;
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
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
var or__41411__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
var or__41411__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__41411__auto____$2)){
return or__41411__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__50054 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__50054 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__50054,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__50055 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__50055 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__50055,null,null,null));
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
var G__50056 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__50056 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__50056,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__50057 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__50057 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__50057,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__41411__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
var or__41411__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__41411__auto____$2)){
return or__41411__auto____$2;
} else {
var or__41411__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__41411__auto____$3)){
return or__41411__auto____$3;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__41411__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :with clause, expected [ variable+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5276__auto__ = (function (){var or__41411__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var var$ = temp__5276__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__41411__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
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
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50062,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50066 = k50062;
var G__50066__$1 = (((G__50066 instanceof cljs.core.Keyword))?G__50066.fqn:null);
switch (G__50066__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50062,else__42885__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Pattern{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50061){
var self__ = this;
var G__50061__$1 = this;
return (new cljs.core.RecordIter((0),G__50061__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50063,other50064){
var self__ = this;
var this50063__$1 = this;
return (!((other50064 == null))) && ((this50063__$1.constructor === other50064.constructor)) && (cljs.core._EQ_.call(null,this50063__$1.source,other50064.source)) && (cljs.core._EQ_.call(null,this50063__$1.pattern,other50064.pattern)) && (cljs.core._EQ_.call(null,this50063__$1.__extmap,other50064.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50061){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50067 = cljs.core.keyword_identical_QMARK_;
var expr__50068 = k__42890__auto__;
if(cljs.core.truth_(pred__50067.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__50068))){
return (new datascript.parser.Pattern(G__50061,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50067.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__50068))){
return (new datascript.parser.Pattern(self__.source,G__50061,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50061),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50061){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__50061,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50058){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f50058),datascript.parser.postwalk.call(null,self__.pattern,f50058),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50059,acc50060){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50059,self__.pattern,datascript.parser.collect.call(null,pred50059,self__.source,acc50060));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50060){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50060,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__50065){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__50065),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__50065),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50065,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423))),null));
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
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50075,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50079 = k50075;
var G__50079__$1 = (((G__50079 instanceof cljs.core.Keyword))?G__50079.fqn:null);
switch (G__50079__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50075,else__42885__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Predicate{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50074){
var self__ = this;
var G__50074__$1 = this;
return (new cljs.core.RecordIter((0),G__50074__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50076,other50077){
var self__ = this;
var this50076__$1 = this;
return (!((other50077 == null))) && ((this50076__$1.constructor === other50077.constructor)) && (cljs.core._EQ_.call(null,this50076__$1.fn,other50077.fn)) && (cljs.core._EQ_.call(null,this50076__$1.args,other50077.args)) && (cljs.core._EQ_.call(null,this50076__$1.__extmap,other50077.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50074){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50080 = cljs.core.keyword_identical_QMARK_;
var expr__50081 = k__42890__auto__;
if(cljs.core.truth_(pred__50080.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50081))){
return (new datascript.parser.Predicate(G__50074,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50080.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__50081))){
return (new datascript.parser.Predicate(self__.fn,G__50074,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50074),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50074){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__50074,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50071){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f50071),datascript.parser.postwalk.call(null,self__.args,f50071),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50072,acc50073){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50072,self__.args,datascript.parser.collect.call(null,pred50072,self__.fn,acc50073));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50073){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50073,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__50078){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50078),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__50078),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50078,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50088,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50092 = k50088;
var G__50092__$1 = (((G__50092 instanceof cljs.core.Keyword))?G__50092.fqn:null);
switch (G__50092__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k50088,else__42885__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Function{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50087){
var self__ = this;
var G__50087__$1 = this;
return (new cljs.core.RecordIter((0),G__50087__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50089,other50090){
var self__ = this;
var this50089__$1 = this;
return (!((other50090 == null))) && ((this50089__$1.constructor === other50090.constructor)) && (cljs.core._EQ_.call(null,this50089__$1.fn,other50090.fn)) && (cljs.core._EQ_.call(null,this50089__$1.args,other50090.args)) && (cljs.core._EQ_.call(null,this50089__$1.binding,other50090.binding)) && (cljs.core._EQ_.call(null,this50089__$1.__extmap,other50090.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50087){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50093 = cljs.core.keyword_identical_QMARK_;
var expr__50094 = k__42890__auto__;
if(cljs.core.truth_(pred__50093.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50094))){
return (new datascript.parser.Function(G__50087,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50093.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__50094))){
return (new datascript.parser.Function(self__.fn,G__50087,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50093.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__50094))){
return (new datascript.parser.Function(self__.fn,self__.args,G__50087,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50087),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50087){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__50087,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50084){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f50084),datascript.parser.postwalk.call(null,self__.args,f50084),datascript.parser.postwalk.call(null,self__.binding,f50084),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50085,acc50086){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50085,self__.binding,datascript.parser.collect.call(null,pred50085,self__.args,datascript.parser.collect.call(null,pred50085,self__.fn,acc50086)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50086){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50086,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__50091){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50091),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__50091),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__50091),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50091,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593))),null));
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
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50101,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50105 = k50101;
var G__50105__$1 = (((G__50105 instanceof cljs.core.Keyword))?G__50105.fqn:null);
switch (G__50105__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k50101,else__42885__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50100){
var self__ = this;
var G__50100__$1 = this;
return (new cljs.core.RecordIter((0),G__50100__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50102,other50103){
var self__ = this;
var this50102__$1 = this;
return (!((other50103 == null))) && ((this50102__$1.constructor === other50103.constructor)) && (cljs.core._EQ_.call(null,this50102__$1.source,other50103.source)) && (cljs.core._EQ_.call(null,this50102__$1.name,other50103.name)) && (cljs.core._EQ_.call(null,this50102__$1.args,other50103.args)) && (cljs.core._EQ_.call(null,this50102__$1.__extmap,other50103.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50100){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50106 = cljs.core.keyword_identical_QMARK_;
var expr__50107 = k__42890__auto__;
if(cljs.core.truth_(pred__50106.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__50107))){
return (new datascript.parser.RuleExpr(G__50100,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50106.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__50107))){
return (new datascript.parser.RuleExpr(self__.source,G__50100,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50106.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__50107))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__50100,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50100),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50100){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__50100,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50097){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f50097),datascript.parser.postwalk.call(null,self__.name,f50097),datascript.parser.postwalk.call(null,self__.args,f50097),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50098,acc50099){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50098,self__.args,datascript.parser.collect.call(null,pred50098,self__.name,datascript.parser.collect.call(null,pred50098,self__.source,acc50099)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50099){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50099,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__50104){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__50104),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__50104),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__50104),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50104,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50114,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50118 = k50114;
var G__50118__$1 = (((G__50118 instanceof cljs.core.Keyword))?G__50118.fqn:null);
switch (G__50118__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k50114,else__42885__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Not{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50113){
var self__ = this;
var G__50113__$1 = this;
return (new cljs.core.RecordIter((0),G__50113__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50115,other50116){
var self__ = this;
var this50115__$1 = this;
return (!((other50116 == null))) && ((this50115__$1.constructor === other50116.constructor)) && (cljs.core._EQ_.call(null,this50115__$1.source,other50116.source)) && (cljs.core._EQ_.call(null,this50115__$1.vars,other50116.vars)) && (cljs.core._EQ_.call(null,this50115__$1.clauses,other50116.clauses)) && (cljs.core._EQ_.call(null,this50115__$1.__extmap,other50116.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50113){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50119 = cljs.core.keyword_identical_QMARK_;
var expr__50120 = k__42890__auto__;
if(cljs.core.truth_(pred__50119.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__50120))){
return (new datascript.parser.Not(G__50113,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50119.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__50120))){
return (new datascript.parser.Not(self__.source,G__50113,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50119.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__50120))){
return (new datascript.parser.Not(self__.source,self__.vars,G__50113,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50113),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50113){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__50113,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50110){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f50110),datascript.parser.postwalk.call(null,self__.vars,f50110),datascript.parser.postwalk.call(null,self__.clauses,f50110),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50111,acc50112){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50111,self__.clauses,datascript.parser.collect.call(null,pred50111,self__.vars,datascript.parser.collect.call(null,pred50111,self__.source,acc50112)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50112){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50112,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__50117){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__50117),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__50117),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__50117),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50117,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
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
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50127,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50131 = k50127;
var G__50131__$1 = (((G__50131 instanceof cljs.core.Keyword))?G__50131.fqn:null);
switch (G__50131__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k50127,else__42885__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Or{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50126){
var self__ = this;
var G__50126__$1 = this;
return (new cljs.core.RecordIter((0),G__50126__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50128,other50129){
var self__ = this;
var this50128__$1 = this;
return (!((other50129 == null))) && ((this50128__$1.constructor === other50129.constructor)) && (cljs.core._EQ_.call(null,this50128__$1.source,other50129.source)) && (cljs.core._EQ_.call(null,this50128__$1.rule_vars,other50129.rule_vars)) && (cljs.core._EQ_.call(null,this50128__$1.clauses,other50129.clauses)) && (cljs.core._EQ_.call(null,this50128__$1.__extmap,other50129.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50126){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50132 = cljs.core.keyword_identical_QMARK_;
var expr__50133 = k__42890__auto__;
if(cljs.core.truth_(pred__50132.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__50133))){
return (new datascript.parser.Or(G__50126,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50132.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__50133))){
return (new datascript.parser.Or(self__.source,G__50126,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50132.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__50133))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__50126,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50126),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50126){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__50126,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50123){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f50123),datascript.parser.postwalk.call(null,self__.rule_vars,f50123),datascript.parser.postwalk.call(null,self__.clauses,f50123),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50124,acc50125){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50124,self__.clauses,datascript.parser.collect.call(null,pred50124,self__.rule_vars,datascript.parser.collect.call(null,pred50124,self__.source,acc50125)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50125){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50125,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__50130){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__50130),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__50130),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__50130),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50130,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
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
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50140,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50144 = k50140;
var G__50144__$1 = (((G__50144 instanceof cljs.core.Keyword))?G__50144.fqn:null);
switch (G__50144__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50140,else__42885__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.And{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50139){
var self__ = this;
var G__50139__$1 = this;
return (new cljs.core.RecordIter((0),G__50139__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50141,other50142){
var self__ = this;
var this50141__$1 = this;
return (!((other50142 == null))) && ((this50141__$1.constructor === other50142.constructor)) && (cljs.core._EQ_.call(null,this50141__$1.clauses,other50142.clauses)) && (cljs.core._EQ_.call(null,this50141__$1.__extmap,other50142.__extmap));
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50139){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50145 = cljs.core.keyword_identical_QMARK_;
var expr__50146 = k__42890__auto__;
if(cljs.core.truth_(pred__50145.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__50146))){
return (new datascript.parser.And(G__50139,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50139),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50139){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__50139,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50136){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f50136),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50137,acc50138){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50137,self__.clauses,acc50138);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50138){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc50138,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__50143){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__50143),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50143,new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__41411__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__5276__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5276__auto__)){
var source_STAR_ = temp__5276__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5278__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__50149 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__50149,(0),null);
var next_form = cljs.core.nth.call(null,vec__50149,(1),null);
var temp__5278__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5278__auto____$1)){
var pattern_STAR_ = temp__5278__auto____$1;
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
var vec__50152 = form;
var seq__50153 = cljs.core.seq.call(null,vec__50152);
var first__50154 = cljs.core.first.call(null,seq__50153);
var seq__50153__$1 = cljs.core.next.call(null,seq__50153);
var fn = first__50154;
var args = seq__50153__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__41411__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__41384__auto__ = fn_STAR_;
if(cljs.core.truth_(and__41384__auto__)){
return args_STAR_;
} else {
return and__41384__auto__;
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
var temp__5278__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__5278__auto__)){
var vec__50155 = temp__5278__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__50155,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__50155,(1),null);
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
var vec__50158 = form;
var call = cljs.core.nth.call(null,vec__50158,(0),null);
var binding = cljs.core.nth.call(null,vec__50158,(1),null);
var temp__5278__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__50161 = temp__5278__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__50161,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__50161,(1),null);
var temp__5278__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__5278__auto____$1)){
var binding_STAR_ = temp__5278__auto____$1;
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
var temp__5278__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__50164 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__50164,(0),null);
var next_form = cljs.core.nth.call(null,vec__50164,(1),null);
var vec__50167 = next_form;
var seq__50168 = cljs.core.seq.call(null,vec__50167);
var first__50169 = cljs.core.first.call(null,seq__50168);
var seq__50168__$1 = cljs.core.next.call(null,seq__50168);
var name = first__50169;
var args = seq__50168__$1;
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
var undeclared_50171 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_50171)){
} else {
throw cljs.core.ex_info.call(null,["Join variable not declared inside clauses: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_50171)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
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
var temp__5278__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__50172 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__50172,(0),null);
var next_form = cljs.core.nth.call(null,vec__50172,(1),null);
var vec__50175 = next_form;
var seq__50176 = cljs.core.seq.call(null,vec__50175);
var first__50177 = cljs.core.first.call(null,seq__50176);
var seq__50176__$1 = cljs.core.next.call(null,seq__50176);
var sym = first__50177;
var clauses = seq__50176__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__5276__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__5276__auto__)){
var clauses_STAR_ = temp__5276__auto__;
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
var temp__5278__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__50178 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__50178,(0),null);
var next_form = cljs.core.nth.call(null,vec__50178,(1),null);
var vec__50181 = next_form;
var seq__50182 = cljs.core.seq.call(null,vec__50181);
var first__50183 = cljs.core.first.call(null,seq__50182);
var seq__50182__$1 = cljs.core.next.call(null,seq__50182);
var sym = first__50183;
var first__50183__$1 = cljs.core.first.call(null,seq__50182__$1);
var seq__50182__$2 = cljs.core.next.call(null,seq__50182__$1);
var vars = first__50183__$1;
var clauses = seq__50182__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__41384__auto__ = vars_STAR_;
if(cljs.core.truth_(and__41384__auto__)){
return clauses_STAR_;
} else {
return and__41384__auto__;
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
var map__50184 = clause;
var map__50184__$1 = ((((!((map__50184 == null)))?((((map__50184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50184):map__50184);
var map__50185 = cljs.core.get.call(null,map__50184__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__50185__$1 = ((((!((map__50185 == null)))?((((map__50185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50185):map__50185);
var required = cljs.core.get.call(null,map__50185__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__50185__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__50184__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__50188_50192 = cljs.core.seq.call(null,clauses);
var chunk__50189_50193 = null;
var count__50190_50194 = (0);
var i__50191_50195 = (0);
while(true){
if((i__50191_50195 < count__50190_50194)){
var clause_50196__$1 = cljs.core._nth.call(null,chunk__50189_50193,i__50191_50195);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_50196__$1], null),form);

var G__50197 = seq__50188_50192;
var G__50198 = chunk__50189_50193;
var G__50199 = count__50190_50194;
var G__50200 = (i__50191_50195 + (1));
seq__50188_50192 = G__50197;
chunk__50189_50193 = G__50198;
count__50190_50194 = G__50199;
i__50191_50195 = G__50200;
continue;
} else {
var temp__5278__auto___50201 = cljs.core.seq.call(null,seq__50188_50192);
if(temp__5278__auto___50201){
var seq__50188_50202__$1 = temp__5278__auto___50201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50188_50202__$1)){
var c__43430__auto___50203 = cljs.core.chunk_first.call(null,seq__50188_50202__$1);
var G__50204 = cljs.core.chunk_rest.call(null,seq__50188_50202__$1);
var G__50205 = c__43430__auto___50203;
var G__50206 = cljs.core.count.call(null,c__43430__auto___50203);
var G__50207 = (0);
seq__50188_50192 = G__50204;
chunk__50189_50193 = G__50205;
count__50190_50194 = G__50206;
i__50191_50195 = G__50207;
continue;
} else {
var clause_50208__$1 = cljs.core.first.call(null,seq__50188_50202__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_50208__$1], null),form);

var G__50209 = cljs.core.next.call(null,seq__50188_50202__$1);
var G__50210 = null;
var G__50211 = (0);
var G__50212 = (0);
seq__50188_50192 = G__50209;
chunk__50189_50193 = G__50210;
count__50190_50194 = G__50211;
i__50191_50195 = G__50212;
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
var temp__5278__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__50213 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__50213,(0),null);
var next_form = cljs.core.nth.call(null,vec__50213,(1),null);
var vec__50216 = next_form;
var seq__50217 = cljs.core.seq.call(null,vec__50216);
var first__50218 = cljs.core.first.call(null,seq__50217);
var seq__50217__$1 = cljs.core.next.call(null,seq__50217);
var sym = first__50218;
var clauses = seq__50217__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__5276__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5276__auto__)){
var clauses_STAR_ = temp__5276__auto__;
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
var temp__5278__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__50219 = temp__5278__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__50219,(0),null);
var next_form = cljs.core.nth.call(null,vec__50219,(1),null);
var vec__50222 = next_form;
var seq__50223 = cljs.core.seq.call(null,vec__50222);
var first__50224 = cljs.core.first.call(null,seq__50223);
var seq__50223__$1 = cljs.core.next.call(null,seq__50223);
var sym = first__50224;
var first__50224__$1 = cljs.core.first.call(null,seq__50223__$1);
var seq__50223__$2 = cljs.core.next.call(null,seq__50223__$1);
var vars = first__50224__$1;
var clauses = seq__50223__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__41384__auto__ = vars_STAR_;
if(cljs.core.truth_(and__41384__auto__)){
return clauses_STAR_;
} else {
return and__41384__auto__;
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
var or__41411__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
var or__41411__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__41411__auto____$1)){
return or__41411__auto____$1;
} else {
var or__41411__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__41411__auto____$2)){
return or__41411__auto____$2;
} else {
var or__41411__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__41411__auto____$3)){
return or__41411__auto____$3;
} else {
var or__41411__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__41411__auto____$4)){
return or__41411__auto____$4;
} else {
var or__41411__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__41411__auto____$5)){
return or__41411__auto____$5;
} else {
var or__41411__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__41411__auto____$6)){
return or__41411__auto____$6;
} else {
var or__41411__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__41411__auto____$7)){
return or__41411__auto____$7;
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
var or__41411__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
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
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50230,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50234 = k50230;
var G__50234__$1 = (((G__50234 instanceof cljs.core.Keyword))?G__50234.fqn:null);
switch (G__50234__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50230,else__42885__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50229){
var self__ = this;
var G__50229__$1 = this;
return (new cljs.core.RecordIter((0),G__50229__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50231,other50232){
var self__ = this;
var this50231__$1 = this;
return (!((other50232 == null))) && ((this50231__$1.constructor === other50232.constructor)) && (cljs.core._EQ_.call(null,this50231__$1.vars,other50232.vars)) && (cljs.core._EQ_.call(null,this50231__$1.clauses,other50232.clauses)) && (cljs.core._EQ_.call(null,this50231__$1.__extmap,other50232.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50229){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50235 = cljs.core.keyword_identical_QMARK_;
var expr__50236 = k__42890__auto__;
if(cljs.core.truth_(pred__50235.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__50236))){
return (new datascript.parser.RuleBranch(G__50229,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50235.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__50236))){
return (new datascript.parser.RuleBranch(self__.vars,G__50229,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50229),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50229){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__50229,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50226){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f50226),datascript.parser.postwalk.call(null,self__.clauses,f50226),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50227,acc50228){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50227,self__.clauses,datascript.parser.collect.call(null,pred50227,self__.vars,acc50228));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50228){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50228,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__50233){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__50233),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__50233),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50233,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
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
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50243,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50247 = k50243;
var G__50247__$1 = (((G__50247 instanceof cljs.core.Keyword))?G__50247.fqn:null);
switch (G__50247__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50243,else__42885__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Rule{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50242){
var self__ = this;
var G__50242__$1 = this;
return (new cljs.core.RecordIter((0),G__50242__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50244,other50245){
var self__ = this;
var this50244__$1 = this;
return (!((other50245 == null))) && ((this50244__$1.constructor === other50245.constructor)) && (cljs.core._EQ_.call(null,this50244__$1.name,other50245.name)) && (cljs.core._EQ_.call(null,this50244__$1.branches,other50245.branches)) && (cljs.core._EQ_.call(null,this50244__$1.__extmap,other50245.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50242){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50248 = cljs.core.keyword_identical_QMARK_;
var expr__50249 = k__42890__auto__;
if(cljs.core.truth_(pred__50248.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__50249))){
return (new datascript.parser.Rule(G__50242,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50248.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__50249))){
return (new datascript.parser.Rule(self__.name,G__50242,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50242),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50242){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__50242,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50239){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f50239),datascript.parser.postwalk.call(null,self__.branches,f50239),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50240,acc50241){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50240,self__.branches,datascript.parser.collect.call(null,pred50240,self__.name,acc50241));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50241){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50241,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__50246){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__50246),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__50246),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50246,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268))),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__50252_SHARP_){
return (p1__50252_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__50253_SHARP_){
return (p1__50253_SHARP_ instanceof datascript.parser.Variable);
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
var vec__50254 = form;
var seq__50255 = cljs.core.seq.call(null,vec__50254);
var first__50256 = cljs.core.first.call(null,seq__50255);
var seq__50255__$1 = cljs.core.next.call(null,seq__50255);
var head = first__50256;
var clauses = seq__50255__$1;
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__50257 = head;
var seq__50258 = cljs.core.seq.call(null,vec__50257);
var first__50259 = cljs.core.first.call(null,seq__50258);
var seq__50258__$1 = cljs.core.next.call(null,seq__50258);
var name = first__50259;
var vars = seq__50258__$1;
var name_STAR_ = (function (){var or__41411__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule name, expected plain-symbol"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__41411__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__41411__auto__)){
return or__41411__auto__;
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
var seq__50260 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__50262 = null;
var count__50263 = (0);
var i__50264 = (0);
while(true){
if((i__50264 < count__50263)){
var b = cljs.core._nth.call(null,chunk__50262,i__50264);
var vars_50266 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_50266))){
throw cljs.core.ex_info.call(null,["Arity mismatch for rule '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),"': ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0)))," vs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_50266)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__50267 = seq__50260;
var G__50268 = chunk__50262;
var G__50269 = count__50263;
var G__50270 = (i__50264 + (1));
seq__50260 = G__50267;
chunk__50262 = G__50268;
count__50263 = G__50269;
i__50264 = G__50270;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__50260);
if(temp__5278__auto__){
var seq__50260__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50260__$1)){
var c__43430__auto__ = cljs.core.chunk_first.call(null,seq__50260__$1);
var G__50271 = cljs.core.chunk_rest.call(null,seq__50260__$1);
var G__50272 = c__43430__auto__;
var G__50273 = cljs.core.count.call(null,c__43430__auto__);
var G__50274 = (0);
seq__50260 = G__50271;
chunk__50262 = G__50272;
count__50263 = G__50273;
i__50264 = G__50274;
continue;
} else {
var b = cljs.core.first.call(null,seq__50260__$1);
var vars_50275 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_50275))){
throw cljs.core.ex_info.call(null,["Arity mismatch for rule '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),"': ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0)))," vs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_50275)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__50276 = cljs.core.next.call(null,seq__50260__$1);
var G__50277 = null;
var G__50278 = (0);
var G__50279 = (0);
seq__50260 = G__50276;
chunk__50262 = G__50277;
count__50263 = G__50278;
i__50264 = G__50279;
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
return cljs.core.vec.call(null,(function (){var iter__43357__auto__ = (function datascript$parser$parse_rules_$_iter__50281(s__50282){
return (new cljs.core.LazySeq(null,(function (){
var s__50282__$1 = s__50282;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__50282__$1);
if(temp__5278__auto__){
var s__50282__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50282__$2)){
var c__43355__auto__ = cljs.core.chunk_first.call(null,s__50282__$2);
var size__43356__auto__ = cljs.core.count.call(null,c__43355__auto__);
var b__50284 = cljs.core.chunk_buffer.call(null,size__43356__auto__);
if((function (){var i__50283 = (0);
while(true){
if((i__50283 < size__43356__auto__)){
var vec__50285 = cljs.core._nth.call(null,c__43355__auto__,i__50283);
var name = cljs.core.nth.call(null,vec__50285,(0),null);
var branches = cljs.core.nth.call(null,vec__50285,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__50283,vec__50285,name,branches,c__43355__auto__,size__43356__auto__,b__50284,s__50282__$2,temp__5278__auto__){
return (function (p1__50280_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__50280_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__50280_SHARP_),null,null,null));
});})(i__50283,vec__50285,name,branches,c__43355__auto__,size__43356__auto__,b__50284,s__50282__$2,temp__5278__auto__))
,branches);
cljs.core.chunk_append.call(null,b__50284,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__50291 = (i__50283 + (1));
i__50283 = G__50291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50284),datascript$parser$parse_rules_$_iter__50281.call(null,cljs.core.chunk_rest.call(null,s__50282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50284),null);
}
} else {
var vec__50288 = cljs.core.first.call(null,s__50282__$2);
var name = cljs.core.nth.call(null,vec__50288,(0),null);
var branches = cljs.core.nth.call(null,vec__50288,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__50288,name,branches,s__50282__$2,temp__5278__auto__){
return (function (p1__50280_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__50280_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__50280_SHARP_),null,null,null));
});})(vec__50288,name,branches,s__50282__$2,temp__5278__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__50281.call(null,cljs.core.rest.call(null,s__50282__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43357__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
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
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__42882__auto__,k__42883__auto__){
var self__ = this;
var this__42882__auto____$1 = this;
return this__42882__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__42883__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__42884__auto__,k50296,else__42885__auto__){
var self__ = this;
var this__42884__auto____$1 = this;
var G__50300 = k50296;
var G__50300__$1 = (((G__50300 instanceof cljs.core.Keyword))?G__50300.fqn:null);
switch (G__50300__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k50296,else__42885__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__42897__auto__,writer__42898__auto__,opts__42899__auto__){
var self__ = this;
var this__42897__auto____$1 = this;
var pr_pair__42900__auto__ = ((function (this__42897__auto____$1){
return (function (keyval__42901__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,cljs.core.pr_writer,""," ","",opts__42899__auto__,keyval__42901__auto__);
});})(this__42897__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__42898__auto__,pr_pair__42900__auto__,"#datascript.parser.Query{",", ","}",opts__42899__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50295){
var self__ = this;
var G__50295__$1 = this;
return (new cljs.core.RecordIter((0),G__50295__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__42880__auto__){
var self__ = this;
var this__42880__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__42876__auto__){
var self__ = this;
var this__42876__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__42886__auto__){
var self__ = this;
var this__42886__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__42877__auto__){
var self__ = this;
var this__42877__auto____$1 = this;
var h__42410__auto__ = self__.__hash;
if(!((h__42410__auto__ == null))){
return h__42410__auto__;
} else {
var h__42410__auto____$1 = ((function (h__42410__auto__,this__42877__auto____$1){
return (function (coll__42878__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll.call(null,coll__42878__auto__));
});})(h__42410__auto__,this__42877__auto____$1))
.call(null,this__42877__auto____$1);
self__.__hash = h__42410__auto____$1;

return h__42410__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50297,other50298){
var self__ = this;
var this50297__$1 = this;
return (!((other50298 == null))) && ((this50297__$1.constructor === other50298.constructor)) && (cljs.core._EQ_.call(null,this50297__$1.qfind,other50298.qfind)) && (cljs.core._EQ_.call(null,this50297__$1.qwith,other50298.qwith)) && (cljs.core._EQ_.call(null,this50297__$1.qin,other50298.qin)) && (cljs.core._EQ_.call(null,this50297__$1.qwhere,other50298.qwhere)) && (cljs.core._EQ_.call(null,this50297__$1.__extmap,other50298.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__42891__auto__,k__42892__auto__){
var self__ = this;
var this__42891__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null], null), null),k__42892__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__42891__auto____$1),self__.__meta),k__42892__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__42892__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__42889__auto__,k__42890__auto__,G__50295){
var self__ = this;
var this__42889__auto____$1 = this;
var pred__50301 = cljs.core.keyword_identical_QMARK_;
var expr__50302 = k__42890__auto__;
if(cljs.core.truth_(pred__50301.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__50302))){
return (new datascript.parser.Query(G__50295,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50301.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__50302))){
return (new datascript.parser.Query(self__.qfind,G__50295,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50301.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__50302))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__50295,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50301.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__50302))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,G__50295,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__42890__auto__,G__50295),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__42894__auto__){
var self__ = this;
var this__42894__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__42881__auto__,G__50295){
var self__ = this;
var this__42881__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,G__50295,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__42887__auto__,entry__42888__auto__){
var self__ = this;
var this__42887__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__42888__auto__)){
return this__42887__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__42888__auto__,(0)),cljs.core._nth.call(null,entry__42888__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__42887__auto____$1,entry__42888__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__48608__auto__,f50292){
var self__ = this;
var this__48608__auto____$1 = this;
var new__48609__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.qfind,f50292),datascript.parser.postwalk.call(null,self__.qwith,f50292),datascript.parser.postwalk.call(null,self__.qin,f50292),datascript.parser.postwalk.call(null,self__.qwhere,f50292),null,null,null));
var temp__5276__auto__ = cljs.core.meta.call(null,this__48608__auto____$1);
if(cljs.core.truth_(temp__5276__auto__)){
var meta__48610__auto__ = temp__5276__auto__;
return cljs.core.with_meta.call(null,new__48609__auto__,meta__48610__auto__);
} else {
return new__48609__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___48611__auto__,pred50293,acc50294){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect.call(null,pred50293,self__.qwhere,datascript.parser.collect.call(null,pred50293,self__.qin,datascript.parser.collect.call(null,pred50293,self__.qwith,datascript.parser.collect.call(null,pred50293,self__.qfind,acc50294))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___48611__auto__,acc50294){
var self__ = this;
var ___48611__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc50294,self__.qfind),self__.qwith),self__.qin),self__.qwhere);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__43024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__43024__auto__,writer__43025__auto__){
return cljs.core._write.call(null,writer__43025__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qin,qwhere,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__50299){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__50299),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__50299),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__50299),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__50299),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__50299,new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378))),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5276__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__5276__auto__)){
var q = temp__5276__auto__;
if((q instanceof cljs.core.Keyword)){
var G__50305 = parsed;
var G__50306 = q;
var G__50307 = cljs.core.next.call(null,qs);
parsed = G__50305;
key = G__50306;
qs = G__50307;
continue;
} else {
var G__50308 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__50309 = key;
var G__50310 = cljs.core.next.call(null,qs);
parsed = G__50308;
key = G__50309;
qs = G__50310;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_50317 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_50318 = cljs.core.set.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_50319 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_50320 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_50321 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_50317,with_vars_50318),clojure.set.union.call(null,where_vars_50320,in_vars_50319));
var shared_50322 = clojure.set.intersection.call(null,find_vars_50317,with_vars_50318);
if(cljs.core.empty_QMARK_.call(null,unknown_50321)){
} else {
throw cljs.core.ex_info.call(null,["Query for unknown vars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_50321)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_50321,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_50322)){
} else {
throw cljs.core.ex_info.call(null,[":in and :with should not use same variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_50322)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_50322,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_50323 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_50324 = datascript.parser.collect.call(null,((function (in_vars_50323){
return (function (p1__50311_SHARP_){
return (p1__50311_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_50323))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_50325 = datascript.parser.collect.call(null,((function (in_vars_50323,in_sources_50324){
return (function (p1__50312_SHARP_){
return (p1__50312_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_50323,in_sources_50324))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__41384__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_50323);
if(cljs.core.truth_(and__41384__auto__)){
var and__41384__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_50324);
if(cljs.core.truth_(and__41384__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_50325);
} else {
return and__41384__auto____$1;
}
} else {
return and__41384__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,["Vars used in :in should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_50326 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_50326))){
} else {
throw cljs.core.ex_info.call(null,["Vars used in :with should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_50327 = datascript.parser.collect.call(null,(function (p1__50313_SHARP_){
return (p1__50313_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_50328 = datascript.parser.collect.call(null,((function (in_sources_50327){
return (function (p1__50314_SHARP_){
return (p1__50314_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_50327))
,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_50329 = clojure.set.difference.call(null,where_sources_50328,in_sources_50327);
if(cljs.core.empty_QMARK_.call(null,unknown_50329)){
} else {
throw cljs.core.ex_info.call(null,["Where uses unknown source vars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_50329)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_50329,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__50315_SHARP_){
return (p1__50315_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__50316_SHARP_){
return (p1__50316_SHARP_ instanceof datascript.parser.RulesVar);
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
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"qwith","qwith",-45809392),(function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5278__auto__)){
var with$ = temp__5278__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map?rel=1512631529001
