<template>
  <ApolloQuery
    :query="require('../graphql/CTFkrypton.gql')"
    :update="computedData">
  <template v-slot="{ result: { loading, error, data } }">

    <!-- Loading -->
    <div v-if="loading">Loading...</div>

    <!-- Error -->
    <div v-else-if="error">An error occured</div>

    <!-- Data -->
    <div v-else-if="data">
      <h1>OverTheWire - krypton</h1>
      <p>
        The krypton wargame focusses on cryptography. Different (ancient)
        methods of encryption and decryption are being exercised.
      </p>
      <b-row
        v-for="level in data"
        :key="level.name">
        <h2 class="m-4">{{ level.name }}</h2>
        <code-highlight :lineNumbers="false">{{ level.text }}</code-highlight>
      </b-row>
    </div>
  </template>
  <b-button @click="$router.back()" class="m-4">Back</b-button>
  </ApolloQuery>
</template>

<script>
import CodeHighlight from '../components/CodeHighlight'
export default {
  name: "CTFKrypton",
  components: {
    CodeHighlight
  },
  methods: {
    computedData (data) {
      console.log(data)
      return data.repository.level.entries
        .map(entry => ({
          name: entry.name,
          text: entry.level.entries
            .find(entry => entry.name.startsWith('solution'))
            .text
        }))
    }
  }
}
</script>
