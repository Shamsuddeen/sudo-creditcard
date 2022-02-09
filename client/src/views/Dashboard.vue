<template>
  <div class="about">
    <DashboardCard />
    <b-container class="bv-example-row">
    <b-row>
        <b-col>
            <div>
            <b-card-group deck>
                <b-card title="Title" header-tag="header" footer-tag="footer">
                <template #header>
                    <h6 class="mb-0">Header Slot</h6>
                </template>
                <b-card-text>Header and footers using slots.</b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
                <template #footer>
                    <em>Footer Slot</em>
                </template>
                </b-card>
            </b-card-group>
            </div>
        </b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
    </b-row>
    </b-container>
  </div>
</template>
<script>
import DashboardCard from "@/components/DashboardCard.vue";

export default {
    name: "Dashboard",
    components: {
        DashboardCard,
    },
}
</script>
