<template>
  <ApolloQuery
    :query="require('../graphql/ExercismExercise.gql')"
    :update="computedData"
    :variables="{ explenation, solution }">
  <template v-slot="{ result: { loading, error, data } }">

    <!-- Loading -->
    <div v-if="loading">Loading...</div>

    <!-- Error -->
    <div v-else-if="error">An error occured</div>

    <!-- Data -->
    <div v-else-if="data">
      <b-row>
        <h5 class="mb-4">{{ language }}</h5>
        <b-link
          class="ml-auto text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          :href="`https://github.com/Thewessen/hello-world/blob/master/Exercism/${lang}/${exercise}`">
          view on GitHub
        </b-link>
      </b-row>
      <vue-markdown>{{ data.explenation }}</vue-markdown>
      <h2>Solution</h2>
      <code-highlight>{{ data.solution }}</code-highlight>
    </div>
  </template>
  <b-button :to="`/Exercism/${language}`" class="m-4">Back</b-button>
  </ApolloQuery>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight'
import VueMarkdown from 'vue-markdown'
export default {
  name: "ExercismExercise",
  props: {
    exercise: String,
    language: String,
  },
  components: {
    CodeHighlight,
    VueMarkdown,
  },
  computed: {
    exerciseFile() {
      const ext = {
        'python': 'py',
        'javascript': 'js',
        'typescript': 'ts'
      }
      let exercise = this.exercise
      if (this.lang === 'python') {
        exercise = exercise.replace('-', '_')
      }
      return `${exercise}.${ext[this.lang]}`
    },
    lang() {
      return this.language.toLowerCase()
    },
    explenation() {
      return `master:Exercism/${this.lang}/${this.exercise}/README.md`
    },
    solution() {
      return `master:Exercism/
        ${this.lang}/
        ${this.exercise}/
        ${this.exerciseFile}`
        .replace(/\n| /g, '')
    }
  },
  methods: {
    computedData (data) {
      let { explenation: { text }, solution } = data.repository
      if (this.lang === 'python') {
        text = text.slice(0, text.indexOf('## Exception'))
      } else {
        text = text.slice(0, text.indexOf('## Setup'))
      }
      return {
        explenation: text,
        solution: solution.text
      }
    }
  }
}
</script>
