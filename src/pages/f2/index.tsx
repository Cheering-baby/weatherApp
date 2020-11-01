import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { F2Canvas } from "taro-f2";
import { fixF2 } from "taro-f2/dist/weapp/common/f2-tool.ts";
import F2 from "@antv/f2";

export default class Index extends Component {
  onInitChart(F2, config) {
    const chart = new F2.Chart(config);
    const data = [
      { value: 63.4, city: "New York", date: "2011-10-01" },
      { value: 62.7, city: "Alaska", date: "2011-10-01" },
      { value: 72.2, city: "Austin", date: "2011-10-01" },
      { value: 58, city: "New York", date: "2011-10-02" },
      { value: 59.9, city: "Alaska", date: "2011-10-02" },
      { value: 67.7, city: "Austin", date: "2011-10-02" },
      { value: 53.3, city: "New York", date: "2011-10-03" },
      { value: 59.1, city: "Alaska", date: "2011-10-03" },
      { value: 69.4, city: "Austin", date: "2011-10-03" }
    ];
    chart.source(data, {
      date: {
        range: [0, 1],
        type: "timeCat",
        mask: "MM-DD"
      },
      value: {
        max: 300,
        tickCount: 4
      }
    });
    chart
      .area()
      .position("date*value")
      .color("city")
      .adjust("stack");
    chart
      .line()
      .position("date*value")
      .color("city")
      .adjust("stack");
    chart.render();
    // 注意：需要把chart return 出来
    return chart;
  }

  render() {
    return (
      <View className="index">
        <View style="width:100%;height:500px">
          {/* <f2 onInit={this.onInitChart} /> */}
        </View>
      </View>
    );
  }
}
