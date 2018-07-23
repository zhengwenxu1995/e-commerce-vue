import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }],
    mode: "history"
})