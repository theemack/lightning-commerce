(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)s=i[d],a[s]&&p.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var o={},a={app:0},n=[];function s(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=o,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(r,o,function(t){return e[t]}.bind(null,o));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/admin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1366:function(e,t,r){},2310:function(e,t,r){},3479:function(e,t,r){"use strict";var o=r("6997"),a=r.n(o);a.a},5654:function(e,t,r){"use strict";var o=r("f359"),a=r.n(o);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("el-container",{staticClass:"app-container"},[r("el-aside",{attrs:{width:"280px"}},[r("Navbar")],1),r("el-main",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[r("router-view",{on:{"set-loading":function(t){e.loading=!0},"stop-loading":function(t){e.loading=!1}}})],1)],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar"},[r("el-row",{staticClass:"tac"},[r("el-col",{attrs:{span:24}},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"},on:{open:e.handleOpen,close:e.handleClose}},[r("router-link",{attrs:{to:"/"}},[r("el-menu-item",{attrs:{index:"1"}},[r("i",{staticClass:"el-icon-data-analysis"}),r("span",[e._v("Dashboard")])])],1),r("router-link",{attrs:{to:"/search"}},[r("el-menu-item",{attrs:{index:"3"}},[r("i",{staticClass:"el-icon-search"}),r("span",[e._v("Search")])])],1),r("el-menu-item",{attrs:{index:"2"}},[r("i",{staticClass:"el-icon-user"}),r("span",[e._v("Customers")])]),r("router-link",{attrs:{to:"/products"}},[r("el-menu-item",{attrs:{index:"4"}},[r("i",{staticClass:"el-icon-goods"}),r("span",[e._v("Products")])])],1),r("router-link",{attrs:{to:"/inventory"}},[r("el-menu-item",{attrs:{index:"5"}},[r("i",{staticClass:"el-icon-box"}),r("span",[e._v("Stock Management")])])],1),r("router-link",{attrs:{to:"/promotions"}},[r("el-menu-item",{attrs:{index:"6"}},[r("i",{staticClass:"el-icon-discount"}),r("span",[e._v("Promotions & Discounts")])])],1),r("el-menu-item",{attrs:{index:"7"}},[r("i",{staticClass:"el-icon-truck"}),r("span",[e._v("Orders")])]),r("el-menu-item",{attrs:{index:"8"}},[r("i",{staticClass:"el-icon-money"}),r("span",[e._v("Payments")])])],1)],1)],1)],1)},i=[],c={name:"navbar",data:function(){return{isCollapse:!1}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},l=c,u=r("2877"),d=Object(u["a"])(l,s,i,!1,null,null,null),p=d.exports,m={components:{Navbar:p},data:function(){return{loading:!1}}},g=m,f=(r("5c0b"),Object(u["a"])(g,a,n,!1,null,null,null)),h=f.exports,y=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard"})},b=[],w={name:"dashboard"},_=w,C=Object(u["a"])(_,v,b,!1,null,null,null),k=C.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"products"},[r("h1",{staticClass:"title title--primary"},[e._v("Products")]),r("h3",{staticClass:"title title--secondary"},[e._v("Filter products")]),r("div",{staticClass:"options"},[r("div",{staticClass:"filters"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"Category"}},[r("el-select",{attrs:{multiple:"",placeholder:"Select categories"},model:{value:e.selectedCategories,callback:function(t){e.selectedCategories=t},expression:"selectedCategories"}},e._l(e.categories,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),r("el-form-item",{attrs:{label:"Price range"}},[r("el-slider",{attrs:{range:"",step:5,max:80},model:{value:e.priceRange,callback:function(t){e.priceRange=t},expression:"priceRange"}})],1)],1)],1),r("router-link",{attrs:{to:"/products/new"}},[r("el-button",{attrs:{rounded:"",type:"success"}},[e._v("New Product")])],1)],1),r("ProductGrid",{attrs:{products:e.products}})],1)},$=[],F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product-grid"},e._l(e.products,function(t,o){return r("el-col",{key:o,attrs:{xs:24,sm:12,md:12,lg:6,xl:4}},[r("el-card",{attrs:{"body-style":{padding:"0px"}}},[t.content.images.length>0?r("el-carousel",{attrs:{height:"250px",autoplay:!1}},e._l(t.content.images,function(e,t){return r("el-carousel-item",{key:t},[r("img",{staticClass:"image",attrs:{src:e.path}})])}),1):r("PlaceholderImage",{attrs:{height:"250px"}}),r("div",{staticClass:"card__content"},[r("router-link",{attrs:{to:"/products/"+t._id}},[r("h2",[e._v(e._s(t.content.name))])]),r("div",{staticClass:"category"},[r("h3",[e._v(e._s(t.category.name))]),r("p",[e._v("£"+e._s(t.inventory.price))])]),r("p",[e._v("Current inventory: "+e._s(t.inventory.currentStock))]),r("div",{staticClass:"bottom clearfix"},[r("el-row",[r("el-button",{attrs:{size:"small",icon:"el-icon-edit",round:""}},[e._v("Edit")]),r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete",round:""}},[e._v("Delete")])],1)],1)],1)],1)],1)}),1)},P=[],j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"placeholder-image",style:{height:e.height}},[r("i",{staticClass:"el-icon-picture-outline"})])},S=[],O={name:"placeholder-image",props:["height"]},N=O,A=(r("764c"),Object(u["a"])(N,j,S,!1,null,"3b715371",null)),E=A.exports,I={name:"product-grid",props:["products","loading"],components:{PlaceholderImage:E}},U=I,R=(r("d4f7"),Object(u["a"])(U,F,P,!1,null,"4496b759",null)),D=R.exports,T={name:"products",data:function(){return{selectedCategories:[],categories:[{name:"Tote bags",slug:"tote-bags",description:"we make intriguing bags for intriguing people, and we make them to last",images:[],id:"57329852359235"},{name:"Handbags",slug:"handbags",description:"A classic now, as they always have been and probably always will be",images:[],id:"264235235"}],priceRange:[0,80],products:[]}},components:{ProductGrid:D},mounted:function(){var e=this;this.$emit("set-loading"),this.$axios({method:"get",url:"/api/products"}).then(function(t){console.log(t),e.categories=t.data.categories,e.products=t.data.products,e.$emit("stop-loading")}).catch(function(){e.$message.error("Error loading products. Please contact system administrator"),e.$emit("stop-loading")})}},W=T,q=(r("63be"),Object(u["a"])(W,x,$,!1,null,"0a3ecc4e",null)),z=q.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new-product"},[r("el-page-header",{attrs:{title:"back to all products",content:"New product"},on:{back:function(t){return e.$router.push("/products")}}}),r("h1",{staticClass:"title title--primary"},[e._v("Launch new product")]),r("el-form",{ref:"productForm",attrs:{"label-position":"top",model:e.productForm,rules:e.productFormRules}},[r("el-form-item",{attrs:{label:"Category",prop:"category"}},[r("el-select",{attrs:{placeholder:"Select categories"},model:{value:e.productForm.category,callback:function(t){e.$set(e.productForm,"category",t)},expression:"productForm.category"}},e._l(e.categories,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e._id}})}),1),r("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(t){e.showNewCategoryForm=!0}}},[e._v("Or create a new category")])],1),r("NewCategoryForm",{attrs:{show:e.showNewCategoryForm},on:{created:function(t){return e.createdCategory(t)},discard:function(t){e.showNewCategoryForm=!1}}}),r("el-form-item",{attrs:{label:"Product name",prop:"name"}},[r("el-input",{attrs:{placeholder:"Choose a name"},model:{value:e.productForm.name,callback:function(t){e.$set(e.productForm,"name",t)},expression:"productForm.name"}})],1),r("el-form-item",{attrs:{label:"Url reference",prop:"slug"}},[r("el-input",{attrs:{placeholder:"Choose a url reference"},model:{value:e.productForm.slug,callback:function(t){e.$set(e.productForm,"slug",t)},expression:"productForm.slug"}})],1),r("el-form-item",{attrs:{label:"Product description",prop:"description"}},[r("el-input",{attrs:{type:"textarea",placeholder:"Write a detailed description"},model:{value:e.productForm.description,callback:function(t){e.$set(e.productForm,"description",t)},expression:"productForm.description"}})],1),r("el-form-item",{attrs:{label:"Product images"}},[r("ImageUpload",{on:{finishedUpload:function(t){return e.updateProductImages(t)}}})],1),r("h3",[e._v("Pricing and fulfillment")]),r("el-form-item",{attrs:{label:"Price",prop:"price"}},[e._v("\n            £ "),r("el-input-number",{attrs:{controls:!1,precision:2},model:{value:e.productForm.price,callback:function(t){e.$set(e.productForm,"price",t)},expression:"productForm.price"}})],1),r("el-form-item",{attrs:{label:"Initial stock quantity (can be left as zero and added later if needed)",prop:"stock"}},[r("el-input-number",{attrs:{controls:!1,step:1,precision:0},model:{value:e.productForm.stock,callback:function(t){e.$set(e.productForm,"stock",t)},expression:"productForm.stock"}})],1),e.errors?r("el-alert",{attrs:{title:"Whoops",description:"Please correct the errors above",type:"error","show-icon":""}}):e._e(),r("el-form-item",{staticStyle:{"margin-top":"40px"}},[r("el-button",{attrs:{type:"success",loading:e.launchingProduct},on:{click:function(t){return e.submitForm("productForm")}}},[e._v("Launch product")]),r("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.discardProduct()}}},[e._v("Cancel - discard product")])],1)],1)],1)},M=[],L=(r("7f7f"),r("a481"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"image-upload"},[r("el-upload",{staticClass:"image-upload",attrs:{drag:"",action:"/api/images","on-success":e.finishedUpload,multiple:"",limit:5,"list-type":"picture"}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("Click to upload")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])],1)],1)}),G=[],J={name:"image-upload",methods:{finishedUpload:function(e){this.$emit("finishedUpload",e)}}},Y=J,H=Object(u["a"])(Y,L,G,!1,null,null,null),K=H.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new-category-form"},[r("el-dialog",{attrs:{title:"New category",visible:e.show},on:{"update:visible":function(t){e.show=t}}},[r("el-form",{ref:"newCategoryForm",attrs:{model:e.newCategoryForm,rules:e.newCategoryFormRules}},[r("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"Category name ",prop:"name"}},[r("el-input",{model:{value:e.newCategoryForm.name,callback:function(t){e.$set(e.newCategoryForm,"name",t)},expression:"newCategoryForm.name"}})],1),r("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"Category url reference",prop:"slug"}},[r("el-input",{model:{value:e.newCategoryForm.slug,callback:function(t){e.$set(e.newCategoryForm,"slug",t)},expression:"newCategoryForm.slug"}})],1),r("el-form-item",{attrs:{label:"Category description",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.newCategoryForm.description,callback:function(t){e.$set(e.newCategoryForm,"description",t)},expression:"newCategoryForm.description"}})],1),r("el-form-item",{attrs:{label:"Category images"}},[r("ImageUpload",{on:{finishedUpload:function(t){return e.updateCategoryImages(t)}}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.$emit("discard")}}},[e._v("Discard")]),r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.createCategory("newCategoryForm")}}},[e._v("Create category")])],1)],1)],1)},V=[],X={props:["show"],components:{ImageUpload:K},data:function(){return{newCategoryFormRules:{name:[{required:!0,message:"Please choose a product name",trigger:"blur"},{max:14,message:"Category name must be less than 15 characters",trigger:"blur"}],slug:[{required:!0,message:"Please choose a url reference",trigger:"blur"},{min:3,max:20,message:"url reference must be between 3 and 20 characters",trigger:"blur"},{validator:this.validateSlug,message:"Url reference cannot contain white spaces",trigger:"blur"}],description:[{required:!0,message:"Please write a description",trigger:"blur"},{max:400,message:"description cannot be more than 400 characters",trigger:"blur"}]},newCategoryForm:{name:"",slug:"",description:"",images:[]}}},methods:{createCategory:function(e){var t=this;this.$refs[e].validate(function(r){r&&t.$axios.post("/api/categories",{name:t.newCategoryForm.name,description:t.newCategoryForm.description,slug:t.newCategoryForm.slug,images:t.newCategoryForm.images}).then(function(r){t.$emit("created",r.data),t.$message.success("Category created successfully. You can now select the category from the dropdown menu"),t.$refs[e].resetFields()}).catch(function(){t.$message.error("Whoops, something went wrong trying to create a new category. Please reload the page and try again, or contact the system administrator if issue persists.")})})},updateCategoryImages:function(e){this.newCategoryForm.images.push(e)}}},Z=X,ee=Object(u["a"])(Z,Q,V,!1,null,null,null),te=ee.exports,re={name:"new-product",components:{ImageUpload:K,NewCategoryForm:te},data:function(){return{showNewCategoryForm:!1,productForm:{name:"",description:"",slug:"",price:0,stock:0,weight:0,height:0,length:0,width:0,category:"",images:[],tmpDir:null},slugChanged:!1,errors:!1,categories:[],productFormRules:{name:[{required:!0,message:"Please choose a product name",trigger:"blur"},{min:5,max:31,message:"Product name must be between 5 and 30 characters",trigger:"blur"}],slug:[{required:!0,message:"Please choose a url reference",trigger:"blur"},{min:5,max:40,message:"url reference must be between 5 and 40 characters",trigger:"blur"},{validator:this.validateSlug,message:"Url reference cannot contain white spaces",trigger:"blur"}],description:[{required:!0,message:"Please write a description",trigger:"blur"}],price:[{required:!0,message:"Please choose a product price",trigger:"blur"}]},launchingProduct:!1}},mounted:function(){var e=this;this.$axios.get("/api/categories").then(function(t){e.categories=t.data}).catch(function(){e.$message.error("Whoops, error loading categories. Please contact the system administrator")})},methods:{autoCreateSlug:function(e){this.slugChanged||(this.slug=e.replace(/ /g,"-"))},handleExceed:function(e,t){this.$message.warning("The limit is 3, you selected ".concat(e.length," files this time, add up to ").concat(e.length+t.length," totally"))},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.errors=!0,!1;t.errors=!1;var r=t.productForm;t.launchingProduct=!0,t.$axios.post("/api/products",{content:{name:r.name,description:r.description,slug:r.slug,images:r.images},inventory:{price:r.price,totalStock:r.stock,inFulfillment:0},category:r.category}).then(function(){t.launchingProduct=!1,t.$message.success("Great! You launched a new product - "+r.name),t.$router.push("/products")}).catch(function(){t.launchingProduct=!1,t.$message.error("Whoops, something went wrong launching the product :(. Please check that you have filled out the form correctly and try again, then contact your system administrator")})})},createdCategory:function(e){this.categories.push(e),this.showNewCategoryForm=!1},discardProduct:function(){var e=this;this.$axios.delete("/api/images").then(function(){e.$router.push("/products")}).catch(function(){e.$message.warning("Warning: couldn't empty temporary image cache folder. This could cause issues in the future. Please make your system administrator aware of the issue."),e.$router.push("/products")})},updateProductImages:function(e){this.productForm.images.push(e)},validateSlug:function(e,t,r){t.indexOf(" ")>-1?r(new Error("Url reference cannot contain spaces")):r()}}},oe=re,ae=(r("5654"),Object(u["a"])(oe,B,M,!1,null,null,null)),ne=ae.exports,se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new-product"},[e.product?r("div",[r("el-page-header",{attrs:{title:"back to all products",content:e.product.content.name},on:{back:function(t){return e.$router.push("/products")}}}),r("h1",{staticClass:"title title--primary"},[e._v(e._s(e.product.content.name))]),r("el-form",[r("el-form-item",{attrs:{label:"Category",prop:"category"}},[r("el-select",{attrs:{placeholder:"Select categories"},model:{value:e.product.category,callback:function(t){e.$set(e.product,"category",t)},expression:"product.category"}},e._l(e.categories,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e._id}})}),1),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.update("category","category",e.product.category)}}},[e._v("Update category")]),r("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(t){t.preventDefault(),e.showNewCategoryForm=!0}}},[e._v("Or create a new category")])],1)],1),r("NewCategoryForm",{attrs:{show:e.showNewCategoryForm},on:{created:function(t){return e.createdCategory(t)},discard:function(t){e.showNewCategoryForm=!1}}}),r("h2",{staticClass:"title title--secondary"},[e._v("Images")]),e.product.content.images.length>0?r("el-carousel",{attrs:{height:"250px",autoplay:!1}},e._l(e.product.content.images,function(e,t){return r("el-carousel-item",{key:t},[r("img",{staticClass:"image",attrs:{src:e.path}})])}),1):r("PlaceholderImage",{attrs:{height:"250px"}}),r("ImageUpload",{on:{finishedUpload:function(e){}}}),r("h2",{staticClass:"title title--secondary"},[e._v("Price and promotions")]),e.changing.price?r("div",[r("el-form",{ref:"newPriceForm",attrs:{"label-position":"left","label-width":"80px"}},[r("el-form-item",{attrs:{label:"New price"}},[e._v("\n                    £ "),r("el-input-number",{staticStyle:{width:"110px"},attrs:{max:25e3,precision:2,controls:!1,step:1},model:{value:e.product.inventory.price,callback:function(t){e.$set(e.product.inventory,"price",t)},expression:"product.inventory.price"}})],1),r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.update("price","inventory.price",e.product.inventory.price)}}},[e._v("Update price")]),r("el-button",{on:{click:function(t){e.changing.price=!1}}},[e._v("Cancel")])],1)],1):r("div",[r("p",[e._v("Product currently priced at  "),r("strong",{staticStyle:{"font-size":"1.1em",color:"#6d0000"}},[e._v("£"+e._s(e.product.inventory.price))])]),r("el-button",{on:{click:function(t){e.changing.price=!0}}},[e._v("Change price")])],1),r("p",[e._v("No promotions currently active on this product")]),r("router-link",{attrs:{to:"/promotions/new"}},[r("el-button",{attrs:{type:"primary"}},[e._v("Create a promotion")])],1),r("h2",[e._v("Inventory")]),r("el-table",{staticStyle:{width:"500px"},attrs:{data:e.inventoryData}},[r("el-table-column",{attrs:{prop:"total",label:"Total stock"}}),r("el-table-column",{attrs:{prop:"inFulfillment",label:"In fulfillment"}}),r("el-table-column",{attrs:{prop:"available",label:"Available stock"}})],1),r("router-link",{attrs:{to:"/inventory/new"}},[r("el-button",{attrs:{type:"primary"}},[e._v("Add or remove stock")])],1),e._m(0),r("h2",{staticClass:"title title--secondary"},[e._v("Orders")])],1):e._e()])},ie=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Note that "),r("strong",[e._v("total stock")]),e._v(" refers to all physical stock, including stock that is in placed orders that haven't yet been shipped. "),r("strong",[e._v("In fulfillment")]),e._v(" refers to stock in orders that have been placed, but haven't been shipped yet. "),r("strong",[e._v("Available stock")]),e._v(" refers to the remaining stock which is actually available to be ordered - this is the number shown on the public facing site.")])}],ce={name:"product",props:["id"],components:{NewCategoryForm:te},data:function(){return{changing:{price:!1,name:!1,category:!1,stock:!1},categories:[],showNewCategoryForm:!1,product:null}},computed:{inventoryData:function(){return[{total:this.product.inventory.totalStock,available:this.product.inventory.totalStock-this.product.inventory.inFulfillment,inFulfillment:this.product.inventory.inFulfillment}]}},mounted:function(){var e=this;24!==this.id.length?(this.$router.push("/products"),this.$message.error("Whoops, that product doesn't seem to exist. Redirecting to products page.")):(this.$emit("set-loading"),this.$axios.get("/api/products/"+this.id).then(function(t){e.product=t.data,e.$emit("stop-loading"),e.$axios.get("/api/categories").then(function(t){e.categories=t.data}).catch(function(){e.$message.error("Whoops, error loading categories. Please contact the system administrator")})}).catch(function(){e.$router.push("/products"),e.$message.error("Whoops, looks like that product doesn't exist. Redirecting to products page."),e.$emit("stop-loading")}))},methods:{update:function(e,t,r){var o=this;this.$axios.put("/api/products/"+this.product._id,{toUpdate:t,updateWith:r}).then(function(){o.$message.success(e+" successfully updated. All new orders will use the updated price."),o.changing[e]=!1}).catch(function(){o.$message.error("Error updating "+e+". Please contact your system administrator.")})},createdCategory:function(e){this.categories.push(e),this.showNewCategoryForm=!1}}},le=ce,ue=(r("e1e1"),Object(u["a"])(le,se,ie,!1,null,"fefaedd8",null)),de=ue.exports,pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inventory"})},me=[],ge={},fe=Object(u["a"])(ge,pe,me,!1,null,null,null),he=fe.exports,ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new-stock-adjustment"},[r("el-page-header",{attrs:{title:"back to stock management",content:"New stock adjustment"},on:{back:function(t){return e.$router.push("/inventory")}}}),r("h1",{staticClass:"title title--primary"},[e._v("New stock adjustment")]),r("p",[e._v("Create a new manual increase or decrease of stock. Stock adjustments are recorded to the database to easily keep track of what's happening to your inventory.")]),r("el-form",{ref:"form",attrs:{"label-position":"top",model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"Adjument date"}},[r("el-date-picker",{attrs:{type:"datetime",placeholder:"Select date and time"},model:{value:e.form.datetime,callback:function(t){e.$set(e.form,"datetime",t)},expression:"form.datetime"}}),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(t){e.form.datetime=Date.now()}}},[e._v("Reset date and time to now")])],1),r("el-form-item",{attrs:{label:"Adjustment type"}},[r("el-radio",{attrs:{label:"increase"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("i",{staticClass:"el-icon-sell"}),e._v("  Increase")]),r("el-radio",{attrs:{label:"decrease"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("i",{staticClass:"el-icon-sold-out"}),e._v("  Reduction")])],1),r("el-form-item",{attrs:{label:"Reason for adjustment"}},[r("el-select",{attrs:{placeholder:"Select reason"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}},e._l(e.reasons[e.form.type],function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),r("el-divider"),r("el-form-item",{attrs:{label:"Add products to be adjusted"}},[r("el-select",{attrs:{placeholder:"Select a product"},model:{value:e.toAdjust,callback:function(t){e.toAdjust=t},expression:"toAdjust"}},e._l(e.products,function(e){return r("el-option",{key:e._id,attrs:{label:e.content.name,value:e}})}),1),r("el-collapse-transition",[e.toAdjust?r("el-form",[r("h3",[e._v(e._s(e.toAdjust.content.name))]),r("el-form-item",{attrs:{label:"increase"===e.form.type?"Increase stock by":"Reduce stock by"}},[r("el-input-number",{attrs:{min:1,step:1},model:{value:e.adjustBy,callback:function(t){e.adjustBy=t},expression:"adjustBy"}})],1),r("el-button",{on:{click:function(t){return e.confirmProductAdjustment()}}},[e._v("Add")])],1):e._e()],1),r("el-table",{staticStyle:{width:"400px"},attrs:{data:e.productTable}},[r("el-table-column",{attrs:{prop:"name",label:"Product"}}),r("el-table-column",{attrs:{prop:"change",label:"Change"}}),r("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.removeProduct(t.$index)}}},[e._v("Delete "),r("i",{staticClass:"el-icon-delete"})])]}}])})],1)],1),r("el-divider"),r("el-form-item",{attrs:{label:"Adjustment notes - record any relevant information about the delivery or reduction of stock"}},[r("el-input",{attrs:{type:"textarea"}})],1)],1)],1)},ve=[],be=(r("6b54"),{data:function(){return{form:{datetime:Date.now(),type:"increase",reason:"",products:[]},productTable:[],reasons:{increase:["Stock delivery","Counting error"],decrease:["Sale(s) through untracked avenue","Defective/damaged product(s)","Loss/theft","Counting error"]},rules:{formRules:{}},products:null,showProductAdjustmentForm:!1,toAdjust:null,adjustBy:1}},mounted:function(){var e=this;this.$emit("set-loading"),this.$axios({method:"get",url:"/api/products"}).then(function(t){e.products=t.data.products,e.$emit("stop-loading")}).catch(function(){e.$message.error("Error loading products. Please contact system administrator"),e.$emit("stop-loading")})},methods:{confirmProductAdjustment:function(){var e=this.type===this.delivery?this.adjustBy:-1*this.adjustBy;this.form.products.push({id:this.toAdjust._id,change:e});var t=e<0?e.toString():"+ "+e.toString();this.productTable.push({name:this.toAdjust.content.name,change:t}),this.toAdjust=null},removeProduct:function(e){console.log("removing"),console.log(e),this.form.products.slice(e,1),this.productTable.slice(e,1)}}}),we=be,_e=(r("3479"),Object(u["a"])(we,ye,ve,!1,null,"6fa1f012",null)),Ce=_e.exports,ke=r("bc3a"),xe=r.n(ke);o["default"].use(y["a"]);var $e=new y["a"]({mode:"history",base:"/admin/",routes:[{path:"/",name:"dashboard",component:k},{path:"/products",name:"products",component:z},{path:"/products/new",name:"newProduct",component:ne},{path:"/products/:id",component:de,props:!0},{path:"/inventory",name:"inventory",component:he},{path:"/inventory/new",name:"new stock adjustment",component:Ce}],methods:{setData:function(e,t){e?this.error=e.message:this.product=t}}}),Fe=r("5c96"),Pe=r.n(Fe),je=(r("0fae"),r("b2d6")),Se=r.n(je);o["default"].use(Pe.a,{locale:Se.a}),o["default"].prototype.$axios=xe.a,o["default"].config.productionTip=!1,new o["default"]({router:$e,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var o=r("5e27"),a=r.n(o);a.a},"5e27":function(e,t,r){},"63be":function(e,t,r){"use strict";var o=r("2310"),a=r.n(o);a.a},6997:function(e,t,r){},"764c":function(e,t,r){"use strict";var o=r("fe4a"),a=r.n(o);a.a},af98:function(e,t,r){},d4f7:function(e,t,r){"use strict";var o=r("af98"),a=r.n(o);a.a},e1e1:function(e,t,r){"use strict";var o=r("1366"),a=r.n(o);a.a},f359:function(e,t,r){},fe4a:function(e,t,r){}});
//# sourceMappingURL=app.e038b724.js.map