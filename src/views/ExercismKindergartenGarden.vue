<template>
  <article>
    <ExercismAnnotation
      exercise="kindergarten-garden"
      language="Python">
      <template
        #pre="{ solution }">
        <p>
          Oh my, Python can be such a beautiful and expressive language: no
          noise (like <code>{}</code>, <code>;</code>, <code>$</code> or
          <code>var</code>), spoken language driven syntax (like
          <code>and</code> and/or <code>or</code>) and working naturally with
          different types of data (e.g.  multiplying and adding lists
          together). What I like the most about Python is the expressive list
          comprehension syntax. It just makes code so beautiful and readable!
        </p>
        <p>
          Take for example the next code snippet. List comprehensions can be
          used inside dictionaries to create a big dictionary with just a few
          lines of code. In this snippet, <code>child</code> and
          <code>plants</code> get destructured out of the native
          <code>zip</code> function and placed as key/value pairs on the
          <code>self.garden</code> property. 
        </p>
        <CodeHighlight
          :startLineNumbers="15">{{ getLines(solution, 15, 22) }}</CodeHighlight>
        <p>
          On <em>line 20</em> you can also see the multiplying
          and adding of lists, spreading them as arguments with a simple
          prepended <code>*</code>. Even better, just take the iteratable
          object out of an iterable with the native <code>iter()</code>
          function (in comparison with JavaScripts
          <code>[Symbol.iterator]()</code> method).
        </p>
        <p>
          Beautiful, isn't it? So much power in such a few lines of code. The rest
          of the solution just builds around these few lines. If you want to
          know more about the context of this code snippet, and the meaning of all the
          variables, please read on. Following the explenation and solution of the exercise.
        </p>
      </template>
    </ExercismAnnotation>
  </article>
</template>

<script>
import ExercismAnnotation from '@/components/ExercismAnnotation'
import getLines from '@/helpers/getLines'

export default {
  name: "ExercismKindergartenGarden",
  data() {
    return {
      solution: '',
    }
  },
  components: {
    ExercismAnnotation,
  },
  methods: {
    getLines,
  },
}
</script>
