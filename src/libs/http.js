import axios from 'axios'
import Vue from 'vue'
import { router } from '@/router.js'
export let eventHub = new Vue()
let baseURL = Window.apiUrl || 'http://localhost:8088';

axios.defaults.timeout = 120000 //  响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 配置请求头 responseType:
axios.defaults.baseURL = baseURL

function get(path, params, needAuten = true, needLoading = false) {
    axios.defaults.headers.common['token'] = window.localStorage.getItem('token');
    axios.defaults.headers.common['needAuten'] = needAuten;
    return new Promise((resolve, reject) => {
        if (needLoading) {
            Indicator.open();
        }
        axios({
            method: 'get',
            url: path,
            params: params
        }).then(response => {
            if (needLoading) {
                Indicator.close();
            }
            resolve(response.data)
        }).catch(error => {
            if (needLoading) {
                Indicator.close();
            }
            if (error.response) {
                showStateError(error.response)
            } else if (error.status) {
                showStateError(error)
            } else {
                alert(`服务器故障，请【稍后再试】或【联系管理员】`);
                // MessageBox.alert()
            }
            // reject(error)
        })
    })
}

function post(path, params, needAuten = true, needLoading = false) {
    axios.defaults.headers.common['token'] = window.localStorage.getItem('token');
    axios.defaults.headers.common['needAuten'] = needAuten;
    return new Promise((resolve, reject) => {
        if (needLoading) {
            Indicator.open();
        }
        axios({
            method: 'post',
            url: path,
            data: params
        }).then(response => {
            if (needLoading) {
                Indicator.close();
            }
            resolve(response.data)
        }).catch(error => {
            if (needLoading) {
                Indicator.close();
            }
            if (error.response) {
                showStateError(error.response)
            } else if (error.status) {
                showStateError(error)
            } else {
                alert(`服务器故障，请【稍后再试】或【联系管理员】`);
                
            }
            reject(error)
        })
    })
}

function showStateError(response) {
    switch (response.status) {
        case 400:
            alert(response.data.message);
            break
        case 401:
            if (location.pathname !== '/login') {
                router.replace({
                    path: '/login',
                    query: { redirect: location.pathname + location.search }
                })
            }
            break
        case 404:
            alert('访问的后台接口不存在');
            break
        case 500:
            alert('系统错误，请【联系管理员】');
            break
        default:
            alert('系统异常');
    }
}

export let http = { post, get }