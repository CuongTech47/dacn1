<template>
    <section id="form">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-1">
                    <div class="signup-form">
                        <!--sign up form-->
                        <h2>New User Signup!</h2>
                        <form @submit.prevent="addUser">
                            
                          <input v-model="data.username" type="text" placeholder="Name" />
                          <input
                            v-model="data.email"
                            type="email"
                            placeholder="Email Address"
                          />
                          <input
                            v-model="data.password"
                            type="password"
                            placeholder="Password"
                          />
                          <button @click="addUser" class="btn btn-default">Signup</button>
                        </form>
                      </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
    name : "Register",
    data() {
    return {
      data: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
        signIn:'auth/signIn'
    }),
    async addUser() {
        this.signIn(this.data)
        // this.$router.push('/login');
    //   if (this.data.username.trim() == "")
    //     return this.e("User name is required");
    //   if (this.data.email.trim() == "") 
    //     return this.e("Email is required");
    //   if (this.data.password.trim() == "")
    //     return this.e("password is required");
      
    },
  },
}
</script>