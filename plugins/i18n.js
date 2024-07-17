import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'

import zhHant from '@/lang/zh-hant'
import zhHans from '@/lang/zh-hans'
import en from '@/lang/en'
// 国际化

// 语言库
const messages = {
  'zh-hant': zhHant,
  'zh-hans': zhHans,
  en: en
}

// 默认语言
const langDefault = 'zh-hant'

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
