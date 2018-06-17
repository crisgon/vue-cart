<template>
  <div class="container">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info"
         :cartIcon="true">
         Cart
      </btn>
    </mainMenu>
    <transition name="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import mainMenu from './components/Menu';
import btn from './components/Btn';

export default {
  components: {
    mainMenu,
    btn,
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

  .container {
    width: 100%;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all .7s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
</style>
