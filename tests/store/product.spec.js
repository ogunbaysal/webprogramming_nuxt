import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils"

describe("store/product", () => {
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
  describe('Product Tests', () => {
    test('product init', () => {
      expect(true).toEqual(true);
    })
  });


});
