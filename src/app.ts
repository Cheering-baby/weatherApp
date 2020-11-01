import { View } from '@tarojs/components';
import Taro from "@tarojs/taro";
import { Component } from 'react'
import './app.less'

class App extends Component {

  constructor(props) {
    super(props);
    // this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    let _this = this;
    Taro.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          // Taro.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
          Taro.getSetting().then(data => {
            // console.log(data)
            const { authSetting } = data;
            if (authSetting['scope.userInfo']) {
              _this.getInfo();
            } else {
              Taro.authorize({
                scope: 'scope.userInfo',
                success() {
                  // 用户已经同意小程序获取用户信息
                  _this.getInfo();
                },
                fail(err) {
                  // console.log(err)
                }
              })
            }
          });
        } else {
          // console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  getInfo() {
    Taro.getUserInfo().then(i => {
      // console.log(i)
    })
    Taro.getLocation({})
      .then(i => {
        // console.log(i)
      })
  }




  // this.props.children 是将要会渲染的页面
  render() {

    return (
      this.props.children

    )
  }
}

export default App
