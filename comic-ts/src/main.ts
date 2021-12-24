import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/global.css'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createPinia } from 'pinia'

axios.interceptors.response.use((config) => {
    NProgress.start()
    // alert('请求开始')
    return config
})

axios.interceptors.response.use((config) => {
    NProgress.done()
    return config
})

createApp(App).use(ElementPlus).use(router).use(createPinia()).mount('#app')
