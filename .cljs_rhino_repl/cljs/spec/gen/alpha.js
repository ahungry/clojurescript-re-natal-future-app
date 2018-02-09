// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__35622__auto__,writer__35623__auto__,opt__35624__auto__){
return cljs.core._write.call(null,writer__35623__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39529 = arguments.length;
var i__36231__auto___39530 = (0);
while(true){
if((i__36231__auto___39530 < len__36230__auto___39529)){
args__36237__auto__.push((arguments[i__36231__auto___39530]));

var G__39531 = (i__36231__auto___39530 + (1));
i__36231__auto___39530 = G__39531;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq39528){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39528));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39533 = arguments.length;
var i__36231__auto___39534 = (0);
while(true){
if((i__36231__auto___39534 < len__36230__auto___39533)){
args__36237__auto__.push((arguments[i__36231__auto___39534]));

var G__39535 = (i__36231__auto___39534 + (1));
i__36231__auto___39534 = G__39535;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq39532){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39532));
});

var g_QMARK__39536 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_39537 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__39536){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__39536))
,null));
var mkg_39538 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__39536,g_39537){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__39536,g_39537))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__39536,g_39537,mkg_39538){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__39536).call(null,x);
});})(g_QMARK__39536,g_39537,mkg_39538))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__39536,g_39537,mkg_39538){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_39538).call(null,gfn);
});})(g_QMARK__39536,g_39537,mkg_39538))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__39536,g_39537,mkg_39538){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_39537).call(null,generator);
});})(g_QMARK__39536,g_39537,mkg_39538))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__36333__auto___39558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__36333__auto___39558){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39559 = arguments.length;
var i__36231__auto___39560 = (0);
while(true){
if((i__36231__auto___39560 < len__36230__auto___39559)){
args__36237__auto__.push((arguments[i__36231__auto___39560]));

var G__39561 = (i__36231__auto___39560 + (1));
i__36231__auto___39560 = G__39561;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39558))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39558),args);
});})(g__36333__auto___39558))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__36333__auto___39558){
return (function (seq39539){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39539));
});})(g__36333__auto___39558))
;


var g__36333__auto___39562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__36333__auto___39562){
return (function cljs$spec$gen$alpha$list(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39563 = arguments.length;
var i__36231__auto___39564 = (0);
while(true){
if((i__36231__auto___39564 < len__36230__auto___39563)){
args__36237__auto__.push((arguments[i__36231__auto___39564]));

var G__39565 = (i__36231__auto___39564 + (1));
i__36231__auto___39564 = G__39565;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39562))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39562),args);
});})(g__36333__auto___39562))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__36333__auto___39562){
return (function (seq39540){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39540));
});})(g__36333__auto___39562))
;


var g__36333__auto___39566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__36333__auto___39566){
return (function cljs$spec$gen$alpha$map(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39567 = arguments.length;
var i__36231__auto___39568 = (0);
while(true){
if((i__36231__auto___39568 < len__36230__auto___39567)){
args__36237__auto__.push((arguments[i__36231__auto___39568]));

var G__39569 = (i__36231__auto___39568 + (1));
i__36231__auto___39568 = G__39569;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39566))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39566),args);
});})(g__36333__auto___39566))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__36333__auto___39566){
return (function (seq39541){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39541));
});})(g__36333__auto___39566))
;


var g__36333__auto___39570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__36333__auto___39570){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39571 = arguments.length;
var i__36231__auto___39572 = (0);
while(true){
if((i__36231__auto___39572 < len__36230__auto___39571)){
args__36237__auto__.push((arguments[i__36231__auto___39572]));

var G__39573 = (i__36231__auto___39572 + (1));
i__36231__auto___39572 = G__39573;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39570))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39570),args);
});})(g__36333__auto___39570))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__36333__auto___39570){
return (function (seq39542){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39542));
});})(g__36333__auto___39570))
;


var g__36333__auto___39574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__36333__auto___39574){
return (function cljs$spec$gen$alpha$set(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39575 = arguments.length;
var i__36231__auto___39576 = (0);
while(true){
if((i__36231__auto___39576 < len__36230__auto___39575)){
args__36237__auto__.push((arguments[i__36231__auto___39576]));

var G__39577 = (i__36231__auto___39576 + (1));
i__36231__auto___39576 = G__39577;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39574))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39574),args);
});})(g__36333__auto___39574))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__36333__auto___39574){
return (function (seq39543){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39543));
});})(g__36333__auto___39574))
;


var g__36333__auto___39578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__36333__auto___39578){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39579 = arguments.length;
var i__36231__auto___39580 = (0);
while(true){
if((i__36231__auto___39580 < len__36230__auto___39579)){
args__36237__auto__.push((arguments[i__36231__auto___39580]));

var G__39581 = (i__36231__auto___39580 + (1));
i__36231__auto___39580 = G__39581;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39578))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39578),args);
});})(g__36333__auto___39578))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__36333__auto___39578){
return (function (seq39544){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39544));
});})(g__36333__auto___39578))
;


var g__36333__auto___39582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__36333__auto___39582){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39583 = arguments.length;
var i__36231__auto___39584 = (0);
while(true){
if((i__36231__auto___39584 < len__36230__auto___39583)){
args__36237__auto__.push((arguments[i__36231__auto___39584]));

var G__39585 = (i__36231__auto___39584 + (1));
i__36231__auto___39584 = G__39585;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39582))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39582),args);
});})(g__36333__auto___39582))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__36333__auto___39582){
return (function (seq39545){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39545));
});})(g__36333__auto___39582))
;


var g__36333__auto___39586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__36333__auto___39586){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39587 = arguments.length;
var i__36231__auto___39588 = (0);
while(true){
if((i__36231__auto___39588 < len__36230__auto___39587)){
args__36237__auto__.push((arguments[i__36231__auto___39588]));

var G__39589 = (i__36231__auto___39588 + (1));
i__36231__auto___39588 = G__39589;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39586))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39586){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39586),args);
});})(g__36333__auto___39586))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__36333__auto___39586){
return (function (seq39546){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39546));
});})(g__36333__auto___39586))
;


var g__36333__auto___39590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__36333__auto___39590){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39591 = arguments.length;
var i__36231__auto___39592 = (0);
while(true){
if((i__36231__auto___39592 < len__36230__auto___39591)){
args__36237__auto__.push((arguments[i__36231__auto___39592]));

var G__39593 = (i__36231__auto___39592 + (1));
i__36231__auto___39592 = G__39593;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39590))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39590){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39590),args);
});})(g__36333__auto___39590))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__36333__auto___39590){
return (function (seq39547){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39547));
});})(g__36333__auto___39590))
;


var g__36333__auto___39594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__36333__auto___39594){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39595 = arguments.length;
var i__36231__auto___39596 = (0);
while(true){
if((i__36231__auto___39596 < len__36230__auto___39595)){
args__36237__auto__.push((arguments[i__36231__auto___39596]));

var G__39597 = (i__36231__auto___39596 + (1));
i__36231__auto___39596 = G__39597;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39594))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39594){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39594),args);
});})(g__36333__auto___39594))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__36333__auto___39594){
return (function (seq39548){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39548));
});})(g__36333__auto___39594))
;


var g__36333__auto___39598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__36333__auto___39598){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39599 = arguments.length;
var i__36231__auto___39600 = (0);
while(true){
if((i__36231__auto___39600 < len__36230__auto___39599)){
args__36237__auto__.push((arguments[i__36231__auto___39600]));

var G__39601 = (i__36231__auto___39600 + (1));
i__36231__auto___39600 = G__39601;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39598))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39598){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39598),args);
});})(g__36333__auto___39598))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__36333__auto___39598){
return (function (seq39549){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39549));
});})(g__36333__auto___39598))
;


var g__36333__auto___39602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__36333__auto___39602){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39603 = arguments.length;
var i__36231__auto___39604 = (0);
while(true){
if((i__36231__auto___39604 < len__36230__auto___39603)){
args__36237__auto__.push((arguments[i__36231__auto___39604]));

var G__39605 = (i__36231__auto___39604 + (1));
i__36231__auto___39604 = G__39605;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39602))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39602){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39602),args);
});})(g__36333__auto___39602))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__36333__auto___39602){
return (function (seq39550){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39550));
});})(g__36333__auto___39602))
;


var g__36333__auto___39606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__36333__auto___39606){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39607 = arguments.length;
var i__36231__auto___39608 = (0);
while(true){
if((i__36231__auto___39608 < len__36230__auto___39607)){
args__36237__auto__.push((arguments[i__36231__auto___39608]));

var G__39609 = (i__36231__auto___39608 + (1));
i__36231__auto___39608 = G__39609;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39606))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39606){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39606),args);
});})(g__36333__auto___39606))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__36333__auto___39606){
return (function (seq39551){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39551));
});})(g__36333__auto___39606))
;


var g__36333__auto___39610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__36333__auto___39610){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39611 = arguments.length;
var i__36231__auto___39612 = (0);
while(true){
if((i__36231__auto___39612 < len__36230__auto___39611)){
args__36237__auto__.push((arguments[i__36231__auto___39612]));

var G__39613 = (i__36231__auto___39612 + (1));
i__36231__auto___39612 = G__39613;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39610))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39610){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39610),args);
});})(g__36333__auto___39610))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__36333__auto___39610){
return (function (seq39552){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39552));
});})(g__36333__auto___39610))
;


var g__36333__auto___39614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__36333__auto___39614){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39615 = arguments.length;
var i__36231__auto___39616 = (0);
while(true){
if((i__36231__auto___39616 < len__36230__auto___39615)){
args__36237__auto__.push((arguments[i__36231__auto___39616]));

var G__39617 = (i__36231__auto___39616 + (1));
i__36231__auto___39616 = G__39617;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39614))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39614){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39614),args);
});})(g__36333__auto___39614))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__36333__auto___39614){
return (function (seq39553){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39553));
});})(g__36333__auto___39614))
;


var g__36333__auto___39618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__36333__auto___39618){
return (function cljs$spec$gen$alpha$return(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39619 = arguments.length;
var i__36231__auto___39620 = (0);
while(true){
if((i__36231__auto___39620 < len__36230__auto___39619)){
args__36237__auto__.push((arguments[i__36231__auto___39620]));

var G__39621 = (i__36231__auto___39620 + (1));
i__36231__auto___39620 = G__39621;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39618))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39618){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39618),args);
});})(g__36333__auto___39618))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__36333__auto___39618){
return (function (seq39554){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39554));
});})(g__36333__auto___39618))
;


var g__36333__auto___39622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__36333__auto___39622){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39623 = arguments.length;
var i__36231__auto___39624 = (0);
while(true){
if((i__36231__auto___39624 < len__36230__auto___39623)){
args__36237__auto__.push((arguments[i__36231__auto___39624]));

var G__39625 = (i__36231__auto___39624 + (1));
i__36231__auto___39624 = G__39625;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39622))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39622){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39622),args);
});})(g__36333__auto___39622))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__36333__auto___39622){
return (function (seq39555){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39555));
});})(g__36333__auto___39622))
;


var g__36333__auto___39626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__36333__auto___39626){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39627 = arguments.length;
var i__36231__auto___39628 = (0);
while(true){
if((i__36231__auto___39628 < len__36230__auto___39627)){
args__36237__auto__.push((arguments[i__36231__auto___39628]));

var G__39629 = (i__36231__auto___39628 + (1));
i__36231__auto___39628 = G__39629;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39626))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39626){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39626),args);
});})(g__36333__auto___39626))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__36333__auto___39626){
return (function (seq39556){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39556));
});})(g__36333__auto___39626))
;


var g__36333__auto___39630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__36333__auto___39630){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39631 = arguments.length;
var i__36231__auto___39632 = (0);
while(true){
if((i__36231__auto___39632 < len__36230__auto___39631)){
args__36237__auto__.push((arguments[i__36231__auto___39632]));

var G__39633 = (i__36231__auto___39632 + (1));
i__36231__auto___39632 = G__39633;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36333__auto___39630))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36333__auto___39630){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36333__auto___39630),args);
});})(g__36333__auto___39630))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__36333__auto___39630){
return (function (seq39557){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39557));
});})(g__36333__auto___39630))
;

var g__36346__auto___39655 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__36346__auto___39655){
return (function cljs$spec$gen$alpha$any(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39656 = arguments.length;
var i__36231__auto___39657 = (0);
while(true){
if((i__36231__auto___39657 < len__36230__auto___39656)){
args__36237__auto__.push((arguments[i__36231__auto___39657]));

var G__39658 = (i__36231__auto___39657 + (1));
i__36231__auto___39657 = G__39658;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39655))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39655){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39655);
});})(g__36346__auto___39655))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__36346__auto___39655){
return (function (seq39634){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39634));
});})(g__36346__auto___39655))
;


var g__36346__auto___39659 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__36346__auto___39659){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39660 = arguments.length;
var i__36231__auto___39661 = (0);
while(true){
if((i__36231__auto___39661 < len__36230__auto___39660)){
args__36237__auto__.push((arguments[i__36231__auto___39661]));

var G__39662 = (i__36231__auto___39661 + (1));
i__36231__auto___39661 = G__39662;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39659))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39659){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39659);
});})(g__36346__auto___39659))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__36346__auto___39659){
return (function (seq39635){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39635));
});})(g__36346__auto___39659))
;


var g__36346__auto___39663 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__36346__auto___39663){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39664 = arguments.length;
var i__36231__auto___39665 = (0);
while(true){
if((i__36231__auto___39665 < len__36230__auto___39664)){
args__36237__auto__.push((arguments[i__36231__auto___39665]));

var G__39666 = (i__36231__auto___39665 + (1));
i__36231__auto___39665 = G__39666;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39663))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39663){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39663);
});})(g__36346__auto___39663))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__36346__auto___39663){
return (function (seq39636){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39636));
});})(g__36346__auto___39663))
;


var g__36346__auto___39667 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__36346__auto___39667){
return (function cljs$spec$gen$alpha$char(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39668 = arguments.length;
var i__36231__auto___39669 = (0);
while(true){
if((i__36231__auto___39669 < len__36230__auto___39668)){
args__36237__auto__.push((arguments[i__36231__auto___39669]));

var G__39670 = (i__36231__auto___39669 + (1));
i__36231__auto___39669 = G__39670;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39667))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39667){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39667);
});})(g__36346__auto___39667))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__36346__auto___39667){
return (function (seq39637){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39637));
});})(g__36346__auto___39667))
;


var g__36346__auto___39671 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__36346__auto___39671){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39672 = arguments.length;
var i__36231__auto___39673 = (0);
while(true){
if((i__36231__auto___39673 < len__36230__auto___39672)){
args__36237__auto__.push((arguments[i__36231__auto___39673]));

var G__39674 = (i__36231__auto___39673 + (1));
i__36231__auto___39673 = G__39674;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39671))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39671){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39671);
});})(g__36346__auto___39671))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__36346__auto___39671){
return (function (seq39638){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39638));
});})(g__36346__auto___39671))
;


var g__36346__auto___39675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__36346__auto___39675){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39676 = arguments.length;
var i__36231__auto___39677 = (0);
while(true){
if((i__36231__auto___39677 < len__36230__auto___39676)){
args__36237__auto__.push((arguments[i__36231__auto___39677]));

var G__39678 = (i__36231__auto___39677 + (1));
i__36231__auto___39677 = G__39678;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39675))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39675){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39675);
});})(g__36346__auto___39675))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__36346__auto___39675){
return (function (seq39639){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39639));
});})(g__36346__auto___39675))
;


var g__36346__auto___39679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__36346__auto___39679){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39680 = arguments.length;
var i__36231__auto___39681 = (0);
while(true){
if((i__36231__auto___39681 < len__36230__auto___39680)){
args__36237__auto__.push((arguments[i__36231__auto___39681]));

var G__39682 = (i__36231__auto___39681 + (1));
i__36231__auto___39681 = G__39682;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39679))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39679){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39679);
});})(g__36346__auto___39679))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__36346__auto___39679){
return (function (seq39640){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39640));
});})(g__36346__auto___39679))
;


var g__36346__auto___39683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__36346__auto___39683){
return (function cljs$spec$gen$alpha$double(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39684 = arguments.length;
var i__36231__auto___39685 = (0);
while(true){
if((i__36231__auto___39685 < len__36230__auto___39684)){
args__36237__auto__.push((arguments[i__36231__auto___39685]));

var G__39686 = (i__36231__auto___39685 + (1));
i__36231__auto___39685 = G__39686;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39683))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39683){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39683);
});})(g__36346__auto___39683))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__36346__auto___39683){
return (function (seq39641){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39641));
});})(g__36346__auto___39683))
;


var g__36346__auto___39687 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__36346__auto___39687){
return (function cljs$spec$gen$alpha$int(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39688 = arguments.length;
var i__36231__auto___39689 = (0);
while(true){
if((i__36231__auto___39689 < len__36230__auto___39688)){
args__36237__auto__.push((arguments[i__36231__auto___39689]));

var G__39690 = (i__36231__auto___39689 + (1));
i__36231__auto___39689 = G__39690;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39687))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39687){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39687);
});})(g__36346__auto___39687))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__36346__auto___39687){
return (function (seq39642){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39642));
});})(g__36346__auto___39687))
;


var g__36346__auto___39691 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__36346__auto___39691){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39692 = arguments.length;
var i__36231__auto___39693 = (0);
while(true){
if((i__36231__auto___39693 < len__36230__auto___39692)){
args__36237__auto__.push((arguments[i__36231__auto___39693]));

var G__39694 = (i__36231__auto___39693 + (1));
i__36231__auto___39693 = G__39694;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39691))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39691){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39691);
});})(g__36346__auto___39691))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__36346__auto___39691){
return (function (seq39643){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39643));
});})(g__36346__auto___39691))
;


var g__36346__auto___39695 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__36346__auto___39695){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39696 = arguments.length;
var i__36231__auto___39697 = (0);
while(true){
if((i__36231__auto___39697 < len__36230__auto___39696)){
args__36237__auto__.push((arguments[i__36231__auto___39697]));

var G__39698 = (i__36231__auto___39697 + (1));
i__36231__auto___39697 = G__39698;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39695))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39695){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39695);
});})(g__36346__auto___39695))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__36346__auto___39695){
return (function (seq39644){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39644));
});})(g__36346__auto___39695))
;


var g__36346__auto___39699 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__36346__auto___39699){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39700 = arguments.length;
var i__36231__auto___39701 = (0);
while(true){
if((i__36231__auto___39701 < len__36230__auto___39700)){
args__36237__auto__.push((arguments[i__36231__auto___39701]));

var G__39702 = (i__36231__auto___39701 + (1));
i__36231__auto___39701 = G__39702;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39699))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39699){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39699);
});})(g__36346__auto___39699))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__36346__auto___39699){
return (function (seq39645){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39645));
});})(g__36346__auto___39699))
;


var g__36346__auto___39703 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__36346__auto___39703){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39704 = arguments.length;
var i__36231__auto___39705 = (0);
while(true){
if((i__36231__auto___39705 < len__36230__auto___39704)){
args__36237__auto__.push((arguments[i__36231__auto___39705]));

var G__39706 = (i__36231__auto___39705 + (1));
i__36231__auto___39705 = G__39706;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39703))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39703){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39703);
});})(g__36346__auto___39703))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__36346__auto___39703){
return (function (seq39646){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39646));
});})(g__36346__auto___39703))
;


var g__36346__auto___39707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__36346__auto___39707){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39708 = arguments.length;
var i__36231__auto___39709 = (0);
while(true){
if((i__36231__auto___39709 < len__36230__auto___39708)){
args__36237__auto__.push((arguments[i__36231__auto___39709]));

var G__39710 = (i__36231__auto___39709 + (1));
i__36231__auto___39709 = G__39710;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39707))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39707){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39707);
});})(g__36346__auto___39707))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__36346__auto___39707){
return (function (seq39647){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39647));
});})(g__36346__auto___39707))
;


var g__36346__auto___39711 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__36346__auto___39711){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39712 = arguments.length;
var i__36231__auto___39713 = (0);
while(true){
if((i__36231__auto___39713 < len__36230__auto___39712)){
args__36237__auto__.push((arguments[i__36231__auto___39713]));

var G__39714 = (i__36231__auto___39713 + (1));
i__36231__auto___39713 = G__39714;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39711))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39711){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39711);
});})(g__36346__auto___39711))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__36346__auto___39711){
return (function (seq39648){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39648));
});})(g__36346__auto___39711))
;


var g__36346__auto___39715 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__36346__auto___39715){
return (function cljs$spec$gen$alpha$string(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39716 = arguments.length;
var i__36231__auto___39717 = (0);
while(true){
if((i__36231__auto___39717 < len__36230__auto___39716)){
args__36237__auto__.push((arguments[i__36231__auto___39717]));

var G__39718 = (i__36231__auto___39717 + (1));
i__36231__auto___39717 = G__39718;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39715))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39715){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39715);
});})(g__36346__auto___39715))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__36346__auto___39715){
return (function (seq39649){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39649));
});})(g__36346__auto___39715))
;


var g__36346__auto___39719 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__36346__auto___39719){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39720 = arguments.length;
var i__36231__auto___39721 = (0);
while(true){
if((i__36231__auto___39721 < len__36230__auto___39720)){
args__36237__auto__.push((arguments[i__36231__auto___39721]));

var G__39722 = (i__36231__auto___39721 + (1));
i__36231__auto___39721 = G__39722;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39719))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39719){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39719);
});})(g__36346__auto___39719))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__36346__auto___39719){
return (function (seq39650){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39650));
});})(g__36346__auto___39719))
;


var g__36346__auto___39723 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__36346__auto___39723){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39724 = arguments.length;
var i__36231__auto___39725 = (0);
while(true){
if((i__36231__auto___39725 < len__36230__auto___39724)){
args__36237__auto__.push((arguments[i__36231__auto___39725]));

var G__39726 = (i__36231__auto___39725 + (1));
i__36231__auto___39725 = G__39726;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39723))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39723){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39723);
});})(g__36346__auto___39723))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__36346__auto___39723){
return (function (seq39651){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39651));
});})(g__36346__auto___39723))
;


var g__36346__auto___39727 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__36346__auto___39727){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39728 = arguments.length;
var i__36231__auto___39729 = (0);
while(true){
if((i__36231__auto___39729 < len__36230__auto___39728)){
args__36237__auto__.push((arguments[i__36231__auto___39729]));

var G__39730 = (i__36231__auto___39729 + (1));
i__36231__auto___39729 = G__39730;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39727))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39727){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39727);
});})(g__36346__auto___39727))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__36346__auto___39727){
return (function (seq39652){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39652));
});})(g__36346__auto___39727))
;


var g__36346__auto___39731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__36346__auto___39731){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39732 = arguments.length;
var i__36231__auto___39733 = (0);
while(true){
if((i__36231__auto___39733 < len__36230__auto___39732)){
args__36237__auto__.push((arguments[i__36231__auto___39733]));

var G__39734 = (i__36231__auto___39733 + (1));
i__36231__auto___39733 = G__39734;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39731))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39731){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39731);
});})(g__36346__auto___39731))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__36346__auto___39731){
return (function (seq39653){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39653));
});})(g__36346__auto___39731))
;


var g__36346__auto___39735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__36346__auto___39735){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39736 = arguments.length;
var i__36231__auto___39737 = (0);
while(true){
if((i__36231__auto___39737 < len__36230__auto___39736)){
args__36237__auto__.push((arguments[i__36231__auto___39737]));

var G__39738 = (i__36231__auto___39737 + (1));
i__36231__auto___39737 = G__39738;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});})(g__36346__auto___39735))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36346__auto___39735){
return (function (args){
return cljs.core.deref.call(null,g__36346__auto___39735);
});})(g__36346__auto___39735))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__36346__auto___39735){
return (function (seq39654){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39654));
});})(g__36346__auto___39735))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__36237__auto__ = [];
var len__36230__auto___39741 = arguments.length;
var i__36231__auto___39742 = (0);
while(true){
if((i__36231__auto___39742 < len__36230__auto___39741)){
args__36237__auto__.push((arguments[i__36231__auto___39742]));

var G__39743 = (i__36231__auto___39742 + (1));
i__36231__auto___39742 = G__39743;
continue;
} else {
}
break;
}

var argseq__36238__auto__ = ((((0) < args__36237__auto__.length))?(new cljs.core.IndexedSeq(args__36237__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__36238__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__39739_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__39739_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq39740){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39740));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__39744_SHARP_){
return (new Date(p1__39744_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
