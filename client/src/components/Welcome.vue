<template>
  <div>
    <b-jumbotron>
      <template #header>Bitako.Cards</template>

      <template #lead>
        A Credit Card Application developed with MongoDB, Express, Node and Vue JS. Cards are issued by <a href="https://sudo.africa">Sudo Africa</a>
      </template>

      <hr class="my-4">

      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>

      <router-link class="btn btn-primary" to="/login">Login</router-link>
      <router-link class="btn btn-success" to="/register">Register</router-link>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
