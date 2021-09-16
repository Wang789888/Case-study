# 目录结构
build	项目构建(webpack)相关代码
config	配置目录，包括端口号等。我们初学可以使用默认的。
node_modules	npm 加载的项目依赖模块
src	这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：
    assets: 放置一些图片，如logo等。
    components: 目录里面放了一个组件文件，可以不用。
    App.vue: 项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录。
    main.js: 项目的核心文件。
static	静态资源目录，如图片、字体等。
test	初始测试目录，可删除
.xxxx文件	这些是一些配置文件，包括语法配置，git配置等。
index.html	首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
package.json	项目配置文件。
README.md	项目的说明文档，markdown 格式


# 注意事项
 务必保证以下版本的兼容性
    "webpack": "^3.8.1",
    "webpack-dev-server": "^2.9.3"
    "html-webpack-plugin": "^2.30.1",
 全局安装(不推荐):npm install webpack webpack-cli -g
 安装好后打印版本:
    webpack -v
    webpack-cli -v
 卸载全局   npm uninstall webpack webpack-cli -g
 项目安装:(不是全局)
    npm install webpack webpack-cli --save-dev
    // 或
    npm install webpack webpack-cli -D
 打印版本(用全局方式行不通,因为nodejs首先在全局查找webpack),可以加上npx
    npx webpack -v
    npx webpack-cli -v
 查询指定版本webpack是否存在：npm info webpack@4.25
 安装特定版本号webpack：npm install webpack@4.16.5 webpack-cli -D

# 安装mockjs
 npm install mockjs

# 卸载与安装指定版本
 npm uninstall sass-loader（卸载当前版本）
 
 npm install sass-loader@7.3.1 --save-dev