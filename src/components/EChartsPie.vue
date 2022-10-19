<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
import VChart from "vue-echarts";

use([CanvasRenderer, PieChart, TooltipComponent, LegendComponent]);

export default {
  name: "HelloWorld",
  components: {
    VChart,
  },
  data() {
    return {
      option: {
        legend: {},
        tooltip: {},
        series: [
          {
            name: "Traffic Sources",
            type: "pie",
            label: {
              show: false,
            },
            data: [
              { value: 335, name: "Direct" },
              { value: 310, name: "Email" },
              { value: 234, name: "Ad Networks" },
              { value: 135, name: "Video Ads" },
              { value: 1548, name: "Search Engines" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style></style>
