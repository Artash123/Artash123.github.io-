import Vue from 'vue'
import Vuex from 'vuex'
import ticker from './modules/ticker'
import book from './modules/book'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    ticker,
    book
  }
})
