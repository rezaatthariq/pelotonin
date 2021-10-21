<template>
  <div class="page">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Navbar />
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Edit Profile</h1>
      </div>
      <div class="page-content">
        <div class="profile-top">
          <ul>
            <li>
              <div class="foto-profile">
                <img src="" alt="" class="img-profile" />
              </div>
            </li>
            <li>
              <br />
              <a href="">Upload Picture</a>
            </li>
          </ul>
          <ul>
            <li>Current Trust Level:</li>
            <li><p1>84</p1><p2>%</p2></li>
          </ul>
        </div>
        <br />
        <div class="profile-form">
          <div class="row">
            <div class="column-5">
              <label for="">First Name*</label>
              <input type="text" />
            </div>
            <div class="column-5">
              <label for="">Last Name*</label>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="column-5">
              <label for="">Email*</label>
              <input type="text" />
            </div>
            <div class="column-5">
              <label for="">Old Password*</label>
              <input type="text" />
            </div>
          </div>
          <br><br>
          <p1
            >If you want to change your password, you can change it here.</p1
          >
          <div class="row">
            <div class="column-5">
              <label for="">New Password</label>
              <input type="password" />
            </div>
            <div class="column-5">
              <label for="">Confirm New Password</label>
              <input type="password" />
            </div>
          </div>
          <br><br>
          <p1
            >Please upload your Vaccine Certificates, Covid-19 Negative Test
            Results with date, or other Health Documents which state that you
            are in a well state to ride.</p1
          >
          <div class="row">
            <div class="column-5">
              <label for="">Health Document 1*</label>
              <p2></p2>
              <a href="">Browse Files</a>
            </div>
            <div class="column-5">
              <label for="">Health Document 2*</label>
              <p2></p2>
              <a href="">Browse Files</a>
            </div>
          </div>
        </div>
        <br><br>
        <button style="margin: auto auto" class="btn-pelotonin">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "EditProfile",
  components: {
    Navbar,
  },
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>