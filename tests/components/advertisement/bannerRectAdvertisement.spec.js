import Vuex from 'vuex';
import {createLocalVue, mount, shallowMount} from "@vue/test-utils"
import BannerRectAdvertisement from "~/components/Advertisement/BannerRectAdvertisement";
describe("component Advertisement/BannerRectAdvertisement", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let NuxtStore
  let store
  let wrapper
  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    NuxtStore = await import(storePath)
    store = await  NuxtStore.createStore()
  })
  beforeEach(() => {
    wrapper = shallowMount(BannerRectAdvertisement, {
      stubs: ['nuxt-link'],
      localVue,
      props: {
        title: 'Lorem Ipsum',
        image: 'image.jpg',
        link: 'https://image.com'
      },
      mocks: {
        $store: store,
      }
    })
  });
  describe('Index Page Tests', () => {
    test('init', () => {
      expect(wrapper).toBeTruthy();
      expect(wrapper.vm).toBeTruthy();
    })
  });


});
