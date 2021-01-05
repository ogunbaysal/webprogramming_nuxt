import {uuid} from "vue-uuid";

export const state = () => ({
  items: []
});
export const mutations = {
  _addBasketItem(state, { item, options }){
    for (let i = 0; i < state.items.length; i++){
      if(
        state.items[i].item.id === item.id &&
        state.items[i].options.body === options.body
      ){
        state.items[i].amount++;
        return true;
      }
    }
    state.items.push( {
      id: uuid.v1(),
      item: item,
      amount: 1,
      options: options
    });
  },
  _removeBasketItem(state, basket_id){
    for (let i = 0; i < state.items.length; i++){
      if(state.items[i].id === basket_id){
        state.items[i].amount--;
        if(state.items[i].amount <= 0) {
          state.items.splice(i, 1);
        }
      }
    }
  },
  _updateAmount(state, {basket_id, amount}){
    for (let i = 0; i < state.items.length; i++){
      if(state.items[i].id === basket_id){
        state.items[i].amount = amount;
        if(state.items[i].amount <= 0){
          state.items.splice(i, 1);
        }
      }
    }
  },
  _updateBasket(state, items) {
    state.items = items;
  }
};
export const actions = {
  addBasketItem({commit, dispatch}, context){
    commit("_addBasketItem", context);
    dispatch("syncWithFirebase");
  },
  removeBasketItem({commit, dispatch}, basket_id) {
    commit("_removeBasketItem", basket_id);
    dispatch("syncWithFirebase");
  },
  updateItemAmount({commit, dispatch}, param) {
    commit("_updateAmount", param);
    dispatch("syncWithFirebase");
  },
  fetchBasketFromFirebase({commit, rootState}){
    if (rootState.account.isLoggedIn) {
      this.$fire.firestore.collection('basket').doc(rootState.account.user.email).get().then(snapshot => {
        let list = [];
        snapshot.forEach(data => {
          list.push(data.data());
        });
        commit('_updateBasket', list);
      });
    }
  },
  syncWithFirebase({commit, state, rootState}) {
    if (rootState.account.isLoggedIn) {
      this.$fire.firestore.collection('basket').doc(rootState.account.user.email).set({...state.items});
    }
  }
};
export const getters = {
  basket(state){
    return state.items;
  }
};
