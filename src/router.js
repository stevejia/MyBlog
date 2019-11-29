import VueRouter from "vue-router";
import App from "@/app";
import index from "@/views/home/index";
import main from "@/views/main";
import login from "@/views/account/login";
import articles from "@/views/home/articles";
import article from "@/views/home/article";
import signup from "@/views/account/signup";
import writeBlog from "@/views/user/writeblog";
import articleDetail from "@/views/home/detail";
import articleList from "@/views/home/list";

const loginRouter = {
  path: "/login",
  name: "login",
  component: login,
  meta: {
    title: "登录"
  }
};

const routers = [
  {
    path: "",
    component: App,
    children: [
      loginRouter,
      // page404,
      // page403,
      {
        path: "blog",
        name: "blog",
        component: main,
        children: [
          {
            path: "articles",
            name: "articles",
            component: index,
            children: [
              {
                path: "recommend",
                name: "recommend",
                component: articles,
                meta: {
                  title: "推荐"
                }
              }
            ]
          },
          {
            path: "article",
            name: "article",
            component: article,
            children: [
              {
                path: "detail/:id",
                name: "detail",
                component: articleDetail,
                meta: {
                  title: "文章详情"
                }
              },
              {
                path: "list/:userId",
                name: "list",
                component: articleList,
                props: route => {
                  return { ...route.query };
                },
                meta: {
                  title: "文章列表"
                }
              }
            ]
          },
          {
            path: "writeblog",
            name: "writeblog",
            component: writeBlog,
            meta: {
              title: "写博客"
            }
          },
          {
            path: "signup",
            name: "signup",
            meta: {
              title: "注册"
            },
            component: signup
          }
          // ...subRoutes
        ]
      }
    ]
  }
];

// const routers = [
//   {
//     path: "/",
//     component: App,
//     children: [
//       {
//         path: "login",
//         name: "login",
//         meta: {
//           title: "登陆"
//         },
//         component: login
//       },
//       {
//         path: "/",
//         component: main,
//         children: [
//           {
//             path: "/articles",
//             component: index,
//             redirect: article,
//             children: [
//               {
//                 path: "/recommend",
//                 name: "recommend",
//                 component: article,
//                 meta: {
//                   title: "推荐"
//                 }
//               },
//               {
//                 path: "/career",
//                 name: "career",
//                 component: article,
//                 meta: {
//                   title: "程序人生"
//                 },
//                 props: route => {
//                   return {
//                     type: route.query.type
//                   };
//                 }
//               },
//               {
//                 path: "details/:id",
//                 name: "details",
//                 component: articleDetail,
//                 meta: {
//                   title: "文章"
//                 },
//                 props: route => {
//                   return {
//                     id: route.params.id
//                   };
//                 }
//               }
//             ]
//           },
//           {
//             path: "signup",
//             name: "signup",
//             meta: {
//               title: "注册"
//             },
//             component: signup
//           },
//           {
//             path: "writeblog",
//             name: "writeblog",
//             component: writeBlog,
//             meta: {
//               requireAuth: true,
//               title: "写博客"
//             }
//           },
//           {
//             path: "managebackend",
//             name: "managebackend",
//             component: manageBackend,
//             meta: {
//               requireAuth: true,
//               title: "写博客"
//             }
//           }
//         ]
//       }
//     ]
//   }
// ];
const RouterConfig = {
  mode: "history",
  routes: routers
};
// 路由配置
export const router = new VueRouter(RouterConfig);
