<template>
  <div class="container">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info"
         :cartIcon="true"
         @click.native="openCart = !openCart">
         Cart
      </btn>
      <transition name="appear">
        <popupcart class="cart" v-if="openCart"/>
      </transition>
    </mainMenu>
    <transition name="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import mainMenu from './components/Menu';
import btn from './components/Btn';
import popupcart from './components/Popupcart';

export default {
  data() {
    return {
      openCart: false,
    };
  },
  components: {
    mainMenu,
    btn,
    popupcart,
  },
};
</script>

<style>
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
  }

  a {
    color: #000;
  }

  .container {
    width: 100%;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all .7s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>
