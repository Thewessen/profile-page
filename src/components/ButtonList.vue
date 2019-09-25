<template>
  <ApolloQuery
    :query="graphql"
    :update="getEntries">
    <template v-slot="{ result: { loading, error, data } }">

      <!-- Loading -->
      <div v-if="loading">Loading...</div>

      <!-- Error -->
      <div v-else-if="error">An error occured</div>

      <!-- Data -->
      <ul v-else-if="data">
        <li
          v-for="entry in data"
          :key="entry"
          :class="{ active: isActive(entry), [`color-${variant}`]: true }"
          @click="!isActive(entry) && $router.push(`${baseURL}/${entry}`)">
          {{ entry }}
        </li>
      </ul>
    </template>
  </ApolloQuery>
</template>

<script>
import upperFirst from 'lodash/upperFirst'
export default {
  name: 'ButtonList',
  props: {
    active: String,
    graphql: Object,
    baseURL: String,
    variant: {
      type: String,
      default: 'grey'
    }
  },
  methods: {
    isActive(entry) {
      return entry.toLowerCase() === this.active.toLowerCase()
    },
    getEntries(data) {
      return data.repository.object.entries
        .filter(entry => entry.type === "tree")
        .map(entry => entry.name)
        .map(upperFirst)
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
  > li
    padding: .5rem 2rem
    border-top: 1px solid
    border-bottom: 1px solid
    border-right: 1px solid
    cursor: pointer
    &:first-child
      border-left: 1px solid
      border-top-left-radius: 5px
      border-bottom-left-radius: 5px
    &:last-child
      border-top-right-radius: 5px
      border-bottom-right-radius: 5px
    &.active
      cursor: default

.color-turquoise
  border-color: $turquoise
  &.active
    background-color: $turquoise
    color: $white
  
.color-grey
  border-color: grey
  &.active
    background-color: grey
    color: $white
</style>
