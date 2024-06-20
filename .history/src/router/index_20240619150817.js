import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Definição das rotas
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/pages/index.vue"),
  },
  // Adicione outras rotas aqui conforme necessário
];

// Criação do roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
