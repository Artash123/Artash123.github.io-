<template>
  <div id="app">
    <app-header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/UIComponents/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
@import './assets/scss/main';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
