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
    <div class="image-text-block">
      <div class="m-2">
        Especially combined with reading the book <em>Exploring ES6</em>, which
        covers most (if not all) of the changes made in JavaScript when
        launching EcmaScript 6. Especially generators and destructuring were
        topics that really excited me. To the poin that someone commented on
        the OCR-numbers solution from Exercism:
        <blockquote
          cite="https://exercism.io/tracks/javascript/exercises/ocr-numbers/solutions/05b98c8b07584a74a41df2da269986cf">
          can you explain the extensive use of generators in this solution?
        </blockquote>
      </div>
      <img
        class="cover"
        src="@/assets/exploringes6.png"
        alt="Exploring ES6">
    </div>
    <p>
      I really love the fibrent community around Exercism. People asking
      questions about your code, or just giving compliments about the way the
      code is written. Most of the people I've on Exercism are pretty quick in
      response, when you have a question. And you can see some really ellegant
      solutions of different people.
    </p>
    <p>
      Because most of the exercises are really small, I enjoyed solving them in
      the most elegant way as possible. Often rewriting my first solution
      attempt. I really like people who feel the same about the exercises found
      here.
    </p>
    <h2>Annotated solutions</h2>
    <ExercismAnnotatedCard
      exercise="matching-brackets"
      language="JavaScript">
      Elegant code lovers.
    </ExercismAnnotatedCard>
    <ExercismAnnotatedCard
      exercise="robot-name"
      language="JavaScript">
      Only the bonus counts!
    </ExercismAnnotatedCard>
    <ExercismAnnotatedCard
      exercise="bowling"
      language="JavaScript">
      GENERATORS: pushing and pulling.
    </ExercismAnnotatedCard>
    <h2>All solutions</h2>
    <ButtonList
      :active="language"
      :graphql="require('../graphql/ExercismLanguages.gql')"
      baseURL="/Exercism"
      variant="turquoise" />
    <ListExercismExercises
      :language="language" />
  </article>
</template>

<script>
import ButtonList from '@/components/ButtonList'
import ListExercismExercises from '@/components/ListExercismExercises'
import ExercismAnnotatedCard from '@/components/ExercismAnnotatedCard'
export default {
  name: "Exercism",
  components: {
    ButtonList,
    ListExercismExercises,
    ExercismAnnotatedCard,
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

<style lang="sass" scoped>
.image-text-block
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  > img
    margin: 1em
    max-width: 20%

.m-2
  margin: 1em 0

img.cover
  object-fit: cover
</style>
