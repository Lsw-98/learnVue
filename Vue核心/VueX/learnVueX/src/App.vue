<template>
  <div id="app">
    <h2>App组件</h2>
    <h2>{{ $store.state.count }}</h2>
    <button @click="jia">+</button>
    <button @click="jian">-</button>
    <button @click="jia5(5)">+5</button>
    <h2>HelloVueX组件</h2>
    <hello-vue-x></hello-vue-x>

    <h2>getters</h2>
    <p>{{ $store.getters.powerCount }}</p>
    <p>身高大于175的学生{{ $store.getters.getHeight }}</p>
    <p>身高大于175的学生的个数：{{ $store.getters.getHeightLen }}</p>
    <p>身高大于170的学生(手动传参){{ $store.getters.moreHeight(170) }}</p>
    <button @click="addStu({ id: 5, name: '七七', height: 190 })">
      添加学生
    </button>
    <!-- <button @click="changeN">修改信息</button> -->

    <h2>modules中的模块</h2>
    <p>{{ $store.state.a.name }}</p>
    <button @click="changeName">修改moduleA中的name</button>
  </div>
</template>

<script>
import HelloVueX from "./components/HellowVuex.vue";

export default {
  name: "App",
  components: {
    HelloVueX,
  },
  data() {
    return {};
  },
  methods: {
    jia() {
      // 通过commit方法调用vuex的mutations中的方法
      // this.$store.commit("mutations中的方法名");
      this.$store.commit("add");
    },
    jian() {
      this.$store.commit("subcount");
    },
    jia5(count) {
      this.$store.commit("add5", count);
    },
    addStu(stu) {
      this.$store.commit({
        type: "addStudent",
        stu,
      });
    },
    changeName() {
      this.$store.commit("changeName", "张三");
    },
    // changeN() {
    //   // 传递参数
    //   this.$store.dispatch("changeName", "我是传递的参数");
    // },
  },
};
</script>

<style>
</style>
