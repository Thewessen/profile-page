<template>
  <header>
    <div>
      <h1>{{ title }}</h1>
      <h5 v-if="subtitle">{{ subtitle }}</h5>
    </div>
    <ext-link :url="github">
      view on GitHub
    </ext-link>
  </header>
</template>

<script>
export default {
  name: "ArticleHeader",
  props: {
    title: String,
    subtitle: {
      type: String,
      default: ''
    },
    github: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="sass" scoped>
header
  margin: 2rem 0
  display: flex
  flex-flow: column nowrap
  @include respond-to('extra-small')
    flex-flow: row nowrap
    justify-content: space-between
    align-items: flex-start
  h1, h5
    margin: 0
    padding: 0

a
  text-decoration: none
  color: grey
</style>
