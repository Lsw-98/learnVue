import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

const state = {
  count: 0,
  students: [
    { id: 1, name: "张三", height: 185 },
    { id: 2, name: "李四", height: 170 },
    { id: 3, name: "王五", height: 165 },
    { id: 4, name: "赵六", height: 183 },
  ],
  info: {
    name: "张三",
    age: 18
  }
}



// 2.创建vuex对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA  // 这里的a会直接被加入主模块到state中
  }
})

// 3.导出store对象
export default store