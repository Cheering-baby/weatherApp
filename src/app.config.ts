export default {
  pages: ["pages/index/index", "pages/todoList/index", 'pages/echarts/index'],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  },
  tabBar: {
    color: "#333",
    selectedColor: "#333",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./images/tab/home.png",
        selectedIconPath: "./images/tab/home-active.png"
      },
      {
        "pagePath": "pages/echarts/index",
        "text": "购物车",
        iconPath: './images/tab/cart.png',
        selectedIconPath: './images/tab/cart-active.png',
      },
      {
        pagePath: "pages/todoList/index",
        text: "我的",
        iconPath: "./images/tab/user.png",
        selectedIconPath: "./images/tab/user-active.png"
      }
    ]
  }
};
