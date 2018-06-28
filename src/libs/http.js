import axios from 'axios'
import Vue from 'vue'
import { router } from '@/router/router.js'
export let eventHub = new Vue()
let baseURL = Window.apiUrl

axios.defaults.timeout = 120000 //  响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' // 配置请求头 responseType:
axios.defaults.baseURL = baseURL

function get(path, params, needLoading = false) {
    axios.defaults.headers.common['token'] = window.localStorage.getItem('token')
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
            if (!response.status) {
                MessageBox.alert(response.message, '提示');
                reject(response.data);
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
                MessageBox.alert(`服务器故障，请【稍后再试】或【联系管理员】`)
            }
            reject(error)
        })
    })
}

function post(path, params, needLoading = false) {
    axios.defaults.headers.common['token'] = window.localStorage.getItem('token')
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

            if (!response.data.status) {
                MessageBox.alert(response.data.message);
                reject(response.data);
            } else {
                resolve(response.data)
            }
        }).catch(error => {
            if (needLoading) {
                Indicator.close();
            }
            if (error.response) {
                showStateError(error.response)
            } else if (error.status) {
                showStateError(error)
            } else {
                MessageBox.alert(`服务器故障，请【稍后再试】或【联系管理员】`);
            }
            reject(error)
        })
    })
}

function showStateError(response) {
    switch (response.status) {
        case 400:
            MessageBox.alert(response.data.message)
            break
        case 401:
            MessageBox.alert('token过期，请重新登录')
            if (location.pathname !== '/login') {
                router.push({
                    path: '/login',
                    query: { redirect: location.pathname + location.search }
                })
            }
            break
        case 404:
            MessageBox.alert('访问的后台接口不存在')
            break
        case 500:
            MessageBox.alert('系统错误，请【联系管理员】')
            break
        default:
            MessageBox.alert('系统异常')
    }
}

export let http = { post, get }