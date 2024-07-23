import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbar from '@/components/barNav.vue'
import Loginview from '@/views/Cliente/loginView.vue'
import Menu from '@/views/Cliente/menuView.vue'
import Registro from '@/views/Cliente/regView.vue'
import Reservas from '@/views/Cliente/reservasView.vue'
import InicioView from '../views/Cliente/inicioView.vue' // Ajusta la ruta si es necesario

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Loginview
    },
    {
      path: '/bar',
      name: 'barra',
      component: Navbar
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/reg',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/reserva',
      name: 'Reservas',
      component: Reservas
    },
    {
      path: '/Cliente/inicio',
      name: 'InicioCliente',
      component: InicioView
    }
  ]
})

export default router
