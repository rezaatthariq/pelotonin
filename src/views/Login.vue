<template>
  <div>
    <div class="nav-header">
      <img
        href=""
        class="logo-img"
        alt="Peloton.in Logo"
        src="../assets/Logo.png"
      />
      <div class="nav_links">
        <ul>
          <li><p class="nav-text">Don't have any account?</p></li>
          <li>
            <button class="btn-pelotonin">
              <router-link :to="{name: 'register'}">Register</router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-login">
      <h1>Log In to Your Peloton.in Account</h1>
      <form 
        action="#" @submit.prevent="login" 
        class="form-login">
        <p> {{ message }} </p>
        <div class="row">
          <div class="column">
            <div class="form-container">
              <div class="form-group">
                <label for="email">Email</label><br />
                <input
                  type="text"
                  class="form-control"
                  id="emailaddress"
                  placeholder="Enter your email address"
                  
                />
                <!-- v-model="loginForm.email"
                  required -->
                <br />
              </div>
              <div class="form-group">
                <label for="password">Password</label><br />
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                  
                />
                <!-- v-model="loginForm.password"
                  required -->
              </div>
            </div>
          </div>
          <div class="column">
            <img src="../assets/img-login.png" alt="" />
          </div>
        </div>
        <br>
        <button style="margin: auto auto" class="btn-pelotonin">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
// import Logo from "../../images/Logo.png"

export default {
  name: "Login",
  components: {

  },
  // data() {
  //   return {
  //     message: "",
  //     Logo: Logo,
  //     loginForm: {
  //       email: "",
  //       password: "",
  //     },
  //   };
  // },
  // methods: {
  //   login() {
  //     this.message = "Please wait..."
  //     axios.get("/sanctum/csrf-cookie").then((response) => {
  //       axios
  //         .post("api/login", this.loginForm)
  //         .then((response) => {
  //           localstorage.setItem("token", response.data.token);
  //           this.$router.push("home");
  //         })
  //         .catch(() =>{
  //           this.message = "Wrong email or Password!";
  //         });
  //     });
  //   },
  // },
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>