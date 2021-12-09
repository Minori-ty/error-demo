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
            path: '/chapter/:id',
            component: () => import('../components/Chapter.vue'),
            props($route) {
                return {
                    cover: $route.query.cover,
                    path_word: $route.query.path_word,
                }
            },
        },
        {
            path: '/comic/:uuid',
            component: () => import('../components/Comic.vue'),
            props($route) {
                return {
                    comic_path_word: $route.query.comic_path_word,
                    uuid: $route.query.uuid,
                }
            },
        },
    ],
})

export default router
