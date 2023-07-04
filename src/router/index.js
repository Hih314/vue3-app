import { createRouter, createWebHistory, } from 'vue-router';

// 路由规则
const routes = [
    {
        path: '/',
        name: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: '/login',
        component: () => import(/*登录路由*/ "../components/login.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router