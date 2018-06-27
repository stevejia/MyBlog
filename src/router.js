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
        }
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
export default routers;
