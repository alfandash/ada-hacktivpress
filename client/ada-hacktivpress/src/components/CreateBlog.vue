<template>
  <div class="container">
    <div class="col col-md-12">
      <form class="form-horizontal" @submit.prevent="createArticle()">
        <fieldset>
          {{alertMsg}}
          <div class="form-group">
            <label for="inputEmail" class="col-lg-2 control-label">Title</label>
            <div class="col-lg-5">
              <input class="form-control" id="inputTitle" placeholder="Title" type="text" v-model="article.title" required>
            </div>
          </div>
          <div class="form-group">
            <label for="inputEmail" class="col-lg-2 control-label">Category</label>
            <div class="col-lg-5">
              <input class="form-control" id="inputCategory" placeholder="Category" type="text" v-model="article.category" required>
            </div>
          </div>
          <div class="form-group">
            <label for="textArea" class="col-lg-2 control-label">Your Article</label>
            <div class="col-lg-5">
              <textarea class="form-control" rows="3" id="textArea" v-model="article.content" required></textarea>
              <span class="help-block">Tulis sesuatu yang kamu cintai</span>
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-5 col-lg-offset-2">
              <button type="reset" class="btn btn-default" @click.prevent="cancel()">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {
        title: '',
        content: '',
        category: ''
      },
      alertMsg: ''
    }
  },
  methods: {
    createArticle () {
      this.$http.post('/articles', {
        title: this.article.title,
        content: this.article.content,
        category: this.article.category
      }, {
        headers: {
          token: localStorage.getItem('ada-hacktivpress')
        }
      })
      .then(({ data }) => {
        if (!data.hasOwnProperty('error')) {
          this.article.title = ''
          this.article.content = ''
          this.article.category = ''
          this.alertMsg = 'berhasil inputnya cuy'
        } else {
          console.log(data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    },
    cancel () {
      this.article.title = ''
      this.article.content = ''
      this.article.category = ''
    }
  }
}
</script>

<style>

</style>
