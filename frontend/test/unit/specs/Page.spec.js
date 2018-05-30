import { mount } from 'avoriaz'
import Page from '@/components/page/Page.vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


const donKihot = {
  'id': 0,
  'alias': 'don_kihot',
  'name': 'Дон',
  'surname': 'Кихот',
  'pics': 6
}

const donKihotExtended = {
  'id': 0,
  'name': 'Дон',
  'surname': 'Кихот',
  'age': 4,
  'color': 'рыжий',
  'status': 'Борюсь с ветряными мельницами. Кто со мной?'
}

describe('Page.vue', () => {
  it('should render status if data contains status field', () => {
    const wrapper = mount(Page, {
      propsData: {
        data: donKihot
      }
    })
    wrapper.setData({cat: donKihotExtended});
    expect(wrapper.contains('.status')).to.equal(true)
  })
})
