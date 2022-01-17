// 使用commonJs模块化规范导入js文件
const { add, mul } = require('./js/mathUtils.js')

console.log(add(10, 15));
console.log(mul(2, 6));

// 使用es6模块化规范导入js文件
import { name, age } from './js/info.js'
console.log(name);
console.log(age);

// 依赖css模块
require('./css/normal.css')

// 使用vue进行开发
import Vue from 'vue'

const app = new Vue({
  el: '#app',
  data() {
    return {
      message: "你好啊!"
    }
  },
})
