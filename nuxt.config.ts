export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-api-party',
    '@nuxt/fonts',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    preset: 'netlify-edge',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/', '/assignment'],
    },
  },

  apiParty: {
    endpoints: {
      pokemon: {
        url: 'https://pokeapi.co',
        schema: 'https://raw.githubusercontent.com/PokeAPI/pokeapi/refs/heads/master/openapi.yml',
      },
      rickAndMorty: {
        url: 'https://rickandmortyapi.com/api',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  // Looks like netlify dont like pwa
  // pwa,
})
