(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)s=i[d],o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},o={app:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/admin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2310:function(e,t,r){},"4b41":function(e,t,r){"use strict";var a=r("4cc7"),o=r.n(a);o.a},"4cc7":function(e,t,r){},5654:function(e,t,r){"use strict";var a=r("f359"),o=r.n(a);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-container",{staticClass:"app-container"},[r("el-aside",{attrs:{width:"280px"}},[r("Navbar")],1),r("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[r("router-view",{on:{"set-loading":function(t){e.loading=!0},"stop-loading":function(t){e.loading=!1}}})],1)],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar"},[r("el-row",{staticClass:"tac"},[r("el-col",{attrs:{span:24}},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"},on:{open:e.handleOpen,close:e.handleClose}},[r("router-link",{attrs:{to:"/"}},[r("el-menu-item",{attrs:{index:"1"}},[r("i",{staticClass:"el-icon-data-analysis"}),r("span",[e._v("Dashboard")])])],1),r("router-link",{attrs:{to:"/search"}},[r("el-menu-item",{attrs:{index:"3"}},[r("i",{staticClass:"el-icon-search"}),r("span",[e._v("Search")])])],1),r("el-menu-item",{attrs:{index:"2"}},[r("i",{staticClass:"el-icon-user"}),r("span",[e._v("Customers")])]),r("router-link",{attrs:{to:"/products"}},[r("el-menu-item",{attrs:{index:"4"}},[r("i",{staticClass:"el-icon-goods"}),r("span",[e._v("Products")])])],1),r("router-link",{attrs:{to:"/promotions"}},[r("el-menu-item",{attrs:{index:"5"}},[r("i",{staticClass:"el-icon-discount"}),r("span",[e._v("Promotions & Discounts")])])],1),r("el-menu-item",{attrs:{index:"6"}},[r("i",{staticClass:"el-icon-box"}),r("span",[e._v("Orders")])]),r("el-menu-item",{attrs:{index:"7"}},[r("i",{staticClass:"el-icon-money"}),r("span",[e._v("Payments")])])],1)],1)],1)],1)},i=[],c={name:"navbar",data:function(){return{isCollapse:!1}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},l=c,u=r("2877"),d=Object(u["a"])(l,s,i,!1,null,null,null),p=d.exports,m={components:{Navbar:p},data:function(){return{loading:!1}}},g=m,h=(r("5c0b"),Object(u["a"])(g,o,n,!1,null,null,null)),f=h.exports,v=r("8c4f"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard"})},y=[],w={name:"dashboard"},_=w,C=Object(u["a"])(_,b,y,!1,null,null,null),x=C.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"products"},[r("h1",{staticClass:"title title--primary"},[e._v("Products")]),r("h3",{staticClass:"title title--secondary"},[e._v("Filter products")]),r("div",{staticClass:"options"},[r("div",{staticClass:"filters"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"Category"}},[r("el-select",{attrs:{multiple:"",placeholder:"Select categories"},model:{value:e.selectedCategories,callback:function(t){e.selectedCategories=t},expression:"selectedCategories"}},e._l(e.categories,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),r("el-form-item",{attrs:{label:"Price range"}},[r("el-slider",{attrs:{range:"",step:5,max:80},model:{value:e.priceRange,callback:function(t){e.priceRange=t},expression:"priceRange"}})],1)],1)],1),r("router-link",{attrs:{to:"/products/new"}},[r("el-button",{attrs:{rounded:"",type:"success"}},[e._v("New Product")])],1)],1),r("ProductGrid",{attrs:{products:e.products}})],1)},P=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product-grid"},e._l(e.products,function(t,a){return r("el-col",{key:a,attrs:{xs:24,sm:12,md:12,lg:6,xl:4}},[r("el-card",{attrs:{"body-style":{padding:"0px"}}},[t.content.images.length>0?r("el-carousel",{attrs:{height:"250px",autoplay:!1}},e._l(t.content.images,function(e,t){return r("el-carousel-item",{key:t},[r("img",{staticClass:"image",attrs:{src:e.path}})])}),1):r("PlaceholderImage",{attrs:{height:"250px"}}),r("div",{staticClass:"card__content"},[r("router-link",{attrs:{to:"/products/"+t._id}},[r("h2",[e._v(e._s(t.content.name))])]),r("div",{staticClass:"category"},[r("h3",[e._v(e._s(t.category.name))]),r("p",[e._v("£"+e._s(t.inventory.price))])]),r("p",[e._v("Current inventory: "+e._s(t.inventory.currentStock))]),r("div",{staticClass:"bottom clearfix"},[r("el-row",[r("el-button",{attrs:{size:"small",icon:"el-icon-edit",round:""}},[e._v("Edit")]),r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete",round:""}},[e._v("Delete")])],1)],1)],1)],1)],1)}),1)},F=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"placeholder-image",style:{height:e.height}},[r("i",{staticClass:"el-icon-picture-outline"})])},O=[],j={name:"placeholder-image",props:["height"]},E=j,N=(r("764c"),Object(u["a"])(E,S,O,!1,null,"3b715371",null)),R=N.exports,I={name:"product-grid",props:["products","loading"],components:{PlaceholderImage:R}},W=I,D=(r("d4f7"),Object(u["a"])(W,$,F,!1,null,"4496b759",null)),q=D.exports,z={name:"products",data:function(){return{selectedCategories:[],categories:[{name:"Tote bags",slug:"tote-bags",description:"we make intriguing bags for intriguing people, and we make them to last",images:[],id:"57329852359235"},{name:"Handbags",slug:"handbags",description:"A classic now, as they always have been and probably always will be",images:[],id:"264235235"}],priceRange:[0,80],products:[]}},components:{ProductGrid:q},mounted:function(){var e=this;this.$emit("set-loading"),this.$axios({method:"get",url:"/api/products"}).then(function(t){console.log(t),e.categories=t.data.categories,e.products=t.data.products,e.$emit("stop-loading")}).catch(function(){e.$message.error("Error loading products. Please contact system administrator"),e.$emit("stop-loading")})}},T=z,U=(r("63be"),Object(u["a"])(T,k,P,!1,null,"0a3ecc4e",null)),A=U.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new-product"},[r("el-page-header",{attrs:{title:"back to all products",content:"New product"},on:{back:function(t){return e.$router.push("/products")}}}),r("h1",{staticClass:"title title--primary"},[e._v("Launch new product")]),r("el-form",{ref:"productForm",attrs:{"label-position":"top",model:e.productForm,rules:e.productFormRules}},[r("el-form-item",{attrs:{label:"Category",prop:"category"}},[r("el-select",{attrs:{placeholder:"Select categories"},model:{value:e.productForm.category,callback:function(t){e.$set(e.productForm,"category",t)},expression:"productForm.category"}},e._l(e.categories,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e._id}})}),1),r("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(t){e.showNewCategoryForm=!0}}},[e._v("Or create a new category")])],1),r("el-dialog",{attrs:{title:"New category",visible:e.showNewCategoryForm},on:{"update:visible":function(t){e.showNewCategoryForm=t}}},[r("el-form",{ref:"newCategoryForm",attrs:{model:e.newCategoryForm,rules:e.newCategoryFormRules}},[r("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"Category name ",prop:"name"}},[r("el-input",{model:{value:e.newCategoryForm.name,callback:function(t){e.$set(e.newCategoryForm,"name",t)},expression:"newCategoryForm.name"}})],1),r("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"Category url reference",prop:"slug"}},[r("el-input",{model:{value:e.newCategoryForm.slug,callback:function(t){e.$set(e.newCategoryForm,"slug",t)},expression:"newCategoryForm.slug"}})],1),r("el-form-item",{attrs:{label:"Category description",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.newCategoryForm.description,callback:function(t){e.$set(e.newCategoryForm,"description",t)},expression:"newCategoryForm.description"}})],1),r("el-form-item",{attrs:{label:"Category images"}},[r("el-upload",{staticClass:"image-upload",attrs:{action:"/api/images","on-success":e.loadImages,multiple:"",limit:3,"on-exceed":e.handleExceed,"list-type":"picture"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("Click to upload")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])],1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.showNewCategoryForm=!1}}},[e._v("Discard")]),r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.createCategory("newCategoryForm")}}},[e._v("Create category")])],1)],1),r("el-form-item",{attrs:{label:"Product name",prop:"name"}},[r("el-input",{attrs:{placeholder:"Choose a name"},model:{value:e.productForm.name,callback:function(t){e.$set(e.productForm,"name",t)},expression:"productForm.name"}})],1),r("el-form-item",{attrs:{label:"Url reference",prop:"slug"}},[r("el-input",{attrs:{placeholder:"Choose a url reference"},model:{value:e.productForm.slug,callback:function(t){e.$set(e.productForm,"slug",t)},expression:"productForm.slug"}})],1),r("el-form-item",{attrs:{label:"Product description",prop:"description"}},[r("el-input",{attrs:{type:"textarea",placeholder:"Write a detailed description"},model:{value:e.productForm.description,callback:function(t){e.$set(e.productForm,"description",t)},expression:"productForm.description"}})],1),r("el-form-item",{attrs:{label:"Product images"}},[r("el-upload",{staticClass:"image-upload",attrs:{drag:"",action:"/api/images","on-success":e.updateProductImages,multiple:"",limit:5,"on-exceed":e.handleExceed,"list-type":"picture"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("Click to upload")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])],1)],1),r("h3",[e._v("Pricing and fulfillment")]),r("el-form-item",{attrs:{label:"Price",prop:"price"}},[e._v("\n            £ "),r("el-input-number",{attrs:{controls:!1,precision:2},model:{value:e.productForm.price,callback:function(t){e.$set(e.productForm,"price",t)},expression:"productForm.price"}})],1),e.errors?r("el-alert",{attrs:{title:"Whoops",description:"Please correct the errors above",type:"error","show-icon":""}}):e._e(),r("el-form-item",{staticStyle:{"margin-top":"40px"}},[r("el-button",{attrs:{type:"success",loading:e.launchingProduct},on:{click:function(t){return e.submitForm("productForm")}}},[e._v("Launch product")]),r("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.discardProduct()}}},[e._v("Cancel - discard product")])],1)],1)],1)},G=[],L=(r("7f7f"),r("a481"),{name:"new-product",data:function(){return{showNewCategoryForm:!1,productForm:{name:"",description:"",slug:"",price:0,weight:0,height:0,length:0,width:0,category:"",images:[]},newCategoryForm:{name:"",slug:"",description:""},slugChanged:!1,errors:!1,categories:[],newCategoryFormRules:{name:[{required:!0,message:"Please choose a product name",trigger:"blur"},{max:14,message:"Category name must be less than 15 characters",trigger:"blur"}],slug:[{required:!0,message:"Please choose a url reference",trigger:"blur"},{min:3,max:20,message:"url reference must be between 3 and 20 characters",trigger:"blur"},{validator:this.validateSlug,message:"Url reference cannot contain white spaces",trigger:"blur"}],description:[{required:!0,message:"Please write a description",trigger:"blur"},{max:400,message:"description cannot be more than 400 characters",trigger:"blur"}]},productFormRules:{name:[{required:!0,message:"Please choose a product name",trigger:"blur"},{min:5,max:31,message:"Product name must be between 5 and 30 characters",trigger:"blur"}],slug:[{required:!0,message:"Please choose a url reference",trigger:"blur"},{min:5,max:40,message:"url reference must be between 5 and 40 characters",trigger:"blur"},{validator:this.validateSlug,message:"Url reference cannot contain white spaces",trigger:"blur"}],description:[{required:!0,message:"Please write a description",trigger:"blur"}],price:[{required:!0,message:"Please choose a product price",trigger:"blur"}]},launchingProduct:!1}},mounted:function(){var e=this;this.$axios.get("/api/categories").then(function(t){e.categories=t.data}).catch(function(){e.$message.error("Whoops, error loading categories. Please contact the system administrator")})},methods:{autoCreateSlug:function(e){this.slugChanged||(this.slug=e.replace(/ /g,"-"))},handleExceed:function(e,t){this.$message.warning("The limit is 3, you selected ".concat(e.length," files this time, add up to ").concat(e.length+t.length," totally"))},createCategory:function(e){var t=this;this.$refs[e].validate(function(e){e&&t.$axios.post("/api/categories",{name:t.newCategoryForm.name,description:t.newCategoryForm.description,slug:t.newCategoryForm.slug,images:[]}).then(function(e){t.categories.push(e.data),t.showNewCategoryForm=!1,t.$message.success("Category created successfully. You can now select the category from the dropdown menu")}).catch(function(){t.$message.error("Whoops, something went wrong trying to create a new category. Please try again, then contact the system administrator")})})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.errors=!0,!1;t.errors=!1;var r=t.productForm;t.launchingProduct=!0,t.$axios.post("/api/products",{content:{name:r.name,description:r.description,slug:r.slug,images:r.images},inventory:{price:r.price},category:r.category}).then(function(){t.launchingProduct=!1,t.$message.success("Great! You launched a new product - "+r.name),t.$router.push("/products")}).catch(function(){t.launchingProduct=!1,t.$message.error("Whoops, something went wrong launching the product :(. Please check that you have filled out the form correctly and try again, then contact your system administrator")})})},discardProduct:function(){var e=this;this.$axios.delete("/api/images").then(function(){e.$router.push("/products")}).catch(function(){e.$message.warning("Warning: couldn't empty temporary image cache folder. This could cause issues in the future. Please make your system administrator aware of the issue."),e.$router.push("/products")})},updateProductImages:function(e,t,r){this.productForm.images.push(e)},validateSlug:function(e,t,r){t.indexOf(" ")>-1?r(new Error("Url reference cannot contain spaces")):r()}}}),J=L,Y=(r("5654"),Object(u["a"])(J,M,G,!1,null,null,null)),H=Y.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new-product"},[r("el-page-header",{attrs:{title:"back to all products",content:e.product.content.name},on:{back:function(t){return e.$router.push("/products")}}}),e.product?r("el-container",[r("h1",{staticClass:"title title--primary"},[e._v(e._s(e.product.content.name))]),r("h2",{staticClass:"title title--secondary"},[e._v("Images")]),e.product.content.images.length>0?r("el-carousel",{attrs:{height:"250px",autoplay:!1}},e._l(e.product.content.images,function(e,t){return r("el-carousel-item",{key:t},[r("img",{staticClass:"image",attrs:{src:e.path}})])}),1):e._e(),r("h2",{staticClass:"title title--secondary"},[e._v("Price and promotions")]),e.changing.price?r("div",[r("el-form",{ref:"newPriceForm",attrs:{"label-position":"left","label-width":"80px"},on:{submit:function(t){return t.preventDefault(),e.updatePrice()}}},[r("el-form-item",{attrs:{label:"New price"}},[e._v("\n                    £ "),r("el-input-number",{staticStyle:{width:"110px"},attrs:{max:25e3,precision:2,controls:!1,step:1},model:{value:e.newPrice,callback:function(t){e.newPrice=t},expression:"newPrice"}})],1),r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.updatePrice()}}},[e._v("Update price")]),r("el-button",{on:{click:function(t){e.changing.price=!1}}},[e._v("Cancel")])],1)],1):r("div",[r("p",[e._v("Product currently priced at  "),r("strong",{staticStyle:{"font-size":"1.1em",color:"#6d0000"}},[e._v("£"+e._s(e.product.inventory.price))])]),r("el-button",{on:{click:function(t){e.changing.price=!0}}},[e._v("Change price")])],1),r("p",[e._v("No promotions currently active on this product")]),r("router-link",{attrs:{to:"/promotions/new"}},[r("el-button",{attrs:{type:"primary"}},[e._v("Create a promotion")])],1),r("h2",[e._v("Inventory")]),r("el-table",{staticStyle:{width:"500px"},attrs:{data:e.inventoryData}},[r("el-table-column",{attrs:{prop:"total",label:"Total stock"}}),r("el-table-column",{attrs:{prop:"pending",label:"In fulfillment"}}),r("el-table-column",{attrs:{prop:"available",label:"Available stock"}})],1),r("p",[e._v("Note that "),r("strong",[e._v("total stock")]),e._v(" refers to all physical stock, including stock that is in placed orders that haven't yet been shipped. "),r("strong",[e._v("In fulfillment")]),e._v(" refers to stock in orders that have been placed, but haven't been shipped yet. "),r("strong",[e._v("Available stock")]),e._v(" refers to the remaining stock which is actually available to be ordered - this is the number shown on the public facing site.")]),r("h2",{staticClass:"title title--secondary"},[e._v("Orders")])],1):e._e()],1)},K=[],Q={name:"product",props:["id"],data:function(){return{changing:{price:!1,name:!1,category:!1,stock:!1},product:null,newPrice:null}},computed:{inventoryData:function(){return[{total:this.product.inventory.totalStock,available:this.product.inventory.availableStock,pending:this.product.inventory.totalStock-this.product.inventory.availableStock}]}},mounted:function(){var e=this;24!==this.id.length?(this.$router.push("/products"),this.$message.error("Whoops, that product doesn't seem to exist. Redirecting to products page.")):(this.$emit("set-loading"),this.$axios.get("/api/products/"+this.id).then(function(t){e.product=t.data,e.newPrice=t.data.inventory.price,e.$emit("stop-loading")}).catch(function(){e.$router.push("/products"),e.$message.error("Whoops, looks like that product doesn't exist. Redirecting to products page."),e.$emit("stop-loading")}))},methods:{updatePrice:function(){var e=this;console.log(this.newPrice),this.$axios.put("/api/products/"+this.product._id,{toUpdate:"inventory.price",updateWith:this.newPrice}).then(function(){e.$message.success("Price successfully updated. All new orders will use the updated price.")}).catch(function(){e.$message.error("Error updating price. Please contact your system administrator.")})}}},V=Q,X=(r("4b41"),Object(u["a"])(V,B,K,!1,null,"6fcf2d8b",null)),Z=X.exports,ee=r("bc3a"),te=r.n(ee);a["default"].use(v["a"]);var re=new v["a"]({mode:"history",base:"/admin/",routes:[{path:"/",name:"dashboard",component:x},{path:"/products",name:"products",component:A},{path:"/products/new",name:"newProduct",component:H},{path:"/products/:id",component:Z,props:!0}],methods:{setData:function(e,t){e?this.error=e.message:this.product=t}}}),ae=r("5c96"),oe=r.n(ae),ne=(r("0fae"),r("b2d6")),se=r.n(ne);a["default"].use(oe.a,{locale:se.a}),a["default"].prototype.$axios=te.a,a["default"].config.productionTip=!1,new a["default"]({router:re,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("5e27"),o=r.n(a);o.a},"5e27":function(e,t,r){},"63be":function(e,t,r){"use strict";var a=r("2310"),o=r.n(a);o.a},"764c":function(e,t,r){"use strict";var a=r("fe4a"),o=r.n(a);o.a},af98:function(e,t,r){},d4f7:function(e,t,r){"use strict";var a=r("af98"),o=r.n(a);o.a},f359:function(e,t,r){},fe4a:function(e,t,r){}});
//# sourceMappingURL=app.012ceebc.js.map