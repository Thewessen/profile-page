import Exercism from '@/views/Exercism'
import ExercismRobotName from '@/views/ExercismRobotName'
import ExercismMatchingBrackets from '@/views/ExercismMatchingBrackets'

export default [
  {
    path: '/Exercism/RobotName',
    name: 'robot-name',
    component: ExercismRobotName
  },
  {
    path: '/Exercism/MatchingBrackets',
    name: 'matching-brackets',
    component: ExercismMatchingBrackets
  },
  {
    path: '/Exercism/:language/:exercise',
    name: 'Exercism-exercise',
    // route level code-splitting
    // this generates a separate chunk (ExercismExercise.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // eslint-disable-next-line
    component: () => import(/* webpackChunkName: "ExercismExercise" */ '@/views/ExercismExercise.vue'),
    props: true
  },
  {
    path: '/Exercism/:language',
    name: 'Exercism',
    component: Exercism,
    props: true
  },
]
