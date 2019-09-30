<template>
  <div
    class="exercism-annotation-card"
    @click="$router.push({ name: exercise })">
    <div class="icon">
      <img
        :src="`https://assets.exercism.io/exercises/${exercise}-white.png`"
        alt="`${title} Exercism exercise`"/>
    </div>
    <div class="content">
      <header>
        <h3>{{ title }}</h3>
        <h5 v-if="language">{{ language }}</h5>
      </header>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
import upperFirst from 'lodash/upperFirst'
export default {
  name: "ExercismAnnotated",
  props: {
    exercise: String,
    language: String,
    routeName: String,
  },
  computed: {
    title() {
      return this.exercise
        .split('-')
        .map(upperFirst)
        .join(' ')
    }
  }
}
</script>

<style lang="sass" scoped>
.exercism-annotation-card
  display: flex
  flex-flow: row nowrap
  cursor: pointer
  margin-bottom: 2rem
  > .icon
    width: 4rem
    height: 4rem
    border-radius: 3px
    padding: 5px
    background-color: $turquoise
    > img
      width: 100%
  > .content
    > *
      margin: 0 1rem
    > header > *
      margin: 0
      padding: 0
</style>
