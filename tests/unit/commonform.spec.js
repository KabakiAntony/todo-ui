import { shallowMount, mount } from '@vue/test-utils'
import CommonForm from '@/components/CommonForm.vue'

describe('CommonForm.vue', () => {
  it('tests we are getting the right component by name', () => {
    const wrapper = shallowMount(CommonForm)

    expect(wrapper.vm.$options.name).toMatch('CommonForm')
  })

  it('test that a form is rendered', ()=>{
    const wrapper = shallowMount(CommonForm)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('test that our form has input fields', ()=>{
    const wrapper = shallowMount(CommonForm)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  it('test that our form has an email input field',()=>{
    const wrapper = shallowMount(CommonForm)
    expect(wrapper.get('input[type=email]').exists()).toBe(true)
  })

  it('test that our form has a password input field',()=>{
    const wrapper = shallowMount(CommonForm)
    expect(wrapper.get('input[type=password]').exists()).toBe(true)
  })

  it('test setting values on inputs',async ()=>{
      const wrapper = shallowMount(CommonForm)

      const email = "email@example.com"
      const password = "password123"

      const email_input = wrapper.find('input[type=email]')
      const password_input = wrapper.find('input[type=password]')

      await email_input.setValue(email)
      await password_input.setValue(password)

      expect(email_input.element.value).toBe('email@example.com')
      expect(password_input.element.value).toBe('password123')
  })

  it('test on submit event is emitted',()=>{
    const wrapper = shallowMount(CommonForm)
    wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted()).toHaveProperty('on-submit')
  })

  it('test submitting the form', async () => {
    const wrapper = shallowMount(CommonForm)

    const email = "email@example.com"
    const password = "password123"
    
    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('input[type=password]').setValue(password)
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('on-submit')[0][0]).toStrictEqual({email,password})
  })

  it('test setting props', async () =>{
    const wrapper = mount(CommonForm, {
      props:{
        header:'form header 1',
        submit_text: 'submit',
        bottom_text: 'already have an account',
        bottom_link_text: 'signin',
        route_name: 'home',
        action: 'submitting',
      }
    })
    expect(wrapper.get('h2').text()).toContain('form header 1')
    
    await wrapper.setProps({ header: 'form header 2' })

    expect(wrapper.get('h2').text()).toContain('form header 2')
  })
})