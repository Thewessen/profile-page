<template functional>
  <header>
    <div>
      <h1>{{ props.title }}</h1>
      <h5 v-if="props.subtitle">{{ props.subtitle }}</h5>
    </div>
    <ext-link :url="props.github">
      view on GitHub
    </ext-link>
  </header>
</template>

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
