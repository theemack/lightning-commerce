(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"00f7":function(t,e,r){"use strict";var s=r("7d51"),n=r.n(s);n.a},"082c":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-grid"},t._l(t.products,function(e,s){return r("div",{staticClass:"product-card"},[r("Carousel",{attrs:{images:e.content.images}}),r("h1",[t._v(t._s(e.content.name))]),r("p",[t._v("£"+t._s(e.inventory.price.toFixed(2)))])],1)}),0)},n=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gallery image-carousel"},[t._l(t.images,function(t,e){return r("div",{key:e,staticClass:"control-operator",attrs:{id:"item-"+e}})}),t._l(t.images,function(t,e){return r("figure",{key:e,staticClass:"item"},[r("img",{attrs:{src:t.path}})])}),r("div",{staticClass:"controls"},t._l(t.images,function(e,s){return r("a",{key:s,staticClass:"control-button",attrs:{href:"#item-"+s}},[t._v("•")])}),0)],2)},c=[],o={name:"image-carousel",props:["images"]},u=o,i=(r("0b06"),r("2877")),l=Object(i["a"])(u,a,c,!1,null,null,null),d=l.exports,f={name:"product-grid",components:{Carousel:d},props:["products"]},p=f,m=(r("00f7"),Object(i["a"])(p,s,n,!1,null,null,null));e["a"]=m.exports},"0b06":function(t,e,r){"use strict";var s=r("2660"),n=r.n(s);n.a},"1a40":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"latest"},[r("h1",[t._v("Check out the latest stuff from our master bag crafters")]),r("ProductGrid")],1)},n=[],a=r("082c"),c={name:"latest",components:{ProductGrid:a["a"]},data:function(){return{products:[]}},mounted:function(){this.getProducts()},methods:{getProducts:function(){this.$axios.get("/products",{params:{}})}}},o=c,u=r("2877"),i=Object(u["a"])(o,s,n,!1,null,null,null);e["default"]=i.exports},2323:function(t,e,r){"use strict";var s=r("9a2a"),n=r.n(s);n.a},2660:function(t,e,r){},"7d51":function(t,e,r){},"9a2a":function(t,e,r){},e43b:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"bags"},[r("h1",[t._v("Find your perfect bag")]),r("h3",[t._v("Filter products")]),r("Filters",{attrs:{filters:t.filters},on:{updated:function(e){return t.getProducts(e)}}}),r("ProductGrid",{attrs:{products:t.products}})],1)},n=[],a=r("082c"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filters"},[r("v-select",{attrs:{multiple:"",options:t.filters.categories,placeholder:"Product type"},model:{value:t.requested.category,callback:function(e){t.$set(t.requested,"category",e)},expression:"requested.category"}})],1)},o=[],u=void 0,i={name:"filters",props:["filters"],data:function(){return{requested:{category:[]}}},watch:{requested:{deep:!0,handler:function(){u.$emit("updated",u.requested)}}}},l=i,d=(r("2323"),r("2877")),f=Object(d["a"])(l,c,o,!1,null,null,null),p=f.exports,m={name:"bags",components:{ProductGrid:a["a"],Filters:p},data:function(){return{products:[],filters:[]}},mounted:function(){this.getProducts()},methods:{getProducts:function(t){var e=this;this.$axios.get("/products",{params:t}).then(function(t){console.log(t),e.products=t.data.products})}}},g=m,v=Object(d["a"])(g,s,n,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=about.8981840e.js.map