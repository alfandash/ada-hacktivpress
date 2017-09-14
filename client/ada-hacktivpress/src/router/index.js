import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HighlightArticles from '@/components/HighlightArticles'
import DetailArticles from '@/components/DetailArticles'
import Login from '@/components/Login'
import CreateBlog from '@/components/CreateBlog'
import MyArticles from '@/components/MyArticles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: HighlightArticles
        }
      ]
    },
    {
      path: '/create',
      component: CreateBlog
    },
    {
      path: '/myblog',
      component: MyArticles
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      name: 'Hello',
      component: Home,
      children: [
        {
          path: '',
          component: HighlightArticles
        },
        {
          path: ':id',
          component: DetailArticles,
          props: true
        }
      ]
    }
  ]
})
