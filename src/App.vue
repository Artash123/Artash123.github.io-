<template>
  <div id="app">
    <div class="container">
      <div class="table-wrapper">
        <h2>Bids</h2>
        <table>
          <tr>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr v-for="(bid,index) in getBook.bids" :key="index">
            <td>{{bid.quantity}}</td>
            <td>{{bid.price}}</td>
            <td>{{(bid.price * bid.quantity).toFixed(6)}}</td>
          </tr>
        </table>
      </div>
      <div class="table-wrapper">
        <h2>Asks</h2>
        <table>
          <tr>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr v-for="(ask,index) in getBook.asks" :key="index">
            <td>{{ask.quantity}}</td>
            <td>{{ask.price}}</td>
            <td>{{(ask.price * ask.quantity).toFixed(6)}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: mapGetters(['getBook']),
  async mounted() {
    this.$store.dispatch('fetchBook');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.table-wrapper {
  text-align: center;
  max-width: 500px;
}
</style>
