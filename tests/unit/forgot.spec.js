import { shallowMount, mount } from '@vue/test-utils'
import Forgot from '@/views/Forgot.vue'



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
})