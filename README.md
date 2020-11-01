# weatherApp
基于Taro，react开发的天气小程序

#### 技术栈
React + Taro + Taro-UI + ES6

#### 更新日志
- 2020.10.20 初始化应用模板Taro, React, Taro-UI
- 2020.10.22 封装微信小程序分享组件,初始化请求用户信息
- 2020.10.26 对接第三方天气接口，页面显示今日天气信息
- 2020.11.01 引入echarts图表展示，升级taro框架到3.0.11,增加未来一周气温显示

#### 项目运行

```

git clone git@github.com:Cheering-baby/weatherApp.git

cd weatherApp

# 全局安装taro脚手架
npm install -g @tarojs/cli@3.0.4

# 安装项目依赖
npm install

# 微信小程序
npm run dev:weapp

# 支付宝小程序
npm run dev:alipay

# 百度小程序
npm run dev:swan

# 字节跳动小程序
npm run dev:tt

# H5
npm run dev:h5

# React Native
npm run dev:rn

# pages模版快速生成
npm run tep `文件名`

```