const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    hotReload: true
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('postcss-px2rem')({
                                    remUnit: 32,
                                }),
                            ]
                        }
                    },
                    'stylus-loader'],

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
        ],

    },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@common': path.join(__dirname, '../src/common'),
            '@assets': path.join(__dirname, '../src/common/assets'),
            '@views': path.join(__dirname, '../src/views'),
            '@models': path.join(__dirname, '../src/models')
        }
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
    ],

    // 从输出的 bundle 中排除依赖， 防止一个文件过大
    externals: {
        // axios: 'axios',
    }
}
