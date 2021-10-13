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
        <button class="btn-submit">Send</button>
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
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>