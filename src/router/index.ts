import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/origin' },
  { path: '/origin', component: () => import('@/pages/Origin.vue') },
  { path: '/introduction', component: () => import('@/pages/Introduction.vue') },
  { path: '/organization', component: () => import('@/pages/Organization.vue') },
  { path: '/strategy', component: () => import('@/pages/Strategy.vue') },
  { path: '/process', component: () => import('@/pages/Process.vue') },
  { path: '/apply', component: () => import('@/pages/Apply.vue') },
  { path: '/contact', component: () => import('@/pages/Contact.vue') },
  { path: '/cases', component: () => import('@/pages/Cases.vue') },
  { path: '/cases/:id', component: () => import('@/pages/CaseDetail.vue') },
  { path: '/transparency', component: () => import('@/pages/Transparency.vue') }
]

const router = createRouter({
  // 使用 Hash Mode，避免 GitHub Pages 發生 404 問題
  history: createWebHashHistory(),
  routes
})

export default router
