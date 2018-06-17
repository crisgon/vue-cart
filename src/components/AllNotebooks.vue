<template>
  <listOfProducts :products="getNotebooks"/>
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
      'getNotebooks',
    ]),
  },
};
</script>

<style>
</style>

