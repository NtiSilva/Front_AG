import { createRouter, createWebHistory } from "vue-router";
import Projects from "@/pages/Projects.vue";
import Activities from "@/pages/Activities.vue";
import Clients from "@/pages/Clients.vue";
import Home from "@/pages/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
