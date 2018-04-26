<template>
  <div id="app">
    <img src="http://localhost:8081/images/don_kihot/0.jpg">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from './vuex/store'
  export default {
    name: 'App',
    store: store,
    created: function () {
      axios.get('http://localhost:8081/api').then(r => {
        console.log(r)
      }, e => {
        console.log(e)
      })
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
