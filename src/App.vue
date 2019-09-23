<template>
  <main id="app">
    <ul>
      <li><router-link to="#">Home</router-link></li>
      <li><router-link to="/CTF/OverTheWire/bandit">OverTheWire</router-link></li>
      <li><router-link to="/Exercism/javascript">Exercism</router-link></li>
    </ul>
    <router-view />
  </main>
</template>

<script>
export default {
  
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
