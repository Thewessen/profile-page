<template>
  <ApolloQuery
    :query="require('../graphql/CTFKryptonSolution.gql')"
    :update="computedData"
    :variables="{ level: lvl }">
    <template v-slot="{ result: { loading, error, data } }">

      <!-- Loading -->
      <div v-if="loading">Loading...</div>

      <!-- Error -->
      <div v-else-if="error">An error occured</div>

      <!-- Data -->
      <div class="row" v-else-if="data">
        <code-highlight :lineNumbers="false">{{ data }}</code-highlight>
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight'
export default {
  name: "CTFKrypton",
  components: {
    CodeHighlight
  },
  props: {
    level: String
  },
  computed: {
    lvl() {
      return `master:OverTheWire/krypton/${this.level}/solution_${this.level}`
    }
  },
  methods: {
    computedData (data) {
      return data.repository.object.text
    }
  }
}
</script>
