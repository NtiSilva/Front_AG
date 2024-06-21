import { createStore } from "vuex";
import activitiesModule from "./activities";
import clientsModule from "./clients";
import productsModule from "./products";

export default createStore({
  modules: {
    activitiesModule,
    clientsModule,
    productsModule,
  },
});
