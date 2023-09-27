<template lang="pug">
  .search-field-component
    input.search-field(type="search" placeholder="find your giphy..." required @keyup.enter="$emit('enter')")
    button.search-button(type="submit" @click="$emit('enter')") Search
</template>

<script>
export default {
  name: 'SearchComponent',
  methods: {
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
    &:valid
    {
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
    &:hover {
      color: #30EB82;
      background-color: black;
      font-family: Orbitron, sans-serif;
      transition: 0.5s;
    }
  }
}
</style>
