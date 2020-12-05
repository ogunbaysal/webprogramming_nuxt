export const state = () => ({
  isLoggedIn: false,
  user: null
});
export const mutations = {
  SET_LOGGED_IN(state, value) {
    state.isLoggedIn = value;
  },
  SET_USER(state, data) {
    state.user = data;
  }
};
export const actions = {
  fetchUser({ commit }, user) {
    commit("SET_LOGGED_IN", user !== null);
    if (user) {
      commit("SET_USER", {
        displayName: user.displayName,
        email: user.email
      });
    } else {
      commit("SET_USER", null);
    }
  },
  registerWithEmailAndPassword({commit}, {email, password, gender}) {
    this.$fire.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        data.user.updateProfile({
          gender: gender
        });
        commit("SET_LOGGED_IN", data.user !== null);
        if (data.user) {
          commit("SET_USER", {
            displayName: data.user.displayName,
            email: data.user.email
          });
        } else {
          commit("SET_USER", null);
        }
        this.$router.replace('/');
      })
      .catch(err => {
        console.log(err);
      })
  },
  loginWithEmailAndPassword({commit}, {email, password}) {
      this.$fire.auth.signInWithEmailAndPassword(email, password)
        .then(data => {
          commit("SET_LOGGED_IN", data.user !== null);
          if (data.user) {
            commit("SET_USER", {
              displayName: data.user.displayName,
              email: data.user.email
            });
          } else {
            commit("SET_USER", null);
          }
          this.$router.replace('/');
        })
        .catch(err => {
          console.log(err);
        })
  }
};
export const getters = {
  user(state) {
    return state.user;
  },
  isLoggedIn(state) {
    return state.isLoggedIn;
  }
};
