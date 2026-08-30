export default defineNuxtConfig({
  compatibilityDate: '2026-08-13',

  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode'
  ],

  icon: {
    serverBundle: {
      collections: [
        'lucide',
        'simple-icons'
      ]
    },

    clientBundle: {
      scan: true
    }
  },

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