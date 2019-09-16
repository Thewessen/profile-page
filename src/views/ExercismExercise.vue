<template>
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
        :href="`https://github.com/Thewessen/tree/master/Exercism/${lang}/${exerciseFile}`">
        view on GitHub
      </b-link>
    </b-row>
    <vue-markdown>{{ data.explenation }}</vue-markdown>
    <h2>Solution</h2>
    <code-highlight>{{ data.solution }}</code-highlight>
    <b-button :to="`/Exercism/${language}`" class="m-4">Back</b-button>
  </div>
</template>

<script>
import CodeHighlight from '../components/CodeHighlight'
import VueMarkdown from 'vue-markdown'
import repo from '../gateway/GitHubRepoAPI'
export default {
  name: "ExercismExercise",
  props: {
    exercise: String,
    language: String,
  },
  data() {
    return {
      loading: false,
      error: false,
      data: null
    }
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
      return `${this.exercise}.${ext[this.lang]}`
    },
    lang() {
      return this.language.toLowerCase()
    },
  },
  methods: {
    getExercise() {
      this.loading = true
      Promise.all([
        repo('hello-world').get(`Exercism/${this.lang}/${this.exercise}/${this.exerciseFile}`),
        repo('hello-world').get(`Exercism/${this.lang}/${this.exercise}/README.md`)
      ])
        .then(all => {
          let [ solution, explenation] = all
            .map(entry => atob(entry.data.content))
          if (this.lang === 'python') {
            explenation = explenation
              .slice(0, explenation.indexOf('## Exception'))
          } else {
            explenation = explenation
              .slice(0, explenation.indexOf('## Setup'))
          }
          this.data = { solution, explenation }
          this.loading = false
        })
        .catch(() => { 
          this.error = true
        })
    }
  },
  watch: {
    lang() {
      this.getExercise()
    }
  },
  mounted() {
    this.getExercise()
  }
}
</script>
