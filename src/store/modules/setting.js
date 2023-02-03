import { defineStore } from 'pinia';
import { PRIMARY_COLOR } from '@/config';
export const useSettingStore = defineStore({
  id: 'settingState',
  state: () => ({
    isCollapse: true,
    withoutAnimation: false,
    device: 'desktop',
    isReload: true,
    // 主题设置
    themeConfig: {
      // 显示设置
      showSetting: false,
      // 菜单展示模式 默认 vertical   horizontal / vertical
      mode: 'vertical',
      // tagsView 是否展示 默认展示
      showTag: true,
      // 页脚
      footer: true,
      // 深色模式 切换暗黑模式
      isDark: false,
      // 显示侧边栏Logo
      showLogo: true,
      // 主题颜色
      primary: PRIMARY_COLOR,
      // element组件大小
      globalComSize: 'default',
      // 是否只保持一个子菜单的展开
      uniqueOpened: true,
      // 固定header
      fixedHeader: true,
      // 灰色模式
      gray: false,
      // 色弱模式
      weak: false
    }
  }),
  getters: {},
  // 可以同步 也可以异步
  actions: {
    // 设置主题
    setThemeConfig({ key, val }) {
      this.themeConfig[key] = val;
    },
    // 切换 Collapse
    setCollapse(value) {
      this.isCollapse = value;
      this.withoutAnimation = false;
    },
    // 关闭侧边栏
    closeSideBar({ withoutAnimation }) {
      this.isCollapse = false;
      this.withoutAnimation = withoutAnimation;
    },
    toggleDevice(device) {
      this.device = device;
    },
    // 刷新
    setReload() {
      this.isReload = false;
      setTimeout(() => {
        this.isReload = true;
      }, 50);
    }
  }
});
