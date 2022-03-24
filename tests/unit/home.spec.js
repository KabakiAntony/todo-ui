import { shallowMount, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import App from "../../src/App.vue"
import router from '../../src/router/index.js'
import store from '../../src/store/index.js'



describe("Home.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Home)
        expect(wrapper.vm.$options.name).toMatch('Home')
    })

    it("renders the home component via routing", async ()=>{
        router.push({name: 'Home'})
        await router.isReady()
        const wrapper = mount(App,{
            global: {
                plugins: [router, store]
            }
        })
        expect(wrapper.findComponent(Home).exists()).toBe(true)
    })
    
    it("test displaying a welcome message on the homepage", ()=>{
        const wrapper = mount(Home)
        expect(wrapper.get('h1').text()).toContain("Ain't this the best")

    })
    
})