<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h1><strong>ADA:</strong> Hacktivpress</h1>
    </div>
    <section class="signin" id="signin">
      <div class="text-center">
        <div class="col-md-6">
          <h2><strong>Login</strong> Here:</h2>
          <transition name="fade">
            <div class="status" v-if="status">
                <h3>{{error_msg}}</h3>
            </div>
          </transition>
          <div class="panel-body vcenter">
            <form class="form-signin" action="#" method="post" @submit.prevent="loginuser">
              <div class="form-group">
                <input type="text" name="email" class="form-control input-sm" placeholder="Email" v-model="login.email">
              </div>
              <div class="form-group">
                <input type="password" name="password" class="form-control input-sm" placeholder="Password" v-model="login.password">
              </div>
              <input type="submit" value="Login" class="btn btn-primary">
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="register">
      <div class="text-center">
        <div class="col-md-6">
          <h2><strong>Register</strong> Here:</h2>
          <transition name="fade">
            <div class="status" v-if="status">
                <h3>{{error_msg}}</h3>
            </div>
          </transition>
          <div class="panel-body vcenter">
            <form class="form-signin" action="#" method="post" @submit.prevent="registeruser">
              <div class="form-group">
                <input type="text" name="username" class="form-control input-sm" placeholder="Username" v-model="register.username">
              </div>
              <div class="form-group">
                <input type="email" name="email" class="form-control input-sm" placeholder="Email" v-model="register.email">
              </div>
              <div class="form-group">
                <input type="password" name="password" class="form-control input-sm" placeholder="Password" v-model="register.password">
              </div>
              <input type="submit" value="Register" class="btn btn-info">
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      status: false,
      error_msg: '',
      register: {
        password: '',
        email: '',
        username: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'getUserLogin',
      'getUserLoginArticles'
    ]),
    registeruser () {
      this.error_msg = ''
      this.status = false
      this.$http.post('/users', {
        username: this.register.username,
        email: this.register.email,
        password: this.register.password
      })
      .then(({data}) => {
        if (!data.hasOwnProperty('errors')) {
          this.status = true
          this.error_msg = data.message
        } else {
          this.status = true
          this.error_msg = data._message
        }
        if (data.hasOwnProperty('errmsg')) {
          console.log('masuk')
          this.status = true
          this.error_msg = 'Email atau username sudah digunakan'
        }
        console.log(data.hasOwnProperty('errmsg'))
      })
      .catch(({message}) => {
        this.status = true
        this.error_msg = message
      })
    },
    loginuser () {
      this.$http.post('/users/signin', {
        email: this.login.email,
        password: this.login.password
      })
      .then(({data}) => {
        if (!data.hasOwnProperty('errors')) {
          console.log(data)
          localStorage.setItem('ada-overflow', data.token)
          this.getUserLogin(data.token)
          this.getUserLoginArticles(data.token)
          // this.$router.push({path: 'home'})
        }
        this.status = true
        this.error_msg = data.message
      })
      .catch(({message}) => {
        this.status = true
        this.error_msg = message
      })
    }
  }
}
</script>

<style>

</style>
