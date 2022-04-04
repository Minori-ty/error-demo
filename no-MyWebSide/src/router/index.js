import { createWebHashHistory, createRouter } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

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

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach((to, path) => {
    NProgress.done()
})

export default router
