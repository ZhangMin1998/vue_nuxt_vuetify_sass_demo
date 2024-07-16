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
      <p>This text is styled using SCSS.</p>
    </div>
  </div>
</template>

<script>
import '@/sass/variable.scss'
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
