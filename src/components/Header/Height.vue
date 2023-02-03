<template>
  <div :style="heightStyle">
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSettingStore } from '@/store/modules/setting';
const settingStore = useSettingStore();
const showTag = computed(() => settingStore.themeConfig.showTag);
const heightStyle = computed(() => ({
  height: `${showTag.value ? 90 : 50}px`
}));
</script>

<style lang="scss" scoped>
</style>
