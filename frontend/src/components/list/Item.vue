<template>
  <div class="item" @click="handleClick">
    <img class="item__img" :src="src">
    <div class="item__name">{{name}}</div>
  </div>
</template>
<style lang="scss" scoped>
  .item {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px;
    color: white;
    font-weight: bold;
    transition: all 0.4s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transition: all 0.4s ease;
    }
  }

  .item__img {
    border-radius: 100%;
    margin-right: 20px;
  }

  .item__name {
    font-size: 14px;
  }
</style>
<script>
  import api from '../../api/index'
  export default {
    name: 'item',
    props: ['data'],
    created: function () {
      this.getSrc()
      this.getName()
    },
    data () {
      return {
        api: api.images,
        src: '',
        name: ''
      }
    },
    methods: {
      getSrc() {
        if (this.data.alias) {
          this.src = api.images + this.data.alias + '/0.jpg'
        }
      },
      getName() {
        if (this.data.name) {
          if (this.data.surname) {
            this.name = this.data.name + ' ' + this.data.surname;
          } else {
            this.name = this.data.name;
          }
        }
      },
      handleClick() {
        this.$emit('select-cat', this.data.id)
      }
    }
  }
</script>
