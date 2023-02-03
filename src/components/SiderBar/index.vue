<template>
  <div class="sider-container" :class="{ 'has-logo': themeConfig.showLogo, 'is-collapse': isCollapse }">
    <Logo :isCollapse="isCollapse" v-if="themeConfig.showLogo"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="themeConfig.uniqueOpened"
        :collapse-transition="false"
        class="vertical-menu"
        :collapse="isCollapse">
        <sider-item
          v-for="route in permission"
          :key="route.path"
          :item="route"
          :base-path="route.path">
        </sider-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Logo from './Logo';
import SiderItem from './SiderItem';
import { useSettingStore } from '@/store/modules/setting';
import { useUserStore } from '@/store/modules/user';

const route = useRoute();
const settingStore = useSettingStore();
const userStore = useUserStore();

const isCollapse = computed(() => !settingStore.isCollapse);
const themeConfig = computed(() => settingStore.themeConfig);
const permission = computed(() => userStore.permission);

const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

</script>

<style lang="scss">
.sider-container {
  width: 210px;
  transition: width 0.28s;
  background-color: #304156;
  .el-scrollbar {
    height: 100%;
    .vertical-menu {
      height: 100%;
      border: none;
      .el-menu-item {
        &.is-active {
          background-color: #001528;
        }
      }
    }
    .scrollbar-wrapper {
      overflow-x: hidden;
    }
  }
  &.is-collapse {
    width: 50px;
  }
  &.has-logo {
    .el-scrollbar {
      height: calc(100% - 50px);
    }
  }
}
</style>
