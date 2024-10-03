// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['usebootstrap'],
  app: {
    head: {
      title: 'The Seattle Cinema',
      meta: [
        { name: 'description', content: 'Website for The Seattle Cinema, featuring theater rental details, movie showtimes and general theater information' }
      ]
    }
  }
})