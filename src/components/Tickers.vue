<template>
  <div class="page">
    <div class="page-main">
      <symbol-select />
      <div class="diff-info-wrapper">
        <div class="diff-info-wrapper-row" v-for="(diff,index) in getDiffs" :key="index">
          {{ diff }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SymbolSelect from './SymbolSelect';
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      lastSymbol: 'BTCUSD',
    };
  },
  components: {
    SymbolSelect,
  },
  computed: mapGetters(['getDiffs']),
}
</script>
<style lang="scss" scoped>
 @import '../assets/scss/_variables.scss';
.page {
  width: 100%;
  padding-top: 60px;
  &-main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .diff-info-wrapper {
    color: #a8a6bc;
    margin-top: 20px;
    &-row {
      padding: 6px;
    }
  }
}
</style>
