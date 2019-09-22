<template>
  <ApolloQuery
    :query="require('../graphql/CTFbandit.gql')"
    :update="computedData">
  <template v-slot="{ result: { loading, error, data } }">

    <!-- Loading -->
    <div v-if="loading">Loading...</div>

    <!-- Error -->
    <div v-else-if="error">An error occured</div>

    <!-- Data -->
    <div v-else-if="data">
      <h1>Bandit</h1>
      <p>
        The Bandit wargame is aimed at absolute beginners. It will teach the basics
        needed to be able to play other wargames. Although the wargame starts
        pretty simple, in the end it reaches serieus difficulty (for me
        atleast). I really like this wargame, because it covers much ground
        using the shell, and ends with using Git.
      </p>
      <b-row class="justify-content-end">
        <b-link
          class="m-2 text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Thewessen/CTF/blob/master/OverTheWire/bandit">
          view on GitHub
        </b-link>
        <b-link
          class="m-2 text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://overthewire.org/wargames/bandit">
          view on OverTheWire
        </b-link>
      </b-row>
      <b-row>
        <h2 class="m-4">Login</h2>
      </b-row>
      <b-row>
        <p>
          For completing these CTF exercises I've created a simple login script utilizing sshpass.
          <code-highlight :lineNumbers="false">{{ loginScript }}</code-highlight>
        </p>
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
  name: "CTFBandit",
  data() {
    return {
      loginScript: null
    }
  },
  components: {
    CodeHighlight,
  },
  methods: {
    computedData (data) {
      const entries = data.repository.object.entries
      this.loginScript = entries
        .filter(entry => entry.name.startsWith('login'))
        .map(entry => entry.object.text)[0]
      return entries
        .filter(entry => (/^level\d\d$/).test(entry.name))
        .map(entry => ({
          name: entry.name,
          text: entry.object.text
        }))
    }
  }
}
</script>
