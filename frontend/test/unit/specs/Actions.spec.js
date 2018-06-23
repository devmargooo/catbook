import {listModule} from '../../../src/vuex/store';
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const catsList = 'catsList';
import _ from 'lodash';

const commentsListStubbed = _.cloneDeep(listModule);

const payload = {
  'id': 0,
  'alias': 'don_kihot',
  'name': 'Дон',
  'surname': 'Кихот',
  'pics': 6
};


describe('actions', () => {
  it('catsList', () => {
    const stubbedStore = new Vuex.Store(commentsListStubbed);

    stubbedStore.dispatch(catsList, payload);

    expect(commentsListStubbed.state.list).to.deep.equal(payload);
  })
});


