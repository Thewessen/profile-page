<template>
  <div class="project-layout-container">
    <div>
      <header>
        <h2>{{ title }}</h2>
        <h5 v-if="subtitle">{{ subtitle }}</h5>
      </header>
      <div>
        <slot></slot>
      </div>
      <router-link
        v-if="url"
        :to="url"
        >show more...</router-link>
    </div>
    <ul>
      <li
        v-for="(lang, index) in languages"
        :key="index">
        <img
          class="icon"
          :src="imgSrc(lang)" alt="" />
        <div>{{ lang }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProjectBlockLayout",
  props: {
    title: {
      type: String,
      default: 'One of my projects'
    },
    subtitle: {
      type: String,
      default: ''
    },
    languages: {
      type: Array,
      default() {
        return []
      }
    },
    url: {
      type: String,
      default: ''
    },
  },
  methods: {
    imgSrc(language) {
      const logos = require.context('../assets/logos/', false, /\.png$/)
      if (language === 'C++') {
        language = 'cpp'
      }
      const lang = language.toLowerCase().replace(/ /g, '')
      return logos(`./${lang}logo.png`)
    }
  }
}
</script>

<style lang="sass" scoped>
.project-layout-container
  width: 100%
  padding: 1rem
  display: flex
  flex-flow: row wrap
  margin: 0
  > *
    margin: 0
    padding: 0
  > div
    width: 70%
    > header
      margin: 0
      margin-bottom: 1em
      width: 100%
    > div
      max-width: 32rem
      margin-bottom: 1rem
  > ul
    width: 30%

ul
  list-style-type: none
  > li
    display: flex
    flex-flow: row nowrap
    align-items: center
    margin: 0
    margin-bottom: 1rem
    > img
      max-width: 2rem
    > div
      padding-left: .5rem


.icon 
  max-width: 2rem

h2
  margin: 0
  padding: 0

h5
  margin: 0
  padding: 0
  color: grey

a
  text-decoration: none
  color: grey
</style>
