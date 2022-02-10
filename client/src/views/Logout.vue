<template>
  <div class="about">
    <h1>Logout page</h1>
  </div>
</template>
<script>
export default {
  name: "Logout",
  async created() {
    await localStorage.removeItem("user");
    // window.location.href="./";
    this.$router.push("/");
  },
};
</script>
