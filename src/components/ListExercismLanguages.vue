<template>
  <ApolloQuery
    class="row"
    :query="require('../graphql/ExercismLanguages.gql')"
    :update="getEntries">
    <template v-slot="{ result: { loading, error, data } }">

      <!-- Loading -->
      <div v-if="loading">Loading...</div>

      <!-- Error -->
      <div v-else-if="error">An error occured</div>

      <!-- Data -->
      <ul v-else-if="data">
        <li
          v-for="lang in data"
          :key="lang"
          :class="{ active: isActive(lang) }"
          @click="$router.push(`/Exercism/${lang}`)">
          {{ lang }}
        </li>
      </ul>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: 'ListExercismLanguages',
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },
  methods: {
    isActive(lang) {
      return lang === this.language
    },
    getEntries(data) {
      return data.repository.languages.entries
        .filter(entry => entry.type === "tree")
        .map(entry => entry.name)
        .map(lang => lang[0].toUpperCase() + lang.slice(1))
    }
  },
}
</script>

<style lang="sass" scoped>
a
  color: $black
  text-decoration: none

ul
  display: flex
  flex-flow: row nowrap
  margin: 0 auto
  margin-bottom: 2rem
  justify-content: center
  list-style-type: none
  padding: 0
  position: sticky
  > li
    padding: .5rem 2rem
    border-top: 1px solid $turquoise
    border-bottom: 1px solid $turquoise
    border-right: 1px solid $turquoise
    cursor: pointer
    &:first-child
      border-left: 1px solid $turquoise
      border-top-left-radius: 5px
      border-bottom-left-radius: 5px
    &:last-child
      border-top-right-radius: 5px
      border-bottom-right-radius: 5px
    &.active
      background-color: $turquoise
      color: $white
      cursor: default
</style>
