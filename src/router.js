import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ExercismExercise from './views/ExercismExercise'
import Exercism from './views/Exercism'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Exercism/Javascript',
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
    }
  ]
})
