<template>
  <listOfProducts :products="getSmartphones"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters([
      'getSmartphones',
    ]),
  },
};
</script>

<style>
</style>

