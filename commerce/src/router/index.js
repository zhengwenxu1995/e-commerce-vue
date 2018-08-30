import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/home.vue'
import ShopCar from "@/views/shopCar/shopCar.vue"
import Address from "@/views/address/address.vue"
import OrderView from "@/views/order/order.vue"

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
    },
    {
        path: '/address',
        name: 'address',
        component: Address
    },
    {
        path: '/orderview',
        name: 'OrderView',
        component: OrderView
    }
    ],
    mode: "history"
})