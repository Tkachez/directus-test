// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-directus'
  ],

  directus: {
    url: 'https://neon-directus.onrender.com/',
    devtools: true
  },

  tailwindcss: {
    configPath: 'tailwind.config',
    cssPath: ['~/assets/styles/main.scss', { injectPosition: 'first' }]
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  googleFonts: {
    families: {
      'Inter Tight': '200..700'
    }
  },
})