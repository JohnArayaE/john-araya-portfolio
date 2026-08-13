export default defineNuxtConfig({
  compatibilityDate: '2026-08-13',

  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  i18n: {
    locales: [
      {
        code: 'es',
        name: 'Español',
        file: 'es.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    defaultLocale: 'es',
    strategy: 'no_prefix'
  }
})