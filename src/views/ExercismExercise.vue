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
        <ButtonBack />
      </article>
    </template>
  </ApolloQuery>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight'
import VueMarkdown from 'vue-markdown'
import ArticleHeading from '@/components/ArticleHeading'
import ButtonBack from '@/components/ButtonBack'
import upperFirst from 'lodash/upperFirst'

export default {
  name: "ExercismExercise",
  props: {
    exercise: String,
    language: String,
    previous: {
      type: String,
      default: null
    },
    next: {
      type: String,
      default: null
    },
  },
  components: {
    CodeHighlight,
    VueMarkdown,
    ArticleHeading,
    ButtonBack,
  },
  computed: {
    exerciseFile() {
      const ext = {
        'python': 'py',
        'javascript': 'js',
        'typescript': 'ts'
      }
      let exercise = this.exerc
      if (this.lang === 'python') {
        exercise = exercise.replace('-', '_')
      }
      return `${exercise}.${ext[this.lang]}`
    },
    lang() {
      return this.language.toLowerCase()
    },
    exerc() {
      return this.exercise.toLowerCase()
    },
    title() {
      return upperFirst(this.exercise)
    },
    explenation() {
      return `master:Exercism/${this.lang}/${this.exerc}/README.md`
    },
    solution() {
      return `master:Exercism/
        ${this.lang}/
        ${this.exerc}/
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
