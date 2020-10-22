import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import ShareBtn from "../../components/shareBtn";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "./index.less";

export default function Index() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<null | string>(null);

  const changeValue = value => {
    setInputValue(value);
  };

  return (
    <View className="index">
      <AtInput
        name="value"
        onChange={changeValue}
        placeholder="Please Input"
        value={inputValue}
      />
      <AtButton
        type="primary"
        circle={true}
        onClick={() => {
          setTodoList([...todoList, inputValue]);
          setInputValue(null);
        }}
      >
        Add
      </AtButton>
      {todoList.map((i, index) => (
        <View key={i + index}>{i}</View>
      ))}
      <ShareBtn />
    </View>
  );
}
