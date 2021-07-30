import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Learn = () => import('@/pages/index.vue')
const Teleport = () => import('@/pages/teleport.vue')
const Suspense = () => import('@/pages/suspense.vue')

const routes: Array<RouteRecordRaw> = [
    {
        name: 'Parent',
        component: Learn,
        path: '/parent',
        meta: {
            title: '父子组件',
        },
    },
    {
        name: 'Teleport',
        component: Teleport,
        path: '/teleport'
    },
    {
        name: 'Suspense',
        component: Suspense,
        path: '/suspense'
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
