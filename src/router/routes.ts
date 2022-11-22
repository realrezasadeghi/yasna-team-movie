import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [{
  path: '/',
  component: () => import('@/layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: 'account',
      component: () => import('@/views/AccountView.vue')
    }
  ]
}]
