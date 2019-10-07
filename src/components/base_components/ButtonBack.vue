<template>
  <button
    @click="$router.back()">
    Back
  </button>
</template>

<style lang="sass" scoped>
button
  background-color: $white
  font-family: $monospace
  border: 1px solid $turquoise
  font-size: 1.3rem
  border-radius: 3px
  padding: .5rem 2rem
  margin: 2rem 0
  &:hover
    color: $white
    background-color: $turquoise

</style>
