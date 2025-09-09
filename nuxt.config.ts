import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true, // Explicitly enable pages directory
  ssr: true,

  // Netlify deployment configuration
  nitro: {
    preset: 'netlify'
  },

  // Runtime configuration for Hasura
  runtimeConfig: {
    public: {
      hasuraUrl: process.env.MY_HASURA_URL ,
      hasuraAdminSecret: process.env.MY_HASURA_SECRET || ''
    }
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],

  // Separate i18n configuration
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'lo',
        iso: 'lo-LA', 
        name: 'ລາວ',
        file: 'lo.json'
      }
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  }
})