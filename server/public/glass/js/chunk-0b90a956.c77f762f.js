(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b90a956"],{"29a2":function(e,a,n){e.exports=n.p+"../../public/glass/img/spinner2.277c2157.svg"},"335c":function(e,a,n){"use strict";var t=n("71ff"),s=n.n(t);s.a},"456d":function(e,a,n){var t=n("4bf8"),s=n("0d58");n("5eda")("keys",function(){return function(e){return s(t(e))}})},"5eda":function(e,a,n){var t=n("5ca1"),s=n("8378"),r=n("79e5");e.exports=function(e,a){var n=(s.Object||{})[e]||Object[e],o={};o[e]=a(n),t(t.S+t.F*r(function(){n(1)}),"Object",o)}},"6a74":function(e,a,n){"use strict";var t=n("bcd3"),s=n.n(t);s.a},"71ff":function(e,a,n){},7514:function(e,a,n){"use strict";var t=n("5ca1"),s=n("0a49")(5),r="find",o=!0;r in[]&&Array(1)[r](function(){o=!1}),t(t.P+t.F*o,"Array",{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(r)},"77b7":function(e,a,n){},"7cb4":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("main",{staticClass:"review-order"},[n("h1",[e._v("Checkout")]),n("div",{staticClass:"breadcrumb"},[n("span",{class:{active:0===e.step},on:{click:function(a){return e.navigateTo(0)}}},[e._v("Details")]),e._v(" > \n        "),n("span",{class:{active:1===e.step},on:{click:function(a){return e.navigateTo(1)}}},[e._v("Shipping")]),e._v(" > \n        "),n("span",{class:{active:2===e.step},on:{click:function(a){return e.navigateTo(2)}}},[e._v("Payment")])]),n("div",{staticClass:"order-grid"},[0===e.step?n("CustomerInfo",{attrs:{emailInit:e.order.email,addressInit:e.order.shippingAddress},on:{"next-step":function(a){return e.proceedToShipping(a)}}}):1===e.step?n("Shipping",{attrs:{email:e.order.email,address:e.formattedAddress,method:e.order.shippingMethod},on:{"next-step":function(a){return e.proceedToPayment(a)},"previous-step":function(a){e.step=0}}}):2===e.step?n("Payment",{attrs:{email:e.order.email,formattedAddress:e.formattedAddress,shippingAddress:e.order.shippingAddress,method:e.order.shippingMethod}}):e._e(),n("div",{staticClass:"right-column"},[n("h2",[e._v("My order")]),e._l(e.items,function(a,t){return n("div",{key:t,staticClass:"order-item"},[n("img",{attrs:{src:a.product.content.images[0].path}}),n("p",{staticClass:"name"},[e._v(e._s(a.product.content.name))]),n("div",{staticClass:"details"},[n("p",{staticClass:"quantity"},[e._v("Quantity: "+e._s(a.quantity))]),n("p",{staticClass:"price"},[e._v("£"+e._s((a.product.inventory.price*a.quantity).toFixed(2))+" GBP")])])])}),e._m(0),e.activeOrder?n("div",{staticClass:"totals"},[n("div",[n("span",[e._v("Subtotal:")]),n("span",[e._v("£"+e._s(e.activeOrder.subtotal.toFixed(2))+" GBP")])]),n("div",[n("span",[e._v("Shipping:")]),n("span",[e._v(e._s(e.order.shippingMethod?e.order.shippingMethod.cost>0?"£"+e.order.shippingMethod.cost.toFixed(2)+" GBP":"Free":"calculated at next step"))])])]):e._e(),e.activeOrder?n("div",{staticClass:"grand-total"},[n("span",[e._v("Total:")]),n("span",[e._v("£"+e._s(e.activeOrder.total.toFixed(2))+" GBP")])]):e._e()],2)],1)])},s=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"discounts"},[n("input",{attrs:{type:"text",placeholder:"Gift card or discount code"}}),n("button",[e._v("Apply")])])}],r=(n("7f7f"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"left-column"},[n("div",{staticClass:"contact"},[e._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{error:e.errors.collect("email").length>0},attrs:{name:"email",type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),n("div",{staticClass:"error-box"},[e._v(e._s(e.errors.first("email")))])]),n("form",{staticClass:"addressForm",on:{submit:function(a){return a.preventDefault(),e.submit()}}},[n("AddressInputs",{key:"shipping",attrs:{title:"Shipping details",addressInit:e.address,foundErrors:e.foundErrors},on:{changed:function(a){return e.onAddressChange(a)}}}),n("div",{staticClass:"choices"},[n("p",{on:{click:function(a){return e.$router.back()}}},[e._v("< Continue shopping")]),n("button",{staticClass:"button button--oldskool"},[e._v("Proceed to payment")])])],1)])}),o=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("h2",[e._v("Contact information"),n("span",[e._v("Or log into your account")])])}],i=(n("ac6a"),n("456d"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"address"},[n("h2",[e._v(e._s(e.title))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address.firstName,expression:"address.firstName"}],staticClass:"half",class:{error:e.foundErrors.firstName},attrs:{name:"firstName",type:"text",placeholder:"First Name"},domProps:{value:e.address.firstName},on:{change:function(a){return e.$emit("changed",e.address)},input:function(a){a.target.composing||e.$set(e.address,"firstName",a.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address.lastName,expression:"address.lastName"}],staticClass:"half",class:{error:e.foundErrors.lastName},attrs:{name:"lastName",type:"text",placeholder:"Last Name"},domProps:{value:e.address.lastName},on:{change:function(a){return e.$emit("changed",e.address)},input:function(a){a.target.composing||e.$set(e.address,"lastName",a.target.value)}}}),n("div",{staticClass:"error-box"},[e.foundErrors.firstName?n("span",[e._v(e._s(e.foundErrors.firstName))]):n("span"),e.foundErrors.lastName?n("span",[e._v(e._s(e.foundErrors.lastName))]):e._e()]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address.company,expression:"address.company"}],class:{error:e.foundErrors.company},attrs:{name:"company",type:"text",placeholder:"Company (optional)"},domProps:{value:e.address.company},on:{change:function(a){return e.$emit("changed",e.address)},input:function(a){a.target.composing||e.$set(e.address,"company",a.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address.address,expression:"address.address"}],class:{error:e.foundErrors.address},attrs:{name:"address",type:"text",placeholder:"Street Address"},domProps:{value:e.address.address},on:{change:function(a){return e.$emit("changed",e.address)},input:function(a){a.target.composing||e.$set(e.address,"address",a.target.value)}}}),e.foundErrors.address?n("div",{staticClass:"error-box"},[e._v(e._s(e.foundErrors.address))]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address.flatNumber,expression:"address.flatNumber"}],class:{error:e.foundErrors.flatNumber},attrs:{name:"flatNumber",type:"text",placeholder:"Apartment/Flat number etc. (optional)"},domProps:{value:e.address.flatNumber},on:{change:function(a){return e.$emit("changed",e.address)},input:function(a){a.target.composing||e.$set(e.address,"flatNumber",a.target.value)}}}),e.foundErrors.flatNumber?n("div",{staticClass:"error-box"},[e._v(e._s(e.foundErrors.flatNumber))]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address.city,expression:"address.city"}],class:{error:e.foundErrors.city},attrs:{name:"city",type:"text",placeholder:"City"},domProps:{value:e.address.city},on:{change:function(a){return e.$emit("changed",e.address)},input:function(a){a.target.composing||e.$set(e.address,"city",a.target.value)}}}),e.foundErrors.city?n("div",{staticClass:"error-box"},[e._v(e._s(e.foundErrors.city))]):e._e(),n("v-select",{class:{error:e.foundErrors.country},attrs:{name:"country",options:e.countries,label:"name",placeholder:"Select a country"},on:{input:function(a){return e.$emit("changed",e.address)}},model:{value:e.address.country,callback:function(a){e.$set(e.address,"country",a)},expression:"address.country"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address.postcode,expression:"address.postcode"}],staticClass:"half",class:{error:e.foundErrors.postcode},attrs:{name:"postcode",type:"text",placeholder:"Postal/zip code"},domProps:{value:e.address.postcode},on:{change:function(a){return e.$emit("changed",e.address)},input:function(a){a.target.composing||e.$set(e.address,"postcode",a.target.value)}}}),n("div",{staticClass:"error-box"},[e.foundErrors.country?n("span",[e._v("Please select a country")]):n("span"),e.foundErrors.postcode?n("span",[e._v(e._s(e.foundErrors.postcode))]):e._e()]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address.phone,expression:"address.phone"}],attrs:{name:"phone",type:"text",placeholder:"Phone Number (optional)"},domProps:{value:e.address.phone},on:{change:function(a){return e.$emit("changed",e.address)},input:function(a){a.target.composing||e.$set(e.address,"phone",a.target.value)}}})],1)}),d=[],c={name:"address-inputs",props:["addressInit","title","foundErrors"],watch:{addressInit:function(e){e&&(this.address=e)}},mounted:function(){this.addressInit&&(this.address=this.addressInit)},data:function(){return{address:{firstName:null,lastName:null,address:null,company:null,flatNumber:null,city:null,country:null,postcode:null,phone:null},countries:[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Vietnam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]}}},m=c,l=n("2877"),u=Object(l["a"])(m,i,d,!1,null,null,null),p=u.exports,h={name:"CustomerInfo",props:["addressInit","emailInit"],data:function(){return{address:null,email:null,foundErrors:{}}},components:{AddressInputs:p},mounted:function(){this.addressInit?this.address=this.addressInit:this.address={firstName:null,lastName:null,address:null,company:null,flatNumber:null,city:null,country:null,postcode:null},this.emailInit&&(this.email=this.emailInit)},methods:{submit:function(){var e=this;this.$validator.validate().then(function(a){a&0===Object.keys(e.foundErrors).length&&e.$emit("next-step",{shippingAddress:e.address,email:e.email})})},onAddressChange:function(e){var a=this;this.foundErrors={},Object.keys(e).forEach(function(n){var t=e[n];if(!t||0===t.length){var s=null;switch(n){case"firstName":s="Please enter your first name";break;case"lastName":s="Please enter your last name";break;case"address":s="Please provide an address";break;case"city":s="Please enter your city";break;case"country":s="Select your country";break;case"postcode":s="Please enter your postcode";break}s&&(a.foundErrors[n]=s)}})}}},f=h,v=Object(l["a"])(f,r,o,!1,null,null,null),g=v.exports,y=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"left-column"},[n("div",{staticClass:"review"},[n("div",[n("span",[e._v("Email")]),n("span",[e._v(e._s(e.email))]),n("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])]),n("div",[n("span",[e._v("Ship to")]),n("span",[e._v(e._s(e.address))]),n("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])])]),n("form",{on:{submit:function(a){return a.preventDefault(),e.submit()}}},[n("div",{staticClass:"shipping"},[n("h2",[e._v("Shipping method")]),n("div",{staticClass:"radios"},e._l(e.shippingMethods,function(a,t){return n("label",{attrs:{for:"method"+t}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMethod,expression:"selectedMethod"}],attrs:{id:"method"+t,type:"radio",name:"method"},domProps:{value:a._id,checked:e._q(e.selectedMethod,a._id)},on:{change:function(n){e.selectedMethod=a._id}}}),n("span",[e._v(e._s(a.name+" - "+a.days[0]+"-"+a.days[1]+" business days"))]),n("span",[e._v("£"+e._s(a.cost.toFixed(2)))])])}),0)]),n("div",{staticClass:"choices"},[n("p",{on:{click:function(a){return e.$router.back()}}},[e._v("< Continue shopping")]),n("button",{staticClass:"button button--oldskool"},[e._v("Proceed to payment")])])])])},b=[],_=(n("7514"),{name:"shipping",props:["email","address","method"],mounted:function(){var e=this;this.$axios.get("/shipping-methods").then(function(a){e.shippingMethods=a.data,e.selectedMethod=e.method?e.method._id:e.shippingMethods[0]._id}).catch(function(){e.$router.push("/")})},data:function(){return{selectedMethod:null,shippingMethods:[]}},methods:{submit:function(){var e=this,a=this.shippingMethods.find(function(a){return a._id===e.selectedMethod});this.$emit("next-step",a)}}}),S=_,C=(n("6a74"),Object(l["a"])(S,y,b,!1,null,null,null)),A=C.exports,N=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"left-column"},[t("div",{staticClass:"review"},[t("div",[t("span",[e._v("Email")]),t("span",[e._v(e._s(e.email))]),t("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])]),t("div",[t("span",[e._v("Ship to")]),t("span",[e._v(e._s(e.formattedAddress))]),t("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])]),t("div",[t("span",[e._v("Ship by")]),t("span",[e._v(e._s(e.method.name)+" - "+e._s(e.method.days[1])+"-"+e._s(e.method.days[2])+" business days")]),t("span",{on:{click:function(a){return e.$emit("previous-step")}}},[e._v("Change")])])]),t("h2",{staticClass:"payment"},[e._v("Payment")]),t("p",[e._v("All payments are 3D secure encrypted - your payment details are kept secure and safe.")]),e._m(0),t("form",{attrs:{action:"/charge",method:"post",id:"payment-form"},on:{submit:function(a){return a.preventDefault(),e.onSubmit(a)}}},[t("div",{staticClass:"form-row"},[t("label",{attrs:{for:"card-element"}},[e._v("\n                Credit or debit card\n            ")]),t("div",{attrs:{id:"card-element"}}),e.cardErrors?t("div",{attrs:{id:"card-errors",role:"alert"}},[e._v(e._s(e.cardErrors))]):e._e()]),t("AddressInputs",{key:"billing",attrs:{title:"Billing details",addressInit:e.billingAddress,foundErrors:e.foundErrors},on:{changed:function(a){return e.onAddressChange(a)}}}),e.error?t("div",{staticClass:"error",staticStyle:{color:"#d04949",width:"100%","font-family":"'Roboto'","font-size":"1em"}},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e(),t("div",{staticClass:"choices"},[t("p",{on:{click:function(a){return e.$router.back()}}},[e._v("< Continue shopping")]),t("button",{staticClass:"button button--oldskool",staticStyle:{display:"flex","align-items":"center"},attrs:{value:"submit"}},[e._v("Pay now  "),e.processing?t("img",{staticStyle:{height:"30px"},attrs:{src:n("29a2")}}):e._e()])])],1)])},M=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("p",{staticStyle:{background:"#fff9d1",padding:"15px","font-weight":"400","line-height":"1.5"}},[e._v("Welcome to the demo checkout page. Don't worry, no need to enter real card details! Try this Stripe test card number: "),n("strong",[e._v("4000 0027 6000 3184")]),e._v(". Use any expiry date in the future with a random cvc and zip code ;) ")])}],E={name:"payment",props:["email","formattedAddress","method","shippingAddress"],inject:["notyf"],components:{AddressInputs:p},data:function(){return{card:null,billingAddress:null,foundErrors:{},cardErrors:null,processing:!1,error:null}},mounted:function(){var e=this,a=new Object;a.firstName=this.shippingAddress.firstName,a.lastName=this.shippingAddress.lastName,a.address=this.shippingAddress.address,a.company=this.shippingAddress.company,a.flatNumber=this.shippingAddress.flatNumber,a.city=this.shippingAddress.city,a.country=this.shippingAddress.country,a.postcode=this.shippingAddress.postcode,a.phone=this.shippingAddress.phone,this.billingAddress=a,this.$loadScript("https://js.stripe.com/v3/").then(function(){window.stripe=Stripe("pk_test_9yxW3tIbgMojGmrFlt66m1ut00VurR8txa");var a=window.stripe.elements(),n={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#d04949",iconColor:"#d04949"}};e.card=a.create("card",{style:n}),e.card.addEventListener("change",function(a){a.error?e.cardErrors=a.error.message:e.cardErrors=!1}),e.card.mount("#card-element")}).catch(function(){e.notyf.error("Error loading payment page. Please try again later."),e.$router.push("/")})},methods:{onSubmit:function(e){var a=this;0===Object.keys(this.foundErrors).length&&!1===this.cardErrors?(this.processing=!0,this.$store.commit("addBillingAddress",this.billingAddress),this.$axios.post("/orders/validate",{order:this.$store.state.activeOrder}).then(function(e){var n={name:a.billingAddress.firstName+" "+a.billingAddress.lastName,email:a.email,address:{line1:a.billingAddress.address,postal_code:a.billingAddress.postcode,country:a.billingAddress.country.code,city:a.billingAddress.city}};a.billingAddress.phone&&(n.phone=a.billingAddress.phone),window.stripe.handleCardPayment(a.$store.state.activeOrder.paymentIntent.client_secret,a.card,{payment_method_data:{billing_details:n}}).then(function(e){e.error?(a.processing=!1,a.error="Something went wrong while trying to process this payment. Please ensure your billing details are correct, or try using a different card if problem persists. "):(a.$axios.post("/orders",{order:a.$store.state.activeOrder}),a.processing=!1,a.$store.commit("completeOrder"),a.$router.push("/order-complete"))})}).catch(function(){a.notyf.error("Whoops, there was an error processing your order. Please try again later, or get in touch with us."),a.$router.push("/")})):null===this.cardErrors&&(this.cardErrors="Your card number is incomplete")},onAddressChange:function(e){var a=this;this.foundErrors={},Object.keys(e).forEach(function(n){var t=e[n];if(!t||0===t.length){var s=null;switch(n){case"firstName":s="Please enter your first name";break;case"lastName":s="Please enter your last name";break;case"address":s="Please provide an address";break;case"city":s="Please enter your city";break;case"country":s="Select your country";break;case"postcode":s="Please enter your postcode";break}s&&(a.foundErrors[n]=s)}})}}},P=E,I=(n("865e"),Object(l["a"])(P,N,M,!1,null,"061b6bdc",null)),T=I.exports,k={name:"checkout",data:function(){return{step:0,order:{shippingMethod:null,shippingAddress:null,email:null}}},components:{Shipping:A,CustomerInfo:g,Payment:T},mounted:function(){var e=this,a=this.$store.state.cart.subtotal,n={amount:100*a,currency:"gbp"},t=this.$store.state.activeOrder?"put":"post";this.$store.state.activeOrder&&(n.id=this.$store.state.activeOrder.paymentIntent.id),this.$axios({method:t,url:"/orders/intent",data:n}).then(function(n){e.$store.commit("createOrder",{paymentIntent:n.data.paymentIntent?n.data.paymentIntent:e.$store.state.activeOrder.paymentIntent,subtotal:a})}).catch(function(){e.$router.push("/")})},computed:{items:function(){return this.$store.state.cart.items},subtotal:function(){return this.$store.state.cart.subtotal},activeOrder:function(){return this.$store.state.activeOrder},formattedAddress:function(){if(this.order.shippingAddress){var e=this.order.shippingAddress,a=e.flatNumber?e.flatNumber+", ":"";return a+e.address+", "+e.city+", "+e.postcode+", "+e.country.name}return null}},methods:{proceedToShipping:function(e){this.order.shippingAddress=e.shippingAddress,this.order.email=e.email,this.$store.commit("addShippingAddress",{shippingAddress:e.shippingAddress,email:e.email}),this.step=1},proceedToPayment:function(e){var a=this;this.order.shippingMethod=e,this.step=2,e.cost>0?this.$axios.put("/orders/intent",{id:this.$store.state.activeOrder.paymentIntent.id,amount:100*this.$store.state.activeOrder.total+100*e.cost,currency:"gbp"}).then(function(n){a.$store.commit("addShippingMethod",e)}).catch(function(){a.$store.commit("resetOrder"),a.$router.push("/")}):this.$store.commit("addShippingMethod",e)},navigateTo:function(e){switch(e){case 0:this.step=0;break;case 1:if(this.order.email&&this.order.shippingAddress){this.step=1;break}case 2:if(this.order.shippingMethod){this.step=2;break}}}}},$=k,G=(n("335c"),Object(l["a"])($,t,s,!1,null,null,null));a["default"]=G.exports},"865e":function(e,a,n){"use strict";var t=n("77b7"),s=n.n(t);s.a},ac6a:function(e,a,n){for(var t=n("cadf"),s=n("0d58"),r=n("2aba"),o=n("7726"),i=n("32e9"),d=n("84f2"),c=n("2b4c"),m=c("iterator"),l=c("toStringTag"),u=d.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=s(p),f=0;f<h.length;f++){var v,g=h[f],y=p[g],b=o[g],_=b&&b.prototype;if(_&&(_[m]||i(_,m,u),_[l]||i(_,l,g),d[g]=u,y))for(v in t)_[v]||r(_,v,t[v],!0)}},bcd3:function(e,a,n){}}]);
//# sourceMappingURL=chunk-0b90a956.c77f762f.js.map