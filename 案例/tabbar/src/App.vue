<template>
  <div id="app">
    <router-view></router-view>
    <!-- 3.使用tabbar组件 -->
    <tab-bar>
      <tab-bar-item path="/home">
        <img
          slot="tabbar-img-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <img slot="tabbar-img" src="~assets/img/tabbar/home.svg" alt="" />
        <div slot="tabbar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img
          slot="tabbar-img-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <img slot="tabbar-img" src="~assets/img/tabbar/category.svg" alt="" />
        <div slot="tabbar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img
          slot="tabbar-img-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <img slot="tabbar-img" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <div slot="tabbar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img
          slot="tabbar-img-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <img slot="tabbar-img" src="~assets/img/tabbar/profile.svg" alt="" />
        <div slot="tabbar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// 1. 引入tabbar组件
import TabBar from "components/tabbar/tabbar.vue";
import TabBarItem from "components/tabbar/tabbaritem.vue";

export default {
  name: "App",
  components: {
    // 2. 注册tabbar组件
    TabBar,
    TabBarItem,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
/* 
    引用css文件
  */
@import "assets/css/base.css";
</style>
