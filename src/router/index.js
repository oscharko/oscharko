import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Patents from '../views/Patents.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Patents',
    name: 'Patents',
    component: Patents
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
