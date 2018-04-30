<template>
  <div class="main">
    <List class="list" :data="list"/>
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
  import { getCatsList } from '../vuex/modules/list'
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
    components: {
      List,
      Page
    }
  }
</script>
