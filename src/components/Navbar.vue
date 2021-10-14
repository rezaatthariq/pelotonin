<template>
<div class="navbarr">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="nav-header">
        <img src="../assets/Logo.png" alt="" class="logo-img">
        <nav>
            <ul class="nav__links">
                <li>
                    <button>
                        <router-link :to="{name: 'home'}">Home</router-link>    
                    </button>
                </li>
                <li>
                    <button>
                        <router-link :to="{name: 'profile'}">Profile</router-link>
                    </button>
                </li>
                <li>
                    <button>
                        <router-link :to="{name: 'howto'}">How To</router-link>
                    </button>
                </li>
            </ul> 
        </nav>
        <nav>
            <ul class="notif-logout">
                <li><a class="notif" href=""><i class="fa fa-bell"></i></a></li>
                <li><a @click="logout" href="" class="btn-logout">Logout</a></li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
export default {
  name: "Navbar",
  
//   data(){
//       return{
//           token: localStorage.getItem("token"),
//       };
//   },
//   methods: {
//       showHome() {
//           this.$emit("","home");
//       },
//       showProfile() {
//           this.$emit("", "profile");
//       },
//       showHowTo() {
//           this.$emit("", "howto");
//       },
//       logout() {
//           axios
//             .get("api/logout", {
//                 headers: {Authorizaion: "Bearer " + this.token},
//             })
//             .then(() => {
//                 localStorage.removeItem("token");
//                 this.$router.push("login")
//             });
//       },
//   },
};
</script>

<style lang="css">
@import "../css/pelotonin.css";
</style>