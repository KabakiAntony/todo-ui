import { shallowMount, mount } from '@vue/test-utils'
import AddTodo from '@/components/AddTodo.vue'

describe("AddTodo.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(AddTodo)
        expect(wrapper.vm.$options.name).toMatch('AddTodo')
    })

    it('test that a form is rendered', ()=>{
        const wrapper = shallowMount(AddTodo)
        expect(wrapper.find('form').exists()).toBe(true)
    })

    it('test that our form has input fields', ()=>{
        const wrapper = shallowMount(AddTodo)
        expect(wrapper.find('form > input').exists()).toBe(true)
    })

    it("test creating a new todo", async ()=>{
        const wrapper = mount(AddTodo)
        
        await wrapper.get('[data-test="new-todo"]').setValue('New todo')
        await wrapper.find('form').trigger('submit.prevent')
        
        expect(wrapper.emitted('on-submit')[0][0]).toStrictEqual({ text: 'New todo' })
    })

    it('test on submit event is emitted',()=>{
        const wrapper = shallowMount(AddTodo)
        wrapper.find('form').trigger('submit.prevent')
    
        expect(wrapper.emitted()).toHaveProperty('on-submit')
      })
    
    
})