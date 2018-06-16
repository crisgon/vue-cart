<template>
  <div class="container">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info"
         :cartIcon="true">
         Cart
      </btn>
    </mainMenu>
    <allProducts/>
  </div>
</template>

<script>
import mainMenu from './components/Menu';
import btn from './components/Btn';
import allProducts from './components/AllProducts';

export default {
  components: {
    mainMenu,
    btn,
    allProducts,
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
</style>
