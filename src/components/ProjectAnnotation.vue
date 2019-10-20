<template>
  <div v-if="$apollo.loading">
    Fetching exercise from GitHub...
  </div>
  <article v-else>
    <ArticleHeading
      :title="title"
      :subtitle="subtitle"
      :github="`https://github.com/Thewessen/${repo}`" />
    <slot
      name="pre"
      :readme="readme">
    </slot>
    <h3>Using</h3>
    <ul v-if="languages.length > 0">
      <li
        v-for="(lang, index) in languages"
        :key="index">
        <img
          class="icon"
          :src="imgSrc(lang)" alt="" />
        <div>{{ lang }}</div>
      </li>
    </ul>
    <h3>The exercise</h3>
    <vue-markdown v-if="readme">{{ readme }}</vue-markdown>
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

export default {
  name: "ProjectAnnotation",
  data() {
    return {
      readme: ''
    }
  },
  props: {
    title: String,
    subtitle: {
      type: String, 
      default: ''
    },
    repo: String,
    languages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  apollo: {
    readme: {
      query: gql`query ($name: String) {
        repository(owner: "Thewessen", name: $name) {
          readme: object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }`,
      variables() {
        return {
          name: this.repo
        }
      },
      update: data => data.repository.readme.text
    },
  },
}
</script>
