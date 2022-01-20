// 配置路由相关信息

// 1. 导入路由
import Vue from 'vue'
import Router from 'vue-router'

// 2. 通过Vue.use(Router)来安装VueRouter插件
Vue.use(Router)

// 3. 创建路由对象
// 4. 导出路由对象，传入Vue实例中
const VRouter = new Router({
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
      ],
      meta: {
        title: "首页"
      },
    },
    {
      path: "/about",
      component: () => import('../components/About'),
      // 路由独享守卫
      beforeEnter: ((to, from, next) => {
        console.log("我是关于路由的独享守卫 ");
      }),
      meta: {
        title: "关于"
      },
    },
    {
      path: "/user/:id",
      component: () => import('../components/User'),
      meta: {
        title: "用户"
      },
    },
    {
      path: "/profile",
      component: () => import('../components/Profile'),
      meta: {
        title: "档案"
      },
    },
  ],
  // 将前端路由改为history模式
  mode: 'history',
})

// 前置守卫函数
VRouter.beforeEach((to, from, next) => {
  // to： 即将要进入的路由对象
  // from：当前导航即将要离开的路由对象
  // next：调用该方法后才能进入下一个路由 
  // 如果存在嵌套要制定matched数组
  document.title = to.matched[0].meta.title
  next()
})

// 后置守卫函数
// 后置守卫函数不需要调用next函数
VRouter.afterEach((to, from) => { })

export default VRouter