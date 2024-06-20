import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/services/projectService.js";

export default {
  state: {
    projects: [],
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async fetchProjects({ commit }) {
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
  },
  getters: {
    // getters for module 1
  },
};
