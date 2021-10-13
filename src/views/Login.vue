<template>
  <div>
    <header>
      <img
        href=""
        class="logo-img"
        alt="Peloton.in Logo"
        src="../assets/Logo.png"
      />
      <p class="nav-text">Don't have any account?</p>
      <button class="">
        <p>Register</p>
      </button>
    </header>

    <div class="container-login">
      <h1>Log In to Your Peloton.in Account</h1>
      <form class="form-login">
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
                /><br />
              </div>
              <div class="form-group">
                <label for="password">Password</label><br />
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>
          <div class="column">
            <img src="../assets/img-login.png" alt="" />
          </div>
        </div>
        <br>
        <button class="btn-login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>