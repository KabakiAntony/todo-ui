import { shallowMount, mount } from '@vue/test-utils'
import Signup from '@/views/Signup.vue'
import CommonForm from '../../src/components/CommonForm.vue'
import App from "../../src/App.vue"
import router from '../../src/router/index.js'
import store from '../../src/store/index.js'



describe("Signup.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Signup)
        expect(wrapper.vm.$options.name).toMatch('Signup')
    })
    
    it("test displaying a signup message on the page", ()=>{
        const wrapper = mount(Signup)
        expect(wrapper.get('h1').text()).toEqual("Sign up with this awesome app ☺")

    })

    it('renders signup component via routing', async ()=>{
        router.push({name: 'SignUp'})
        await router.isReady()
        const wrapper = mount(App,{
            global: {
                plugins: [router, store]
            }
        })
        expect(wrapper.findComponent(Signup).exists()).toBe(true)
    })

    it ("test that the commonform component renders", ()=>{
        const wrapper = mount(Signup)
        expect(wrapper.findComponent(CommonForm).exists()).toBe(true)
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