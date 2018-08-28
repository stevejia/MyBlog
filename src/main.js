import Vue from "vue";
import iView from "iview";
import VueRouter from "vue-router";
import { router } from "./router";
import Vuex from "vuex";
import {util} from "./libs/util";
import App from "./app.vue";
import "iview/dist/styles/iview.css";
import vuewResource from "vue-resource";
import {http} from '@/libs/http';
// import Axios from 'Axios';
import mavonEditor from 'mavon-editor'
    // markdown-it对象：md.s_markdown, md => mavonEditor实例
    //                 or
    //                 mavonEditor.markdownIt 
    import 'mavon-editor/dist/css/index.css'
    // use
    Vue.use(mavonEditor)

// 作者：hinesboy
// 链接：https://www.jianshu.com/p/04376d0c9ff1
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);
Vue.use(vuewResource);
// Vue.use(Axios);

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem("token");
  var title = '';
  if(!to.name && to.path=== '/'){
    router.replace({
      path: "/sjblog/article/recommend",
    });
    next();
  }
  if (to.name === "login" && token) {
    // next({
    //   path: from.fullPath,
    //   replace: true,
    // });
    // title = from.meta.title;
    next();
  } else {
    if (to.matched.some(d => d.meta.requireAuth)) {
      if (token) {
        
        next();
      } else {
        router.replace({
          path: "/login",
          query: { redirect: to.fullPath }
        });
        next();
      }
    } else {
      next();
    }
  }
  title = to.meta.title;
  // iView.LoadingBar.start();
  util.setTitle(title);
});

router.afterEach(() => {
  // iView.LoadingBar.finish();
  // iView.LoadingBar.close();
  window.scrollTo(0, 0);
});

http.get('/api/commondata/get',null).then((res)=>{
  debugger;
  const commonData = res.commonData;
  const store = new Vuex.Store({
    state: {
      commonData: commonData
    },
    getters: {
      getCommonData: state=>{
        return state.commonData;
      }
    },
    mutations: {},
    actions: {}
  });
  new Vue({
    el: "#app",
    router: router,
    store: store
    // render: h => h(App)
  });
});



