<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>

<style>
/* 
  1.tab-bar水平分布
  2.设置背景颜色
  3.将tab-bar置于底部
*/
#tab-bar {
  display: flex;

  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
