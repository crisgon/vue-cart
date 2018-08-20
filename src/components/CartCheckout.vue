<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
      <li v-for="(product, index) in getProductsInCart" :key="index"  class="checkout-product">
        <img :src="product.image" alt="" class="product-image">
        <router-link to="/product-details">
          <h3 class="product-name"
              @click="addCurrentProduct(product)">
              {{ product.name }}
          </h3>
        </router-link>
        <span class="product-price">R$ {{ product.price }},00 </span>
        <button class="product-remove" @click="remove(index)">X</button>
      </li>
      </transition-group>
    </ul>
    <div v-if="!hasProduct()" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>
    </div>
    <footer class="checkout-footer"  v-if="hasProduct()">
      <router-link to="./">
        <btn btnColor="btn btn-medium btn-info">Keep buying</btn>
      </router-link>
      <h3 class="total">
        Total: R$ {{ totalPrice() }}, 00
      </h3>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';

export default {
  components: {
    btn,
  },

  computed: {
    ...mapGetters({
      getProductsInCart: 'getProductsInCart',
    }),
  },

  methods: {
    ...mapActions([
      'removeProduct',
      'currentProduct',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.price, 0);
    },
    remove(index) {
      this.removeProduct(index);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }

  .product-name {
    box-sizing: border-box;
  }

  .product-name:hover,
  .product-name:focus {
    text-decoration: underline;
    color: #2D9CDB;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    background-color: #e74c3c;
    color: #fff;
    cursor: pointer;
    transition: all .3s;
  }

  .product-remove:hover {
    transform: translateY(-3px);
  }

  .total {
    font-size: 1.8em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }

  .checkout-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
</style>
