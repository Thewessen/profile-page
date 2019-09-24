import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import ProjectsByDate from '@/views/ProjectsByDate'
import AllProjects from '@/views/AllProjects'
import ContactBio from '@/views/ContactBio'
import OverTheWire from '@/views/OverTheWire'

import exercism from '@/routes/exercism-routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/date'
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
      path: '/date',
      name: 'date',
      component: ProjectsByDate
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactBio
    },
    {
      path: '/projects',
      name: 'projects',
      component: AllProjects
    },
    {
      path: '/CTF/OverTheWire/:wargame',
      name: 'OverTheWire',
      component: OverTheWire,
      props: true,
    },
    ...exercism
  ]
})
