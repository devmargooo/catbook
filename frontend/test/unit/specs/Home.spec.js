import Home from '@/components/Home'
import 'es6-promise/auto'
import { shallow } from 'avoriaz'
import 'babel-polyfill';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = shallow(Home, {
      propsData: {
        testENV: true
      }
    })
    expect(vm.contains('div')).to.equal(true)
  })
  it('should has correct css class', () => {
    const vm = shallow(Home, {
      propsData: {
        testENV: true
      }
    })
    const main = vm.find('.main')[0];
    expect(main.hasClass('main')).to.equal(true)
  })
})
