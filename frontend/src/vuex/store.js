import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios/index";
import api from '../api/index'

const catsList = 'catsList'
const commentsList = 'commentsList'
const like = 'like'
const CATS_LIST = 'CATS_LIST'
const COMMENTS_LIST = 'COMMENTS_LIST'
const LIKE = 'LIKE'

Vue.use(Vuex)

const listModule = {
  state: {
    list: []
  },
  mutations: {
    CATS_LIST (state, payload) {
      state.list = payload
    }
  },
  actions: {
    catsList ({ commit }, payload) {
      commit(CATS_LIST, payload)
    }
  },
  getters: {
    catsList: state => {
      return state.list;
    }
  }
}

const commentsModule = {
  state: {
    comments: []
  },
  mutations: {
      COMMENTS_LIST (state, payload) {
        state.comments = payload
      },
      LIKE (state, id) {
        for (let i = 0; i <  state.comments.length; i++) {
          if (state.comments[i].id === id) {
            state.comments[i].likes++;
            break;
          }
        }
      }
  },
  actions: {
    commentsList ({ commit }, payload) {
      commit(COMMENTS_LIST, payload)
    },
    like ({commit}, id) {
      commit(LIKE, id)
    }
  },
  getters: {
    comments: state => {
      return state.comments;
    }
  }
}

export const getComments = (alias) => {
  return axios.get(api.comments + alias).then(response => {
    store.dispatch(commentsList, response.data);
  })
};

export const likePhoto = (id) => {
  store.dispatch(like, id)
}

export const getCatsList = () => {
  return axios.get(api.list).then(response => {
    store.dispatch(catsList, response.data);
  })
};

export const store = new Vuex.Store({
  modules: {
    list: listModule,
    comments: commentsModule
  }
})

export {
  listModule,
  commentsModule
}

