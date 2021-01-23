import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils"

describe("store/basket", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store
  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
  })
  beforeEach(async () => {
    store = await NuxtStore.createStore()
  })
  describe('Basket Mutation Tests', () => {

    test('Basket Add Item Mutation Test', () => {
      store.commit('basket/_addBasketItem',  { item: { id: 1 } });
      expect(store.getters['basket/basket'][0].item).toEqual({ id: 1 });
    })
    test('Basket Remote Item Test', ( )=> {
      store.commit('basket/_addBasketItem',  { item: { id: 1 } });
      const id = store.getters['basket/basket'][0].id;
      store.commit('basket/_removeBasketItem', id);
      expect(store.getters['basket/basket'].length).toEqual(0);
    });
    test('Basket Update Amount Test', ( ) => {
      store.commit('basket/_addBasketItem',  { amount: 10 });
      const id = store.getters['basket/basket'][0].id;
      store.commit('basket/_updateAmount', { basket_id: id, amount: 2 });
      expect(store.getters['basket/basket'][0].amount).toEqual(2);
    });

    test('Update Basket Items Test', ( ) => {
      store.commit('basket/_updateBasket', [ { id: 10 }, { id: 11 } ]);
      expect(store.getters['basket/basket'].length).toEqual(2)
    });

  });

});
