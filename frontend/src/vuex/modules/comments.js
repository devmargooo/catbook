import {
  COMMENTS_LIST,
  LIKE,
  commentsList,
  like
} from "../types";

import api from '../../api/index'
import store from '../store';
import axios from 'axios';

const state = {
  comments: []
}

const mutations = {
  [COMMENTS_LIST] (state, payload) {
    state.comments = payload
  },
  [LIKE] (state, id) {
    for (let i = 0; i <  state.comments.length; i++) {
      if (state.comments[i].id === id) {
        state.comments[i].likes++;
        break;
      }
    }
  }
}

const actions = {
  commentsList ({ commit }, payload) {
    commit(COMMENTS_LIST, payload)
  },
  like ({commit}, id) {
      commit(LIKE, id)
  }
}

const getters = {
  comments: state => {
    return state.comments;
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

export default {
  state,
  mutations,
  actions,
  getters
}
