import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [{
  path: '/',
  component: () => import('@/layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('@/views/HomeView.vue')
    }
  ]
}]