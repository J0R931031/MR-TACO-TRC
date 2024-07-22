import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Navbar from '@/components/barNav.vue'
import Loginview from '@/views/loginView.vue'
import Menu from '@/views/menuView.vue'
import Registro from '@/views/regView.vue'
import Reservas from '@/views/reservasView.vue'
import Inicio from '@/views/inicioView.vue'

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
    {
      path:'/bar',
      name:'barra',
      component:Navbar
    },
    {
      path:'/menu',
      name:'/menu',
      component:Menu
    },
    {
      path:'/reg',
      name:'/registro',
      component:Registro
    },
    {
      path:'/reserva',
      name:'/reservas',
      component:Reservas
    },
    {
      path:'/Inicio',
      name:'/Inicio',
      component:Inicio
    }

  ]
})

export default router

