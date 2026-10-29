import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ContactosView from '../views/ContactosView.vue'
import WorkshopsView from '../views/WorkshopsView.vue'
import WorkshopView from '../views/WorkshopView.vue'
import NaoEncontradoView from '../views/NaoEncontradoView.vue'
import IncricaoView from '../views/InscricaoView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/contatos',
      name: 'contatos',
      component: ContactosView
    },
    {
      path: '/workshops',
      name: 'workshops',
      component: WorkshopsView
    },
    {
      path: '/workshops/:id',
      name: 'workshop',
      component: WorkshopView
    }, 
    {
      path: '/inscricao',
      name: 'inscricao',
      component: IncricaoView,
      meta: { requiresAuth: true, title: 'Inscrição' }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NaoEncontradoView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

function isAuthenticated() {
  return sessionStorage.getItem('autenticado') ? true : false
}

export default router
