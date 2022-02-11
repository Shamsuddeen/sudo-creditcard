<template>
  <div>
    <b-card-group deck>
      <div v-if="card && card.length">
        <b-card header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0">{{ card.brand }}</h6>
          </template>
          <b-card-text>{{ card.pan }}</b-card-text>
          <div v-for="channel in card.channels" :key="channel">
            <b-button-group size="sm">
              <b-button variant="primary">POS: {{ channel.pos }}</b-button>
              <b-button variant="secondary"
                >Mobile: {{ channel.mobile }}</b-button
              >
              <b-button variant="success">ATM: {{ channel.atm }}</b-button>
              <b-button variant="info">WEB: {{ channel.web }}</b-button>
            </b-button-group>
          </div>
          <br />
          <b-button href="#" variant="primary"
            >Credit Used: {{ card.usedCredit }} | Max Credit:
            {{ card.maxCredit }}</b-button
          >
          <template #footer>
            <em>Expiry: {{ card.expiry }}</em>
          </template>
        </b-card>
      </div>
      <div v-else>
        <router-link class="btn btn-primary" :to="'/card'">Get your Credit Card</router-link>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import { HTTP } from "@/service/http-common";
export default {
  name: "UserCard",
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

    await HTTP.post(`/cards/user/` + this.user._id)
      .then((response) => {
        console.log(response.data);
        this.card = response.data.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style lang="scss" scoped></style>
