import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

axios.interceptors.request.use(
    (config) => {
        console.log('请求拦截')
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(
    (response) => {
        console.log('请求成功')
        return response
    },
    (error) => {
        console.log('请求失败')
        return Promise.reject(error)
    }
)
createApp(App).use(ElementPlus).use(router).mount('#app')
