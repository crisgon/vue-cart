<template>
  <mainMenu>
    <btn btnColor="btn btn-small btn-info"
         :cartIcon="true">
         Cart
    </btn>
  </mainMenu>
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
  }
</style>
