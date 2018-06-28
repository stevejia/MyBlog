import VueRouter from "vue-router";
import App from '@/app';
import index from '@/views/home/index';
import main from '@/views/main'
import login from '@/views/account/login'
const routers = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: 'sjblog'
      },
      {
        path: 'sjblog',
        name: 'sjblog',
        component: main,
        meta: {
            requireAuth: true,
            title: '首页'
        },
        children: [
          {
            path: '',
            redirect: 'index',
          },
          {
            path: 'index',
            name: 'index',
            component: index,
            meta: {
              requireAuth: true,
              title: '首页'
          },
          }
        ]
      },
      {
        path: 'login',
        name: 'login',
        meta: {
          title: '登陆'
        },
        component: login
      }
    ]
  }
];
const RouterConfig = {
  mode: "history",
  routes: routers
};
// 路由配置
export const router = new VueRouter(RouterConfig);
