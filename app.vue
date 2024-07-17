<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <van-button type="primary" @click="showToast('toast')">button</van-button>

    <div class="my-component">
      <h1>Hello SCSS!</h1>
      <p>{{ $t('a.title') }}</p>
    </div>
  </div>
</template>

<script setup>
import '@/sass/variable.scss'
import { useI18n } from 'vue-i18n'
import { getParameterByName } from '@/utils'
// import { Locale } from 'vant'
import { globalStore } from '@/store/global'

const { locale } = useI18n({})
const globalInfo = globalStore()
// const language = ref('')
// provide('language', language)

onMounted(() => {
  console.log(1000000);
  const lang =
    getParameterByName('language') ||
    getParameterByName('lan') ||
    getParameterByName('lang') ||
    'zh-hant'
  locale.value = lang
  console.log(111111, lang);
  globalInfo.setGlobalInfo({
    language: lang,
    // skin: theme.value,
    upsDownsColor: getParameterByName('upsDownsColor') || '2'
  })
  // language.value = lang
})
</script>


<style lang="scss" scoped>
.my-component {
  h1 {
    font-size: 24px;
    color: var(--pink-color); // 使用 SCSS 变量
  }
  p {
    font-size: 16px;
  }
}
</style>
