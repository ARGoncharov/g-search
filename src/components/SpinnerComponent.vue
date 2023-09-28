<template lang="pug">
  .spinner-component
    .spinner
</template>

<script>
export default {
  name: 'SpinnerComponent'
}
</script>

<style lang="scss" scoped>
.spinner-component {
  .spinner {
    height: 10em;
    width: 10em;
    border: 2em solid gainsboro;
    border-radius: 50%;
    border-top-color: #30EB82;
    position: fixed;
    transform: translate(325%, 100%);
    animation: spin 2s infinite;
  }
  @keyframes spin {
    100% {
      transform: translate(325%, 100%) rotate(360deg);
    }
  }
}
</style>
