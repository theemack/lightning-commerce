(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"../../public/js/"+({}[t]||t)+"."+{"chunk-137813b8":"5da4b4f6","chunk-2d21de4f":"7d4d936e","chunk-59d18f34":"4190d7d5","chunk-98cff65e":"419ea8d4","chunk-0781f012":"9fe8905a","chunk-2d0b59c2":"74e9571d"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-137813b8":1,"chunk-59d18f34":1,"chunk-98cff65e":1,"chunk-0781f012":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="../../public/css/"+({}[t]||t)+"."+{"chunk-137813b8":"742a11b6","chunk-2d21de4f":"31d6cfe0","chunk-59d18f34":"7cd14515","chunk-98cff65e":"5bf058fe","chunk-0781f012":"c8e6c8dc","chunk-2d0b59c2":"31d6cfe0"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05fc":function(t,e,n){},"2a1d":function(t,e,n){"use strict";var a=n("2d6f"),r=n.n(a);r.a},"2d6f":function(t,e,n){},"4f06":function(t,e,n){t.exports=n.p+"../../public/img/headline.a3a71604.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{on:{"toggle-nav":function(e){t.showMobileNav=!t.showMobileNav}}}),!1===t.isCheckout?n("Navbar",{attrs:{show:t.showMobileNav}}):t._e(),n("router-view")],1)},i=[],s=(n("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-header"},[a("img",{attrs:{src:n("9d64")}}),a("a",{staticClass:"admin",attrs:{href:"/admin/products"}},[t._v("Admin Dashboard")]),a("div",{staticClass:"menu-icon",on:{click:function(e){return t.$emit("toggle-nav")}}},[a("div",{staticClass:"bar"}),a("div",{staticClass:"bar"}),a("div",{staticClass:"bar"})])])}),o=[],c={name:"site-header"},u=c,l=(n("df4c"),n("2877")),d=Object(l["a"])(u,s,o,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-container",class:{show:t.show}},[a("nav",[a("router-link",{staticClass:"item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"item",attrs:{to:"/tshirts"}},[t._v("T-Shirts")]),a("router-link",{staticClass:"item",attrs:{to:"/latest"}},[t._v("Latest")]),a("a",{staticClass:"item"},[t._v("Accessories")]),a("a",{staticClass:"item"},[t._v("Sale")]),a("div",{staticClass:"cart-button item",on:{click:function(e){t.cartOpen=!t.cartOpen},close:function(e){t.cartOpen=!1}}},[t._v("Cart  "),a("img",{attrs:{src:n("daca")}})]),a("Cart",{attrs:{open:t.cartOpen}})],1)])},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"scroll-open"}},[t.open?n("div",{staticClass:"cart"},[n("h3",[t._v("My cart")]),n("div",{staticClass:"container"},[t.items.length>0?n("div",{staticClass:"item-list"},t._l(t.items,function(e,a){return n("div",{key:a,staticClass:"order-item"},[n("img",{attrs:{src:e.content.images[0].path}}),n("p",{staticClass:"name"},[t._v(t._s(e.content.name))]),n("div",{staticClass:"details"},[n("p",{staticClass:"quantity"},[t._v("Quantity: "+t._s(e.quantity))]),n("p",{staticClass:"price"},[t._v("£"+t._s((e.inventory.price*e.quantity).toFixed(2)))])])])}),0):n("p",{staticStyle:{"font-size":"1.5em",margin:"40px 0","text-align":"center"}},[t._v("Cart is empty. Get shopping!")]),n("p",{staticClass:"subtotal"},[t._v("Subtotal: "),n("span",[t._v("£"+t._s(t.subtotal.toFixed(2)))])]),n("a",[n("button",{staticClass:"button button--oldskool",on:{click:t.requestCheckout}},[t._v("Checkout")])]),t.alertVisible?n("p",{staticClass:"alert"},[t._v("Whoops, your cart is empty. Please choose some items before proceeding to checkout.")]):t._e()])]):t._e()])},v=[],b={name:"cart",props:["open"],data:function(){return{alertVisible:!1}},computed:{items:function(){return this.$store.state.cart.items},subtotal:function(){return this.$store.state.cart.subtotal}},methods:{requestCheckout:function(){var t=this;this.$store.state.cart.subtotal>0?(this.$router.push("/checkout"),this.$emit("close")):(this.alertVisible=!0,window.setTimeout(function(){t.alertVisible=!1},3e3))}}},_=b,g=(n("77ba"),Object(l["a"])(_,m,v,!1,null,null,null)),k=g.exports,C={name:"navbar",props:["show"],data:function(){return{cartOpen:!1}},components:{Cart:k}},y=C,O=(n("2a1d"),Object(l["a"])(y,p,h,!1,null,null,null)),w=O.exports,x={name:"app",components:{Header:f,Navbar:w},data:function(){return{showMobileNav:!1,isCheckout:!1}},watch:{$route:function(t){"checkout"===t.name?this.isCheckout=!0:this.isCheckout=!1}}},j=x,E=Object(l["a"])(j,r,i,!1,null,null,null),S=E.exports,$=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home"},[n("Headline")],1)},P=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"headline"},[a("img",{staticClass:"headline__image",attrs:{src:n("4f06")}}),a("div",{staticClass:"headline__main"},[a("div",{staticClass:"headline__overlay"}),a("div",{staticClass:"headline__content"},[t._m(0),a("router-link",{staticClass:"headline__content__button",attrs:{to:"/tshirts"}},[t._v("Explore our T-Shirts")])],1)])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"headline__content__title"},[n("em",[t._v("Intriguing")]),t._v("  t-shirts "),n("br"),t._v(" for "),n("em",[t._v("intriguing")]),t._v("  people")])}],q=(n("a7f5"),{}),N=Object(l["a"])(q,M,T,!1,null,null,null),H=N.exports,L={name:"home",components:{Headline:H}},I=L,B=Object(l["a"])(I,A,P,!1,null,null,null),V=B.exports,D=(n("20d6"),n("2f62"));a["a"].use(D["a"]);var F=new D["a"].Store({state:{cart:{items:[],subtotal:0},activeOrder:null},mutations:{addToCart:function(t,e){var n=t.cart.items.findIndex(function(t){return t._id===e._id});n>-1?(t.cart.items[n].quantity++,t.cart.subtotal+=e.inventory.price):(e.quantity||(e.quantity=1),t.cart.items.push(e),t.cart.subtotal+=e.inventory.price)},createOrder:function(t,e){t.activeOrder={items:t.cart.items,shippingMethod:null,subtotal:e.subtotal,total:e.subtotal,paymentIntent:e.paymentIntent}},addShippingAddress:function(t,e){t.activeOrder.shippingAddress=e.shippingAddress,t.activeOrder.email=e.email},addShippingMethod:function(t,e){t.activeOrder.shippingMethod=e,t.activeOrder.total=t.activeOrder.subtotal+e.cost},addBillingAddress:function(t,e){t.activeOrder.billingAddress=e},completeOrder:function(t){t.activeOrder.complete=!0,t.cart.items=[],t.cart.subtotal=0},resetOrder:function(t){t.activeOrder=null}},actions:{}});a["a"].use($["a"]);var z=new $["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:V},{path:"/latest",name:"latest",component:function(){return Promise.all([n.e("chunk-98cff65e"),n.e("chunk-2d0b59c2")]).then(n.bind(null,"1a40"))}},{path:"/tshirts",name:"tshirts",component:function(){return Promise.all([n.e("chunk-98cff65e"),n.e("chunk-0781f012")]).then(n.bind(null,"33e0"))}},{path:"/:category/:product",name:"product",props:!0,component:function(){return n.e("chunk-2d21de4f").then(n.bind(null,"d2f1"))}},{path:"/checkout",name:"checkout",component:function(){return n.e("chunk-137813b8").then(n.bind(null,"7cb4"))},beforeEnter:function(t,e,n){F.state.cart.subtotal>0?n():n("/")}},{path:"/order-complete",name:"order-complete",component:function(){return n.e("chunk-59d18f34").then(n.bind(null,"ca79"))}}]}),J=n("7bb1"),U=n("67b0"),G=n("4a7a"),K=n.n(G),Q=n("bc3a"),R=n.n(Q);a["a"].use(J["b"],{events:"change"});var W={custom:{email:{required:"Please provide an email address so we can keep in touch about your order"}}};J["a"].localize("en",W),a["a"].use(U["a"]),a["a"].component("v-select",K.a);var X=R.a.create({baseURL:"/api/"});a["a"].prototype.$axios=X,a["a"].config.productionTip=!1,new a["a"]({router:z,store:F,render:function(t){return t(S)}}).$mount("#app")},"77ba":function(t,e,n){"use strict";var a=n("f67e"),r=n.n(a);r.a},"9d64":function(t,e,n){t.exports=n.p+"../../public/img/logo.4f709858.png"},a7f5:function(t,e,n){"use strict";var a=n("c71f"),r=n.n(a);r.a},c71f:function(t,e,n){},daca:function(t,e,n){t.exports=n.p+"../../public/img/cart.1c6ca9ca.svg"},df4c:function(t,e,n){"use strict";var a=n("05fc"),r=n.n(a);r.a},f67e:function(t,e,n){}});
//# sourceMappingURL=app.917ebc3d.js.map