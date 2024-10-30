import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import NavBar from '@/views/NavBar.vue'
import Home from '@/views/Home.vue'
import Crew from '@/views/Crew.vue'
import Destination from '@/views/Destination.vue'
import Technology from '@/views/Technology.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/NavBar",
    //   name: "NavBar",
    //   component: NavBar,
    // },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/crew",
      name: "crew",
      component: Crew,
    },
    {
      path: "/destination",
      name: "destination",
      component: Destination,
    },
    {
      path: "/technology",
      name: "technology",
      component: Technology,
    },
  ],
});

export default router
