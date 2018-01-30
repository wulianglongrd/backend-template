import pubApi from '@/api/pub'
import * as types from '../mutation-types'

const state = {
  menus: []
}

const getters = {
  menus: state => state.menus
}

const mutations = {
  [types.SET_MENUS] (statie, menus) {
    state.menus = menus
  }
}

const actions = {
  getMenus ({ commit }) {
    return pubApi.menus().then(menus => {
      commit(types.SET_MENUS, menus)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
