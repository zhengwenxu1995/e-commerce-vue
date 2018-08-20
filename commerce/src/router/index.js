import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/home.vue'
import ShopCar from "@/views/shopCar/shopCar.vue"

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/shopcar',
        name: 'shopcar',
        component: ShopCar
    }
    ],
    mode: "history"
})