<template>
  <div id="app">
    <img src="http://localhost:8081/images/don_kihot/0.jpg">
    <List/>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from './vuex/store'
  import List from './components/List'
  export default {
    name: 'App',
    store: store,
    components: {
      List
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
