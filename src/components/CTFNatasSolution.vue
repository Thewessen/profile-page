<template>
  <ApolloQuery
    :query="require('../graphql/CTFNatasSolution.gql')"
    :update="computedData"
    :variables="{ html: solution, python: script }">
    <template v-slot="{ result: { loading, error, data } }">

      <!-- Loading -->
      <div v-if="loading">Loading...</div>

      <!-- Error -->
      <div v-else-if="error">An error occured</div>

      <!-- Data -->
      <div v-else-if="data">
        <div v-html="data.html"></div>
        <div v-if="data.python">
          <h5>Additional script</h5>
          <code-highlight :lineNumbers="false">{{ data.python }}</code-highlight>
        </div>
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight'
export default {
  name: "CTFNatas",
  components: {
    CodeHighlight,
  },
  props: {
    html: String,
    python: {
      type: String,
      default: ''
    }
  },
  computed: {
    solution() {
      return `master:OverTheWire/natas/${this.html}`
    },
    script() {
      return `master:OverTheWire/natas/${this.python}`
    }
  },
  methods: {
    computedData (data) {
      const pyFile = data.repository.python
      return {
        html: data.repository.html.text,
        python: pyFile ? pyFile.text : null
      }
    }
  }
}
</script>
