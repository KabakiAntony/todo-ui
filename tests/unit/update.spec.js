import { shallowMount, mount } from '@vue/test-utils'
import Update from '@/views/Update.vue'



describe("Update.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Update)
        expect(wrapper.vm.$options.name).toMatch('Update')
    })
    
    it("test displaying a set new password message", ()=>{
        const wrapper = mount(Update)
        expect(wrapper.get('h1').text()).toEqual("Set a new password here.")

    })
})