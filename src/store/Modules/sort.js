const sort = {
  state: {
    list: [
      {
        id: 1,
        date: '2019/03/04',
        text: 'apple',
        number: 3
      },
      {
        id: 2,
        date: '2019/03/05',
        text: 'chocolate',
        number: 1
      },
      {
        id: 3,
        date: '2019/03/03',
        text: 'banana',
        number: 2
      }
    ]
  },
  getters: {
    list (state) { return state.list }
  },
  mutations: {
    ascList (state) {
      state.list.sort((a, b) => {
        return (a.number - b.number)
      })
    }
  },
  actions: {
    ascList ({ commit }) {
      commit('ascList')
    }
  }
}

export default sort
