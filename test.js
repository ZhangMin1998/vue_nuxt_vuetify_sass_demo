import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify']
  },
  ssr: false,
  modules: [
    '@vant/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})