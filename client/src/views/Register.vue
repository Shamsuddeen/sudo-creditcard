<template>
  <div class="about">
    <h1>Regsiter page</h1>
    <RegisterForm />
  </div>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
    name: "Register",
    components: {
        RegisterForm,
    },
}
</script>
