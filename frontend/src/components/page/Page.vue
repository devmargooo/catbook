<template>
  <div class="page-wrapper">
    <div class="info-wrapper">
      <img class="avatar" :src="src">
      <div>
        <h1 class="name">{{name}}</h1>
        <p class="status">{{cat.status}}</p>
        <div class="description">
          <span><b>Возраст: </b></span>
          <span>{{cat.age}}</span>
        </div>
        <div class="description">
          <span><b>Окрас: </b></span>
          <span>{{cat.color}}</span>
        </div>
      </div>
    </div>
    <div class="gallery">
      <img class="pic" v-for="(item, index) in cat.pics" :src="getPicSrc(index)" @click="openModal(index)">
    </div>
    <Modal v-if="data.alias"
           :alias="data.alias"
           :current="picOpened"
           :pics="cat.pics"
           :is-open="isModalOpen"
           @close-modal="isModalOpen = false"></Modal>
  </div>
</template>
<style lang="scss">
  .page-wrapper {
    padding: 10px;
  }
  .info-wrapper {
    display: flex;
    margin-bottom: 20px;
  }
  .avatar {
    width: 200px;
    height: 200px;
    margin: 0 20px 0 10px;
    border-radius: 10px;
  }
  .status {
    margin: 0 0 20px;
    font-size: 13px;
    font-weight: lighter;
  }
  .name {
    margin: 0;
  }
  .description {
    font-size: 13px;
  }

  .pic {
    max-height: 90px;
    display: inline-block;
    margin: 5px;
    border-radius: 5px;
    opacity: 0.6;
    transition: all 0.4s ease;
    &:hover {
      opacity: 1;
      transition: all 0.5s ease;
    }
  }

  .gallery {
    padding: 0 5px;
  }
</style>
<script>
  import api from '../../api/index'
  import axios from 'axios'
  import Modal from '../modal/Modal'
  import { getComments } from '../../vuex/modules/comments.js'
  export default {
    name: 'page',
    props: ['data'],
    created: function () {
      if (this.data.alias) {
        axios.get(api.list + '/' + this.data.alias).then(response => {
          this.cat = response.data;
        }, error => console.log(error))
        getComments(this.data.alias)
      }
    },
    data() {
      return {
        src: api.images + this.data.alias + '/0.jpg',
        name: this.data.surname ? this.data.name + ' ' + this.data.surname : this.data.name,
        cat: {},
        isModalOpen: false,
        picOpened: 0
      }
    },
    methods: {
      getPicSrc(index) {
        return `${api.images}${this.data.alias}/${index}.jpg`
      },
      openModal(pic) {
        this.picOpened = pic;
        this.isModalOpen = true;
      }
    },
    components: {
      Modal
    }
  }
</script>
