(function(e){function t(t){for(var a,l,o=t[0],r=t[1],c=t[2],p=0,d=[];p<o.length;p++)l=o[p],i[l]&&d.push(i[l][0]),i[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},s=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/admin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"262f":function(e,t,n){},"4f06":function(e,t,n){e.exports=n.p+"../../public/admin-dashboard/img/headline.80bdd99c.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-aside",{attrs:{width:"280px"}},[n("Navbar")],1),n("el-main",[n("router-view")],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:24}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"},on:{open:e.handleOpen,close:e.handleClose}},[n("router-link",{attrs:{to:"/"}},[n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"el-icon-data-analysis"}),n("span",[e._v("Dashboard")])])],1),n("router-link",{attrs:{to:"/search"}},[n("el-menu-item",{attrs:{index:"3"}},[n("i",{staticClass:"el-icon-search"}),n("span",[e._v("Search")])])],1),n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"el-icon-user"}),n("span",[e._v("Customers")])]),n("router-link",{attrs:{to:"/products"}},[n("el-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"el-icon-goods"}),n("span",[e._v("Products")])])],1),n("el-menu-item",{attrs:{index:"5"}},[n("i",{staticClass:"el-icon-box"}),n("span",[e._v("Orders")])]),n("el-menu-item",{attrs:{index:"6"}},[n("i",{staticClass:"el-icon-money"}),n("span",[e._v("Payments")])])],1)],1)],1)],1)},o=[],r={name:"navbar",data:function(){return{isCollapse:!1}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},c=r,u=n("2877"),p=Object(u["a"])(c,l,o,!1,null,null,null),d=p.exports,m={components:{Navbar:d}},g=m,h=(n("5c0b"),Object(u["a"])(g,i,s,!1,null,null,null)),f=h.exports,b=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard"})},y=[],w={name:"dashboard"},_=w,x=Object(u["a"])(_,v,y,!1,null,null,null),C=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"products"},[n("h1",{staticClass:"title title--primary"},[e._v("Products")]),n("h3",{staticClass:"title title--secondary"},[e._v("Filter products")]),n("div",{staticClass:"options"},[n("div",{staticClass:"filters"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"Category"}},[n("el-select",{attrs:{multiple:"",placeholder:"Select categories"},model:{value:e.selectedCategories,callback:function(t){e.selectedCategories=t},expression:"selectedCategories"}},e._l(e.categories,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),n("el-form-item",{attrs:{label:"Price range"}},[n("el-slider",{attrs:{range:"",step:5,max:80},model:{value:e.priceRange,callback:function(t){e.priceRange=t},expression:"priceRange"}})],1)],1)],1),n("router-link",{attrs:{to:"/products/new"}},[n("el-button",{attrs:{rounded:"",type:"success"}},[e._v("New Product")])],1)],1),n("ProductGrid",{attrs:{products:e.products}})],1)},S=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"product-grid"},e._l(e.products,function(t,a){return n("el-col",{key:a,attrs:{xs:24,sm:12,md:12,lg:6,xl:4}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("el-carousel",{attrs:{height:"250px",autoplay:!1}},e._l(t.content.images,function(e,t){return n("el-carousel-item",{key:t},[n("img",{staticClass:"image",attrs:{src:e}})])}),1),n("div",{staticClass:"card__content"},[n("h2",[e._v(e._s(t.content.name))]),n("div",{staticClass:"category"},[n("h3",[e._v(e._s(t.category.name))]),n("p",[e._v("£"+e._s(t.inventory.price))])]),n("p",[e._v("Current inventory: "+e._s(t.inventory.currentStock))]),n("div",{staticClass:"bottom clearfix"},[n("el-row",[n("el-button",{attrs:{size:"small",icon:"el-icon-edit",round:""}},[e._v("Edit")]),n("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete",round:""}},[e._v("Delete")])],1)],1)])],1)],1)}),1)},P=[],j={name:"product-grid",props:["products"]},T=j,$=(n("e2c0"),Object(u["a"])(T,O,P,!1,null,"336e37ba",null)),E=$.exports,B={name:"products",data:function(){return{selectedCategories:[],categories:[{name:"Tote bags",slug:"tote-bags",description:"we make intriguing bags for intriguing people, and we make them to last",images:[],id:"57329852359235"},{name:"Handbags",slug:"handbags",description:"A classic now, as they always have been and probably always will be",images:[],id:"264235235"}],priceRange:[0,80],products:[{content:{name:"The Simple One",slug:"the-simple-one",description:"its a lovely simple bag this one oh yeah",images:[n("4f06"),n("4f06")]},inventory:{currentStock:34,price:5.99},shipping:{weight:3.5},category:{name:"Bags",slug:"bags"}},{content:{name:"The Simple One",slug:"the-simple-one",description:"its a lovely simple bag this one oh yeah",images:[n("4f06"),n("4f06")]},inventory:{currentStock:34,price:5.99},shipping:{weight:3.5},category:{name:"Bags",slug:"bags"}},{content:{name:"The Simple One",slug:"the-simple-one",description:"its a lovely simple bag this one oh yeah",images:[n("4f06"),n("4f06")]},inventory:{currentStock:34,price:5.99},shipping:{weight:3.5},category:{name:"Bags",slug:"bags"}},{content:{name:"The Simple One",slug:"the-simple-one",description:"its a lovely simple bag this one oh yeah",images:[n("4f06"),n("4f06")]},inventory:{currentStock:34,price:5.99},shipping:{weight:3.5},category:{name:"Bags",slug:"bags"}},{content:{name:"The Simple One",slug:"the-simple-one",description:"its a lovely simple bag this one oh yeah",images:[n("4f06"),n("4f06")]},inventory:{currentStock:34,price:5.99},shipping:{weight:3.5},category:{name:"Bags",slug:"bags"}},{content:{name:"The Simple One",slug:"the-simple-one",description:"its a lovely simple bag this one oh yeah",images:[n("4f06"),n("4f06")]},inventory:{currentStock:34,price:5.99},shipping:{weight:3.5},category:{name:"Bags",slug:"bags"}},{content:{name:"The Simple One",slug:"the-simple-one",description:"its a lovely simple bag this one oh yeah",images:[n("4f06"),n("4f06")]},inventory:{currentStock:34,price:5.99},shipping:{weight:3.5},category:{name:"Bags",slug:"bags"}},{content:{name:"The Simple One",slug:"the-simple-one",description:"its a lovely simple bag this one oh yeah",images:[n("4f06"),n("4f06")]},inventory:{currentStock:34,price:5.99},shipping:{weight:3.5},category:{name:"Bags",slug:"bags"}}]}},components:{ProductGrid:E},mounted:function(){var e=this;this.$axios({method:"get",url:"/api/products"}).then(function(t){console.log(t),e.categories=t.data.categories,e.products=t.data.products})}},R=B,z=(n("fbf1"),Object(u["a"])(R,k,S,!1,null,"5f07fb9a",null)),M=z.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new-product"},[n("el-page-header",{attrs:{title:"back to all products",content:"New product"},on:{back:function(t){return e.$router.push("/products")}}}),n("h1",{staticClass:"title title--primary"},[e._v("Launch new product")]),n("el-form",{attrs:{"label-position":"top"}},[n("el-form-item",{attrs:{label:"Category"}},[n("el-select",{attrs:{placeholder:"Select categories"},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}},e._l(e.categories,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),n("el-form-item",{attrs:{label:"Product name"}},[n("el-input",{attrs:{placeholder:"Choose a name"},on:{input:function(t){return e.autoCreateSlug(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("el-form-item",{attrs:{label:"Url reference"}},[n("el-input",{attrs:{placeholder:"Choose a url reference"},on:{input:function(t){t.length>0?e.slugChanged=!0:e.slugChanged=!1}},model:{value:e.slug,callback:function(t){e.slug=t},expression:"slug"}})],1),n("el-form-item",{attrs:{label:"Product description"}},[n("el-input",{attrs:{type:"textarea",placeholder:"Write a detailed description"},on:{input:function(t){return e.autoCreateSlug(t)}},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1),n("form",{attrs:{action:"/api/images",method:"post",enctype:"multipart/form-data"}},[n("input",{attrs:{type:"file",name:"file"}})]),n("el-form-item",{attrs:{label:"Product images"}},[e._l(e.images,function(e,t){return n("el-col",{key:t,attrs:{xs:24,sm:12,md:12,lg:6,xl:4}},[n("img",{attrs:{src:"image.src"}})])}),n("el-upload",{staticClass:"image-upload",attrs:{drag:"",action:"/api/images","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,"http-request":e.beforeUpload,multiple:"",limit:3,"on-exceed":e.handleExceed,"file-list":e.fileList,"list-type":"picture"}},[n("el-button",{attrs:{size:"small",type:"primary"}},[e._v("Click to upload")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])],1)],2),n("h3",[e._v("Pricing and fulfillment")]),n("el-form-item",{attrs:{label:"Price"}},[e._v("\n            £ "),n("el-input-number",{attrs:{controls:!1,precision:2},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),n("el-form-item",{attrs:{label:"Dimensions (in centimetres)"}},[n("el-input-number",{attrs:{controls:!1,step:1},model:{value:e.height,callback:function(t){e.height=t},expression:"height"}}),e._v("  x  \n            "),n("el-input-number",{attrs:{controls:!1,step:1},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}}),e._v("  x  \n            "),n("el-input-number",{attrs:{controls:!1,step:1},model:{value:e.length,callback:function(t){e.length=t},expression:"length"}})],1),n("el-form-item",{attrs:{label:"Weight"}},[n("el-input-number",{attrs:{controls:!1,precision:2},model:{value:e.weight,callback:function(t){e.weight=t},expression:"weight"}})],1)],1)],1)},D=[],U=(n("a481"),{name:"new-product",data:function(){return{selectedCategory:null,name:null,description:null,slug:null,price:null,slugChanged:!1,images:[],categories:[{name:"Tote bags",slug:"tote-bags",description:"we make intriguing bags for intriguing people, and we make them to last",images:[],id:"57329852359235"},{name:"Handbags",slug:"handbags",description:"A classic now, as they always have been and probably always will be",images:[],id:"264235235"}]}},methods:{autoCreateSlug:function(e){this.slugChanged||(this.slug=e.replace(/ /g,"-"))},handleExceed:function(e,t){this.$message.warning("The limit is 3, you selected ".concat(e.length," files this time, add up to ").concat(e.length+t.length," totally"))},beforeUpload:function(e){console.log(e),this.$axios.post(e.action,e.file).then(function(e){console.log(e)})}}}),A=U,G=Object(u["a"])(A,N,D,!1,null,null,null),H=G.exports;a["default"].use(b["a"]);var J=new b["a"]({mode:"history",base:"/admin/",routes:[{path:"/",name:"dashboard",component:C},{path:"/products",name:"products",component:M},{path:"/products/new",name:"newProduct",component:H}]}),L=n("5c96"),W=n.n(L),q=(n("0fae"),n("b2d6")),F=n.n(q),I=n("bc3a"),K=n.n(I);a["default"].use(W.a,{locale:F.a}),a["default"].prototype.$axios=K.a,a["default"].config.productionTip=!1,new a["default"]({router:J,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(e,t,n){},ab18:function(e,t,n){},e2c0:function(e,t,n){"use strict";var a=n("ab18"),i=n.n(a);i.a},fbf1:function(e,t,n){"use strict";var a=n("262f"),i=n.n(a);i.a}});
//# sourceMappingURL=app.fa410082.js.map