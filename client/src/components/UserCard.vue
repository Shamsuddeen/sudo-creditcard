<template>
    <div>
        <b-card-group deck>
            <b-card header-tag="header" footer-tag="footer">
            <template #header>
                <h6 class="mb-0">{{ card.brand }}</h6>
            </template>
            <b-card-text>{{ card.pan }}</b-card-text>
            <b-button href="#" variant="primary">Credit Used: {{ card.usedCredit }} | Max Credit: {{ card.maxCredit }}</b-button>
            <template #footer>
                <em>Expiry: {{ card.expiry }}</em>
            </template>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    import { HTTP } from "@/service/http-common";
    export default {
        name: "UserCard",
        data() {
            return {
                card: {
                    _id: "620097893009a6707e9b850d",
                    user: "62008a2d570cf79fed984866",
                    cardId: "6200978951a3aca7f46d137b",
                    customerId: "620095ab51a3aca7f46d133b",
                    pan: "506300******0000",
                    expiry: "00/00",
                    brand: "Sudo",
                    balance: 0,
                    maxCredit: 0,
                    active: true,
                    channels: [
                        {
                            atm: false,
                            pos: false,
                            web: true,
                            mobile: true,
                            _id: "620097893009a6707e9b850e"
                        }
                    ],
                    create_date: "2022-02-07T03:52:41.999Z",
                    usedCredit: 0
                },
                user: [],
                errors: [],
            }
        },
        async created() {
            await HTTP.post(`/auth/user`, {
                token: localStorage.getItem('user')
            })
            .then(response => {
                this.user = response.data.data;
            })
            .catch(e => {
                this.errors.push(e)
            })

            await HTTP.get(`/cards/user/`+this.user._id)
            .then(response => {
                console.log(response.data);
                this.card = response.data.data;
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>