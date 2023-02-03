<template>
  <el-dropdown @command="handleCommand">
    <div class="avatar-container">
      <el-avatar :src="avatarSrc" :size="30"></el-avatar>
      <span class="user-name">{{ userInfo.userName }}</span>
      <el-icon><ArrowDown /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item divided>当前角色：{{ userInfo.roleName }}</el-dropdown-item>
        <el-dropdown-item divided command="edit"><el-icon><Edit/></el-icon>修改密码</el-dropdown-item>
        <el-dropdown-item divided command="logout"><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { reactive } from 'vue';
import avatarSrc from '@/assets/images/avatar.png';

const userInfo = reactive({
  userName: 'admin',
  role: '1',
  roleName: '管理员'
});

const handleEditPass = () => {

};
const handleLogout = () => {

};
const handleCommand = (command) => {
  if (command === 'edit') {
    handleEditPass();
  } else {
    handleLogout();
  }
};

</script>

<style lang="scss" scoped>
.avatar-container {
  display: flex;
  align-items: center;
  .user-name {
    margin: 6px;
  }
}
</style>
