import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ContactosView from '../views/ContactosView.vue'
import WorkshopsView from '../views/WorkshopsView.vue'
import WorkshopView from '../views/WorkshopView.vue'

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
    }
  ]
})

export default router
