import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils"

describe("store/favorite", () => {
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
  describe('Favorite Tests', () => {

    test('Favorite Add Item Test', () => {
      store.commit('favorite/_addItem', { product: {id: 1} });
      expect(store.getters['favorite/favorites']).toEqual([undefined, { product: {id: 1}, options: undefined } ]);
    });

    test('Favorite Remove Item Test', () => {
      store.commit('favorite/_addItem', { product: {id: 1} });
      store.commit('favorite/_removeItem', 1);
      expect(store.getters['favorite/favorites']).toEqual([]);
    });
  });

});
