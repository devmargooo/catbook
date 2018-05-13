<template>
  <div class="overlay">
    <div class="popup">
      <img v-if="pics > 1" src="../../assets/icons/arrow-left.png" class="arrow" @click="moveLeft()">
      <img class="popup__img" :src="imgSrc">
      <img v-if="pics > 1" src="../../assets/icons/arrow-right.png" class="arrow" @click="moveRight()">
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
    text-align: center;
  }
  .popup {
    min-width:80px;
    max-width: 500px;
    height:250px;
    background: rgba(255, 255, 255, 0.9);
    align-items: center;
    justify-content: center;
    display: inline-flex;
    margin: 50px auto;
  }
  .popup__img {
    margin: 0 10px;
  }

  .arrow {
    width: 20px;
    height: 35px;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
</style>
<script>
  import api from '../../api/index'
  export default {
    name: 'modal',
    props: ['alias', 'current', 'pics'],
    data () {
      return {
        currentImg: this.current
      }
    },
    computed: {
      imgSrc: function () {
        return `${api.images}${this.alias}/${this.currentImg}.jpg`
      }
    },
    methods: {
      moveRight() {
        if (this.currentImg < this.pics - 1) {
          this.currentImg++;
        } else {
          this.currentImg = 0;
        }
      },
      moveLeft() {
        if (this.currentImg !== 0) {
          this.currentImg--;
        } else {
          this.currentImg = this.pics - 1;
        }
      }
    },
    created() {
      console.log(this.alias)
      console.log(this.current)
      console.log(this.currentImg)
      console.log(this.imgSrc)
      console.log(this.pics)
    },
    watch: {
      pics: function () {
        console.log(this.pics)
      }
    }
  }
</script>
