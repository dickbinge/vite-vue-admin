<template>
  <div class="vertical-layout">
    <sider-bar></sider-bar>
    <div class="main-container">
      <vertical-header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import SiderBar from '@/components/SiderBar';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import VerticalHeader from './VerticalHeader';

</script>

<style lang="scss" scoped>
.vertical-layout {
  width: 100%;
  height: 100%;
  display: flex;
  .main-container {
    flex: 1;
    position: relative;
  }
}
</style>
