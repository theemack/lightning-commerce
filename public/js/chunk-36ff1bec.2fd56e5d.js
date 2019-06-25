(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36ff1bec"],{"335c":function(e,a,t){"use strict";var n=t("71ff"),o=t.n(n);o.a},"6a74":function(e,a,t){"use strict";var n=t("bcd3"),o=t.n(n);o.a},"71ff":function(e,a,t){},"7cb4":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("main",{staticClass:"review-order"},[t("h1",[e._v("Checkout")]),t("div",{staticClass:"breadcrumb"},[t("span",{class:{active:0===e.step},on:{click:function(a){return e.navigateTo(0)}}},[e._v("Details")]),e._v(" > \n        "),t("span",{class:{active:1===e.step},on:{click:function(a){return e.navigateTo(1)}}},[e._v("Shipping")]),e._v(" > \n        "),t("span",{class:{active:2===e.step},on:{click:function(a){return e.navigateTo(2)}}},[e._v("Payment")])]),t("div",{staticClass:"order-grid"},[0===e.step?t("CustomerInfo",{attrs:{customerInit:e.order.customer},on:{"next-step":function(a){return e.proceedToShipping(a)}}}):1===e.step?t("Shipping",{attrs:{email:e.order.customer.email,address:e.fullAddress,method:e.order.shippingMethod},on:{"next-step":function(a){return e.proceedToPayment(a)},"previous-step":function(a){e.step=0}}}):2===e.step?t("Payment",{attrs:{email:e.order.customer.email,address:e.fullAddress,method:e.order.shippingMethod}}):e._e(),t("div",{staticClass:"right-column"},[t("h2",[e._v("My order")]),e._l(e.items,function(a,n){return t("div",{key:n,staticClass:"order-item"},[t("img",{attrs:{src:a.content.images[0].path}}),t("p",{staticClass:"name"},[e._v(e._s(a.content.name))]),t("div",{staticClass:"details"},[t("p",{staticClass:"quantity"},[e._v("Quantity: "+e._s(a.quantity))]),t("p",{staticClass:"price"},[e._v("£"+e._s((a.inventory.price*a.quantity).toFixed(2))+" GBP")])])])}),e._m(0),t("div",{staticClass:"totals"},[t("div",[t("span",[e._v("Subtotal:")]),t("span",[e._v("£"+e._s(e.activeOrder.subtotal.toFixed(2))+" GBP")])]),t("div",[t("span",[e._v("Shipping:")]),t("span",[e._v(e._s(e.order.shippingMethod?e.order.shippingMethod.cost>0?"£"+e.order.shippingMethod.cost.toFixed(2)+" GBP":"Free":"calculated at next step"))])])]),t("div",{staticClass:"grand-total"},[t("span",[e._v("Total:")]),t("span",[e._v("£"+e._s(e.activeOrder.total.toFixed(2))+" GBP")])])],2)],1)])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"discounts"},[t("input",{attrs:{type:"text",placeholder:"Gift card or discount code"}}),t("button",[e._v("Apply")])])}],r=(t("7f7f"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"left-column"},[t("div",{staticClass:"contact"},[e._m(0),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.email,expression:"customer.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{error:e.errors.collect("email").length>0},attrs:{name:"email",type:"text",placeholder:"Email"},domProps:{value:e.customer.email},on:{input:function(a){a.target.composing||e.$set(e.customer,"email",a.target.value)}}}),t("div",{staticClass:"error-box"},[e._v(e._s(e.errors.first("email")))])]),t("form",{on:{submit:function(a){return a.preventDefault(),e.submit()}}},[t("div",{staticClass:"address"},[t("h2",[e._v("Shipping details")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.firstName,expression:"customer.firstName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"half",class:{error:e.errors.collect("firstName").length>0},attrs:{name:"firstName",type:"text",placeholder:"First Name"},domProps:{value:e.customer.firstName},on:{input:function(a){a.target.composing||e.$set(e.customer,"firstName",a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.lastName,expression:"customer.lastName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"half",class:{error:e.errors.collect("lastName").length>0},attrs:{name:"lastName",type:"text",placeholder:"Last Name"},domProps:{value:e.customer.lastName},on:{input:function(a){a.target.composing||e.$set(e.customer,"lastName",a.target.value)}}}),t("div",{staticClass:"error-box"},[t("span",[e._v(e._s(e.errors.first("firstName")))]),t("span",[e._v(e._s(e.errors.first("lastName")))])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.company,expression:"customer.company"}],class:{error:e.errors.collect("company").length>0},attrs:{name:"company",type:"text",placeholder:"Company (optional)"},domProps:{value:e.customer.company},on:{input:function(a){a.target.composing||e.$set(e.customer,"company",a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.address,expression:"customer.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{error:e.errors.collect("address").length>0},attrs:{name:"address",type:"text",placeholder:"Street Address"},domProps:{value:e.customer.address},on:{input:function(a){a.target.composing||e.$set(e.customer,"address",a.target.value)}}}),t("div",{staticClass:"error-box"},[e._v(e._s(e.errors.first("address")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.flatNumber,expression:"customer.flatNumber"}],class:{error:e.errors.collect("flatNumber").length>0},attrs:{name:"flatNumber",type:"text",placeholder:"Apartment/Flat number etc. (optional)"},domProps:{value:e.customer.flatNumber},on:{input:function(a){a.target.composing||e.$set(e.customer,"flatNumber",a.target.value)}}}),t("div",{staticClass:"error-box"},[e._v(e._s(e.errors.first("flatNumber")))]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.city,expression:"customer.city"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{error:e.errors.collect("city").length>0},attrs:{name:"city",type:"text",placeholder:"City"},domProps:{value:e.customer.city},on:{input:function(a){a.target.composing||e.$set(e.customer,"city",a.target.value)}}}),t("div",{staticClass:"error-box"},[e._v(e._s(e.errors.first("city")))]),t("v-select",{class:{error:e.selectError},attrs:{name:"country",options:e.countries,label:"name",placeholder:"Select a country"},model:{value:e.customer.country,callback:function(a){e.$set(e.customer,"country",a)},expression:"customer.country"}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.postcode,expression:"customer.postcode"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"half",class:{error:e.errors.collect("postcode").length>0},attrs:{name:"postcode",type:"text",placeholder:"Postal/zip code"},domProps:{value:e.customer.postcode},on:{input:function(a){a.target.composing||e.$set(e.customer,"postcode",a.target.value)}}}),t("div",{staticClass:"error-box"},[e.selectError?t("span",[e._v("Please select a country")]):e._e(),t("span",[e._v(e._s(e.errors.first("postcode")))])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.phone,expression:"customer.phone"}],attrs:{name:"phone",type:"text",placeholder:"Phone Number (optional)"},domProps:{value:e.customer.phone},on:{input:function(a){a.target.composing||e.$set(e.customer,"phone",a.target.value)}}})],1),t("div",{staticClass:"choices"},[t("p",{on:{click:function(a){return e.$router.back()}}},[e._v("< Continue shopping")]),t("button",{staticClass:"button button--oldskool"},[e._v("Proceed to payment")])])])])}),s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",[e._v("Contact information"),t("span",[e._v("Or log into your account")])])}],c={name:"CustomerInfo",props:["customerInit"],mounted:function(){this.customerInit&&(this.customer=this.customerInit)},data:function(){return{selectError:null,customer:{email:null,firstName:null,lastName:null,address:null,company:null,flatNumber:null,city:null,country:null,postcode:null},countries:[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]}},watch:{"customer.country":function(){this.watching&&(this.selectError=!this.customer.country)}},methods:{validateSelect:function(){this.customer.country?this.selectError=!1:this.selectError=!0},submit:function(){var e=this;this.$validator.validate().then(function(a){a&&e.customer.country?e.$emit("next-step",e.customer):(e.watching=!0,e.selectError=!e.customer.country)})}}},i=c,d=t("2877"),m=Object(d["a"])(i,r,s,!1,null,null,null),l=m.exports,u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"left-column"},[t("div",{staticClass:"review"},[t("div",[t("span",[e._v("Email")]),t("span",[e._v(e._s(e.email))]),t("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])]),t("div",[t("span",[e._v("Ship to")]),t("span",[e._v(e._s(e.address))]),t("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])])]),t("form",{on:{submit:function(a){return a.preventDefault(),e.submit(a)}}},[t("div",{staticClass:"shipping"},[t("h2",[e._v("Shipping method")]),t("div",{staticClass:"radios"},e._l(e.shippingMethods,function(a,n){return t("label",{attrs:{for:"method"+n}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod,expression:"selectedMethod"}],attrs:{id:"method"+n,type:"radio",name:"method"},domProps:{value:a,checked:e._q(e.selectedMethod,a)},on:{change:function(t){e.selectedMethod=a}}}),t("span",[e._v(e._s(a.name))]),t("span",[e._v("£"+e._s(a.cost.toFixed(2)))])])}),0)]),t("div",{staticClass:"choices"},[t("p",{on:{click:function(a){return e.$router.back()}}},[e._v("< Continue shopping")]),t("button",{staticClass:"button button--oldskool"},[e._v("Proceed to payment")])])])])},p=[],v={name:"shipping",props:["email","address","method"],data:function(){return{selectedMethod:"Standard delivery - 3-5 business days",shippingMethods:[{name:"Standard delivery - 3-5 business days",cost:0},{name:"Express delivery - 1-2 business days",cost:4.5}]}},methods:{submit:function(e){this.$emit("next-step",this.selectedMethod)}},mounted:function(){this.selectedMethod=this.method?this.method:this.shippingMethods[0]}},h=v,f=(t("6a74"),Object(d["a"])(h,u,p,!1,null,null,null)),g=f.exports,b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"left-column"},[t("div",{staticClass:"review"},[t("div",[t("span",[e._v("Email")]),t("span",[e._v(e._s(e.email))]),t("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])]),t("div",[t("span",[e._v("Ship to")]),t("span",[e._v(e._s(e.address))]),t("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])]),t("div",[t("span",[e._v("Ship by")]),t("span",[e._v(e._s(e.method.name))]),t("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])])]),t("h2",{staticClass:"payment"},[e._v("Payment")]),t("p",[e._v("All payments are 3D secure encrypted - your payment details are kept secure and safe.")]),t("form",{attrs:{action:"/charge",method:"post",id:"payment-form"},on:{submit:function(a){return a.preventDefault(),e.onSubmit(a)}}},[e._m(0),t("div",{staticClass:"choices"},[t("p",{on:{click:function(a){return e.$router.back()}}},[e._v("< Continue shopping")]),t("button",{staticClass:"button button--oldskool",attrs:{value:"submit"}},[e._v("Pay now")])])])])},y=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"form-row"},[t("label",{attrs:{for:"card-element"}},[e._v("\n                Credit or debit card\n            ")]),t("div",{attrs:{id:"card-element"}}),t("div",{attrs:{id:"card-errors",role:"alert"}})])}],C={name:"shipping",props:["email","address","method"],data:function(){return{card:null}},mounted:function(){var e=this;this.$loadScript("https://js.stripe.com/v3/").then(function(){window.stripe=Stripe("pk_test_9yxW3tIbgMojGmrFlt66m1ut00VurR8txa");var a=window.stripe.elements(),t={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#d04949",iconColor:"#d04949"}};e.card=a.create("card",{style:t}),e.card.addEventListener("change",function(e){var a=document.getElementById("card-errors");e.error?a.textContent=e.error.message:a.textContent=""}),e.card.mount("#card-element")}).catch(function(e){console.log(e)})},methods:{onSubmit:function(e){window.stripe.createToken(this.card).then(function(e){if(e.error){var a=document.getElementById("card-errors");a.textContent=e.error.message}else this.stripeTokenHandler(e.token)})},stripeTokenHandler:function(e){var a=document.getElementById("payment-form"),t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("name","stripeToken"),t.setAttribute("value",e.id),a.appendChild(t),a.submit()}}},_=C,S=(t("8190"),Object(d["a"])(_,b,y,!1,null,"9551ee4c",null)),M=S.exports,N={name:"checkout",data:function(){return{step:0,order:{customer:null,shippingMethod:null}}},components:{Shipping:g,CustomerInfo:l,Payment:M},mounted:function(){var e=this.$store.state.cart.subtotal;this.$store.commit("createOrder",e)},computed:{items:function(){return this.$store.state.cart.items},subtotal:function(){return this.$store.state.cart.subtotal},activeOrder:function(){return this.$store.state.activeOrder},fullAddress:function(){if(this.order.customer){var e=this.order.customer,a=e.flatNumber?e.flatNumber+", ":"";return a+e.address+", "+e.city+", "+e.postcode+", "+e.country.name}return null}},methods:{proceedToShipping:function(e){this.order.customer=e,this.step=1},proceedToPayment:function(e){this.order.shippingMethod=e,this.step=2},navigateTo:function(e){switch(e){case 0:this.step=0;break;case 1:if(this.order.customer){this.step=1;break}case 2:if(this.order.shippingMethod){this.step=2;break}}}}},A=N,P=(t("335c"),Object(d["a"])(A,n,o,!1,null,null,null));a["default"]=P.exports},"7f7f":function(e,a,t){var n=t("86cc").f,o=Function.prototype,r=/^\s*function ([^ (]*)/,s="name";s in o||t("9e1e")&&n(o,s,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},8190:function(e,a,t){"use strict";var n=t("8841"),o=t.n(n);o.a},8841:function(e,a,t){},bcd3:function(e,a,t){}}]);
//# sourceMappingURL=chunk-36ff1bec.2fd56e5d.js.map