import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/pizza',
    name: 'pizza',
    component: () => import('../views/Pizza.vue')
  },
  {
    path: '/customize',
    name: 'customize',
    component: () => import('../views/Customize.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
