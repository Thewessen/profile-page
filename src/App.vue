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
@import './main.sass'

ul
  list-style-type: none
  margin: 0
  padding: .5rem
  > li
    margin-bottom: 1rem

#app
  margin: 0
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: left
  color: #2c3e50

a
  color: black

</style>
