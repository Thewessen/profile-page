<template>
  <div class="container">
    <div class="main">
      <h2>{{ title }}</h2>
      <slot></slot>
    </div>
    <div class="side">
      <ul>
        <li
          v-for="(lang, index) in languages"
          :key="index">
          <img
            class="icon"
            :src="imgSrc(lang)" alt="" />
          {{ lang }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBlockLayout",
  props: {
    title: {
      type: String,
      default: ''
    },
    languages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgSrc(language) {
      const logos = require.context('../assets/logos/', false, /\.png$/)
      return logos(`./${language.toLowerCase()}logo.png`)
    }
  }
}
</script>

<style lang="sass" scoped>
ul {
  list-style-type: none;
  li {
    margin-bottom: 1rem;
  }
}
.icon {
  
}

</style>
