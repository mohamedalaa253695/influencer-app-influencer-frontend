<template>
  <div class="wrapper">
    <form class="login-form" @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please Register</h1>
      <div class="form-floating">
        <input
          type="text"
          placeholder="First Name"
          class="form-control"
          v-model="first_name"
          required
        />
        <label for="floatingInput"> First Name</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          placeholder="Last Name"
          class="form-control"
          v-model="last_name"
          required
        />
        <label for="floatingInput">Last Name</label>
      </div>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          v-model="email"
          placeholder="example@example.com"
          required
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          v-model="password"
          placeholder="Password"
          required
        />
        <label for="floatingInput">Password</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          v-model="password_confirm"
          placeholder="Confirm Password"
          required
        />
        <label for="floatingInput">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async submit() {
      await axios.post(`${process.env.VUE_APP_USERS_URL}/register`, {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      });
      await this.$router.push("login");
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
body {
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
