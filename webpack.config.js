const path = require('path');
const htmlwebpackplug = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//暴露接口
module.exports = {
    //要打包输出的文件的路径
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        // 打包后的文件要输出到的路径
        path:path.join(__dirname,'./dist'),
        //输出的文件名
        filename:'bundle.js'
    },
    devServer:{
        port:8008,
        //指定文件的托管路径
        contentBase:'src',
        //自动打开页面
        open:true,
        hot:true
    },
    plugins:[
        //创建一个热更新对象
        new webpack.HotModuleReplacementPlugin(),
        //创建一个存放在内存的html页面
        new htmlwebpackplug({
            //创建页面模板组件
            template:path.join(__dirname,"./src/index.html"),
            filename:'index.html'
        }),
        //创建vue的工作环境
        new VueLoaderPlugin(),
    ],
    //module属性为处理第三方
    module:{
        rules:[
            //依赖关系从后面开始往前依赖
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=200&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.mp4$/,use:'url-loader'},
            {test:/\.vue$/,use:['vue-loader']}
        ]
    },
    resolve:{
            //用于修改Vue这个包导入的路径
        alias:{
            //"vue$"表示以vue结尾的时候,
            //重新修改的文件路径直接把node_modules的文件名过滤掉直接进去到里面node_modules里面找到vue.js
            "vue$":'vue/dist/vue.js'
        }
    }


}