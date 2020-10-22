import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ShareBtn from "../../components/shareBtn";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="container">
        <ShareBtn />
        <View className="index">
          <View>Test1</View>
          <View>Test2</View>
          <View>Test3</View>
        </View>
      </View>
    );
  }
}
