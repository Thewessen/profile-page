<template>
  <main id="app">
    <MainHeader />
    <router-view />
  </main>
</template>

<script>
import MainHeader from '@/components/MainHeader'
export default {
  components: {
    MainHeader
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style-type: none
  margin: 0
  padding: .5rem
  > li
    margin-bottom: 1rem
</style>
