import { createRouter, createWebHistory } from "vue-router";
import Products from "@/pages/Products.vue";
import Activities from "@/pages/Activities.vue";
import Clients from "@/pages/Clients.vue";
import Home from "@/pages/HomePage.vue";
import ListClients from "@/components/Clientes/ListClients.vue";
import FormClient from "@/components/Clientes/FormClient.vue";
import FormProduct from "@/components/Products/FormProducts.vue";
import ListProducts from "@/components/Products/ListProducts.vue";
import FormActivities from "@/components/Atividades/FormActivities.vue";

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
    children: [
      {
        path: "list-clients",
        name: "ListClients",
        component: ListClients,
      },
      {
        path: "form-client",
        name: "FormClient",
        component: FormClient,
      },
    ],
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities,
    children: [
      {
        path: "form-activities",
        name: "FormActivities",
        component: FormActivities,
      },
    ],
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    children: [
      {
        path: "form-product",
        name: "FormProduct",
        component: FormProduct,
      },
      {
        path: "list-products",
        name: "ListProducts",
        component: ListProducts,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
