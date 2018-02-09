// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38857){
var map__38858 = p__38857;
var map__38858__$1 = ((((!((map__38858 == null)))?((((map__38858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38858):map__38858);
var m = map__38858__$1;
var n = cljs.core.get.call(null,map__38858__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38860_38882 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38861_38883 = null;
var count__38862_38884 = (0);
var i__38863_38885 = (0);
while(true){
if((i__38863_38885 < count__38862_38884)){
var f_38886 = cljs.core._nth.call(null,chunk__38861_38883,i__38863_38885);
cljs.core.println.call(null,"  ",f_38886);

var G__38887 = seq__38860_38882;
var G__38888 = chunk__38861_38883;
var G__38889 = count__38862_38884;
var G__38890 = (i__38863_38885 + (1));
seq__38860_38882 = G__38887;
chunk__38861_38883 = G__38888;
count__38862_38884 = G__38889;
i__38863_38885 = G__38890;
continue;
} else {
var temp__5457__auto___38891 = cljs.core.seq.call(null,seq__38860_38882);
if(temp__5457__auto___38891){
var seq__38860_38892__$1 = temp__5457__auto___38891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38860_38892__$1)){
var c__35882__auto___38893 = cljs.core.chunk_first.call(null,seq__38860_38892__$1);
var G__38894 = cljs.core.chunk_rest.call(null,seq__38860_38892__$1);
var G__38895 = c__35882__auto___38893;
var G__38896 = cljs.core.count.call(null,c__35882__auto___38893);
var G__38897 = (0);
seq__38860_38882 = G__38894;
chunk__38861_38883 = G__38895;
count__38862_38884 = G__38896;
i__38863_38885 = G__38897;
continue;
} else {
var f_38898 = cljs.core.first.call(null,seq__38860_38892__$1);
cljs.core.println.call(null,"  ",f_38898);

var G__38899 = cljs.core.next.call(null,seq__38860_38892__$1);
var G__38900 = null;
var G__38901 = (0);
var G__38902 = (0);
seq__38860_38882 = G__38899;
chunk__38861_38883 = G__38900;
count__38862_38884 = G__38901;
i__38863_38885 = G__38902;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38903 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34951__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34951__auto__)){
return or__34951__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38903);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38903)))?cljs.core.second.call(null,arglists_38903):arglists_38903));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38864_38904 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38865_38905 = null;
var count__38866_38906 = (0);
var i__38867_38907 = (0);
while(true){
if((i__38867_38907 < count__38866_38906)){
var vec__38868_38908 = cljs.core._nth.call(null,chunk__38865_38905,i__38867_38907);
var name_38909 = cljs.core.nth.call(null,vec__38868_38908,(0),null);
var map__38871_38910 = cljs.core.nth.call(null,vec__38868_38908,(1),null);
var map__38871_38911__$1 = ((((!((map__38871_38910 == null)))?((((map__38871_38910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38871_38910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38871_38910):map__38871_38910);
var doc_38912 = cljs.core.get.call(null,map__38871_38911__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38913 = cljs.core.get.call(null,map__38871_38911__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38909);

cljs.core.println.call(null," ",arglists_38913);

if(cljs.core.truth_(doc_38912)){
cljs.core.println.call(null," ",doc_38912);
} else {
}

var G__38914 = seq__38864_38904;
var G__38915 = chunk__38865_38905;
var G__38916 = count__38866_38906;
var G__38917 = (i__38867_38907 + (1));
seq__38864_38904 = G__38914;
chunk__38865_38905 = G__38915;
count__38866_38906 = G__38916;
i__38867_38907 = G__38917;
continue;
} else {
var temp__5457__auto___38918 = cljs.core.seq.call(null,seq__38864_38904);
if(temp__5457__auto___38918){
var seq__38864_38919__$1 = temp__5457__auto___38918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38864_38919__$1)){
var c__35882__auto___38920 = cljs.core.chunk_first.call(null,seq__38864_38919__$1);
var G__38921 = cljs.core.chunk_rest.call(null,seq__38864_38919__$1);
var G__38922 = c__35882__auto___38920;
var G__38923 = cljs.core.count.call(null,c__35882__auto___38920);
var G__38924 = (0);
seq__38864_38904 = G__38921;
chunk__38865_38905 = G__38922;
count__38866_38906 = G__38923;
i__38867_38907 = G__38924;
continue;
} else {
var vec__38873_38925 = cljs.core.first.call(null,seq__38864_38919__$1);
var name_38926 = cljs.core.nth.call(null,vec__38873_38925,(0),null);
var map__38876_38927 = cljs.core.nth.call(null,vec__38873_38925,(1),null);
var map__38876_38928__$1 = ((((!((map__38876_38927 == null)))?((((map__38876_38927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38876_38927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38876_38927):map__38876_38927);
var doc_38929 = cljs.core.get.call(null,map__38876_38928__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38930 = cljs.core.get.call(null,map__38876_38928__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38926);

cljs.core.println.call(null," ",arglists_38930);

if(cljs.core.truth_(doc_38929)){
cljs.core.println.call(null," ",doc_38929);
} else {
}

var G__38931 = cljs.core.next.call(null,seq__38864_38919__$1);
var G__38932 = null;
var G__38933 = (0);
var G__38934 = (0);
seq__38864_38904 = G__38931;
chunk__38865_38905 = G__38932;
count__38866_38906 = G__38933;
i__38867_38907 = G__38934;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38878 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38879 = null;
var count__38880 = (0);
var i__38881 = (0);
while(true){
if((i__38881 < count__38880)){
var role = cljs.core._nth.call(null,chunk__38879,i__38881);
var temp__5457__auto___38935__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38935__$1)){
var spec_38936 = temp__5457__auto___38935__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38936));
} else {
}

var G__38937 = seq__38878;
var G__38938 = chunk__38879;
var G__38939 = count__38880;
var G__38940 = (i__38881 + (1));
seq__38878 = G__38937;
chunk__38879 = G__38938;
count__38880 = G__38939;
i__38881 = G__38940;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38878);
if(temp__5457__auto____$1){
var seq__38878__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38878__$1)){
var c__35882__auto__ = cljs.core.chunk_first.call(null,seq__38878__$1);
var G__38941 = cljs.core.chunk_rest.call(null,seq__38878__$1);
var G__38942 = c__35882__auto__;
var G__38943 = cljs.core.count.call(null,c__35882__auto__);
var G__38944 = (0);
seq__38878 = G__38941;
chunk__38879 = G__38942;
count__38880 = G__38943;
i__38881 = G__38944;
continue;
} else {
var role = cljs.core.first.call(null,seq__38878__$1);
var temp__5457__auto___38945__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38945__$2)){
var spec_38946 = temp__5457__auto___38945__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38946));
} else {
}

var G__38947 = cljs.core.next.call(null,seq__38878__$1);
var G__38948 = null;
var G__38949 = (0);
var G__38950 = (0);
seq__38878 = G__38947;
chunk__38879 = G__38948;
count__38880 = G__38949;
i__38881 = G__38950;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
