// activiesService.js
import {
  getActivities,
  getActivityById,
  createActivities,
  updateActivities,
  deleteActivities,
} from "@/services/activitiesServices";

const state = {
  activities: [],
};

const mutations = {
  SET_ACTIVITIES(state, activities) {
    state.activities = activities;
  },
  SET_ACTIVITY(state, activity) {
    state.activity = activity;
  },
};

const actions = {
  async fetchActivities({ commit }) {
    try {
      const activities = await getActivities();
      commit("SET_ACTIVITIES", activities);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  },
  async addActivity({ dispatch }, activityData) {
    try {
      await createActivities(activityData);
      dispatch("fetchActivities");
    } catch (error) {
      console.error("Error adding activity:", error);
    }
  },
  async updateActivity({ dispatch }, { activityId, activityData }) {
    try {
      await updateActivity(activityId, activityData);
      dispatch("fetchActivities");
    } catch (error) {
      console.error("Error updating:", error);
    }
  },
  async removeActivity({ dispatch }, activityId) {
    try {
      await deleteActivity(activityId);
      dispatch("fetchActivities");
    } catch (error) {
      console.error("Error removing activity:", error);
    }
  },
  setActivity({ dispatch }, activity) {
    commit("SET_ACTIVITY", activity);
  },
};

const getters = {};

const activitiesModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default activitiesModule;
