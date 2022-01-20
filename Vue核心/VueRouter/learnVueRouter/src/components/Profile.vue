<template>
  <div>
    <h2>我是个人页</h2>
    <p>利用query属性传递参数, query的值为一个对象，对象中写入要传递的参数，</p>
    <p>若数据较多，可以使用query</p>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
</style>