<template>
  <v-flex d-flex v-bind="$attrs">
    <v-card class="card" outlined elevation="3">
      <v-card-title>{{Title}}</v-card-title>
      <v-card-text class="card-body">
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
    props:{
        Title: String
    }
};
</script>

<style scoped>
  .card-body{
    height: 100%;
    padding-bottom: 40px;
  }
  .card{
    height: 400px;
    width: 100%;
  }
</style>
