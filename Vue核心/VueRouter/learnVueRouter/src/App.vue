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
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <!-- 
      router-view：根据当前url将组件渲染到页面，充当占位作用
    -->
    <router-view></router-view>
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
