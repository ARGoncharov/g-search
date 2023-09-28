import Vue from 'vue'
import Vuex from 'vuex'
import APIService from '@/service/apiconfig'

Vue.use(Vuex)

const giphyModule = {
  state: {
    giphyData: null
  },
  mutations: {
    SET_GIPHY_DATA (state, data) {
      state.giphyData = data
    }
  },
  actions: {
    async searchGiphy ({ commit }, searchItem) {
      try {
        const response = await APIService.searchGiphy(searchItem)
        commit('SET_GIPHY_DATA', response)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getGiphyData (state) {
      return state.giphyData
    }
  }
}

export default new Vuex.Store({
  modules: {
    giphyModule
  }
})
