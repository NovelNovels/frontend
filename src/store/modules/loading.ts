import { Commit } from "vuex";

const state: LoadingState = {
  isLoading: false,
};

const getters = {
  isLoading: (state: LoadingState) => state.isLoading,
};

const actions = {
  setLoading({ commit }: { commit: Commit }, loading: boolean) {
    commit("setLoading", loading);
  },
};

const mutations = {
  setLoading: (state: LoadingState, loading: boolean) =>
    (state.isLoading = loading),
};

export default {
  state,
  getters,
  actions,
  mutations,
};