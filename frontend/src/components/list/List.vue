<template>
  <div class="">
    <Item v-for="item in list" :data="item"/>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import Item from './Item'
  export default {
    name: 'list',
    props: ['data'],
    data() {
      return {
        list: []
      }
    },
    components: {
      Item
    },
    watch: {
      data: function () {
        this.list = this.data
      }
    }
  }

</script>
