import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import SearchResults from '..//views/SearchResults.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/search/:cityName', component: SearchResults },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
