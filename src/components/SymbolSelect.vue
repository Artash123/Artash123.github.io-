<template>
  <div class="dark-custom-select">
    <div class="bsc-dropdown-trigger ant-dropdown-trigger"
      @click="selectOpened = !selectOpened">
      <span class="d-flex align-items-center">
        BTCUSD
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
  computed: mapGetters(['getTickers']),
  async mounted() {
    this.$store.dispatch('fetchTickers');
  },
  methods: {
    setSymbol(symbol) {
      this.selectOpened = false;
      this.$eventBus.$emit('changeSymbol', symbol)
    }
  }
};
</script>
<style lang="scss" scoped>
$primary: #010117;
$dark-blue-grey: #221c49;
$dark-blue-grey-two: #171335;
$dark-navy-blue: #010011;
$dark-navy-blue-two: #01000c;
$darkish-purple: #6f2284;
$electric-green: #30f902;
$darkish-purple: #6f2284;
$bluey-grey: #a8a6bc;
$bluey-grey-two: #201C47;
$cyan: #00ffff;
$dark: #130f2b;
$dark-two: #120E2A;
$green: #00ddc2;
$light-green: #3afd06;
$golden: #f9bc00;
$neon-pink: #db0396;
$white: #ffffff;

.dark-custom-select {
  position: relative;
  z-index: 100;
  width: 200px;

  .ant-dropdown-trigger.bsc-dropdown-trigger {
    border: 1px solid $bluey-grey-two;
    padding: 3px 10px;
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
