import { shallow } from 'avoriaz';
import Modal from '@/components/modal/Modal.vue';
import { commentsModule } from '../../../src/vuex/store';
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import _ from 'lodash';
import 'babel-polyfill';

describe('Modal.vue', () => {
  let commentsModuleStubbed;
  beforeEach(() => {
    commentsModuleStubbed = _.cloneDeep(commentsModule);
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
    ];
  });

  it('init likes count', (done) => {
    const stubbedStore = new Vuex.Store(commentsModuleStubbed);
    const vm = shallow(Modal, {
      store: stubbedStore
    });
    expect(vm.data().likes).to.equal(0);
    vm.setProps({current: 5});
    Vue.nextTick()
     .then(function () {
         expect(vm.data().likes).to.equal(5);
         done();
       })
       .catch(done)

  })


});
