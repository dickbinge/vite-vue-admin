import router from './router';
import { useUserStore } from './store/modules/user';

const whiteList = ['/login', '/auth-redirect']; // 设置白名单

// 路由权限拦截
// router.beforeEach(async(to, from, next) => {
//   const userStore = useUserStore();
//   const hasToken = userStore.token || true;
//   if (hasToken) {
//     if (to.path === '/login') {
//       next({ path: '/' });
//     } else {
//       try {
//         const permission = userStore.permission;
//         if (!permission.length) {
//           await useUserStore.getPermission();
//           next({ ...to, replace: true });
//         } else {
//           next();
//         }
//       } catch (error) {
//         next(`/login?redirect=${to.path}`);
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) {
//       next();
//     } else {
//       next(`/login?redirect=${to.path}`);
//     }
//   }
// });

router.beforeEach(async(to, from, next) => {
  const userStore = useUserStore();
  try {
    const permission = userStore.permission;
    if (!permission.length) {
      userStore.getPermission();
      next({ ...to, replace: true });
    } else {
      next();
    }
  } catch (error) {
    next(`/login?redirect=${to.path}`);
  }
});
