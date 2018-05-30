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

const charlotte = {
  'id': 1,
  'alias': 'charlotte',
  'name': 'Шарлотта',
  'pics': 4
}

const charlotteExtended = {
  'id': 1,
  'name': 'Шарлотта',
  'age': 5,
  'color': 'белый'
}

describe('Page.vue', () => {
  // status
  it('should render status if data contains status', () => {
    const wrapper = mount(Page, {
      propsData: {
        data: donKihot
      }
    })
    wrapper.setData({cat: donKihotExtended});
    expect(wrapper.contains('.status')).to.equal(true)
  })
  it('should not render status if data not contains status', () => {
    const wrapper = mount(Page, {
      propsData: {
        data: charlotte
      }
    })
    wrapper.setData({cat: charlotteExtended});
    expect(wrapper.contains('.status')).to.equal(false)
  })

  // name

  it('should render correct name', () => {
    const wrapper = mount(Page, {
      propsData: {
        data: donKihot
      }
    })
    const name = wrapper.find('.name')[0]
    expect(name.text()).to.equal('Дон Кихот')
  })
})
