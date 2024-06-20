import { createRouter, createWebHistory } from "vue-router";

// Definição das rotas
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/pages/index.vue"),
  },
  {
    path: "/clients",
    name: "Clientes",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/components/Clientes"),
  },
  // Adicione outras rotas aqui conforme necessário
];

// Criação do roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
