<template>
  <div class="container">
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">
        {{ error.message }}
      </li>
    </ul>
    <div v-if="auth && auth.length">
      {{ auth.token }}
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { HTTP } from "@/service/http-common";
export default {
  name: "LoginForm",
  data() {
    return {
      auth: "",
      form: {
        email: "",
        password: "",
      },
      errors: [],
      show: true,
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push("/dashboard");
    },
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form))
      HTTP.post(`/auth/login`, this.form)
        .then((response) => {
          // console.log(response.data);
          this.auth = response.data;
          // this.auth.push(response.data);
          localStorage.setItem("user", response.data.token);
          // alert("You are logged in")
          // window.location.href="./dashboard";
          // router.go('/dashboard');
          this.goToDashboard();
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
