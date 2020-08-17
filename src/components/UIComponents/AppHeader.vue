<template>
  <div class="header" @click.self="langDropdownOpened = false">
    <div class="header-content">
      <router-link class="header-content-link" :to="{ name: 'index' }">Bids/Asks</router-link>
      <router-link class="header-content-link" :to="{ name: 'tickers' }">Tickers</router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
<style lang="scss" scoped>
 @import '../../assets/scss/_variables.scss';

.header {
  width: 100%;
  height: 60px;
  background-color: $darkish-purple;
  padding: 10px;
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    &-link {
      margin: 0 20px;
      color: $white;
      transition: transform .3s;
      text-decoration: none;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

</style>
