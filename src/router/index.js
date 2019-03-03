import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Modal from '@/views/Modal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    }
  ]
})
