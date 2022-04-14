import { shallowMount } from '@vue/test-utils'
import AddTodo from '@/components/AddTodo.vue'

describe("AddTodo.vue", ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(AddTodo);
    })

    afterEach(()=>{
        wrapper.unmount();
    })

    it("test we are getting the app component by name",()=>{
        expect(wrapper.vm.$options.name).toMatch('AddTodo')
    })

    it('test that a form is rendered', ()=>{
        expect(wrapper.find('form').exists()).toBe(true)
    })

    it('test that our form has input fields', ()=>{
        expect(wrapper.find('form > input').exists()).toBe(true)
    })

    it("test creating a new todo", async ()=>{
        
        await wrapper.get('[data-test="new-todo"]').setValue('New todo')
        await wrapper.find('form').trigger('submit.prevent')
        
        expect(wrapper.emitted('on-submit')[0][0]).toStrictEqual({ text: 'New todo' })
    })

    it('test on submit event is emitted',()=>{
        wrapper.find('form').trigger('submit.prevent')
    
        expect(wrapper.emitted()).toHaveProperty('on-submit')
      })
    
    
})