<template>
<div class="container">
  <div class="col col-md-12">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style>

</style>
