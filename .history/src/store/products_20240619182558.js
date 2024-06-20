const state = {
  products: [],
};

const mutations = {
  SET_products(state, products) {
    state.products = products;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    console.log("buscou");
    try {
      const products = await fetchProducts();
      console.log("entrrou", products);
      commit("SET_products", products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  async addProduct({ dispatch }, productData) {
    try {
      await createProduct(productData);
      dispatch("fetchproducts");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  },
  async updateProduct({ dispatch }, { productId, productData }) {
    try {
      await updateProduct(productId, productData);
      dispatch("fetchProducts");
    } catch (error) {
      console.error("Error updating project:", error);
    }
  },
  async removeProduct({ dispatch }, productId) {
    try {
      await deleteProduct(productId);
      dispatch("fetchproducts");
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
  // Nomeie o módulo explicitamente
  state,
  mutations,
  actions,
  getters,
};

export default productsModule; // Exporte o módulo Vuex com um nome específico
