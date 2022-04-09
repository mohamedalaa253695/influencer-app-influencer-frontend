<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>Code</th>
              <th>Number of sales</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{order.code}}</td>
              <td>{{ order.count }}</td>
              <td>{{ order.revenue }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Stats",
  data() {
    return {
      orders: [],
    };
  },
  async mounted() {
    const { data } = await axios.get(`${process.env.VUE_APP_INFLUENCER}/stats`);
    this.orders = data.sort((a,b)=>{
      return  b.revenue - a.revenue;
    });
    
  },
  methods: {
    link(code) {
      return `${process.env.VUE_APP_INFLUENCER}/${code}`;
    },
  },
};
</script>

<style></style>
