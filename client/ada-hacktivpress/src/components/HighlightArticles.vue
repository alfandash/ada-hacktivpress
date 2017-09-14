<template>
<div class="list-group">
  <router-link v-for="(article, index) in articlesAll" :to="'home/' + article._id" :key="index" class="list-group-item">
    <h3 class="list-group-item-heading">{{article.title}} </h3>
    <p class="list-group-item-text" style="padding:10px">{{article.content.substring(0,30)}}</p>
    <p><a class="btn btn-primary btn-sm">Baca detail</a></p>
    <h5>By {{article.author[0].username}}</h5>
    <h5>Category {{article.category}}</h5>
  </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      articlesAll: 'articles'
    })
  }
}
</script>

<style>

</style>
