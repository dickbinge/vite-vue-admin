<template>
  <template v-if="!item.hidden">
    <template v-if="!item.children">
      <app-link :to="item.path">
        <el-menu-item :index="item.path">
          <el-icon :size="20">
            <component :is="item.icon"/>
          </el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </app-link>
    </template>
    <el-sub-menu :index="resolvePath(item.path)" v-else popper-append-to-body>
      <template #title>
        <el-icon :size="20">
          <component :is="item.meta?.icon"></component>
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <sider-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)">
      </sider-item>
    </el-sub-menu>
  </template>
</template>

<script setup>
import path from 'path-browserify';
import { isExternal } from '@/utils/validate';

import AppLink from './Link';

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  }
});

const resolvePath = (routePath) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};
</script>

<style lang="scss" scoped>

</style>
