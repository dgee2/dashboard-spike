<template>
  <tiled-dashboard>
    <dashboard-tile Title="Sales" xl3 lg4 sm6 xs12>
      <line-chart
        :data="{ '2017-05-01': 2, '2017-06-01': 5, '2017-07-01': 4 }"
      ></line-chart>
    </dashboard-tile>
    <dashboard-tile Title="CSM" xl3 lg4 sm6 xs12>
      <pie-chart
        :data="{
          Blueberry: 44,
          Strawberry: 23,
        }"
      ></pie-chart>
    </dashboard-tile>
    <dashboard-tile Title="Marketing" xl3 lg4 sm6 xs12>
      <column-chart
        :data="{
          Sun: 32,
          Mon: 46,
          Tue: 28,
        }"
      ></column-chart>
    </dashboard-tile>
    <dashboard-tile Title="Compliance" xl3 lg4 sm6 xs12>
      <bar-chart
        :data="{
          'X-Small': 5,
          Small: 27,
        }"
      ></bar-chart>
    </dashboard-tile>
    <dashboard-tile Title="Sales" xl3 lg4 sm6 xs12>
      <line-chart
        :data="{ '2017-05-01': 2, '2017-06-01': 5, '2017-07-01': 4 }"
      ></line-chart>
    </dashboard-tile>
    <dashboard-tile Title="CSM" xl3 lg4 sm6 xs12>
      <pie-chart
        :data="{
          Blueberry: 44,
          Strawberry: 23,
        }"
      ></pie-chart>
    </dashboard-tile>
    <dashboard-tile Title="Marketing" xl3 lg4 sm6 xs12>
      <column-chart
        :data="{
          Sun: 32,
          Mon: 46,
          Tue: 28,
        }"
      ></column-chart>
    </dashboard-tile>
    <dashboard-tile Title="Compliance" xl3 lg4 sm6 xs12>
      <bar-chart
        :data="{
          'X-Small': 5,
          Small: 27,
        }"
      ></bar-chart>
    </dashboard-tile>
  </tiled-dashboard>
</template>

<script>
import DashboardTile from "./DashboardTile.vue";
import TiledDashboard from "./TiledDashboard.vue";
export default {
  components: { DashboardTile, TiledDashboard },
  name: "HelloWorld",

  data: () => ({}),
};
</script>

<style></style>
