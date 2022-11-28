import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ShowCategoryProduct from '../views/ShowCategoryProductView.vue'
import ShowBrandProduct from '../views/ShowBrandProductView.vue'
import ShowProductDetails from '../views/ShowProductDetails.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/danh-muc-san-pham/:id',
    name: 'ShowCategoryProduct',
    component: ShowCategoryProduct
  },
  {
    path: '/thuong-hieu-san-pham/:id',
    name: 'ShowBrandProduct',
    component: ShowBrandProduct
  },
  {
    path: '/chi-tiet-san-pham/:id',
    name: 'ShowProductDetails',
    component: ShowProductDetails
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
