<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
    import { HTTP } from "@/service/http-common";
  export default {
    data() {
      return {
        items: [
            { 
                cardPan: "5063********0000",
                amount: 0,
                channel: "web purchase @ SUDO SIMULATOR",
                create_date: "2022-02-08T01:47:08.318Z",
            },
        ]
      }
    },
    created() {
        HTTP.get(`/transactions/user/62008a2d570cf79fed984866`)
        .then(response => {
            // console.log(response.data);
            // var trxn = response.data.data;
            this.items = response.data.data;
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
  }
</script>