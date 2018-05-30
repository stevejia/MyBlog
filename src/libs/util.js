import axios from 'axios';
import env from '../config/env';
import router from '../router';
import VueRouter from 'vue-router';
let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};


const ajaxUrl = env === 'development' ?
    'http://localhost:8088' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

// util.ajax.interceptors.response.use(
//     response => {
//         debugger;
//         const data = response.data;
//         switch(data.code){
//             case 401:
//             console.log("ddd");
//             // 返回 401 清除token信息并跳转到登录页面
//             store.commit(types.LOGOUT);
//             router.replace({
//                 path: 'login',
//                 query: {redirect: router.currentRoute.fullPath}
//             });
//             break;
//         }
//         return response;
//     },
//     error => {
//         const data = response.data;
//         debugger;
//         switch(data.code){
//             case 401:
//             console.log("ddd");
//             // 返回 401 清除token信息并跳转到登录页面
//             store.commit(types.LOGOUT);
//             router.replace({
//                 path: 'login',
//                 query: {redirect: router.currentRoute.fullPath}
//             });
//             break;
//         }
//         return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//     }
// );


util.post = function(url, params, callback){
    util.ajax.post(url, params).then(function(result){
        debugger;
        var isValid = util.checkToken(result);
        if(!isValid){
            router.replace({
                path: 'login',
                query: {redirect: "/"}
            });
            return false;
        }
        callback && callback(result);
    });
};
util.checkToken = function(result){
    if(!result.data.tokenStatus){
        return false;
    }
    return true;
};
export default util;