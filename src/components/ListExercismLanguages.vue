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
      <b-button-group
        v-else-if="data">
        <b-button
          variant="outline-light"
          v-for="lang in data"
          :key="lang"
          :to="`/Exercism/${lang}`"
          :pressed="lang === language">{{ lang }}</b-button>
      </b-button-group>
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
    getEntries(data) {
      return data.repository.languages.entries
        .filter(entry => entry.type === "tree")
        .map(entry => entry.name)
        .map(lang => lang[0].toUpperCase() + lang.slice(1))
    }
  }
}
</script>
