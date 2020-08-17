import Binance from 'binance-api-node'
const client = Binance();

export default {
  actions: {
    async fetchBook(ctx,symbol){
      const book = await client.book({ symbol: symbol });
      ctx.commit('SET_BOOK',book)
    }
  },
  mutations: {
    SET_BOOK(state,book){
      state.book = book;
    }
  },
  state: {
    book: []
  },
  getters: {
    getBook(state) {
      return state.book;
    }
  },
}
