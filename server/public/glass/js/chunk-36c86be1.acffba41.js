(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36c86be1"],{"0b06":function(t,n,o){"use strict";var i=o("2660"),a=o.n(i);a.a},2660:function(t,n,o){},7427:function(t,n,o){},7514:function(t,n,o){"use strict";var i=o("5ca1"),a=o("0a49")(5),r="find",e=!0;r in[]&&Array(1)[r](function(){e=!1}),i(i.P+i.F*e,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")(r)},d2f1:function(t,n,o){"use strict";o.r(n);var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("main",{staticClass:"product"},[t.foundProduct?o("div",[o("Carousel",{attrs:{images:t.foundProduct.content.images}}),o("div",{staticClass:"content"},[o("h1",{staticClass:"title title--primary"},[t._v(t._s(t.foundProduct.content.name))]),o("p",{staticClass:"price"},[t._v("£"+t._s(t.foundProduct.inventory.price.toFixed(2))+" GBP")]),t.foundProduct.inventory.totalStock-t.foundProduct.inventory.inFulfillment<1?o("p",{staticClass:"out-of-stock"},[t._v("OUT OF STOCK")]):t._e(),o("label",{attrs:{for:"quantity"}},[t._v("Quantity")]),o("div",{staticClass:"add"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number",id:"quantity",name:"quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}}),o("button",{staticClass:"button button--oldskool",attrs:{disabled:t.foundProduct.inventory.totalStock-t.foundProduct.inventory.inFulfillment<1},on:{click:function(n){return t.addToCart(t.foundProduct)}}},[t._v("Add to cart")])]),o("hr"),o("p",{staticClass:"description text"},[t._v("\n                "+t._s(t.foundProduct.content.description)+"\n            ")])])],1):t._e()])},a=[],r=(o("7514"),o("f472")),e={name:"product-view",props:["category","product"],inject:["notyf"],components:{Carousel:r["a"]},data:function(){return{foundProduct:null,quantity:1}},mounted:function(){var t=this;this.$axios.get("/products/"+this.category+"/"+this.product).then(function(n){t.foundProduct=n.data.product})},methods:{addToCart:function(t){var n=t.inventory.totalStock-t.inventory.inFulfillment,o=this.$store.state.cart.items.find(function(n){return n.product._id===t._id}),i=o?parseInt(this.quantity,10)+o.quantity:parseInt(this.quantity,10);i<=n?(this.$store.commit("addToCart",{product:t,quantity:parseInt(this.quantity,10)}),this.notyf.success("Added product to cart")):this.notyf.error("Whoops, you can only add a maximum of "+n+" of this product to your cart")}}},s=e,u=(o("f774"),o("2877")),c=Object(u["a"])(s,i,a,!1,null,"34901ef0",null);n["default"]=c.exports},f472:function(t,n,o){"use strict";var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"gallery image-carousel"},[t._l(t.images,function(t,n){return o("div",{key:n+"-op",staticClass:"control-operator",attrs:{id:"item-"+n}})}),t._l(t.images,function(t,n){return o("figure",{key:n,staticClass:"item"},[o("img",{attrs:{src:t.path}})])}),o("div",{staticClass:"controls"},t._l(t.images,function(n,i){return o("a",{key:i+"-control",staticClass:"control-button",attrs:{href:"#item-"+i}},[t._v("•")])}),0)],2)},a=[],r={name:"image-carousel",props:["images"]},e=r,s=(o("0b06"),o("2877")),u=Object(s["a"])(e,i,a,!1,null,null,null);n["a"]=u.exports},f774:function(t,n,o){"use strict";var i=o("7427"),a=o.n(i);a.a}}]);
//# sourceMappingURL=chunk-36c86be1.acffba41.js.map