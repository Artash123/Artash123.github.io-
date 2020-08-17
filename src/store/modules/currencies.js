import Binance from 'binance-api-node'
const client = Binance();

export default {
  actions: {
    async fetchBook(ctx){
      const book = await client.book({ symbol: 'ETHBTC' });
      ctx.commit('SET_ITEMS',book)
    }
  },
  mutations: {
    SET_ITEMS(state,book){
      console.log(book);
      state.items = book;
    }
  },
  state: {
    book: []
  },
  getters: {
    getBook(state) {
      return state.items;
    }
  },
}
