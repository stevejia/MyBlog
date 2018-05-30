// import env from '../config/env';
// const ajaxUrl = env === 'development' ?
//     'http://localhost:8088' :
//     env === 'production' ?
//     'https://www.url.com' :
//     'https://debug.url.com';
// const Axios = axios.create({
//     baseURL: ajaxUrl,
//     timeout: 10000,
//     responseType: "json",
//     withCredentials: true, // 是否允许带cookie这些
//     // transformResponse:[function (data) {  
//     //     return querystring.stringify(data)//转换data 不用每个请求都用 querystring.stringify;
//     // }],
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
//     }
// });
// Axios.interceptors.request.use(
//     config => {
//         debugger;
//         // 在发送请求之前做某件事
//         if (
//             config.method === "post" ||
//             config.method === "put" ||
//             config.method === "delete"
//         ) {
//             // 添加token
//             if (localStorage.getItem("joywareUser")) {
//                 config.data.accessToken = JSON.parse(localStorage.getItem("joywareUser")).accessToken;
//                 console.log(config.data.accessToken)
//             };
//             config.data = querystring.stringify(config.data);//将请求的参数转化
//         }
//         return config;
//     },
//     error => {
//         console.log(error);
//         return Promise.reject("请求拦截报错信息"+error);
//     }
// );

// //返回状态判断(添加响应拦截器)
// Axios.interceptors.response.use(
//     res => {
//         //对响应数据做些事
//         if (res.data.errcode != 0) {
//             return Promise.reject(res.data.errdesc);
//         };
//     },
//     error => {
//         return Promise.reject("返回拦截报错信息"+error);
//     }
// );

// // 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
// export default {
//     install: function (Vue, Option) {
//         Object.defineProperty(Vue.prototype, "$http", { value: Axios });
//     }
// };