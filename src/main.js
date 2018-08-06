import Vue from "vue";
import iView from "iview";
import VueRouter from "vue-router";
import { router } from "./router";
import Vuex from "vuex";
import {util} from "./libs/util";
import App from "./app.vue";
import "iview/dist/styles/iview.css";
import vuewResource from "vue-resource";
// import Axios from 'Axios';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);
Vue.use(vuewResource);
// Vue.use(Axios);

router.beforeEach((to, from, next) => {
  debugger;
  var token = localStorage.getItem("token");
  var title = '';
  if (to.name === "login" && token) {
    // next({
    //   path: from.fullPath,
    //   replace: true,
    // });
    // title = from.meta.title;
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

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});

new Vue({
  el: "#app",
  router: router,
  store: store
  // render: h => h(App)
});
