import VueRouter from "vue-router";
import App from "@/app";
import index from "@/views/home/index";
import main from "@/views/main";
import login from "@/views/account/login";
import article from '@/views/home/article';
import signup from '@/views/account/signup';
import writeBlog from '@/views/user/writeblog';
import manageBackend from '@/views/backend/managebackend';
const routers = [
  {
    path: "/",
    component: App,
    children: [ 
      {
        path: "login",
        name: "login",
        meta: {
          title: "登陆"
        },
        component: login
      },
      {
        path: 'sjblog',
        component: main,
        children: [{
          path: 'article',
          component: index,
          children: [{
              path: 'recommend',
              name: 'recommend',
              component: article,
              meta: {
                requireAuth: true,
                title: '推荐',
              }
          }]
        },
        {
          path: "signup",
          name: "signup",
          meta: {
            title: "注册"
          },
          component: signup
        },
        {
          path: 'writeblog',
          name: 'writeblog',
          component: writeBlog,
          meta: {
            requireAuth: true,
            title: '写博客',
          }
        },
        {
          path: 'managebackend',
          name: 'managebackend',
          component: manageBackend,
          meta: {
            requireAuth: true,
            title: '写博客',
          }
        }]
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
