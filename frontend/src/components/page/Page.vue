<template>
  <div class="page-wrapper">
    <div class="info-wrapper">
      <img class="avatar" :src="src">
      <div>
        <h1 class="name">{{name}}</h1>
        <p class="status" v-if="cat.status">{{cat.status}}</p>
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
      <img class="pic" v-if="pics" v-for="(item, index) in pics" :src="getPicSrc(index)" @click="openModal(index)">
    </div>
    <Modal v-if="data.alias"
           :alias="data.alias"
           :current="picOpened"
           :pics="pics"
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
  import _ from 'lodash';
  import 'es6-promise/auto'
  export default {
    name: 'page',
    props: ['data'],
    created: function () {
      if (_.isEmpty(this.cat)) {
        this.getFullData();
      }
    },
    data() {
      return {
        cat: {},
        isModalOpen: false,
        picOpened: 0,
        pics: 0
      }
    },
    computed: {
      name() {
        return this.data.surname ? this.data.name + ' ' + this.data.surname : this.data.name
      },
      src() {
        return api.images + this.data.alias + '/0.jpg'
      }
    },
    methods: {
      getPicSrc(index) {
        return `${api.images}${this.data.alias}/${index}.jpg`
      },
      openModal(pic) {
        this.picOpened = pic;
        this.isModalOpen = true;
      },
      getFullData() {
        this.pics = this.data.pics
        if (this.data.alias) {
          axios.get(api.list + '/' + this.data.alias)
            .then(response => {
              this.cat = response.data;
              return true;
            })
            .catch(() => {
              throw new Exception('getting data error')
            })
        }
      }
    },
    watch: {
      data() {
        this.getFullData();
      }
    },
    components: {
      Modal
    }
  }
</script>
