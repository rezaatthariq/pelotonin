<template>
  <div class="page">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <Navbar/>
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Hi, Reza! Are You Ready to roll ?</h1>
        <ul class="nav_links">
          <li>
            <button class="btn-pelotonin">
              <router-link :to="{name:'createPeloton'}">Create Peloton</router-link>
            </button>
          </li>
          <li>
            <button class="btn-pelotonin">
              <router-link :to="{name:'joinPeloton'}">Join Peloton</router-link>
            </button>
          </li>
          <li>
              <a class="btn-helpdesk"><router-link :to="{name:'helpdesk'}"><i class="fa fa-bell"></i></router-link></a>
          </li>
        </ul>
      </div>
      <br><br><br>
      <div class="page-content">
        <h1>Owned Pelotons</h1>
        <PelotonList />
        <br><br>
        <h1>Joined Pelotons</h1>
        <PelotonList />
        <PelotonList />
        <br><br>
        <h1>Done Pelotons</h1>
        <PelotonList />
        <br><br>
        <h1>Pending Peloton Invites</h1>
        <PelotonList />
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import PelotonList from '@/components/PelotonList.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    PelotonList
  }
}
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>