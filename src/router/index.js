import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login';

// 2. 定义一些路由：每个路由都需要映射到一个组件。

const asyncRoutes = [

];

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home'),
        name: 'home',
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden: true,
    meta: {
      title: '登录'
    }
  },
  ...asyncRoutes
];

// 3. 创建路由实例并传递 `routes` 配置。
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
