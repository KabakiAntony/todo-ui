import { shallowMount, mount } from '@vue/test-utils'
import Signin from '@/views/Signin.vue'
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
})