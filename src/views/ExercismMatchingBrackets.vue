<template>
  <article>
    <ExercismAnnotation
      exercise="matching-brackets"
      language="JavaScript">
      <template #pre>
        <p>
          Their are some great people on Exercism, and I really like it when they
          share their enthousiasm about good code. It motivates to search for the
          most elegant solution. While also viewing whell writen code by others.
          The next solution is an elegant solution from my own.
        </p>
        <figure>
          <img
            src="@/assets/exercism-brackets-comment.jpg"
            alt="A comment from the Exercism community">
          <figcaption>
            comment from the Exercism community
          </figcaption>
        </figure>
      </template>
      <template #after>
        <h3>The story</h3>
        <p>
          There is some story behind it though. While I was bussy trying to solve
          this exercise recursivly, and failing hard, a friend started solving the
          same exercise on the Python track. He completed the exercise very
          quickly, very elegant and not recursive. It was at that point I abbandoned
          the idea of making a recursive function myself, and just solve the
          problem.
        </p>
        <p>
          In this solution, the idea was born to just remove two simular pair of
          brackets next to each other. With a simple
          <code>while (brackets !== '')</code> loop I completed the solution.
        </p>
        <p>
          My friend looked at my code and stated: "Dude.. this is recursive.. you
          accomplished what you were trying to do all along." I stared at my
          solution again and laughed out loud, not being able to see it the
          first time. Hence, I am not sololy responsible for this solution.
        </p>
      </template>
    </ExercismAnnotation>
  </article>
</template>

<script>
import ExercismAnnotation from '@/components/ExercismAnnotation'

export default {
  name: "ExercismRobotName",
  components: {
    ExercismAnnotation,
  },
}
</script>
