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
import Prism from 'prism-es6';

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
      return `language-${this.language}`;
    },
    lineNumbersCount() {
      return this.code.length;
    }
  },
  mounted() {
    Prism.highlightAllUnder(this.$refs.codeBlock);
    this.styleLineNumbers()
  },
  methods: {
    setLineNumbersHeight() {
      this.lineNumbersHeight = getComputedStyle(this.$refs.pre).height;
    },
    styleLineNumbers() {
      if (!this.lineNumbers) return;
      const $editor = this.$refs.pre;
      const $lineNumbers = this.$el.querySelector(
        ".code-highlight__line-numbers"
      );
      const editorStyles = window.getComputedStyle($editor);
      this.$nextTick(() => {
        const btlr = "border-top-left-radius";
        const bblr = "border-bottom-left-radius";
        $lineNumbers.style[btlr] = editorStyles[btlr];
        $lineNumbers.style[bblr] = editorStyles[bblr];
        $editor.style[btlr] = 0;
        $editor.style[bblr] = 0;
        const stylesList = [
          "background-color",
          "margin-top",
          "padding-top",
          "padding-bottom",
          "font-family",
          "font-size",
          "line-height"
        ];
        stylesList.forEach(style => {
          $lineNumbers.style[style] = editorStyles[style];
        });
        $lineNumbers.style["margin-bottom"] = "-" + editorStyles["padding-top"];
      });
    },
  },
  beforeUpdate() {
//    const newText = this.code.join('')
//    const newText = this.$slots.default[0].text.replace(/^[\r\n\s]*|[\r\n\s]*$/g, '');
//    this.$el.querySelector('code').textContent = newText;
//   Prism.highlightAllUnder(this.$refs.codeBlock);
  },
};
</script>

<style>
@import '../sass/code-highlight.css';

.code-highlight-wrapper code {
  font-family: inherit;
  line-height: inherit;
}
.code-highlight-wrapper {
  /* position: absolute; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  tab-size: 1.5em;
  -moz-tab-size: 1.5em;
  margin-bottom: 1rem;
}
.code-highlight__line-numbers {
  height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  margin-top: 0;
}
.code-highlight__line-number {
  /* padding: 0 3px 0 5px; */
  text-align: right;
  white-space: nowrap;
}
.code-highlight__code {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  flex-grow: 2;
  min-height: 100%;
  box-sizing: border-box;
  /* padding: 4px 2px 4px 8px; */
  tab-size: 4;
  -moz-tab-size: 4;
  outline: none;
}
pre.code-highlight__code:focus {
  outline: none;
}
</style>
