import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Navbar from '@/components/barNav.vue';
import Loginview from '@/views/Cliente/loginView.vue';
import Menu from '@/views/Cliente/menuView.vue';
import RegCli from '@/views/Cliente/regView.vue';
import Reservas from '@/views/Cliente/reservasView.vue';
import Reservar from '@/views/Cliente/ReservarView.vue';
import InicioCliente from '@/views/Cliente/inicioView.vue';
import InicioAdmin from '@/views/Admin/iAdminView.vue';
import RegAdmin from '@/views/Admin/regAdminview.vue';
import PostAdmin from '@/views/Admin/postAdminView.vue';
import Chef from '@/views/Chef/chefIniciView.vue';
import ChefOrden from '@/views/Chef/chefordenView.vue';
import Editar from '@/views/Admin/perfilAdminview.vue';
import CreatePostsView from '@/views/Admin/CreatePostsview.vue';
import InfoAdminView from '@/views/Admin/tablasInfoAdminView.vue';
import Meseros from '@/views/Mesero/OrdenesView.vue';

import HistorialView from '@/views/Mesero/historialView.vue';
import InicioMesero from '@/views/Mesero/InicioMesero.vue';
import MenuView from '@/views/Mesero/MenuView.vue';

const routes = [
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
    path: '/ReservarView',
    name: 'Reservar',
    component: Reservar
  },
  {
    path: '/cliente',
    name: 'InicioCliente',
    component: InicioCliente
  },
  {
    path: '/admin',
    name: 'InicioAdmin',
    component: InicioAdmin
  },
  {
    path: '/infoAdmin',
    name: 'TablasAdmin',
    component: InfoAdminView
  },
  {
    path: '/registros',
    name: 'registros',
    component: RegAdmin
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostAdmin
  },
  {
    path: '/InicioMesero',
    name: 'InicioMesero',
    component: InicioMesero
  },
  {
    path: '/MenuView',
    name: 'MenuView',
    component: MenuView
  },
  {
    path: '/OrdenesView',
    name: 'Meseros',
    component: Meseros
  },
  {
    path: '/chef',
    name: 'Chef',
    component: Chef
  },
  {
    path: '/cheforden',
    name: 'ChefOrden',
    component: ChefOrden
  },
  {
    path: '/editar',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/añadir-post',
    name: 'AñadirPost',
    component: CreatePostsView
  },
 
  {
    path: '/historial',
    name: 'Historial',
    component: HistorialView,
  },


];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;