<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { LineChart } from "echarts/charts";
import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  BarChart,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LineChart
]);


export const chartData = [
  {
    "retentionMonth": "2022-01-01T00:00:00",
    "up": 0,
    "renewed": 0,
    "forecast":25,
    "retentionMonthName": "Jan 2022"
  },
  {
    "retentionMonth": "2022-02-01T00:00:00",
    "up": 1200,
    "renewed": -3000,
    "forecast": 10,
    "retentionMonthName": "Feb 2022"
  },
  {
    "retentionMonth": "2022-03-01T00:00:00",
    "up": 0,
    "renewed": 0,
    "forecast": 66,
    "retentionMonthName": "Mar 2022"
  },
  {
    "retentionMonth": "2022-04-01T00:00:00",
    "up": 0,
    "renewed": 0,
    "forecast": 9,
    "retentionMonthName": "Apr 2022"
  },
  {
    "retentionMonth": "2022-05-01T00:00:00",
    "up": 0,
    "renewed": 0,
    "forecast": -8,
    "retentionMonthName": "May 2022"
  },
  {
    "retentionMonth": "2022-06-01T00:00:00",
    "up": 3753,
    "renewed": -1251,
    "forecast": 41,
    "retentionMonthName": "Jun 2022"
  },
  {
    "retentionMonth": "2022-07-01T00:00:00",
    "up": 12016,
    "renewed": -6992,
    "forecast": 0,
    "retentionMonthName": "Jul 2022"
  },
  {
    "retentionMonth": "2022-08-01T00:00:00",
    "up": 0,
    "renewed": 0,
    "forecast": 52,
    "retentionMonthName": "Aug 2022"
  },
  {
    "retentionMonth": "2022-09-01T00:00:00",
    "up": 1568.33,
    "renewed": -3371.67,
    "forecast": 0,
    "retentionMonthName": "Sept 2022"
  },
  {
    "retentionMonth": "2022-10-01T00:00:00",
    "up": 4500,
    "renewed": -1500,
    "forecast": 35,
    "retentionMonthName": "Oct 2022"
  }
];

export default {
  name: "HelloWorld",
  components: {
    VChart,
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['Up', 'Renewed', 'Temperature'],
          left: '50%'
          //top: 'bottom'
        },
        xAxis: {
          type: "category",
          data: chartData.map(a => a.retentionMonthName),
          axisPointer: {
            type: 'shadow'
          }
        },
        yAxis: [
          {
            type: "value",      
            position: 'left',
            axisLabel: {
              formatter: '{value} £'
            }
          },
          {
            type: "value",      
            position: 'right'
          }
        ],
        series: [
          {
            name: 'Up',
            data: chartData.map(a => a.up),
            type: "bar",
            yAxisIndex: 0,
            tooltip: {
              valueFormatter: function (value) {
                return value + "£";
              }
            }
          },
          {
            name: 'Renewed',
            data: chartData.map(a => a.renewed),
            type: "bar",
            yAxisIndex: 0,
            // tooltip: {
            //   valueFormatter: function (value) {
            //     return value;
            //   }
            // }
          },
          {
            name: 'Temperature',
            type: 'line',
            yAxisIndex: 1,
            data: chartData.map(a => a.forecast)
          }
        ],
      },
    };
  },
};
</script>

<style>

</style>
