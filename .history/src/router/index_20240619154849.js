import { createRouter, createWebHistory } from "vue-router";
import Projetos from "@/pages/Projetos";
import Clientes from "@/pages/Clientes";
import Atividades from "@/pages/Atividades";
// Definição das rotas
const routes = [
  {
    path: "/",
    name: "Home",
    component: Projetos,
  },
  {
    path: "/clients",
    name: "Clientes",
    component: Clientes,
  },
  {
    path: "/clients",
    name: "Clientes",
    component: Atividades,
  },
  // Adicione outras rotas aqui conforme necessário
];

// Criação do roteador
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
