// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/style/reset.css"
import "@/assets/style/iconfont.css"
import VueLazyload from "vue-lazyload"
import infiniteScroll from "vue-infinite-scroll"
import {currency} from "@/util/currency.js" 
import { store } from "@/store/store.js"

Vue.config.productionTip = false
var VueCookie = require('vue-cookie')
Vue.use(VueCookie);
Vue.use(infiniteScroll);
//使用全局的过滤器
Vue.filter("currency",currency)
Vue.use(VueLazyload, {
        loading: "/static/loading-svg/loading-bars.svg"
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})