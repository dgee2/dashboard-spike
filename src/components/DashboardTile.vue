<template>
  <v-flex d-flex v-bind="$attrs">
    <v-card width="100%" outlined elevation="3">
      <v-card-title>{{Title}}</v-card-title>
      <v-card-text>
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

<style></style>
