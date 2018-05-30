<template>
  <div class="main">
    <div></div>
    <List class="list" :data="list" v-on:select-cat="selectCat"/>
    <Page class="page" v-if="selected" :data="selected"/>
  </div>
</template>
<style lang="scss">
  .main {
    min-height: 100vh;
    display: flex;
  }

  .list {
    width: 220px;
    min-height: 100vh;
    flex-shrink: 0;
    background: black;
  }

  .page {
    width: 100%;
  }

</style>
<script>
  import List from './list/List'
  import Page from './page/Page'
  import { getCatsList } from '../vuex/store'
  export default {
    name: 'home',
    created: function () {
      getCatsList().then(() => {
        this.list = this.$store.getters.catsList
        this.selected = this.list[0]
      })
    },
    data() {
      return {
        list: [],
        selected: null
      }
    },
    methods: {
      selectCat(id) {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].id === id ) {
            this.selected = this.list[i];
          }
        }
      }
    },
    components: {
      List,
      Page
    }
  }
</script>
