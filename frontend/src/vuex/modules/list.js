import {
  CATS_LIST,
  catsList
} from "../types";

import api from '../../api/index'
import store from '../store';
import axios from 'axios'

const state = {
  list: []
}

const mutations = {
  [CATS_LIST] (state, payload) {
    state.list = payload
  }
}

const actions = {
  catsList ({ commit }, payload) {
    commit(CATS_LIST, payload)
  }
}

const getters = {
    catsList: state => {
      return state.list;
    }
}

export const getCatsList = () => {
  return axios.get(api.list).then(response => {
    store.dispatch(catsList, response.data);
  })
};

export default {
  state,
  mutations,
  actions,
  getters
}
