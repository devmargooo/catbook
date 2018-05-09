<template>
  <div class="overlay">
    <div class="popup">
      <img class="popup__img" :src="imgSrc">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .overlay {
    width:100%;
    min-height:100%;
    background-color: rgba(0,0,0,0.5);
    overflow:hidden;
    position:fixed;
    top:0;
    left: 0;
  }
  .popup {
    margin:50px auto;
    min-width:80px;
    max-width: 500px;
    height:250px;
    background: white;
  }
</style>
<script>
  import api from '../../api/index'
  export default {
    name: 'modal',
    props: ['alias', 'current'],
    data () {
      return {
        imgSrc: `${api.images}${this.alias}/${this.current}.jpg`
      }
    },
    created() {
      console.log(this.alias)
      console.log(this.current)
      console.log(this.imgSrc)
    }
  }
</script>
