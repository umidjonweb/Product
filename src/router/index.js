import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
   },
   {
      path: '/product',
      name: 'product',
      component: () => import('../views/AddProduct.vue')
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
