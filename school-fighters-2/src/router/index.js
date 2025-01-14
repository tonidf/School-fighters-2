import { createRouter, createWebHistory } from 'vue-router'
import VistaCombate from '@/views/VistaCombate.vue'
import VistaPersonajes from '@/views/VistaPersonajes.vue'
import VistaEscenarios from '@/views/VistaEscenarios.vue'

const routes = [
  {
    path: '/',
    name: 'Personajes',
    component: VistaPersonajes
  },
  {
    path: '/combate',
    name: 'Combate',
    component: VistaCombate
  },
  {
    path: '/escenarios',
    name: 'Escenarios',
    component: VistaEscenarios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
