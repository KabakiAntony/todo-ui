import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue'),
    props:true
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue'),
    props:true
  },
  {
    path: '/update',
    name: "Update",
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Update.vue'),
    props:true
  },
  {
    path: '/forgot',
    name: "Forgot",
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Forgot.vue'),
    props:true
  },
  {
    path: '/dashboard',
    name: "Dashboard",
    component: ()=> import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    props:true
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  // routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
  history: createWebHistory(),
  routes
})

export default router
