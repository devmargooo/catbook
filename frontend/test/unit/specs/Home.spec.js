import Home from '@/components/Home'
import 'es6-promise/auto'
import { shallow } from 'avoriaz'
import 'babel-polyfill';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const vm = shallow(Home)
    expect(vm.contains('div')).to.equal(true)
  })
})
