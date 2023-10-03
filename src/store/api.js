import api from '@/api'

export const actions = {
  getSearchItems (_, params = {}) {
    return api.get('/search', params)
  }
}

export default {
  actions,
  namespaced: true
}
