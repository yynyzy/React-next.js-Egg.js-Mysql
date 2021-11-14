/**
 *  处理首页的网络请求接口方法
 */
import { Axios_get } from '../utils/axios'

const getArticleList = async () => {

    return axios.get('./front/getArticleList')
}

export {
    getArticleList
}
