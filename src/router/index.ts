import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/welcome/welcomeView.vue'),
    },
    {
      path: '/pokedesk',
      name: 'pokedesk',
      component: () => import('@/views/pokedesk/pokedeskView.vue'),
    },
  ],
})

export default router
