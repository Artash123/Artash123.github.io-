<template>
  <div id="app">
    <div class="container">
      <div class="table-wrapper">
        <table-card :title="'Bids'" :imgSrc="'arrow.svg'" :items="getBook.bids" />
      </div>
      <div class="table-wrapper">
        <table-card :title="'Asks'" :imgSrc="'arrow_down.svg'" :items="getBook.asks" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TableCard from './components/TableCard';
export default {
  name: 'App',
  components: {
    TableCard,
  },
  computed: mapGetters(['getBook']),
  async mounted() {
    this.$store.dispatch('fetchBook');
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';
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
