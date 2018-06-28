import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notebooks: [
      {
        name: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
        price: 2259,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
        price: 2284,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133280/7/133280747G1.jpg',
        stars: 3.4,
        totalReviews: 20,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
        price: 1490,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
        price: 2307,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg',
        stars: 4.4,
        totalReviews: 340,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
        price: 2599,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg',
        stars: 3,
        totalReviews: 30,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Notebook Dell Alienware - i7 16GB',
        price: 14000,
        image: 'https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg',
        stars: 2,
        totalReviews: 248,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    smartphones: [
      {
        name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
        price: 1199,
        image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
        stars: 0,
        totalReviews: 0,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
        price: 929,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
        stars: 1.5,
        totalReviews: 11,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
        price: 3949,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg',
        stars: 1,
        totalReviews: 2,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Samsung Galaxy S7 Edge',
        price: 1943,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png',
        stars: 5,
        totalReviews: 310,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Motorola Moto G6 Plus',
        price: 1699,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg',
        stars: 2.9,
        totalReviews: 42,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Smartphone Motorola Moto Z3 Play',
        price: 2999,
        image: 'https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg',
        stars: 0.5,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getNotebooks: state => state.notebooks,
    getSmartphones: state => state.smartphones,
    getAllProducts: state => state.notebooks.concat(state.smartphones),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
