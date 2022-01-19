<template>
  <div>
    <h2>我是首页</h2>
    <p>我想去字节</p>
    <!-- 
      这里的子路由写完整路径
     -->
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
</style>