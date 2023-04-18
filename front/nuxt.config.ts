export default defineNuxtConfig({
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  },
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      title: 'test',
      meta: [{ name: 'description', content: 'test' }],
    },
  },

})
