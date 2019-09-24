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
      <article v-else-if="data">
        <ArticleHeading
          :title="title"
          :subtitle="language"
          :github="`https://github.com/Thewessen/hello-world/blob/master/Exercism/${lang}/${exercise}`" />
        <vue-markdown>{{ data.explenation }}</vue-markdown>
        <h2>Solution</h2>
        <code-highlight>{{ data.solution }}</code-highlight>
        <button
          @click="$router.back()">
          Back
        </button>
      </article>
    </template>
  </ApolloQuery>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight'
import VueMarkdown from 'vue-markdown'
import ArticleHeading from '@/components/ArticleHeading'
import upperFirst from 'lodash/upperFirst'

export default {
  name: "ExercismExercise",
  props: {
    exercise: String,
    language: String,
  },
  components: {
    CodeHighlight,
    VueMarkdown,
    ArticleHeading,
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
    title() {
      return upperFirst(this.exercise)
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
        text = text.slice(
          text.indexOf('\n'),
          text.indexOf('## Exception')
        )
      } else {
        text = text.slice(
          text.indexOf('\n'),
          text.indexOf('## Setup')
        )
      }
      return {
        explenation: text,
        solution: solution.text
      }
    }
  }
}
</script>

<style lang="sass" scoped>
button
  background-color: $white
  font-family: $monospace
  border: 1px solid $turquoise
  font-size: 1.3rem
  border-radius: 3px
  padding: .5rem 2rem
  margin: 2rem 0
  &:hover
    color: $white
    background-color: $turquoise

</style>
