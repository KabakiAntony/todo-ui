import { shallowMount, mount } from '@vue/test-utils'
import ForgotForm from '@/components/ForgotForm.vue'

describe('ForgotForm.vue', () => {
  it('tests we are getting the right component by name', () => {
    const wrapper = shallowMount(ForgotForm)
    
    expect(wrapper.vm.$options.name).toMatch('ForgotForm')
  })

  it('test setting values on inputs',async ()=>{
      const wrapper = shallowMount(ForgotForm)

      const email = "email@example.com"
      const email_input = wrapper.find('input[type=email]')
     
      await email_input.setValue(email)
      expect(email_input.element.value).toBe('email@example.com')
  })

  it('test submitting the form', async () => {
    const wrapper = shallowMount(ForgotForm)

    const email = "email@example.com"
    
    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('on-submit')[0][0]).toStrictEqual({email})
  })

})