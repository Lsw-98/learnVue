<template>
  <div class="tab-bar-item" @click="tabbarClick">
    <!-- 
       使用具名插槽  
      -->
    <div v-if="isActive">
      <slot name="tabbar-img-active"></slot>
    </div>
    <div v-else><slot name="tabbar-img"></slot></div>
    <div :style="activeStyle">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "DeepPink",
    },
  },
  data() {
    return {
      //isActive: true,
    };
  },
  computed: {
    isActive() {
      // 匹配path和当前路由的path
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    tabbarClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
/* 
  1.tab-bar-item均等分并水平居中
  2.设置文字高度并让其在垂直方向居中
  3.设置文字大小
*/
.tab-bar-item {
  flex: 1;
  text-align: center;

  height: 49px;
  /* line-height: 49px; */

  font-size: 14px;
}

/* 
  3. 将图片放置在父元素的中部
*/
.tab-bar-item img {
  width: 24px;
  height: 24px;

  margin-top: 3px;
  margin-bottom: 2px;

  vertical-align: middle;
}
</style>
