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
        <ul>
          <li>
            <ext-link url="https://github.com/Thewessen/CTF/blob/master/OverTheWire/natas">
              view on GitHub
            </ext-link>
          </li>
          <li>
            <ext-link url="https://overthewire.org/wargames/natas">
              view on OverTheWire.org
            </ext-link>
          </li>
        </ul>
        <p>
          The Natas wargame focusses on websecurity. It is developed in
          association with NESSoS FP7 Project. Because this wargame focusses on
          the web, I've created the writeups as html-pages. Some contain inline
          Javascript. Later I used a sepperate python script for working with
          requests/responses. This wargame is still unfinished.
        </p>
        <div
          class="mb-2"
          v-for="level in data"
          :key="level.name">
          <CTFNatasSolution
            :html="level.html"
            :python="level.python" />
        </div>
        <ButtonBack />
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import CTFNatasSolution from '@/components/CTFNatasSolution'
import ButtonBack from '@/components/ButtonBack'
import ExtLink from '@/components/ExternLink'
export default {
  name: "CTFNatas",
  components: {
    CTFNatasSolution,
    ButtonBack,
    ExtLink,
  },
  methods: {
    computedData (data) {
      return data.repository.files.entries
        .reduce((acc, entry, __, entries) => {
          if (!entry.name.endsWith('html')) {
            return acc
          }
          const lvl = entry.name.replace(/\D/g, '')
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
