<template>
  <tiled-dashboard>
    <dashboard-tile Title="Chart.js Line Graph" xl3 lg4 sm6 xs12>
      <line-chart
        :data="{ '2017-05-01': 2, '2017-06-01': 5, '2017-07-01': 4 }"
      ></line-chart>
    </dashboard-tile>
    <dashboard-tile Title="Chart.js Pie Chart" xl3 lg4 sm6 xs12>
      <pie-chart
        :data="{
          Blueberry: 44,
          Strawberry: 23,
        }"
      ></pie-chart>
    </dashboard-tile>
    <dashboard-tile Title="Chart.js Vertical Bar Chart" xl3 lg4 sm6 xs12>
      <column-chart
        :data="{
          Sun: 32,
          Mon: 46,
          Tue: 28,
        }"
      ></column-chart>
    </dashboard-tile>
    <dashboard-tile Title="Chart.js Horizontal Bar Chart" xl3 lg4 sm6 xs12>
      <bar-chart
        :data="{
          'X-Small': 5,
          Small: 27,
        }"
      ></bar-chart>
    </dashboard-tile>
    <dashboard-tile Title="ECharts Line Graph" xl3 lg4 sm6 xs12>
      <e-charts-line />
    </dashboard-tile>
    <dashboard-tile Title="ECharts Pie" xl3 lg4 sm6 xs12>
      <e-charts-pie />
    </dashboard-tile>
    <dashboard-tile Title="ECharts Vertical Bar Chart" xl3 lg4 sm6 xs12>
      <e-charts-bar />
    </dashboard-tile>
    <dashboard-tile Title="ECharts Horizontal Bar Chart" xl3 lg4 sm6 xs12>
      <e-charts-horizontal-bar />
    </dashboard-tile>
  </tiled-dashboard>
</template>

<script>
import DashboardTile from "./DashboardTile.vue";
import EChartsBar from "./EChartsBar.vue";
import EChartsHorizontalBar from "./EChartsHorizontalBar.vue";
import EChartsLine from "./EChartsLine.vue";
import EChartsPie from "./EChartsPie.vue";
import TiledDashboard from "./TiledDashboard.vue";
export default {
  components: {
    DashboardTile,
    TiledDashboard,
    EChartsPie,
    EChartsLine,
    EChartsBar,
    EChartsHorizontalBar,
  },
  name: "HelloWorld",

  data: () => ({}),
};
</script>

<style scoped>
</style>
