<template>
  <div>
    <b-table
      striped
      hover
      bordered
      small
      head-variant="dark"
      :items="items"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
import { HTTP } from "@/service/http-common";
export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: "cardPan",
        },
        {
          key: "amount",
          sortable: false,
        },
        {
          key: "channel",
          sortable: false,
        },
        {
          key: "create_date",
          label: "Transaction Date",
          sortable: true,
        },
      ],
      items: [
        {
          cardPan: "5063********0000",
          amount: 0,
          channel: "web purchase @ SUDO SIMULATOR",
          create_date: "2022-02-08T01:47:08.318Z",
        },
      ],
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

    await HTTP.post(`/transactions/user/` + this.user._id)
      .then((response) => {
        // console.log(response.data.data);
        this.items = response.data.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>
