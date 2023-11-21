import {createRouter, createWebHistory} from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import {Annonce} from "@/model/Annonce";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: () => import('../views/FavorisView.vue')
    },
    {
      path: '/ma-selection/:id',
      name: 'ma-selection',
      component: () => import('../views/MaSelectionView.vue'),
      props: true
    }
  ]
})

export default router
