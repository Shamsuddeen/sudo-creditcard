<template>
  <div>
    <b-card class="mt-3" header="Simulate Transaction">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Amoun:"
          label-for="amount"
          description="Amount to charge on the card"
        >
          <b-form-input
            id="amount"
            v-model="form.amount"
            type="number"
            placeholder="Enter amount"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Transaction Type:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.type"
            :options="type"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            v-model="form.channel"
            id="radioes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-radio value="web">WEB</b-form-radio>
            <b-form-radio value="pos">POS</b-form-radio>
            <b-form-radio value="atm">ATM</b-form-radio>
            <b-form-radio value="mobile">MOBILE</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <br />
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { HTTP } from "@/service/http-common";
export default {
  name: "SimulateCard",
  data() {
    return {
      simulate: [],
      userCard: [],
      form: {
        amount: "",
        card: "",
        channel: null,
        type: [],
      },
      type: [
        {
          text: "Select One",
          value: null,
        },
        "Purchase",
        "Payment",
        "Transfer",
        "Withdrawal",
      ],
      show: true,
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
        this.userCard = response.data.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      HTTP.post(`/cards/simulate/` + this.userCard._id, this.form)
        .then((response) => {
          this.simulate = response.data.data;
          alert(response.data.data.message)
        })
        .catch((e) => {
          this.errors.push(e);
        });
      //   alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.amount = "";
      this.form.card = "";
      this.form.type = null;
      this.form.channel = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
