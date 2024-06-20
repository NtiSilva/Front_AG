import { createStore } from "vuex";
import activities from "./activities";
import clients from "./clients";
import productsModule from "./products";

export default createStore({
  modules: {
    activities,
    clients,
    productsModule,
  },
});
