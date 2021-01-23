import Vuex from 'vuex';
import { createLocalVue } from "@vue/test-utils"

describe("store/account", () => {
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
  describe('Account Mutation Tests', () => {

    test('Account Logged In Mutation Test', () => {
      store.commit('account/SET_LOGGED_IN', true);
      expect(store.getters['account/isLoggedIn']).toEqual(true);
    });

    test('Account Message Mutation Test', () => {
      store.commit('account/SET_MESSAGE', 'Hello World');
      expect(store.getters['account/message']).toEqual('Hello World');
    });

    test('Account User Mutation Test', () => {
      store.commit('account/SET_USER',  { username: 'john' });
      expect(store.getters['account/user']).toEqual({ username: 'john' });
    })
  });

});
