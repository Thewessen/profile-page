<template>
  <article>
    <h1>Projects</h1>
    <p>
      This page is still under construction.
    </p>
    <h2>Recently added</h2>
    <ul>
      <li
        v-for="page in pages"
        :key="page.name"
        @click="$router.push(page.url)">
        {{ page.name }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "AllProjects",
  data() {
    return {
      pages: [
        {
          name: 'Laravel',
          url: '/IVDE/Laravel'
        },
        {
          name: 'OverTheWire',
          url: '/CTF/OverTheWire/Bandit'
        },
        {
          name: 'Exercism',
          url: '/Exercism/JavaScript'
        },
        {
          name: 'Matching Brackets',
          url: '/Exercism/MatchingBrackets'
        },
        {
          name: 'Bowling',
          url: '/Exercism/Bowling'
        },
        {
          name: 'Robot Name',
          url: '/Exercism/RobotName'
        },
        {
          name: 'Kindergarten Garden',
          url: '/Exercism/KindergartenGarden'
        },
        {
          name: 'Dates',
          url: '/date'
        },
        {
          name: 'About',
          url: '/contact'
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
ul
  display: flex
  flex-flow: column nowrap
  margin-bottom: 2rem
  width: fit-content
  list-style-type: none
  padding: 0
  > li
    padding: .5rem 2rem
    border-left: 1px solid grey
    border-right: 1px solid grey
    border-bottom: 1px solid grey
    cursor: pointer
    &:first-child
      border-top: 1px solid grey
      border-top-left-radius: 5px
      border-top-right-radius: 5px
    &:last-child
      border-bottom-left-radius: 5px
      border-bottom-right-radius: 5px
    &:hover
      color: $purple
      border-color: $purple
</style>
