export default {
  pages: [
    'pages/index/index',
    'pages/todoList/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    color: '#333',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: 'white',
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页",
      iconPath: './images/tab/home.png',
      selectedIconPath: './images/tab/home-active.png',
    },
    // {
    //   "pagePath": "pages/todoList/index",
    //   "text": "购物车",
    //   iconPath: './images/tab/cart.png',
    //   selectedIconPath: './images/tab/cart-active.png',
    // },
    {
      "pagePath": "pages/todoList/index",
      "text": "我的",
      iconPath: './images/tab/user.png',
      selectedIconPath: './images/tab/user-active.png',
    }]
  },
}
