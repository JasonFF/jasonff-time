import Vue from 'vue'
import Router from 'vue-router'
import Time from '@/containers/Time'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Time
    }
  ]
})
