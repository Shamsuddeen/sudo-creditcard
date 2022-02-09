<template>
  <div class="about">
    <DashboardCard />
    <b-container class="bv-example-row">
    <b-row>
        <b-col>
            <h1>Credit Card</h1>
            <UserCard />
        </b-col>
        <b-col>
            <h1>Transactions</h1>
            <TransactionsCard />
        </b-col>
    </b-row>
    </b-container>
  </div>
</template>
<script>
import DashboardCard from "@/components/DashboardCard.vue";
import UserCard from "@/components/UserCard.vue";
import TransactionsCard from "@/components/TransactionsCard.vue";
export default {
    name: "Dashboard",
    components: {
        DashboardCard,
        UserCard,
        TransactionsCard,
    },
}
</script>