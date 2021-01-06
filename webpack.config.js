const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'production',
    entry: './src/vueApp.js',
    output: {
        filename: 'vueApp.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { esModule: false }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            require('@babel/plugin-transform-async-to-generator'),
                            require('@babel/plugin-transform-arrow-functions'),
                            require('@babel/plugin-transform-modules-commonjs')
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: {
                    loader: 'vue-loader',
                }
            }
        ],
    },
    resolve: {
        alias: {
            Vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js'),
            VueRouter: path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.esm-bundler.js'),
        }
    },
    plugins: [new VueLoaderPlugin(), ],
    optimization: {
        usedExports: true,
        sideEffects: false,
        minimize: false,
    }
};