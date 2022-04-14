import { mount } from '@vue/test-utils'
import App from "../../src/App.vue"
import router from '../../src/router/index.js'
import store from '../../src/store/index.js'
import Forgot from '@/views/Forgot.vue'
import Home from '@/views/Home.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
// import Update from '@views/Update.vue'
// import Verify from '@views/Verify.vue'
// import Dashboard from '@views/Dashboard.vue'



describe('App.vue', ()=>{

    it('should render the homepage component',async ()=>{
        router.push({name: 'Home'})
        await router.isReady()

        const wrapper = mount(App,{
            global: {
                plugins: [router, store]
            }
        })

        expect(wrapper.findComponent(Home).exists()).toBe(true)
        wrapper.unmount()
    })
    
    it('should render the signup component',async ()=>{
        router.push({name: 'SignUp'})
        await router.isReady()
        
        const wrapper = mount(App,{
            global: {
                plugins: [router, store]
            }
        })

        expect(wrapper.findComponent(Signup).exists()).toBe(true)
        wrapper.unmount()
    })

    it('should render the signin component',async ()=>{
        router.push({name: 'SignIn'})
        await router.isReady()
        const wrapper = mount(App,{
            global: {
                plugins: [router, store]
            }
        })

        expect(wrapper.findComponent(Signin).exists()).toBe(true)
        wrapper.unmount()
    })

    it('should render the forgot component',async ()=>{
        router.push({name: 'Forgot'})
        await router.isReady()

        const wrapper = mount(App,{
            global: {
                plugins: [router, store]
            }
        })

        expect(wrapper.findComponent(Forgot).exists()).toBe(true)
        wrapper.unmount()
    })

    // it('should render the update component',()=>{

    // })

    // // it('should render the dashboard component',()=>{

    // // })
})