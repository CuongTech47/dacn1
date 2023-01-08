import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ShowCategoryProduct from '../views/ShowCategoryProductView.vue'
import ShowBrandProduct from '../views/ShowBrandProductView.vue'
import ShowProductDetails from '../views/ShowProductDetails.vue'
import ShowCart from '../views/ShowCart.vue'
import LoginCheckOut from '../views/auth/LoginCheckOut.vue'
import Register from '../views/auth/Register.vue'



import ViewUIPlus from 'view-ui-plus';

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
  {
    path: '/cart',
    name: 'ShowCart',
    component: ShowCart
  },
  {
    path: '/login',
    name: 'LoginCheckOut',
    component: LoginCheckOut
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  
  
]





const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})
router.beforeEach((to, from, next) => {
  ViewUIPlus.LoadingBar.start();
  next();
});

router.afterEach(route => {
  ViewUIPlus.LoadingBar.finish();
});

export default router
