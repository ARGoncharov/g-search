<template lang="pug">
  .gif-about
    img(:src="imageData.images.original.url")
    button.btn-copy(
      v-model="buttonTitle"
      v-clipboard:copy="imageData.images.original.url"
      @click="copyURL") {{buttonTitle}}
</template>

<script>

import axios from 'axios'
import { API_KEY } from '@/api'
import { copyToClipboard } from '@/utils/copy'

export default {
  name: 'AboutView',
  data () {
    return {
      imageData: {},
      buttonTitle: 'Copy link'
    }
  },
  created () {
    const { query } = this.$router.currentRoute
    if (query.id) {
      this.fetchImageData()
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    fetchImageData () {
      const id = this.$route.query.id
      axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
        .then(response => {
          this.imageData = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    copyURL () {
      copyToClipboard(this.imageData.images.original.url)
      this.buttonTitle = 'Copied!'
    }
  }
}
</script>

<style lang="scss" scoped>
  .gif-about {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    .gif-about.img {
      max-width: 100%;
      max-height: 100%;
    }
    .btn-copy {
      cursor: pointer;
      border: none;
      color: white;
      background-color: #4CAF50;
      border-radius: 10px;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
    }
    .btn-download {
      cursor: pointer;
      border: none;
      color: white;
      background-color: black;
      border-radius: 10px;
      margin-top: 1rem;
      padding: 0.5rem 1rem;
    }
  }
</style>
