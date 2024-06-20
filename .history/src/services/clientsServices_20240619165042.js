// clientService.js
import axios from "axios";

const baseURL = "/client"; // Base URL for client endpoints

const fetchClients = async () => {
  try {
    const response = await axios.get(`${baseURL}/all`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

const getClientById = async (clientId) => {
  try {
    const response = await axios.get(`${baseURL}/${clientId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar usuário com ID ${clientId}:`, error);
    throw error;
  }
};

const createClient = async (clientData) => {
  try {
    const response = await axios.post(`${baseURL}/add`, clientData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

const updateClient = async (clientId, clientData) => {
  try {
    const response = await axios.put(`${baseURL}/edit/${clientId}`, clientData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar dados do cliente ID ${clientId}:`, error);
    throw error;
  }
};

const deleteClient = async (clientId) => {
  try {
    const response = await axios.delete(`${baseURL}/delete/${clientId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar cliente com ID ${clientId}:`, error);
    throw error;
  }
};

export {
  fetchClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
