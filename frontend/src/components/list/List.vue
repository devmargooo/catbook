<template>
  <div class="">
    <Item v-for="item in list" :data="item" v-on:select-cat="sendClickEvent"/>
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
    methods: {
      sendClickEvent(id) {
        this.$emit('select-cat', id)
      }
    },
    watch: {
      data: function () {
        this.list = this.data
      }
    }
  }

</script>
