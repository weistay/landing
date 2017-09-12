import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/landing/Landing'
import VueHead from 'vue-head'

Vue.use(Router)
Vue.use(VueHead)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    }
  ]
})
