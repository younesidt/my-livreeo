import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/HomeView.vue';
import Pack from '../views/PacksView.vue';
import City from '../views/SelectCity.vue';
import Shoole from '../views/SelectShooleView.vue';
import List from '../views/SchooleListView.vue';
import ListView from '../views/ListView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
          },
          {
            path: '/packs',
            name: 'packs',
            component: Pack
          },
          {
            path: '/city',
            name: 'city',
            component: City
          },
          {
            path: '/shoole',
            name: 'shoole',
            component: Shoole
          },
          {
            path: '/list',
            name: 'list',
            component: List
          },
          {
            path: '/list-view',
            name: 'list-view',
            component: ListView
          },
    ]
  })
  
export default router