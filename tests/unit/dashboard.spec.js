import { shallowMount, mount } from '@vue/test-utils'
import Dashboard from '@/views/Dashboard.vue'



describe("Dashboard.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Dashboard)
        expect(wrapper.vm.$options.name).toMatch('Dashboard')
    })
    
    it("test displaying a header on the dashboard", async ()=>{
        const wrapper = shallowMount(Dashboard)
        expect(wrapper.get('h1').text()).toContain("List things you want to")

    })
})