import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        { path: '/home', component: () => import('../components/Home.vue') },
        {
            name: 'chapter',
            path: '/chapter/:id',
            component: () => import('../components/Chapter.vue'),
        },
        {
            name: 'comic',
            path: '/comic/:comic_id/:uuid',
            component: () => import('../components/Comic.vue'),
        },
        {
            name: 'video',
            path: '/video',
            component: () => import('../components/Video.vue'),
        },
    ],
})

export default router
