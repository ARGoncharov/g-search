<template lang="pug">
  .search-field-component
    input.search-field(
      v-model="searchItem"
      @keyup.enter="$emit('enter')"
      type="search"
      placeholder="find your giphy..."
      required)

    button.search-button(
      @click="submit"
      type="submit") Search
</template>

<script>
export default {
  name: 'SearchComponent',
  props: {
    loading: Boolean
  },
  data () {
    return {
      searchItem: ''
    }
  },
  computed: {
  },
  methods: {
    async submit () {
      this.$emit('submit', this.searchItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-field-component {
  display: flex;
  justify-content: center;
  align-content: space-between;

  .search-field {
    appearance: none;
    border: none;
    outline: none;
    background-color: gainsboro;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    display: block;
    width: 100%;
    max-width: 600px;
    padding: 15px;
    border-radius: 10px;
    font-size: 20px;

    &::placeholder {
      color: black;
    }

    &:focus,
    &:valid {
      font-family: Orbitron, sans-serif;
      background-color: black;
      color: gainsboro;
    }
  }

  .search-button {
    appearance: none;
    border: none;
    outline: none;
    margin-left: 10px;
    font-size: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background-color: gainsboro;
    width: 100px;
    border-radius: 10px;
    user-select: none;

    &:hover {
      color: #30EB82;
      background-color: black;
      font-family: Orbitron, sans-serif;
      transition: 0.5s;
    }
  }
}
</style>
