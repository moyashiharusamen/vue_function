import Vue from 'vue'
import Vuex from 'vuex'
import modal from '@/store/Modules/modal.js'
import sort from '@/store/Modules/sort.js'
import graph from '@/store/Modules/graph.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    modal,
    sort,
    graph
  }
})

export default store
