const merge = require('webpack-merge');
const common = require('./webpack.common');

let devConfig = {
    mode: 'development'
}

module.exports = merge(devConfig, common);
