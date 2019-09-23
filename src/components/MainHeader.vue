<template>
  <header>
    <ul>
      <li>
        <router-link to="/projects">
          Projects<span class="method">.get()</span>
        </router-link>
      </li>
      <li>
        <router-link to="/chronos">
          Date<span class="method">.now()</span>
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          About<span class="property">.me</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style lang="sass" scoped>
header
  display: flex
  flex-flow: row nowrap
  align-items: center
  width: 100%

.method
  color: $green

.property
  color: $pink

ul
  list-style-type: none
  margin: 1rem
  margin-left: auto
  display: flex
  flex-flow: row nowrap
  > li
    font-family: $monospace
    margin: 1rem
    span
      opacity: 0
      transition: opacity 2s
  > li:hover
    cursor: pointer
    span
      transition: opacity 0s
      opacity: 1
a
  text-decoration: none
</style>
