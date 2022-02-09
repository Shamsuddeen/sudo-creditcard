<template>
    <div>
        <UserCard v-for="user in users" :key="user._id" :user="user" />
    </div>
</template>
<script>
import UserCard from "@/components/UserCard.vue"
import { HTTP } from "@/service/http-common";

export default {
    components: {
        UserCard,
    },
  data() {
    return {
      users: [],
      errors: []
    }
  },

  created() {
    HTTP.get(`/users`)
    .then(response => {
        console.log(response.data);
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
// import axios from "axios";

// export default {
//     data() {
//         return {
//             users: [],
//         }
//     },

//     async created() {
//         await axios.get('http://localhost:5000/api/users', {
//                 headers: {
//                     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwMDBkNjI3YjIwM2UyYWY4NGYwYjBiIiwiaWF0IjoxNjQ0MTcwNTk0fQ.pyWOVV720lPpoZEubc1PvixoLAzyXxzyL1oGmRq841U"
//                 }
//             })

//             .then(response => {
//                 console.log(response.data);
//                 this.users = response.data;
//             });
//     },
// }
</script>
