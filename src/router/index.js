import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import landingpage from '../views/Landingpage.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'
import howto from '../views/HowTo.vue'
import helpdesk from '../views/Helpdesk.vue'
import createpeloton from '../views/CreatePeloton.vue'
import editpeloton from '../views/EditPeloton.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landingpage',
    component: landingpage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/register',
    name: 'Register',
    component: register
  },
  {
    path: '/howto',
    name: 'Howto',
    component: howto
  },
  {
    path: '/helpdesk',
    name: 'Helpdesk',
    component: helpdesk
  },
  {
    path: '/createpeloton',
    name: 'CreatePeloton',
    component: createpeloton
  },
  {
    path: '/editpeloton',
    name: 'EditPeloton',
    component: editpeloton
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
