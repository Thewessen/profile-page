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
@import './sass/variables.sass'
@import './sass/helpers.sass'
@import './sass/main.sass'
</style>
