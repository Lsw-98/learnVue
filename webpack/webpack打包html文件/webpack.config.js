// 动态获取绝对路径
// 1.首先通过 npm init创建package.json
// 2.然后通过require('path')拿到path路径
// 3.然后将__dirname和dist文件夹做拼接

const path = require('path')
const webpack = require('webpack')
const HttpWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js', // 入口
  output: {  // 出口
    path: path.resolve(__dirname, 'dist'),   // 这里的path要引入绝对路径
    filename: 'bundle.js',
    // publicPath: 'dist/'   // 涉及到url的东西，都会在路径上拼接上'dist/'
  },
  module: {
    rules: [
      {// css样式的loader
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM元素中，使CSS生效
        // 使用多个loader时，从右向左依次生效
        use: ['style-loader', 'css-loader']
      },
      {// 图片的loader
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit的时，会将图片编译为base64字符串格式
              // 当加载的图片大于limit的时，会使用file-loader进行加载
              limit: 15000,   // limit > 图片大小 * 1024
              name: 'img/[name].[hash:8].[ext]',   // 对打包的图片进行命名：原名+哈希值前8位（防止重复）+扩展名
            },
          }
        ]
      },
      {// babel的loader
        // babel可以将es6等新语法转化为es5，让浏览器和node可以识别
        test: /\.js$/,
        exclude: /(node_modules|bower_compoents)/,   // 不需要转化的代码
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
      },
      {//配置vue相关loader
        test: /\.vue$/,
        use: ['vue-loader']
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    new HttpWebpackPlugin({  // 配置打包html文件到dist文件夹下
      template: `index.html`
    })
  ],
  devServer: {  // 配置服务器端口
    contentBase: './dist',
    inline: true,
  }
}