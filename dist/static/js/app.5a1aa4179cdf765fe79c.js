webpackJsonp([1],{"1uua":function(t,e){},"3tJn":function(t,e){},"8Bgs":function(t,e){},AiOc:function(t,e){},EQdz:function(t,e){},KEEg:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEwIDUxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEwIDUxMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9InNob3BwaW5nLWNhcnQiPg0KCQk8cGF0aCBkPSJNMTUzLDQwOGMtMjguMDUsMC01MSwyMi45NS01MSw1MXMyMi45NSw1MSw1MSw1MXM1MS0yMi45NSw1MS01MVMxODEuMDUsNDA4LDE1Myw0MDh6IE0wLDB2NTFoNTFsOTEuOCwxOTMuOEwxMDcuMSwzMDYgICAgYy0yLjU1LDcuNjUtNS4xLDE3Ljg1LTUuMSwyNS41YzAsMjguMDUsMjIuOTUsNTEsNTEsNTFoMzA2di01MUgxNjMuMmMtMi41NSwwLTUuMS0yLjU1LTUuMS01LjF2LTIuNTUxbDIyLjk1LTQzLjM1aDE4OC43ICAgIGMyMC40LDAsMzUuNy0xMC4yLDQzLjM1LTI1LjVMNTA0LjksODkuMjVjNS4xLTUuMSw1LjEtNy42NSw1LjEtMTIuNzVjMC0xNS4zLTEwLjItMjUuNS0yNS41LTI1LjVIMTA3LjFMODQuMTUsMEgweiBNNDA4LDQwOCAgICBjLTI4LjA1LDAtNTEsMjIuOTUtNTEsNTFzMjIuOTUsNTEsNTEsNTFzNTEtMjIuOTUsNTEtNTFTNDM2LjA1LDQwOCw0MDgsNDA4eiIgZmlsbD0iI0ZGRkZGRiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("Dd8w"),r=s.n(a),o=s("NYxO"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("nav",{staticClass:"nav"},[e("ul",{staticClass:"nav-links"},[e("li",{staticClass:"link"},[e("router-link",{attrs:{to:"/"}},[this._v("AllProducts")])],1),this._v(" "),e("li",{staticClass:"link"},[e("router-link",{attrs:{to:"/smartphones"}},[this._v("Smartphones")])],1),this._v(" "),e("li",{staticClass:"link"},[e("router-link",{attrs:{to:"/notebooks"}},[this._v("Notebooks")])],1)])]),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var c=s("VU/8")({},i,!1,function(t){s("AiOc")},"data-v-7fe43613",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:this.btnColor},[this._t("default"),this._v(" "),this.cartIcon?e("img",{attrs:{src:s("KEEg"),alt:"Cart Icon"}}):this._e()],2)},staticRenderFns:[]};var d=s("VU/8")({props:["btnColor","cartIcon"]},u,!1,function(t){s("Zrc9")},"data-v-a475d4c8",null).exports,m={components:{btn:d},methods:r()({},Object(o.b)(["showOrHiddenPopupCart"]),{hasProduct:function(){return this.getProductsInCart.length>0},totalPrice:function(){return this.getProductsInCart.reduce(function(t,e){return t+e.price},0)},showPopupCart:function(){this.showOrHiddenPopupCart()}}),computed:r()({},Object(o.c)(["getProductsInCart"]))},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[t.hasProduct()?t._e():s("span",[t._v("No products :/")]),t._v(" "),t._l(t.getProductsInCart,function(e){return s("div",{key:e.id,staticClass:"box-item"},[s("img",{staticClass:"item-thumb",attrs:{src:e.image,alt:e.name}}),t._v(" "),s("h3",{staticClass:"item-name"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"item-amount"},[t._v("Amount: 1")]),t._v(" "),s("span",{staticClass:"item-price"},[t._v("R$ "+t._s(e.price)+", 00")])])}),t._v(" "),t.hasProduct()?s("div",{staticClass:"cart-info"},[s("span",[t._v("Total: R$ "+t._s(t.totalPrice())+", 00")]),t._v(" "),s("router-link",{attrs:{to:"/checkout"}},[s("btn",{attrs:{btnColor:"btn btn-small btn-info"},nativeOn:{click:function(e){t.showPopupCart()}}},[t._v("\n        View cart\n      ")])],1)],1):t._e()],2)},staticRenderFns:[]};var p=s("VU/8")(m,l,!1,function(t){s("oKrT")},"data-v-c3b8dcba",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mask"})},staticRenderFns:[]};var v=s("VU/8")({},h,!1,function(t){s("1uua")},"data-v-716177b5",null).exports,g={components:{mainMenu:c,btn:d,popupcart:p,maskBg:v},methods:r()({},Object(o.b)(["showOrHiddenPopupCart"]),{hasProduct:function(){return this.getProductsInCart.length>0},showPopupCart:function(){this.showOrHiddenPopupCart()}}),computed:r()({},Object(o.c)(["getProductsInCart","getPopupCart"]))},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("mainMenu",[s("btn",{attrs:{btnColor:"btn btn-small btn-info btn-popup",cartIcon:!0},nativeOn:{click:function(e){t.showPopupCart()}}},[t._v("\n       Cart\n      "),t.hasProduct()?s("span",{staticClass:"btn-circle"},[t._v("\n         "+t._s(t.getProductsInCart.length)+"\n      ")]):t._e()]),t._v(" "),s("transition",{attrs:{name:"appear"}},[t.getPopupCart?s("popupcart",{staticClass:"cart"}):t._e()],1)],1),t._v(" "),s("transition",{attrs:{name:"leave"}},[s("router-view")],1),t._v(" "),t.getPopupCart?s("maskBg",{nativeOn:{click:function(e){t.showPopupCart()}}}):t._e()],1)},staticRenderFns:[]};var C=s("VU/8")(g,b,!1,function(t){s("m8UQ")},null,null).exports,f=s("/ocq"),P={props:["products"],components:{btn:d},methods:r()({},Object(o.b)(["addProduct","currentProduct"]),{addProductToCart:function(t){this.addProduct(t)},addCurrentProduct:function(t){this.currentProduct(t)}})},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"listOfProducts"},t._l(t.products,function(e){return s("li",{key:e.id,staticClass:"product"},[s("img",{attrs:{width:"300px",src:e.image,alt:e.name}}),t._v(" "),s("router-link",{attrs:{to:"/product-details"}},[s("h2",{staticClass:"product-name",on:{click:function(s){t.addCurrentProduct(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])]),t._v(" "),s("div",{staticClass:"product-price"},[s("span",[t._v("R$ "+t._s(e.price)+", 00")]),t._v(" "),s("span",[t._v("10 x "+t._s(Math.round(e.price/10))+", 00 ")])]),t._v(" "),s("btn",{attrs:{btnColor:"btn btn-large btn-sucess",cartIcon:!0},nativeOn:{click:function(s){t.addProductToCart(e)}}},[t._v("\n      Add to cart\n    ")])],1)}))},staticRenderFns:[]};var w=s("VU/8")(P,_,!1,function(t){s("jw/v")},"data-v-bf1553f6",null).exports,M={components:{listOfProducts:w},computed:r()({},Object(o.c)(["getAllProducts"]))},I={render:function(){var t=this.$createElement;return(this._self._c||t)("listOfProducts",{attrs:{products:this.getAllProducts}})},staticRenderFns:[]};var y=s("VU/8")(M,I,!1,function(t){s("EQdz")},"data-v-377ff8ba",null).exports,O={components:{listOfProducts:w},computed:r()({},Object(o.c)(["getSmartphones"]))},j={render:function(){var t=this.$createElement;return(this._self._c||t)("listOfProducts",{attrs:{products:this.getSmartphones}})},staticRenderFns:[]};var L=s("VU/8")(O,j,!1,function(t){s("gAOo")},null,null).exports,N={components:{listOfProducts:w},computed:r()({},Object(o.c)(["getNotebooks"]))},x={render:function(){var t=this.$createElement;return(this._self._c||t)("listOfProducts",{attrs:{products:this.getNotebooks}})},staticRenderFns:[]};var D=s("VU/8")(N,x,!1,function(t){s("3tJn")},null,null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"stars-box"},[e("svg",{staticClass:"stars",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"-54 -1 128 22"}},[e("path",{staticClass:"star-bg",attrs:{d:"M-55-1.9H75v24H-55z"}}),e("rect",{staticClass:"star-fill",attrs:{x:"-55",y:"-2",width:this.rate,height:"24"}}),e("path",{staticClass:"star-path",attrs:{d:"M-55-2v24H75V-2H-55zm17.8 21.4l-6.4-3.3-6.4 3.3 1.2-7-5.2-5 7.2-1 3.2-6.4 3.2 6.4 7.2 1-5.2 5 1.2 7zm26.8-.2l-6.4-3.3-6.4 3.3 1.2-7-5.2-5 7.2-1 3.2-6.4 3.2 6.4 7.2 1-5.2 5 1.2 7zm26.8 0L10 15.9l-6.4 3.3 1.2-7-5.2-5 7.2-1L10-.2l3.2 6.4 7.2 1-5.2 5 1.2 7zm26.8 0l-6.4-3.3-6.4 3.3 1.2-7-5.2-5 7.2-1 3.2-6.4L40 6.2l7.2 1-5.2 5 1.2 7zm26.8 0l-6.4-3.3-6.4 3.3 1.2-7-5.2-5 7.2-1 3.2-6.4 3.2 6.4 7.2 1-5.2 5 1.2 7z"}})]),this._v(" "),e("span",{staticClass:"total-stars"},[this._v(this._s(this.totalReviews)+" reviews.")])])},staticRenderFns:[]};var T=s("VU/8")({props:["rate","totalReviews"]},k,!1,function(t){s("aC2m")},"data-v-7a059cdf",null).exports,E={components:{btn:d,maskBg:v},computed:r()({},Object(o.c)({showModal:"getShowModal"})),methods:r()({},Object(o.b)(["showOrHiddenModal"]),{closeModal:function(){this.showOrHiddenModal()}})},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal"},[s("h3",[t._v("Details")]),t._v(" "),t._t("default"),t._v(" "),s("btn",{attrs:{btnColor:"btn btn-small btn-danger"},nativeOn:{click:function(e){t.closeModal()}}},[t._v("\n        Close\n      ")])],2)]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("maskBg",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{click:function(e){t.closeModal()}}})],1)],1)},staticRenderFns:[]};var S={components:{btn:d,stars:T,modal:s("VU/8")(E,R,!1,function(t){s("raSf")},"data-v-cb83c7b6",null).exports},computed:r()({},Object(o.c)({currentProduct:"getCurrentProduct"})),methods:r()({},Object(o.b)(["addProduct","showOrHiddenModal"]),{addProductToCart:function(t){this.addProduct(t)},rated:function(t){return 20*t+"%"},openModal:function(){this.showOrHiddenModal()}})},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-box"},[s("div",{staticClass:"product-image"},[s("img",{attrs:{width:"300px",src:t.currentProduct.image,alt:t.currentProduct.name}}),t._v(" "),s("stars",{attrs:{rate:t.rated(t.currentProduct.stars),totalReviews:t.currentProduct.totalReviews}})],1),t._v(" "),s("div",{staticClass:"product-info"},[s("h2",{staticClass:"product-title"},[t._v(t._s(t.currentProduct.name))]),t._v(" "),s("span",{staticClass:"product-price"},[t._v("R$ "+t._s(t.currentProduct.price)+", 00")]),t._v(" "),s("btn",{attrs:{btnColor:"btn btn-large btn-sucess",cartIcon:!0},nativeOn:{click:function(e){t.addProductToCart(t.currentProduct)}}},[t._v("\n      Buy Now\n    ")]),t._v(" "),s("btn",{attrs:{btnColor:"btn btn-large btn-info"},nativeOn:{click:function(e){t.openModal()}}},[t._v("\n      More Info\n    ")])],1),t._v(" "),s("modal",[t._v(t._s(t.currentProduct.details))])],1)},staticRenderFns:[]};var A=s("VU/8")(S,U,!1,function(t){s("8Bgs")},"data-v-e3fce2da",null).exports,G={computed:r()({},Object(o.c)(["getProductsInCart"])),methods:r()({},Object(o.b)(["removeProduct"]),{hasProduct:function(){return this.getProductsInCart.length>0},totalPrice:function(){return this.getProductsInCart.reduce(function(t,e){return t+e.price},0)},remove:function(t){this.removeProduct(t)}})},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"checkout-box"},[s("ul",{staticClass:"checkout-list"},[s("transition-group",{attrs:{name:"fade"}},t._l(t.getProductsInCart,function(e){return s("li",{key:e.id,staticClass:"checkout-product"},[s("img",{staticClass:"product-image",attrs:{src:e.image,alt:e.name}}),t._v(" "),s("h3",{staticClass:"product-name"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"product-price"},[t._v("R$ "+t._s(e.price)+",00 ")]),t._v(" "),s("button",{staticClass:"product-remove",on:{click:function(e){t.remove(t.index)}}},[t._v("⨯")])])}))],1),t._v(" "),t.hasProduct()?t._e():s("div",{staticClass:"checkout-message"},[s("h3",[t._v("No products...")]),t._v(" "),s("router-link",{attrs:{to:"./"}},[t._v("Back to list of products")])],1),t._v(" "),t.hasProduct()?s("h3",{staticClass:"total"},[t._v("\n    Total: R$ "+t._s(t.totalPrice())+", 00\n  ")]):t._e()])},staticRenderFns:[]};var H=s("VU/8")(G,z,!1,function(t){s("d5XR")},"data-v-134a8ac8",null).exports;n.a.use(f.a);var V=new f.a({routes:[{path:"",name:"All Products",component:y},{path:"/smartphones",name:"Smartphones",component:L},{path:"/notebooks",name:"Notebooks",component:D},{path:"/product-details",name:"Product",component:A},{path:"/checkout",name:"Checkout",component:H}]}),B=s("kFye");n.a.use(o.a);var Z=new o.a.Store({state:{notebooks:[{id:Object(B.a)(),name:"Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB",price:2259,image:"https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png",stars:5,totalReviews:230,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB",price:2284,image:"https://i.pinimg.com/originals/5f/89/ae/5f89aef681eab294cf74b938c540a858.png",stars:3.4,totalReviews:20,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Notebook Samsung Essentials E21 Intel Celeron Dual Core",price:1490,image:"https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg",stars:1,totalReviews:1,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Notebook Samsung Expert X22 Intel Core 7 i5 8GB",price:2307,image:"https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg",stars:4.4,totalReviews:340,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Notebook VAIO Fit 15S B1211B Intel Core i5 4GB",price:2599,image:"https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg",stars:3,totalReviews:30,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Notebook Dell Alienware - i7 16GB",price:14e3,image:"https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg",stars:2,totalReviews:248,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"}],smartphones:[{id:Object(B.a)(),name:"Smartphone Xiaomi Mi A1 dual Android one 7.1",price:1199,image:"https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg",stars:0,totalReviews:0,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Smartphone Moto G 5S Dual Chip Android 7.0",price:929,image:"https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png",stars:1.5,totalReviews:11,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',price:3949,image:"https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg",stars:1,totalReviews:2,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Smartphone Samsung Galaxy S7 Edge",price:1943,image:"https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png",stars:5,totalReviews:310,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Smartphone Motorola Moto G6 Plus",price:1699,image:"https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg",stars:2.9,totalReviews:42,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"},{id:Object(B.a)(),name:"Smartphone Motorola Moto Z3 Play",price:2999,image:"https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg",stars:.5,totalReviews:1,details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"}],cartProducts:[],currentProduct:{},showModal:!1,showPopupCart:!1},getters:{getNotebooks:function(t){return t.notebooks},getSmartphones:function(t){return t.smartphones},getAllProducts:function(t){return t.notebooks.concat(t.smartphones)},getProductsInCart:function(t){return t.cartProducts},getCurrentProduct:function(t){return t.currentProduct},getShowModal:function(t){return t.showModal},getPopupCart:function(t){return t.showPopupCart}},mutations:{ADD_PRODUCT:function(t,e){t.cartProducts.push(e)},REMOVE_PRODUCT:function(t,e){t.cartProducts.splice(e,1)},CURRENT_PRODUCT:function(t,e){t.currentProduct=e},SHOW_MODAL:function(t){t.showModal=!t.showModal},SHOW_POPUP_CART:function(t){t.showPopupCart=!t.showPopupCart}},actions:{addProduct:function(t,e){t.commit("ADD_PRODUCT",e)},removeProduct:function(t,e){t.commit("REMOVE_PRODUCT",e)},currentProduct:function(t,e){t.commit("CURRENT_PRODUCT",e)},showOrHiddenModal:function(t){t.commit("SHOW_MODAL")},showOrHiddenPopupCart:function(t){t.commit("SHOW_POPUP_CART")}}});n.a.config.productionTip=!1,new n.a({el:"#app",router:V,store:Z,components:{App:C},template:"<App/>"})},Zrc9:function(t,e){},aC2m:function(t,e){},d5XR:function(t,e){},gAOo:function(t,e){},"jw/v":function(t,e){},m8UQ:function(t,e){},oKrT:function(t,e){},raSf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5a1aa4179cdf765fe79c.js.map