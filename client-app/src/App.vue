<template>
  <div id="app">
    <div style="margin: 10% 25%">
      <br />
      <ejs-autocomplete
        :dataSource="dataItem"
        placeholder="Select"
      ></ejs-autocomplete>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);

export default Vue.extend({
  data: function () {
    return {
      dataItem: [],
    };
  },
  methods: {
    setData: async function () {
      const data = await fetch("http://localhost:5000/api/json");
      const res = await data.json();
      this.dataItem = res.data;
    },
  },
  created: function () {
    this.setData();
  },
});
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
