<template functional>
  <ApolloQuery
    :query="require('../graphql/CTFKryptonSolution.gql')"
    :update="data => data.repository.object.text"
    :variables="{ level: `master:OverTheWire/krypton/${props.level}/solution_${props.level}`}">
    <template v-slot="{ result: { loading, error, data } }">

      <!-- Loading -->
      <div v-if="loading">Loading...</div>

      <!-- Error -->
      <div v-else-if="error">An error occured</div>

      <!-- Data -->
      <div v-else-if="data">
        <code-highlight :lineNumbers="false">{{ data }}</code-highlight>
      </div>
    </template>
  </ApolloQuery>
</template>
