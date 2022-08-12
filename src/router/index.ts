import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'
const history = createWebHistory()
const router = createRouter({
  linkActiveClass: 'active',
  history,
  routes
})

export default router
