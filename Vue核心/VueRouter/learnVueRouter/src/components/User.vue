<template>
  <div>
    <h2>我是用户界面</h2>
    <p>使用params动态路由传递参数</p>
    <h2>{{ Id }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    Id() {
      // this.$route: 当前哪个路由处于活跃状态，那么this.$route就指向这个路由
      // 这里的id对应index.js的路由配置的id
      // 使用动态路由传递参数
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
</style>