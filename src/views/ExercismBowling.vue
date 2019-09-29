<template>
  <article>
    <ExercismAnnotation
      exercise="bowling"
      language="JavaScript">
      <template #pre>
        <p>
          Finally found an exercise on Exercism.io that lets me utilize the
          pushing and pulling abilities of generators. This exercise gave me the
          oppertunity to work with the idea of passing an argument to the
          <code>.next()</code> method of an iteratable object. Thereby pushing
          data into the iterable to work with. The generator also
          <code>yield</code>s some value, which is the pulling part (getting
          data out from the iterable). The idea of working with generators in
          this way inspired by the book <em>Exploring ES6</em>.
        </p>
        <p>
          And did I mentions recursiveness? Indeed! Generators can be used
          recursive. And it is possible to iterate over other generator
          functions inside a generator. Isn't that awesome! Literaly stars
          everywhere.
        </p>
      </template>
      <template
        #content="{ solution }">
        <h3>Recursively pushing and pulling</h3>
        <p>
          Before looking at the solution (which isn't particular pretty), lets
          look at the awesomeness of generators. The next method you are
          about to see is the <code>play</code> generator method of the
          <code>Frame</code> class. It recursively let's you throw the ball two
          times, after which the current frame <code>this</code> is returned.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="48">{{ getLines(solution, 48, 60) }}</CodeHighlight>
        <p>
          Take a closer look at <em>line 53</em>:
          <code>this.roll(yield total + this.score)</code>.
        </p>
        <p>
          <code>Yield</code> as an argument of a method call?!? Whell, not
          exactly. <code>Yield</code> only stops the function execution at this
          point, and <code>yield</code>'s the total score of the game thus far.
          Only after it receives a value through the iterables
          <code>.next()</code> method argument, it continues with the
          execution, passing the value received to the method
          <code>this.roll()</code>. In <em>Exploring ES6</em> this is refered
          to as the <strong>pushing and pulling</strong> capabilities of
          generators.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="67">{{ getLines(solution, 67, 77) }}</CodeHighlight>
        <p>
          Another awesome recursive generator method (static this time). Is it
          wrong if I enjoy this much enthousiasm over recursive generators? On
          <em>line 72</em> the method <code>.play()</code>, which we saw
          earlier, gets iterated over. Hence this <code>static * frames()</code>
          method, from the <code>Bowling class</code>, gives each new Frame two
          throws. The <code>total(scores)</code> get's passed as an argument
          only to <code>yield</code> an intermediate value. It generates new
          frames until the number of frames is equal to the
          <code>FRAMECOUNT</code>, which in this case is ten.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="78">{{ getLines(solution, 78, 96) }}</CodeHighlight>
        <p>
          In the last static method of the <code>Bowling class</code> the full
          game is played. First iterating over each regular frame. In the end
          some adjustments for the last frame and fillball are made. On the
          last line we return the <code>total(scores)</code> (instead of
          <code>yield</code>ing). We want this generator method to immediatly
          return <code>{ done: true }</code> when the last value is returned,
          so we don't have to ask for the <code>.next()</code> value to find
          out if the game is done or not.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="64">{{ getLines(solution, 64) }}</CodeHighlight>
        <p>
          We store the status on of the <code>this.game</code> iterable object
          directly on the <code>Bowling</code> object itself. This way we can
          refer to the status directly when asked for a <code>score()</code>.
          This way, we don't have to call <code>this.game.next()</code> to find
          out if the game is done (which would break the game if it isn't).
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
  data() {
    return {
      solution: false,
    }
  },
  components: {
    CodeHighlight,
    ExercismAnnotation,
  },
  methods: {
    getLines,
  },
}
</script>
