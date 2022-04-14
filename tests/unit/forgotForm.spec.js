import { shallowMount} from '@vue/test-utils'
import ForgotForm from '@/components/ForgotForm.vue'

describe('ForgotForm.vue', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallowMount(ForgotForm)
    })

  afterEach(()=>{
    wrapper.unmount();
  })

  it('tests we are getting the right component by name', () => {
    expect(wrapper.vm.$options.name).toMatch('ForgotForm')
  })

  it('test that a form is rendered', ()=>{
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('test that our form has input fields', ()=>{
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  it('test that our form has an email input field',()=>{
    expect(wrapper.get('input[type=email]').exists()).toBe(true)
  })

  it('test setting values on inputs',async ()=>{
      const email = "email@example.com"
      const email_input = wrapper.find('input[type=email]')
     
      await email_input.setValue(email)
      expect(email_input.element.value).toBe('email@example.com')
  })

  it('test submitting the form', async () => {
    const email = "email@example.com"
    
    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('on-submit')[0][0]).toStrictEqual({email})
  })

})