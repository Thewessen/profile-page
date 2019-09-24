import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import ShowcaseProjects from '@/views/ShowcaseProjects'
import ContactBio from '@/views/ContactBio'
import Exercism from '@/views/Exercism'
import ExercismExercise from '@/views/ExercismExercise'
import ExercismRobotName from '@/views/ExercismRobotName'
import OverTheWire from '@/views/OverTheWire'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: ShowcaseProjects
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactBio
    },
    {
      path: '/CTF/OverTheWire/:wargame',
      name: 'OverTheWire',
      component: OverTheWire,
      props: true,
    },
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
})
