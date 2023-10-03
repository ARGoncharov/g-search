import Vue from 'vue'
import Vuex from 'vuex'

import api from './api'
import gif from './gif'

Vue.use(Vuex)

export const state = () => ({})

export const actions = {}

export const mutations = {}

export const modules = {
  api,
  gif
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules
})
