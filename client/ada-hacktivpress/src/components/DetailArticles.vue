<template>
<div>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h4> {{article.title}} </h4>
    </div>
    <div class="panel-body">
      <p style="white-space: pre-line">{{article.content}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      article: {
        title: '',
        content: '',
        category: '',
        author: ''
      }
    }
  },
  methods: {
    getArticle () {
      this.$http.get('/articles/' + this.id)
      .then(({ data }) => {
        this.article = data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style>

</style>
