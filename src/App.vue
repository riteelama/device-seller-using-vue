<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="https://vuejs.org" class="navbar-brand ms-1">
        <img src="./assets/logo.png" height="40"/>
      </a>
      <div class="navbar-nav me-auto">
        <li class="nav-item" v-if="isAdmin">
          <router-link to="/admin" class="nav-link" active-class="active">
            Admin
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/home" class="nav-link" active-class="active">Home</router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto" v-if="!currentUser">
        <li class="link-item">
          <router-link to="/register" class="nav-link" active-class="active">Register</router-link>
        </li>

        <li class="link-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto" v-if="currentUser">
        <li class="link-item">
          <router-link to="/profile" class="nav-link" active-class="active">{{currentUser.username}}</router-link>
        </li>

        <li class="link-item">
          <a href="#" class="nav-link" @click="logOut">Logout</a>
        </li>
      </div>
    </nav>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
  import vuex from 'vuex';
  import ROLE from './models/role';
  export default {
    computed: {
      ...vuex.mapGetters(['currentUser']),
      isAdmin() {
        return this.currentUser?.role === ROLE.ADMIN;
      },
    },
    methods: {
      ...vuex.mapActions(['clearUser']),
      logOut(){
        //clear user from session
        this.clearUser();
        this.$router.push('/login');
      },
    }
  }
</script>

<style>

</style>
