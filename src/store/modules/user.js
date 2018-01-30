import userApi from '@/api/user'
import * as types from '../mutation-types'

const state = {
  user: {}
}

const getters = {
  user: state => state.user
}

const mutations = {
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.REM_USER] (state) {
    state.user = {}
  }
}

const actions = {
  login ({ commit }) {
    return userApi.login({}).then(user => {
      commit(types.SET_USER, user)
    })
  },
  logout ({ commit }) {
    return userApi.logout().then(() => {
      commit(types.REM_USER)
    })
  },
  getUser ({ commit }) {
    return userApi.getUser().then(user => {
      commit(types.SET_USER, user)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
