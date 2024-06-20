import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Users from "@/pages/Users.vue";
import Activities from "@/pages/Activities.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
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
