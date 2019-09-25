import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import ProjectsByDate from '@/views/ProjectsByDate'
import AllProjects from '@/views/AllProjects'
import About from '@/views/About'
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
      path: '/date',
      name: 'date',
      component: ProjectsByDate
    },
    {
      path: '/contact',
      name: 'about',
      component: About
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
