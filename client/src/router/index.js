import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ShowCategoryProduct from '../views/ShowCategoryProductView.vue'

import About from '../views/About.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/danh-muc-san-pham/:id',
    name: 'ShowCategoryProduct',
    component: ShowCategoryProduct
  },
  
  
]


// router.beforeEach((to , from , next)=> {
//   document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
//   next()
// })

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
