import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/services/productsServices";

const state = {
  products: [],
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const products = await getProducts();
      commit("SET_PRODUCTS", products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  async addProduct({ dispatch }, productData) {
    try {
      await createProduct(productData);
      dispatch("fetchProducts");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  },
  async updateProduct({ dispatch }, { productId, productData }) {
    try {
      await updateProduct(productId, productData);
      dispatch("fetchProducts");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  },
  async removeProduct({ dispatch }, productId) {
    try {
      await deleteProject(productId);
      dispatch("fetchProducts");
    } catch (error) {
      console.error("Error removing product:", error);
    }
  },
};

const getters = {
  getProductById: (state) => (productId) => {
    return state.products.find((product) => product.id === productId);
  },
};

const productsModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default productsModule;
