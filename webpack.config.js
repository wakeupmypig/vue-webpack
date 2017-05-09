let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports  = {
    entry:'./src/main.js',
    output:{
        path:path.resolve('./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'src/index.html'
        })
    ]

};