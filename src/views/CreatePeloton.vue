<template>
  <div class="page">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Navbar />
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">It's time to create your own Peloton!</h1>
      </div>
      <div class="page-content">
        <div class="row">
          <div class="column-5">
            <div class="row">
              <div class="column-3">Peloton's Name</div>
              <div class="column-7">
                <input type="text" >
              </div>
            </div>
            <div class="row">
              <div class="column-3">Description</div>
              <div class="column-7">
                <textarea name="" id="" rows="5"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="column-3">Date</div>
              <div class="column-7">
                <input type="text" >
              </div>
            </div>
            <div class="row">
              <div class="column-3">Time (24h)</div>
              <div class="column-1">
                <input type="text" >
              </div>
              <p> : </p>
              <div class="column-1">
                <input type="text" >
              </div>

            </div>
            <div class="row">
              <div class="column-3">Loop</div>
              <div class="column-7">
                <input type="text" >
              </div>
            </div>
            <div class="row">
              <div class="column-3">Laps</div>
              <div class="column-7">
                <input type="text" >
              </div>
            </div>
            <div class="row">
              <div class="column-3">Average Speed</div>
              <div class="column-6">
                <input type="text" >
              </div>
              <p>km/h</p>
            </div>
            <div class="row">
              <div class="column-3">Max. Members</div>
              <div class="column-7">
                <input type="text" >
              </div>
            </div>
          </div>
          <div class="column-5">
              <img src="" alt="">
          </div>
        </div>
        <button style="margin: auto auto" class="btn-pelotonin">Create My Peloton</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "CreatePeloton",
  components: {
    Navbar,
  },
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>