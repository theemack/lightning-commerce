(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34cd249d"],{"00f7":function(t,n,s){"use strict";var r=s("7d51"),o=s.n(r);o.a},"082c":function(t,n,s){"use strict";var r=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"product-grid"},t._l(t.products,function(n,r){return s("article",{key:r,staticClass:"product-card"},[s("router-link",{attrs:{to:"/"+n.category.slug+"/"+n.content.slug}},[s("Carousel",{attrs:{images:n.content.images}})],1),s("router-link",{attrs:{to:"/"+n.category.slug+"/"+n.content.slug}},[s("h1",[t._v(t._s(n.content.name))])]),s("p",[t._v("£"+t._s(n.inventory.price.toFixed(2)))]),s("button",{staticClass:"button button--oldskool",on:{click:function(s){return t.addItemToCart(n)}}},[t._v("Add to cart")])],1)}),0)},o=[],a=s("f472"),e={name:"product-grid",components:{Carousel:a["a"]},props:["products"],methods:{addItemToCart:function(t){this.$store.commit("addToCart",{product:t,quantity:1})}}},c=e,i=(s("00f7"),s("2877")),u=Object(i["a"])(c,r,o,!1,null,null,null);n["a"]=u.exports},"0b06":function(t,n,s){"use strict";var r=s("2660"),o=s.n(r);o.a},2660:function(t,n,s){},"7d51":function(t,n,s){},f472:function(t,n,s){"use strict";var r=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"gallery image-carousel"},[t._l(t.images,function(t,n){return s("div",{key:n+"-op",staticClass:"control-operator",attrs:{id:"item-"+n}})}),t._l(t.images,function(t,n){return s("figure",{key:n,staticClass:"item"},[s("img",{attrs:{src:t.path}})])}),s("div",{staticClass:"controls"},t._l(t.images,function(n,r){return s("a",{key:r+"-control",staticClass:"control-button",attrs:{href:"#item-"+r}},[t._v("•")])}),0)],2)},o=[],a={name:"image-carousel",props:["images"]},e=a,c=(s("0b06"),s("2877")),i=Object(c["a"])(e,r,o,!1,null,null,null);n["a"]=i.exports}}]);
//# sourceMappingURL=chunk-34cd249d.cdc4ad3f.js.map