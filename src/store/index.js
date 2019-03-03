import Vue from 'vue'
import Vuex from 'vuex'
import Modal from '@/store/Modules/modal.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Modal
  }
})

export default store
