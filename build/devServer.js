const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');

let devServer =  {
    devServer: {
        port: 4200, // 端口
        open: true, // 打开浏览器
        inline: true, // 实时刷新
        progress: true, // 输出进度到控制台
        overlay: true, // 编译错误显示在页面上
        clientLogLevel: 'error'
    },
}
module.exports = merge(devConfig, devServer);