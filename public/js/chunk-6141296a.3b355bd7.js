(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6141296a"],{"68df":function(e,t,a){"use strict";var r=a("d024"),s=a.n(r);s.a},d024:function(e,t,a){},e43b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"bags"},[a("h1",[e._v("Find your perfect bag")]),a("h3",[e._v("Filter products")]),a("Filters",{attrs:{filters:e.filters},on:{updated:function(t){return e.getProducts(t)}}}),a("ProductGrid",{attrs:{products:e.products}})],1)},s=[],o=a("082c"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filters"},[a("v-select",{attrs:{multiple:"",options:e.filters.categories,placeholder:"Product type"},model:{value:e.requested.category,callback:function(t){e.$set(e.requested,"category",t)},expression:"requested.category"}})],1)},n=[],i=void 0,d={name:"filters",props:["filters"],data:function(){return{requested:{category:[]}}},watch:{requested:{deep:!0,handler:function(){i.$emit("updated",i.requested)}}}},l=d,u=(a("68df"),a("2877")),p=Object(u["a"])(l,c,n,!1,null,"70050aca",null),f=p.exports,g={name:"bags",components:{ProductGrid:o["a"],Filters:f},data:function(){return{products:[{_id:"5d0b95c40d0a2a2a47b1420f",content:{images:[{filename:"Box_Top-Bone_large.jpg",path:"/public/assets/images/products/5d0b95c40d0a2a2a47b1420f/Box_Top-Bone_large.jpg"},{filename:"Fray_Top_Denim_Wide_Leg_Palazoo_1_large.jpg",path:"/public/assets/images/products/5d0b95c40d0a2a2a47b1420f/Fray_Top_Denim_Wide_Leg_Palazoo_1_large.jpg"}],name:"Organic Cotton Box Top",description:"Organic Cotton Box Top",slug:"box-top"},inventory:{price:23,totalStock:21,inFulfillment:0},category:{name:"rucksacks",slug:"rucksacks",id:"5d08c9e98156043fed90b592"},__v:1,live:!0},{_id:"5d0b96720d0a2a2a47b14210",content:{images:[{filename:"Black_Scarf_2_web_large.jpg",path:"/public/assets/images/products/5d0b96720d0a2a2a47b14210/Black_Scarf_2_web_large.jpg"}],name:"Checked Scarf",description:"Checked Scarf",slug:"checked-scarf"},inventory:{price:12,totalStock:76,inFulfillment:0},category:{name:"horses",slug:"horses",id:"5d089da1b345a41fa49a3a13"},__v:1,live:!0}],filters:[]}},mounted:function(){this.getProducts()},methods:{getProducts:function(e){var t=this;this.$axios.get("/products",{params:e}).then(function(e){console.log(e),t.products=e.data.products})}}},_=g,m=Object(u["a"])(_,r,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-6141296a.3b355bd7.js.map