import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     component: () => import('./views/插槽solt/chachao1.vue')
        // },
        // {
        //     path: '/',
        //     component: () => import('./views/插槽solt/chachao1.vue')
        // },

        {
            path: '/',
            component: () => import('./views/插槽solt/作用域插槽.vue')
        },
        {
            path: '/slot',
            component: () => import('./views/插槽solt/chachao1.vue')
        },
        {
            path: '/fuzujianfangwen',
            component: () => import('./views/组件/父组件访问子组件.vue')
        },
        {
            path: '/zidapfu',
            component: () => import('./views/组件/zidaofu.vue')
        },
        {
            path: '/fudaozi',
            component: () => import('./views/组件/fudaozi.vue')
        },
        {
            path: '/model',
            component: () => import('./views/v-model.vue')
        },
        {
            path: '/xyssz',
            component: () => import('./views/响应式数组.vue')
        },
        {
            path: '/for',
            component: () => import('./views/v-for.vue')
        },
        {
            path: '/if',
            component: () => import('./views/v-if.vue')
        },
        {
            path: '/on',
            component: () => import('./views/v-on.vue')
        },
        {
            path: '/jssx',
            component: () => import('./views/计算属性.vue')
        },
        {
            path: '/bind',
            component: () => import('./views/v-bind.vue')
        },
        {
            path: '/gouwuche',
            component: () => import('./views/图书馆购物车/图书购物车.vue')
        },

    ]
})
