<template>
  <div class="wrapper">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          v-model="email"
          id="floatingInput"
          placeholder="foo@example.com"
          required
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          v-model="password"
          id="floatingPassword"
          placeholder="Password"
          required
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      await axios.post("/login", {
        email: this.email,
        password: this.password,
        scope: "influencer",
      });
      await this.$router.push("/");
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  background-color: #f5f5f5;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: auto auto; */
  padding: 40px auto;
  /* padding-bottom: 40px; */
}

.form-floating {
  margin: 10px auto;
}
.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
