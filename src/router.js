const routers = [{
    path: '/',
    meta: {
        title: 'SteveJia',
        requiresAuth: true
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [
        {
          path: 'login',
          component: (resolve) => require(['./views/account/login.vue', resolve]),
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
},
{
    path: '/login',
    meta: {
        title: '登陆'
    },
    
}
];
export default routers;