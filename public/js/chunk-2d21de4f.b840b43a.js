(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21de4f"],{d2f1:function(t,n,o){"use strict";o.r(n);var c=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"product"},[t._v("\n    "+t._s(t.product)+"\n")])},u=[],e={name:"product-view",props:["category","product"],data:function(){},mounted:function(){var t=this;this.$axios.get("/products/"+this.category+"/"+this.product).then(function(n){console.log(n),t.product=n.data.product})}},r=e,s=o("2877"),a=Object(s["a"])(r,c,u,!1,null,null,null);n["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d21de4f.b840b43a.js.map