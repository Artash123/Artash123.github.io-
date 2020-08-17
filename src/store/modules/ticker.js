import Binance from 'binance-api-node'
const client = Binance();

export default {
  actions: {
    async fetchTickers(ctx){
      const tickers = await client.allBookTickers()
      ctx.commit('SET_TICKERS',tickers)
    },
    async fetchBook(ctx,symbol = 'BTCUSDT'){
      const book = await client.book({ symbol: symbol });
      ctx.commit('SET_BOOK',book)
    }
  },
  mutations: {
    SET_TICKERS(state,tickers){
      state.tickers = tickers;
    },
    SET_BOOK(state,book){
      state.book = book;
    }
  },
  state: {
    tickers: [],
    book: []
  },
  getters: {
    getTickers(state) {
      return state.tickers;
    },
    getBook(state) {
      return state.book;
    }
  },
}
