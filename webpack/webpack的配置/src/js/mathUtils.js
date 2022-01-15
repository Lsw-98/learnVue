function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

// 使用commonJs模块化规范导出js文件
module.exports = {
  add,
  mul
}