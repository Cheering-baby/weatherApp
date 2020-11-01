import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ShareBtn from "../../components/shareBtn";
// import BarChart from "../../components/BarChart";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

const data = {
  cityid: "101230101",
  date: "2020-10-26",
  week: "星期一",
  update_time: "2020-10-26 18:37:21",
  city: "福州",
  cityEn: "fuzhou",
  country: "中国",
  countryEn: "China",
  wea: "晴",
  wea_img: "qing",
  tem: "22",
  tem1: "26",
  tem2: "18",
  win: "东风",
  win_speed: "2级",
  win_meter: "小于12km/h",
  humidity: "65%",
  visibility: "29.6km",
  pressure: "1006",
  air: "42",
  air_pm25: "42",
  air_level: "优",
  air_tips: "空气很好，可以外出活动，呼吸新鲜空气，拥抱大自然！",
  alarm: {
    alarm_type: "",
    alarm_level: "",
    alarm_content: ""
  }
};

type weatherData = typeof data;

type StateType = {
  weatherData: weatherData;
};

interface Index {
  state: StateType;
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: data
    };
  }
  componentWillMount() {}

  componentDidMount() {
    Taro.request({
      url: "https://tianqiapi.com/api",
      method: "GET",
      data: {
        version: "v61",
        appid: "14724791",
        appsecret: "HRc3omHq",
        success: (res: weatherData) => {
          console.log(res);
          this.setState({
            weatherData: res
          });
        }
      }
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleGetUserInfo(e) {
    console.log(e);
    console.log(JSON.parse(e.detail.rawData));
  }

  render() {
    return (
      <View className="container">
        <ShareBtn />
        <View className="container1">
          <View className="temContainer">
            <View className="tem">{this.state.weatherData.tem}℃</View>
            <View className="wea">{this.state.weatherData.wea}</View>
          </View>
          <View className="winContainer">
            <View className="win">
              {this.state.weatherData.win} {this.state.weatherData.win_speed}
            </View>
            <View className="wea">湿度 {this.state.weatherData.humidity}</View>
          </View>
          <View className="winContainer">
            <View>查看降水雷达</View>
          </View>
        </View>
        {/* <BarChart /> */}
      </View>
    );
  }
}

export default Index;
