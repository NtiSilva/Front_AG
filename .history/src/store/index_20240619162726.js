import { createStore } from "vuex";
import activities from "./activities";
import clients from "./clients";
import projects from "./projects";

export default createStore({
  modules: {
    activities,
    clients,
    projects,
  },
});
