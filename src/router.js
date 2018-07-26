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
        path: "",
        redirect: "sjblog"
      },
      {
        path: "sjblog",
        name: "sjblog",
        component: main,
        
        children: [
          {
            path: "",
            component: index,
            
            children: [
              {
                path: '',
                redirect: 'recommend'
              },
              {
                path: 'recommend/:type',
                name: 'recommend',
                component: article,
                meta: {
                  requireAuth: true,
                  title: "世秋的博客"
                },
                props: (route)=>{
                  return {
                    type: route.params.type,
                  }
                },
              }
            ]
          },
        ]
      },
      {
        path: "login",
        name: "login",
        meta: {
          title: "登陆"
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
