<template>
  <div v-if="$apollo.loading">
    Fetching exercise from GitHub...
  </div>
  <article v-else>
    <ArticleHeading
      :title="title"
      :subtitle="language"
      :github="`https://github.com/Thewessen/hello-world/blob/master/Exercism/${lang}/${exercise}`" />
    <slot name="pre"></slot>
    <h3>The exercise</h3>
    <vue-markdown v-if="explenation">{{ explenation }}</vue-markdown>
    <slot
      name="content"
      v-if="data"
      :solution="solution"
      :explenation="explenation">
    </slot>
    <h3>Solution</h3>
    <CodeHighlight v-if="solution">{{ solution }}</CodeHighlight>
    <slot
      name="after"
      v-if="data"
      :solution="solution"
      :explenation="explenation"></slot>
    <ButtonBack />
  </article>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight'
import VueMarkdown from 'vue-markdown'
import ArticleHeading from '@/components/ArticleHeading'
import ButtonBack from '@/components/ButtonBack'
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
  components: {
    CodeHighlight,
    VueMarkdown,
    ArticleHeading,
    ButtonBack,
  },
  computed: {
    title() {
      return this.exercise
        .split('-')
        .map(upperFirst)
        .join(' ')
    },
    lang() {
      return this.language.toLowerCase()
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
          path: `master:Exercism/${this.lang}/${this.exercise}/README.md` 
        }
      },
      update: data => {
        const content = data.repository.explenation.text
        return content.slice(content.indexOf('\n') + 1, content.indexOf('## Setup'))
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
          path: `master:Exercism/${this.lang}/${this.exercise}/${this.exercise}.js`
        }
      },
      update: data => data.repository.solution.text
    },
  },
}
</script>
