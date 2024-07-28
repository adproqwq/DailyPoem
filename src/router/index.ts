import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import StarView from '@/views/StarView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/star',
      name: 'star',
      component: StarView,
    },
  ]
});

export default router;
