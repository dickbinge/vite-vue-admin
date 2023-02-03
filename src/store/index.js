import { defineStore, createPinia } from 'pinia';
// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export const Store = defineStore({
  // id 唯一标识
  id: 'globalState',
  state: () => ({}),
  getters: {},
  actions: {},
  persist: {
    key: 'globalState',
    storage: window.sessionStorage // 存储位置
  }
});
const pinia = createPinia();
// pinia使用
pinia.use(piniaPluginPersistedstate);
export default pinia;
