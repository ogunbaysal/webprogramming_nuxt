import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils"

describe("store/advertisement", () => {
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
  describe('Advertisement Mutation Tests', () => {

    test('Advertisement Set Rectangular Advertisement Mutation Test', () => {
      store.commit('advertisement/_setRectangularItems', [{ id: 1 }]);
      expect(store.getters['advertisement/getRectangularAdvertisements']).toEqual([{ id: 1 }]);
    });
  });

});
