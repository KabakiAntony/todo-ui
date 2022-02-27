import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/Signup.vue'),
    props:true
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/Signin.vue'),
    props:true
  },
  {
    path: '/update',
    name: "Update",
    component: ()=> import('../views/Update.vue'),
    props: route => ({ query: route.query.tkn })
  },
  {
    path: '/forgot',
    name: "Forgot",
    component: ()=> import('../views/Forgot.vue'),
    props:true
  },
  {
    path: '/dashboard',
    name: "Dashboard",
    component: ()=> import('../views/Dashboard.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/verify',
    name: "Verify",
    component: ()=> import('../views/Verify.vue'),
    props: route => ({ query: route.query.tkn })
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.IsLoggedIn) {
      next({name: 'SignIn'});
    }
    else {
     next()
    }
  }
  else{
    next()
  } 
})

export default router
