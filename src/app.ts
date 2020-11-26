import { View } from '@tarojs/components';
import Taro from "@tarojs/taro";
import { Component } from 'react'
import './app.less';
import { getGlobalData, setGlobalData } from './global_data';

const xml2json = require('xmlstring2json');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      n: 0
    }
  }

  componentDidMount() {
    let _this = this;
    Taro.login({
      success: function (res) {
        if (res.code) {
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
    const _this = this;
    Taro.getUserInfo().then(i => {
      console.log(i)
    })
    // Taro.getLocation({})
    //   .then(i => {
    //     // console.log(i)
    //     Taro.request({
    //       url: "http://api.map.baidu.com/reverse_geocoding/v3/",
    //       method: "GET",
    //       data: {
    //         ak: 'y5psqaCrCqhNZAxti1PUGGRlhlw72HaT',
    //         location: `${i.latitude},${i.longitude}`
    //       },
    //       success: res => {
    //         const GeocoderSearchResponse = xml2json(res.data).GeocoderSearchResponse;
    //         Taro.setStorage({ key: 'address', data: GeocoderSearchResponse.result.addressComponent });
    //         console.log(getGlobalData('address'));
    //         _this.setState({
    //           n: Math.random() * 1000,
    //         })
    //       }
    //     });
    //   })
  }




  // this.props.children 是将要会渲染的页面
  render() {

    return (
      this.props.children
    )
  }
}

export default App
