<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
    <img
      :class="imageClass"
      :src="url"
      alt="alt">
  </div>
</template>

<script>
export default {
  name: "ImageTextBlock",
  props: {
    url: String,
    alt: {
      type: String,
      default: 'An image should be here'
    },
    position: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    imageClass() {
      if (this.position === 'left') {
        return { order: 1 }
      }
      return { order: 3 }
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  flex-flow: row nowrap
  width: 100%

.content
  width: 100%
  @include respond-to('small')
    width: 80%

img
  max-width: 100%
  @include respond-to('small')
    max-width: 20%
</style>
