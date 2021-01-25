export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'webprogramming_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '../../plugins/vuex-persist', ssr: false }
  ],

  // Auto import pages (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDO9lYGyU2OHU-QrJf4V_KiAFAlG-SXvkU",
          authDomain: "webprogramming-trendyol.firebaseapp.com",
          databaseURL: "https://webprogramming-trendyol.firebaseio.com",
          projectId: "webprogramming-trendyol",
          storageBucket: "webprogramming-trendyol.appspot.com",
          messagingSenderId: "734181474303",
          appId: "1:734181474303:web:6590f6b43a3bea436d71ca",
          measurementId: "G-CFGTFRQ0P5"
        },
        services: {
          firestore: true,
          auth: true
        }
      },
    ],
    '@nuxtjs/pwa'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
