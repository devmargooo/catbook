import { shallow } from 'avoriaz';
import Page from '@/components/page/Page.vue';
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);


const donKihot = {
  'id': 0,
  'alias': 'don_kihot',
  'name': 'Дон',
  'surname': 'Кихот',
  'pics': 6
};

const donKihotExtended = {
  'id': 0,
  'name': 'Дон',
  'surname': 'Кихот',
  'age': 4,
  'color': 'рыжий',
  'status': 'Борюсь с ветряными мельницами. Кто со мной?'
};

const charlotte = {
  'id': 1,
  'alias': 'charlotte',
  'name': 'Шарлотта',
  'pics': 4
};

const charlotteExtended = {
  'id': 1,
  'name': 'Шарлотта',
  'age': 5,
  'color': 'белый'
};

describe('Page.vue', () => {

  // status

  it('should render status if data contains status', () => {
    const wrapper = shallow(Page, {
      propsData: {
        data: donKihot,
        testENV: true
      }
    });
    wrapper.setData({cat: donKihotExtended});
    expect(wrapper.contains('.status')).to.equal(true);
  });

  it('should not render status if data not contains status', () => {
    const wrapper = shallow(Page, {
      propsData: {
        data: charlotte,
        testENV: true
      }
    });
    wrapper.setData({cat: charlotteExtended});
    expect(wrapper.contains('.status')).to.equal(false);
  });

  // name

  it('should render correct name - name + surname', () => {
    const wrapper = shallow(Page, {
      propsData: {
        data: donKihot,
        testENV: true
      }
    });
    const name = wrapper.find('.name')[0];
    expect(name.text()).to.equal('Дон Кихот');
  });

  it('should render correct name - name', () => {
    const wrapper = shallow(Page, {
      propsData: {
        data: charlotte,
        testENV: true
      }
    });
    const name = wrapper.find('.name')[0];
    expect(name.text()).to.equal('Шарлотта');
  });

  // click
  it('should open modal when click image', () => {
    const wrapper = shallow(Page, {
      propsData: {
        data: donKihot,
        testENV: true
      }
    });
    expect(wrapper.data().isModalOpen).to.equal(false);
    const img = wrapper.find('.pic')[0];
    img.trigger('click');
    expect(wrapper.data().isModalOpen).to.equal(true);
  });

});
