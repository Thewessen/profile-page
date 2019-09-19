<template>
  <ApolloQuery
    class="row"
    :query="require('../graphql/OverTheWireWargames.gql')"
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
          v-for="game in data"
          :key="game"
          :to="`/CTF/OverTheWire/${game}`"
          :pressed="game === wargame">{{ game }}</b-button>
      </b-button-group>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: 'OverTheWireWargames',
  props: {
    wargame: {
      type: String,
      default: 'bandit'
    }
  },
  methods: {
    getEntries(data) {
      return data.repository.wargame.entries
        .filter(entry => entry.type === "tree")
        .map(entry => entry.name)
    }
  }
}
</script>
