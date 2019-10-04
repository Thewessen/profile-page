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
        <ul>
          <li>
            <ext-link url="https://github.com/Thewessen/CTF/blob/master/OverTheWire/krypton">
              view on GitHub
            </ext-link>
          </li>
          <li>
            <ext-link url="https://overthewire.org/wargames/krypton">
              view on OverTheWire.org
            </ext-link>
          </li>
        </ul>
        <p>
          The krypton wargame focusses on cryptography. Different (ancient)
          methods of encryption and decryption are being exercised.
        </p>
        <div
          v-for="level in data"
          class="mb-2"
          :key="level">
          <h2>{{ level }}</h2>
          <CTFKryptonSolution :level="level" />
        </div>
        <ButtonBack />
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import CTFKryptonSolution from '@/components/CTFKryptonSolution'

export default {
  name: "CTFKrypton",
  components: {
    CTFKryptonSolution,
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

<style lang="sass" scoped>
ul
  padding: 0
  list-style-type: none

li
  padding: .5rem 0

a
  text-decoration: none
  color: grey

.mb-2
  margin-bottom: 2rem
</style>
