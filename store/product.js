export const state = () => ({
  searchProducts: [],
  filteredProducts: [],
  filters: [],
  filterOptions: [],
  productDetail: null
});
export const mutations = {
  _setProducts(state, items){
    state.products = items;
  },
  _setFilter(state, { key, value }){
    state.filters[key] = value;
  },
  _setFilteredProducts(state, items) {
    state.filteredProducts = items;
  },
  _setProduct(state, product){
    state.productDetail = product;
  }
};
export const actions = {
  setFilter({commit}, params){
    commit("_setFilter", params);
  },
  retrieveProducts({state,commit}){
    this.$fire.firestore.collection('products').get().then(snapshot => {
      let tempItems = [];
      snapshot.forEach(data => {
        if(state.filters['category'] !== null && state.filters['category'] !== undefined){
          const category_slug = state.filters['category'];
          const item = data.data();
          if (item.parent_category === category_slug || item.category === category_slug || item.child_category === category_slug) {
            tempItems.push(data.data());
          }
        }
        else{
          tempItems.push(data.data());
        }
      })
      commit("_setFilteredProducts", tempItems);
    });
  },
  getProductDetail({commit}, product_id) {
    this.$fire.firestore.collection('products').get().then(snapshot => {
      let selected = null;
      snapshot.forEach(data => {
        if(data.data().id === product_id) {
          selected = data.data();
          return false;
        }
      });
      commit('_setProduct', selected);
    });
  }
};
export const getters = {
  getProduct(state) {
    return state.productDetail;
  },
  getFilteredProducts(state){
    return state.filteredProducts;
  }
};
