// projectService.js
import axios from "axios";

const baseURL = "/project"; // Base URL for project endpoints

const fetchProjects = async () => {
  console.log("chegou");
  try {
    const response = await axios.get(`${baseURL}/all`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    throw error;
  }
};

const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`${baseURL}/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar projeto com ID ${projectId}:`, error);
    throw error;
  }
};

const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${baseURL}/add`, projectData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar projeto:", error);
    throw error;
  }
};

const updateProject = async (projectId, projectData) => {
  try {
    const response = await axios.put(
      `${baseURL}/edit/${projectId}`,
      projectData
    );
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar projeto com ID ${projectId}:`, error);
    throw error;
  }
};

const deleteProject = async (projectId) => {
  try {
    const response = await axios.delete(`${baseURL}/delete/${projectId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar projeto com ID ${projectId}:`, error);
    throw error;
  }
};

export {
  fetchProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
