import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/about' },
        { path: '/home', component: () => import('../components/Home.vue') },
        { path: '/about', component: () => import('../components/About.vue') },
    ],
})

export default router
