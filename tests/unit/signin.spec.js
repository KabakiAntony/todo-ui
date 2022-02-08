import { shallowMount, mount } from '@vue/test-utils'
import Signin from '@/views/Signin.vue'



describe("Signin.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Signin)
        expect(wrapper.vm.$options.name).toMatch('Signin')
    })
    
    it("test displaying a signin message on the page", ()=>{
        const wrapper = mount(Signin)
        expect(wrapper.get('h1').text()).toEqual("Want to see awesomeness login down here it's so simple")

    })
})