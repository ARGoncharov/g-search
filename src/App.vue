<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  methods: {
    changeTitle () {
      const title = document.querySelector('.title')
      title.style.fontSize = '80px'
      title.style.color = 'a'
      title.style.transition = '0.5s'
    }
  },
  mounted () {
    // const searchField = this.$refs.searchComponent.$el.querySelector('.search-field')
    // searchField.addEventListener('click', this.changeTitle)
  }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Oswald:wght@300&display=swap');
</style>
