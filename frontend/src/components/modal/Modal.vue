<template>
  <div class="overlay" v-if="isOpen" @click="closePopup($event)">
    <div class="popup">
      <div class="popup__inner">
        <img v-if="pics > 1" src="../../assets/icons/arrow-left.png" class="arrow" @click="moveLeft()">
        <img class="popup__img" :src="imgSrc">
        <img v-if="pics > 1" src="../../assets/icons/arrow-right.png" class="arrow" @click="moveRight()">
      </div>
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
    height:350px;
    background: rgba(255, 255, 255, 0.9);
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    display: inline-flex;
    margin: 10px auto;
    width: 455px;
  }
  .popup__inner {
    align-items: center;
    justify-content: space-between;
    display: flex;
    height: 220px;
    margin-top: 5px;
    width: 100%;
  }
  .popup__img {
    margin: 0 10px;
    max-height: 220px;
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
    props: ['alias', 'current', 'pics', 'isOpen'],
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
      },
      closePopup(e) {
        if (e.target.classList.contains('overlay')) {
          this.$emit('close-modal')
        }
      }
    },
    watch: {
      current: function () {
        this.currentImg = this.current;
      }
    }
  }
</script>
