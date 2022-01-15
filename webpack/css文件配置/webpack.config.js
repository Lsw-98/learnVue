// 动态获取绝对路径
// 1.首先通过 npm init创建package.json
// 2.然后通过require('path')拿到path路径
// 3.然后将__dirname和dist文件夹做拼接

const path = require('path')

module.exports = {
  entry: './src/main.js', // 入口
  output: {  // 出口
    path: path.resolve(__dirname, 'dist'),   // 这里的path要引入绝对路径
    filename: 'bundle.js',
  },
  module: {   // loader
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM元素中，使CSS生效
        // 使用多个loader时，从右向左依次生效
        use: ['style-loader', 'css-loader']
      }
    ]
  },
}