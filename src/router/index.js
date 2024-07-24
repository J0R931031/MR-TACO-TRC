import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbar from '@/components/barNav.vue'
import Loginview from '@/views/Cliente/loginView.vue'
import Menu from '@/views/Cliente/menuView.vue'
import RegCli from '@/views/Cliente/regView.vue'
import Reservas from '@/views/Cliente/reservasView.vue'
import InicioCliente from '@/views/Cliente/inicioView.vue' 
import InicioAdmin from '@/views/Admin/iAdminView.vue'
import RegAdmin from '@/views/Admin/regAdminview.vue'
import PostAdmin from '@/views/Admin/postAdminView.vue'
import Meseros from '@/views/Mesero/meseroInicioview.vue'
import Chef from '@/views/Chef/chefIniciView.vue'
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
      component: RegCli
    },
    {
      path: '/reserva',
      name: 'Reservas',
      component: Reservas
    },
    {
      path: '/cliente',
      name: 'InicioCliente',
      component: InicioCliente
    },
    {
      path: '/admin',
      name:'InicioAdmin',
      component:InicioAdmin

    },
    {
    path: '/registros',
    name:'registros',
    component:RegAdmin
    },
    {
      path:'/posts',
      name:'posts',
      component:PostAdmin
    },
    {
      path:'/meseros',
      name:'Meseros',
      component:Meseros
    },
    {
      path:'/Chef',
      name:'Chef',
      component:Chef
    }
  ]

})

export default router
