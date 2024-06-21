import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from "@/services/clientsServices";

const state = {
  clients: [],
  client: [],
};

const mutations = {
  SET_CLIENTS(state, clients) {
    state.clients = clients;
  },
  SET_ClIENT(state, client) {
    state.client = client;
  },
};

const actions = {
  async fetchClients({ commit }) {
    try {
      const clients = await getClients();
      commit("SET_CLIENTS", clients);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  },
  async addClient({ dispatch }, clientData) {
    try {
      await createClient(clientData);
      dispatch("fetchClients");
    } catch (error) {
      console.error("Error adding client:", error);
    }
  },
  async updateClient({ dispatch }, { clientId, clientData }) {
    try {
      await updateClient(clientId, clientData);
      dispatch("fetchclients");
    } catch (error) {
      console.error("Error updating client:", error);
    }
  },
  async removeClient({ dispatch }, clientId) {
    try {
      await deleteClient(clientId);
      dispatch("fetchClients");
    } catch (error) {
      console.error("Error removing client:", error);
    }
  },
  setClient({ dispatch }, client) {
    commit("SET_CLIENT", client);
  },
};

const getters = {
  getClientById: (state) => (clientId) => {
    return state.clients.find((client) => client.id === clientId);
  },
};

const clientsModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default clientsModule;
