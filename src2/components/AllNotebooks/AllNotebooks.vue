<template>
  <listOfProducts :products="getNotebooks"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from '@/componentes/ListOfProducts/ListOfProducts';

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

