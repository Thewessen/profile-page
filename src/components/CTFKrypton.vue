<template>
  <ApolloQuery
    :query="require('../graphql/CTFKryptonLevels.gql')"
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
      <b-row class="justify-content-end">
        <b-link
          class="m-2 text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Thewessen/CTF/blob/master/OverTheWire/krypton">
          view on GitHub
        </b-link>
        <b-link
          class="m-2 text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://overthewire.org/wargames/krypton">
          view on OverTheWire
        </b-link>
      </b-row>
      <b-row
        v-for="level in data"
        :key="level">
        <h2 class="m-4 col-12">{{ level }}</h2>
        <CTFKryptonSolution :level="level" />
      </b-row>
    </div>
  </template>
  <b-button @click="$router.back()" class="m-4">Back</b-button>
  </ApolloQuery>
</template>

<script>
import CTFKryptonSolution from '@/components/CTFKryptonSolution'
export default {
  name: "CTFKrypton",
  components: {
    CTFKryptonSolution
  },
  methods: {
    computedData (data) {
      return data.repository.levels.entries
        .filter(entry => !entry.name.startsWith('login'))
        .map(entry => entry.name)
    }
  }
}
</script>
