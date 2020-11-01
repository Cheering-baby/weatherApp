import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { View } from "@tarojs/components";
// import * as echarts from "../../compoents/ec-canvas/echarts.js";
import * as echarts from "../../components/ec-canvas/echarts";
import "./index.less";

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: "ECharts 入门示例"
    },
    tooltip: {},
    legend: {
      data: ["销量"]
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

export default class RadarChar extends Component {
  constructor(props) {
    super(props);
    // this.refresh = this.refresh.bind(this);
  }
  state = {
    ec: {
      onInit: initChart.bind(this)
    },
    init_chart: false
  };

  // componentDidUpdate(nextProps) {
  //   const _this = this;
  //   setTimeout(() => {
  //     setChartData(chart, nextProps.chartData);
  //   }, 2000); // 异步获取到图表数据并更新
  // }

  render() {
    return (
      <View className="container">
        <ec-canvas
          id="mychart-dom-area"
          canvas-id="mychart-area"
          ec={this.state.ec}
        />
      </View>
    );
  }
}
