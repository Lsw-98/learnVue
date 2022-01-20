<template>
  <!-- 
    使用路由的三个步骤：
    1. 创建组件
    2. 配置路由与页面的映射关系
    3. 使用router-link和router-view进行页面渲染
  -->
  <div id="app">
    <!-- 
      router-link最终被渲染为a标签
      to属性：用于指定跳转路径
      tag属性：可以将router-link渲染为其他标签
        <router-link to="/home" tag="button">首页</router-link>
      replace属性：单页面模式
     -->
    <p>在任何一个组件中，使用this.$router都是index.js中new的router</p>
    <p>在SPA应用中，我们可以采取全局导航守卫来动态修改每个路由的标题</p>
    <p>
      keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，避免重新渲染
      router-view也是一个组件，如果直接被包裹在keep-alive中，
      所有路径匹配到的视图组件都会被缓存
    </p>
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <router-link
      :to="{
        path: '/profile',
        query: { name: 'lsw', age: 18, height: '185cm' },
      }"
      >档案</router-link
    >

    <!-- 
      keep-alive属性
      include:取值为字符串或正则表达式，任何匹配的组件都会被缓存
      exclude:取值为字符串或正则表达式，任何匹配的组件都不会被缓存
      字符串为组件的name
     -->
    <keep-alive exclude="Profile">
      <!-- 
      router-view：根据当前url将组件渲染到页面，充当占位作用
       -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan",
    };
  },
};
</script>

<style>
</style>
