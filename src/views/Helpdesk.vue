<template>
<div class="helpdesk">
    <Navbar />
    <div class="container">
        <h1 class="howtoh1">Any Question or Feedback in using Peloton.in?</h1>
        <br>
        <p>Subject</p>
        <input type="text" id="subjmsg" class="message">
        <p>Message</p>
        <textarea rows="13" id="msg" class="message"></textarea>
        <button style="margin-left : auto; margin-top : 20px" class="btn-pelotonin">Send</button>
    </div>
</div>
</template>

<script>

import Navbar from '../components/Navbar.vue';


export default {
  name: "Helpdesk",
  components: {
      Navbar
  },
//   data(){
//       return {
//           
//       }
//   }
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>