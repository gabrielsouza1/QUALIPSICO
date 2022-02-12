export const state = () => {
  auth: {
    loggedIn: false;
    user: {
    }
  }
};

export const mutations = {};

export const actions = {};

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedUser(state) {
    return state.auth.user;
  },

  loggedUserRole(state) {
    return state.auth.user.role_id;
  }
};
