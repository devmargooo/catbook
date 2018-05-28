import Home from '@/components/Home'
import 'es6-promise/auto'
import { mount } from 'avoriaz'
import 'babel-polyfill';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = mount(Home)
    console.log(vm.contains('div'))
    expect(vm.contains('div')).to.equal(true)
  })
})
