import axios from 'axios'
import qs from 'qs'
export const BASE_URL = 'https://api.giphy.com/v1/gifs'
export const API_KEY = '1fsLx4csUmfXLMu9bw9bahch3ZaLiCou'

class Index {
  constructor () {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      params: {
        api_key: API_KEY
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    })
  }

  get (url, options = {}) {
    return this.axiosInstance.get(url, options)
  }
}

export default new Index()
