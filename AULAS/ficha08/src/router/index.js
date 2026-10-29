import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import RegistoView from '../views/RegistoView.vue'
import LoginView from '../views/LoginView.vue'
import CatalogoView from '../views/CatalogoView.vue'
import DetalheView from '../views/DetalheView.vue'
import AdminView from '../views/AdminView.vue'
import NaoEncontradoView from '../views/NaoEncontradaView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/registo',
      name: 'registo',
      component: RegistoView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: CatalogoView
    },
    {
      path: '/detalhe',
      name: 'detalhe',
      component: DetalheView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NaoEncontradoView
    }
  ]
})

export default router
