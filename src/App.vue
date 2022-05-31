<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="https://vuejs.org" class="navbar-brand ms-1">
        <img src="./assets/logo.png" height="40"/>
      </a>
      <div class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/admin" class="nav-link" active-class="active">
            Admin
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/home" class="nav-link" active-class="active">Home</router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto">
        <li class="link-item">
          <router-link to="/register" class="nav-link" active-class="active">Register</router-link>
        </li>

        <li class="link-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </div>
    </nav>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>

</style>
