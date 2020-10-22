import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton, AtIcon } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/icon.scss"; // 按需引入
import "./index.less";

export default class Index extends Component {
  componentWillMount() {
    Taro.showShareMenu({
      withShareTicket: true
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // onShareAppMessage() {
  //   return {
  //     title: "自定义标题",
  //     path: "pages/todoList/index", //
  //     imageUrl: "../../images/tab/user-active.png" // 图片路径
  //   };
  // }

  render() {
    return (
      <View className="shareContainer">
        <button open-type="share" className="shareBtn">
          <AtIcon value="upload" size="20" color="#fff"></AtIcon>
        </button>
      </View>
    );
  }
}
