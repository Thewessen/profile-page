<template>
  <article>
    <ArticleHeading
      title="Matching Brackets"
      subtitle="JavaScript"
      github="https://github.com/Thewessen/hello-world/blob/master/Exercism/javascript/matching-brackets" />
    <p>
      Their are some great people on Exercism, and I really like it when they
      share their enthousiasm about good code. It motivates to search for the
      most elegant solution. While also viewing whell writen code by others.
      The next solution is an elegant solution from my own.
    </p>
    <figure>
      <img
        src="@/assets/exercism-brackets-comment.jpg"
        alt="A comment from the Exercism community">
      <figcaption>
        comment from the Exercism community
      </figcaption>
    </figure>
    <h3>The exercise</h3>
    <vue-markdown v-if="explenation">{{ explenation }}</vue-markdown>
    <h3>Solution</h3>
    <CodeHighlight v-if="solution">{{ solution }}</CodeHighlight>
    <h3>The story</h3>
    <p>
      There is some story behind it though. While I was bussy trying to solve
      this exercise recursivly, and failing hard, a friend started solving the
      same exercise on the Python track. He completed the exercise very
      quickly, very elegant and not recursive. It was at that point I abbandoned
      the idea of making a recursive function myself, and just solve the
      problem.
    </p>
    <p>
      In this solution, the idea was born to just remove two simular pair of
      brackets next to each other. With a simple
      <code>while (brackets !== '')</code> loop I completed the solution.
    </p>
    <p>
      My friend looked at my code and stated: "Dude.. this is recursive.. you
      accomplished what you were trying to do all along." I stared at my
      solution again and laughed out loud, not being able to see it the
      first time. Hence, I am not sololy responsible for this solution.
    </p>
    <button
      @click="$router.back()">
      Back
    </button>
  </article>
</template>

<script>
import CodeHighlight from '@/components/CodeHighlight'
import VueMarkdown from 'vue-markdown'
import ArticleHeading from '@/components/ArticleHeading'
import gql from 'graphql-tag'
export default {
  name: "ExercismRobotName",
  data() {
    return {
      explenation: '',
      solution: '',
    }
  },
  components: {
    CodeHighlight,
    VueMarkdown,
    ArticleHeading,
  },
  apollo: {
    explenation: {
      query: gql`query {
        repository(owner: "Thewessen", name: "hello-world") {
          explenation: object(expression: "master:Exercism/javascript/matching-brackets/README.md") {
            ... on Blob {
              text
            }
          }
        }
      }`,
      update: data => {
        const content = data.repository.explenation.text
        return content.slice(content.indexOf('\n') + 1, content.indexOf('## Setup'))
      }
    },
    solution: {
      query: gql`query {
        repository(owner: "Thewessen", name: "hello-world") {
          solution: object(expression: "master:Exercism/javascript/matching-brackets/matching-brackets.js") {
            ... on Blob {
              text
            }
          }
        }
      }`,
      update: data => data.repository.solution.text
    },
  },
}
</script>

<style lang="sass" scoped>
img
  max-width: 100%;

figure
  margin: 0
  margin-bottom: 1rem
  width: fit-content

figcaption
  font-weight: 300
  color: grey
  width: 100%

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
