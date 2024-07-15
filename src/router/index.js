import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

import Loginview from '@/views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children:[{
        path: 'aser',
        name: 'about',
        component: AboutView

      }]

    },
    {
      path:'/login',
      name:'login',
      component: Loginview
    },
  ]
})

export default router

