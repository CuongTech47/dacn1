<template>
  <section id="form">
    <!--form-->
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="login-form">
            <!--login form-->
            <h2>Login to your account</h2>
            <form action="#">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <span>
                <input type="checkbox" class="checkbox" />
                Keep me signed in
              </span>
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
import axios from "axios";
export default {
  name: "LoginCheckOut",
  data() {
    return {
      // data: {
      //   username: "",
      //   email: "",
      //   password: "",
      // },
    };
  },
  // methods: {
  //   async addUser() {
  //     if (this.data.username.trim() == "")
  //       return this.e("User name is required");
  //     if (this.data.email.trim() == "") return this.e("Emial is required");
  //     if (this.data.password.trim() == "")
  //       return this.e("password is required");
  //     const res = await axios
  //       .post("http://localhost:1337/api/auth/local/register", this.data)
  //       .then((res) => {
  //         console.log("User profile", res.data.user);
  //         console.log("User token", res.data.jwt);
  //       })
  //       .catch((error) => {
  //         console.log("An error occurred:", error.response);
  //       });
  //   },
  // },
};
</script>
