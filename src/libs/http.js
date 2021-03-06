import axios from "axios";
import Vue from "vue";
import { store } from "@/store";
import { router } from "@/router.js";
export let eventHub = new Vue();
let baseURL = Window.apiUrl || "http://localhost:8088";

let loading = store;
// axios.interceptors.response.use(response => {
//     if(!response.data.status){
//         console.log("rejected");
//         return Promise.reject(response.data);
//     }
//     return response;
// });
axios.defaults.timeout = 120000; //  响应时间
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; // 配置请求头 responseType:
axios.defaults.baseURL = baseURL;
async function get(path, params, needAuten = true, needLoading = false) {
  axios.defaults.headers.common["token"] = window.localStorage.getItem("token");
  axios.defaults.headers.common["needAuten"] = needAuten;
  try {
    needLoading && store.commit("showLoading");
    let res = await axios.get(`api/${path}`, { params });
    needLoading && store.commit("hideLoading");
    return res.data;
  } catch (error) {
    if (error.response) {
      showStateError(error.response);
    } else if (error.status) {
      showStateError(error);
    } else {
      alert(`服务器故障，请【稍后再试】或【联系管理员】`);
    }
  } finally {
    needLoading && store.commit("hideLoading");
  }
}

async function post(path, params, needAuten = true, needLoading = false) {
  axios.defaults.headers.common["token"] = window.localStorage.getItem("token");
  axios.defaults.headers.common["needAuten"] = needAuten;
  try {
    needLoading && store.commit("showLoading");
    let res = await axios.post(`api/${path}`, params);
    needLoading && store.commit("hideLoading");
    return res.data;
  } catch (error) {
    if (error.response) {
      showStateError(error.response);
    }
  } finally {
    needLoading && store.commit("hideLoading");
  }
}

function showStateError(response) {
  switch (response.status) {
    case 400:
      alert(response.data.message);
      return Promise.reject(response);
      break;
    case 401:
      if (location.pathname !== "/login") {
        router.replace({
          path: "/login",
          query: { redirect: location.pathname + location.search }
        });
      }
      break;
    case 404:
      store.commit("showModal", "访问的后台接口不存在");
      break;
    case 500:
      store.commit("showModal", response.data || "系统错误，请【联系管理员】");
      break;
    default:
      store.commit("showModal", "系统异常");
  }
}

export let http = { post, get };
