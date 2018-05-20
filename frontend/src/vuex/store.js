import Vue from 'vue';
import Vuex from 'vuex';
import listModule from './modules/list.js'
import commentsModule from './modules/comments.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list: listModule,
    comments: commentsModule
  }
})

export {
  listModule,
  commentsModule
}
