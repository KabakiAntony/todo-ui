import { shallowMount, mount } from '@vue/test-utils'
import Dashboard from '@/views/Dashboard.vue'
import AddTodo from '../../src/components/AddTodo.vue'
import TodoList from '../../src/components/TodoList.vue'



describe("Dashboard.vue", ()=>{
    it("test we are getting the app component by name",()=>{
        const wrapper = shallowMount(Dashboard)
        expect(wrapper.vm.$options.name).toMatch('Dashboard')
    })
    
    it("test displaying a header on the dashboard", async ()=>{
        const wrapper = shallowMount(Dashboard)
        expect(wrapper.get('h1').text()).toContain("List things you want to")

    })
     
    it("test that AddTodo is rendered",()=>{
        const wrapper = mount(Dashboard)
        expect(wrapper.findComponent(AddTodo).exists()).toBe(true)
    })

    it("test that TodoList is not rendered when there are no todos",()=>{
        const wrapper = mount(Dashboard)
        expect(wrapper.findComponent(TodoList).exists()).toBe(false)
    })
    it("test that todo is rendered  when passed as a prop and as a component", ()=>{
        const wrapper = mount(TodoList,{
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
        const dashboard_wrapper = mount(Dashboard)
        expect(dashboard_wrapper.findComponent(TodoList).exists()).toBe(false)
        const todo = wrapper.get('[data-test="todo"]')
        expect(todo.text()).toBe('Learn Vue.js 3')
    })

})