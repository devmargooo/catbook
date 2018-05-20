import {
  COMMENTS_LIST,
  commentsList
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
  }
}

const actions = {
  commentsList ({ commit }, payload) {
    commit(COMMENTS_LIST, payload)
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

export default {
  state,
  mutations,
  actions,
  getters
}
