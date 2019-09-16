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
      <b-list-group v-else-if="data">
        <b-list-group-item
          v-for="exercise in data"
          :key="exercise"
          :to="exercise"
          :append="true">
          <b-badge variant="secondary">
            <b-img
              v-bind="iconProps"
              :src="`https://assets.exercism.io/exercises/${exercise}-white.png`"/>
          </b-badge>
          <span class="ml-2">
            {{ exercise }}
          </span>
        </b-list-group-item>
      </b-list-group>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: 'ListExercismExercises',
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },
  data() {
    return {
      iconProps: {
        width: 48,
        height: 48
      }
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
    }
  }
}
</script>

<style scoped>
.icon-container {
  display: inline-block;
  margin: -0.75rem 1.25rem calc(-0.75rem + 1px) -1.25rem;
  width: 48px;
  height: 48px;
}
</style>
