import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@vant/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  css: [
    // '@/sass/variable.scss', // 你的 SCSS 文件路径
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
