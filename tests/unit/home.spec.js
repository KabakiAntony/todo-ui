import { shallowMount, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'



describe("Home.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Home)
        expect(wrapper.vm.$options.name).toMatch('Home')
    })
    
    it("test displaying a welcome message on the homepage", ()=>{
        const wrapper = mount(Home)
        expect(wrapper.get('h1').text()).toEqual("Ain't this the best todo app on the internet")

    })
})