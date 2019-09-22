<template>
  <div class="about">
    <b-navbar :sticky="true" type="dark" variant="info">
      <b-navbar-brand>Exercism</b-navbar-brand>

      <b-navbar-nav class="ml-auto mr-2">
        <ListExercismLanguages
          :language="language" />
      </b-navbar-nav>
    </b-navbar>
    <ListExercismExercises
      :language="language" />
  </div>
</template>

<script>
import ListExercismExercises from '@/components/ListExercismExercises'
import ListExercismLanguages from '@/components/ListExercismLanguages'
export default {
  name: "Exercism",
  components: {
    ListExercismExercises,
    ListExercismLanguages
  },
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },
  methods: {
    setLanguage(language) {
      this.language = language
    }
  }
}
</script>
