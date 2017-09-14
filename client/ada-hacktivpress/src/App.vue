<template>
  <div id="app">    
    <section id="navbar">
      <div class="container">
        <Navbar></Navbar>
      </div>
    </section>
    <section id="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    Navbar
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    let token = localStorage.getItem('ada-hacktivpress')
    if (token !== null) {
    } else {
      this.getAllArticles()
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
