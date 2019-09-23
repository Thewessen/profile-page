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

<style lang="sass">
@import '../node_modules/vue-code-highlight/themes/prism-tomorrow.css'
@import '@/sass/main.sass'

ul
  list-style-type: none
  margin: 0
  padding: .5rem
  > li
    margin-bottom: 1rem

#app
  margin: 0

a
  color: black

</style>
