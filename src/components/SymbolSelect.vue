<template>
  <div class="dark-custom-select">
    <div class="bsc-dropdown-trigger ant-dropdown-trigger"
      @click="selectOpened = !selectOpened">
      <span class="d-flex align-items-center">
        {{ getSelected }}
      </span>
      <div v-if="!selectOpened" class="down">▼</div>
      <div v-else class="up">▲</div>
    </div>
    <div class="ant-dropdown ant-dropdown-placement-bottomRight">
      <div class="bsc-dropdown-popup" :class="{ opened: selectOpened }">
        <div v-for="(ticker,index) in getTickers" :key="index" @click="setSymbol(ticker.symbol)" class="bsc-dropdown-item">
          {{ ticker.symbol }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      selectOpened: false,
    };
  },
  computed: mapGetters(['getTickers','getSelected']),
  async mounted() {
    this.$store.dispatch('fetchTickers');
  },
  methods: {
    setSymbol(symbol) {
      this.selectOpened = false;
      this.$store.dispatch('addDiff',this.getSelected + ' -> ' + symbol);
      this.$store.dispatch('setSelected',symbol);
    }
  }
};
</script>
<style lang="scss" scoped>
 @import '../assets/scss/_variables.scss';

.dark-custom-select {
  position: relative;
  z-index: 100;
  width: 300px;

  .ant-dropdown-trigger.bsc-dropdown-trigger {
    border: 2px solid $bluey-grey-two;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: $dark-navy-blue;
    font-family: "Fira Sans", sans-serif;
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    color: $bluey-grey;
    align-items: center;
  }
  .bsc-dropdown-trigger {
    .down,
    .up {
      font-family: "Bebas Neue", cursive;
      transform: scaleY(0.5);
      color: $bluey-grey;
      margin-left: 4px;
    }
  }

  .bsc-dropdown-popup {
    position: absolute;
    min-width: 100%;
    left: 0;
    display: none;
    background-color: $dark-blue-grey-two;
    color: $bluey-grey;
    padding: 10px 0;
    box-shadow: 0 0 10px black;
    height: 300px;
    overflow-y: scroll;
    &.opened {
      display: block;
    }
    .bsc-dropdown-item {
      padding: 5px 15px;
      text-align: right;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      &:hover {
        background-color: $dark;
        cursor: pointer;
      }
    }
  }
}
</style>
