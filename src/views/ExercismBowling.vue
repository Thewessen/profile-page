<template>
  <article>
    <ExercismAnnotation
      exercise="bowling"
      language="JavaScript">
      <template #pre>
        <p>
          Finally found an Exercise on Exercism.io where using generators
          extensively isn't that bad. This exercise gave me the oppertunity to
          work with the idea of passing an argument to the <code>.next()</code>
          method of an iteratable object. Thereby pushing data into the
          iterable to work with. The generator also <code>yield</code>s some
          value, which is the pulling part (getting data out from the iterable).
          The idea of working with generators in this way inspired by the book
          <em>Exploring ES6</em>.
        </p>
      </template>
      <template #content="{ solution }">
        <h3>Pushing and pulling</h3>
        <p>
          Before looking at the solution (which isn't particular pretty) I want
          to point at the pushing and pulling abilities of generators. The
          <code>class Bowling</code> has a static generator method called
          <code>start</code>. The iteratable object <code>yield</code>s the
          game score, and waits until next pins are rolled. When it recieves
          the next pins, it calculates the score at that time,
          <code>yield</code>s its value, and waits again for the next pins.
          Over and over until the game is over. Isn't that pretty?!?
        </p>
        <CodeHighlight
          :startLineNumbers="22">{{ getLines(solution, 22) }}</CodeHighlight>
        <CodeHighlight :lineNumbers="false">...</CodeHighlight>
        <CodeHighlight
          :startLineNumbers="61">{{ getLines(solution, 60) }}</CodeHighlight>
        <p>
          In this little code snippit, <code>this.game</code> is the iteratable
          object property of the <code>class Bowling</code>. It pushes the
          rolled over pins to the iteratable object. The pins are received
          by the <code>Bowling.check</code>, which is a little helper function
          to check if the pins don't excede the maximum count. If this
          succeeds, the value is stored in the variable <code>pins</code>.
        </p>
        <p>
          The <code>scores</code> array starts of empty, hence we
          <code>reduce</code> with an initial value of zero.
        </p>
      </template>
    </ExercismAnnotation>
  </article>
</template>

<script>
import ExercismAnnotation from '@/components/ExercismAnnotation'
import CodeHighlight from '@/components/CodeHighlight'
import getLines from '@/helpers/getLines'

export default {
  name: "ExercismRobotName",
  components: {
    CodeHighlight,
    ExercismAnnotation,
  },
  methods: {
    getLines,
  },
}
</script>
