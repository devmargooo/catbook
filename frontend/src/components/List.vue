<template>
  <div>
    sdfasfasfasdfasdfasdf
  </div>

</template>
<style lang="scss">

</style>
<script>
  import { getCatsList } from '../vuex/modules/list'
  export default {
    name: 'list',
    created: function () {
      getCatsList().then(() => {
        this.list = this.$store.getters.catsList
      })
    },
    data() {
      return {
        list: []
      }
    }
  }

</script>
