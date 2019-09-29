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
          This is only the important part of the code. As you can see, it keeps
          generating random names until the <code>USED</code> set doesn't contain
          the random picked name. At that point, the name is pushed to the
          <code>USED</code> set and returned.
        </p>
        <p>
          The <code>chars</code> and <code>numbers</code> functions are generators,
          yielding the chars or numbers in order. We need them all for the
          <code>randomName</code> function to work, so we convert them to an array
          using the ES6 spread operator. The <code>randomName</code> function
          random picks a char from each of them and joins the result, presenting a
          Robot name.
        </p>
        <h3>The bonus</h3>
        <p>
          My first attempt solved all but one test, the bonus. The bonus test tests if
          the code is able to generate all possible 167000 names. This could be
          done with the code above, but it takes tremendous amounts of time!
          Like... hours! I had to come up with a better, more elegant solution.
        </p>
        <h3>The idea</h3>
        <p>
          I had this idea in mind of a big tree, where each branch represents a
          name for the robot. Once a name is randomly picked, the branch is
          depleted. In this way the code is able to 'remember' which names are
          already picked, and can't be picked again. Let's look at an image
          representing this big tree.
        </p>
        <figure>
          <img src="@/assets/RobotNameGenerator.gif" alt="Robot name generator tree" />
        </figure>
        <p>
          It was obvious to me to use a generator function for this task.
          Exhausting a generator is in it's nature. But the 'pick random' opposed
          some problems. I had to take it one node at a time, and do a random pick
          branch on each node. This way the generator picks a random path on each
          node of the graph, until it reaches the end of the branch, resulting in a
          random picked name.
        </p>
        <h3>The function</h3>
        <p>
          Ofcourse their are a couple of functions involved, but let's look at the
          most important one. The one that houses a representation of the big tree
          we saw earlier. After we go through the function step by step, we will
          see how this function can be reduced into one big robot names generator.
          This higher order function takes a generator and an array of chars, and
          glues them together, resulting in a new generator function.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="20">{{ getLines(solution, 20, 36) }}</CodeHighlight>
        <p>
          On <em>line 22</em> we see all characters get the given generator function
          prepended to them, resulting in an array of iteratable objects. I'll show
          the partial prepend function later. On <em>line 23</em> each iterator
          gets invoced and it's value returned, resulting in an array of values. We
          have everything to work with now.
        </p>
        <p>
          On <em>line 24</em>, because we remove depleted generators and their
          values (ak. undefined) from the array, we loop until the value array is
          empty. Loop until the iters array is empty would ofcourse also work.
        </p>
        <p>
          For the next three lines, <em>line 25 to 27</em>, we pseudo random pick
          an index between 0 and the length of the array. We <code>yield</code>
          it's value. And we invoce it's iterable for the next value. If that
          iterable is done, we remove the index from the iters and values array.
          Else, we pass the new value to the values array (<em>line 28 to 33</em>).
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="67">{{ getLines(solution, 66, 74) }}</CodeHighlight>
        <p>
          All that rests us is reducing this template into one big generator, using
          the <code>combine</code> function as shown earlier. I keep saying
          'reduce', because that is exactly what we need to do. We start of with an
          'empty' iterator, an iterator that only yields an empty string. The
          <code>combine</code> function perpends this iterator to the first
          characters array from the template, and returns a new iterator. Which
          gets prepended to the next chars of the template, etc.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="36">{{ getLines(solution, 36, 39) }}</CodeHighlight>
        <p>
          Notice how we immediatly invoce the returned generator. We want
          <code>uniqueNames</code> to be a generator function, not a function that
          returns a generator. With this immediate invocation,
          <code>uniqueNames</code> is now a function that takes a template and
          returns an iteratable object. Hence it's a generator function (also
          called iterator).
        </p>
        <h3>Helpfull functions</h3>
        <p>
          There are still some minor functions I didn't cover. Let's go through them
          real quick.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="14">{{ getLines(solution, 14, 20) }}</CodeHighlight>
        <p>
          One of the problems I faced was depleting an iterable too early. Hence
          we give the <code>prepend</code> function the iterator, and let it invoce
          the iterator himself. This makes sure the iterable object is always
          'fresh'. We could also have done this in the <code>combine</code>
          function, but that gives a lot of function invocations in one line of
          code. Too much in my taste. I've made the function partial, so I could
          write the array <code>map</code> method on <em>line 23</em> more
          declerative.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="11">{{ getLines(solution, 11, 14) }}</CodeHighlight>
        <p>
          A simple random integer function. The <code>Math.random()</code> method
          works with floats between 0 and 1. So we need to do a bit of extra work
          to convert it to a random integer function.
        </p>
        <CodeHighlight
          v-if="typeof solution === 'string'"
          :startLineNumbers="2">{{ getLines(solution, 2, 11) }}</CodeHighlight>
        <p>
          A lot of code for something very simple: creating an array of characters.
          I wish the native <code>String</code> object had a property called
          <code>ascii_uppercase</code>, like the Python's <code>string</code>
          module. This way we didn't need the function and could just do
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
          just 13 seconds. Not bad at all, generating 167000 names at random in
          just 7 seconds on an Asus Zenbook with an Intel i5-8250U clocking 1.6Ghz
          : )
        </p>
        <p>
          I really enjoyed working on this solution. It learned me allot about how
          generator functions can be used and combined to create iteratable data,
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
