(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30f7e74e"],{"0b06":function(t,n,o){"use strict";var a=o("2660"),e=o.n(a);e.a},2660:function(t,n,o){},6308:function(t,n,o){"use strict";var a=o("e7cb"),e=o.n(a);e.a},d2f1:function(t,n,o){"use strict";o.r(n);var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("main",{staticClass:"product"},[t.foundProduct?o("div",[o("Carousel",{attrs:{images:t.foundProduct.content.images}}),o("div",{staticClass:"content"},[o("h1",{staticClass:"title title--primary"},[t._v(t._s(t.foundProduct.content.name))]),o("p",{staticClass:"price"},[t._v("£"+t._s(t.foundProduct.inventory.price.toFixed(2))+" GBP")]),o("label",{attrs:{for:"quantity"}},[t._v("Quantity")]),o("div",{staticClass:"add"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number",id:"quantity",name:"quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}}),o("button",{staticClass:"button button--oldskool",on:{click:function(n){return t.addToCart(t.foundProduct)}}},[t._v("Add to cart")])]),o("hr"),o("p",{staticClass:"description text"},[t._v("\n                "+t._s(t.foundProduct.content.description)+"\n            ")])])],1):t._e()])},e=[],s=o("f472"),i={name:"product-view",props:["category","product"],inject:["notyf"],components:{Carousel:s["a"]},data:function(){return{foundProduct:null,quantity:1}},mounted:function(){var t=this;this.$axios.get("/products/"+this.category+"/"+this.product).then(function(n){console.log(n),t.foundProduct=n.data.product})},methods:{addToCart:function(t){t.quantity=parseInt(this.quantity,10),console.log(t),this.$store.commit("addToCart",t),this.notyf.success("Added product to cart")}}},r=i,c=(o("6308"),o("2877")),u=Object(c["a"])(r,a,e,!1,null,"b72f5850",null);n["default"]=u.exports},e7cb:function(t,n,o){},f472:function(t,n,o){"use strict";var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"gallery image-carousel"},[t._l(t.images,function(t,n){return o("div",{key:n+"-op",staticClass:"control-operator",attrs:{id:"item-"+n}})}),t._l(t.images,function(t,n){return o("figure",{key:n,staticClass:"item"},[o("img",{attrs:{src:t.path}})])}),o("div",{staticClass:"controls"},t._l(t.images,function(n,a){return o("a",{key:a+"-control",staticClass:"control-button",attrs:{href:"#item-"+a}},[t._v("•")])}),0)],2)},e=[],s={name:"image-carousel",props:["images"]},i=s,r=(o("0b06"),o("2877")),c=Object(r["a"])(i,a,e,!1,null,null,null);n["a"]=c.exports}}]);
//# sourceMappingURL=chunk-30f7e74e.cef7bd2a.js.map