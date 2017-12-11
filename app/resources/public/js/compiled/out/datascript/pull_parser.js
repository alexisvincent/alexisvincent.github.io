// Compiled by ClojureScript 1.9.908 {}
goog.provide('datascript.pull_parser');
goog.require('cljs.core');
goog.require('datascript.db');

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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullSpec = (function (wildcard_QMARK_,attrs,__meta,__extmap,__hash){
this.wildcard_QMARK_ = wildcard_QMARK_;
this.attrs = attrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36271,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36275 = k36271;
var G__36275__$1 = (((G__36275 instanceof cljs.core.Keyword))?G__36275.fqn:null);
switch (G__36275__$1) {
case "wildcard?":
return self__.wildcard_QMARK_;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36271,else__31418__auto__);

}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullSpec{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36270){
var self__ = this;
var G__36270__$1 = this;
return (new cljs.core.RecordIter((0),G__36270__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (90253489 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36272,other36273){
var self__ = this;
var this36272__$1 = this;
return (!((other36273 == null))) && ((this36272__$1.constructor === other36273.constructor)) && (cljs.core._EQ_.call(null,this36272__$1.wildcard_QMARK_,other36273.wildcard_QMARK_)) && (cljs.core._EQ_.call(null,this36272__$1.attrs,other36273.attrs)) && (cljs.core._EQ_.call(null,this36272__$1.__extmap,other36273.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36270){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36276 = cljs.core.keyword_identical_QMARK_;
var expr__36277 = k__31423__auto__;
if(cljs.core.truth_(pred__36276.call(null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),expr__36277))){
return (new datascript.pull_parser.PullSpec(G__36270,self__.attrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36276.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__36277))){
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,G__36270,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36270),null));
}
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36270){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,G__36270,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"wildcard?","wildcard?",954487426,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)], null);
});

datascript.pull_parser.PullSpec.cljs$lang$type = true;

datascript.pull_parser.PullSpec.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.PullSpec.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.__GT_PullSpec = (function datascript$pull_parser$__GT_PullSpec(wildcard_QMARK_,attrs){
return (new datascript.pull_parser.PullSpec(wildcard_QMARK_,attrs,null,null,null));
});

datascript.pull_parser.map__GT_PullSpec = (function datascript$pull_parser$map__GT_PullSpec(G__36274){
return (new datascript.pull_parser.PullSpec(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(G__36274),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__36274),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36274,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"attrs","attrs",-2090668713))),null));
});


/**
 * @interface
 */
datascript.pull_parser.IPullSpecComponent = function(){};

datascript.pull_parser._as_spec = (function datascript$pull_parser$_as_spec(this$){
if((!((this$ == null))) && (!((this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 == null)))){
return this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1(this$);
} else {
var x__31460__auto__ = (((this$ == null))?null:this$);
var m__31461__auto__ = (datascript.pull_parser._as_spec[goog.typeOf(x__31460__auto__)]);
if(!((m__31461__auto__ == null))){
return m__31461__auto__.call(null,this$);
} else {
var m__31461__auto____$1 = (datascript.pull_parser._as_spec["_"]);
if(!((m__31461__auto____$1 == null))){
return m__31461__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPullSpecComponent.-as-spec",this$);
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullAttrName = (function (attr,__meta,__extmap,__hash){
this.attr = attr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36281,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36285 = k36281;
var G__36285__$1 = (((G__36285 instanceof cljs.core.Keyword))?G__36285.fqn:null);
switch (G__36285__$1) {
case "attr":
return self__.attr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36281,else__31418__auto__);

}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullAttrName{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36280){
var self__ = this;
var G__36280__$1 = this;
return (new cljs.core.RecordIter((0),G__36280__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-838771693 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36282,other36283){
var self__ = this;
var this36282__$1 = this;
return (!((other36283 == null))) && ((this36282__$1.constructor === other36283.constructor)) && (cljs.core._EQ_.call(null,this36282__$1.attr,other36283.attr)) && (cljs.core._EQ_.call(null,this36282__$1.__extmap,other36283.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr], null)], null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36280){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36286 = cljs.core.keyword_identical_QMARK_;
var expr__36287 = k__31423__auto__;
if(cljs.core.truth_(pred__36286.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__36287))){
return (new datascript.pull_parser.PullAttrName(G__36280,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36280),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36280){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,G__36280,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null)], null);
});

datascript.pull_parser.PullAttrName.cljs$lang$type = true;

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.__GT_PullAttrName = (function datascript$pull_parser$__GT_PullAttrName(attr){
return (new datascript.pull_parser.PullAttrName(attr,null,null,null));
});

datascript.pull_parser.map__GT_PullAttrName = (function datascript$pull_parser$map__GT_PullAttrName(G__36284){
return (new datascript.pull_parser.PullAttrName(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__36284),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36284,new cljs.core.Keyword(null,"attr","attr",-604132353))),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullReverseAttrName = (function (attr,rattr,__meta,__extmap,__hash){
this.attr = attr;
this.rattr = rattr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36291,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36295 = k36291;
var G__36295__$1 = (((G__36295 instanceof cljs.core.Keyword))?G__36295.fqn:null);
switch (G__36295__$1) {
case "attr":
return self__.attr;

break;
case "rattr":
return self__.rattr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36291,else__31418__auto__);

}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullReverseAttrName{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rattr","rattr",-1122345563),self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36290){
var self__ = this;
var G__36290__$1 = this;
return (new cljs.core.RecordIter((0),G__36290__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"rattr","rattr",-1122345563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (158820207 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36292,other36293){
var self__ = this;
var this36292__$1 = this;
return (!((other36293 == null))) && ((this36292__$1.constructor === other36293.constructor)) && (cljs.core._EQ_.call(null,this36292__$1.attr,other36293.attr)) && (cljs.core._EQ_.call(null,this36292__$1.rattr,other36293.rattr)) && (cljs.core._EQ_.call(null,this36292__$1.__extmap,other36293.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.rattr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr], null)], null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rattr","rattr",-1122345563),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36290){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36296 = cljs.core.keyword_identical_QMARK_;
var expr__36297 = k__31423__auto__;
if(cljs.core.truth_(pred__36296.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__36297))){
return (new datascript.pull_parser.PullReverseAttrName(G__36290,self__.rattr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36296.call(null,new cljs.core.Keyword(null,"rattr","rattr",-1122345563),expr__36297))){
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,G__36290,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36290),null));
}
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rattr","rattr",-1122345563),self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36290){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,G__36290,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullReverseAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"rattr","rattr",518185964,null)], null);
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$type = true;

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.__GT_PullReverseAttrName = (function datascript$pull_parser$__GT_PullReverseAttrName(attr,rattr){
return (new datascript.pull_parser.PullReverseAttrName(attr,rattr,null,null,null));
});

datascript.pull_parser.map__GT_PullReverseAttrName = (function datascript$pull_parser$map__GT_PullReverseAttrName(G__36294){
return (new datascript.pull_parser.PullReverseAttrName(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__36294),new cljs.core.Keyword(null,"rattr","rattr",-1122345563).cljs$core$IFn$_invoke$arity$1(G__36294),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36294,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"rattr","rattr",-1122345563))),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullLimitExpr = (function (attr,limit,__meta,__extmap,__hash){
this.attr = attr;
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36301,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36305 = k36301;
var G__36305__$1 = (((G__36305 instanceof cljs.core.Keyword))?G__36305.fqn:null);
switch (G__36305__$1) {
case "attr":
return self__.attr;

break;
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36301,else__31418__auto__);

}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullLimitExpr{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36300){
var self__ = this;
var G__36300__$1 = this;
return (new cljs.core.RecordIter((0),G__36300__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (2109320956 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36302,other36303){
var self__ = this;
var this36302__$1 = this;
return (!((other36303 == null))) && ((this36302__$1.constructor === other36303.constructor)) && (cljs.core._EQ_.call(null,this36302__$1.attr,other36303.attr)) && (cljs.core._EQ_.call(null,this36302__$1.limit,other36303.limit)) && (cljs.core._EQ_.call(null,this36302__$1.__extmap,other36303.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),self__.limit);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"limit","limit",-1355822363),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36300){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36306 = cljs.core.keyword_identical_QMARK_;
var expr__36307 = k__31423__auto__;
if(cljs.core.truth_(pred__36306.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__36307))){
return (new datascript.pull_parser.PullLimitExpr(G__36300,self__.limit,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36306.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__36307))){
return (new datascript.pull_parser.PullLimitExpr(self__.attr,G__36300,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36300),null));
}
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36300){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,G__36300,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullLimitExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
});

datascript.pull_parser.PullLimitExpr.cljs$lang$type = true;

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.__GT_PullLimitExpr = (function datascript$pull_parser$__GT_PullLimitExpr(attr,limit){
return (new datascript.pull_parser.PullLimitExpr(attr,limit,null,null,null));
});

datascript.pull_parser.map__GT_PullLimitExpr = (function datascript$pull_parser$map__GT_PullLimitExpr(G__36304){
return (new datascript.pull_parser.PullLimitExpr(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__36304),new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(G__36304),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36304,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"limit","limit",-1355822363))),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullDefaultExpr = (function (attr,value,__meta,__extmap,__hash){
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36311,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36315 = k36311;
var G__36315__$1 = (((G__36315 instanceof cljs.core.Keyword))?G__36315.fqn:null);
switch (G__36315__$1) {
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36311,else__31418__auto__);

}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullDefaultExpr{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36310){
var self__ = this;
var G__36310__$1 = this;
return (new cljs.core.RecordIter((0),G__36310__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-1499761615 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36312,other36313){
var self__ = this;
var this36312__$1 = this;
return (!((other36313 == null))) && ((this36312__$1.constructor === other36313.constructor)) && (cljs.core._EQ_.call(null,this36312__$1.attr,other36313.attr)) && (cljs.core._EQ_.call(null,this36312__$1.value,other36313.value)) && (cljs.core._EQ_.call(null,this36312__$1.__extmap,other36313.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"default","default",-1987822328)], null),self__.value);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36310){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36316 = cljs.core.keyword_identical_QMARK_;
var expr__36317 = k__31423__auto__;
if(cljs.core.truth_(pred__36316.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__36317))){
return (new datascript.pull_parser.PullDefaultExpr(G__36310,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36316.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__36317))){
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,G__36310,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36310),null));
}
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36310){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,G__36310,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullDefaultExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$type = true;

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.__GT_PullDefaultExpr = (function datascript$pull_parser$__GT_PullDefaultExpr(attr,value){
return (new datascript.pull_parser.PullDefaultExpr(attr,value,null,null,null));
});

datascript.pull_parser.map__GT_PullDefaultExpr = (function datascript$pull_parser$map__GT_PullDefaultExpr(G__36314){
return (new datascript.pull_parser.PullDefaultExpr(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__36314),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__36314),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36314,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217))),null));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullWildcard = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36321,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36325 = k36321;
switch (G__36325) {
default:
return cljs.core.get.call(null,self__.__extmap,k36321,else__31418__auto__);

}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullWildcard{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36320){
var self__ = this;
var G__36320__$1 = this;
return (new cljs.core.RecordIter((0),G__36320__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-163917799 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36322,other36323){
var self__ = this;
var this36322__$1 = this;
return (!((other36323 == null))) && ((this36322__$1.constructor === other36323.constructor)) && (cljs.core._EQ_.call(null,this36322__$1.__extmap,other36323.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36320){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36326 = cljs.core.keyword_identical_QMARK_;
var expr__36327 = k__31423__auto__;
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36320),null));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36320){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(G__36320,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullWildcard.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.pull_parser.PullWildcard.cljs$lang$type = true;

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.__GT_PullWildcard = (function datascript$pull_parser$__GT_PullWildcard(){
return (new datascript.pull_parser.PullWildcard(null,null,null));
});

datascript.pull_parser.map__GT_PullWildcard = (function datascript$pull_parser$map__GT_PullWildcard(G__36324){
return (new datascript.pull_parser.PullWildcard(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36324)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullRecursionLimit = (function (limit,__meta,__extmap,__hash){
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36331,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36335 = k36331;
var G__36335__$1 = (((G__36335 instanceof cljs.core.Keyword))?G__36335.fqn:null);
switch (G__36335__$1) {
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36331,else__31418__auto__);

}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullRecursionLimit{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36330){
var self__ = this;
var G__36330__$1 = this;
return (new cljs.core.RecordIter((0),G__36330__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (1552688154 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36332,other36333){
var self__ = this;
var this36332__$1 = this;
return (!((other36333 == null))) && ((this36332__$1.constructor === other36333.constructor)) && (cljs.core._EQ_.call(null,this36332__$1.limit,other36333.limit)) && (cljs.core._EQ_.call(null,this36332__$1.__extmap,other36333.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),self__.limit], null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36330){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36336 = cljs.core.keyword_identical_QMARK_;
var expr__36337 = k__31423__auto__;
if(cljs.core.truth_(pred__36336.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__36337))){
return (new datascript.pull_parser.PullRecursionLimit(G__36330,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36330),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36330){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,G__36330,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullRecursionLimit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$type = true;

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.__GT_PullRecursionLimit = (function datascript$pull_parser$__GT_PullRecursionLimit(limit){
return (new datascript.pull_parser.PullRecursionLimit(limit,null,null,null));
});

datascript.pull_parser.map__GT_PullRecursionLimit = (function datascript$pull_parser$map__GT_PullRecursionLimit(G__36334){
return (new datascript.pull_parser.PullRecursionLimit(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(G__36334),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36334,new cljs.core.Keyword(null,"limit","limit",-1355822363))),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullMapSpecEntry = (function (attr,porrl,__meta,__extmap,__hash){
this.attr = attr;
this.porrl = porrl;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36341,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36345 = k36341;
var G__36345__$1 = (((G__36345 instanceof cljs.core.Keyword))?G__36345.fqn:null);
switch (G__36345__$1) {
case "attr":
return self__.attr;

break;
case "porrl":
return self__.porrl;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36341,else__31418__auto__);

}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullMapSpecEntry{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"porrl","porrl",-1693905102),self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36340){
var self__ = this;
var G__36340__$1 = this;
return (new cljs.core.RecordIter((0),G__36340__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"porrl","porrl",-1693905102)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (152088668 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36342,other36343){
var self__ = this;
var this36342__$1 = this;
return (!((other36343 == null))) && ((this36342__$1.constructor === other36343.constructor)) && (cljs.core._EQ_.call(null,this36342__$1.attr,other36343.attr)) && (cljs.core._EQ_.call(null,this36342__$1.porrl,other36343.porrl)) && (cljs.core._EQ_.call(null,this36342__$1.__extmap,other36343.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),(1),cljs.core.conj,datascript.pull_parser._as_spec.call(null,self__.porrl));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"porrl","porrl",-1693905102),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36340){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36346 = cljs.core.keyword_identical_QMARK_;
var expr__36347 = k__31423__auto__;
if(cljs.core.truth_(pred__36346.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__36347))){
return (new datascript.pull_parser.PullMapSpecEntry(G__36340,self__.porrl,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36346.call(null,new cljs.core.Keyword(null,"porrl","porrl",-1693905102),expr__36347))){
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,G__36340,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36340),null));
}
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"porrl","porrl",-1693905102),self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36340){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,G__36340,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullMapSpecEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"porrl","porrl",-53373575,null)], null);
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$type = true;

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.__GT_PullMapSpecEntry = (function datascript$pull_parser$__GT_PullMapSpecEntry(attr,porrl){
return (new datascript.pull_parser.PullMapSpecEntry(attr,porrl,null,null,null));
});

datascript.pull_parser.map__GT_PullMapSpecEntry = (function datascript$pull_parser$map__GT_PullMapSpecEntry(G__36344){
return (new datascript.pull_parser.PullMapSpecEntry(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__36344),new cljs.core.Keyword(null,"porrl","porrl",-1693905102).cljs$core$IFn$_invoke$arity$1(G__36344),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36344,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"porrl","porrl",-1693905102))),null));
});

datascript.pull_parser.aggregate_specs = (function datascript$pull_parser$aggregate_specs(res,part){
if((part instanceof datascript.pull_parser.PullWildcard)){
return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),true);
} else {
return cljs.core.update.call(null,res,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.conj_BANG_,datascript.pull_parser._as_spec.call(null,part));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullPattern = (function (specs,__meta,__extmap,__hash){
this.specs = specs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31415__auto__,k__31416__auto__){
var self__ = this;
var this__31415__auto____$1 = this;
return this__31415__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31416__auto__,null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31417__auto__,k36351,else__31418__auto__){
var self__ = this;
var this__31417__auto____$1 = this;
var G__36355 = k36351;
var G__36355__$1 = (((G__36355 instanceof cljs.core.Keyword))?G__36355.fqn:null);
switch (G__36355__$1) {
case "specs":
return self__.specs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36351,else__31418__auto__);

}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31429__auto__,writer__31430__auto__,opts__31431__auto__){
var self__ = this;
var this__31429__auto____$1 = this;
var pr_pair__31432__auto__ = ((function (this__31429__auto____$1){
return (function (keyval__31433__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,cljs.core.pr_writer,""," ","",opts__31431__auto__,keyval__31433__auto__);
});})(this__31429__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31430__auto__,pr_pair__31432__auto__,"#datascript.pull-parser.PullPattern{",", ","}",opts__31431__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"specs","specs",1426570741),self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36350){
var self__ = this;
var G__36350__$1 = this;
return (new cljs.core.RecordIter((0),G__36350__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"specs","specs",1426570741)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31413__auto__){
var self__ = this;
var this__31413__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31410__auto__){
var self__ = this;
var this__31410__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31419__auto__){
var self__ = this;
var this__31419__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31411__auto__){
var self__ = this;
var this__31411__auto____$1 = this;
var h__31183__auto__ = self__.__hash;
if(!((h__31183__auto__ == null))){
return h__31183__auto__;
} else {
var h__31183__auto____$1 = ((function (h__31183__auto__,this__31411__auto____$1){
return (function (coll__31412__auto__){
return (-795554044 ^ cljs.core.hash_unordered_coll.call(null,coll__31412__auto__));
});})(h__31183__auto__,this__31411__auto____$1))
.call(null,this__31411__auto____$1);
self__.__hash = h__31183__auto____$1;

return h__31183__auto____$1;
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36352,other36353){
var self__ = this;
var this36352__$1 = this;
return (!((other36353 == null))) && ((this36352__$1.constructor === other36353.constructor)) && (cljs.core._EQ_.call(null,this36352__$1.specs,other36353.specs)) && (cljs.core._EQ_.call(null,this36352__$1.__extmap,other36353.__extmap));
});

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var init = (new datascript.pull_parser.PullSpec(false,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),null,null,null));
var spec = cljs.core.reduce.call(null,datascript.pull_parser.aggregate_specs,init,self__.specs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subpattern","subpattern",45002743),cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.persistent_BANG_)], null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31424__auto__,k__31425__auto__){
var self__ = this;
var this__31424__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"specs","specs",1426570741),null], null), null),k__31425__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31424__auto____$1),self__.__meta),k__31425__auto__);
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31425__auto__)),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31422__auto__,k__31423__auto__,G__36350){
var self__ = this;
var this__31422__auto____$1 = this;
var pred__36356 = cljs.core.keyword_identical_QMARK_;
var expr__36357 = k__31423__auto__;
if(cljs.core.truth_(pred__36356.call(null,new cljs.core.Keyword(null,"specs","specs",1426570741),expr__36357))){
return (new datascript.pull_parser.PullPattern(G__36350,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31423__auto__,G__36350),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31427__auto__){
var self__ = this;
var this__31427__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"specs","specs",1426570741),self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31414__auto__,G__36350){
var self__ = this;
var this__31414__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,G__36350,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31420__auto__,entry__31421__auto__){
var self__ = this;
var this__31420__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31421__auto__)){
return this__31420__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31421__auto__,(0)),cljs.core._nth.call(null,entry__31421__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31420__auto____$1,entry__31421__auto__);
}
});

datascript.pull_parser.PullPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"specs","specs",-1227865028,null)], null);
});

datascript.pull_parser.PullPattern.cljs$lang$type = true;

datascript.pull_parser.PullPattern.cljs$lang$ctorPrSeq = (function (this__31453__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.PullPattern.cljs$lang$ctorPrWriter = (function (this__31453__auto__,writer__31454__auto__){
return cljs.core._write.call(null,writer__31454__auto__,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.__GT_PullPattern = (function datascript$pull_parser$__GT_PullPattern(specs){
return (new datascript.pull_parser.PullPattern(specs,null,null,null));
});

datascript.pull_parser.map__GT_PullPattern = (function datascript$pull_parser$map__GT_PullPattern(G__36354){
return (new datascript.pull_parser.PullPattern(new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(G__36354),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__36354,new cljs.core.Keyword(null,"specs","specs",1426570741))),null));
});

datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(pattern){
return null;
});
datascript.pull_parser.wildcard_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"*","*",-1294732318),null,"*",null,new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null);
datascript.pull_parser.parse_wildcard = (function datascript$pull_parser$parse_wildcard(spec){
if(cljs.core.truth_(datascript.pull_parser.wildcard_QMARK_.call(null,spec))){
return (new datascript.pull_parser.PullWildcard(null,null,null));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_name = (function datascript$pull_parser$parse_attr_name(spec){
if(((spec instanceof cljs.core.Keyword)) || (typeof spec === 'string')){
if(datascript.db.reverse_ref_QMARK_.call(null,spec)){
return (new datascript.pull_parser.PullReverseAttrName(datascript.db.reverse_ref.call(null,spec),spec,null,null,null));
} else {
return (new datascript.pull_parser.PullAttrName(spec,null,null,null));
}
} else {
return null;
}
});
datascript.pull_parser.unlimited_recursion_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["...",null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null], null), null);
datascript.pull_parser.parse_recursion_limit = (function datascript$pull_parser$parse_recursion_limit(spec){
if(cljs.core.truth_(datascript.pull_parser.unlimited_recursion_QMARK_.call(null,spec))){
return (new datascript.pull_parser.PullRecursionLimit(null,null,null,null));
} else {
if((typeof spec === 'number') && ((spec > (0)))){
return (new datascript.pull_parser.PullRecursionLimit(spec,null,null,null));
} else {
return null;
}
}
});
datascript.pull_parser.maybe_attr_expr_QMARK_ = (function datascript$pull_parser$maybe_attr_expr_QMARK_(spec){
return (cljs.core.sequential_QMARK_.call(null,spec)) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,spec)));
});
datascript.pull_parser.limit_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"limit","limit",284709164,null),null,new cljs.core.Keyword(null,"limit","limit",-1355822363),null,"limit",null], null), null);
datascript.pull_parser.parse_limit_expr = (function datascript$pull_parser$parse_limit_expr(spec){
var vec__36360 = spec;
var limit_sym = cljs.core.nth.call(null,vec__36360,(0),null);
var attr_name_spec = cljs.core.nth.call(null,vec__36360,(1),null);
var pos_num = cljs.core.nth.call(null,vec__36360,(2),null);
if(cljs.core.truth_(datascript.pull_parser.limit_QMARK_.call(null,limit_sym))){
var temp__5455__auto__ = (function (){var and__30715__auto__ = ((pos_num == null)) || ((typeof pos_num === 'number') && ((pos_num > (0))));
if(and__30715__auto__){
return datascript.pull_parser.parse_attr_name.call(null,attr_name_spec);
} else {
return and__30715__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var attr_name = temp__5455__auto__;
return (new datascript.pull_parser.PullLimitExpr(attr_name,pos_num,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Expected [\"limit\" attr-name (positive-number | nil)]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.default_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"default","default",-347290801,null),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,"default",null], null), null);
datascript.pull_parser.parse_default_expr = (function datascript$pull_parser$parse_default_expr(spec){
var vec__36363 = spec;
var default_sym = cljs.core.nth.call(null,vec__36363,(0),null);
var attr_name_spec = cljs.core.nth.call(null,vec__36363,(1),null);
var default_val = cljs.core.nth.call(null,vec__36363,(2),null);
if(cljs.core.truth_(datascript.pull_parser.default_QMARK_.call(null,default_sym))){
var temp__5455__auto__ = (function (){var and__30715__auto__ = datascript.pull_parser.default_QMARK_.call(null,default_sym);
if(cljs.core.truth_(and__30715__auto__)){
return datascript.pull_parser.parse_attr_name.call(null,attr_name_spec);
} else {
return and__30715__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var attr_name = temp__5455__auto__;
return (new datascript.pull_parser.PullDefaultExpr(attr_name,default_val,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Expected [\"default\" attr-name any-value]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.parse_map_spec_entry = (function datascript$pull_parser$parse_map_spec_entry(p__36366){
var vec__36367 = p__36366;
var k = cljs.core.nth.call(null,vec__36367,(0),null);
var v = cljs.core.nth.call(null,vec__36367,(1),null);
var temp__5455__auto__ = (function (){var or__30727__auto__ = datascript.pull_parser.parse_attr_name.call(null,k);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_.call(null,k))){
return datascript.pull_parser.parse_limit_expr.call(null,k);
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var attr_name = temp__5455__auto__;
var temp__5455__auto____$1 = (function (){var or__30727__auto__ = datascript.pull_parser.parse_recursion_limit.call(null,v);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
return datascript.pull_parser.parse_pattern.call(null,v);
}
})();
if(cljs.core.truth_(temp__5455__auto____$1)){
var pattern_or_rec = temp__5455__auto____$1;
return (new datascript.pull_parser.PullMapSpecEntry(attr_name,pattern_or_rec,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Expected (pattern | recursion-limit)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
} else {
throw cljs.core.ex_info.call(null,["Expected (attr-name | limit-expr)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
});
datascript.pull_parser.parse_map_spec = (function datascript$pull_parser$parse_map_spec(spec){
if(cljs.core.map_QMARK_.call(null,spec)){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,spec))){
} else {
throw (new Error(["Assert failed: ","Maps should contain exactly 1 entry","\n","(= 1 (count spec))"].join('')));
}

return datascript.pull_parser.parse_map_spec_entry.call(null,cljs.core.first.call(null,spec));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_expr = (function datascript$pull_parser$parse_attr_expr(spec){
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_.call(null,spec))){
var or__30727__auto__ = datascript.pull_parser.parse_limit_expr.call(null,spec);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
return datascript.pull_parser.parse_default_expr.call(null,spec);
}
} else {
return null;
}
});
datascript.pull_parser.parse_attr_spec = (function datascript$pull_parser$parse_attr_spec(spec){
var or__30727__auto__ = datascript.pull_parser.parse_attr_name.call(null,spec);
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
var or__30727__auto____$1 = datascript.pull_parser.parse_wildcard.call(null,spec);
if(cljs.core.truth_(or__30727__auto____$1)){
return or__30727__auto____$1;
} else {
var or__30727__auto____$2 = datascript.pull_parser.parse_map_spec.call(null,spec);
if(cljs.core.truth_(or__30727__auto____$2)){
return or__30727__auto____$2;
} else {
var or__30727__auto____$3 = datascript.pull_parser.parse_attr_expr.call(null,spec);
if(cljs.core.truth_(or__30727__auto____$3)){
return or__30727__auto____$3;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse attr-spec, expected: (attr-name | wildcard | map-spec | attr-expr)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
}
}
}
});
datascript.pull_parser.pattern_clause_type = (function datascript$pull_parser$pattern_clause_type(clause){
if(cljs.core.map_QMARK_.call(null,clause)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.truth_(datascript.pull_parser.wildcard_QMARK_.call(null,clause))){
return new cljs.core.Keyword(null,"wildcard","wildcard",-622473020);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
});
datascript.pull_parser.expand_map_clause = (function datascript$pull_parser$expand_map_clause(clause){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__36370_SHARP_){
return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__36370_SHARP_);
})),clause);
});
datascript.pull_parser.simplify_pattern_clauses = (function datascript$pull_parser$simplify_pattern_clauses(pattern){
var groups = cljs.core.group_by.call(null,datascript.pull_parser.pattern_clause_type,pattern);
var base = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"wildcard","wildcard",-622473020))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null):cljs.core.PersistentVector.EMPTY);
return cljs.core.into.call(null,cljs.core.into.call(null,base,cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"other","other",995793544))),cljs.core.mapcat.call(null,datascript.pull_parser.expand_map_clause),cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"map","map",1371690461)));
});
/**
 * Parse an EDN pull pattern into a tree of records using the following
 * grammar:
 * 
 * ```
 * pattern            = [attr-spec+]
 * attr-spec          = attr-name | wildcard | map-spec | attr-expr
 * attr-name          = an edn keyword that names an attr
 * wildcard           = "*" or '*'
 * map-spec           = { ((attr-name | limit-expr) (pattern | recursion-limit))+ }
 * attr-expr          = limit-expr | default-expr
 * limit-expr         = ["limit" attr-name (positive-number | nil)]
 * default-expr       = ["default" attr-name any-value]
 * recursion-limit    = positive-number | '...'
 * ```
 */
datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(pattern){
if(cljs.core.sequential_QMARK_.call(null,pattern)){
return (new datascript.pull_parser.PullPattern(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,datascript.pull_parser.parse_attr_spec),datascript.pull_parser.simplify_pattern_clauses.call(null,pattern)),null,null,null));
} else {
return null;
}
});
/**
 * Convert a parsed tree of pull pattern records into a `PullSpec` instance,
 * a record type containing two keys:
 * 
 * * `:wildcard?` - a boolean indicating if the pattern contains a wildcard.
 * * `:attrs` - a map of attribute specifications.
 * 
 * The attribute specification map consists of keys which will become the keys
 * in the result map, and values which are themselves maps describing the
 * attribute:
 * 
 * * `:attr`       (required) - The attr name to pull; for reverse attributes
 *                           this will be the normalized attribute name.
 * * `:limit`      (optional) - If present, specifies a custom limit for this
 *                           attribute; Either `nil`, indicating no limit,
 *                           or a positive integer.
 * * `:default`    (optional) - If present, specifies a default value for this
 *                           attribute
 * * `:recursion`  (optional) - If present, specifies a recursion limit for this
 *                           attribute; Either `nil`, indicating no limit, or
 *                           a positive integer.
 * * `:subpattern` (optional) - If present, specifies a sub `PullSpec` instance
 *                           to be applied to entities matched by this
 *                           attribute.
 */
datascript.pull_parser.pattern__GT_spec = (function datascript$pull_parser$pattern__GT_spec(pattern){
return cljs.core.nth.call(null,datascript.pull_parser._as_spec.call(null,pattern),(1));
});
/**
 * Parse EDN pull `pattern` specification (see `parse-pattern`), and
 * convert the resulting tree into a `PullSpec` instance (see `pattern->spec`).
 * Throws an error if the supplied `pattern` cannot be parsed.
 */
datascript.pull_parser.parse_pull = (function datascript$pull_parser$parse_pull(pattern){
var or__30727__auto__ = (function (){var G__36372 = pattern;
var G__36372__$1 = (((G__36372 == null))?null:datascript.pull_parser.parse_pattern.call(null,G__36372));
if((G__36372__$1 == null)){
return null;
} else {
return datascript.pull_parser.pattern__GT_spec.call(null,G__36372__$1);
}
})();
if(cljs.core.truth_(or__30727__auto__)){
return or__30727__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse pull pattern, expected: [attr-spec+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),pattern], null));
}
});

//# sourceMappingURL=pull_parser.js.map?rel=1513003766333
