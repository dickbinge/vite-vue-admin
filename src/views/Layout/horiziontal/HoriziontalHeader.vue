<template>
  <Height />
  <div class="horiziontal-header" :class="{'fixed-header': themeConfig.fixedHeader}">
    <div class="header-inner">
      <el-menu
        mode="horizontal"
        :default-active="activeMenu"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="themeConfig.uniqueOpened"
        :collapse-transition="false"
        class="menu-horizontal">
        <sider-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path">
        </sider-item>
      </el-menu>
      <HeaderToRight />
    </div>
    <TagsView v-if="themeConfig.showTag"/>
  </div>
</template>

<script setup>
import { useSettingStore } from '@/store/modules/setting';
import Height from '@/components/Header/Height';
import HeaderToRight from '@/components/Header/HeaderToRight';
import SiderItem from '@/components/SiderBar/SiderItem';
import { computed } from 'vue';

const settingStore = useSettingStore();
const themeConfig = computed(() => settingStore.themeConfig);
const permission_routes = [];

</script>

<style lang="scss" scoped>

</style>
