(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var r={},a={app:0},n=[];function s(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/admin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1b69":function(t,e,o){"use strict";var r=o("5746"),a=o.n(r);a.a},"502a":function(t,e,o){"use strict";var r=o("cc19"),a=o.n(r);a.a},"511b":function(t,e,o){"use strict";var r=o("fb1d"),a=o.n(r);a.a},"513e":function(t,e,o){"use strict";var r=o("b688"),a=o.n(r);a.a},5654:function(t,e,o){"use strict";var r=o("f359"),a=o.n(r);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("el-container",{staticClass:"app-container"},[o("el-aside",{attrs:{width:"280px"}},[o("Navbar")],1),o("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"Loading...","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[o("router-view",{on:{"set-loading":function(e){return t.setLoading()},"stop-loading":function(e){return t.stopLoading()}}})],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar"},[o("el-row",{staticClass:"tac"},[o("el-col",{attrs:{span:24}},[o("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"},on:{open:t.handleOpen,close:t.handleClose}},[o("router-link",{attrs:{to:"/"}},[o("el-menu-item",{attrs:{index:"1"}},[o("i",{staticClass:"el-icon-data-analysis"}),o("span",[t._v("Dashboard")])])],1),o("router-link",{attrs:{to:"/search"}},[o("el-menu-item",{attrs:{index:"3"}},[o("i",{staticClass:"el-icon-search"}),o("span",[t._v("Search")])])],1),o("el-menu-item",{attrs:{index:"2"}},[o("i",{staticClass:"el-icon-user"}),o("span",[t._v("Customers")])]),o("router-link",{attrs:{to:"/products"}},[o("el-menu-item",{attrs:{index:"4"}},[o("i",{staticClass:"el-icon-goods"}),o("span",[t._v("Products")])])],1),o("router-link",{attrs:{to:"/inventory"}},[o("el-menu-item",{attrs:{index:"5"}},[o("i",{staticClass:"el-icon-box"}),o("span",[t._v("Stock Management")])])],1),o("router-link",{attrs:{to:"/promotions"}},[o("el-menu-item",{attrs:{index:"6"}},[o("i",{staticClass:"el-icon-discount"}),o("span",[t._v("Promotions & Discounts")])])],1),o("el-menu-item",{attrs:{index:"7"}},[o("i",{staticClass:"el-icon-truck"}),o("span",[t._v("Orders")])]),o("el-menu-item",{attrs:{index:"8"}},[o("i",{staticClass:"el-icon-money"}),o("span",[t._v("Payments")])])],1)],1)],1)],1)},i=[],c={name:"navbar",data:function(){return{isCollapse:!1}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},l=c,u=o("2877"),d=Object(u["a"])(l,s,i,!1,null,null,null),p=d.exports,m={components:{Navbar:p},data:function(){return{loading:!1,stopLoad:!1}},methods:{stopLoading:function(){this.stopLoad=!0,this.loading=!1},setLoading:function(){var t=this;this.stopLoad=!1,window.setTimeout(function(){!1===t.stopLoad&&(t.loading=!0)},1e3)}}},g=m,f=(o("5c0b"),Object(u["a"])(g,a,n,!1,null,null,null)),h=f.exports,y=o("8c4f"),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashboard"})},b=[],w={name:"dashboard"},k=w,_=Object(u["a"])(k,v,b,!1,null,null,null),C=_.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"products"},[o("h1",{staticClass:"title title--primary"},[t._v("Products")]),o("h3",{staticClass:"title title--secondary"},[t._v("Filter products")]),o("div",{staticClass:"options"},[o("div",{staticClass:"filters"},[o("el-form",{attrs:{inline:!0}},[o("el-form-item",{attrs:{label:"Category"}},[o("el-select",{attrs:{multiple:"",placeholder:"Select categories"},on:{change:function(e){return t.getProducts()}},model:{value:t.selectedCategories,callback:function(e){t.selectedCategories=e},expression:"selectedCategories"}},t._l(t.categories,function(t,e){return o("el-option",{key:e,attrs:{label:t.name,value:t._id}})}),1)],1),o("el-form-item",{attrs:{label:"Price range"}},[o("el-slider",{attrs:{range:"",step:5,max:500},on:{change:function(e){return t.getProducts()}},model:{value:t.priceRange,callback:function(e){t.priceRange=e},expression:"priceRange"}})],1)],1)],1),o("router-link",{attrs:{to:"/products/new"}},[o("el-button",{attrs:{rounded:"",type:"success"}},[t._v("New Product")])],1)],1),t.products.length>0?o("ProductGrid",{attrs:{products:t.products},on:{reload:function(e){return t.getProducts()}}}):o("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","padding-top":"70px"}},[o("p",{staticClass:"title title--secondary"},[t._v("Whoops, no products found")])]),o("el-pagination",{attrs:{layout:"prev, pager, next","hide-on-single-page":!0,"page-count":t.totalPages},on:{"current-change":function(e){t.page=e-1}}})],1)},$=[],P=(o("ac6a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product-grid"},[o("el-container",t._l(t.products,function(e,r){return o("el-col",{key:r,attrs:{xs:24,sm:12,md:12,lg:6,xl:4}},[o("el-card",{attrs:{"body-style":{padding:"0px"}}},[e.content.images.length>0?o("el-carousel",{attrs:{height:"250px",autoplay:!1}},t._l(e.content.images,function(t,e){return o("el-carousel-item",{key:e},[o("img",{staticClass:"image",attrs:{src:t.path}})])}),1):o("PlaceholderImage",{attrs:{height:"250px"}}),o("div",{staticClass:"card__content"},[o("router-link",{attrs:{to:"/products/"+e._id}},[o("h2",[t._v(t._s(e.content.name))])]),o("div",{staticClass:"category"},[o("h3",[t._v(t._s(e.category.name))]),o("p",[t._v("£"+t._s(e.inventory.price))])]),o("p",[t._v("Current available stock: "+t._s(e.inventory.totalStock-e.inventory.inFulfillment))]),o("div",{staticClass:"bottom clearfix"},[o("el-row",[o("router-link",{attrs:{to:"/products/"+e._id}},[o("el-button",{attrs:{size:"small",icon:"el-icon-edit",round:""}},[t._v("Edit")])],1),o("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete",round:""},on:{click:function(e){t.deleting=!0}}},[t._v("Delete")]),o("el-dialog",{attrs:{visible:t.deleting,width:"30%","before-close":t.deleteProduct},on:{"update:visible":function(e){t.deleting=e}}},[o("span",{attrs:{slot:"title"},slot:"title"},[t._v("Permenantly delete "),o("strong",[t._v(t._s(e.content.name))]),t._v("?")]),o("span",[t._v('Are you sure you want to permentantly remove this product from the site? This will remove all data about the product from the database, and is irreversible. To remove the product with the option to relist it later, use the "disable" switch instead.')]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.deleting=!1}}},[t._v("Cancel")]),o("el-button",{attrs:{type:"danger"},on:{click:function(o){return t.deleteProduct(e,r)}}},[t._v("Permenantly delete")])],1)])],1)],1)],1)],1)],1)}),1)],1)}),S=[],j=(o("7f7f"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"placeholder-image",style:{height:t.height}},[o("i",{staticClass:"el-icon-picture-outline"})])}),F=[],A={name:"placeholder-image",props:["height"]},R=A,D=(o("764c"),Object(u["a"])(R,j,F,!1,null,"3b715371",null)),N=D.exports,E={name:"product-grid",props:["products","loading"],data:function(){return{deleting:!1}},components:{PlaceholderImage:N},methods:{deleteProduct:function(t,e){var o=this;console.log("deleting"),this.$axios.delete("/products/"+t._id).then(function(e){console.log(e),o.$emit("reload"),o.$message.success("Permenantly deleted "+t.content.name)}).catch(function(e){console.log(e),o.$message.error("Error deleting "+t.content.name+". Please contact your system administrator.")}),this.deleting=!1}}},O=E,T=(o("511b"),Object(u["a"])(O,P,S,!1,null,"24cf873a",null)),I=T.exports,U={name:"products",data:function(){return{selectedCategories:[],categories:[],priceRange:[0,500],products:[],totalPages:null,page:0}},components:{ProductGrid:I},watch:{page:function(){this.getProducts()}},mounted:function(){this.$emit("set-loading"),this.getProducts(!0)},methods:{getProducts:function(t){var e=this,o="?page="+this.page;this.selectedCategories.forEach(function(t){o=o+"&category="+t}),o=o+"&price="+this.priceRange[0]+"&price="+this.priceRange[1],this.$axios.get("/products"+o).then(function(o){console.log(o),t&&(e.categories=o.data.categories,e.selectedCategories=o.data.categories.map(function(t){return t._id})),e.products=o.data.products,e.totalPages=o.data.pages,window.document.getElementsByClassName("el-main")[0].scroll(0,0),e.$emit("stop-loading")}).catch(function(){e.$message.error("Error loading products. Please contact system administrator"),e.$emit("stop-loading")})}}},L=U,W=(o("513e"),Object(u["a"])(L,x,$,!1,null,null,null)),B=W.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"new-product"},[o("el-page-header",{attrs:{title:"back to all products",content:"New product"},on:{back:function(e){return t.$router.push("/products")}}}),o("h1",{staticClass:"title title--primary"},[t._v("Launch new product")]),o("el-form",{ref:"productForm",attrs:{"label-position":"top",model:t.productForm,rules:t.productFormRules}},[o("el-form-item",{attrs:{label:"Category",prop:"category"}},[o("el-select",{attrs:{placeholder:"Select categories"},model:{value:t.productForm.category,callback:function(e){t.$set(t.productForm,"category",e)},expression:"productForm.category"}},t._l(t.categories,function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t._id}})}),1),o("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(e){t.showNewCategoryForm=!0}}},[t._v("Or create a new category")])],1),o("NewCategoryForm",{attrs:{show:t.showNewCategoryForm},on:{created:function(e){return t.createdCategory(e)},discard:function(e){t.showNewCategoryForm=!1}}}),o("el-form-item",{attrs:{label:"Product name",prop:"name"}},[o("el-input",{attrs:{placeholder:"Choose a name"},model:{value:t.productForm.name,callback:function(e){t.$set(t.productForm,"name",e)},expression:"productForm.name"}})],1),o("el-form-item",{attrs:{label:"Url reference",prop:"slug"}},[o("el-input",{attrs:{placeholder:"Choose a url reference"},model:{value:t.productForm.slug,callback:function(e){t.$set(t.productForm,"slug",e)},expression:"productForm.slug"}})],1),o("el-form-item",{attrs:{label:"Product description",prop:"description"}},[o("el-input",{attrs:{type:"textarea",placeholder:"Write a detailed description"},model:{value:t.productForm.description,callback:function(e){t.$set(t.productForm,"description",e)},expression:"productForm.description"}})],1),o("el-form-item",{attrs:{label:"Product images"}},[o("ImageUpload",{on:{finishedUpload:function(e){return t.updateProductImages(e)}}})],1),o("h3",[t._v("Pricing and fulfillment")]),o("el-form-item",{attrs:{label:"Price",prop:"price"}},[t._v("\n            £ "),o("el-input-number",{attrs:{controls:!1,precision:2},model:{value:t.productForm.price,callback:function(e){t.$set(t.productForm,"price",e)},expression:"productForm.price"}})],1),o("el-form-item",{attrs:{label:"Initial stock quantity (can be left as zero and added later if needed)",prop:"stock"}},[o("el-input-number",{attrs:{controls:!1,step:1,precision:0},model:{value:t.productForm.stock,callback:function(e){t.$set(t.productForm,"stock",e)},expression:"productForm.stock"}})],1),t.errors?o("el-alert",{attrs:{title:"Whoops",description:"Please correct the errors above",type:"error","show-icon":""}}):t._e(),o("el-form-item",{staticStyle:{"margin-top":"40px"}},[o("el-button",{attrs:{type:"success",loading:t.launchingProduct},on:{click:function(e){return t.submitForm("productForm")}}},[t._v("Launch product")]),o("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.discardProduct()}}},[t._v("Cancel - discard product")])],1)],1)],1)},M=[],z=(o("a481"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"image-upload"},[o("el-upload",{staticClass:"image-upload",attrs:{drag:"",action:"/api/admin/images","on-success":t.finishedUpload,multiple:"",limit:5,"list-type":"picture"}},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("Click to upload")]),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("jpg/png files with a size less than 500kb")])],1)],1)}),G=[],Y={name:"image-upload",methods:{finishedUpload:function(t){this.$emit("finishedUpload",t)}}},H=Y,J=Object(u["a"])(H,z,G,!1,null,null,null),K=J.exports,Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"new-category-form"},[o("el-dialog",{attrs:{title:"New category",visible:t.show},on:{"update:visible":function(e){t.show=e}}},[o("el-form",{ref:"newCategoryForm",attrs:{model:t.newCategoryForm,rules:t.newCategoryFormRules}},[o("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"Category name ",prop:"name"}},[o("el-input",{model:{value:t.newCategoryForm.name,callback:function(e){t.$set(t.newCategoryForm,"name",e)},expression:"newCategoryForm.name"}})],1),o("el-form-item",{staticStyle:{display:"flex"},attrs:{label:"Category url reference",prop:"slug"}},[o("el-input",{model:{value:t.newCategoryForm.slug,callback:function(e){t.$set(t.newCategoryForm,"slug",e)},expression:"newCategoryForm.slug"}})],1),o("el-form-item",{attrs:{label:"Category description",prop:"description"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.newCategoryForm.description,callback:function(e){t.$set(t.newCategoryForm,"description",e)},expression:"newCategoryForm.description"}})],1),o("el-form-item",{attrs:{label:"Category images"}},[o("ImageUpload",{on:{finishedUpload:function(e){return t.updateCategoryImages(e)}}})],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){return t.$emit("discard")}}},[t._v("Discard")]),o("el-button",{attrs:{type:"success"},on:{click:function(e){return t.createCategory("newCategoryForm")}}},[t._v("Create category")])],1)],1)],1)},V=[],X={props:["show"],components:{ImageUpload:K},data:function(){return{newCategoryFormRules:{name:[{required:!0,message:"Please choose a product name",trigger:"blur"},{max:14,message:"Category name must be less than 15 characters",trigger:"blur"}],slug:[{required:!0,message:"Please choose a url reference",trigger:"blur"},{min:3,max:20,message:"url reference must be between 3 and 20 characters",trigger:"blur"},{validator:this.validateSlug,message:"Url reference cannot contain white spaces",trigger:"blur"}],description:[{required:!0,message:"Please write a description",trigger:"blur"},{max:400,message:"description cannot be more than 400 characters",trigger:"blur"}]},newCategoryForm:{name:"",slug:"",description:"",images:[]}}},methods:{createCategory:function(t){var e=this;this.$refs[t].validate(function(o){o&&e.$axios.post("/categories",{name:e.newCategoryForm.name,description:e.newCategoryForm.description,slug:e.newCategoryForm.slug,images:e.newCategoryForm.images}).then(function(o){e.$emit("created",o.data),e.$message.success("Category created successfully. You can now select the category from the dropdown menu"),e.$refs[t].resetFields()}).catch(function(){e.$message.error("Whoops, something went wrong trying to create a new category. Please reload the page and try again, or contact the system administrator if issue persists.")})})},updateCategoryImages:function(t){this.newCategoryForm.images.push(t)}}},Z=X,tt=Object(u["a"])(Z,Q,V,!1,null,null,null),et=tt.exports,ot={name:"new-product",components:{ImageUpload:K,NewCategoryForm:et},data:function(){return{showNewCategoryForm:!1,productForm:{name:"",description:"",slug:"",price:0,stock:0,weight:0,height:0,length:0,width:0,category:"",images:[],tmpDir:null},slugChanged:!1,errors:!1,categories:[],productFormRules:{name:[{required:!0,message:"Please choose a product name",trigger:"blur"},{min:5,max:31,message:"Product name must be between 5 and 30 characters",trigger:"blur"}],slug:[{required:!0,message:"Please choose a url reference",trigger:"blur"},{min:5,max:40,message:"url reference must be between 5 and 40 characters",trigger:"blur"},{validator:this.validateSlug,message:"Url reference cannot contain white spaces",trigger:"blur"}],description:[{required:!0,message:"Please write a description",trigger:"blur"}],price:[{required:!0,message:"Please choose a product price",trigger:"blur"}]},launchingProduct:!1}},mounted:function(){var t=this;this.$axios.get("/categories").then(function(e){t.categories=e.data}).catch(function(){t.$message.error("Whoops, error loading categories. Please contact the system administrator")})},methods:{autoCreateSlug:function(t){this.slugChanged||(this.slug=t.replace(/ /g,"-"))},handleExceed:function(t,e){this.$message.warning("The limit is 3, you selected ".concat(t.length," files this time, add up to ").concat(t.length+e.length," totally"))},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.errors=!0,!1;e.errors=!1;var o=e.productForm;e.launchingProduct=!0,e.$axios.post("/products",{content:{name:o.name,description:o.description,slug:o.slug,images:o.images},inventory:{price:o.price,totalStock:o.stock,inFulfillment:0},category:o.category}).then(function(){e.launchingProduct=!1,e.$message.success("Great! You launched a new product - "+o.name),e.$router.push("/products")}).catch(function(){e.launchingProduct=!1,e.$message.error("Whoops, something went wrong launching the product :(. Please check that you have filled out the form correctly and try again, then contact your system administrator")})})},createdCategory:function(t){this.categories.push(t),this.showNewCategoryForm=!1},discardProduct:function(){var t=this;this.$axios.delete("/images").then(function(){t.$router.push("/products")}).catch(function(){t.$message.warning("Warning: couldn't empty temporary image cache folder. This could cause issues in the future. Please make your system administrator aware of the issue."),t.$router.push("/products")})},updateProductImages:function(t){this.productForm.images.push(t)},validateSlug:function(t,e,o){e.indexOf(" ")>-1?o(new Error("Url reference cannot contain spaces")):o()}}},rt=ot,at=(o("5654"),Object(u["a"])(rt,q,M,!1,null,null,null)),nt=at.exports,st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"new-product"},[t.product?o("div",[o("el-page-header",{attrs:{title:"back to all products",content:t.product.content.name},on:{back:function(e){return t.$router.push("/products")}}}),o("h1",{staticClass:"title title--primary"},[t._v(t._s(t.product.content.name))]),o("el-form",[o("el-form-item",{attrs:{label:"Category",prop:"category"}},[o("el-select",{attrs:{placeholder:"Select categories"},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}},t._l(t.categories,function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t._id}})}),1),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.preventDefault(),t.update("category","category",t.product.category)}}},[t._v("Update category")]),o("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(e){e.preventDefault(),t.showNewCategoryForm=!0}}},[t._v("Or create a new category")])],1)],1),o("NewCategoryForm",{attrs:{show:t.showNewCategoryForm},on:{created:function(e){return t.createdCategory(e)},discard:function(e){t.showNewCategoryForm=!1}}}),o("h2",{staticClass:"title title--secondary"},[t._v("Images")]),t.product.content.images.length>0?o("el-carousel",{attrs:{height:"250px",autoplay:!1}},t._l(t.product.content.images,function(t,e){return o("el-carousel-item",{key:e},[o("img",{staticClass:"image",attrs:{src:t.path}})])}),1):o("PlaceholderImage",{attrs:{height:"250px"}}),o("ImageUpload",{on:{finishedUpload:function(t){}}}),o("h2",{staticClass:"title title--secondary"},[t._v("Price and promotions")]),t.changing.price?o("div",[o("el-form",{ref:"newPriceForm",attrs:{"label-position":"left","label-width":"80px"}},[o("el-form-item",{attrs:{label:"New price"}},[t._v("\n                    £ "),o("el-input-number",{staticStyle:{width:"110px"},attrs:{max:25e3,precision:2,controls:!1,step:1},model:{value:t.product.inventory.price,callback:function(e){t.$set(t.product.inventory,"price",e)},expression:"product.inventory.price"}})],1),o("el-button",{attrs:{type:"success"},on:{click:function(e){return t.update("price","inventory.price",t.product.inventory.price)}}},[t._v("Update price")]),o("el-button",{on:{click:function(e){t.changing.price=!1}}},[t._v("Cancel")])],1)],1):o("div",[o("p",[t._v("Product currently priced at  "),o("strong",{staticStyle:{"font-size":"1.1em",color:"#6d0000"}},[t._v("£"+t._s(t.product.inventory.price))])]),o("el-button",{on:{click:function(e){t.changing.price=!0}}},[t._v("Change price")])],1),o("p",[t._v("No promotions currently active on this product")]),o("router-link",{attrs:{to:"/promotions/new"}},[o("el-button",{attrs:{type:"primary"}},[t._v("Create a promotion")])],1),o("h2",[t._v("Inventory")]),o("el-table",{staticStyle:{width:"500px"},attrs:{data:t.inventoryData}},[o("el-table-column",{attrs:{prop:"total",label:"Total stock"}}),o("el-table-column",{attrs:{prop:"inFulfillment",label:"In fulfillment"}}),o("el-table-column",{attrs:{prop:"available",label:"Available stock"}})],1),o("router-link",{attrs:{to:"/inventory/new"}},[o("el-button",{attrs:{type:"primary"}},[t._v("Add or remove stock")])],1),t._m(0),o("h2",{staticClass:"title title--secondary"},[t._v("Orders")])],1):t._e()])},it=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("Note that "),o("strong",[t._v("total stock")]),t._v(" refers to all physical stock, including stock that is in placed orders that haven't yet been shipped. "),o("strong",[t._v("In fulfillment")]),t._v(" refers to stock in orders that have been placed, but haven't been shipped yet. "),o("strong",[t._v("Available stock")]),t._v(" refers to the remaining stock which is actually available to be ordered - this is the number shown on the public facing site.")])}],ct={name:"product",props:["id"],components:{NewCategoryForm:et},data:function(){return{changing:{price:!1,name:!1,category:!1,stock:!1},categories:[],showNewCategoryForm:!1,product:null}},computed:{inventoryData:function(){return[{total:this.product.inventory.totalStock,available:this.product.inventory.totalStock-this.product.inventory.inFulfillment,inFulfillment:this.product.inventory.inFulfillment}]}},mounted:function(){var t=this;24!==this.id.length?(this.$router.push("/products"),this.$message.error("Whoops, that product doesn't seem to exist. Redirecting to products page.")):(this.$emit("set-loading"),this.$axios.get("/products/"+this.id).then(function(e){t.product=e.data,t.$emit("stop-loading"),t.$axios.get("/categories").then(function(e){t.categories=e.data}).catch(function(){t.$message.error("Whoops, error loading categories. Please contact the system administrator")})}).catch(function(){t.$router.push("/products"),t.$message.error("Whoops, looks like that product doesn't exist. Redirecting to products page."),t.$emit("stop-loading")}))},methods:{update:function(t,e,o){var r=this;this.$axios.put("/products/"+this.product._id,{toUpdate:e,updateWith:o}).then(function(){r.$message.success(t+" successfully updated. All new orders will use the updated price."),r.changing[t]=!1}).catch(function(){r.$message.error("Error updating "+t+". Please contact your system administrator.")})},createdCategory:function(t){this.categories.push(t),this.showNewCategoryForm=!1}}},lt=ct,ut=(o("1b69"),Object(u["a"])(lt,st,it,!1,null,"08cba3a9",null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inventory"},[o("h1",{staticClass:"title title--primary"},[t._v("Stock Management")]),o("router-link",{attrs:{to:"/inventory/new"}},[o("el-button",{attrs:{rounded:"",type:"success"}},[t._v("New Stock Update")])],1),o("h2",{staticClass:"title title--secondary"},[t._v("Stock update history")]),o("p",[t._v("Filter")]),o("div",{staticClass:"options"},[o("div",{staticClass:"filters"},[o("el-form",{attrs:{inline:!0}},[o("el-form-item",{attrs:{label:"Type"}},[o("el-select",{staticStyle:{width:"800px"},attrs:{multiple:"",placeholder:"Select type"},model:{value:t.selectedReasons,callback:function(e){t.selectedReasons=e},expression:"selectedReasons"}},t._l(t.reasons,function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),o("el-form-item",{attrs:{label:"Date range"}},[o("el-date-picker",{attrs:{type:"daterange","range-separator":"To","start-placeholder":"Start date","end-placeholder":"End date"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}}),o("el-button",{on:{click:function(e){t.dateRange=[Date.now()-24192e5,Date.now()]}}},[t._v("Reset")])],1)],1)],1)]),o("el-table",{attrs:{data:t.adjustmentsComputed,"row-class-name":t.getRowClasses,"default-sort":{prop:"datetime",order:"descending"}}},[o("el-table-column",{attrs:{prop:"datetime",label:"Created"}}),o("el-table-column",{attrs:{label:"Type"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",["Delivery"===e.row.reason?o("i",{staticClass:"el-icon-truck",staticStyle:{"font-size":"25px","margin-right":"5px"}}):t._e(),t._v(t._s(e.row.reason))])]}}])}),o("el-table-column",{attrs:{label:"Products updated"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.products.slice(0,6),function(r,a){return o("span",{key:a},[t._v(t._s(r.name)+" "),a<e.row.products.slice(0,6).length-1?o("span",[t._v(", ")]):t._e()])})}}])}),o("el-table-column",{attrs:{label:"Notes"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.notes.slice(0,100))+"\n                "),e.row.notes.length>100?o("span",[t._v("...")]):t._e()]}}])})],1),o("el-pagination",{attrs:{layout:"prev, pager, next","hide-on-single-page":!0,"page-count":t.totalPages},on:{"current-change":function(e){t.page=e-1}}})],1)},mt=[],gt={name:"inventory",data:function(){return{adjustments:[],reasons:["Delivery","Counting error","Sale(s) through untracked avenue","Defective/damaged product(s)","Loss/theft"],selectedReasons:["Delivery","Counting error","Sale(s) through untracked avenue","Defective/damaged product(s)","Loss/theft"],page:0,dateRange:[Date.now()-24192e5,Date.now()],totalPages:1}},mounted:function(){this.$emit("set-loading"),this.getAdjustments()},watch:{page:function(){this.getAdjustments()},dateRange:function(){this.getAdjustments(),this.page=0},selectedReasons:function(){this.getAdjustments(),this.page=0}},computed:{adjustmentsComputed:function(){return this.adjustments.map(function(t){var e=new Date(t.datetime);return t.datetime=e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear(),t})}},methods:{getRowClasses:function(t){var e=t.row;t.rowIndex;return"increase"===e.type?"row-increase":"row-decrease"},getAdjustments:function(){var t=this;this.adjustments=[];var e="?page="+this.page;this.selectedReasons.forEach(function(t){e=e+"&reason="+t}),e=e+"&daterange="+new Date(this.dateRange[0]).getTime()+"&daterange="+new Date(this.dateRange[1]).getTime(),this.$axios.get("/inventory"+e).then(function(e){window.document.getElementsByClassName("el-main")[0].scroll(0,0),t.adjustments=e.data.adjustments,t.totalPages=e.data.pages,t.$emit("stop-loading")}).catch(function(){t.$message.error("Error loading stock adjustment database. Please contact your system administrator."),t.$emit("stop-loading")})}}},ft=gt,ht=(o("955f"),Object(u["a"])(ft,pt,mt,!1,null,null,null)),yt=ht.exports,vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"new-stock-adjustment"},[o("el-page-header",{attrs:{title:"back to stock management",content:"New stock update"},on:{back:function(e){return t.$router.push("/inventory")}}}),o("h1",{staticClass:"title title--primary"},[t._v("New stock update")]),o("p",[t._v("Submit a manual increase or decrease of stock. Stock updates are recorded to the database to easily keep track of what's happening to your inventory.")]),o("el-form",{ref:"form",attrs:{"label-position":"top",model:t.form,rules:t.rules}},[o("el-form-item",{attrs:{label:"Adjument date"}},[o("el-date-picker",{attrs:{type:"datetime",placeholder:"Select date and time"},model:{value:t.form.datetime,callback:function(e){t.$set(t.form,"datetime",e)},expression:"form.datetime"}}),o("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(e){t.form.datetime=Date.now()}}},[t._v("Reset date and time to now")])],1),o("el-form-item",{attrs:{label:"Update type"}},[o("el-radio",{attrs:{label:"increase"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[o("i",{staticClass:"el-icon-sell"}),t._v("  Increase")]),o("el-radio",{attrs:{label:"decrease"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[o("i",{staticClass:"el-icon-sold-out"}),t._v("  Reduction")])],1),o("el-form-item",{attrs:{label:"Reason for update"}},[o("el-select",{attrs:{placeholder:"Select reason"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}},t._l(t.reasons[t.form.type],function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),o("el-divider"),o("el-form-item",{attrs:{label:"Add products to be adjusted"}},[t.toAdjust?t._e():o("el-select",{staticClass:"product-select",attrs:{placeholder:"Select a product"},model:{value:t.toAdjust,callback:function(e){t.toAdjust=e},expression:"toAdjust"}},t._l(t.availableProducts,function(t){return o("el-option",{key:t._id,attrs:{label:t.content.name,value:t}})}),1),o("el-collapse-transition",[t.toAdjust?o("el-form",{staticClass:"product-form"},[t.toAdjust?o("h3",[t._v(t._s(t.toAdjust.content.name))]):t._e(),o("el-form-item",{attrs:{label:"increase"===t.form.type?"Increase stock by":"Reduce stock by"}},["increase"===t.form.type?o("el-input-number",{attrs:{min:1,step:1},model:{value:t.adjustBy,callback:function(e){t.adjustBy=e},expression:"adjustBy"}}):o("el-input-number",{attrs:{min:1,max:t.toAdjust.inventory.totalStock,step:1},model:{value:t.adjustBy,callback:function(e){t.adjustBy=e},expression:"adjustBy"}})],1),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.confirmProductAdjustment()}}},[t._v("Add")]),o("el-button",{on:{click:function(e){t.toAdjust=null}}},[t._v("Cancel")])],1):t._e()],1),o("el-table",{staticStyle:{width:"1101px"},attrs:{data:t.productTableComputed,border:""}},[o("el-table-column",{attrs:{prop:"name",label:"Product",width:"200px"}}),o("el-table-column",{attrs:{prop:"currentStock",label:"Current total stock count",width:"200px"}}),o("el-table-column",{attrs:{label:"Change",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s("increase"===t.form.type?"+ "+e.row.change:"- "+e.row.change)+"\n                    ")]}}])}),o("el-table-column",{attrs:{label:"New total stock count",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.newStock>=0?e.row.newStock:0))])]}}])}),o("el-table-column",{attrs:{label:"New available stock count",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{style:{color:e.row.newAvailableStock<0?"red":"#000"}},[t._v(t._s(e.row.newAvailableStock))])]}}])}),o("el-table-column",{attrs:{width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text"},on:{click:function(o){return t.removeProduct(e.$index)}}},[t._v("Delete "),o("i",{staticClass:"el-icon-delete"})])]}}])})],1)],1),o("el-divider"),o("el-form-item",{attrs:{label:"Update notes - record any relevant information about the delivery or reduction of stock"}},[o("el-input",{attrs:{type:"textarea",maxlength:400},model:{value:t.form.notes,callback:function(e){t.$set(t.form,"notes",e)},expression:"form.notes"}})],1),t.error?o("el-alert",{attrs:{title:"Whoops",description:"Looks like you haven't added any products to the update",type:"error","show-icon":""}}):t._e(),o("el-button",{attrs:{type:"success"},on:{click:t.formSubmit}},[t._v("Apply update")])],1)],1)},bt=[],wt={name:"new-stock-adjustment",data:function(){return{form:{datetime:Date.now(),type:"increase",reason:"",products:[],notes:""},productTable:[],reasons:{increase:["Delivery","Counting error"],decrease:["Sale(s) through untracked avenue","Defective/damaged product(s)","Loss/theft","Counting error"]},rules:{formRules:{}},products:[],showProductAdjustmentForm:!1,toAdjust:null,adjustBy:1,potentialStockIssue:!1,error:!1}},computed:{availableProducts:function(){return this.products.filter(function(t){return!1===t.used})},productTableComputed:function(){var t=this;return this.productTable.map(function(e){var o="increase"===t.form.type?1:-1;return e.newStock=e.currentStock+e.change*o,e.newAvailableStock=e.currentAvailableStock+e.change*o,t.potentialStockIssue=e.newAvailableStock<0,e})}},watch:{potentialStockIssue:function(t){t&&this.stockWarning()},"form.type":function(t){this.form.reason="increase"===t?"Delivery":"Sale(s) through untracked avenue"}},mounted:function(){var t=this;this.$emit("set-loading"),this.$axios({method:"get",url:"/products"}).then(function(e){t.products=e.data.products.map(function(t){return t.used=!1,t}),t.form.reason="increase"===t.form.type?"Delivery":"Sale(s) through untracked avenue",t.$emit("stop-loading")}).catch(function(){t.$message.error("Error loading products. Please contact system administrator"),t.$emit("stop-loading")})},methods:{confirmProductAdjustment:function(){this.products[this.products.indexOf(this.toAdjust)].used=!0,this.form.products.push({id:this.toAdjust._id,name:this.toAdjust.content.name,previousTotalStock:this.toAdjust.inventory.totalStock,previousAvailableStock:this.toAdjust.inventory.totalStock-this.toAdjust.inventory.inFulfillment,change:this.adjustBy}),this.productTable.push({name:this.toAdjust.content.name,change:this.adjustBy,currentStock:this.toAdjust.inventory.totalStock,currentAvailableStock:this.toAdjust.inventory.totalStock-this.toAdjust.inventory.inFulfillment}),this.toAdjust=null},removeProduct:function(t){var e=this;console.log("removing"),console.log(t),this.products=this.products.map(function(o){return o._id===e.form.products[t].id&&(o.used=!1),o}),this.form.products.splice(t,1),this.productTable.splice(t,1),console.log(this.productTable)},stockWarning:function(){this.$alert("<p>Hey. Looks like you've requested a stock reduction which will leave you unable to fulfill pending, paid orders. If you inserted these numbers by mistake, you can dismiss this message. If not, you might want to review the currently outstanding orders, and cancel them if you are unable to fulfill them.</p><p><router-link to='/orders'</router-link></p>","Potential stock issue",{confirmButtonText:"Dismiss",dangerouslyUseHTMLString:!0})},formSubmit:function(){var t=this;if(0===this.form.products.length)this.error=!0;else{var e=this.form;e.datetime=new Date(e.datetime),e.products.forEach(function(t){var o="increase"===e.type?1:-1;t.newTotalStock=t.previousTotalStock+t.change*o,t.newAvailableStock=t.previousTotalStock+t.change*o}),this.$axios.post("/inventory",e).then(function(e){t.$message.success("Executed new stock adjustment - requested stock levels have been adjusted, and changes recorded"),t.$router.push("/inventory")}).catch(function(){t.$message.error("Error adjusting stock. Please ensure form has been filled out correctly, and try reloading the page. If issue persists, contact your system administrator.")})}}}},kt=wt,_t=(o("502a"),Object(u["a"])(kt,vt,bt,!1,null,"13717cb1",null)),Ct=_t.exports,xt=o("bc3a"),$t=o.n(xt);r["default"].use(y["a"]);var Pt=new y["a"]({mode:"history",base:"/admin/",routes:[{path:"/",name:"dashboard",component:C},{path:"/products",name:"products",component:B},{path:"/products/new",name:"newProduct",component:nt},{path:"/products/:id",component:dt,props:!0},{path:"/inventory",name:"inventory",component:yt},{path:"/inventory/new",name:"new stock adjustment",component:Ct}],methods:{setData:function(t,e){t?this.error=t.message:this.product=e}}}),St=o("5c96"),jt=o.n(St),Ft=(o("0fae"),o("b2d6")),At=o.n(Ft);r["default"].use(jt.a,{locale:At.a});var Rt=$t.a.create({baseURL:"/api/admin/"});r["default"].prototype.$axios=Rt,r["default"].config.productionTip=!1,new r["default"]({router:Pt,render:function(t){return t(h)}}).$mount("#app")},5746:function(t,e,o){},"5c0b":function(t,e,o){"use strict";var r=o("5e27"),a=o.n(r);a.a},"5e27":function(t,e,o){},"764c":function(t,e,o){"use strict";var r=o("fe4a"),a=o.n(r);a.a},"8f1c":function(t,e,o){},"955f":function(t,e,o){"use strict";var r=o("8f1c"),a=o.n(r);a.a},b688:function(t,e,o){},cc19:function(t,e,o){},f359:function(t,e,o){},fb1d:function(t,e,o){},fe4a:function(t,e,o){}});
//# sourceMappingURL=app.c0df6c8b.js.map