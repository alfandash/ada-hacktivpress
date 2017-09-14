<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/home">Home</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/myblog">My Blog</router-link>
          </li>
          <li>
            <router-link to="/create">Create Blog</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">  
          <!-- <li><a href="#">Selamat datang {{user.username}}</a></li>
          <li><a href="#" @click.prevent="logoutUser">Logout</a></li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>
