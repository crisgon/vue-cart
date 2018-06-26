import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts/AllProducts';
import AllSmartphones from '../components/AllSmartphones/AllSmartphones';
import AllNotebooks from '../components/AllNotebooks/AllNotebooks';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/smartphones',
      name: 'Smartphones',
      component: AllSmartphones,
    },
    {
      path: '/notebooks',
      name: 'Notebooks',
      component: AllNotebooks,
    },
  ],
});
