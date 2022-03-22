import { shallowMount, mount } from '@vue/test-utils'
import Forgot from '@/views/Forgot.vue'
import App from "../../src/App.vue"
import router from '../../src/router/index.js'
import store from '../../src/store/index.js'



describe("Forgot.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Forgot)
        expect(wrapper.vm.$options.name).toMatch('Forgot')
    })
    
    it("test displaying a forgot question on the page", ()=>{
        const wrapper = mount(Forgot)
        expect(wrapper.get('h1').text()).toEqual("Forgot your password ?")
        expect(wrapper.get('p').text()).toContain("We got you, just enter")
    })

     it('renders forgot component via routing', async ()=>{
        router.push({name: 'Forgot'})
        await router.isReady()
        const wrapper = mount(App,{
            global: {
                plugins: [router, store]
            }
        })
        expect(wrapper.findComponent(Forgot).exists()).toBe(true)
    })
})