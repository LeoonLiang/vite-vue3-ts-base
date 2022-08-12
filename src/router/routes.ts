import { defineAsyncComponent } from 'vue'

const routes = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('@/pages/index.vue'))
  }
]

export default routes
