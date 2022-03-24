import { shallowMount, mount } from '@vue/test-utils'
import Signin from '@/views/Signin.vue'
import CommonForm from '../../src/components/CommonForm.vue'
import App from "../../src/App.vue"
import router from '../../src/router/index.js'
import store from '../../src/store/index.js'


describe("Signin.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Signin)
        expect(wrapper.vm.$options.name).toMatch('Signin')
    })

    it("renders the signin component via routing", async ()=>{
        router.push({name: 'SignIn'})
        await router.isReady()
        const wrapper = mount(App,{
            global: {
                plugins: [router, store]
            }
        })
        expect(wrapper.findComponent(Signin).exists()).toBe(true)
    })
    
    it("test displaying a signin message on the page", ()=>{
        const wrapper = mount(Signin)
        expect(wrapper.get('h1').text()).toContain("Want to see awesomeness")

    })

    it ("test that the commonform component renders", ()=>{
        const wrapper = mount(Signin)
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