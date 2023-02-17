// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/login/AppLogin.vue'),
      },
      {
        path: '/lobby',
        name: 'lobby',
        component: () => import('@/views/lobby/AppLobby.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
