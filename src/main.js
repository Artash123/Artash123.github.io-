import Vue from 'vue'
import store from './store'
import router from './router/router'
import App from './App.vue'
Vue.prototype.$eventBus = new Vue();

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
