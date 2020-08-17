<template>
  <div class="page">
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

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TableCard,
  },
  computed: mapGetters(['getBook','getSelected']),
  async mounted() {
    this.$store.dispatch('fetchBook',this.getSelected);
  },
}
</script>
<style lang="scss">
 @import '../assets/scss/_variables.scss';
.page {
  width: 100%;
  padding-top: 20px;
  &-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &-table-wrapper {
        max-width: 400px;
        margin: 16px 10px;
    }
  }
}
</style>
