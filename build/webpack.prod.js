const merge = require('webpack-merge');
const common = require('./webpack.common');

let prodConfig = {
    mode: 'production',
}

module.exports = merge(prodConfig, common);
