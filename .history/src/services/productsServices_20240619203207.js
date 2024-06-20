// productsService.js
import axios from "axios";

const baseURL = "/project"; // Base URL for product endpoints

const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/all`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${baseURL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar produto com ID ${productId}:`, error);
    throw error;
  }
};

const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${baseURL}/add`, productData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    throw error;
  }
};

const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(
      `${baseURL}/edit/${productId}`,
      productData
    );
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar projeto com ID ${productId}:`, error);
    throw error;
  }
};

const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${baseURL}/delete/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar projeto com ID ${productId}:`, error);
    throw error;
  }
};

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
