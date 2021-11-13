/**
 *  处理首页的网络请求接口方法
 */
import { Axios_get } from '../utils/axios'
import axios from 'axios'
const getArticleList = async () => {
    // return await Axios_get('./front/getArticleList')
    return axios.get('./front/getArticleList')
}

export {
    getArticleList
}