<template>
  <section id="form">
    <!--form-->
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="login-form">
            <!--login form-->

            <h2>Login to your account</h2>
            <form @submit.prevent="loginUser">
              
              <input v-model="data.identifier" type="email" placeholder="Email Address" />
              <input
                v-model="data.password"
                type="password"
                placeholder="Password"
              />
              <!-- <span>
                <input type="checkbox" class="checkbox" />
                Keep me signed in
              </span> -->
              <button type="submit" class="btn btn-default">Login</button>
            </form>
          </div>
          <!--/login form-->
        </div>
        <!-- <div class="col-sm-1">
          <h2 class="or">OR</h2>
        </div> -->
        <!-- <div class="col-sm-4">
          <div class="signup-form">
          
            <h2>New User Signup!</h2>
            <form action="#">
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
          
        </div> -->
      </div>
    </div>
  </section>
  <!--/form-->
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "LoginCheckOut",
  data() {
    return {
      data: {
        identifier: "",
        password: "",
      },
    };
  },
  methods : {
      ...mapActions({
        signIn:'auth/signIn'
    }),
      loginUser() {
        if(this.data.identifier.trim()== "")
          return this.e("Email is required")
        if(this.data.password.trim() == "")
          return this.e("password is required")
        try {
          this.signIn(this.data)
          if(res)
        } catch (error) {
          
        }
        
        this.s("Dang nhap thanh Cong");
      }
  }
    

};
</script>
