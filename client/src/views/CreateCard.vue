<template>
  <div class="about">
    <DashboardCard />
    <h1>Please wait while we create your Credit Card</h1>
    <div v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">
        {{ error.message }}
      </li>
    </div>
    <div v-else-if="card && card.pan">
      <router-link class="btn btn-primary" :to="'/dashboard'">Go to Dashboard</router-link>
    </div>
  </div>
</template>
<script>
import { HTTP } from "@/service/http-common";
export default {
  name: "CreateCard",
  data() {
    return {
      card: [],
      user: [],
      errors: [],
    };
  },
  async created() {
    await HTTP.post(`/auth/user`, {
      token: localStorage.getItem("user"),
    })
      .then((response) => {
        this.user = response.data.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });

    await HTTP.post(`/cards`, {
      user: this.user._id,
    })
      .then((response) => {
        // console.log(response.data);
        this.card = response.data.data;
        // window.location.href="./dashboard";
        // if(this.card !== []){
          this.$router.push("/dashboard");
        // }
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
