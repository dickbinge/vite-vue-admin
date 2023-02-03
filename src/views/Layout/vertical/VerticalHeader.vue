<template>
  <Height v-if="themeConfig.fixedHeader"/>
  <div class="vertical-header" :class="headerClass">
    <div class="header-inner">
      <HeaderToLeft />
      <HeaderToRight />
    </div>
    <TagsView v-if="themeConfig.showTag"/>
  </div>
</template>

<script setup>
import Height from '@/components/Header/Height';
import HeaderToLeft from '@/components/Header/HeaderToLeft';
import HeaderToRight from '@/components/Header/HeaderToRight';
import { useSettingStore } from '@/store/modules/setting';
import { computed } from 'vue';

const settingStore = useSettingStore();
// 主题配置
const themeConfig = computed(() => settingStore.themeConfig);
const isCollapse = computed(() => !settingStore.isCollapse);
const headerClass = computed(() => ({
  'fixed-header': themeConfig.value.fixedHeader,
  'is-collapse': isCollapse.value,
  'no-collapse': !isCollapse.value
}));
</script>

<style lang="scss" scoped>
.vertical-header {
  display: flex;
  flex-direction: column;
  width: calc(100% - 210px);
  transition: width 0.28s;
  &.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
  }
  &.is-collapse {
    width: calc(100% - 50px);
  }
  .header-inner {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
  }
}
</style>
