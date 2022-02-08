import { shallowMount, mount } from '@vue/test-utils'
import Signup from '@/views/Signup.vue'



describe("Signup.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Signup)
        expect(wrapper.vm.$options.name).toMatch('Signup')
    })
    
    it("test displaying a signup message on the page", ()=>{
        const wrapper = mount(Signup)
        expect(wrapper.get('h1').text()).toEqual("Sign up with this awesome app ☺")

    })
})