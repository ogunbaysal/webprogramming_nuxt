export const state = () => ({
  categories: []
});
export const mutations = {
  _setCategories(state, list) {
    state.categories = list;
  }
};
export const actions = {
  initializeCategories({commit, state}) {
    if(state.categories.length === 0) {
      this.$fire.firestore.collection('categories').get().then(snapshot => {
        let tempItems = [];
        snapshot.forEach(data => {
          tempItems.push(data.data());
        });
        commit("_setCategories", tempItems);
      });
    }
  }
};
export const getters = {
  getCategories(state){
    return state.categories;
  }
};
