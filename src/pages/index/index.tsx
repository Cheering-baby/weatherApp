import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ShareBtn from "../../components/shareBtn";
// import BarChart from "../../components/BarChart";
import { AtButton } from "taro-ui";
import Temperature from "./Temperature";
import { getGlobalData, setGlobalData } from "../../global_data";

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
  wea: "default",
  wea_img: "qing",
  tem: "default",
  tem1: "26",
  tem2: "18",
  win: "东风",
  win_speed: "2级",
  win_meter: "小于12km/h",
  humidity: "default",
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

const params = {
  appid: "14724791",
  appsecret: "HRc3omHq"
};

type weatherData = typeof data;

type StateType = {
  weatherData: weatherData;
  seven: Array<weatherData>;
};

interface Index {
  state: StateType;
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: data,
      seven: [data]
    };
  }
  componentWillMount() {}

  componentDidMount() {
    this.requestSeven();
    this.requestToday();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  requestToday() {
    Taro.request({
      url: "https://tianqiapi.com/api",
      method: "GET",
      data: {
        ...params,
        version: "v6"
      },
      success: res => {
        // console.log(res);
        this.setState({
          weatherData: res.data
        });
      }
    });
  }

  requestSeven() {
    Taro.request({
      url: "https://tianqiapi.com/api",
      method: "GET",
      data: {
        ...params,
        version: "v1"
      },
      success: res => {
        console.log(res);
        this.setState({
          seven: res.data.data
        });
      }
    });
  }

  handleGetUserInfo(e) {
    // console.log(e);
    // console.log(JSON.parse(e.detail.rawData));
  }

  render() {
    const { city = {}, district = {}, street = {} } =
      getGlobalData("address") || {};
    console.log(getGlobalData("address"));
    return (
      <View className="container">
        <ShareBtn />
        <View>
          <Text>{street["#text"]}</Text>
          <Text>{district["#text"]}</Text>
          <Text>{city["#text"]}</Text>
        </View>
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
        <View className="container2">
          {/* <View className="title">
            未来七天
          </View> */}
          <Temperature seven={this.state.seven} />
        </View>
      </View>
    );
  }
}

export default Index;
