import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'



describe("TodoList.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(TodoList)
        expect(wrapper.vm.$options.name).toMatch('TodoList')
    })

    it("test displaying todo passed as props", ()=>{
        const wrapper = shallowMount(TodoList,{
            props:{
                todos: [
                    {
                        id: 1,
                        text: 'Learn Vue.js 3',
                        completed: false
                      }
                ]
            }
        })
        const todo = wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe('Learn Vue.js 3')
    })

    it("test that it does not render when there are not todos passed", ()=>{
        const wrapper = shallowMount(TodoList,{
            props:{
                todos: []
            }
        })
        const todo = wrapper.find('[data-test="todo"]')
        expect(todo.exists()).toBe(false)
    })
    
    it("test emitting update event", ()=>{
        const wrapper = shallowMount(TodoList,{
            props:{
                todos: [
                    {
                        id: 1,
                        text: 'Learn Vue.js 3',
                        completed: false
                      }
                ]
            }
        })
        wrapper.find('[data-test="complete-button"]').trigger('click')

        expect(wrapper.emitted()).toHaveProperty('on-update')
    })

    it("test emitting delete event", ()=>{
        const wrapper = shallowMount(TodoList,{
            props:{
                todos: [
                    {
                        id: 1,
                        text: 'Learn Vue.js 3',
                        completed: false
                      }
                ]
            }
        })
        wrapper.find('[data-test="delete-button"]').trigger('click')

        expect(wrapper.emitted()).toHaveProperty('on-delete')
    })
    
})