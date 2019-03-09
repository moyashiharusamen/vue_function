const sort = {
  state: {
    list: [
      {
        id: 1,
        date: '2019/03/04',
        text: 'apple',
        price: 100
      },
      {
        id: 2,
        date: '2019/03/05',
        text: 'pear',
        price: 150
      },
      {
        id: 3,
        date: '2019/03/03',
        text: 'banana',
        price: 50
      },
      {
        id: 4,
        date: '2019/03/14',
        text: 'strawberry',
        price: 300
      },
      {
        id: 5,
        date: '2019/12/03',
        text: 'plum',
        price: 400
      },
      {
        id: 6,
        date: '2019/04/25',
        text: 'watermelon',
        price: 3000
      },
      {
        id: 7,
        date: '2019/07/01',
        text: 'pear',
        price: 200
      },
      {
        id: 8,
        date: '2019/08/06',
        text: 'grape',
        price: 198
      },
      {
        id: 9,
        date: '2019/10/25',
        text: 'peach',
        price: 150
      },
      {
        id: 10,
        date: '2019/05/13',
        text: 'melon',
        price: 2000
      }
    ],
    sortIconFlag: {
      date: false,
      text: false,
      price: false
    },
    order: false
  },
  getters: {
    list: (state) => state.list,
    sortIconFlag: (state) => state.sortIconFlag,
    order: (state) => state.order
  },
  mutations: {
    sorted (state, payload) {
      state.order = !state.order
      state.list = _.orderBy(state.list, payload, state.order ? 'desc' : 'asc') // eslint-disable-line

      const sortKeys = Object.keys(state.sortIconFlag)
      const sortKeysLength = sortKeys.length
      let i = 0

      state.sortIconFlag[payload] = !state.sortIconFlag[payload]

      for (i; i < sortKeysLength; i++) {
        if (sortKeys[i] !== payload) {
          state.sortIconFlag[sortKeys[i]] = false
        }
      }
    }
  },
  actions: {
    sorted: ({commit}, payload) => commit('sorted', payload)
  }
}

export default sort
