import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/services/projectsServices";

const state = {
  projects: [],
};

const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  },
};

const actions = {
  async fetchProjects({ commit }) {
    console.log("buscou");
    try {
      const projects = await fetchProjects();
      commit("SET_PROJECTS", projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  },
  async addProject({ dispatch }, projectData) {
    try {
      await createProject(projectData);
      dispatch("fetchProjects");
    } catch (error) {
      console.error("Error adding project:", error);
    }
  },
  async updateProject({ dispatch }, { projectId, projectData }) {
    try {
      await updateProject(projectId, projectData);
      dispatch("fetchProjects");
    } catch (error) {
      console.error("Error updating project:", error);
    }
  },
  async removeProject({ dispatch }, projectId) {
    try {
      await deleteProject(projectId);
      dispatch("fetchProjects");
    } catch (error) {
      console.error("Error removing project:", error);
    }
  },
};

const getters = {
  // Getters for projects module
  getProjectById: (state) => (projectId) => {
    return state.projects.find((project) => project.id === projectId);
  },
};

const projectsModule = {
  // Nomeie o módulo explicitamente
  state,
  mutations,
  actions,
  getters,
};

export default projectsModule; // Exporte o módulo Vuex com um nome específico
