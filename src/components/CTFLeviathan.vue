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
      <h1>Leviathan</h1>
      <p>
        Leviathan is a wargame that has been rescued from the demise of
        intruded.net, previously hosted on leviathan.intruded.net. It is on
        the same difficulty level as OverTheWire bandit.
      </p>
      <b-row class="justify-content-end">
        <b-link
          class="m-2 text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Thewessen/CTF/blob/master/OverTheWire/leviathan">
          view on GitHub
        </b-link>
        <b-link
          class="m-2 text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://overthewire.org/wargames/leviathan">
          view on OverTheWire
        </b-link>
      </b-row>
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
import CodeHighlight from '@/components/CodeHighlight'
export default {
  name: "CTFLeviathan",
  components: {
    CodeHighlight,
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
