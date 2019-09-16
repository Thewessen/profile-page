<template>
  <div class="about">
    <ListExercismLanguages
     @set-language="setLanguage" />
    <ListExercismExercises
      :language="language" />
  </div>
</template>

<script>
import ListExercismExercises from '../components/ListExercismExercises'
import ListExercismLanguages from '../components/ListExercismLanguages'
export default {
  name: "About",
  components: {
    ListExercismExercises,
    ListExercismLanguages
  },
  data() {
    return {
      language: 'javascript'
    }
  },
  methods: {
    setLanguage(language) {
      this.language = language
    }
  }
}
</script>
