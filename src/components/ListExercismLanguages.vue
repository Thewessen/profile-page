<template>
  <!-- Data -->
  <b-button-group
    v-if="data">
    <b-button
      variant="outline-light"
      v-for="lang in data"
      :key="lang"
      :to="`/Exercism/${lang}`"
      :pressed="lang === language">{{ lang }}</b-button>
  </b-button-group>
</template>

<script>
import repo from '../gateway/GitHubRepoAPI'
export default {
  name: 'ListExercismLanguages',
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },
  data() {
    return {
      data: null
    }
  },
  computed: {
    lang() {
      return this.language.toLowerCase()
    }
  },
  methods: {
    getLanguages() {
      repo('hello-world')
        .get('Exercism')
        .then(resp => {
          this.data = resp.data
            .filter(entry => entry.type === 'dir')
            .map(entry => entry.name)
        })
        .catch(() => {})
    }
  },
  watch: {
    lang() {
      this.getLanguages()
    }
  },
  mounted() {
    this.getLanguages()
  }
}
</script>
