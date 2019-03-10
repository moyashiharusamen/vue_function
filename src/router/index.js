import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home'
import Modal from '@/views/Modal'
import Sort from '@/views/Sort'
import Graph from '@/views/Graph'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'modal',
      component: Modal
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/graph',
      name: 'graph',
      component: Graph
    }
  ]
})
