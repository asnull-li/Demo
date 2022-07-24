const path = require('path')

module.exports = {
    mode: 'development', // 打包模式
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件
    output: { // 打包出口配置
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
}