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
import Editar from '@/views/Admin/perfilAdminview.vue'
<<<<<<< HEAD
import ChefLogin from '@/views/Chef/chefloginView.vue'
import Cheforden from '@/views/Chef/chefordenView.vue'
=======
import Posts from '@/views/Admin/postAdminView.vue'
import EditPostsview from '@/views/Admin/editPostsview.vue'
import CreatePostsview from '@/views/Admin/CreatePostsview.vue'
>>>>>>> 2f596503d562afd33513dc386fd1e88bb8043764
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
    },
    {
      path:'/Editar',
      name:'Editar',
      component:Editar
<<<<<<< HEAD
      path:'/ChefLogin',
      name:'ChefLogin',
      component:ChefLogin
    },
    {
      path:'/Cheforden',
      name:'Cheforden',
      component:Cheforden
    }
=======
    },
    {
      path:'/posts',
      name:'Posts',
      component:Posts
    },
    {
      path: '/EditPosts/:id?',
      name: 'EditarPosts',
      component: EditPostsview
    },
    {
      path: '/AñadirPost',
      name: 'AñadirPost',
      component: CreatePostsview
    },
>>>>>>> 2f596503d562afd33513dc386fd1e88bb8043764
  ]

})

export default router
