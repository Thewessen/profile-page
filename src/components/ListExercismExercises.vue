<template>
  <!-- Loading -->
  <div v-if="loading">Loading...</div>

  <!-- Error -->
  <div v-else-if="error">An error occured</div>

  <!-- Data -->
  <b-list-group v-else-if="data">
    <b-list-group-item
      v-for="exercise in data"
      :key="exercise"
      :to="exercise"
      :append="true">
      <b-badge variant="secondary">
        <b-img
          v-bind="iconProps"
          :src="`https://assets.exercism.io/exercises/${exercise}-white.png`"/>
      </b-badge>
      <span class="ml-2">
        {{ exercise }}
      </span>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import repo from '../gateway/GitHubRepoAPI'
export default {
  name: 'ListExercismExercises',
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },
  data() {
    return {
      iconProps: {
        width: 48,
        height: 48
      },
      loading: false,
      error: false,
      data: null
    }
  },
  computed: {
    lang() {
      return this.language.toLowerCase()
    }
  },
  methods: {
    getExercises() {
      this.loading = true
      repo('hello-world')
        .get(`Exercism/${this.lang}`)
        .then(resp => {
          this.data = resp.data
            .filter(entry => entry.type === 'dir')
            .map(entry => entry.name)
          this.loading = false
        })
        .catch(() => { 
          this.loading = false
          this.error = true
        })
    }
  },
  watch: {
    lang() {
      this.getExercises()
    }
  },
  mounted() {
    this.getExercises()
  }
}
</script>

<style scoped>
.icon-container {
  display: inline-block;
  margin: -0.75rem 1.25rem calc(-0.75rem + 1px) -1.25rem;
  width: 48px;
  height: 48px;
}
</style>
