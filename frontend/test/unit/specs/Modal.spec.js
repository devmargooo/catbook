import { mount } from 'avoriaz'
import Modal from '@/components/page/Modal.vue'
import 'es6-promise/auto'
import { commentsModule } from '../../../src/vuex/store';
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
import _ from 'lodash';

describe('Modal.vue', () => {
  let commentsModuleStubbed;
  beforeEach(() => {
    commentsModuleStubbed = _.cloneDeep(commentsModule)
    commentsModuleStubbed.state.comments = [
      {
        'id': 5,
        'likes': 5,
        'comments': [
          {
            'author': 'charlotte',
            'text': 'Кажется, селфи - это не твое :('
          }
        ]
      }
    ]
  })
})
