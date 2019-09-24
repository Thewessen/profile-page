<template>
<div ref="codeBlock" class="code-highlight-wrapper">
  <div
    class="code-highlight__line-numbers"
    aria-hidden="true"
    v-if="lineNumbers"
    :style="{ 'min-height': lineNumbersHeight }"
  >
    <div
      class="code-highlight__line-width-calc"
      style="height: 0px; visibility: hidden; pointer-events: none;"
    >
      999
    </div>
    <div
      class="code-highlight__line-number token comment"
      v-for="line in lineNumbersCount"
      :key="line"
    >
      {{ Number(line) + Number(startLineNumbers) }}
    </div>
  </div>
  <pre
    ref="pre"
    :class="languageClass"
    ><code>{{ this.code.join('\n') }}</code></pre></div>
</template>

<script>
import Prism from 'prism-es6'

export default {
  name: 'code-highlight',
  props: {
    lineNumbers: {
      type: Boolean,
      default: true
    },
    startLineNumbers: {
      type: Number,
      default: 0
    },
    language: {
      type: String,
      default: 'javascript',
    },
  },
  data() {
    return {
      lineNumbersHeight: "16px"
    }
  },
  computed: {
    code() {
      return this.$slots.default[0].text.trim().split(/\r\n|\n/)
    },
    languageClass() {
      return `language-${this.language}`
    },
    lineNumbersCount() {
      return this.code.length
    }
  },
  mounted() {
    Prism.highlightAllUnder(this.$refs.codeBlock)
    this.styleLineNumbers()
  },
  methods: {
    setLineNumbersHeight() {
      this.lineNumbersHeight = getComputedStyle(this.$refs.pre).height
    },
    styleLineNumbers() {
      if (!this.lineNumbers) return
      const $editor = this.$refs.pre
      const $lineNumbers = this.$el.querySelector(
        ".code-highlight__line-numbers"
      )
      const editorStyles = window.getComputedStyle($editor)
      this.$nextTick(() => {
        const btlr = "border-top-left-radius"
        const bblr = "border-bottom-left-radius"
        $lineNumbers.style[btlr] = editorStyles[btlr]
        $lineNumbers.style[bblr] = editorStyles[bblr]
        $editor.style[btlr] = 0
        $editor.style[bblr] = 0
        const stylesList = [
          "margin-top",
          "padding-top",
          "padding-bottom",
          "font-family",
          "font-size",
          "line-height"
        ]
        stylesList.forEach(style => {
          $lineNumbers.style[style] = editorStyles[style]
        })
        $lineNumbers.style["margin-bottom"] = "-" + editorStyles["padding-top"]
      })
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../sass/code-highlight.css'

.code-highlight-wrapper
  display: flex
  align-items: flex-start
  width: inherit
  border-radius: 3px
  overflow: hidden
  code
    font-family: inherit
    line-height: inherit

.code-highlight__line-number
  text-align: right
  white-space: nowrap

.code-highlight__line-numbers
  background-color: #333
  padding-right: 8px
</style>
