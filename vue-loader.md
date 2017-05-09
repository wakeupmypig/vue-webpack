## webpack + vue
使用vue-loader解析.vue文件
# 构建项目
## 安装下载
```
$ npm init -y
```
### 安装webpack
```
$ npm install webpack webpack-dev-server --save-dev
```
### 安装loader + presets
```
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 css-loader style-loader vue-loader --save-dev
```
### 安装plugins
```
$ npm install html-webpack-plugin vue-template-compiler --save-dev
```
### 安装vue
```
$ npm install vue vue-router --save
```
### 配置.babelrc
```
{
  "presets": ["es2015","stage-0"]
}
```
### 配置webpack.config.js
```
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
```

### 配置package.json
``` 
"scripts": {
    "dev": "webpack-dev-server --port 3000 --open",
    "build": "webpack"
},
```

## 配置项目结构
main为入口文件，在此文件下创建vue的实例
```
$ mkdir src && cd src
$ touch main.js
```
如果直接使用vue文件，不能使用template,默认引用文件是vue.common.js
```
import Vue from 'vue';
import App from './App.vue'
new Vue({
    el:'#app',
    ...App
});
```

## 引入vue-router
use引用插件,可以默认调用install方法装载我们的插件
```
import jwButton from './plugins'
Vue.use(jwButton);
import Vue from 'vue';
export default  {
    install(){
        Vue.component('jw-button',{
            render:(h)=>h('button','jw')
        })
    }
}
```
使用vue-router
```
import VueRouter from 'vue-router';
Vue.use(VueRouter); 
const routes = [
    {path:'/',component:Home}
]
const router = new VueRouter({
    routes
});
new Vue({
    el:'#app',
    ...App,
    router
});
```

> 我们可以使用.vue的文件来书写我们的组建了
