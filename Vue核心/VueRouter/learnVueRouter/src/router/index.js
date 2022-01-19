// 配置路由相关信息

// 1. 导入路由
import Vue from 'vue'
import Router from 'vue-router'

// 2. 通过Vue.use(Router)来安装VueRouter插件
Vue.use(Router)

// 3. 创建路由对象
// 4. 导出路由对象，传入Vue实例中
export default new Router({
  routes: [
    {
      path: '/',
      // 重定向到Home页
      redirect: '/home',
    },
    {
      path: "/home",
      // 路由懒加载写法
      component: () => import('../components/Home'),
      children: [   // 路由嵌套
        {
          path: "message",   // 这里不需要加斜杠
          component: () => import('../components/HomeMessage'),
        },
        {
          path: "news",
          component: () => import('../components/HomeNews'),
        },
      ]
    },
    {
      path: "/about",
      component: () => import('../components/About')
    },
    {
      path: "/user/:id",
      component: () => import('../components/User')
    }
  ],
  // 将前端路由改为history模式
  mode: 'history',
})
