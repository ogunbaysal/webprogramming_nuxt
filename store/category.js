export const state = () => ({
  categories: [],
  category: null
});
export const mutations = {
  _setCategories(state, list) {
    state.categories = list;
  },
  _setCategory(state, category) {
    state.category = category;
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
  },
  setCategory({commit, state}, category_slug){
    if (state.category !== null){
      if (state.category.slug === category_slug) return false;
    }
    commit("_setCategory", null);
    for (let i = 0; i < state.categories.length; i++) {
      const parent = state.categories[i];
      if (parent.slug === category_slug) {
        commit("_setCategory", {
          slug: parent.slug,
          title: parent.title
        });
        break;
      }
      for (let j = 0; j < parent.children.length; j++) {
        const category = parent.children[j];
        if (category.slug === category_slug) {
          commit("_setCategory", {
            slug: category.slug,
            title: category.title
          });
          break;
        }
        for (let k = 0; k < category.children.length; k++) {
          const child = category.children[k];
          if (child.slug === category_slug) {
            commit("_setCategory", {
              slug: child.slug,
              title: child.title
            });
            break;
          }
        }
      }
    }
  }
};
export const getters = {
  getCategories(state){
    return state.categories;
  },
  getCategory(state){
    return state.category;
  }
};
