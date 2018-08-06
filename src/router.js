import VueRouter from "vue-router";
import App from "@/app";
import index from "@/views/home/index";
import main from "@/views/main";
import login from "@/views/account/login";
import article from '@/views/home/article'
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
