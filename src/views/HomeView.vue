<template lang="pug">
  .page.home
    .header
      h1.title g-Search
      SearchComponent(
        @enter="revertTitle"
        @submit="onSubmit"
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
        button.btn-prev(v-if="pagination.offset > 0" @click="prevPage") Previous
        button.btn-next(@click="nextPage") Next
</template>

<script>

import SearchComponent from '@/components/SearchComponent.vue'
import SpinnerComponent from '@/components/SpinnerComponent.vue'

export default {
  name: 'PageHome',
  components: {
    SearchComponent,
    SpinnerComponent
  },
  data () {
    return {
      isLoading: false,
      query: '',
      items: [],
      url: '',
      pageNumber: 0,
      size: 14,
      pagination: {
        limit: 10,
        offset: 0,
        totalCount: 0
      }
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

    onSubmit (search) {
      this.query = search
      this.pagination.offset = 0
      this.pagination.totalCount = 0
      this.loadGifs()
    },
    revertTitle () {
      const title = document.querySelector('.title')
      title.style.fontSize = '60px'
      title.style.color = 'black'
    },
    nextPage () {
      if (this.pagination.offset < this.pagination.totalCount) {
        this.pagination.offset += 10
        this.loadGifs()
      }
    },
    prevPage () {
      if (this.pagination.offset > 0) {
        this.pagination.offset -= 10
        this.loadGifs()
      }
    },
    async loadGifs () {
      this.isLoading = true
      const params = {
        q: this.query,
        limit: 10,
        offset: this.pagination.offset
      }

      try {
        const res = await this.$store.dispatch('api/getSearchItems', { params })
        const data = res.data
        this.pagination.totalCount = data.pagination.total_count
        this.items = data.data
      } catch (err) {
        console.warn('Error', err)
      } finally {
        this.isLoading = false
      }
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
