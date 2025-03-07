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
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/searchView.vue'),
    },
  ],
})

export default router
