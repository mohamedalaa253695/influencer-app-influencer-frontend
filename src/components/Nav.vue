<template>
  <div
    class="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm"
  >
    <router-link to="/" class="navbar-brand my-0 mr-md-auto font-weight-normal">
      Influencer
    </router-link>
    <div class="d-flex align-items-center">
      <nav class="my-2my-md-0 mr-md-3" v-if="this.isAuthenticated()">
        <router-link to="/rankings" class="p-2 text-dark">
          Rankings</router-link
        >
        <a href="javascript:void(0);" class="p-2 text-dark" @click="logout"
          >Logout
        </a>
      </nav>

      <router-link
        to="/login"
        class="btn btn-outline-primary"
        v-if="!this.isAuthenticated()"
        >Login
      </router-link>

      <router-link
        to="/profile"
        class="btn btn-outline-primary"
        v-if="this.isAuthenticated()"
        >{{ user?.first_name }}{{ user?.last_name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Nav",

  methods: {
    async logout() {
      await axios.post("logout", {});

      await this.$router.push("/login");
    },
    isAuthenticated() {
      return this.user?.id;
    },
  },
  computed: {
    user() {
      //   console.log(this.$store.state);
      return this.$store.state.user;
    },
  },
};
</script>

<style></style>
