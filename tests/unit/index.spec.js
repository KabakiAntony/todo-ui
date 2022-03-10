import { shallowMount } from '@vue/test-utils'
import Index from '@/components/Index.vue'

describe('Index.vue', () => {
  it('renders prop msg when passed', () => {
    const msg = "This is the best todos app on the internet"
    const wrapper = shallowMount(Index, {
      props: { msg  }
    })
    expect(wrapper.vm.$options.name).toMatch('Index')
    expect(wrapper.text()).toMatch(msg)
  })
})
