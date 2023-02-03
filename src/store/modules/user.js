import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => ({
    userInfo: {
      token: null,
      userName: '',
      role: '',
      roleName: ''
    },
    permission: [] // 菜单权限
  }),
  getters: {},
  actions: {
    // 异步获取用户权限菜单列表
    getPermission() {
      this.permission = [
        {
          path: '/home',
          name: '首页',
          icon: 'House'
        }
      ];
    }
  }
});
