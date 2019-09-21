<template>
  <ApolloQuery
    :query="require('../graphql/CTFNatas.gql')"
    :update="computedData">
  <template v-slot="{ result: { loading, error, data } }">

    <!-- Loading -->
    <div v-if="loading">Loading...</div>

    <!-- Error -->
    <div v-else-if="error">An error occured</div>

    <!-- Data -->
    <div v-else-if="data">
      <h1>Natas</h1>
      <p>
        The Natas wargame focusses on websecurity. It is developed in
        association with NESSoS FP7 Project. Because this wargame focusses on
        the web, I've created the writeups as html-pages. Some contain inline
        Javascript. Later I used a sepperate python script for working with
        requests/responses. This wargame is still unfinished.
      </p>
      <b-row class="justify-content-end">
        <b-link
          class="m-2 text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Thewessen/CTF/blob/master/OverTheWire/natas">
          view on GitHub
        </b-link>
        <b-link
          class="m-2 text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          href="https://overthewire.org/wargames/natas">
          view on OverTheWire
        </b-link>
      </b-row>
      <b-row
        v-for="level in data"
        :key="level.name">
        <CTFNatasSolution
          :html="level.html"
          :python="level.python" />
      </b-row>
    </div>
  </template>
  <b-button @click="$router.back()" class="m-4">Back</b-button>
  </ApolloQuery>
</template>

<script>
import CTFNatasSolution from './CTFNatasSolution'
export default {
  name: "CTFNatas",
  components: {
    CTFNatasSolution,
  },
  methods: {
    computedData (data) {
      return data.repository.files.entries
        .reduce((acc, entry, __, entries) => {
          if (!entry.name.endsWith('html')) {
            return acc
          }
          const lvl = entry.replace(/\D/g, '')
          const pyRegExp = new RegExp('\\D+' + lvl + '.py')
          const pyFile = entries
            .find(e => pyRegExp.test(e.name))
          return [...acc, {
            name: entry.name.replace('.html', ''),
            html: entry.name,
            python: pyFile ? pyFile.name : null
          }]
        }, [])
        .sort((a, b) => [a.name, b.name]
            .map(chars => Number(chars.replace(/\D/g, '')))
            .reduce((a, b) => a - b))
    }
  }
}
</script>
