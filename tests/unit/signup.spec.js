import { shallowMount } from '@vue/test-utils'
import SignupForm from '@/components/SignupForm.vue'

describe('SignupForm.vue', () => {
  it('tests we are getting the right component by name', () => {
    const wrapper = shallowMount(SignupForm)
    expect(wrapper.vm.$options.name).toMatch('SignupForm')
  })

  it('test setting values on inputs',async ()=>{
      const wrapper = shallowMount(SignupForm)

      const email = "email@example.com"
      const password = "password123"

      const email_input = wrapper.find('input[type=email]')
      const password_input = wrapper.find('input[type=password]')

      await email_input.setValue(email)
      await password_input.setValue(password)

      expect(email_input.element.value).toBe('email@example.com')
      expect(password_input.element.value).toBe('password123')
  })

  it('test submitting the form', async () => {
    const wrapper = shallowMount(SignupForm)

    const email = "email@example.com"
    const password = "password123"
    
    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('input[type=password]').setValue(password)
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0][0]).toStrictEqual({email,password})
  })
  
})