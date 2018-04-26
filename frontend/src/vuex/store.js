import Vue from 'vue';
import Vuex from 'vuex';
import listModule from './modules/list.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list: listModule
  }
})

export {
  listModule
}
