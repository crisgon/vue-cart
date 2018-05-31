<template>
  <mainMenu></mainMenu>
</template>

<script>
import mainMenu from './components/Menu';
export default {
  components: {
    mainMenu,
  }
};
</script>

<style>
  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
