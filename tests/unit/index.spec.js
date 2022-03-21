import { shallowMount } from '@vue/test-utils'
import Index from '@/components/Index.vue'

describe('Index.vue', () => {
  it('renders prop msg when passed', () => {
    const msg = "Best todos app"
    const wrapper = shallowMount(Index, {
      props: { msg  }
    })
    expect(wrapper.vm.$options.name).toMatch('Index')
    expect(wrapper.text()).toContain(msg)
    expect(wrapper.find('h1').text()).toBe(msg)
  })
})
