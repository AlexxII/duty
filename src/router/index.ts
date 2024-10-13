import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import FireView from '../views/FireView.vue';
import AttackView from '../views/AttackView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/', name: 'home', component: HomeView, meta: {
      breadcrumb: '',
      icon: 'home',
      show: false
    }
  },
  {
    path: '/fire', name: 'fire', component: FireView, meta: {
      breadcrumb: 'Пожар',
      icon: 'widgets',
      show: true
    }
  },
  {
    path: '/attack/:id', name: 'attack', component: AttackView, meta: {
      breadcrumb: 'Нападение',
      icom: 'fire',
      show: true
    }
  },
  {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
  }
]

export const router = createRouter({
  routes,
  history: createWebHistory()
})
