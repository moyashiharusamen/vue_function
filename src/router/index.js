import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home'
import Modal from '@/views/Modal'
import Sort from '@/views/Sort'
import Graph from '@/views/Graph'
import Graph2 from '@/views/Graph2'
import PostalCode from '@/views/PostalCode'
import Tab from '@/views/Tab'
import AddList from '@/views/AddList'

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
    },
    {
      path: '/graph2',
      name: 'graph2',
      component: Graph2
    },
    {
      path: '/postal-code',
      name: 'postal-code',
      component: PostalCode
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/add-list',
      name: 'add-list',
      component: AddList
    }
  ]
})
