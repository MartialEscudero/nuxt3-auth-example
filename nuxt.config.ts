export default defineNuxtConfig({
  modules: [
    "@nuxtjs/eslint-module",
  ],
  css: [
    "~/assets/css/main.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});