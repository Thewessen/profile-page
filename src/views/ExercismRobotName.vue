<template>
  <article>
    <ExercismAnnotation
      exercise="robot-name"
      language="JavaScript">
      <template #content="{ solution }">
        <h3>First attempt</h3>
        <CodeHighlight
          v-if="typeof firstAttempt === 'string'"
          :startLineNumbers="38">{{ getLines(firstAttempt, 38, 57) }}</CodeHighlight>
        <p>
          This is only the important part of the code. Random names are generated
          until one isn't contained in the <code>USED</code> set, at which point the
          name is pushed to the <code>USED</code> set and returned.
        </p>
        <p>
          The <code>chars</code> and <code>numbers</code> functions are generators
          which yield the characters or numbers in order. We need them all for the
          <code>randomName</code> function to work, so we convert them to an array
          using the ES6 spread operator. The <code>randomName</code> function
          randomly picks a character from each, resulting in a robot name.
        </p>
        <h3>The bonus</h3>
        <p>
          My first attempt solved all but one test: the bonus. The bonus test tests if
          the code is able to generate all possible 167.000 names. This can be
          done with the code above, but it takes a tremendous amount of time!
          Like... hours! I had to come up with a better, more elegant solution.
        </p>
        <h3>The idea</h3>
        <p>
          I had this idea in mind of a big tree, where each branch represents a
          name for the robot. Once a name is randomly picked, the branch is
          depleted. This way the code is able to 'remember' which names have
          already been picked, and therefore can't be picked again. Let's look
          at an image representing this big tree.
        </p>
        <figure>
          <img src="@/assets/RobotNameGenerator.gif" alt="Robot name generator tree" />
        </figure>
        <p>
          It was obvious to me to use a generator function for this task: exhausting
          a generator is in its nature. But the random picking posed some problems.
          I had to take it one node at a time, and randomly pick a (sub)branch on each node.
          This way the generator picks a random path from each node of the graph, until
          it reaches the end of the branch, resulting in a randomly picked name.
        </p>
        <h3>The function</h3>
        <p>
          Of course there are a couple of functions involved, but let's look at the
          most important one: the one that houses a representation of the big tree
          we saw earlier. After we go through the function step by step, we will
          see how this function can be reduced into one big robot names generator.
          This higher order function takes in a generator and an array of characters, and
          glues them together, resulting in a new generator function.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="20">{{ getLines(solution, 20, 36) }}</CodeHighlight>
        <p>
          On <em>line 22</em> all characters get the given generator function
          prepended to them, resulting in an array of iteratable objects. I'll show
          the partial function <code>prepend</code> later. On <em>line 23</em> each iterator
          gets invoked and its value returned, resulting in an array of values. We
          have everything we need to work with now.
        </p>
        <p>
          On <em>line 24</em>, because we remove depleted generators and their
          values (aka undefined) from the array, we loop until the <code>value</code> array is
          empty. Looping until the <code>iters</code> array is empty would of course also work.
        </p>
        <p>
          For the next three lines, <em>line 25 to 27</em>, we randomly pick
          an index between 0 and the length of the array. We yield
          its value, and we invoke its iterable for the next value. If that
          iterable is done, we remove the index from the <code>iters</code> and <code>values</code> arrays.
          Otherwise, we pass the new value to the <code>values</code> array (<em>line 28 to 33</em>).
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="67">{{ getLines(solution, 66, 74) }}</CodeHighlight>
        <p>
          All that remains is reducing this template into one big generator, using
          the <code>combine</code> function as shown earlier. We start of with an
          'empty' iterator; an iterator that yields an empty string. The
          <code>combine</code> function prepends this iterator to the first
          characters array from the template, and returns a new iterator, which
          gets prepended to the next characters array of the template, and so on.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="36">{{ getLines(solution, 36, 39) }}</CodeHighlight>
        <p>
          Notice how we immediately invoked the returned generator. We want
          <code>uniqueNames</code> to be a generator function, not a function that
          returns a generator. With this immediate invocation,
          <code>uniqueNames</code> is now a function that takes in a template and
          returns an iteratable object. Hence it's a generator function (also
          called iterator).
        </p>
        <h3>Helpful functions</h3>
        <p>
          There are still some minor functions I didn't cover. Let's go through them
          really quick.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="14">{{ getLines(solution, 14, 20) }}</CodeHighlight>
        <p>
          One of the problems I faced was the premature depleting of an iterable. Hence
          we pass the iterator to the <code>prepend</code> function and let that invoke
          it. This makes sure the iterable object is always
          'fresh'. We could also have done this in the <code>combine</code>
          function, but that gives a lot of function invocations on one line of
          code, too much in my taste. I've made the function partial so that I could
          write the array <code>map</code> method on <em>line 23</em> more
          declarative.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="11">{{ getLines(solution, 11, 14) }}</CodeHighlight>
        <p>
          A simple random integer function. The <code>Math.random()</code> method
          works with floats between 0 and 1, so we need to do a bit of extra work
          to convert it to a random integer function.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="2">{{ getLines(solution, 2, 11) }}</CodeHighlight>
        <p>
          A lot of code for something very simple: creating an array of characters.
          I wish the native <code>String</code> object had a property called
          <code>ascii_uppercase</code>, like Python's <code>string</code>
          module. Then we wouldn't need the function and could just write
          <code>[...String.ascii_uppercase]</code>, or
          <code>[...String.numbers]</code>.
        </p>
        <h3>Tests</h3>
        <figure>
          <img src="@/assets/RobotNameTest.png" alt="Robot name test" />
          <figcaption>
            Screenshot
          </figcaption>
        </figure>
        <p>
          The last test takes 7 seconds to pass, and all the tests are passed in
          just 13 seconds. Not bad at all, generating 167.000 names at random in
          just 7 seconds on an Asus Zenbook with an Intel i5-8250U clocking 1.6Ghz
          :).
        </p>
        <p>
          I really enjoyed working on this solution. It learned me a lot about how
          generator functions can be used and combined to create iterable data
          in pretty much any order you would like.
        </p>
      </template>
    </ExercismAnnotation>
  </article>
</template>

<script>
import ExercismAnnotation from '@/components/ExercismAnnotation'
import CodeHighlight from '@/components/CodeHighlight'
import getLines from '@/helpers/getLines'
import gql from 'graphql-tag'
export default {
  name: "ExercismRobotName",
  data() {
    return {
      solution: false,
      firstAttempt: false
    }
  },
  methods: {
    getLines,
  },
  components: {
    CodeHighlight,
    ExercismAnnotation,
  },
  apollo: {
    firstAttempt: {
      query: gql`query {
        repository(owner: "Thewessen", name: "hello-world") {
          attempt: object(expression: "master:Exercism/javascript/robot-name/first-attempt.js") {
            ... on Blob {
              text
            }
          }
        }
      }`,
      update: data => data.repository.attempt.text
    },
  }
}
</script>
