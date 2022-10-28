const path = require('path')
// 1. 导入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// 使用 Node.js 中的导入语法，向外导出一个webpack的配置对象
module.exports = {
    // mode 用来指定构建模式，可选值有 development 和 production
    // development 开发模式，production 线上模式
    mode: 'development',
    // 报错行对准源代码
    // devtool: 'eval-source-map',
    // 定位行号，不暴露源码
    devtool: 'nosources-source-map',
    // __dirname 当前文件目录
    entry: path.join(__dirname, './src/index.js'),  // 打包入口文件的路径
    // 指定生成的文件要存放到哪里
    output: {
        // 存放目录
        path: path.join(__dirname, 'dist'),   // 打包入口文件的路径
        // 生成的文件名
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                // 处理.css
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // 处理.less
                test: /\.less$/i,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                // 处理.sass/.scss
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                // 将文件转换为base64 URI的webpack加载程序。
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader?limit=80&outputPath=images',
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    },
    devServer: {
        open: true, // 初次打包完成后，自动打开浏览器
        host: 'localhost',	// 实时打包使用的主机地址
        port: 8081,	// 实时打包所使用的端口号
        static: {
            directory: path.join(__dirname, '/') // 打开路径
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 指定复制哪个页面
            template: './src/index.html',
            // 指定复制出来的文件名和存放路径
            filename: './index.html'
        }),
        // 自动删除 dist
        new CleanWebpackPlugin()
    ]
}