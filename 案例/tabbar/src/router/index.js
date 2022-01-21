// 1.导入router相关组件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2.安装插件
Vue.use(VueRouter)

// 3.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home')
  },
  {
    path: '/category',
    component: () => import('views/category/Category')
  },
  {
    path: '/shopcart',
    component: () => import('views/shopcart/Shopcart')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile')
  },

]
const router = new VueRouter({
  routes,
  mode: 'history',
})

// 4.导出VueRouter
export default router