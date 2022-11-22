import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [{
  path: '/',
  component: () => import('@/layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('@/views/MovieList.vue')
    },
    {
      path: 'movie/:id',
      component: () => import('@/views/MovieDetailsView.vue')
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
