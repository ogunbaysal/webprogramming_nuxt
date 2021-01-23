import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils"

describe("store/category", () => {
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
  describe('Category Mutation Tests', () => {

    test('Categories Set Test', () => {
      store.commit('category/_setCategories', [ { id: 1 } ]);
      expect(store.getters['category/getCategories']).toEqual([ { id: 1 } ]);
    });

    test('Category Set Test', () => {
      store.commit('category/_setCategory', { title: 'Lorem Ipsum' });
      expect(store.getters['category/getCategory']).toEqual({ title :'Lorem Ipsum' });
    });
  });

});
