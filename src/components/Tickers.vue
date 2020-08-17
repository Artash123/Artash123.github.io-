<template>
  <div class="page">
    <div class="page-top">
      <symbol-select />
    </div>
    <div class="page-main">
      <div class="page-main-table-wrapper">
        <table-card :title="'Bids'" :imgSrc="'arrow.svg'" :items="getBook.bids" :headColor="'#00ddc2'" />
      </div>
      <div class="page-main-table-wrapper">
        <table-card :title="'Asks'" :imgSrc="'arrow_down.svg'" :items="getBook.asks" :headColor="'#DC3545'"/>
      </div>
    </div>
  </div>
</template>

<script>
import TableCard from './TableCard';
import SymbolSelect from './SymbolSelect';

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    SymbolSelect,
    TableCard,
  },
  computed: mapGetters(['getBook']),
  async mounted() {
    this.$store.dispatch('fetchBook');
  },
  created () {
    this.$eventBus.$on('changeSymbol', data => {
      this.$store.dispatch('fetchBook',data);
    })
  }
}
</script>
<style lang="scss">
 @import '../assets/scss/_variables.scss';
.page {
  width: 100%;
  padding-top: 20px;
  &-top {
    display: flex;
    justify-content: center;
  }
  &-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &-table-wrapper {
        max-width: 400px;
        margin: 16px 30px;
    }
  }
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: $dark-navy-blue;
    border: 1px solid $bluey-grey-two;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #a8a6bc;
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 4px;
    background-clip: padding-box;
  }
}
</style>
