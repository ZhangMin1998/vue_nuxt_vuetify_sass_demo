import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'

import zhHK from '@/lang/zh-HK'
import zhCN from '@/lang/zh-CN'
import enUS from '@/lang/en-US'
// 国际化

// 语言库
const messages = {
  'zh-HK': zhHK,
  'zh-CN': zhCN,
  'en-US': enUS
}

// 默认语言
const langDefault = 'zh-HK'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: langDefault,
  warnHtmlMessage: false,
  messages
})
export const t = i18n.global.t
export const locale = i18n.global.locale
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
  // nuxtApp.vueApp.config.globalProperties.$getI18nField = (field) => {
  //   switch (locale.value) {
  //     case 'zh-CN':
  //       return field
  //     case 'zh-HK':
  //       return field + 'HK'
  //     case 'en-US':
  //       return field + 'En'
  //     default:
  //       return
  //   }
  // }
})
