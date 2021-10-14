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
          <li>
            <button class="btn-pelotonin">
                <router-link :to="{name: 'login'}">Login</router-link>
            </button>
          </li>
          <li>
            <button class="btn-pelotonin">
                <router-link :to="{name: 'register'}">Register</router-link>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
        <h1 class="howtoh1">How To Ride In a Peloton?</h1>
        <br><br><br>
        <img src="../assets/howto.png" alt="" class="img-howto">
    </div>
</div>
</template>

<script>
// import Logo from "../../images/Logo.png"

export default {
  name: "Howto",
  components: {

  },
  // data() {
  //   return {
  //     Logo: Logo,
  //   };
  // }
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>