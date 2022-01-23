export default {
  // 定义方法
  add(state) {
    state.count++
  },
  subcount(state) {
    state.count--
  },
  add5(state, count) {
    state.count += count
  },
  addStudent(state, payload) {  // 传入的数据统一为payload
    state.students.push(payload.stu)
  },
  // updateName(state) {
  //   state.info.name = 'lsw'
  // }
}