import Vue from 'vue'
import VurRouter from 'vue-router'

Vue.use(VurRouter);

import Tickers from '../components/Tickers';

const router = new VurRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Tickers
    }
  ]
})

export default router;
