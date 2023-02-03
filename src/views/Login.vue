<template>
  <div class="login-container">
    <div class="login-form-wrapper">
      <div class="header">
        <p class="login-title">{{ state.loginTitle }}</p>
      </div>
      <el-form ref="loginForm" :model="state.loginForm" :rules="loginRules" label-width="120px" label-position="top">
        <el-form-item label="账号" prop="account" required>
          <el-input v-model="state.loginForm.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" required>
          <el-input v-model="state.loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <span class="login-tips">
          登录表示您已同意<a>《服务条款》</a>
        </span>
        <el-button type="primary" class="login-btn" @click="handleSubmit">立即登录</el-button>
        <el-button @click="handleReset" v-if="false"></el-button>
        <el-checkbox label="下次自动登录" v-model="state.loginForm.checked"></el-checkbox>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const state = reactive({
  loginTitle: '欢迎登陆',
  loginForm: {
    account: 'admin',
    password: '123456',
    checked: true
  }
});
const loginRules = reactive({
  account: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
});
const loginForm = ref(null);
const handleSubmit = () => {
  loginForm.value.validate(valid => {
    if (valid) {
      window.location.href = '/';
    }
  });
};
const handleReset = () => {
  loginForm.value.resetFields();
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .login-form-wrapper {
    align-self: center;
    width: 400px;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 21px 41px rgba($color: #000000, $alpha: .21);
    .header {
      text-align: center;
      .login-title {
        font-size: 28px;
        font-weight: 700;
        color: var(--el-color-primary);
      }
    }
    .login-tips {
      display: block;
      font-size: 12px;
      margin: 15px 0;
      a {
        color: var(--link-color);
        cursor: pointer;
      }
    }
    .login-btn {
      width: 100%;
    }
  }
  @media screen and (max-width: 992px) {
    .login-form-wrapper {
      box-shadow: none;
    }
  }
}
</style>
