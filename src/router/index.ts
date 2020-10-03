import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: () => import('@/views/Documentation.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
