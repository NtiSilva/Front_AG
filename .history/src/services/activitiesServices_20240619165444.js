// activitiesService.js
import axios from "axios";

const baseURL = "/activity"; // Base URL for activities endpoints

const fetchActivities = async () => {
  try {
    const response = await axios.get(`${baseURL}/all`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar atividades cadastradas:", error);
    throw error;
  }
};

const getActivityById = async (activityId) => {
  try {
    const response = await axios.get(`${baseURL}/${activityId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar atividade ${activityId}:`, error);
    throw error;
  }
};

const createActivities = async (activitiesData) => {
  try {
    const response = await axios.post(`${baseURL}/add`, activitiesData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar atividade:", error);
    throw error;
  }
};

const updateActivities = async (activityId, activitiesData) => {
  try {
    const response = await axios.put(
      `${baseURL}/edit/${activityId}`,
      activitiesData
    );
    return response.data;
  } catch (error) {
    console.error(
      `Erro ao atualizar dados da atividade ID ${activityId}:`,
      error
    );
    throw error;
  }
};

const deleteActivities = async (activityId) => {
  try {
    const response = await axios.delete(`${baseURL}/delete/${activityId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar atividade com ID ${activityId}:`, error);
    throw error;
  }
};

export {
  fetchActivitiess,
  getActivitiesById,
  createActivities,
  updateActivities,
  deleteActivities,
};
