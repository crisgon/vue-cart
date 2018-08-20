<template>
  <div class="product-box">
    <div class="product-image">
      <img :src="currentProduct.image" alt="">
      <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews"/>
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ currentProduct.name }}</h2>
      <span class="product-price">R$ {{ currentProduct.price }}, 00</span>
      <btn btnColor="btn btn-large btn-sucess" :cartIcon="true"
      @click.native="addProductToCart(currentProduct)">
        Buy Now
      </btn>
      <btn btnColor="btn btn-large btn-info"
          @click.native="openModal()">
        More Info
      </btn>
    </div>
    <modal>{{ currentProduct.details }}</modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';
import stars from './Stars';
import modal from './Modal';

export default {
  components: {
    btn,
    stars,
    modal,
  },

  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },

  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
  },

};
</script>

<style scoped>
  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .product-image {
    width: 300px;
  }

  .product-info {
    width: 400px;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;
  }

  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .product-box button {
    width: 300px;
    margin: .3em 0;
  }
</style>
