import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import FireView from '../views/FireView.vue';
import AttackView from '../views/AttackView.vue';
import NotFound from '../views/NotFound.vue';
import MainConfig from '../views/MainConfig.vue';
import DocsView from '../views/DocsView.vue';
import TodoView from '../views/TodoView.vue';

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
      icon: 'fire',
      show: true
    }
  },
  {
    path: '/attack', name: 'attack', component: AttackView, meta: {
      breadcrumb: 'Нападение',
      icom: 'fire',
      show: true
    }
  },
  {
    path: '/todo', name: 'todo', component: TodoView, meta: {
      breadcrumb: 'TODO',
      icon: 'material-icons-outlined',
      show: true
    }
  },
  {
    path: '/docs', name: 'docs', component: DocsView, meta: {
      breadcrumb: 'Документы',
      icon: 'docs',
      show: true
    }
  },
  {
    path: '/main-config', name: 'mainConfig', component: MainConfig, meta: {
      breadcrumb: 'настройки',
      icon: 'settings',
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
