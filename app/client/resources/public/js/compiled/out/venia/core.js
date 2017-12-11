// Compiled by ClojureScript 1.9.908 {}
goog.provide('venia.core');
goog.require('cljs.core');
goog.require('venia.spec');
goog.require('clojure.string');

/**
 * Protocol responsible for query arguments' formatting to string.
 *   Has separate implementations for general data types in cljs and clj.
 * @interface
 */
venia.core.ArgumentFormatter = function(){};

venia.core.arg__GT_str = (function venia$core$arg__GT_str(arg){
if((!((arg == null))) && (!((arg.venia$core$ArgumentFormatter$arg__GT_str$arity$1 == null)))){
return arg.venia$core$ArgumentFormatter$arg__GT_str$arity$1(arg);
} else {
var x__43212__auto__ = (((arg == null))?null:arg);
var m__43213__auto__ = (venia.core.arg__GT_str[goog.typeOf(x__43212__auto__)]);
if(!((m__43213__auto__ == null))){
return m__43213__auto__.call(null,arg);
} else {
var m__43213__auto____$1 = (venia.core.arg__GT_str["_"]);
if(!((m__43213__auto____$1 == null))){
return m__43213__auto____$1.call(null,arg);
} else {
throw cljs.core.missing_protocol.call(null,"ArgumentFormatter.arg->str",arg);
}
}
}
});

/**
 * Given a map of query arguments, formats them and concatenates to string.
 * 
 *   E.g. (arguments->str {:id 1 :type "human"}) => id:1,type:"human"
 */
venia.core.arguments__GT_str = (function venia$core$arguments__GT_str(args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.interpose.call(null,",",(function (){var iter__43503__auto__ = (function venia$core$arguments__GT_str_$_iter__51914(s__51915){
return (new cljs.core.LazySeq(null,(function (){
var s__51915__$1 = s__51915;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__51915__$1);
if(temp__5278__auto__){
var s__51915__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51915__$2)){
var c__43501__auto__ = cljs.core.chunk_first.call(null,s__51915__$2);
var size__43502__auto__ = cljs.core.count.call(null,c__43501__auto__);
var b__51917 = cljs.core.chunk_buffer.call(null,size__43502__auto__);
if((function (){var i__51916 = (0);
while(true){
if((i__51916 < size__43502__auto__)){
var vec__51918 = cljs.core._nth.call(null,c__43501__auto__,i__51916);
var k = cljs.core.nth.call(null,vec__51918,(0),null);
var v = cljs.core.nth.call(null,vec__51918,(1),null);
cljs.core.chunk_append.call(null,b__51917,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),":",venia.core.arg__GT_str.call(null,v)], null));

var G__51924 = (i__51916 + (1));
i__51916 = G__51924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51917),venia$core$arguments__GT_str_$_iter__51914.call(null,cljs.core.chunk_rest.call(null,s__51915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51917),null);
}
} else {
var vec__51921 = cljs.core.first.call(null,s__51915__$2);
var k = cljs.core.nth.call(null,vec__51921,(0),null);
var v = cljs.core.nth.call(null,vec__51921,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),":",venia.core.arg__GT_str.call(null,v)], null),venia$core$arguments__GT_str_$_iter__51914.call(null,cljs.core.rest.call(null,s__51915__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43503__auto__.call(null,args);
})())));
});
/**
 * Given something that is sequential format it to be like a JSON array.
 */
venia.core.sequential__GT_str = (function venia$core$sequential__GT_str(arg){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,venia.core.arg__GT_str,arg)))),"]"].join('');
});
goog.object.set(venia.core.ArgumentFormatter,"null",true);

goog.object.set(venia.core.arg__GT_str,"null",(function (arg){
return "null";
}));

cljs.core.IndexedSeq.prototype.venia$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.venia$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return venia.core.sequential__GT_str.call(null,arg__$1);
});

cljs.core.LazySeq.prototype.venia$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.venia$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return venia.core.sequential__GT_str.call(null,arg__$1);
});

goog.object.set(venia.core.ArgumentFormatter,"boolean",true);

goog.object.set(venia.core.arg__GT_str,"boolean",(function (arg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');
}));

goog.object.set(venia.core.ArgumentFormatter,"object",true);

goog.object.set(venia.core.arg__GT_str,"object",(function (arg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');
}));

goog.object.set(venia.core.ArgumentFormatter,"number",true);

goog.object.set(venia.core.arg__GT_str,"number",(function (arg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('');
}));

cljs.core.PersistentHashMap.prototype.venia$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.venia$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,arg__$1)),"}"].join('');
});

cljs.core.PersistentVector.prototype.venia$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.venia$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return venia.core.sequential__GT_str.call(null,arg__$1);
});

goog.object.set(venia.core.ArgumentFormatter,"string",true);

goog.object.set(venia.core.arg__GT_str,"string",(function (arg){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),"\""].join('');
}));

cljs.core.Keyword.prototype.venia$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.venia$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return cljs.core.name.call(null,arg__$1);
});

cljs.core.PersistentArrayMap.prototype.venia$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.venia$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,arg__$1)),"}"].join('');
});

cljs.core.List.prototype.venia$core$ArgumentFormatter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.venia$core$ArgumentFormatter$arg__GT_str$arity$1 = (function (arg){
var arg__$1 = this;
return venia.core.sequential__GT_str.call(null,arg__$1);
});
/**
 * Converts namespaced meta field keyword to graphql format, e.g :meta/typename -> __typename
 */
venia.core.meta_field__GT_str = (function venia$core$meta_field__GT_str(meta_field){
return ["__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,meta_field))].join('');
});
/**
 * Given a spec conformed vector of query fields (and possibly nested fields),
 *   concatenates them to string, keeping nested structures intact.
 */
venia.core.fields__GT_str = (function venia$core$fields__GT_str(fields){
if((fields instanceof cljs.core.Keyword)){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fields))].join('');
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",(function (){var iter__43503__auto__ = (function venia$core$fields__GT_str_$_iter__51927(s__51928){
return (new cljs.core.LazySeq(null,(function (){
var s__51928__$1 = s__51928;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__51928__$1);
if(temp__5278__auto__){
var s__51928__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51928__$2)){
var c__43501__auto__ = cljs.core.chunk_first.call(null,s__51928__$2);
var size__43502__auto__ = cljs.core.count.call(null,c__43501__auto__);
var b__51930 = cljs.core.chunk_buffer.call(null,size__43502__auto__);
if((function (){var i__51929 = (0);
while(true){
if((i__51929 < size__43502__auto__)){
var vec__51931 = cljs.core._nth.call(null,c__43501__auto__,i__51929);
var type = cljs.core.nth.call(null,vec__51931,(0),null);
var value = cljs.core.nth.call(null,vec__51931,(1),null);
cljs.core.chunk_append.call(null,b__51930,(function (){var pred__51934 = cljs.core._EQ_;
var expr__51935 = type;
if(cljs.core.truth_(pred__51934.call(null,new cljs.core.Keyword("venia","meta-field","venia/meta-field",-1793865797),expr__51935))){
return venia.core.meta_field__GT_str.call(null,value);
} else {
if(cljs.core.truth_(pred__51934.call(null,new cljs.core.Keyword("venia","field","venia/field",-1329071615),expr__51935))){
return cljs.core.name.call(null,value);
} else {
if(cljs.core.truth_(pred__51934.call(null,new cljs.core.Keyword("venia","field-with-args","venia/field-with-args",1998851049),expr__51935))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("venia","field","venia/field",-1329071615).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null))].join('');
} else {
if(cljs.core.truth_(pred__51934.call(null,new cljs.core.Keyword("venia","nested-field","venia/nested-field",1182809288),expr__51935))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("venia","nested-field-root","venia/nested-field-root",678067234).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null)),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.fields__GT_str.call(null,new cljs.core.Keyword("venia","nested-field-children","venia/nested-field-children",1626003623).cljs$core$IFn$_invoke$arity$1(value))),"}"].join('');
} else {
if(cljs.core.truth_(pred__51934.call(null,new cljs.core.Keyword("venia","nested-field-arg-only","venia/nested-field-arg-only",-966055156),expr__51935))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("venia","nested-field-root","venia/nested-field-root",678067234).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''))].join('');
} else {
if(cljs.core.truth_(pred__51934.call(null,new cljs.core.Keyword("venia","fragments","venia/fragments",1173933694),expr__51935))){
return clojure.string.join.call(null," ",cljs.core.map.call(null,((function (i__51929,pred__51934,expr__51935,vec__51931,type,value,c__43501__auto__,size__43502__auto__,b__51930,s__51928__$2,temp__5278__auto__){
return (function (p1__51925_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__51925_SHARP_))].join('');
});})(i__51929,pred__51934,expr__51935,vec__51931,type,value,c__43501__auto__,size__43502__auto__,b__51930,s__51928__$2,temp__5278__auto__))
,value));
} else {
if(cljs.core.truth_(pred__51934.call(null,new cljs.core.Keyword("venia","nested-field-with-fragments","venia/nested-field-with-fragments",16828579),expr__51935))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("venia","nested-field-root","venia/nested-field-root",678067234).cljs$core$IFn$_invoke$arity$1(value))),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,((function (i__51929,pred__51934,expr__51935,vec__51931,type,value,c__43501__auto__,size__43502__auto__,b__51930,s__51928__$2,temp__5278__auto__){
return (function (p1__51926_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__51926_SHARP_))].join('');
});})(i__51929,pred__51934,expr__51935,vec__51931,type,value,c__43501__auto__,size__43502__auto__,b__51930,s__51928__$2,temp__5278__auto__))
,new cljs.core.Keyword("venia","fragments","venia/fragments",1173933694).cljs$core$IFn$_invoke$arity$1(value)))),"}"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51935)].join('')));
}
}
}
}
}
}
}
})());

var G__51943 = (i__51929 + (1));
i__51929 = G__51943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51930),venia$core$fields__GT_str_$_iter__51927.call(null,cljs.core.chunk_rest.call(null,s__51928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51930),null);
}
} else {
var vec__51937 = cljs.core.first.call(null,s__51928__$2);
var type = cljs.core.nth.call(null,vec__51937,(0),null);
var value = cljs.core.nth.call(null,vec__51937,(1),null);
return cljs.core.cons.call(null,(function (){var pred__51940 = cljs.core._EQ_;
var expr__51941 = type;
if(cljs.core.truth_(pred__51940.call(null,new cljs.core.Keyword("venia","meta-field","venia/meta-field",-1793865797),expr__51941))){
return venia.core.meta_field__GT_str.call(null,value);
} else {
if(cljs.core.truth_(pred__51940.call(null,new cljs.core.Keyword("venia","field","venia/field",-1329071615),expr__51941))){
return cljs.core.name.call(null,value);
} else {
if(cljs.core.truth_(pred__51940.call(null,new cljs.core.Keyword("venia","field-with-args","venia/field-with-args",1998851049),expr__51941))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("venia","field","venia/field",-1329071615).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null))].join('');
} else {
if(cljs.core.truth_(pred__51940.call(null,new cljs.core.Keyword("venia","nested-field","venia/nested-field",1182809288),expr__51941))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("venia","nested-field-root","venia/nested-field-root",678067234).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''):null)),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.fields__GT_str.call(null,new cljs.core.Keyword("venia","nested-field-children","venia/nested-field-children",1626003623).cljs$core$IFn$_invoke$arity$1(value))),"}"].join('');
} else {
if(cljs.core.truth_(pred__51940.call(null,new cljs.core.Keyword("venia","nested-field-arg-only","venia/nested-field-arg-only",-966055156),expr__51941))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("venia","nested-field-root","venia/nested-field-root",678067234).cljs$core$IFn$_invoke$arity$1(value))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(value))),")"].join(''))].join('');
} else {
if(cljs.core.truth_(pred__51940.call(null,new cljs.core.Keyword("venia","fragments","venia/fragments",1173933694),expr__51941))){
return clojure.string.join.call(null," ",cljs.core.map.call(null,((function (pred__51940,expr__51941,vec__51937,type,value,s__51928__$2,temp__5278__auto__){
return (function (p1__51925_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__51925_SHARP_))].join('');
});})(pred__51940,expr__51941,vec__51937,type,value,s__51928__$2,temp__5278__auto__))
,value));
} else {
if(cljs.core.truth_(pred__51940.call(null,new cljs.core.Keyword("venia","nested-field-with-fragments","venia/nested-field-with-fragments",16828579),expr__51941))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("venia","nested-field-root","venia/nested-field-root",678067234).cljs$core$IFn$_invoke$arity$1(value))),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,((function (pred__51940,expr__51941,vec__51937,type,value,s__51928__$2,temp__5278__auto__){
return (function (p1__51926_SHARP_){
return ["...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__51926_SHARP_))].join('');
});})(pred__51940,expr__51941,vec__51937,type,value,s__51928__$2,temp__5278__auto__))
,new cljs.core.Keyword("venia","fragments","venia/fragments",1173933694).cljs$core$IFn$_invoke$arity$1(value)))),"}"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__51941)].join('')));
}
}
}
}
}
}
}
})(),venia$core$fields__GT_str_$_iter__51927.call(null,cljs.core.rest.call(null,s__51928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43503__auto__.call(null,fields);
})()));
}
});
/**
 * Given a vector of variable maps, formats them and concatenates to string.
 * 
 *   E.g. (variables->str [{:variable/name "id" :variable/type :Int}]) => "$id: Int"
 */
venia.core.variables__GT_str = (function venia$core$variables__GT_str(variables){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",(function (){var iter__43503__auto__ = (function venia$core$variables__GT_str_$_iter__51944(s__51945){
return (new cljs.core.LazySeq(null,(function (){
var s__51945__$1 = s__51945;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__51945__$1);
if(temp__5278__auto__){
var s__51945__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51945__$2)){
var c__43501__auto__ = cljs.core.chunk_first.call(null,s__51945__$2);
var size__43502__auto__ = cljs.core.count.call(null,c__43501__auto__);
var b__51947 = cljs.core.chunk_buffer.call(null,size__43502__auto__);
if((function (){var i__51946 = (0);
while(true){
if((i__51946 < size__43502__auto__)){
var map__51948 = cljs.core._nth.call(null,c__43501__auto__,i__51946);
var map__51948__$1 = ((((!((map__51948 == null)))?((((map__51948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51948):map__51948);
var var_name = cljs.core.get.call(null,map__51948__$1,new cljs.core.Keyword("variable","name","variable/name",811639477));
var var_type = cljs.core.get.call(null,map__51948__$1,new cljs.core.Keyword("variable","type","variable/type",-1953194216));
var var_default = cljs.core.get.call(null,map__51948__$1,new cljs.core.Keyword("variable","default","variable/default",-1073804668));
cljs.core.chunk_append.call(null,b__51947,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,var_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(var_default)?["=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arg__GT_str.call(null,var_default))].join(''):null))].join(''));

var G__51952 = (i__51946 + (1));
i__51946 = G__51952;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51947),venia$core$variables__GT_str_$_iter__51944.call(null,cljs.core.chunk_rest.call(null,s__51945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51947),null);
}
} else {
var map__51950 = cljs.core.first.call(null,s__51945__$2);
var map__51950__$1 = ((((!((map__51950 == null)))?((((map__51950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51950):map__51950);
var var_name = cljs.core.get.call(null,map__51950__$1,new cljs.core.Keyword("variable","name","variable/name",811639477));
var var_type = cljs.core.get.call(null,map__51950__$1,new cljs.core.Keyword("variable","type","variable/type",-1953194216));
var var_default = cljs.core.get.call(null,map__51950__$1,new cljs.core.Keyword("variable","default","variable/default",-1073804668));
return cljs.core.cons.call(null,["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,var_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(var_default)?["=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arg__GT_str.call(null,var_default))].join(''):null))].join(''),venia$core$variables__GT_str_$_iter__51944.call(null,cljs.core.rest.call(null,s__51945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__43503__auto__.call(null,variables);
})()));
});
/**
 * Given a fragment map, formats it and concatenates to string,
 */
venia.core.fragment__GT_str = (function venia$core$fragment__GT_str(fragment){
var fields = ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.fields__GT_str.call(null,new cljs.core.Keyword("fragment","fields","fragment/fields",-429235046).cljs$core$IFn$_invoke$arity$1(fragment))),"}"].join('');
return ["fragment ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("fragment","name","fragment/name",1216787065).cljs$core$IFn$_invoke$arity$1(fragment)))," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("fragment","type","fragment/type",-1548562724).cljs$core$IFn$_invoke$arity$1(fragment))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fields)].join('');
});
/**
 * Include fields if fields is not empty or is a keyword.
 * fields could be nil or empty for operations that return a scalar.
 */
venia.core.include_fields_QMARK_ = (function venia$core$include_fields_QMARK_(fields){
return ((fields instanceof cljs.core.Keyword)) || (!(cljs.core.empty_QMARK_.call(null,fields)));
});
if(typeof venia.core.__GT_query_str !== 'undefined'){
} else {
venia.core.__GT_query_str = (function (){var method_table__43840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__43841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__43842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__43843__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__43844__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"venia.core","->query-str"),((function (method_table__43840__auto__,prefer_table__43841__auto__,method_cache__43842__auto__,cached_hierarchy__43843__auto__,hierarchy__43844__auto__){
return (function (query){
if(cljs.core.vector_QMARK_.call(null,query)){
return cljs.core.first.call(null,query);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("venia","query","venia/query",-1310420281).cljs$core$IFn$_invoke$arity$1(query))){
return new cljs.core.Keyword("venia","query","venia/query",-1310420281);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("venia","query-with-data","venia/query-with-data",918496492).cljs$core$IFn$_invoke$arity$1(query))){
return new cljs.core.Keyword("venia","query-with-data","venia/query-with-data",918496492);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
});})(method_table__43840__auto__,prefer_table__43841__auto__,method_cache__43842__auto__,cached_hierarchy__43843__auto__,hierarchy__43844__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__43844__auto__,method_table__43840__auto__,prefer_table__43841__auto__,method_cache__43842__auto__,cached_hierarchy__43843__auto__));
})();
}
cljs.core._add_method.call(null,venia.core.__GT_query_str,new cljs.core.Keyword("venia","query-vector","venia/query-vector",924706978),(function (p__51953){
var vec__51954 = p__51953;
var _ = cljs.core.nth.call(null,vec__51954,(0),null);
var query = cljs.core.nth.call(null,vec__51954,(1),null);

return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,venia.core.__GT_query_str,query)))),"}"].join('');
}));
cljs.core._add_method.call(null,venia.core.__GT_query_str,new cljs.core.Keyword("venia","query-def","venia/query-def",901336655),(function (p__51957){
var vec__51958 = p__51957;
var _ = cljs.core.nth.call(null,vec__51958,(0),null);
var query = cljs.core.nth.call(null,vec__51958,(1),null);

var operation = new cljs.core.Keyword("venia","operation","venia/operation",-887121583).cljs$core$IFn$_invoke$arity$1(query);
var operation_with_name = (cljs.core.truth_(operation)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("operation","type","operation/type",-518350333).cljs$core$IFn$_invoke$arity$1(operation)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("operation","name","operation/name",185509282).cljs$core$IFn$_invoke$arity$1(operation))].join(''):null);
var variables = new cljs.core.Keyword("venia","variables","venia/variables",1432844485).cljs$core$IFn$_invoke$arity$1(query);
var variables_str = (cljs.core.truth_(variables)?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.variables__GT_str.call(null,variables)),")"].join(''):null);
var fragments = new cljs.core.Keyword("venia","fragments","venia/fragments",1173933694).cljs$core$IFn$_invoke$arity$1(query);
var fragments_str = (cljs.core.truth_(fragments)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,venia.core.fragment__GT_str,fragments))))].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_with_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variables_str),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,venia.core.__GT_query_str,new cljs.core.Keyword("venia","queries","venia/queries",742794546).cljs$core$IFn$_invoke$arity$1(query))))),"}",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragments_str)].join('');
}));
cljs.core._add_method.call(null,venia.core.__GT_query_str,new cljs.core.Keyword("venia","query","venia/query",-1310420281),(function (query){

var query_def = new cljs.core.Keyword("venia","query","venia/query",-1310420281).cljs$core$IFn$_invoke$arity$1(query);
var alias = (cljs.core.truth_(new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))),":"].join(''):null);
var query_str = cljs.core.name.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query_def));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query_def))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query_def))),")"].join(''):null);
var fields = ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.fields__GT_str.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query_def))),"}"].join('');
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fields)].join('');
}));
cljs.core._add_method.call(null,venia.core.__GT_query_str,new cljs.core.Keyword("venia","queries","venia/queries",742794546),(function (p__51961){
var vec__51962 = p__51961;
var _ = cljs.core.nth.call(null,vec__51962,(0),null);
var query = cljs.core.nth.call(null,vec__51962,(1),null);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,venia.core.__GT_query_str,query)))),"}"].join('');
}));
cljs.core._add_method.call(null,venia.core.__GT_query_str,new cljs.core.Keyword("venia","query-with-data","venia/query-with-data",918496492),(function (p__51965){
var vec__51966 = p__51965;
var _ = cljs.core.nth.call(null,vec__51966,(0),null);
var query = cljs.core.nth.call(null,vec__51966,(1),null);
var query_str = venia.core.__GT_query_str.call(null,new cljs.core.Keyword("query","data","query/data",131250295).cljs$core$IFn$_invoke$arity$1(query));
var alias = (cljs.core.truth_(new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword("query","alias","query/alias",-2135243430).cljs$core$IFn$_invoke$arity$1(query))),":"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str)].join('');
}));
cljs.core._add_method.call(null,venia.core.__GT_query_str,new cljs.core.Keyword("query","data","query/data",131250295),(function (p__51969){
var vec__51970 = p__51969;
var _ = cljs.core.nth.call(null,vec__51970,(0),null);
var query = cljs.core.nth.call(null,vec__51970,(1),null);

var query_str = cljs.core.name.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))),")"].join(''):null);
var fields = (cljs.core.truth_(venia.core.include_fields_QMARK_.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query)))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.fields__GT_str.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query))),"}"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fields)].join('');
}));
cljs.core._add_method.call(null,venia.core.__GT_query_str,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query){

var query_str = cljs.core.name.call(null,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
var args = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.arguments__GT_str.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(query))),")"].join(''):null);
var fields = (cljs.core.truth_(venia.core.include_fields_QMARK_.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query)))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(venia.core.fields__GT_str.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(query))),"}"].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fields)].join('');
}));
/**
 * Formats clojure data structure to valid graphql query string.
 */
venia.core.graphql_query = (function venia$core$graphql_query(data){
return venia.core.__GT_query_str.call(null,venia.spec.query__GT_spec.call(null,data));
});

//# sourceMappingURL=core.js.map?rel=1509630567141
