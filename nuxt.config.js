export default {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    COOKIE_MAX_AGE: process.env.COOKIE_MAX_AGE,
    APP_ENCRYPT_KEY: process.env.APP_ENCRYPT_KEY
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Eclairia",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, height=device-height, initial-scale=0.9, maximum-scale=0.9,minimum-scale=0.9, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content: "Eclairia is a web app for audio broadcasting",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/axios' },
    { src: '@/plugins/server/session' },
    { src: '@/plugins/global-mixin' },
    { src: '@/plugins/snackbar' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "nuxt-typed-vuex",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api/module",
    "@vueuse/nuxt",
    "@nuxtjs/dotenv"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    'cookie-universal-nuxt',
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxt/image",
    '@nuxtjs/toast',
    'vue-sweetalert2/nuxt'
  ],
  toast: {
    duration: 8000,
    position: 'top-center',
    iconPack: 'fontawesome',
    register: [
      {
        name: 'bug',
        message: 'Oops... Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  sweetalert: {
    confirmButtonColor: '#82d616',
    cancelButtonColor: '#ea0606',
    cancelButtonText: 'Non',
    confirmButtonText: 'Oui'
  },
  devServerHandlers: [],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "fr",
      stort_name: "Eclairia",
      name: "Eclairia",
      theme_color: "#000A2E",
      description: "Eclairia",
      start_url: "/",
    },
    icon: {
      /* icon options */
      fileName: "app.png",
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    meta: {
      /* meta options */
      title: "Eclairia",
      author: "Eclairia",
      mobileAppIOS: true,
    },
    workbox: {
      /* workbox options */
    },
  },

  image: {
    // Options
    domains: ["images.unsplash.com"],
    alias: {
      unsplash: "",
    },
    imgix: {
      baseURL: "https://images.unsplash.com",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
