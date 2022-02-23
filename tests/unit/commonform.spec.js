import { shallowMount, mount } from '@vue/test-utils'
import CommonForm from '@/components/CommonForm.vue'

describe('CommonForm.vue', () => {
  it('tests we are getting the right component by name', () => {
    const wrapper = shallowMount(CommonForm)
    
    expect(wrapper.vm.$options.name).toMatch('CommonForm')
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

  it('test submitting the form', async () => {
    const wrapper = shallowMount(CommonForm)

    const email = "email@example.com"
    const password = "password123"
    
    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('input[type=password]').setValue(password)
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('on-submit')[0][0]).toStrictEqual({email,password})
  })
  it('test that props render when passed', ()=>{
    const wrapper = mount(CommonForm,{
      global: { stubs: ['CommonForm']}
    })
    
    const foo = wrapper.getComponent({name:'CommonForm'})

    expect(foo.props('header')).toEqual(undefined)
    expect(foo.props('submit_text')).toEqual(undefined)
    expect(foo.props('bottom_text')).toEqual(undefined)
    expect(foo.props('bottom_link_text')).toEqual(undefined)
    expect(foo.props(' route_name')).toEqual(undefined)
  })
  it('test setting props', async () =>{
    const wrapper = mount(CommonForm, {
      props:{
        header:'form header 1',
      }
    })

    expect(wrapper.html()).toContain('form header 1')
    
    await wrapper.setProps({ header: 'form header 2' })

    expect(wrapper.html()).toContain('form header 2')
  })
  
})