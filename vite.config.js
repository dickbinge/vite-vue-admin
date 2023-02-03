import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue']
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })]
    }),
    createSvgIconsPlugin({
      // 指定要缓存的文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: '[name]'
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  base: './',
  css: {
    preprocessorOptions: {
      // 覆盖掉element-plus包中的主题变量文件
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  }
});
