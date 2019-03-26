import Vue from 'vue'
import Vuex from 'vuex'
import modal from '@/store/Modules/modal.js'
import sort from '@/store/Modules/sort.js'
import graph from '@/store/Modules/graph.js'
import graph2 from '@/store/Modules/graph2.js'
import addList from '@/store/Modules/addList.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    modal,
    sort,
    graph,
    graph2,
    addList
  }
})

export default store
