<template>
  <header>
    <h1
      class="main-title">
      <router-link to="/">
        this<span
          :style="extendStyle">{{ extendTitle }}</span>
      </router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/projects">
          Projects<span class="method">.get()</span>
        </router-link>
      </li>
      <li>
        <router-link to="/date">
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
  name: "MainHeader",
  data() {
    return {
      extendTitle: '',
      extendStyle() {
        return {}
      }
    }
  },
  watch: {
    $route (to) {
      if (to.name === 'contact') {
        this.extendTitle = '.me'
        this.extendStyle = {
          "color": "rgb(255, 97, 136)"
        }
      } else if (to.name === 'projects') {
        this.extendTitle = '.get()'
        this.extendStyle = {
          color: "rgb(169, 220, 118)"
        }
      } else if (to.name === 'date') {
        this.extendTitle = '.now()'
        this.extendStyle = {
          color: "rgb(169, 220, 118)"
        }
      } else {
        this.extendTitle = ''
      }
    }
  }
}
</script>

<style lang="sass" scoped>
header
  display: flex
  flex-flow: column nowrap
  margin: 1rem
  @include respond-to("extra-small")
    flex-flow: row nowrap
    align-items: center
    justify-content: space-between
    margin-top: 2rem

.method
  color: $green

.property
  color: $pink

.main-title
  margin: 0

ul
  list-style-type: none
  display: flex
  margin: 0
  padding: 0
  flex-flow: column nowrap
  @include respond-to("extra-small")
    flex-flow: row nowrap
    align-items: center
    justify-content: space-between
  > li
    font-family: $monospace
    margin-top: .7rem
    @include respond-to("extra-small")
      margin: .7rem
    span
      opacity: 0
      transition: opacity 2s
  > li:hover
    cursor: pointer
    span
      transition: opacity 0s
      opacity: 1
a
  color: unset
  text-decoration: none
</style>
