import productsServices from "@/services/productsServices";

const state = {
  products: [],
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
};

const actions = {
  testeAction({ commit }) {
    console.log("commit", commit);
  },
  async fetchProducts({ commit }) {
    console.log("buscou");
    try {
      const products = await getProducts(); // Chame a função getProducts()
      console.log("entrrou", products);
      commit("SET_PRODUCTS", products); // Corrija o nome do commit
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
      await deleteProduct(productId);
      dispatch("fetchProducts");
    } catch (error) {
      console.error("Error removing product:", error);
    }
  },
};

const getters = {
  // Getters for products module
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
