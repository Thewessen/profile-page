import Exercism from '@/views/Exercism'
import ExercismExercise from '@/views/ExercismExercise'
import ExercismRobotName from '@/views/ExercismRobotName'

export default [
  {
    path: '/Exercism/RobotName',
    name: 'RobotName',
    component: ExercismRobotName
  },
  {
    path: '/Exercism/:language/:exercise',
    name: 'Exercism-exercise',
    component: ExercismExercise,
    props: true
  },
  {
    path: '/Exercism/:language',
    name: 'Exercism',
    component: Exercism,
    props: true
  },
]
