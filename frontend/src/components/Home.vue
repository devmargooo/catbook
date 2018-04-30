<template>
  <div class="main">
    <List class="list" :data="list"/>
    <Page class="page"/>
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
    border-right: 1px solid lightblue;
    flex-shrink: 0;
  }

  .page {
    width: 100%;
  }

</style>
<script>
  import List from './list/List'
  import Page from './page/page'
  import { getCatsList } from '../vuex/modules/list'
  export default {
    name: 'home',
    created: function () {
      getCatsList().then(() => {
        this.list = this.$store.getters.catsList
      })
    },
    data() {
      return {
        list: []
      }
    },
    components: {
      List,
      Page
    }
  }
</script>
