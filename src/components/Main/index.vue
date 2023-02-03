<template>
  <div class="app-main">
    <router-view v-slot="{Component, route}">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive :include="cachRoutes" v-if="isReload">
          <component :is="useWrapComponents(Component, route)" :key="route.path"/>
        </keep-alive>
    </transition>
  </router-view>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useWrapComponents } from '@/hooks/useWrapComponents';
import { useSettingStore } from '@/store/modules/setting';
const settingStore = useSettingStore();

const isReload = computed(() => settingStore.isReload);

const cachRoutes = computed(() => []);

</script>

<style lang="scss" scoped>

</style>
