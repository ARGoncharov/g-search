<template lang="pug">
  #app
    .header
      h1.title g-Search
      SearchComponent(ref="searchComponent" @enter="revertTitle")
    .main
      SpinnerComponent
    router-view
</template>

<script>

import SearchComponent from '@/components/SearchComponent.vue'
import SpinnerComponent from '@/components/SpinnerComponent.vue'

export default {
  components: {
    SpinnerComponent,
    SearchComponent
  },
  methods: {
    changeTitle () {
      const title = document.querySelector('.title')
      title.style.fontSize = '80px'
      title.style.color = '#30EB82'
      title.style.transition = '0.5s'
    },
    revertTitle () {
      const title = document.querySelector('.title')
      title.style.fontSize = '60px'
      title.style.color = 'black'
    }
  },
  mounted () {
    const searchField = this.$refs.searchComponent.$el.querySelector('.search-field')
    searchField.addEventListener('click', this.changeTitle)
  }
}

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Oswald:wght@300&display=swap');

.header {
  .title {
    font-family: Orbitron, sans-serif;
    font-size: 60px;
    text-align: center;
    padding-top: 60px;
  }
}

</style>
