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
        <ul>
          <li>
            <a
              href="https://github.com/Thewessen/CTF/blob/master/OverTheWire/bandit"
              target="_blank"
              rel="noopener noreferrer">
              view on GitHub
            </a>
          </li>
          <li>
            <a
              href="https://overthewire.org/wargames/bandit"
              target="_blank"
              rel="noopener noreferrer">
              view on OverTheWire.org
            </a>
          </li>
        </ul>
        <p>
          The Bandit wargame is aimed at absolute beginners. It will teach the
          basics needed to be able to play other wargames. Although the wargame
          starts pretty simple, in the end it reaches serieus difficulty (for
          me atleast). I really like this wargame, because it covers much
          ground using the shell, and ends with using Git.
        </p>
        <h2>Login</h2>
        <p>
          For completing these CTF exercises I've created a simple login script
          utilizing sshpass.
        </p>
        <code-highlight class="mb-2" :lineNumbers="false">{{ loginScript }}</code-highlight>
        <div
          v-for="level in data"
          :key="level.name"
          class="mb-2">
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
export default {
  name: "CTFBandit",
  data() {
    return {
      loginScript: null
    }
  },
  components: {
    CodeHighlight,
    ButtonBack,
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
