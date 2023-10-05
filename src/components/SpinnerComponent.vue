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
  display: flex;
  justify-content: center;
  padding: 50px;

  .spinner {
    height: 2em;
    width: 2em;
    border: 0.5em solid gainsboro;
    border-radius: 50%;
    border-top-color: #30EB82;
    animation: spin 2s infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
