<template>
  <div>
    <b-jumbotron>
      <template #header>Bitako.Cards</template>

      <template #lead>
        A Credit Card Application developed with MongoDB, Express, Node and Vue
        JS. Cards are issued by <a href="https://sudo.africa">Sudo Africa</a>
      </template>

      <hr class="my-4" />
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "DashboardCard",
  async created() {
    const token = localStorage.getItem("user");
    if (!token) {
      window.location.href = "./";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
