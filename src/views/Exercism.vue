<template>
  <article>
    <h1>Exercism</h1>
    <p>
      <a href="https://exercism.io">Exercism.io</a> is a great website for
      doing exercises in different kind of programming languages. It has over
      fifty language track, with some more then a hundred exercises. All
      exercises are pretty small, and could be done in one day. It is also
      possible to view other peoples solutions, making it a great place
      learning any programming language you like.
    </p>
    <ImageTextBlock
      url="../assets/exploringes6.png"
      alt="Exploring ES6"
      position="right">
      <p>
        Especially combined with reading the book <em>Exploring ES6</em>
      </p>
    </ImageTextBlock>
    <ListExercismLanguages
      :language="language" />
    <ListExercismExercises
      :language="language" />
  </article>
</template>

<script>
import ImageTextBlock from '@/components/ImageTextBlock'
import ListExercismExercises from '@/components/ListExercismExercises'
import ListExercismLanguages from '@/components/ListExercismLanguages'
export default {
  name: "Exercism",
  components: {
    ImageTextBlock,
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
