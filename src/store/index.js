import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import user from './modules/user'
import pub from './modules/pub'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    user,
    pub
  }
})
