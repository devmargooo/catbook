import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import 'es6-promise/auto'
import { mount } from 'avoriaz'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    // const Constructor = Vue.extend(HelloWorld)
    // const vm = new Constructor().$mount()
    const vm = mount(HelloWorld)
    expect(vm.contains('.hello h1'))
      .to.equal(true)
  })
})
