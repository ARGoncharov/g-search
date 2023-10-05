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
      .gif(v-for="(item, i) in items" :key="i")
        router-link(:to="{ name: 'gif', params: { id: item.id } }")
          img(:src="item.images.original.url")
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
      items: [],
      pagination: {},
      url: ''
    }
  },
  methods: {
    onDataLoad (data) {
      console.log(data)
      this.items = data.data
      this.pagination = data.pagination
    },
    revertTitle () {
      const title = document.querySelector('.title')
      title.style.fontSize = '60px'
      title.style.color = 'black'
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
}
</style>
