<template>
  <Header />
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 box-shadow">
            <img
              height="200"
              class="card-img-top"
              :src="product.image"
              :alt="product.title"
            />
            <div class="card-body">
              <p class="card-text">
                {{ product.title }}
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">${{ product.price }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { Header },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    const { data } = await axios.get("products");
    this.products = data.data;
  },
};
</script>

<style></style>
