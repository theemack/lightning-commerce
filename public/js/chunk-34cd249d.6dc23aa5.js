(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34cd249d"],{"00f7":function(t,n,s){"use strict";var o=s("7d51"),r=s.n(o);r.a},"082c":function(t,n,s){"use strict";var o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"product-grid"},t._l(t.products,function(n,o){return s("article",{key:o,staticClass:"product-card"},[s("router-link",{attrs:{to:"/"+n.category.slug+"/"+n.content.slug}},[s("Carousel",{attrs:{images:n.content.images}})],1),s("router-link",{attrs:{to:"/"+n.category.slug+"/"+n.content.slug}},[s("h1",[t._v(t._s(n.content.name))])]),s("p",[t._v("£"+t._s(n.inventory.price.toFixed(2)))]),s("button",{staticClass:"button button--oldskool",on:{click:function(s){return t.addItemToCart(n)}}},[t._v("Add to cart")])],1)}),0)},r=[],e=s("f472"),a={name:"product-grid",components:{Carousel:e["a"]},inject:["notyf"],props:["products"],methods:{addItemToCart:function(t){t.quantity=1,this.$store.commit("addToCart",t),this.notyf.success("Added product to cart")}}},c=a,i=(s("00f7"),s("2877")),u=Object(i["a"])(c,o,r,!1,null,null,null);n["a"]=u.exports},"0b06":function(t,n,s){"use strict";var o=s("2660"),r=s.n(o);r.a},2660:function(t,n,s){},"7d51":function(t,n,s){},f472:function(t,n,s){"use strict";var o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"gallery image-carousel"},[t._l(t.images,function(t,n){return s("div",{key:n+"-op",staticClass:"control-operator",attrs:{id:"item-"+n}})}),t._l(t.images,function(t,n){return s("figure",{key:n,staticClass:"item"},[s("img",{attrs:{src:t.path}})])}),s("div",{staticClass:"controls"},t._l(t.images,function(n,o){return s("a",{key:o+"-control",staticClass:"control-button",attrs:{href:"#item-"+o}},[t._v("•")])}),0)],2)},r=[],e={name:"image-carousel",props:["images"]},a=e,c=(s("0b06"),s("2877")),i=Object(c["a"])(a,o,r,!1,null,null,null);n["a"]=i.exports}}]);
//# sourceMappingURL=chunk-34cd249d.6dc23aa5.js.map