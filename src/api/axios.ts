import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = ''
const axios = Axios.create({
    baseURL,
    timeout: 20000,
})

// 请求拦截器
axios.interceptors.request.use((config) => {
    // 可以根据实际情况对config做处理，比如给请求头添加token
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response && error.response.data) {
        const code = error.response.status
        const msg = error.response.data.message
        ElMessage.error(`Code:${code}, Message: ${msg}`)
    } else {
        ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
})
