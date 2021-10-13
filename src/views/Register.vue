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
          <li><button class="">Login</button></li>
        </ul>
      </div>
    </div>

    <div class="container-login">
      <h1>Create Your Peloton.in Account</h1>
      <form class="form-register">
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
                /><br />
              </div>
              <div class="form-group">
                <label for="lasttname">Last Name</label><br />
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  placeholder="Enter your Last Name"
                /><br />
              </div>
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
              <div class="form-group">
                <label for="password">Password Confirmation</label><br />
                <input
                  type="password"
                  class="form-control"
                  id="passwordconfirm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          </div>
          
        </div>
        <br><br>
        <button class="btn-login">
          <p>Register</p>
        </button>
      </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Register',
  components: {
   
  }
}
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>