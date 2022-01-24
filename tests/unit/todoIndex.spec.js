import { shallowMount } from '@vue/test-utils'
import TodoIndex from '@/components/TodoIndex.vue'

describe('TodoIndex.vue', () => {
  it('renders prop msg when passed', () => {
    const msg = "This is the best todos app on the internet"
    const wrapper = shallowMount(TodoIndex, {
      props: { msg  }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
