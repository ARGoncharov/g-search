<template lang="pug">
  .search-field-component
    input.search-field(type="search" placeholder="Искать гифку..." required @keyup.enter="$emit('enter')")
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
      background-color: black;
      color: gainsboro;
    }
  }
}
</style>
