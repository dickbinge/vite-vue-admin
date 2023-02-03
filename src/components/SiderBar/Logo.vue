<template>
  <div class="logo-container">
    <Transition name="logoFade">
      <router-link v-if="isCollapse" key="collapse" to="/" class="logo-link">
        <img :src="logoSrc" />
      </router-link>
      <router-link v-else key="expend" to="/" class="logo-link">
        <img :src="logoSrc" />
        <span class="logo-link-text">Vue-Vite-admin</span>
      </router-link>
    </Transition>
  </div>
</template>

<script setup>
import logoSrc from '@/assets/images/logo.svg';

defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
});

</script>

<style lang="scss" scoped>
  .logoFade-enter-active {
    transition: opacity 2s;
  }
  .logoFade-enter-from,
  .logoFade-leave-to {
    opacity: 0;
  }
  .logo-container {
    width: 100%;
    height: 50px;
    background: #2b2f3a;
    .logo-link {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      img {
        height: 36px;
      }
      &-text {
        margin-left: 12px;
        font-weight: 600;
        color: #fff;
      }
    }
  }
</style>
