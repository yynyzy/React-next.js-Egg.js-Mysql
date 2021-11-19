import axios from 'axios'
import { API_URL } from '../config/env'
let baseURL = API_URL
// if (process.env.NODE_ENV === 'production') {
//     baseURL = '上线的地址'
// } else {
//     baseURL = '开发的地址'
// }


// 拦截器
axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.authorization = token
    }
    config.baseURL = baseURL
    config.timeout = 10000
    return config;
}, (error) => {
    return Promise.reject(error)
})

// axios的get请求
function axios_get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

// axios的post请求
function axios_post(url, data) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'POST',
            data
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.response)
        })
    })
}

export {
    axios,
    axios_get,
    axios_post
}

