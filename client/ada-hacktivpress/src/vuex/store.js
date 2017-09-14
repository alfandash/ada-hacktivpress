import Vue from 'vue'
import Vuex from 'vuex'
// require axios
import axios from 'axios'

let http = axios.create({
  baseURL: 'http://localhost:3000/'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: [],
    userLogin: {
      token: '',
      username: '',
      email: ''
    },
    isLogin: false,
    userLoginArticles: []
  },
  mutations: {
    setArticles (state, data) {
      state.articles = data
    },
    setUserLogin (state, data) {
      state.userLogin.token = localStorage.getItem('ada-hacktivpress')
      state.userLogin.username = data.username
      state.userLogin.email = data.email
      state.userLogin.id = data.id
      state.isLogin = true
    },
    setUserLoginArticles (state, data) {
      state.userLoginArticles = data
    },
    logout (state, data) {
      state.articles = []
      state.userLogin = {
        token: '',
        username: '',
        email: ''
      }
      state.isLogin = false
      state.userLoginArticles = []
    }
  },
  actions: {
    getAllArticles ({ commit }) {
      http.get('/articles/')
      .then(({ data }) => {
        commit('setArticles', data)
      })
      .catch(err => {
        commit('setArticles', err)
      })
    }
  },
  getUserLogin ({ commit }, tokenUser) {
    http.get('/users/info', {
      headers: {
        token: tokenUser
      }
    })
    .then(({ data }) => {
      commit('setUserLogin', data)
    })
    .catch(err => {
      commit('setUserLogin', err)
    })
  },
  getUserLoginArticles ({ commit }, tokenUser) {
    http.get('/articles', {
      headers: {
        token: tokenUser
      }
    })
    .then(({ data }) => {
      commit('setUserLoginArticles', data)
      localStorage.setItem('userLoginArtciles', data)
    })
    .catch(err => {
      commit('setUserLoginArticles', err)
    })
  }
})

export default store
