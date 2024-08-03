import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '../views/PageNotFound.vue'
import HomeView from '../views/HomeView.vue'
import AddEditItem from '../views/AddEditItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addEditItem',
      name: 'addEditItem',
      component: AddEditItem
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

export default router
