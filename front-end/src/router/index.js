import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/HomeView.vue';
import Shoole from '../views/SelectShooleView.vue';
import List from '../views/SchooleListView.vue';
import ListView from '../views/ListView.vue'
import Contact from '../views/ContatcView.vue'
import conditionLegal from '../views/about-views/ConditionGeneralView.vue'
import HowWeAre from '../views/about-views/HowWeAreView.vue'
import SuivreCommande from '../views/SuivreCommande.vue'
import Liveryocriche from '../views/about-views/LiveryocricheView.vue'
import Partnerships from '../views/about-views/PartnershipsView.vue'
import RouterPolicy from '../views/about-views/RouterPolicyView.vue'
import Livreson from '../views/about-views/LivresonModalitiView.vue'
import StatutCommande from '../views/StatutCommande.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/list',
            name: 'Listes Scolaires',
            component: List
          },
          {
            path: '/list-view',
            name: 'list-view',
            component: ListView
          },
        {
          path: '/contactez-nous',
          name: 'contact',
          component: Contact
        },
        {
          path: '/about/condition-general',
          name: 'condition-general',
          component: conditionLegal
        },
        {
          path: '/about/how-we-are',
          name: 'how-we-are',
          component: HowWeAre
        },
        {
          path: '/about/livero-criche',
          name: 'livero-criche',
          component: Liveryocriche
        },
        {
          path: '/about/partnerships',
          name: 'partnerships',
          component: Partnerships
        },
        {
          path: '/about/router-polic',
          name: 'router-policy',
          component: RouterPolicy
        },
        {
          path: '/about/Livreson',
          name: 'livreson',
          component: Livreson
        },
        {
          path: '/suivre-commande',
          name: 'Suivre Ma Commande',
          component: SuivreCommande
        },
        {
          path: '/statut-commande',
          name: 'Statut Commande',
          component: StatutCommande
        },
    ]
  })
  
export default router