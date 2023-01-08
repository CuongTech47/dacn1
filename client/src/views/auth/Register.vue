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
              <button type="submit" class="btn btn-default">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "Register",
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
    // ...mapActions({
    //     signIn:'auth/signIn'
    // }),
    
    async addUser() {
      
      // this.$router.push('/login');
      if (this.data.username.trim() == "")
        return this.e("User name is required")
              this.$Loading.error();
      if (this.data.email.trim() == "") 
        return this.e("Email is required");
      this.$Loading.error();
      if (this.data.password.trim() == "")
        return this.e("password is required");
      this.$Loading.error();
       
      // const res = await axios.post(
      //   "http://localhost:1337/api/auth/local/register",
      //   this.data
      // );
      // if(res.status === 200 ) {
      //   console.log(res.data)
      // }else{
      //   if(res.status === 400){
      //     console.log("ok")
      //   }
        
      // }
      try {
        this.$Loading.start();
        const res = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        this.data);
        if(res.status === 200) {
          console.log(res.data)
          this.s("Them user thanh Cong");
          this.$Loading.finish();

         await setTimeout(this.loadPage,5000);
          // function loadingPage() {
          //   this.$router.push('/login')
          // }
          
        }
      } catch (error) {
        // console.log(error.response.data.error.message)
        // console.log(error)
        this.e(error.response.data.error.message)
      }
    },
    async loadPage() {
      this.$router.push('/login')
    }
  },
};
</script>
