<template>
  <ApolloQuery
    :query="require('../graphql/CTFLeviathan.gql')"
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
            <ext-link url="https://github.com/Thewessen/CTF/blob/master/OverTheWire/leviathan">
              view on GitHub
            </ext-link>
          </li>
          <li>
            <ext-link url="https://overthewire.org/wargames/leviathan">
              view on OverTheWire.org
            </ext-link>
          </li>
        </ul>
        <p>
          Leviathan is a wargame that has been rescued from the demise of
          intruded.net, previously hosted on leviathan.intruded.net. It is on
          the same difficulty level as OverTheWire bandit.
        </p>
        <div
          class="mb-2"
          v-for="level in data"
          :key="level.name">
          <h2>{{ level.name }}</h2>
          <code-highlight :lineNumbers="false">{{ level.text }}</code-highlight>
        </div>
        <ButtonBack />
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight'
import ButtonBack from '@/components/ButtonBack'
import ExtLink from '@/components/ExternLink'

export default {
  name: "CTFLeviathan",
  components: {
    CodeHighlight,
    ButtonBack,
    ExtLink,
  },
  methods: {
    computedData (data) {
      return data.repository.object.entries
        .map(entry => ({
          name: entry.name,
          text: entry.object.text
        }))
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
