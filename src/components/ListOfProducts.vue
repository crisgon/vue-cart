<template>
  <ul class="listOfProducts">
    <li v-for="(product, index) in products" :key="index" class="product">
      <router-link to="/product-details">
        <img :src="product.image" :alt="product.name" @click="addCurrentProduct(product)">
        <h2 class="product-name"
            @click="addCurrentProduct(product)">
          {{ product.name }}
        </h2>
      </router-link>
      <div class="product-price">
        <span>R$ {{ product.price }}, 00</span>
        <span>10 x {{ Math.round(product.price / 10) }}, 00 </span>
      </div>

      <btn btnColor="btn btn-large btn-sucess"
          :cartIcon="true"
          @click.native="addProductToCart(product)">
        Add to cart
      </btn>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex';
import btn from './Btn';

export default {
  props: ['products'],

  components: {
    btn,
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),

    addProductToCart(product) {
      this.addProduct(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style scoped>
  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    transition: all .2s;
  }

  .product:hover,
  .product:focus {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 0 10px #dfe4ea;
  }

  .product:hover .product-name,
  .product:focus .product-name {
    text-decoration: underline;
    color: #2D9CDB;
  }

  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }

  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }

</style>

