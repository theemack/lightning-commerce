(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)r=s[u],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"../../public/js/"+({about:"about"}[e]||e)+"."+{about:"e1e114b5"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="../../public/css/"+({about:"about"}[e]||e)+"."+{about:"460dec66"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05fc":function(e,t,n){},"2a1d":function(e,t,n){"use strict";var a=n("2d6f"),r=n.n(a);r.a},"2d6f":function(e,t,n){},"4f06":function(e,t,n){e.exports=n.p+"../../public/img/headline.a3a71604.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{"toggle-nav":function(t){e.showMobileNav=!e.showMobileNav}}}),n("Navbar",{attrs:{show:e.showMobileNav}}),n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"site-header"},[a("img",{attrs:{src:n("9d64")}}),a("div",{staticClass:"menu-icon",on:{click:function(t){return e.$emit("toggle-nav")}}},[a("div",{staticClass:"bar"}),a("div",{staticClass:"bar"}),a("div",{staticClass:"bar"})])])},s=[],c={name:"site-header"},l=c,u=(n("df4c"),n("2877")),f=Object(u["a"])(l,i,s,!1,null,null,null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-container",class:{show:e.show}},[n("nav",[n("a",{staticClass:"item"},[e._v("Home")]),n("router-link",{staticClass:"item",attrs:{to:"/bags"}},[e._v("Bags")]),n("router-link",{staticClass:"item",attrs:{to:"/latest"}},[e._v("Latest")]),n("a",{staticClass:"item"},[e._v("Accessories")]),n("a",{staticClass:"item"},[e._v("Sale")])],1)])},v=[],m={name:"navbar",props:["show"]},h=m,b=(n("2a1d"),Object(u["a"])(h,d,v,!1,null,null,null)),g=b.exports,_={name:"app",components:{Header:p,Navbar:g},data:function(){return{showMobileNav:!1}}},y=_,w=Object(u["a"])(y,r,o,!1,null,null,null),C=w.exports,j=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"home"},[n("Headline")],1)},O=[],E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"headline"},[a("img",{staticClass:"headline__image",attrs:{src:n("4f06")}}),a("div",{staticClass:"headline__main"},[a("div",{staticClass:"headline__overlay"}),a("div",{staticClass:"headline__content"},[a("h1",{staticClass:"headline__content__title"},[a("em",[e._v("Intriguing")]),e._v(" bags "),a("br"),e._v(" for "),a("em",[e._v("intriguing")]),e._v(" people")])])])])}],S=(n("a7f5"),{}),k=Object(u["a"])(S,E,N,!1,null,null,null),P=k.exports,$={name:"home",components:{Headline:P}},M=$,T=Object(u["a"])(M,x,O,!1,null,null,null),A=T.exports;a["a"].use(j["a"]);var H=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:A},{path:"/latest",name:"latest",component:function(){return n.e("about").then(n.bind(null,"1a40"))}},{path:"/bags",name:"latest",component:function(){return n.e("about").then(n.bind(null,"e43b"))}}]}),L=n("2f62");a["a"].use(L["a"]);var B=new L["a"].Store({state:{},mutations:{},actions:{}}),q=n("4a7a"),D=n.n(q),I=n("bc3a"),J=n.n(I);a["a"].component("v-select",D.a);var U=J.a.create({baseURL:"/api/"});a["a"].prototype.$axios=U,a["a"].config.productionTip=!1,new a["a"]({router:H,store:B,render:function(e){return e(C)}}).$mount("#app")},"9d64":function(e,t,n){e.exports=n.p+"../../public/img/logo.c6aff8bd.png"},a7f5:function(e,t,n){"use strict";var a=n("c71f"),r=n.n(a);r.a},c71f:function(e,t,n){},df4c:function(e,t,n){"use strict";var a=n("05fc"),r=n.n(a);r.a}});
//# sourceMappingURL=app.cd122eaa.js.map