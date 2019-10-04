<template>
  <div v-if="$apollo.loading">
    Fetching exercise from GitHub...
  </div>
  <article v-else>
    <ArticleHeading
      :title="title"
      :subtitle="language"
      :github="`https://github.com/Thewessen/hello-world/blob/master/Exercism/${lang}/${exerc}`" />
    <slot
      name="pre"
      :solution="solution"
      :explenation="explenation">
    </slot>
    <h3>The exercise</h3>
    <vue-markdown v-if="explenation">{{ explenation }}</vue-markdown>
    <slot
      name="content"
      :solution="solution"
      :explenation="explenation">
    </slot>
    <h3>Solution</h3>
    <CodeHighlight v-if="solution">{{ solution }}</CodeHighlight>
    <slot
      name="after"
      :solution="solution"
      :explenation="explenation"></slot>
    <ButtonBack />
  </article>
</template>

<script>
import gql from 'graphql-tag'
import upperFirst from 'lodash/upperFirst'

export default {
  name: "ExercismAnnotation",
  data() {
    return {
      explenation: '',
      solution: '',
    }
  },
  props: {
    exercise: String,
    language: String
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
    title() {
      return this.exercise
        .split('-')
        .map(upperFirst)
        .join(' ')
    },
    lang() {
      return this.language.toLowerCase()
    },
    exerc() {
      return this.exercise.toLowerCase()
    },
    data() {
      return !this.$apollo.loading
    }
  },
  apollo: {
    explenation: {
      query: gql`query ($path: String) {
        repository(owner: "Thewessen", name: "hello-world") {
          explenation: object(expression: $path) {
            ... on Blob {
              text
            }
          }
        }
      }`,
      variables() {
        return {
          path: `master:Exercism/${this.lang}/${this.exerc}/README.md` 
        }
      },
      update(data) {
        const { text } = data.repository.explenation
        if (this.lang === 'python') {
          return text.slice(
            text.indexOf('\n') + 1,
            text.indexOf('## Exception')
          )
        }
        return text.slice(
          text.indexOf('\n') + 1,
          text.indexOf('## Setup')
        )
      }
    },
    solution: {
      query: gql`query ($path: String) {
        repository(owner: "Thewessen", name: "hello-world") {
          solution: object(expression: $path) {
            ... on Blob {
              text
            }
          }
        }
      }`,
      variables() {
        return {
          path: `master:Exercism/${this.lang}/${this.exerc}/${this.exerciseFile}`
        }
      },
      update: data => data.repository.solution.text
    },
  },
}
</script>
