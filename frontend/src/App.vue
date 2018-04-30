<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import store from './vuex/store'
  import './assets/css/main.scss'
  export default {
    name: 'App',
    store: store
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
