export default {
  // 类似于计算属性，对state中的对象作修改
  powerCount(state) {
    return state.count * state.count
  },
  getHeight(state) {
    return state.students.filter(s => s.height > 175)
  },
  // 这里可以传入一个getters参数，在这个方法中可以调用getters的其他方法
  getHeightLen(state, getters) {
    return getters.getHeight.length
  },
  moreHeight(state) {
    return function (height) {
      return state.students.filter(s => s.height > height)
    }
  }
}