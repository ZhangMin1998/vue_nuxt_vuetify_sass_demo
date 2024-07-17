import { defineStore } from 'pinia'

export const globalStore = defineStore('global', {
  state: () => {
    const info = JSON.parse(localStorage.getItem('globalInfo') || null) || {
      language: 'zh-hans',
      skin: 'light',
      upsDownsColor: '2'
    }
    return {
      globalInfo: info,
      errorCompShowStatus: false,
      contactDialogShowStatus: false,
      notAllowed: false,
      loading: false
    }
  },
  actions: {
    setGlobalInfo(globalInfo) {
      localStorage.setItem('globalInfo', JSON.stringify(globalInfo))
      this.globalInfo = globalInfo
    },
    // setErrorCompShowStatus(status) {
    //   this.errorCompShowStatus = status
    // },
    // setContactDialogShowStatus(status) {
    //   this.contactDialogShowStatus = status
    // },
    // setNotAllowed(status) {
    //   this.notAllowed = status
    // },
    // setGlobalLoading(status) {
    //   this.loading = status
    // }
  }
})