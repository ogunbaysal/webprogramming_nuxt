import Vuex from 'vuex';
import {createLocalVue, shallowMount} from "@vue/test-utils"
import Index from '../../pages/index'
import RNFirebase from '../mock/firebase_mock.js'
describe("page /index", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store
  let wrapper
  const firebase = new RNFirebase();
  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
    store = await  NuxtStore.createStore()
  })
  describe('Index Page Tests', () => {
    test('init', () => {
      const wrapper = shallowMount(Index, {
        stubs: {
          'nuxt-link': true
        },
        mocks: {
          $store: store,
          $fire: firebase
        },
        localVue
      })
      // expect(wrapper).toBeTruthy();
      // expect(wrapper.vm).toBeTruthy();
    })
  });


});
