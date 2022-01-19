import Vue from 'vue'
import App from './App'
// 导入router时会自动在router文件夹下寻找index.js文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
