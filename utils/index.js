import { globalStore } from '@/store/global'

export function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export function getLang() {
  const lang =
    getParameterByName('lang') || globalStore().globalInfo.language || 'zh-hans'
  return sessionStorage.getItem('lang') || lang
}