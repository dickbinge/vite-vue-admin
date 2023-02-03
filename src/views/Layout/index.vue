<template>
  <horizion-layout v-if="mode === 'horizion'" />
  <vertical-layout v-else/>
</template>

<script setup>
import { computed } from 'vue';
import { useSettingStore } from '@/store/modules/setting';
import HorizionLayout from './horiziontal';
import VerticalLayout from './vertical';

const settingStore = useSettingStore();
const mode = computed(() => settingStore.mode);

</script>

<style lang="scss" scoped>

</style>
