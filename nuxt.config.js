export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    API_URL: process.env.API_URL || "http://localhost:8000",
    BASE_URL: process.env.BASE_URL || "http://localhost:3000"
  },
  head: {
    title: "QualiPsico",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ["~plugins/vform"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
    "@nuxtjs/router"
  ],

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    ["cookie-universal-nuxt", { alias: "cookiz" }]
  ],

  /*proxy: {
    "/api": {
      target: "http://localhost/api"
    }
  },*/

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/login", method: "post", propertyName: "token" },
          logout: { url: "/logout", method: "post" },
          user: { url: "/me", method: "get", propertyName: "data" }
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.API_URL || "http://localhost:8000/api"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
