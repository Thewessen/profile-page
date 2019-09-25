<template>
  <ApolloQuery
    :query="require('../graphql/ExercismExercises.gql')"
    :update="getEntries"
    :variables="{ exercises }">
    <template v-slot="{ result: { loading, error, data } }">

      <!-- Loading -->
      <div v-if="loading">Loading...</div>

      <!-- Error -->
      <div v-else-if="error">An error occured</div>

      <!-- Data -->
      <ul v-else-if="data">
        <li
          v-for="exercise in data"
          :key="exercise">
          <router-link
            :to="$route.fullPath + '/' + exercise"
            >
            <div class="img-container">
              <img
              :src="`https://assets.exercism.io/exercises/${exercise.toLowerCase()}-white.png`"/>
            </div>
            <p>{{ exercise }}</p>
          </router-link>
        </li>
      </ul>
    </template>
  </ApolloQuery>
</template>

<script>
import upperFirst from 'lodash/upperFirst'
export default {
  name: 'ListExercismExercises',
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },
  computed: {
    exercises() {
      return `master:Exercism/${this.language.toLowerCase()}`
    }
  },
  methods: {
    getEntries(data) {
      return data.repository.exercises.entries
        .filter(entry => entry.type === "tree")
        .map(entry => entry.name)
        .map(upperFirst)
    }
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
  color: $black


ul
  display: flex
  flex-flow: row wrap
  width: 100%
  margin: 0 auto;
  list-style-type: none
  padding: 0
  > li
    padding: .5rem 0
    width: 100%
    a
      width: 69%
      min-width: fit-content
      display: flex
      flex-flow: row nowrap
      align-items: center
    p
      padding: 0 2rem
      font-size: 1.3rem
      font-weight: 300
    .img-container
      background-color: $turquoise
      padding: .3rem
      width: 4rem
      height: 4rem
      border-radius: 5px
    img
      width: 100%
      height: 100%
</style>
