# 初始化一个package.json文件
npm init -y

# 安装webpack webpack-cli
yarn add webpack webpack-cli --dev

# 安装ts
yarn add typescript --dev

# 安装webpack插件
# 让webpack可以编译ts文件
yarn add awesome-typescript-loader --dev

# 安装server来提供web服务
yarn add webpack-dev-server --dev
# 自动在html中引入打包好的js文件
yarn add html-webpack-plugin --dev

#安装react 除了安装源代码包，还得安装类型文件
yarn add react
yarn add react-dom
yarn add @types/react --dev
yarn add @types/react-dom --dev