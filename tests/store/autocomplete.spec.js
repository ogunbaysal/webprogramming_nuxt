import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils"

describe("store/autocomplete", () => {
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
  describe('Autocomplete Mutation Tests', () => {

    test('Autocomplete Add History Mutation Test', () => {
      store.commit('autocomplete/_addHistory', { id: 1 });
      expect(store.getters['autocomplete/getHistory']).toEqual([{ id: 1 }]);
    });
    test('Autocomplete Set Param Mutation Test', () => {
      store.commit('autocomplete/_setParam', 'lorem');
      expect(store.getters['autocomplete/getParam']).toEqual('lorem');
    });
    test('Autocomplete Set Results Mutation Test', () => {
      store.commit('autocomplete/_setCategoryResults', [ { id: 1 } ]);
      store.commit('autocomplete/_setProductResults', [ { id: 2 }])
      expect(store.getters['autocomplete/getResults']).toEqual({"categories": [{"id": 1}], "products": [{"id": 2}]});
    })
  });

});
