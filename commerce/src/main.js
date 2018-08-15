// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/style/reset.css"
import "@/assets/style/iconfont.css"
import VueLazyload from "vue-lazyload"
import infiniteScroll from "vue-infinite-scroll"

Vue.config.productionTip = false

Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
        loading: "/static/loading-svg/loading-bars.svg"
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})