import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HighlightArticles from '@/components/HighlightArticles'

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
