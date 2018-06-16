<template>
  <ul class="listOfProducts">
    <li v-for="(product, index) in getAllProducts" :key="index" class="product">
      <img :src="product.image" alt="">

      <h2 class="product-name">{{ product.name }}</h2>

      <div class="product-price">
        <span>R$ {{ product.price }}, 00</span>
        <span>10 x {{ Math.round(product.price / 10) }}, 00 </span>
      </div>

      <btn btnColor="btn btn-large btn-sucess" :cartIcon="true">
        Add to cart
      </btn>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import btn from './Btn';

export default {
  components: {
    btn,
  },

  computed: {
    ...mapGetters([
      'getAllProducts',
    ]),
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

