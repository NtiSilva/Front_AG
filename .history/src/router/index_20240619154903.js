import { createRouter, createWebHistory } from "vue-router";
import Projetos from "@/pages/Projetos";
import Clientes from "@/pages/Clientes";
import Atividades from "@/pages/Atividades";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
