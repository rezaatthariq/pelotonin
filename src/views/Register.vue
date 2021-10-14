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
          <li><p class="nav-text">Already have an Account?</p></li>
          <li>
            <button class="btn-pelotonin">
              <router-link :to="{name: 'login'}">Login</router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="container-login">
      <h1>Create Your Peloton.in Account</h1>
      <form 
        action="#" @submit.prevent="handleRegister"
        class="form-register">
        <p> {{ message }} </p>
        <div class="row">
          <div class="column">
            <img src="../assets/img-register.png" alt="" />
          </div>
          <div class="column">
            <div class="form-container">
              <div class="form-group">
                <label for="firstname">First Name</label><br />
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  placeholder="Enter your First Name"
                />
                <!-- v-model="registerForm.first_name"
                maxlength="25"
                required -->
                <br />
              </div>
              <div class="form-group">
                <label for="lasttname">Last Name</label><br />
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  placeholder="Enter your Last Name"
                />
                <!-- v-model="registerForm.last_name"
                maxlength="25"
                required -->
                <br />
              </div>
              <div class="form-group">
                <label for="email">Email</label><br />
                <input
                  type="text"
                  class="form-control"
                  id="emailaddress"
                  placeholder="Enter your email address"
                />
                <!-- v-model="registerForm.email"
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
                <!-- v-model="registerForm.password"
                minlength="8"
                maxlength="25"
                required -->
              </div>
              <div class="form-group">
                <label for="password">Password Confirmation</label><br />
                <input
                  type="password"
                  class="form-control"
                  id="passwordconfirm"
                  placeholder="Confirm your password"
                />
                <!-- v-model="registerForm.confirm_password"
                minlength="8"
                maxlength="25"
                required -->
              </div>
            </div>
          </div>
          
        </div>
        <br><br>
        <button style="margin:auto auto" class="btn-pelotonin">
          <p>Register</p>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// import Logo from "../../images/Logo.png"

export default {
  name: 'Register',
  components: {
   
  },
  // data(){
  //   return {
  //     message: "",
  //     Logo: Logo,
  //     registerForm: {
  //       first_name: "",
  //       last_name: "",
  //       email: "",
  //       password: "",
  //       confirm_password: "",
  //     },
  //   };
  // },
  // methods: {
  //   handleRegister() {
  //     if(this.checkPasswordColumns()){
  //       this.message = "Please wait...";
  //        axios
  //       .post("api/register", this.registerForm)
  //       .then(() => {
  //         this.$router.push("login");
  //       })
  //       .catch(() => {
  //         this.message = "Your email or username is already registered!";
  //       });
  //     }
  //     else{
  //       this.message = "Password and Confirm Password columns do not match!"
  //     }
  //   },
  //   checkPasswordColumns() {
  //     if(this.registerForm.password === this.registerForm.confirm_password) return true;
  //     else false;
  //   }
  // },
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>