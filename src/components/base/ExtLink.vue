<template>
  <a
    :href="url"
    rel="noopener noreferrer"
    v-bind="target">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "ext-link",
  props: {
    url: String,
    blank: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    target() {
      return this.blank
        ? { target: '_blank' }
        : {}
    }
  }
}
</script>
