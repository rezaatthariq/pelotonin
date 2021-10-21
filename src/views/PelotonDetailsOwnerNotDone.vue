<template>
  <div class="page">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Navbar />
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Peloton Details</h1>
        <ul class="nav_links">
          <li>
            <button class="btn-pelotonin">
              <router-link :to="{ name: 'memberManagement' }"
                >Member Management</router-link
              >
            </button>
          </li>
          <li>
            <button class="btn-pelotonin">
              <router-link :to="{ name: 'chat' }">Chat</router-link>
            </button>
          </li>
        </ul>
      </div>
      <br /><br /><br />
      <div class="page-content">
        <div class="peloton-details">
          <div class="row">
            <div class="column-4">
              <img
                src="../assets/loop/dalkot.png"
                alt=""
                class="img-loop-detail"
              />
              <br />
              <button style="margin: auto auto" class="btn-pelotonin">
                Edit Peloton
              </button>
            </div>
            <div class="column-6">
              <h1>Reza's Express Train</h1>
              <p class="details-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                vel aspernatur quo at repellat laboriosam aliquam, quis nemo.
                Asperiores nam ut nihil vitae dolores voluptates, maxime aliquam
                dolorum, obcaecati totam nesciunt assumenda libero? Deserunt
                dolores libero fugiat facere dolorum praesentium?
              </p>
              <br /><br />
              <hr />
              <hr />
              <div class="row">
                <div class="column-3">
                  <p>Date</p>
                </div>
                <p>:</p>
                <div class="column-6">
                  <p>3 October 2021</p>
                </div>
              </div>
              <div class="row">
                <div class="column-3">
                  <p>Time</p>
                </div>
                <p>:</p>
                <div class="column-6">
                  <p>15.00</p>
                  <p>WIB</p>
                </div>
              </div>
              <div class="row">
                <div class="column-3">
                  <p>Number of Laps</p>
                </div>
                <p>:</p>
                <div class="column-6">
                  <p>10 Laps</p>
                </div>
              </div>
              <div class="row">
                <div class="column-3">
                  <p>Loop of Route</p>
                </div>
                <p>:</p>
                <div class="column-6">
                  <p>Mozia Loop</p>
                </div>
              </div>
              <div class="row">
                <div class="column-3">
                  <p>Average Speed</p>
                </div>
                <p>:</p>
                <div class="column-6">
                  <p>40</p>
                  <p>km/h</p>
                </div>
              </div>
              <div class="row">
                <div class="column-3">
                  <p>Available Slots</p>
                </div>
                <p>:</p>
                <div class="column-6">
                  <p>2</p>
                  <p>Riders</p>
                </div>
              </div>
              <div class="row">
                <div class="column-3">
                  <p>Max. Members</p>
                </div>
                <p>:</p>
                <div class="column-6">
                  <p>8</p>
                  <p>Riders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "PelotonDetailsOwnerNotDone",
  components: {
    Navbar,
  },
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>