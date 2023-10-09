<template lang="pug">
  .page.home
    .header
      h1.title g-Search
      SearchComponent(
        @enter="revertTitle"
        @onDataLoad="onDataLoad"
        :loading.sync="isLoading"
        ref="searchComponent")

    .gif-listing(v-if="isLoading")
      SpinnerComponent

    .gifs(v-if="!isLoading")
      .gif(v-for="(item, i) in paginatedData" :key="i")
        router-link(:to="{ name: 'about', query: { id: item.id } }")
          img(:src="item.images.original.url")
    .pagination
      ul
        .gif(v-for="p in pagination" :key="p.id") {{ p.first }} {{ p.last }} {{ p.suffix }}
      .buttons
        button.btn-prev(:disabled="pageNumber === 0" @click="prevPage") Previous
        button.btn-next(:disabled="pageNumber >= pageCount - 1" @click="nextPage") Next
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue'
import SpinnerComponent from '@/components/SpinnerComponent.vue'
import axios from 'axios'

export default {
  name: 'PageHome',
  components: {
    SearchComponent,
    SpinnerComponent
  },
  data () {
    return {
      isLoading: false,
      items: [],
      pagination: [],
      url: '',
      pageNumber: 0,
      size: 14
    }
  },
  computed: {
    pageCount () {
      const length = this.items.length
      const size = this.size
      return Math.ceil(length / size)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.items.slice(start, end)
    }
  },
  methods: {
    onDataLoad (data) {
      console.log(data)
      this.items = data.data
      this.pagination = data.pagination
      this.pageNumber = 0
      this.loadGifs()
    },
    revertTitle () {
      const title = document.querySelector('.title')
      title.style.fontSize = '60px'
      title.style.color = 'black'
    },
    nextPage () {
      if (this.pageNumber < this.pageCount - 1) {
        this.pageNumber++
        this.loadGifs()
      }
    },
    prevPage () {
      if (this.pageNumber > 0) {
        this.pageNumber--
        this.loadGifs()
      }
    },
    loadGifs () {
      this.isLoading = true
      const offset = this.pageNumber * this.size
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=${this.query}&limit=${this.size}&offset=${offset}`
      axios.get(url)
        .then(response => {
          const data = response.data.data
          const pagination = response.data.pagination
          this.items = data
          this.pagination = pagination
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.page.home {
  .header {
    .title {
      font-family: Orbitron, sans-serif;
      font-size: 60px;
      text-align: center;
      padding-top: 60px;
    }
  }

  .gifs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
  }

  .gif img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 10px;
    border-radius: 20px;
  }
  .pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    .btn-prev,
    .btn-next {
      cursor: pointer;
      font-family: Orbitron, sans-serif;
      color: gainsboro;
      background-color: black;
      font-size: 15px;
      padding: 5px 10px;
      margin-right: 10px;

      &:hover {
        color: black;
        background-color: #30EB82;
        font-size: 35px;
      }
    }
  }
}
</style>
