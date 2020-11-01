import React, { useState, useEffect } from "react";
import { View } from "@tarojs/components";
import "./index.less";
import * as echarts from "../../components/ec-canvas/echarts";

function dealData(seven) {
  const xAxisData = seven.map(i => i.week);
  const high = seven.map(i => Number(i.tem1.replace('℃', '')));
  const low = seven.map(i => Number(i.tem2.replace('℃', '')));
  return {
    xAxisData,
    high,
    low
  };
}

export default function Index(props) {
  const { seven = [] } = props;
  const [ec, setEc] = useState({ onInit: initChart });
  //   const [inputValue, setInputValue] = useState<null | string>(null);
  useEffect(() => {
    setEc({
      onInit: initChart
    });
    console.log(seven)
  }, [seven]);
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
        text: "未来一周气温变化",
        // subtext: "纯属虚构",
        textStyle: {
          height: 300
        }
      },
      grid: {
        top: 70,
        left: 40,
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["最高气温", "最低气温"],
        right: 20
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: dealData(seven).xAxisData
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} °C"
        }
      },
      series: [
        {
          name: "最高气温",
          type: "line",
          data: dealData(seven).high,
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "最低气温",
          type: "line",
          data: dealData(seven).low,
          markPoint: {
            data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
          },
          markLine: {
            data: [
              { type: "average", name: "平均值" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max"
                },
                {
                  symbol: "circle",
                  label: {
                    position: "start",
                    formatter: "最大值"
                  },
                  type: "max",
                  name: "最高点"
                }
              ]
            ]
          }
        }
      ]
    };

    chart.setOption(option);
    return chart;
  }

  return (
    <View className="echarts">
      <ec-canvas id="mychart-dom-area" canvas-id="mychart-area" ec={ec} />
    </View>
  );
}
