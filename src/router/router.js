import Vue from 'vue'
import VurRouter from 'vue-router'

Vue.use(VurRouter);

import Tables from '../components/Tables';
import Tickers from '../components/Tickers';

const router = new VurRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Tables
    },
    {
      path: '/tickers',
      name: 'tickers',
      component: Tickers
    }
  ]
})

export default router;
