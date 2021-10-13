<template>
<div class="navbarr">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="nav-header">
        <img src="../assets/Logo.png" alt="" class="logo-img">
        <nav>
            <ul class="nav__links">
                <li><a href="">Home</a></li>
                <li><a href="">Profile</a></li>
                <li><a href="">How To</a></li>
            </ul> 
        </nav>
        <nav>
            <ul class="notif-logout">
                <li><a class="notif" href=""><i class="fa fa-bell"></i></a></li>
                <li><a href="" class="logout"><button>Logout</button></a></li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>