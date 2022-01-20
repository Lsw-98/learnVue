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
  data() {
    return {
      path: "/home/message",
    };
  },
  // activated和deactivated函数只有在该组件被keep-alive包裹时才有效
  activated() {
    // 将首页重定向到消息页
    this.$router.push(this.path);
  },
  // 使用beforeRouteLeave()函数记录离开当前路由时的路径
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  },
};
</script>

<style scoped>
</style>