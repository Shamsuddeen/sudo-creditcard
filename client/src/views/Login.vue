<template>
  <div class="about">
    <h1>Login page</h1>
    <LoginForm />
  </div>
</template>
<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>
