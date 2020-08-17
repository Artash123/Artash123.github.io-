import Binance from 'binance-api-node'
const client = Binance();

export default {
  actions: {
    async fetchTickers(ctx){
      const tickers = await client.allBookTickers()
      ctx.commit('SET_TICKERS',tickers)
    },
    setSelected(ctx,selected){
      ctx.commit('SET_SELECTED',selected)
    },
    addDiff(ctx,diff){
      ctx.commit('ADD_DIFF',diff)
    }
  },
  mutations: {
    SET_TICKERS(state,tickers){
      state.tickers = tickers;
    },
    SET_SELECTED(state,selected){
      state.selected = selected;
    },
    ADD_DIFF(state,diff){
      state.diffs.push(diff);
    }
  },
  state: {
    tickers: [],
    selected: 'BTCUSDT',
    diffs: []
  },
  getters: {
    getTickers(state) {
      return state.tickers;
    },
    getSelected(state) {
      return state.selected;
    },
    getDiffs(state) {
      return state.diffs;
    }
  },
}
