export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],  // Nuxt 4 résout ~ depuis app/

  modules: ['@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: '',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})