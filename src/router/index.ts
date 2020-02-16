import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import pizza from '../store/modules/pizza.ts'

Vue.use(VueRouter)

const chosenSize = (to, from, next) => {
  pizza.state.activeOption !== "" ? next() : next('/pizza')
}

const anyOrder = (to, from, next) => {
  pizza.state.orderedPizzas.length > 0 ? next() : next('/customize')
}

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
    component: () => import('../views/Customize.vue'),
    beforeEnter: chosenSize
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue'),
    beforeEnter: anyOrder
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: () => import('../views/Transaction.vue'),
    beforeEnter: anyOrder
  },
  {
    path: '/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
